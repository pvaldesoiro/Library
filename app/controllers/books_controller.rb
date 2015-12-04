class BooksController < ApplicationController
  before_action :authenticate_school!, only: [:new, :create]

  def index
    @books = Book.all.map do |book|
      book.attributes.merge(cover: book.cover.url(:thumb))
    end
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to books_path
    else
      flash[:error] = 'Something went wrong'
      render :new
    end
  end

  def download
    book = Book.find(params[:book_id])
    if book.school.students.find_by(code: params[:student_code])
      render json: { success: true, download: book.file.url }
    else
      render json: { success: false }
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :isbn, :cover, :file,
                                 :description).merge(school: current_school)
  end
end
