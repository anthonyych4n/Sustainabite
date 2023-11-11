from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return test_api_call()

def test_api_call():
    return "Hello world"

if __name__ == "__main__":
    app.run(debug=True)
