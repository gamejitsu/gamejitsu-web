import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Content = styled.button`
  align-items:flex-start;
  flex-startbutton
  background-attachment:scroll;
  background-clip:border-box;
  background-color:rgba(0, 0, 0, 0);
  background-image:linear-gradient(135deg, rgb(115, 165, 255), rgb(84, 119, 245));
  background-origin:padding-box;
  background-position-x:0%;
  background-position-y:0%;
  initial.button-showcase .btn, section .btn, section .btn:active
  background-repeat-x:;
  background-repeat-y:;
  background-size:auto;
  border-bottom-color:rgb(255, 255, 255);
  border-bottom-left-radius:4px;
  border-bottom-right-radius:4px;
  border-bottom-style:none;
  border-bottom-width:0px;
  border-image-outset:0px;
  border-image-repeat:stretch;
  border-image-slice:100%;
  border-image-source:none;
  border-image-width:1;
  border-left-color:rgb(255, 255, 255);
  border-left-style:none;
  border-left-width:0px;
  border-right-color:rgb(255, 255, 255);
  border-right-style:none;
  border-right-width:0px;
  border-top-color:rgb(255, 255, 255);
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  border-top-style:none;
  border-top-width:0px;
  box-shadow:rgba(0, 0, 0, 0.12) 0px 3px 6px -1px, rgba(77, 96, 232, 0.3) 0px 10px 36px -4px;
  box-sizing:border-box;
  color:rgb(255, 255, 255);
  cursor:default;
  display:inline-block;
  font-family:Avenir, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:20px;
  font-stretch:100%;
  font-style:normal;
  font-variant-caps:normal;
  font-variant-east-asian:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-weight:400;
  height:41px;
  letter-spacing:0.5px;
  line-height:25px;
  margin-bottom:0px;
  margin-left:16px;
  margin-right:16px;
  margin-top:0px;
  overflow-x:visible;
  overflow-y:visible;
  padding-bottom:8px;
  padding-left:16px;
  padding-right:16px;
  padding-top:8px;
  text-align:center;
  text-indent:0px;
  text-rendering:auto;
  text-shadow:none;
  text-size-adjust:100%;
  text-transform:none;
  touch-action:manipulation;
  transition-delay:0s;
  transition-duration:0.2s;
  transition-property:all;
  transition-timing-function:ease-in-out;
  user-select:none;
  vertical-align:middle;
  white-space:nowrap;
  width:166.281px;
  word-spacing:0px;
  writing-mode:horizontal-tb;
`

const Comment = ({ comment }) => (
  <Content>
    {comment.text}
  </Content>
)

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
