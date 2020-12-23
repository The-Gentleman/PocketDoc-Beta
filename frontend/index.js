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
    const button = document.querySelector("#exercise-button").addEventListener("click", createExerciseForm);
    const exerciseForm =  document.querySelector('#exercise-form-container');
    exerciseForm.addEventListener("submit", (e) => exerciseFormHandler(e))

}

function createExerciseForm(){
    const exerciseForm = `
    <br>
    <form id="create-exercise-form">
      <label>Patient Name:</label>
    <select id="exercises" name="exercises">
      <option value="1">Ted</option>
      <option value="1">Marshall</option>
      <option value="1">Lilly</option>
      <option value="1">Barney</option>
      <option value="1">Robin</option>
    </select>
      <br><br>
      <label>Exercise Name:</label>
      <input id='input-title' type="text" name="title" value=""
      placeholder="Exercise name" class="input-text">
      <br><br>
      <label>Number of Reps:</label>
      <input type="number" id="reps" name="reps" min="1" max="50"
      placeholder="reps" class="input-number">
      <br><br>
      <input id="submit" type="submit" name="submit" value="Create Exercise" class="submit">
      <br><br>

    </form>
  `
  document.querySelector('#exercise-form-container').innerHTML += exerciseForm;
}

function exerciseFormHandler(e){
    e.preventDefault();
    console.log(e);
}


