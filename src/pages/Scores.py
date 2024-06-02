from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example data
procedures = [
    {"id": 1, "title": "Engine Out 1", "description": "Incomplete", "stars": 2},
    {"id": 2, "title": "Engine Fire 2", "description": "Incomplete", "stars": 3},
    {"id": 3, "title": "Engine Out 3", "description": "Incomplete", "stars": 4},
    {"id": 4, "title": "Engine Out 4", "description": "Incomplete", "stars": 1},
]

@app.route('/api/procedures', methods=['GET'])
def get_procedures():
    # Filter procedures to only those with 3 or fewer stars
    filtered_procedures = [proc for proc in procedures if proc['stars'] <= 3]
    return jsonify(filtered_procedures)

if __name__ == '__main__':
    app.run(debug=True)
