import traceback
from flask import Blueprint, jsonify, request
import json
from connection import DB
from sqlalchemy import text
from src.models.household_data import HouseholdData, HouseholdDataSchema

HOUSEHOLD_DATA_BLUEPRINT = Blueprint("household_data_blueprint", __name__)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/get_all", methods=["GET"])
def get_all_household_data():
    try:
        data = HouseholdData().query.all()
        household_list = list()
        for household in data:
            temp = HouseholdDataSchema().dump(household)
            household_list.append(temp)
        return_obj = {
            "status": True,
            "data": household_list
        }
    except Exception as err:
        return_obj = {
            "status": False,
             "message": "Failed to fetch Household data. Please check your network connection.",
        }
    finally:
        return jsonify(return_obj)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/get_household/<id>", methods=["GET"])
def get_household_data(id):
    try:
        data = HouseholdData().query.filter_by(id=id).first()
        household = HouseholdDataSchema().dump(data)
        return_obj = {
            "status": True,
            "data": household
        }
    except Exception as err:
        return_obj = {
            "status": False,
             "message": "Failed to fetch Household data. Please check your network connection.",
        }
    finally:
        return jsonify(return_obj)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/get_pregnant", methods=["GET"])
def get_pregnant():
    try:
        data = list()
        pregnant_query = text(f"SELECT * FROM commons_db.household_data;")
        pregnant = DB.engine.execute(pregnant_query)
        for row in pregnant:

            if row['pregnant'] == True:
                data.append({
                    "members": row[8],
                    "disability": row[6],
                    "comorbidity": row[7],
                    "household_id": row[1],
                    "birthdate": row[4],
                    "gender": row[3],
                    "pregnant": row[5],
                    "household_head": row[2],
                    "id": row[0]
                })

            for member in json.loads(row['members']):
                if member['pregnant'] == True:
                    temp = {
                            "members": row[8],
                            "disability": row[6],
                            "comorbidity": row[7],
                            "household_id": row[1],
                            "birthdate": row[4],
                            "gender": row[3],
                            "pregnant": row[5],
                            "household_head": row[2],
                            "id": row[0]
                        }
                    if temp not in data:
                        data.append(temp)
        return_value = {
            "status": True,
            "data": data
        }
    except Exception as err:
        return_value = {
            "status": False,
            "message": "Failed to fetch Household data. Please check your network connection.",
        }
    finally:
        return jsonify(return_value)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/get_comorbidity", methods=["GET"])
def get_comorbidity():
    try:
        data = list()
        comorbidity_query = text(f"SELECT * FROM commons_db.household_data;")
        comorbidity = DB.engine.execute(comorbidity_query)
        for row in comorbidity:

            if row['comorbidity'] != None:
                data.append({
                    "members": row[8],
                    "disability": row[6],
                    "comorbidity": row[7],
                    "household_id": row[1],
                    "birthdate": row[4],
                    "gender": row[3],
                    "pregnant": row[5],
                    "household_head": row[2],
                    "id": row[0]
                })

            for member in json.loads(row['members']):
                if member['comorbidity'] != None:
                    temp = {
                            "members": row[8],
                            "disability": row[6],
                            "comorbidity": row[7],
                            "household_id": row[1],
                            "birthdate": row[4],
                            "gender": row[3],
                            "pregnant": row[5],
                            "household_head": row[2],
                            "id": row[0]
                        }
                    if temp not in data:
                        data.append(temp)
        return_value = {
            "status": True,
            "data": data
        }
    except Exception as err:
        return_value = {
            "status": False,
            "message": "Failed to fetch Household data. Please check your network connection.",
        }
    finally:
        return jsonify(return_value)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/get_disability", methods=["GET"])
def get_disability():
    try:
        data = list()
        diability_query = text(f"SELECT * FROM commons_db.household_data;")
        disability = DB.engine.execute(diability_query)
        for row in disability:

            if row['disability'] != None:
                data.append({
                    "members": row[8],
                    "disability": row[6],
                    "comorbidity": row[7],
                    "household_id": row[1],
                    "birthdate": row[4],
                    "gender": row[3],
                    "pregnant": row[5],
                    "household_head": row[2],
                    "id": row[0]
                })

            for member in json.loads(row['members']):
                if member['disability'] != None:
                    temp = {
                            "members": row[8],
                            "disability": row[6],
                            "comorbidity": row[7],
                            "household_id": row[1],
                            "birthdate": row[4],
                            "gender": row[3],
                            "pregnant": row[5],
                            "household_head": row[2],
                            "id": row[0]
                        }
                    if temp not in data:
                        data.append(temp)
        return_value = {
            "status": True,
            "data": data
        }
    except Exception as err:
        return_value = {
            "status": False,
            "message": "Failed to fetch Household data. Please check your network connection.",
        }
    finally:
        return jsonify(return_value)


@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/get_summary", methods=["GET"])
def get_summary():
    try:
        preg_count = 0
        dis_count = 0
        com_count = 0
        query = "SELECT * FROM commons_db.household_data;"
        entries = DB.engine.execute(query)

        for row in entries:
            if row['pregnant'] == True:
                preg_count = preg_count + 1

            for member in json.loads(row['members']):
                if member['pregnant'] == True:
                    preg_count = preg_count+1
            
            if row['comorbidity'] != None:
                com_count = com_count + 1

            for member in json.loads(row['members']):
                if member['comorbidity'] != None:
                    com_count = com_count+1
            
            if row['disability'] != None:
                dis_count = dis_count + 1

            for member in json.loads(row['members']):
                if member['disability'] != None:
                    dis_count = dis_count+1

        return_obj = {
            "status": True,
            "pregnant_count": preg_count,
            "disability_count": dis_count,
            "comorbidity_count": com_count
        }
    except Exception as err:
        return_obj = {
            "status": False,
            "message": "Failed to fetch Household data. Please check your network connection.",
        }
    finally:
        return jsonify(return_obj)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/add", methods=["POST"])
def add_household_data():
    try:
        data = request.get_json()
        household = HouseholdData(
            household_id=data['household_id'],
            household_head=data['household_head'],
            gender=data['gender'],
            birthdate=data['birthdate'],
            pregnant=data['pregnant'],
            disability=data['disability'],
            comorbidity=data['comorbidity'],
            members=data['members']
        )
        DB.session.add(household)
        DB.session.commit()
        return_value = {"status": True, "message": "Successfully added new household!"}
    except Exception as err:
        DB.session.rollback()
        print(err)
        return_value = {"status": False, "message": "Failed to add household! Household head / id already exist."}
    finally:
        DB.session.close()
        return jsonify(return_value)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/update", methods=["PATCH"])
def update_household_data():
    try:
        data = request.get_json()
        household = HouseholdData().query.filter_by(id=data['id']).first()
        household.household_id = data['household_id']
        household.household_head = data['household_head']
        household.gender = data['gender']
        household.birthdate = data['birthdate']
        household.pregnant = data['pregnant']
        household.disability = data['disability']
        household.comorbidity = data['comorbidity']
        household.members = data['members']
        DB.session.commit()
        return_obj = {
            "status": True,
            "message": "Successfully updated Household data!"
        }
    except Exception as err:
        return_obj = {
            "status": False,
            "message": "Failed to update household data. Please check your network connection."
        }
    finally:
        DB.session.close()
        return jsonify(return_obj)

@HOUSEHOLD_DATA_BLUEPRINT.route("/household_data/delete", methods=["DELETE"])
def delete_household_data():
    try:
        data = request.get_json()
        household = HouseholdData().query.filter_by(id=data['id']).delete()
        DB.session.commit()
        return_obj = {
            "status": True,
            "message": "Successfully deleted Household data!"
        }
    except Exception as err:
        print(err)
        return_obj = {
            "status": False,
            "message": "Failed to update household data. Please check your network connection."
        }
    finally:
        DB.session.close()
        return jsonify(return_obj)    