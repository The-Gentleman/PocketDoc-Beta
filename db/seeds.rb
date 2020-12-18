ted = Patient.create(name: "Ted", diagnosis: "forever single")
marshall = Patient.create(name: "Marshall", diagnosis: "tall")
lily = Patient.create(name: "Lily", diagnosis: "spendthrifter")
barney = Patient.create(name: "Barney", diagnosis: "womanizer")
robin = Patient.create(name: "Robin", diagnosis: "reporter")

Exercise.create(name: "Push ups", reps: 5, patient_id: ted.id)
Exercise.create(name: "Pull ups", reps: 10, patient_id: ted.id)
Exercise.create(name: "Rows", reps: 15, patient_id: ted.id)
Exercise.create(name: "Foam Rolling", reps: 20, patient_id: marshall.id)
Exercise.create(name: "Banded Rotations", reps: 25, patient_id: marshall.id)
Exercise.create(name: "Bird Dog", reps: 30, patient_id: marshall.id)
Exercise.create(name: "Alphabets", reps: 35, patient_id: lily.id)
Exercise.create(name: "Towel Scrunch", reps: 40, patient_id: lily.id)
Exercise.create(name: "Piriformis Stretch", reps: 45, patient_id: lily.id)
Exercise.create(name: "Bridge", reps: 15, patient_id: barney.id)
Exercise.create(name: "Cross Hearts", reps: 20, patient_id: barney.id)
Exercise.create(name: "Clamshells", reps: 25, patient_id: barney.id)
Exercise.create(name: "Hamstring Stretch", reps: 50, patient_id: robin.id)
Exercise.create(name: "Standing Hip Flexor", reps: 5,  patient_id: robin.id)
Exercise.create(name: "Straight Leg Raise", reps: 10, patient_id: robin.id)





