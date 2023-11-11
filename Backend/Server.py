from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

NinjaApiKey = 'zJdigLtik+jLFCQc8c29sQ==dp0JVzsSmD2uoo6R'

@app.route('/dish/<dish_name>', methods=['GET'])
def get_dish_info(dish_name):
    dish_info = request_dish_info(dish_name)
    if dish_info:
        return dish_info.text  # Return the content of the response
    else:
        return jsonify({'error': 'Dish not found'}), 404

def request_dish_info(dish_name):
    print("Request to retrieve recipe...")
    api_url = 'https://api.api-ninjas.com/v1/recipe?query={}'.format(dish_name)
    response = requests.get(api_url, headers={'X-Api-Key': NinjaApiKey})
    if response.status_code == requests.codes.ok:
        print("Response:", response.text)
        return response
    else:
        print("Error:", response.status_code, response.text)

if __name__ == "__main__":
    app.run(debug=True)
