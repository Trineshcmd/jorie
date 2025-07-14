from flask import Flask
from app.controllers.weather import weather_bp
from flask_cors import CORS

def weather_app():
    app = Flask(__name__)
    CORS(app) 
    app.register_blueprint(weather_bp)
    return app
