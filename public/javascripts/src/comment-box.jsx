var $ = jQuery = require('./jquery.js');
var React = require('react');
var CommentList = require('./comment-list.jsx');
var CommentForm = require('./comment-form.jsx');

module.exports = React.createClass({  
  loadCommentsFromServer: function() {
    $.ajax({
      url: 'http://localhost:3000/comments.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("Comments loaded successfully.");
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    // $.ajax({
    //   url: ????,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function(data) {
    //     console.log("Comment successfully sent to server.");
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
  },

  getInitialState: function(){
    console.log(this.props.url);
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    console.log(this.state.data);
    return (
      <div className="commentBox row">
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});
