# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Key Features

- **Curated Selection:** Sustainabites carefully curates a diverse range of delicious and nutritious meals. Our focus is on choices that not only promote individual health but also align with environmentally sustainable practices.

- **Community Involvement:** We strive to engage the community in a dialogue about sustainable and healthy eating habits. By raising awareness, we aim to contribute to overall well-being and foster a healthier planet.

- **Empowering Choices:** Users can input the name of a meal or dish, gaining access to a rich array of options for selection. Upon making a choice, users receive a detailed list featuring individual ingredients, sustainable alternatives, and a comprehensive recipe. Additionally, valuable information is presented to enlighten users about the health and sustainability benefits of specific ingredients, empowering them to make informed choices.

## How to Run

To experience Sustainabites, follow these steps:

1. **API Keys Setup:**
   - Provide API keys for the OpenAI API and Ninja API in a file named 'keys.txt' within the `./Backend/` directory. Ensure the keys follow the format: "ninja_api_key={key}\nopenai_api_key={key}"

2. **Run the Backend:**
   - Navigate to the `./Backend/` directory.
   - Run the backend server by executing 'python3 Server.py'. Ensure that the necessary Python dependencies are installed ('pip install flask', 'pip install flask_cors', 'pip install requests').

3. **Run the React App:**
   - Execute 'npm run dev' to run the React app.

## Future Deployment

In the future, we plan to streamline the deployment process to enhance accessibility. Potential strategies include deploying and hosting the application using platforms like Netlify. Additionally, we aim to leverage AWS services such as S3, Terraform, Lambda, and Boto3 to address the challenges associated with running the current app locally.

Join us on the journey towards a healthier and more sustainable lifestyle with Sustainabites!
