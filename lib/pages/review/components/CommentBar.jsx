import { Box } from 'rebass'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { commentDuration } from '.'

const getWidth = props => {
  console.log(commentDuration)
  const totalDuration = props.duration
  console.log(props)
  return (commentDuration / totalDuration) * props.containerWidth
}

const getX = props => {
  const commentTimestamp = props.comment.timestamp
  const totalDuration = props.duration
  const ratio = (commentTimestamp - commentDuration / 2) / totalDuration
  return ratio * props.containerWidth
}

function clickBarEvent(e) {
  const rect = this.containerRef.current.getBoundingClientRect()
  const x = e.clientX - rect.left
  const timestamp = Math.floor((x / this.state.containerWidth) * this.props.videoDuration)
  this.props.onMoveVideoCursor(timestamp)
}

const Container = styled(Box)`
  background-color: ${props => props.theme.primaryColor};
  position: relative;
  height: 80px;
`
const Square = styled(Box)`
  background-color: ${props => props.theme.textColor};
  left: ${props => `${getX(props)}px`};
  width: ${props => `${getWidth(props)}px`};
  height: 100%;
  position: absolute;
  border: 1px solid red;
`

class CommentBar extends React.Component {
  constructor() {
    super()
    this.containerRef = React.createRef()
    this.state = {
      containerWidth: 0
    }
  }

  componentDidMount() {
    this.setState({
      containerWidth: this.containerRef.current.offsetWidth
    })
  }

  render() {
    return (
      <Container onClick={clickBarEvent.bind(this)} ref={this.containerRef}>
        {this.props.comments.map(comment => {
          return (
            <Square
              key={comment.timestamp}
              comment={comment}
              containerWidth={this.state.containerWidth}
              duration={this.props.videoDuration}
            />
          )
        })}
      </Container>
    )
  }
}

CommentBar.propTypes = {
  comments: PropTypes.array,
  videoDuration: PropTypes.number
}

export default CommentBar