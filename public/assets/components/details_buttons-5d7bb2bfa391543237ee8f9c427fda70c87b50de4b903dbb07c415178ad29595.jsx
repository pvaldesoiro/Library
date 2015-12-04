class DetailsButtons extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('unselectBook');
  }

  unselectBook() {
    this.props.handleToggle(null);
  }

  render() {
    return (
      <div className="col-lg-12 text-center">
        <Download bookId={this.props.bookId} />
        <hr/>
        <button className="btn btn-danger" onClick={this.unselectBook}>
          Back to Library
        </button>
      </div>
    );
  }
}
