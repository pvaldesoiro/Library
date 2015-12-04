class BooksTable extends React.Component {
  constructor(props) {
    super(props);
  }

  foundInSearch(book, search) {
    return (book.title.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
            book.author.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
            book.isbn.toLowerCase().indexOf(search.toLowerCase()) === -1);
  }

  render() {
    return(
      <div className="books-table col-lg-7">
        <table className="table table-striped table-hover
                          table-condensed">
          <tbody>
            { this.props.books.map(function(book) {
              if (this.foundInSearch(book, this.props.filterText))
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
