require 'rails_helper'

RSpec.describe BooksController, type: :controller do
  describe '#index' do
    before do
      get :index
    end

    it { expect(response).to render_template(:index) }
  end

  describe '#download' do
    let(:school) { create(:school) }
    let!(:student) { create(:student, code: '12345', school: school) }
    let(:book) do
      create(:book, file: fixture_file_upload('one.txt', 'text/plain'),
                    school: school)
    end

    context 'successful download' do
      before { get :download, book_id: book.id, student_code: '12345' }

      it { expect(JSON.parse(response.body)).to include('success' => true) }
      it { expect(JSON.parse(response.body)['download']).to include('one.txt') }
    end

    context 'wrong student code' do
      before { get :download, book_id: book.id, student_code: '12346' }

      it { expect(JSON.parse(response.body)).to eq('success' => false) }
    end
  end
end
