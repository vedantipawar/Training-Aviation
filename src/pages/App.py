from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
courses = [
    {"id": 1, "name": "Emergency Procedures", "completion": 50},
    {"id": 2, "name": "Pre-Flight Procedures", "completion": 0},
    {"id": 3, "name": "CFI", "completion": 100},
    {"id": 4, "name": "Advanced Maneuvers", "completion": 75},
    {"id": 5, "name": "Navigation Techniques", "completion": 30},
    {"id": 6, "name": "Course1", "completion": 75},
    {"id": 7, "name": "Course2 Techniques", "completion": 30},
    # Add more courses as needed
]

@app.route('/api/courses', methods=['GET'])
def get_courses():
    return jsonify(courses)

if __name__ == '__main__':
    app.run(debug=True)
