import { Box } from "rebass"
import { commentDuration } from "."
import PropTypes from "prop-types"
import React, { RefObject } from "react"
import styled from "styled-components"

const getWidth = (props: any) => {
  const totalDuration = props.duration
  return (commentDuration / totalDuration) * props.containerWidth
}

const getX = (props: any) => {
  const commentTimestamp = props.comment.timestamp
  const totalDuration = props.duration
  const ratio = (commentTimestamp - commentDuration / 2) / totalDuration
  return ratio * props.containerWidth
}

const getCursorLeft = (props: any) => {
  const timestamp = props.timestamp
  const totalDuration = props.duration
  return (timestamp / totalDuration) * props.containerWidth
}

function clickBarEvent(this: any, e: any) {
  const rect = this.containerRef.current.getBoundingClientRect()
  const x = e.clientX - rect.left
  const timestamp = Math.floor((x / this.state.containerWidth) * this.props.videoDuration)
  this.props.onMoveVideoCursor(timestamp)
}

const Container = styled(Box)`
  background-color: ${(props) => props.theme.secondaryColor};
  position: relative;
  height: 80px;
`
const Square = styled<any>(Box)`
  background-color: ${(props) => props.theme.primaryColor};
  left: ${(props) => `${getX(props)}px`};
  width: ${(props) => `${getWidth(props)}px`};
  height: 100%;
  position: absolute;
  border: 1px solid ${(props) => props.theme.secondaryColor};
`

const CursorOverlay = styled<any>(Box)`
  background-color: black;
  opacity: 0.4;
  right: 0;
  left: ${(props) => `${getCursorLeft(props)}px`};
  position: absolute;
  height: 100%;
`

class CommentBar extends React.Component<any, any> {
  containerRef: RefObject<HTMLElement>

  constructor(props: any) {
    super(props)
    this.containerRef = React.createRef()
    this.state = {
      containerWidth: 0
    }
  }

  componentDidMount() {
    this.setState({
      containerWidth: this.containerRef.current && this.containerRef.current.offsetWidth
    })
  }

  render() {
    return (
      <Container onClick={clickBarEvent.bind(this)} ref={this.containerRef}>
        {this.props.comments.map((comment: any) => {
          return (
            <Square
              key={comment.timestamp}
              comment={comment}
              containerWidth={this.state.containerWidth}
              duration={this.props.videoDuration}
            />
          )
        })}
        <CursorOverlay
          timestamp={this.props.videoTimestamp}
          containerWidth={this.state.containerWidth}
          duration={this.props.videoDuration}
        />
      </Container>
    )
  }
}

export default CommentBar
