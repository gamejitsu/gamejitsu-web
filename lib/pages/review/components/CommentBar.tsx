import { Box } from "rebass"
import React, { RefObject } from "react"
import styled from "styled-components"
import { Comment } from "gamejitsu/models/review"
import { commentDuration } from "."

interface Props {
  comments: Comment[]
  videoDuration: number
  videoTimestamp: number
  onMoveVideoCursor: (timestamp: number) => void
}

interface State {
  containerWidth: number
}

interface SquareProps {
  duration: number
  containerWidth: number
  comment: Comment
}

interface CursorOverlayProps {
  duration: number
  timestamp: number
  containerWidth: number
}

const getWidth = (props: SquareProps) => {
  const totalDuration = props.duration
  return (commentDuration / totalDuration) * props.containerWidth
}

const getX = (props: SquareProps) => {
  const commentTimestamp = props.comment.timestamp
  const totalDuration = props.duration
  const ratio = (commentTimestamp - commentDuration / 2) / totalDuration
  return Math.floor(ratio * props.containerWidth)
}

const getCursorLeft = (props: CursorOverlayProps) => {
  const timestamp = props.timestamp
  const totalDuration = props.duration
  return (timestamp / totalDuration) * props.containerWidth
}

function clickBarEvent(this: CommentBar, e: React.MouseEvent) {
  const rect = this.containerRef.current && this.containerRef.current.getBoundingClientRect()
  const x = e.clientX - (rect ? rect.left : 0)
  const timestamp = Math.floor((x / this.state.containerWidth) * this.props.videoDuration)
  this.props.onMoveVideoCursor(timestamp)
}

const Container = styled(Box)`
  background-color: ${(props) => props.theme.secondaryColor};
  position: relative;
  height: 80px;
`
const Square = styled(Box)<SquareProps>`
  background-color: ${(props) => props.theme.primaryColor};
  left: ${(props) => `${getX(props)}px`};
  width: ${(props) => `${getWidth(props)}px`};
  height: 100%;
  position: absolute;
  border: 1px solid ${(props) => props.theme.secondaryColor};
`

const CursorOverlay = styled(Box)<CursorOverlayProps>`
  background-color: black;
  opacity: 0.4;
  right: 0;
  left: ${(props) => `${getCursorLeft(props)}px`};
  position: absolute;
  height: 100%;
`

class CommentBar extends React.Component<Props, State> {
  containerRef: RefObject<HTMLElement>

  constructor(props: Props) {
    super(props)
    this.containerRef = React.createRef()
    this.state = {
      containerWidth: 0
    }
  }

  componentDidMount() {
    this.setState({
      containerWidth: this.containerRef.current ? this.containerRef.current.offsetWidth : 0
    })
  }

  render() {
    return (
      <Container onClick={clickBarEvent.bind(this)} ref={this.containerRef}>
        {this.props.comments.map((comment) => {
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
