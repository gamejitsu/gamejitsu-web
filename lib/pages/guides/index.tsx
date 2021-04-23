import React from "react"
import Head from "next/head"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import { Container, MainTitle, Spacer } from "../../components/UtilsComponents"
import { TileGuide } from "./components/TileGuide"

const Guides: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - Blog`}</title>
      </Head>
      <Container>
        <Box px={[4]} py={[4]}>
          <Box>
            <MainTitle>News</MainTitle>
          </Box>
          <TileGuide
            href={"/guides/the_ultimate_tutorial_for_new_dota2_players"}
            title={"Ultimate tutorial for new Dota 2 Players - 1 / 10"}
            abstract={
              "With the recent Netflix Dota 2 series being a huge hit, I imagined that there aresome new players who want to try out Dota 2 itself but are struggling to do so because Dota 2 is notoriously hard to learn. While Dota 2 does have some new player content available on the web (and Valve is hard at work refurbishing the new player experience... hopefully), however there is a drastic lack of written content."
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/thumb_compressed_medium.jpg"
            }
            coach={"Storm"}
            pusblish_date={"04/04/2021"}
          />
        </Box>
        <Box px={[4]} pb={[4]}>
          <Box>
            <MainTitle>Guides</MainTitle>
          </Box>
          <TileGuide
            href={"/guides/7_8k_mmr_mid_puck_guide"}
            title={"7.8k MMR Mid Puck guide"}
            abstract={
              "Puck is one of the most versatile heroes in the game as it can be rotated into position 2, 3, 4 and even 5. The focus of this guide, is on position 2 Puck, arguably the most common role Puck is played in pubs. Puck can clear creep waves instantly and is able to escape from danger as long as you have great map awareness. This allows Puck to shove waves deeply without getting caught, something extremely valuable for the mid-late game phase."
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_8k_mmr_mid_puck_guide/puckwallpaper.jpg"
            }
            coach={"Gamejitsu"}
            pusblish_date={"23/04/2021"}
          />
          <TileGuide
            href={"/guides/6_3k_mmr_position_4_or_5_spirit_breaker_guide"}
            title={"6.3k MMR Pos 4/5 Spirit Breaker master guide"}
            abstract={
              "Hello everyone and welcome to this Dota 2 guide for Spirit Breaker, One of my favorite heroes and my most played. I've been meaning to write hero specific guides for a long time and thought \"why not start with the hero I know best?\" This guide will be in the form of questions I expect players would have about Spirit breaker. It's something new I wanna try so bear with me if it's not your cup of tea. Without further ado, let's begin."
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_3k_mmr_position_4_or_5_spirit_breaker_guide/sbwallpaper.jpg"
            }
            coach={"Otomo"}
            pusblish_date={"23/04/2021"}
          />
          <TileGuide
            href={"/guides/6_3k_mmr_offlane_guide_for_dummies"}
            title={"6.3k MMR’s dummy guide to Position 3"}
            abstract={
              "Out of all the roles in Dota 2, Position 3, as known as the Offlane, is probably the least popular role in the game. You could queue all roles and somehow get more offlane games than support games, especially in higher MMR games because lower MMR players may tolerate playing the Offlane because they pick semi-carries like Windranger and Sven and go farm the Offlane anyway"
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/6_3k_mmr_offlane_guide_for_dummies/axewallpaper.jpg"
            }
            coach={"Aurora"}
            pusblish_date={"23/04/2021"}
          />
          <TileGuide
            href={"/guides/puck_position_4_guide"}
            title={"The nimble drafting option - 6k MMR Puck support guide"}
            abstract={
              "Puck is a ranged intelligence hero notorious for her ability to evade capture and cheat death on the regular, while disrupting her enemies with an array of spells. Puck is one of the most mobile heroes in all of Dota, having the ability to confuse her opponents with unpredictable moves. Over the past few years, it  had always been played as an initiating core, which is a position 2 or 3. Blink Dagger and Veil of Discord was the general go-to kit, so what happened for Puck to suddenly become so versatile in drafting it can be played in 4 positions?"
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/puck_position_4_guide/wallpaper.jpg"
            }
            coach={"Gamejitsu"}
            pusblish_date={"23/04/2021"}
          />
          <TileGuide
            href={"/guides/why_you_should_be_playing_dawnbreaker_offlane"}
            title={"Why you should be playing Dawnbreaker offlane, not safelane"}
            abstract={
              "Being the latest addition to the Dota 2 universe, Valora the Dawnbreaker is tested in multiple roles, starting with the middle lane and then the safelane. However, according to a few of our coaches from Gamejitsu, She is actually, in fact, best played in the offlane."
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/why_you_should_be_playing_dawnbreaker_offlane/banner_nodesign_thumb_crop.jpg"
            }
            coach={"Storm"}
            pusblish_date={"15/04/2021"}
          />
          <TileGuide
            href={"/guides/7k_mmr_phoenix_position_5_guide"}
            title={"7k MMR Phoenix position 5 guide "}
            abstract={
              "If you've followed Singapore Major recently, you'll see iG picked 4 games of Phoenix in the grand finals, which is played by both Kaka and Oli respectively. Phoenix is a very flexible hero and is capable of playing in any role, but realistically he or she is best suited for 5. Extremely well as a 4 and occasionally as a 3. <b>This guide is assuming Phoenix as a 5. Why Phoenix? What are its strengths?"
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7k_mmr_phoenix_position_5_guide/lowq_000_banner.jpg"
            }
            coach={"Storm"}
            pusblish_date={"08/04/2021"}
          />
          <TileGuide
            href={"/guides/position_5_master_guide"}
            title={"Position 5 master guide"}
            abstract={
              "This guide intends to look more closely at position 5 and show the different ways the role can be played. I'll also provide examples of heroes who fulfill the specific types of play styles each subrole can take. I am hoping lower-ranked players who wish to increase their MMR can use this information to pick the role they are best suited for and veteran players to find new ways to enjoy Dota."
            }
            thumbnail={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/position_5_master_guide/position_5_master_guide_thumb.png"
            }
            coach={"Otomo"}
            pusblish_date={"21/01/2021"}
          />
        </Box>
        <Spacer padding={60} />
        <Footer />
      </Container>
    </>
  )
}

Guides.skipAuthentication = true

export { Guides }
