from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Read API keys from the file
with open('keys.txt') as f:
    keys = {}
    for line in f:
        parts = line.strip().split('=')
        key = parts[0]
        value = '='.join(parts[1:])
        keys[key] = value

# print(keys)

ninja_api_key = keys.get('ninja_api_key')
openai_api_key = keys.get('openai_api_key')

# TODO:
# 1.) Fix the way that ingredients are passed back to frontend
# 2.) Fix ChatGPT suggestion format
# 3.) Image generator from ChatGPT

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
    response = requests.get(api_url, headers={'X-Api-Key': ninja_api_key})
    if response.status_code == requests.codes.ok:
        print("Response:", response.text)
        return response
    else:
        print("Error:", response.status_code, response.text)

@app.route('/gpt/suggestion/', methods=['POST'])
def get_gpt_suggestion():
    try:
        # Get parameters from the request body
        data = request.get_json()
        dish_name = data.get('dish_name')
        dish_instructions = data.get('dish_instructions')
        dish_ingredients = data.get('dish_ingredients')

        # dish_name2 = "Pasta Carbonara"
        # dish_instructions2 = "Boil pasta. Cook bacon. Mix eggs, cheese, and pepper. Combine with cooked pasta and bacon."
        # dish_ingredients2 = "pasta, bacon, eggs, cheese, pepper"

        # dish_name3 = 'Vegetarian Stir-Fry'
        # dish_name3 = 'Chop vegetables. Stir-fry in a pan with soy sauce and ginger. Serve over rice.'
        # dish_ingredients3 = 'vegetables, soy sauce, ginger, rice'

        # Call ChatGPT API to get sustainable alternatives
        suggestions = call_chatgpt(dish_ingredients, dish_name)

        # Return a response with original data and sustainable alternatives
        return jsonify({
            'dish_name': dish_name,
            'dish_instructions': dish_instructions,
            'dish_ingredients': dish_ingredients,
            'sustainable_alternatives': suggestions
        })
    except Exception as e:
        return jsonify({'error': str(e)})


def call_chatgpt(ingredients, dish_name):
    try:
        request = f"Given the ingredients '{ingredients} for dish '{dish_name}', suggest more eco-friendly and sustainable alternatives. Please reply only in JSON format, where we have an outer field of 'ingredients' containing JSON mappings of old ingredients to the new ingredient replacement. Please provide a field for intructions to cook the new dish as 'instructions' with the step by step listed as an array of strings in JSON format."

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {openai_api_key}"
        }

        info = {
            "prompt": request,
            "model": "text-davinci-003",
            "max_tokens": 500,
            "temperature": 0.8
        }

        url = "https://api.openai.com/v1/completions"
        
        response = requests.post(url, headers=headers, data=json.dumps(info))
        gpt_response = response.json()
        text_string = gpt_response['choices'][0]['text']
        text_string = text_string.strip()
        print(text_string)
        return text_string
    except Exception as e:
        print(f"Error calling ChatGPT: {str(e)}")
        return {'error': 'Failed to get sustainable alternatives'}

if __name__ == "__main__":
    app.run(debug=True)
