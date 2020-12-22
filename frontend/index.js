// WHEN *SOME EVENT HAPPENS*, I WANT TO MAKE *WHAT KIND OF FETCH*, AND THEN *MAINPULATE THE DOM* IN WHAT WAY?

document.addEventListener('DOMContentLoaded', () => {
    getPatients();
    getExerciseButtons();
})

function getPatients(){
    const patientEndPoint = 'http://localhost:3000/api/v1/patients'
    // 1 of 3
    fetch(patientEndPoint)
        .then(response => response.json())
        .then(patients => {
             patients.data.forEach(patient => {
                const patientInfo = `
                <h2>Patient Name: ${patient.attributes.name}</h2>
                <h3>Patient Diagnosis: ${patient.attributes.diagnosis}</h3>
                <div id="exercise-button">
                    <button type="submit" class="btn btn-secondary">Assign an Exercise</button>
                <br><br>
                </div>
                `
        document.querySelector('#patient-container').innerHTML += patientInfo;

            })
        })
}

function getExerciseButtons(){
    const exerciseButtons = document.getElementsByClassName("btn btn-secondary");
    for (const button of exerciseButtons) {
        button.addEventListener('click', assignExercise);
    }
}


function assignExercise(){
    debugger; 
//     <div class="exercise-form-container">
//     <form id="create-exercise-form">
//       <h3>Assign an exercise</h3>
//       <input id='input-title' type="text" name="title" value=""
//       placeholder="Exercise name" class="input-text">
//       <br><br>
//       <input type="number" id="reps" name="reps" min="1" max="50"
//       placeholder="reps" class="input-number">
//       <br><br>
//     </form>
//   </div>
}


