var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
  
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },

  render: function() {
    return (
      <div className="commentForm">
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" className="large-6 columns" ref="author" placeholder="Your name" />
          <input type="text" className="large-6 columns" ref="text" placeholder="Say something..." />
          <input type="submit" className="button small radius" value="Post" />
        </form>
      </div>
    );
  }
});