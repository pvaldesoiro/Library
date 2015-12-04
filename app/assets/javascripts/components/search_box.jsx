class SearchBox extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleFilterInput');
  }

  handleFilterInput() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <div className="col-lg-5">
        <input type="text" placeholder="Title, Author, ISBN..."
               ref="filterTextInput" value={this.props.filterText}
               onChange={this.handleFilterInput} />
      </div>
    );
  }
}
