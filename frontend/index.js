// WHEN *SOME EVENT HAPPENS*, I WANT TO MAKE *WHAT KIND OF FETCH*, AND THEN *MAINPULATE THE DOM* IN WHAT WAY?

document.addEventListener('DOMContentLoaded', () => {
    getPatients();
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
// use this to capture the buttons: document.querySelectorAll('#exercise-button')



