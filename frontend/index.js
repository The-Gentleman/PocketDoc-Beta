// WHEN *SOME EVENT HAPPENS*, I WANT TO MAKE *WHAT KIND OF FETCH*, AND THEN *MAINPULATE THE DOM* IN WHAT WAY?

document.addEventListener('DOMContentLoaded', () => {
    getPatients();
    exerciseButton();
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
                `
        document.querySelector('#patient-container').innerHTML += patientInfo;

            })
        })
}

function exerciseButton(){
    const buttonContainer = `
    <div id="exercise-button-container">
        <button id="exercise-button"type="submit" class="btn btn-secondary">Assign an Exercise</button>
    </div>
    `
    const button = document.querySelector("#exercise-button");
    button.addEventListener("click", assignExercise);
}

function assignExercise(){
//     const exerciseForm = `
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
//   `
  debugger
}


