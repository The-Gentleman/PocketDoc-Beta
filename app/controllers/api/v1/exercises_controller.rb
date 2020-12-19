class Api::V1::ExercisesController < ApplicationController

    def index 
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end 

    def create
        exercsise = Exercise.new(exercise_params)
        if exercsise.save 
            render json: exercsise, status: :accepted
        else 
            render json: {errors: syllabus.errors.full_messages}, status: :unprocessible_entity 
            # unprocessible_entity is a 402 error saying that syntax is okay, 
            # but you probably failed some validations
        end 

    end 

end
