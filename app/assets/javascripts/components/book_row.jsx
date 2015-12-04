class BookRow extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('selectBook');
  }

  selectBook() {
    this.props.handleToggle(this.props.book);
  }

  render() {
    return(
      <tr>
        <td onClick={this.selectBook}>
          {this.props.book.title} <br/>
          <small> {this.props.book.author} </small>
        </td>
      </tr>
    );
  }
}
