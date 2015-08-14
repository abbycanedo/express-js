var $ = jQuery = require('./jquery.js');
var React = require('react');
var Hello = require('./hello.jsx');
var CommentBox = require('./comment-box.jsx');

var data = [
  {author: "Neil Calabroso", text: "What do you call a flirty greek philosopher?"},
  {author: "Mireya Andres", text: "What?"},
  {author: "Neil Calabroso", text: "A socraTEASE. *ba dum tss*"}
];

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('example')
);

