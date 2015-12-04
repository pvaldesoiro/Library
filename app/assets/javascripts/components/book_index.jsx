class BookIndex extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {filterText: ''};
    this._bind('handleSearch');
  }

  handleSearch(filterText) {
    this.setState({filterText: filterText});
  }

  render() {
    return (
      <div>
        <SearchBox className="col-lg-7" filterText={this.state.filterText}
                   onUserInput={this.handleSearch} />
        <BooksTable className="col-lg-7" books={this.props.books}
                    filterText={this.state.filterText}
                    handleToggle={this.props.handleToggle} />
      </div>
    );
  }
}
