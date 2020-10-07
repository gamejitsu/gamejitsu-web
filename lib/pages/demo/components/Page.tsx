import { Flex, Box } from "rebass"
import { NextPageContext, NextPage } from "next"
import { Position, Toaster, Intent } from "@blueprintjs/core"
import React, { SyntheticEvent, useRef, useState, useEffect } from "react"
import styled from "styled-components"

import { Comment } from "gamejitsu/api/types/comment"
import { CommentBar, CommentList, CommentFormNew } from "."
import { LayoutDemo } from "gamejitsu/components"
import { Review } from "gamejitsu/api/resources/review"
import { useWarnIfUnsavedChanges } from "./RefreshPageWarner"
import { AuthenticatedComponent } from "gamejitsu/interfaces"

interface Props {
  review: Review
}

const VideoContainer = styled(Box)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondaryColor};
`

const Title = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const DemoPage: AuthenticatedComponent = () => {
  useWarnIfUnsavedChanges(true)

  const reviewInitial: Review = {
    id: "0",
    comments: [
      {
        text: `Considering the draft, you are likely to go against a Drow Ranger +1 lane. The position 5 of the enemy might be hard to predict at this point, with likely candidates being:
      - Clockwerk
      - Mirana
      - Slardar
      Shadow Fiend is very likely a mid, but the other 3 heroes can be anything between a position 3, 4 or even 5.
      Your teammate in the laning phase is Windranger. While Windranger is pretty aggressive as a position 3, she doesn't have any exceptional combos with a Pudge.`,
        timestamp: 77
      },
      {
        text: `Considering you are going up against a ranged carry (Drow) with no escape mechanism, the Wind Lace is not necessarily useful since you don't really need it to kill a Drow if you've managed to hook her. A stout shield might function much better for you to stay in lane better and help do stuff like pulling / denying. Bear in mind Pudge is one of the few heroes who start with a whopping 0 armor, which means right clicks are going to hurt you a lot, and Stout Shield helps a lot in that regard.

      Clarity potions do not do well against ranged heroes as well, particularly because they can easily dispel it by simply right clicking you. Not saying it won't work, but the mistake window on a clarity is much smaller than a Mango in this case. If you are up against melee heroes, Clarity can be an okay option, especially if you are focusing more on creep pulling.
      `,
        timestamp: 89
      },
      {
        text: `Decent warding spot for a Pudge especially against a Drow, but bear in mind this ward will not protect you from a roaming Shadow Fiend with runes, so make sure to check the minimap for Shadow Fiend's positioning every 2 minutes starting min 4 when power runes start spawning.

      This ward does not give you vision on creep pulling as well. If you are able, walk towards the enemy small camp at every .39 seconds to ensure the enemy support is not pulling. If he is on the lane during this time then it is not necessary.
      `,
        timestamp: 106
      },
      {
        text: `There are multiple ways to approach a 0 minute bounty rune contest as Pudge.
      - If the enemy heroes are heroes you have a good chance to get First Blood on (if your hook lands), you want to be out of vision, hiding away to land a fog hook on the enemy target. A first blood is slightly better than a bounty rune, and if you are lucky you can have both of em.
      - If the enemy heroes are heroes you could not kill even with a hook, ideally just show your face to discourage the enemy from contesting with you.
      - If the enemy heroes are heroes that could kill you (i.e. clock, slardar), you want to stay away from the rune spot but still be in hook range so you can either hook them away (for your teammates to grab the bounty) or hook the bounty rune away. Avoid direct confrontations. Remember, you have 0 ARMOR.
      `,
        timestamp: 153
      },
      {
        text: `You've noticed that the enemy is trilaning top at the beginning, with Shadow Fiend a mid hero. This means the Drow Ranger (purple on minimap) is alone, which means you can hide in the trees to opt for an easy 2v1 First Blood.
      (Maybe not first blood but a kill, considering your SD dies shortly after)
      `,
        timestamp: 165
      },
      {
        text: `If you are attempting for a first hook (You skilled hook, so why not right?) you should ideally go towards the right side of the lane and hide in the trees there instead of the left, for multiple reasons
      - Right side trees are further away from the enemy tower and backups. (Clock TP-ed down after the first blood at top.)
      - The trees on the left side are cut, presumably by the enemy, which means less hiding space for you.
      - Clock is on the left side, which means he can immediately backup. A pudge can almost never manfight a Clock. Clock is one of the best melee manfighters on the early stage of the game, even as a support, thanks to Battery Assault.
      `,
        timestamp: 185
      },
      {
        text: `As you can see, despite landing a max range good fog hook, you could not kill the Drow Ranger, because Clock is in place to immediately mess with your engagement. You even lost your courier!
      `,
        timestamp: 192
      },
      {
        text: `While you land good hooks, you need to understand timings on using it. You want to hook Drow only when Clock is either away or too far to backup. Hooking drow here with Clock on your left will just result in Clock coming to fight you while Drow escapes. Imagine your hook coming from the right side of the screen / map, the Drow is definitely going to die because she can't run towards her Clock, and your Windranger is leaning towards the right most of the time.
      `,
        timestamp: 213
      },
      {
        text: `Eating a Mango and walking towards the enemy is basically blatantly shouting at Drow "I am going to hook you, dodge!" which is bad.
      Instead, try going into the trees on the right side and attempt a fog hook.
      `,
        timestamp: 237
      },
      {
        text: `About creep pulling in lane
      Notice that the creeps are very close towards the enemy tower, which puts Drow at a safe position while you and Windranger in a risky position, susceptible to ganks from Clockwerk. A simple Battery Assault + Cog can kill you with Drow's output. Once again, you have 0 ARMOR, and no Stout Shield.
      
      How should you pull them?
      Everytime when the enemy heroes are busy either:
      - pulling the small camp
      - farming creeps in front or under tower
      These are the best timings for you to pull the big camp closest to the lane. Simply aggro the camp at around 49 seconds and drag them towards your lane (Time is just for reference, if you are pulling later simply pull them towards the right instead of your top right.)
      
      Why pull?
      You can reset the lane equilibrium, causing creeps to meet closer to your tower (Which means you are safer and have more gank opportunities!) all while denying a creepwave-worth of farm. In fact, you should almost always pull when you have the chance as a position 4.
      `,
        timestamp: 263
      },
      {
        text: `Notice that the Clock is playing smart by physically blocking your large camp to prevent you from ever doing a pull. Do a counter play by hooking him out at around .58 seconds to prevent him blocking the camp.
      `,
        timestamp: 275
      },
      {
        text: `Feeling you couldn't do anything in the lane against a Clock? Two options present themselves here.
      - You have a Smoke of Deceit. Since you can't do anything in the lane, consider smoking or teleporting mid to attempt a gank on Shadow Fiend.
      - You can circle around and stack the enemy creepwave by aggroing and running around, but this is not recommended as a Clockwerk can catch you and solokill you in that case.
      
      Both of them will still be better than doing nothing in lane and leeching EXP off Windranger though.
      `,
        timestamp: 333
      },
      {
        text: `Good hook on creep death, but with Clock nearby, you are merely going to hook yourself into your death. In fact, you are helping the enemy start an engagement on you instead. At level 2, you still have 0 armor and Windranger most likely doesn't have Shackleshot to help you, which means you are confirmed dead shall the Clock ever get into your face.
      `,
        timestamp: 346
      },
      {
        text: `Which happens 2 seconds later, the clock gets into your face and starts Battery Assault.
      `,
        timestamp: 348
      },
      {
        text: `And voila, you're dead.
      Notice how you lose HP extremely fast while the enemy Clockwerk is god tanky? This is because contrary to Pudge, Clock has a ton of armor. Judging by the view and damage alone, Clock likely has a Stout Shield too.
      `,
        timestamp: 357
      }
    ],
    isPublished: false,
    requestId: "0",
    coachId: "0"
  }

  const [review, setReview] = useState(reviewInitial)
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoTimestamp, setVideoTimestamp] = useState(0)
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const onSaveComment = async (savedComment: Comment) => {
    const newComments = selectedComment
      ? review.comments.map((comment) => (comment === selectedComment ? savedComment : comment))
      : review.comments.concat(savedComment)
    const updatedReview = {
      ...review,
      comments: newComments
    }
    setReview(updatedReview)
    setSelectedComment(null)
  }

  const onDeleteComment = async () => {
    const newComments = selectedComment
      ? review.comments.filter((comment) => comment !== selectedComment)
      : review.comments
    const updatedReview = {
      ...review,
      comments: newComments
    }
    setReview(updatedReview)
    setSelectedComment(null)
  }

  const onSetVideoDuration = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    const duration = event.currentTarget.duration
    setVideoDuration(Math.floor(duration))
  }

  const onSetVideoTimestamp = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    const timestamp = event.currentTarget.currentTime
    setVideoTimestamp(Math.floor(timestamp))
  }

  const onSelectComment = (comment: Comment | null) => {
    setVideoTimestamp(comment !== null ? comment.timestamp : videoTimestamp)
    setSelectedComment(comment)
  }

  const onDeselectComment = () => {
    setSelectedComment(null)
  }

  const onSaveReview = async () => {
    const AppToaster = Toaster.create({
      className: "recipe-toaster",
      position: Position.TOP
    })
    try {
      AppToaster.show({
        intent: Intent.SUCCESS,
        icon: "tick",
        message: "Review saved!"
      })
    } catch (error) {
      AppToaster.show({
        intent: Intent.DANGER,
        icon: "warning-sign",
        message: "Error saving review. \
        Please try later or contact our support."
      })
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration)
      videoRef.current.currentTime = videoTimestamp
    } else {
      setVideoDuration(0)
    }
  })

  return (
    <LayoutDemo title="Coach Demo">
      <Box>
        <Flex justifyContent="center">
          <Box>
            <VideoContainer>
              <video
                ref={videoRef}
                onDurationChange={onSetVideoDuration}
                onTimeUpdate={onSetVideoTimestamp}
                width="100%"
                controls
              >
                <source
                  src={
                    "https://gamejitsu-recorder.s3.eu-west-2.amazonaws.com/videos/d13ddb7d-25ea-4255-b9ce-d7f8742d95b8.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </VideoContainer>
            <Box>
              <Box py={3}>
                <Title>MATCH NAVIGATION</Title>
              </Box>
              <CommentBar
                comments={review.comments}
                videoDuration={videoDuration}
                onVideoTimestampChange={setVideoTimestamp}
                videoTimestamp={videoTimestamp}
              />
            </Box>
            <Box py={3}>
              <Title>INSERT COMMENT BY COACH</Title>
              <CommentFormNew
                comment={selectedComment}
                onSave={onSaveComment}
                onDelete={onDeleteComment}
                onDeselect={onDeselectComment}
                timestamp={videoTimestamp}
              />
            </Box>
          </Box>
          <Box>
            <CommentList
              comments={review.comments}
              selectedComment={selectedComment}
              onSelect={onSelectComment}
              onSaveReview={onSaveReview}
            />
          </Box>
        </Flex>
      </Box>
    </LayoutDemo>
  )
}

DemoPage.skipAuthentication = true

export default DemoPage
