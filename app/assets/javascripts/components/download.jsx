class Download extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {studentCode: '', requestResponse: ''};
    this._bind('handleCodeInput', 'downloadBook', 'handleResponse');
  }

  handleCodeInput() {
    this.setState({studentCode: this.refs.studentCodeInput.value});
  }

  downloadBook() {
    var data = {
      book_id: this.props.bookId,
      student_code: this.refs.studentCodeInput.value
    };

    $.post('/books/download', data, this.handleResponse, 'JSON');
  }

  handleResponse(data) {
    if (data.success) {
      var file = data.download;
      if (isChrome() || isSafari()) {
        var link = document.createElement('a');
        link.href = file;
        link.download = '';
        link.click();
        link.remove();
      } else {
        window.open(data.download);
      }
      this.setState({requestResponse: 'ok'});
    } else {
      this.setState({requestResponse: 'error'});
    }
  }

  render() {
    return (
      <div className="row table-layout">
        <div className="table-cell">
          <small> Insert your student code to download the book </small>
          <br/>
          <input type="text" placeholder="Student code" ref="studentCodeInput"
                 onChange={this.handleCodeInput} />
          <br/>

          {this.state.requestResponse === 'ok' ?
            <small className="text-success"> Downloading book! </small> :
            this.state.requestResponse === 'error' ?
              <small className="text-danger"> Incorrect student code. </small> :
              null
          }
        </div>
        <div className="table-cell">
          <button className="btn btn-success" onClick={this.downloadBook}
                  disabled={!this.state.studentCode}>
            Download
          </button>
        </div>
      </div>
    );
  }
}
