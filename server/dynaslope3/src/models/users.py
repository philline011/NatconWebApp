"""
File containing class representation of
tables of users
"""

from flask_login import UserMixin
from marshmallow import fields, EXCLUDE
from instance.config import SCHEMA_DICT
from connection import DB, MARSHMALLOW
from src.models.sites import Sites
from src.models.organizations import UserOrganizations, UserOrganizationsSchema


class Users(DB.Model, UserMixin):
    """
    Class representation of users table
    """

    __tablename__ = "users"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    user_id = DB.Column(DB.Integer, primary_key=True)
    salutation = DB.Column(DB.String(15))
    first_name = DB.Column(DB.String(45))
    middle_name = DB.Column(DB.String(45))
    last_name = DB.Column(DB.String(45))
    # suffix = DB.Column(DB.String(45))
    nickname = DB.Column(DB.String(45))
    sex = DB.Column(DB.String(10))
    status = DB.Column(DB.Integer, nullable=True)
    birthday = DB.Column(DB.Date)
    ewi_recipient = DB.Column(DB.Integer, nullable=True)
    ground_reminder_recipient = DB.Column(DB.Integer, nullable=True)
    start_ewi_recipient = DB.Column(DB.Integer, nullable=True)

    def get_id(self):
        """Filler docstring"""
        return self.user_id

    def __repr__(self):
        return (f"Type <{self.__class__.__name__}> User ID: {self.user_id}"
                f" First Name: {self.first_name} Last Name: {self.last_name}"
                f" Status: {self.status}")

class UserProfile(DB.Model):
    """
    Class representation of user profile table
    """

    __tablename__ = "user_profile"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    id = DB.Column(DB.Integer, primary_key=True)
    user_id = DB.Column(DB.Integer, nullable=False)
    address = DB.Column(DB.String(255))
    join_date = DB.Column(DB.Date)
    designation_id = DB.Column(DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.designation.id"), nullable=False)
    designation_details = DB.relationship("Designation",
                                    backref=DB.backref(
                                        "Designation", lazy="dynamic"),
                                        lazy="select")
    pic_path = DB.Column(DB.String(450))

class Designation(DB.Model):
    """
    Class representation of user profile table
    """
    
    __tablename__ = "designation"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    id = DB.Column(DB.Integer, primary_key=True)
    designation = DB.Column(DB.String(45))

class UsersRelationship(Users):
    """
    Class representation of users relation in mobile and organization of users
    """
    __tablename__ = "users"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    organizations = DB.relationship(
        UserOrganizations, backref=DB.backref(
            "user", lazy="joined", innerjoin=True),
        lazy="subquery")

    ewi_restriction = DB.relationship(
        "UserEwiRestrictions", backref=DB.backref("user", lazy="joined", innerjoin=True),
        lazy="joined", uselist=False)

    emails = DB.relationship(
        "UserEmails", backref=DB.backref("user", lazy="joined", innerjoin=True),
        lazy="subquery")
    # user_account relationship declared on UserAccounts

    def __repr__(self):
        return f"Type relationship"


class UserOrganization(DB.Model):
    """
    Class representation of user_organization table
    """

    __tablename__ = "user_organization"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    org_id = DB.Column(DB.Integer, primary_key=True)
    user_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.users.user_id"))
    fk_site_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.sites.site_id"))
    org_name = DB.Column(DB.String(45))
    scope = DB.Column(DB.Integer, nullable=True)

    site = DB.relationship(
        Sites, backref=DB.backref("user2", lazy="select"),
        primaryjoin="UserOrganization.fk_site_id==Sites.site_id", lazy=True)

    def __repr__(self):
        return f"{self.org_name}"


class UserLandlines(DB.Model):
    """
    Class representation of user_landlines table
    """
    __tablename__ = "user_landlines"
    __bind_key__ = "comms_db_3"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    landline_id = DB.Column(DB.Integer, primary_key=True)
    user_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.users.user_id"))
    landline_num = DB.Column(DB.String(30))
    area_code = DB.Column(DB.Integer, nullable=True)
    pte_code = DB.Column(DB.Integer, nullable=True)
    remarks = DB.Column(DB.String(45))

    def __repr__(self):
        return f"Type <{self.landline_num}"


class UserTeams(DB.Model):
    """
    Class representation of user_teams table
    """
    __tablename__ = "user_teams"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    team_id = DB.Column(DB.Integer, primary_key=True)
    team_code = DB.Column(DB.String(20))
    team_name = DB.Column(DB.String(20))
    remarks = DB.Column(DB.String(45))

    def __repr__(self):
        return f"{self.team_code}"


class UserTeamMembers(DB.Model):
    """
    Class representation of user_team_members table
    """
    __tablename__ = "user_team_members"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    member_id = DB.Column(DB.Integer, primary_key=True)
    user_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.users.user_id"))
    team_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.user_teams.team_id"))

    team = DB.relationship(
        "UserTeams",
        backref=DB.backref("team_members", lazy="joined", innerjoin=True),
        lazy="subquery")

    def __repr__(self):
        return (f"Member ID : {self.members_id} | User ID : {self.users_users_id}"
                f"Dewsl Team ID : {self.dewsl_teams_team_id} \n")


class UserEmails(DB.Model):
    """
    Class representation of user_teams table
    """
    __tablename__ = "user_emails"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    email_id = DB.Column(DB.Integer, primary_key=True)
    user_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.users.user_id"))
    email = DB.Column(DB.String(45))

    def __repr__(self):
        return f"{self.email}"


class UserAccounts(DB.Model):
    """
    Class representation of user_teams table
    """
    __tablename__ = "user_accounts"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    account_id = DB.Column(DB.Integer, primary_key=True)
    user_fk_id = DB.Column(
        DB.Integer, DB.ForeignKey(f"{SCHEMA_DICT['commons_db']}.users.user_id"))
    username = DB.Column(DB.String(45))
    password = DB.Column(DB.String(200))
    is_active = DB.Column(DB.Integer, nullable=True)
    salt = DB.Column(DB.String(200))
    role = DB.Column(DB.Integer, nullable=True)

    user = DB.relationship(Users, backref=DB.backref(
        "account", lazy="raise", innerjoin=True, uselist=False), lazy="joined", uselist=False)

    def __repr__(self):
        return f"{self.user_fk_id}"


class PendingAccounts(DB.Model):
    """
    Class representation of user_teams table
    """
    __tablename__ = "pending_accounts"
    __bind_key__ = "commons_db"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    pending_account_id = DB.Column(DB.Integer, primary_key=True)
    username = DB.Column(DB.String(45))
    password = DB.Column(DB.String(200))
    first_name = DB.Column(DB.String(45))
    last_name = DB.Column(DB.String(45))
    birthday = DB.Column(DB.String(25))
    sex = DB.Column(DB.String(10))
    salutation = DB.Column(DB.String(10))
    mobile_number = DB.Column(DB.String(12))
    validation_code = DB.Column(DB.String(4))
    role = DB.Column(DB.Integer, nullable=False)

    def __repr__(self):
        return f"{self.email}"


class UserEwiRestrictions(DB.Model):
    """
    Class representation of user_ewi_restrictions table
    """

    __tablename__ = "user_ewi_restrictions"
    __bind_key__ = "comms_db_3"
    __table_args__ = {"schema": SCHEMA_DICT[__bind_key__]}

    user_id = DB.Column(DB.Integer, DB.ForeignKey(
        f"{SCHEMA_DICT['commons_db']}.users.user_id"), primary_key=True)
    alert_level = DB.Column(DB.Integer, nullable=False)

    def __repr__(self):
        return (f"Type <{self.__class__.__name__}> User ID: {self.user_id}"
                f" Alert Level: {self.alert_level}")


class UsersSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users class
    """

    birthday = MARSHMALLOW.auto_field()

    class Meta:
        """Saves table class structure as schema model"""
        model = Users
        unknown = EXCLUDE
        # NOTE EXCLUDE
        # exclude = [
        #     "mobile_numbers", "landline_numbers", "account",
        #     "marker_tags", "rainfall_tags", "issue_and_reminder"
        # ]

class UserProfileSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users class 
    """

    designation_details = MARSHMALLOW.Nested("DesignationSchema")

    class Meta:
        """Saves table class structure as schema model"""
        model = UserProfile
        unknown = EXCLUDE
        # NOTE EXCLUDE
        # exclude = [
        #     "mobile_numbers", "landline_numbers", "account",
        #     "marker_tags", "rainfall_tags", "issue_and_reminder"
        # ]

class DesignationSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Designation class
    """

    class Meta:
        """Saves table class structure as schema model"""
        model = Designation

class UsersRelationshipSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users Relationships
    """

    def __init__(self, *args, **kwargs):
        self.include = kwargs.pop("include", None)
        super().__init__(*args, **kwargs)

    def _update_fields(self, *args, **kwargs):
        super()._update_fields(*args, **kwargs)
        if self.include:
            for field_name in self.include:
                self.fields[field_name] = self._declared_fields[field_name]
            self.include = None

    birthday = fields.DateTime("%Y-%m-%d")

    mobile_numbers = MARSHMALLOW.Nested(
        "UserMobilesSchema", many=True, exclude=("user",))

    organizations = MARSHMALLOW.Nested(
        UserOrganizationsSchema, many=True)  # NOTE EXCLUDE: exclude=("user",)

    ewi_restriction = MARSHMALLOW.Nested(
        "UserEwiRestrictionsSchema", exclude=("user",))

    teams = MARSHMALLOW.Nested(
        "UserTeamMembersSchema", many=True)  # NOTE EXCLUDE: exclude=("user",)

    # landline_numbers = MARSHMALLOW.Nested(
    #     "UserLandlinesSchema", many=True, exclude=("user",))

    emails = MARSHMALLOW.Nested(
        "UserEmailsSchema", many=True, exclude=("user",))

    account = MARSHMALLOW.Nested(
        "UserAccountsSchema", many=False, exclude=("user",))

    class Meta:
        """Saves table class structure as schema model"""
        model = UsersRelationship
        # unknown = EXCLUDE
        exclude = ["account"]


class UserOrganizationSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of User Organization class
    """
    site = MARSHMALLOW.Nested("SitesSchema")

    class Meta:
        """Saves table class structure as schema model"""
        model = UserOrganization


class UserLandlinesSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of user_landlines class
    """

    user = MARSHMALLOW.Nested(UsersRelationshipSchema,
                              exclude=("landline_numbers",))

    class Meta:
        """Saves table class structure as schema model"""

        model = UserLandlines


class UserEmailsSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of user_emails class
    """

    user = MARSHMALLOW.Nested(UsersRelationshipSchema, exclude=("emails",))

    class Meta:
        """Saves table class structure as schema model"""

        model = UserEmails


class UserTeamsSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users class
    """

    team_members = MARSHMALLOW.Nested(
        "UserTeamMembersSchema", many=True, exclude=["team"])

    class Meta:
        """Saves table class structure as schema model"""
        model = UserTeams


class UserTeamMembersSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users class
    """
    team = MARSHMALLOW.Nested("UserTeamsSchema", exclude=("team_members",))

    class Meta:
        """Saves table class structure as schema model"""
        model = UserTeamMembers


class UserAccountsSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users class
    """

    user = MARSHMALLOW.Nested(UsersSchema)

    class Meta:
        """Saves table class structure as schema model"""
        model = UserAccounts


class PendingAccountsSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of Users class
    """

    class Meta:
        """Saves table class structure as schema model"""
        model = PendingAccounts


class UserEwiRestrictionsSchema(MARSHMALLOW.SQLAlchemyAutoSchema):
    """
    Schema representation of UserEwiRestrictions class
    """
    user = MARSHMALLOW.Nested(UsersRelationshipSchema)

    class Meta:
        """Saves table class structure as schema model"""
        model = UserEwiRestrictions
