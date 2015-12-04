class StudentsController < ApplicationController
  before_action :authenticate_school!, only: [:new, :create]

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to books_path
    else
      flash[:error] = 'Something went wrong'
      render :new
    end
  end

  private

  def student_params
    params.require(:students).permit(:code).merge(school: current_school)
  end
end
