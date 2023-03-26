"""
Contacts Functions Controller File
"""

import traceback
from flask import Blueprint, jsonify, request
from connection import DB
from src.utils.feedback import save_feedback
from config import APP_CONFIG
from werkzeug.utils import secure_filename
import os

MISC_BLUEPRINT = Blueprint("misc_blueprint", __name__)

DIRECTORY = APP_CONFIG["storage"]
MAX_CONTENT_LENGTH = 16 * 1024 * 1024 #16MB
ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif"]

@MISC_BLUEPRINT.route("/misc/get_files_length/<folder>", methods=["GET","POST"])
def get_files_length(folder):
    return_val = {}
    try:
        file_list = []
        isExist = os.path.exists(f"{DIRECTORY}/{folder}")
        if isExist == False:
            os.mkdir(f"{DIRECTORY}/{folder}")
        files = os.listdir(f"{DIRECTORY}/{folder}")

        return_val = {
            "status": True,
            "length": len(files)
        }
    except Exception as err:
        return_val = {
            "status": False,
            "data": []
        }
    finally:
        return jsonify(return_val)

@MISC_BLUEPRINT.route("/misc/get_files/<folder>", methods=["GET","POST"])
def get_files(folder):
    return_val = {}
    try:
        file_list = []
        isExist = os.path.exists(f"{DIRECTORY}/{folder}")
        if isExist == False:
            os.mkdir(f"{DIRECTORY}/{folder}")
        files = os.listdir(f"{DIRECTORY}/{folder}")

        for file in files:
            filename = os.path.splitext(file)[0]
            file_extension = split_tup = os.path.splitext(file)[1]
            file_stat = os.stat(f"{DIRECTORY}/{folder}/{file}")
            file_size =  file_stat.st_size / (1024 * 1024)
            file_list.append({
                "filename": filename,
                "size": file_size,
                "extension": file_extension,
                "folder": folder
            })
        return_val = {
            "status": True,
            "data": file_list
        }
    except Exception as err:
        return_val = {
            "status": False,
            "data": []
        }
    finally:
        return jsonify(return_val)

@MISC_BLUEPRINT.route("/upload/hazard_maps", methods=["GET","POST"])
def save_hazard_maps    ():
    """
    Function that save feedback
    """

    data = request.get_json()
    if data is None:
        data = request.form
    uploaded_file = None
    try:
        uploaded_file = request.files['file'] 
    except Exception as err:
        print(err)
        pass

    try:
        file_name = None
        if uploaded_file:
            extension = os.path.splitext(uploaded_file.filename)[1]
        if uploaded_file and extension not in ALLOWED_EXTENSIONS:
            feedback = 'File is not an Image'
            status = False
        else:
            file_name = None
            if uploaded_file:
                file_name = secure_filename(uploaded_file.filename)
                print("file_name:", file_name)
                uploaded_file.save(os.path.join(
                    f"{DIRECTORY}/assets/",
                    file_name
                ))
    except Exception as err:
        print(err)
   

    return jsonify({"status": True})

@MISC_BLUEPRINT.route("/upload/save_resources", methods=["GET","POST"])
def save_resources():

    data = request.get_json()
    if data is None:
        data = request.form
    uploaded_file = None
    try:
        uploaded_file = request.files['file'] 
    except Exception as err:
        print(err)
        pass

    try:
        file_name = None
        if uploaded_file:
            extension = os.path.splitext(uploaded_file.filename)[1]
        if uploaded_file and extension not in ALLOWED_EXTENSIONS:
            feedback = 'File is not an Image'
            status = False
        else:
            file_name = None
            if uploaded_file:
                file_name = secure_filename(uploaded_file.filename)
                print("file_name:", file_name)
                uploaded_file.save(os.path.join(
                    f"{DIRECTORY}/{data['folder']}/",
                    file_name
                ))
    except Exception as err:
        print(err)
    return jsonify({"status": True})

@MISC_BLUEPRINT.route("/misc/get_all_staff_users", methods=["GET"])
def get_all_staff_users():
    return_val = {}
    try:
        temp = list()
        query = "SELECT user_id, first_name, last_name FROM commons_db.users INNER JOIN commons_db.user_accounts ON commons_db.users.user_id = commons_db.user_accounts.user_fk_id;"
        entries = DB.engine.execute(query)
        for row in entries:
            temp.append({
                "user_id": row['user_id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
            })
        
        return_val = {
            "status": True,
            "data": temp
        }
    except Exception as err:
        return_val = {
            "status": False,
            "data": []
        }
    finally:
        return jsonify(return_val)

@MISC_BLUEPRINT.route("/delete_file", methods=["GET","POST"])
def delete_file():
    try:
        data = request.get_json()
        os.remove(f"{DIRECTORY}/{data['folder']}/{data['filename']}")
    except Exception as err:
        print(err)
    return jsonify({"status": True})