import styled from "styled-components"

import { FunctionComponent } from "react"
import { Comment } from "../models/review"

interface Props {
  comment: Comment
}

const Content = styled.button``

const CommentComponent: FunctionComponent<Props> = ({ comment }) => (
  <Content>{comment.text}</Content>
)

export default CommentComponent
