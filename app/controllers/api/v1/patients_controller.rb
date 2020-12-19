class Api::V1::PatientsController < ApplicationController
    
    def index 
        patients = Patient.all 
        render json: patients
    end 

    def create
        patient = Patient.new(patient_params)
        if patient.save 
            render json: patient, status: :accepted
        else 
            render json: {errors: syllabus.errors.full_messages}, status: :unprocessible_entity
        end 
    end 


    private
    def patient_params
        params.require(:patient).permit(:name, :diagnosis)
    end 
end
