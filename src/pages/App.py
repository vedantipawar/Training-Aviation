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
# Example data
procedures = [
    {"id": 1, 
     "title": "Engine Out 1", 
     "status": "complete", 
     "stars": 2, 
     "moreinfo": """
        Communication is vital in such scenarios; the pilot should contact the nearest air traffic control (ATC) or use the emergency frequency (121.5 MHz) to declare an emergency and set the transponder to 7700 to alert ATC of the emergency. Preparing for landing involves securing all seat belts, cracking open the doors slightly to prevent them from jamming upon landing, and setting up the approach while considering wind direction and obstacles. During the forced landing, flaps should be extended as necessary to control descent rate and airspeed, and the landing gear should be extended or retracted based on the terrain. The touchdown should be at the slowest possible speed, aligned with the landing surface. After landing, the pilot should evacuate the aircraft immediately if there is any indication of fire or other hazards, provide first aid to any injured passengers, and use available signaling devices to attract attention if in a remote area.
        """},
    {"id": 2, 
     "title": "Engine Fire 2", 
     "status": "complete", 
     "stars": 2,
     "moreinfo": """
        When an engine failure occurs during flight, it is crucial to stay calm and follow a systematic approach to safely manage the situation. Immediately after the engine failure, the pilot should pitch the aircraft to maintain the best glide speed, which maximizes the distance that can be glided and provides more time to identify a suitable landing site. It's essential to determine the wind direction promptly to aid in choosing an optimal landing spot and approach direction. Scanning the surroundings for flat, open areas within gliding distance, such as fields, roads without traffic, or open water, is critical. Once a suitable landing site is identified, the pilot must commit to it and plan the approach accordingly. Preparing for landing involves securing all seat belts, cracking open the doors slightly to prevent them from jamming upon landing, and setting up the approach while considering wind direction and obstacles. """},
    {"id": 3, 
     "title": "Engine Out 3", 
     "status": "complete", 
     "stars": 1,
     "moreinfo": """
        Climate change significantly impacts aviation by altering weather patterns, increasing the frequency and intensit which can pose safety risks and increase fuel consumption due to the need for rerouting. Additionally, extreme weather events such as storms, heavy rainfall, and heatwaves can disrupt flight schedules, leading to delays and cancellations. Higher temperatures also reduce air density, which can affect aircraft performance, particularly during takeoff and landing. Airports located at higher altitudes or in regions prone to extreme heat may require longer runways or operational adjustments to accommodate these changes. As the aviation industry continues to grow, addressing the challenges posed by climate change is crucial for maintaining safe and efficient air travel.
        """},
    {"id": 4, 
     "title": "Engine Out 4", 
     "status": "Incomplete", 
     "stars": 1,
     "moreinfo":"""
        Pollution is the introduction of harmful substances or contaminants into the environment, clth.
        """},
]

@app.route('/api/courses', methods=['GET'])
def get_courses():
    return jsonify(courses)



@app.route('/api/procedures', methods=['GET'])
def get_procedures():
    # Filter procedures to only those with 3 or fewer stars
    filtered_procedures = [proc for proc in procedures if proc['stars'] < 3]
    return jsonify(filtered_procedures)

@app.route('/api/procedures/<int:id>', methods=['GET'])
def get_procedure(id):
    procedure = next((p for p in procedures if p['id'] == id), None)
    if procedure:
        return jsonify(procedure)
    return jsonify({'error': 'Procedure not found'}), 404



if __name__ == '__main__':
    app.run(debug=True)
