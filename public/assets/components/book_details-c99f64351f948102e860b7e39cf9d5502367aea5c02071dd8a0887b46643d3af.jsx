class BookDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="book-details">
        <table className="table bordered-table">
          <tbody>
            <tr>
              <td> {this.props.book.title} </td>
              <td width="30%" rowSpan="3">
                <img src={this.props.book.cover} />
              </td>
            </tr>
            <tr><td> {this.props.book.author} </td></tr>
            <tr>
              <td>
                <div className="description">
                  {this.props.book.description}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr/>
        <DetailsButtons handleToggle={this.props.handleToggle}
                        bookId={this.props.book.id} />
      </div>
    );
  }
}
