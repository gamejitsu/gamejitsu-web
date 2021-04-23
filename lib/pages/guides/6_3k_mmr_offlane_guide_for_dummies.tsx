import Head from "next/head"
import React from "react"
import { Box, Flex } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
import styled from "styled-components"
import { Container, MainTitle, Spacer } from "../../components/UtilsComponents"
import Link from "next/link"
import {
  GuideImage,
  GuideHeading3,
  GuideHeading2,
  GuideHeading1,
  GuideUpdate,
  GuideParagraph
} from "./components/GuideElements"
import { WhatsNext } from "./components/WhatsNext"
import GuideCarousel from "./components/GuideCarousel"

const GuideBanner = styled.img`
  width: 100%;
  height: auto;
`
const OfflaneGuideForDummies63Mmr: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - 6.3k MMR’s dummy guide to Position 3`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          <Box display={["none", "none", "block"]}>
            <GuideBanner
              src={
                "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/6_3k_mmr_offlane_guide_for_dummies/banner.png"
              }
            />
          </Box>
          <Box>
            <MainTitle>6.3k MMR’s dummy guide to Position 3</MainTitle>
          </Box>

          <GuideParagraph>
            Out of all the roles in Dota 2, Position 3, as known as the Offlane, is probably the
            least popular role in the game. You could queue all roles and somehow get more offlane
            games than support games, especially in higher MMR games because lower MMR players may
            tolerate playing the Offlane because they pick semi-carries like Windranger and Sven and
            go farm the Offlane anyway (Which for your information, is the wrong way to play an
            Offlane).
          </GuideParagraph>
          <GuideHeading2>
            Why was Offlane called the “Hard lane”, “Suicide lane” or the “Anti-pressure” lane
            before?
          </GuideHeading2>
          <GuideParagraph>
            Offlane was a nightmare especially back in the Dota 1 days, where you will be solo-ing
            against a trilane and have arguably zero EXP. In fact, pulling side camps weren’t
            available back then before the map changed, and with two supports zoning you, staying at
            level 1 in 5 minutes is actually fairly common. Hence, heroes who can find farm in the
            worst of situations such as (ironically) a Windranger (Who will buy items like Mekansm
            and Force Staff to help her team), Axe (Who can go jungle) are preferred. Dual lanes
            weren’t as prominent back then because carries were actually protected back then instead
            of being the orphans they are now.
          </GuideParagraph>
          <GuideHeading2>What is the state of the Offlane now?</GuideHeading2>
          <GuideParagraph>
            Compared to the old days where Offlaners had no human rights, Offlaners nowadays are
            much more powerful, they make passive carries like Spectre have no human rights instead.
            Dual lanes are now prominent which gave rise to offlane duo combos such as Mars +
            Hoodwink, Dark Seer + Earth Spirit, Grimstroke + Doom… the list goes on forever. Of
            course, in rare cases, heroes that can solo an Offlane such as Puck can still be picked
            when your position 4 is a hero who wants to roam more and annoy the enemy mid laner.
          </GuideParagraph>
          <GuideHeading2>What is the job of the Offlane during the laning stage?</GuideHeading2>
          <GuideParagraph>
            Contrary to popular belief, you DO NOT focus on farming in the offlane. That’s the job
            of a position 1 and 2. Too many players made the biggest mistake of all – picking
            another core and play it as an Offlane. Notably, Windranger. Other heroes who were once
            played as core offlaners such as Nature’s Prophet, Lone Druid, Tiny etc no longer fit
            the meta due to the shift towards dual lanes. Back in the days where trilanes were a
            thing, heroes like Nature’s Prophet and Lone Druid can mess with the creep equilibrium
            with their summons. Nowadays however where offlanes have more human rights than even the
            enemy carries, the job of an offlane is to make the carry’s life as miserable as
            possible while getting their core items quickly to contribute to teamfights. That also
            means you want to attract as much attention as possible during the early to mid game,
            because you want your other cores to farm better than the opposing cores (and suffer
            less). Carries in this meta are for masochists, while offlanes are for sadists
          </GuideParagraph>
          <GuideHeading2>What is the job of an offlane AFTER the laning stage?</GuideHeading2>
          <GuideParagraph>
            Offlaners are typically the teamfight initiators, wave pushers, splitpushers, strategic
            map control heroes. In very rare cases, an Offlane who focuses on damage output can
            work, but only if your other cores are semi-cores who doesn’t take up much farm and are
            generally weaker lategame, such as a Batrider mid with a Lycan carry. In these cases,
            heroes like Windranger and Nature’s Prophet actually works. However, you rarely see such
            drafts in pub games.
          </GuideParagraph>
          <MainTitle>Here are a few types of Offlane playstyles.</MainTitle>
          <GuideHeading1>
            Initiators / Crowd control: Axe, Centaur, Slardar, Tidehunter...
          </GuideHeading1>
          <GuideHeading2>
            Recommended for starters, as initiators are valuable in almost every draft.
          </GuideHeading2>
          <GuideParagraph>
            Initiators are generally heroes who rely mainly on their spells (and very likely, a
            Blink Dagger) as initiation. As you will be jumping into the entire enemy team, items
            that increase your survivability instead of damage is generally preferred, except Blade
            Mail for Axe which is arguably core. These heroes can also be picked in the draft early
            to ensure your other lanes get good matchups because initiators aren’t that reliant on
            lane matchups. Even if your Slardar gets stomped badly by that raging Ursa during the
            laning stage, you can still provide significant value to your team the moment you grab
            your core items such as Blink, Pipe, Crimson Guard or even Aghanims for some heroes.
          </GuideParagraph>
          <GuideHeading2>
            I am having trouble picking my pair of sneakers? Should I go for Yeezys, Ultraboosts,
            Nmds or Airmaxes? (Boots)
          </GuideHeading2>
          <GuideParagraph>
            Phase Boots were once considered the best boots for Offlaners but due to recent nerfs on
            armor, it is more balanced, hence you can choose between Phase, Treads and Tranquils.
            Tranquils will be your primary choice if you flunked your laning stage however. Most
            position 3s have low starting mana pool, but this issue can generally be solved with a
            simple Magic Stick / Wand pickup. If you are struggling a lot with magic damage,
            especially when the enemy draft is magic-oriented, consider rushing a Hood right after
            Boots instead of Blink.
          </GuideParagraph>
          <GuideHeading2>When to get Blink, and when to not?</GuideHeading2>
          <GuideParagraph>
            Let’s talk about Blink Dagger. It should be noted that Blink Dagger is generally
            considered core in most games by Axe, Centaur but contrary to popular belief, it is not
            core in every single game. If your team doesn’t lack initiators (Think a mid Batrider
            and position 4 Nyx who decided to go Blink), then you can go for Hood or Vanguard first.
            Blink provides 0 stats aside from the active. Blink is worthless if you have a ton of
            people with initiation but no damage to follow up. This is also why in rare cases you
            see some Legion Commanders skipping Blink for Pipe / Armlet / Blademail. Spending 2k
            plus gold to jump into enemies then realise you have no damage to follow up your
            initiation will be extremely embarrassing (and will likely cause you to feed).
          </GuideParagraph>
          <GuideHeading2>Should offlaners pick up BKB?</GuideHeading2>
          <GuideParagraph>
            BKB is an item that often ignored by Offlane players. In fact, while BKB is considered a
            must-buy in almost every game by position 1 and position 2s, position 3s generally think
            a Pipe can solve their magic damage woes, but that is not entirely correct. A BKB can
            guarantee you being able to land your initiation spells (Enigma) or even dish out some
            damage on heroes such as a Mars. While Pipe and BKB can actually be bought together, it
            may be wise to try to pick one out of the two because the stats they bring to yourself
            are actually pretty negligible.
          </GuideParagraph>
          <GuideHeading2>How should I be playing for this category of offlaners?</GuideHeading2>
          <GuideParagraph>
            As an initiation-type Offlane, You should focus on tormenting the enemy carry during the
            laning stage as much as possible. Heck, you should gladly sacrifice your farm if that
            means the enemy carry doesn’t get farm as well. Go for aggressive plays, trade kills,
            trade HP so the carry is always low (which also means he’ll hug his tower instead of
            trying to farm) and have your position 4 either focus on pressuring lanes with you or
            spam pulls. For heroes like Centaur or Tidehunter, you should reward the enemy carry
            with casual Anchor Smashes or Double-edges for their bravery in picking a carry against
            you. These heroes generally also have jungling potential, which also helps as a fallback
            option. The downside of these heroes however, is that they do not have enough damage
            output to kill a core mid-late game, and will have to rely on his or her team for
            follow-up damage. Heroes like Axe and Slardar are great in small-scale skirmishes and
            pickoffs due to their low cd on Berserker’s Call and Crush, while heroes like Centaur
            and Tidehunter are great in large-scale teamfights due to Ravage and Stampede. For new
            Offlane players, I will recommend Axe and Slardar over Tidehunter, simply because
            Tidehunter’s initiation has a much smaller mistake tolerance. One bad ravage and you’re
            basically useless for around two minutes.
          </GuideParagraph>
          <br />
          <GuideHeading1>High damage output position 3s: Furion, Windranger, Ursa...</GuideHeading1>
          <GuideParagraph>
            The characteristic of this type of position 3s is that they have damage, but they’re
            relatively weak in terms of damage and control. As mentioned above, these offlaners are
            only recommended if your other cores are bad lategamers or lacks damage. These heroes
            should also be paired with a position 4 who can either tank or initiate, or both at
            best. As you will be farming in the offlane, you will want to farm like a position 1 or
            2.
          </GuideParagraph>
          <GuideHeading2>Can I pick these heroes every game?</GuideHeading2>
          <GuideParagraph>
            Not recommended. You might end up in multiple games where your team has no real
            initiation / frontline tank, which will both make your other ranged cores struggle
            heavily in teamfights regarding positioning, and your team will very likely only be able
            to play reactively as you will rely on the enemy to start fights, which is obviously not
            great especially if the enemy initiation instantly takes out 1 or 2 of your heroes. In
            fact, this category of offlane heroes often have terrible survivability and die
            immediately upon getting stunned.
          </GuideParagraph>
          <GuideHeading2>What is the job of output-type offlaners?</GuideHeading2>
          <GuideParagraph>
            As mentioned, your job is to trade farm during the laning stage. While you might provide
            some harass and pressure for the enemy carry, you likely lack kill potential unless the
            enemy carry is dumb. You harass the carry by mainly right-clicks so that you can outfarm
            him (Ursa is an exception because Ursa has a ton of kill potential). During mid-late
            teamfights, your job is to either find a good position and dish out damage (Nature’s
            Prophet), take towers (Lycan offlane) or pick off key targets (Windranger and Nature’s
            Prophet) depending on what your team needs you to do. Not recommended for new offlane
            players.
          </GuideParagraph>
          <br />
          <GuideHeading1>
            Strategic type position 3: Elder Titan, Treant, Veno, Pheonix, Enigma...
          </GuideHeading1>
          <GuideParagraph>
            These position 3s are so unique they might be played like a position 4 more like a
            position 3 in some games, but end up like a position 2 in rare cases too. They vary in
            terms of laning power.
          </GuideParagraph>
          <GuideHeading2>What are these heroes about?</GuideHeading2>
          <GuideParagraph>
            These heroes generally have a unique niche they fit in. Elder Titan is both a good
            teamfight hero as well as having the potential to turn into a carry and whack-a-mole
            everyone with his trusty briefcase, Treant Protector provides crowd control, team buffs
            and most importantly vision, Venomancer provides both scouting abilities and teamfight
            presence, Phoenix provides lane dominance and teamfight abilities, primarily
            counter-initiation abilities. Enigma is extremely unique, it (he? it? Not a she I am
            sure) can be played as a pushing core, an initiator with BKB, a counter-initiator for
            obvious reasons as well and most importantly, as a scare tactic.
            <br />
            These heroes are generally picked either into specific lineups, or picked late in the
            draft for maximum effectiveness. Teams like OG like these heroes for their unorthodox
            drafts.
          </GuideParagraph>
          <GuideHeading2>Can I learn these heroes as a new Offlaner?</GuideHeading2>
          <GuideParagraph>
            They are great in their respective niches, but the most amount of hero spammers also
            fall into this category. Phoenix spammers, Enigma spammers, you name it. This basically
            means you need to train a lot on a single hero to be able to understand how they could
            work in various situations. I wouldn’t recommend them for starters because even by
            learning how Phoenix works in the offlane with like 200 games, you might not be able to
            play conventional offlaners to a respectable level despite being a god with Phoenix
            simply because these offlane heroes are way too specialized in playstyles.
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch01"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/6_3k_mmr_offlane_guide_for_dummies"
            }
            picturesUrl={["c01_001_enigma.jpg"]}
            pictureCaption={[
              "The huge issue of playing these heroes is that not everyone knows how to play them to their maximum potential, but almost everyone knows how to counter them on the basics. In this game, for example, the Enigma had to grab both a BKB and a Linkens, simply because the enemy has a ton of disables to disrupt a Black Hole, while Linkens is simply there to ensure Rubick doesn't steal it. You will need to understand the hero on an advanced level before you can start gaining a lot of MMR from it. On the plus side though, these heroes are generally extremely fun hence you won't get sick of spamming them."
            ]}
          />
          <br />
          <GuideHeading1>Hybrid position 3s: Puck, Beastmaster, Mars...</GuideHeading1>
          <GuideParagraph>
            These position 3s can fit into multiple criteria and can be played as either an
            initiator, a damage-dealer or even a strategic teamfighter. These are generally the
            preferred picks for a lot of people due to them dominating the current metagame.
            However, they require lots of training to be played effectively precisely because of how
            versatile they are. Not recommended for new offlaners (Maybe except Mars, this hero is
            ridiculously broken in the offlane now)
          </GuideParagraph>

          <GuideHeading2>Why are these heroes broken?</GuideHeading2>
          <GuideParagraph>
            Puck is broken in the sense that it provides great pickoff abilities with much lower CD
            compared to others, and the versatility it brings into the draft. Puck can be played as
            a position 2/3/4/5 and enemies will have no idea what your Puck pick actually means.{" "}
            <br /> Mars on the other hand is not just versatile in the sense that he provides high
            damage, laning presence, a decent waveclear and a huge AoE control on a low cooldown,
            the new Aghanims is also ridiculous in the sense that you can pick it up almost every
            game and do wonders with it.
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch02"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/6_3k_mmr_offlane_guide_for_dummies"
            }
            picturesUrl={["c02_001_mars.jpg"]}
            pictureCaption={[
              "Versatility compared to meta presence is the scariest out of all. Mars can even pick up Euls against mobile meta targets such as a Void Spirit, simply because he can almost ensure a good Spear of Mars on the target."
            ]}
          />
          <br />
          <GuideHeading2>Drafting summary</GuideHeading2>
          <GuideParagraph>
            To be a better position 3 player, you should have a certain level of understanding
            regarding drafting, and part of that understanding will be reflected on your hero picks
            in various matchups. Picking Windranger or Nature’s Prophet every game as an offlane and
            steal valuable farm away from your cores might lose you a lot more games than you think,
            despite you doing well in the game itself.
          </GuideParagraph>
          <GuideHeading2>What should I be looking at when I pick my hero?</GuideHeading2>
          <GuideParagraph>
            Here are a few questions you should always ask yourself during the laning phase.
            <ol>
              <li>
                If I get countered, can my hero still work in this matchup (to some degree?) Think
                heroes like Enigma, Phoenix
              </li>
              <li>
                Are my team struggling with damage outputs? If they aren’t, avoid picking
                output-type carries to contest farm with your own team.
              </li>
              <li>
                Check enemy drafts for information. Who is likely going to be their position 5
                support or position 1 carry? What hero can I go for to easily win the laning stage?
              </li>
            </ol>
            <br />
            However, while having a great matchup is good on paper, remember the game isn’t all
            about laning, or else everyone would’ve been picking Ursa offlane against almost every
            single melee carries. Bear in mind even if you pick a hero that stomps the enemy carry
            during the laning stage, he will go jungle or rotate to your safelane afterwards to try
            and push towers, then expand his advantage there. You need to be sure your pick will be
            useful even after the laning stage. There are a ton of “win lane, lose game” heroes in
            Dota 2.
          </GuideParagraph>
          <GuideHeading2>Laning as an Offlaner</GuideHeading2>
          <GuideParagraph>
            Offlaners have to master the basics on last hitting and creep aggro. For instance, the
            ranged creep will be your top priority as an offlaner, especially during the first few
            levels. A lot of lanes are decided solely by the first ranged creep due to the extra EXP
            it provides.
            <br />
            As an offlaner, you will generally want to aggro the enemy creeps the moment the creeps
            meet so that the enemy melee creeps can focus on your ranged creep, and you should try
            your best to deny it, as well as preventing the enemies from denying their own ranged
            creep. EXP gap can be created just by denying ranged creeps of the first few waves. In
            fact, you might want to commit spells just so that you can secure the ranged creep.
            (Especially if you’re a Mars, you can just stunlock the enemy carry, last hit the enemy
            ranged creep and deny your own ranged creep at the same time.)
          </GuideParagraph>
          <GuideHeading2>Pushing and pulling</GuideHeading2>
          <GuideParagraph>
            Pushing the wave and pulling side camps are also very important in affecting the scales.
            As a position 3, when should you be pushing the wave as hard as possible? These are two
            good scenarios for you to consider.
            <ol>
              <li>
                Against ranged carries, pushing the wave and then pull side camps is the best way to
                lane against them. There is almost no chance a conventional melee offlaner can lane
                well against a Drow + 1 lineup if they are competent. Pushing the wave also
                interferes with their last hitting because they will need to last hit under towers.
                Pulling side camps has the potential to deny a full creepwave worth of EXP and gold,
                while allowing your position 4 to get some farm as well. To ensure your side pulls
                succeed, you will need to either have vision so you can effectively prevent the
                enemy position 5 from disrupting the pull. You should also ideally pressure the
                enemy position 5 and keep his or her health low so he or she couldn’t risk
                interfering or risk dying. The enemy position 5 will likely try to pull their own
                small camp in an effort to disrupt the creep equilibrium as well, hence your
                position 4 should also watch out for that.
              </li>
              <li>
                Another situation is when your matchup is so terrible, you couldn’t afford to lane
                directly against the enemy. Think of this when you’re against an Ursa or Monkey
                King. With such terrible laning odds, your position 4 should ideally let you solo
                the first wave of EXP if possible so you get level 2 quickly. Do not hesitate to
                sacrifice some of your health and regen consumables just for the first wave of
                creeps, especially if you’re a level-reliant position 3 like a Tide or an Underlord.
                Afterwards, you will just have to push as much as possible whenever given the chance
                while your position 4 pulls in a bid to outfarm the enemy strategically instead of
                by direct confrontation.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch03"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/6_3k_mmr_offlane_guide_for_dummies"
            }
            picturesUrl={["c03_001_beastmaster.jpg"]}
            pictureCaption={[
              "Getting outlaned is a normal thing for Offlaners, especially if you picked early and got yourself counterpicked. Don't worry about losing farm or levels during the laning stage especially if you're a hero that can bring your team benefits during the midgame. For offlaners that focus solely on dominating the lane like a Timbersaw or Ursa, having a bad laning stage may potentially render you useless so keep that in mind when you pick your heroes."
            ]}
          />
          <GuideParagraph>
            If all else fails, such as in scenarios where you’re zoned badly and your position 4
            couldn’t even pull, have your position 4 creepskip.
          </GuideParagraph>
          <GuideHeading2>What is creepskip, and how does it help with my laning?</GuideHeading2>
          <GuideParagraph>
            Creepskip, also called cutting or stacking the enemy creepwave means your position 4
            circles around behind enemy towers to drag their wave of creeps around, then release
            them or drag them all the way back to your tower so that you will have two waves of
            enemy creeps pushing the lane. This ensures that the enemy creepwaves push hard enough
            for you to farm them safely under your tower. The enemy position 5 will likely react to
            this by pulling their small camp or even the side camp, hence you should have wards or
            vision to ensure your opponents do not even the scales with these tactics.
          </GuideParagraph>
          <br />
          <br />
        </Box>
        <Flex>
          <Box pr={[3]}>
            <Link href="/guides">
              <div style={{ fontWeight: "bold", cursor: "pointer" }}>&larr;Back</div>
            </Link>
          </Box>
          <Box>
            <Link href="#start">
              <div style={{ fontWeight: "bold", cursor: "pointer" }}>&uarr;Top</div>
            </Link>
          </Box>
        </Flex>
        <WhatsNext />
        <Spacer padding={60} />
        <Footer />
      </Container>
    </>
  )
}

OfflaneGuideForDummies63Mmr.skipAuthentication = true

export { OfflaneGuideForDummies63Mmr }
