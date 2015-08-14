var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">
            {this.props.author}
        </h4>
          <blockquote>
            {this.props.children}
          </blockquote>
      </div>
    );
  }
});