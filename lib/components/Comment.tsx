import { FunctionComponent } from "react"
import { Comment } from "../models/review"
import styled from "styled-components"

interface Props {
  comment: Comment
}

const Content = styled.button`
`

const CommentComponent: FunctionComponent<Props> = ({ comment }) => (
  <Content>{comment.text}</Content>
)

export default CommentComponent
