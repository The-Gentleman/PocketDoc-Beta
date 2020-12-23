class Api::V1::ExercisesController < ApplicationController

    def index 
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end 

    def create
        exercise = Exercise.new(exercise_params)
        if exercise.save 
            render json: ExerciseSerializer.new(exercise), status: :accepted 
        else 
            render json: {errors: syllabus.errors.full_messages}, status: :unprocessible_entity 
            # unprocessible_entity is a 402 error saying that syntax is okay, 
            # but you probably failed some validations
        end 
    end 


    private
    def exercise_params
        params.require(:exercise).permit(:name, :reps, :patient_id)
    end

end
