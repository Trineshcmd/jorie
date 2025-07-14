from flask import Blueprint, jsonify
import json
import os

weather_bp = Blueprint('weather', __name__)

@weather_bp.route('/api/weather', methods=["GET"])
def weather_get():
    file_path = os.path.join(os.path.dirname(__file__), '../../model/data.json')
    with open(file_path) as f:
        data = json.load(f)
    return jsonify(data)
