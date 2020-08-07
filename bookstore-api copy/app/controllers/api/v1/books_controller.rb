class Api::V1::BooksController < Api::V1::ApiController
  before_action :set_book, only: [:update, :destroy]

  def index
    render json: Book.all 
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.erros, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
  end

  private
    def set_book
      @book = Book.find(params[:id])
    end
    
    def book_params
      params.require(:book).permit(:title, :author, :category)
    end

end
