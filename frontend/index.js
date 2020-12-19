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
            console.log(patients)
        })

}
