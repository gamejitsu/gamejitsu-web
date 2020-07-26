import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"

import { Box, Flex } from "rebass"
import { Comment } from "gamejitsu/api/types/comment"
import { lighten } from "polished"
import { formatTimestamp } from "gamejitsu/utils/duration"
import { Button } from "gamejitsu/components"
import { Classes, Dialog, Tooltip } from "@blueprintjs/core"

interface Props {
  comments: Comment[]
  selectedComment: Comment | null
  onSelect: (comment: Comment | null) => void
  onSaveReview: () => void
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
  flex-grow: 1;
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

const CommentList: FunctionComponent<Props> = ({
  comments,
  selectedComment,
  onSelect,
  onSaveReview
}) => {

  const [isSaveReviewOpen, setIsSaveReviewOpen] = useState(false)

  const onSelectListItem = (comment: Comment) =>
    comment === selectedComment ? onSelect(null) : onSelect(comment)

  const compareTimestamp = (a: Comment, b: Comment) => a.timestamp - b.timestamp

  const sortedComments = comments.sort(compareTimestamp)

  const handleCloseNoSaveReview = () => {
    setIsSaveReviewOpen(false)
  }
  const handleSaveReviewClose = () => {
    onSaveReview()
    setIsSaveReviewOpen(false)
  }
  const handleSaveReviewOpen = () => {
    setIsSaveReviewOpen(true)
  }
  return (
    <Container ml={4}>
      <Header>
        <Flex ml={3} width="100%">
          <CommentListTitle>COMMENTS ADDED BY COACH</CommentListTitle>
          <Button text="Save review" type="button" onClick={handleSaveReviewOpen} />
          <Dialog
            className={Classes.DIALOG}
            icon="info-sign"
            onClose={handleCloseNoSaveReview}
            title="Save review confirmation"
            autoFocus={true}
            canEscapeKeyClose={true}
            canOutsideClickClose={true}
            enforceFocus={true}
            isOpen={isSaveReviewOpen}
            usePortal={true}
          >
            <div className={Classes.DIALOG_BODY}>
              <p>
                Are you sure you want to save the review? Please click SAVE to approve the saving.
              </p>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
              <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                <Tooltip content="This button is hooked up to close the dialog.">
                  <Button text="CLOSE" onClick={handleCloseNoSaveReview}/>
                </Tooltip>
                <Tooltip content="This button is hooked up to save the review and close the dialog.">
                  <Button text="SAVE REVIEW" onClick={handleSaveReviewClose}/>
                </Tooltip>
              </div>
            </div>
          </Dialog>
        </Flex>
      </Header>
      <Box>
        <ul>
          {sortedComments.map((comment, index) => (
            <Flex key={index.toString()}>
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
                  <ListItem comment={comment} selectedComment={selectedComment}>
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
