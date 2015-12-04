class Books extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleToggle');
    this.state = {
      books: this.props.data,
      selected_book: null,
    };
  }

  handleToggle(book) {
    this.setState({selected_book: book});
  }

  render() {
    return(
        <span>
          <h2 className="text-center">
            {this.state.selected_book ? this.state.selected_book.title : 'Books'}
          </h2>
          { this.state.selected_book ?
            <BookDetails book={this.state.selected_book}
                         handleToggle={this.handleToggle} />
            :
            <BookIndex books={this.state.books}
                       handleToggle={this.handleToggle}/>
          }
        </span>
    );
  }
}
Books.propTypes = {data: React.PropTypes.array};
Books.defaultProps = {data: []};
