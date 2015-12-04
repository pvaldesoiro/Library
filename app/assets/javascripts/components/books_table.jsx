class BooksTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="books-table col-lg-7">
        <table className="table table-striped table-hover
                          table-condensed">
          <tbody>
            { this.props.books.map(function(book) {
              if (book.title.indexOf(this.props.filterText) === -1 &&
                  book.author.indexOf(this.props.filterText) === -1 &&
                  book.isbn.indexOf(this.props.filterText) === -1)
                return null;
              else
                return <BookRow key={book.id} book={book}
                                handleToggle={this.props.handleToggle} />;
            }.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}
