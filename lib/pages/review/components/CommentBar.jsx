import { Box } from 'rebass'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const getWidth = props => {
  const totalDuration = props.duration
  return (10 / totalDuration) * props.containerWidth
}

const getX = props => {
  const commentTimestamp = props.comment.timestamp
  const totalDuration = props.duration
  const ratio = commentTimestamp / totalDuration
  return ratio * props.containerWidth
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
    this.state = {
      containerWidth: 0
    }
  }

  render() {
    return (
      <Container
        ref={ref => {
          const width = ref ? ref.offsetWidth : 0
          if (ref && this.state.containerWidth !== width) {
            this.setState({ containerWidth: width })
          }
        }}
      >
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
