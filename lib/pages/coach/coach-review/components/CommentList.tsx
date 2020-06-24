import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Box, Flex } from "rebass"
import { Comment } from "gamejitsu/api/types/comment"
import { lighten } from "polished"
import { formatTimestamp } from "gamejitsu/utils/duration"

interface Props {
  comments: Comment[]
  selectedComment: Comment | null
  onSelect: (comment: Comment | null) => void
}

interface ListItemProps {
  comment: Comment
  selectedComment: Comment | null
}

const Container = styled(Box)`
  width: 800px;
  max-height: 660px;
  overflow: auto;
  &::scrollable-element {
    scrollbar-color: red yellow;
  }
  scrollbar-color: red yellow;
`

const ListItemContainer = styled(Box)`
  height: 120px;
  flex: 1;
  background-color: #212121;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-top: 0;
`

const ListItem = styled.li<ListItemProps>`
  background-color: ${({ comment, selectedComment, theme }) =>
    comment !== selectedComment ? "transparent" : lighten(0.1, theme.lightBackgroundColor)}; };
  cursor: pointer;
  padding: 20px;
`

const CommentListTitle = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const Header = styled(Flex)`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.secondaryColor};
  height: 60px;
  align-items: center;
`

const TimeTag = styled(Box)`
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
`

const LessExpandTag = styled(Box)`
  color: white;
  font-weight: bold;
  font-size: 14px;
`

const CommentList: FunctionComponent<Props> = ({ comments, selectedComment, onSelect }) => {
  const onSelectListItem = (comment: Comment) =>
    comment === selectedComment ? onSelect(null) : onSelect(comment)

  const compareTimestamp = (a: Comment, b: Comment) => a.timestamp - b.timestamp

  const sortedComments = comments.sort(compareTimestamp)

  const fakeComment = {
    text: "Lorem ipsum dolor sit amet, go mid and pick the regeneration rune instead",
    timestamp: 12343244
  }

  return (
    <Container ml={4}>
      <Header>
        <Box ml={3}>
          <CommentListTitle>COMMENTS ADDED BY COACH</CommentListTitle>
        </Box>
      </Header>
      <Box>
        <ul>
          <Flex>
            <ListItemContainer>
              <Flex alignItems="center">
                <TimeTag ml={4} mt={3}>
                  4.44
                </TimeTag>
                <LessExpandTag ml="auto" mr={4} mt={3}>
                  EXPAND
                </LessExpandTag>
              </Flex>
              <Box ml={3}>
                <ListItem key={10000} comment={fakeComment} selectedComment={selectedComment}>
                  <a onClick={onSelectListItem.bind(null, fakeComment)}>{fakeComment.text}</a>
                </ListItem>
              </Box>
            </ListItemContainer>
          </Flex>
          {sortedComments.map((comment, index) => (
            <Flex>
              <ListItemContainer>
                <Flex alignItems="center">
                  <TimeTag ml={4} mt={3}>
                    {formatTimestamp(comment.timestamp)}
                  </TimeTag>
                  <LessExpandTag ml="auto" mr={4} mt={3}>
                    EXPAND
                  </LessExpandTag>
                </Flex>
                <Box ml={3}>
                  <ListItem
                    key={index.toString()}
                    comment={comment}
                    selectedComment={selectedComment}
                  >
                    <a onClick={onSelectListItem.bind(null, comment)}>{comment.text}</a>
                  </ListItem>
                </Box>
              </ListItemContainer>
            </Flex>
          ))}
        </ul>
      </Box>
    </Container>
  )
}

export default CommentList
