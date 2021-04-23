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
const PuckPosition4Guide: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - The nimble drafting option - 6k MMR Puck support guide`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          <Box display={["none", "none", "block"]}>
            <GuideBanner
              src={
                "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/puck_position_4_guide/banner.png"
              }
            />
          </Box>
          <Box>
            <MainTitle>The nimble drafting option - 6k MMR Puck support guide</MainTitle>
          </Box>
          <GuideParagraph>
            Puck is a ranged intelligence hero notorious for her ability to evade capture and cheat
            death on the regular, while disrupting her enemies with an array of spells. Puck is one
            of the most mobile heroes in all of Dota, having the ability to confuse her opponents
            with unpredictable moves.
            <br />
            Over the past few years, it (I thought Puck was a he, but apparently it is an “it”?) had
            always been played as an initiating core, which is a position 2 or 3. Blink Dagger and
            Veil of Discord was the general go-to kit, so what happened for Puck to suddenly become
            so versatile in drafting it can be played in 4 positions (everything except carry)?
          </GuideParagraph>
          <GuideParagraph>
            In fact, this ridiculous… thing… is now the most picked hero in Immortal bracket, with a
            51% winrate. Having slightly over 50% winrate is acceptable, but being that while being
            the most picked hero probably means the hero is overpowered in a sense.
          </GuideParagraph>
          <br /> <br />
          <GuideHeading1>Why is Puck so versatile now?</GuideHeading1>
          <GuideParagraph>
            <ul>
              <li>
                The metagame is shifting itself towards a multi-core playstyle, where supports who
                are strong during laning but weak after are not preferred. (Think heroes like
                Silencer, Shadow Demon and even Grimstroke who’s been having terrible winrates
                lately without specific draft combos.)
              </li>
              <li>
                Supports also have the job of shoving waves now, compared to old metas where only
                cores do so.
              </li>
              <li>
                Position 3s sometimes have the potential to switch positions with the position 4,
                such as a Slardar position 3 might end up with lower farm than a position 4 Puck.
              </li>
              <li>
                Overall improvements in laning tactics. Back in the past, if you had a bad lane it
                means that you will have to be zoned under your tower and pray you can sap some EXP.
                Afterwards, having a bad lane means that you buy Iron Talon and go jungle. Now, if
                you have a bad lane, you either pull creeps or stack enemy creepwaves to force the
                creep equilibrium to be under your tower.
              </li>
              <li>
                This also means weaker laning matchups are much more tolerable, allowing a hero like
                Puck, who is a decent harasser with right-clicks but still pretty weak in lane due
                to having no hard disables to thrive even as a support.
              </li>
              <li>
                The laning phase’s advantages can also be negated by a few decent pickoffs or
                skirmishes, or a single big teamfight, which is why a hero like Puck can be useful
                as while it is pretty weak in lane, it is a great teamfighter. Dream Coil also has
                much lower cooldown than the likes of Reverse Polarity / Ravage, which allows Puck
                to be much more active in fights.
              </li>
            </ul>
          </GuideParagraph>
          <br /> <br />
          <GuideHeading1>Why Puck as a position 4 (or even 5)?</GuideHeading1>
          <GuideParagraph>
            <ul>
              <li>
                Drafting advantages. You can firstpick a Puck and the enemy will have no idea what
                role you’re playing as.
              </li>
              <li>
                Constant teamfighting abilities. As mentioned above, Dream Coil has a much lower
                cooldown than stuffs like RP / Ravage / Black Hole etc, which means you can take
                more fights.
              </li>
              <li>
                Not that gold dependant (but works really well with gold) but only EXP dependant, as
                Puck’s abilities scale based on levels alone.
              </li>
              <li>
                Lane shoving abilities. Puck can shove deep lanes alone, then just Illusory Orb into
                trees and TP away. With this sense, Puck should be the one holding Observers to
                place deep wards.
              </li>
              <li>Transition abilities. Puck can switch into core gear with enough farm.</li>
              <li>
                Overall buffs to her abilities, especially since Waning Rift has a mini-blink now
                hence Puck’s reliance on Blink Dagger as initiation is slightly lower, especially
                during the early game where you don't have a Blink yet.
              </li>
              <li>
                This hero is so ridiculously versatile you can build Daedalus on it and still make
                it work in some way.
              </li>
            </ul>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch01"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/puck_position_4_guide"
            }
            picturesUrl={["c01_001_range.jpg"]}
            pictureCaption={[
              "The range on Waning Rift can actually be deceptively long, comparable to a Faceless Void's timewalk. The courier is the starting point for reference."
            ]}
          />
          <br /> <br />
          <GuideHeading1>Early game (Laning phase):</GuideHeading1>
          <GuideParagraph>
            Puck is not all that terrible in lane due to its ability to trade effectively in lane.
            Its rightclick damage is nothing to be scoffed at despite recent nerfs, and the attack
            animation and base attack speed are generally pretty well-rounded. The drawback is that
            Puck is pretty squishy (This thing has almost 0 armor level 1) , hence if you get
            chain-stunned by the likes of Rhasta + Wraith King your life is pretty much over.
            <br />
            However, Puck’s Illusory Orb and Phase Shift can both disjoint and dodge most incoming
            projectiles. The first thing you have to do the moment the game starts is to skill orb
            and orb out of the base so you can place deep offlane wards without getting spotted. All
            you want to be doing in the laning phase is trading as efficiently as possible and to
            ensure the enemy heroes’ health is never healthy. If you aren’t able to do so or if
            somehow the enemy duo trades better than you, just fall back to the good old side camp
            pulling, disrupting enemy safelane pulls and stack enemy creepwaves then teleport back
            to your tier 1 tower to get EXP with your lane partner.
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch02"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/puck_position_4_guide"
            }
            picturesUrl={["c02_001_stats.jpg"]}
            pictureCaption={[
              "if you're trading a lot against a ranged support, consider getting Phase Shift level 2 because Puck's base armor is a fucking joke. (It was 0.8 level 1 with a single Ironwood Branch"
            ]}
          />
          <br /> <br />
          <GuideHeading1>Mid-late game (Teamfights):</GuideHeading1>
          <GuideParagraph>
            Puck’s game generally begins when you reach level 6 and have Dream Coil for pickoffs.
            Puck has massive AOE silence and powerful team fight abilities. By maxing out your
            Illusory Orb, you are able to provide long range nukes with minor sacrifices in mobility
            for damage. Maxing Waning Rift however provides more powerful AOE silence and damage,
            which works well in 2v2 laning phase. Puck Dream Coil is one of the BEST counters for
            heroes with escape abilities, think heroes like Ember, Storm, Void Spirit, Faceless Void
            etc.
            <br />
            Its mobility and disruptive abilities allow her to be an effective initiator, setting up
            kills for her team. Your job as a pos4 particularly as a Puck is to keep the lanes
            pushed out. If the lanes are pushed in, youre kind of penned into your own base which a
            Puck doesn’t want because it wants to be fighting constantly. Puck can clear waves
            easily with Q+W.
            <br />
            Pucks teamfight decision making looks simple on paper yet it does take lot of creativity
            and game sense to pull off as well. As we know that Puck become quite vulnerable during
            its spell downtimes. If you have Blink Dagger, you generally blink in, Waning Rift and
            Illusory Orb away while using Phase Shift to wait for the Illusory Orb travel time as
            harass. If you plan to actually initiate, just add Dream Coil into the mix. If you don’t
            see a good initiation window, just Orb out, wait for cooldowns, then do the same thing
            again. However, if you do not have Blink Dagger (likely if you went for a Spirit Vessel
            build, for example), you will have to Waning Rift into the teamfight (If you are at
            least above level 10, you probably would take the cast range talent. It gets even easier
            afterwards with the Waning Rift range and AoE talent / Aether Lens, if you plan on
            getting it), Orb + Phase Shift for escape as usual. The concept is very much the same,
            it’s just that having Blink makes things so much easier due to the range.
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch03"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/puck_position_4_guide"
            }
            picturesUrl={[
              "c03_001_teamfight.jpg",
              "c03_002_teamfight.jpg",
              "c03_003_teamfight.png"
            ]}
            pictureCaption={[
              "Your job is to either initiate, or wait until you have the chance to prevent enemy escapes. A great Dream Coil for your team to follow up can turn the tides of a teamfight. After a good Dream Coil, your team can just come in to follow up with damage and kill everyone. In fact, did you know the original Million Dollar dream coil in TI1 by Dendi didn't include a Blink Dagger at this moment?"
            ]}
          />
          <GuideParagraph>
            <b>
              Make sure you’re the one warding, and if you need to ask your buddy to buy wards and
              drop them to you.
            </b>
            <br />
            All of Puck’s abilities scale pretty well despite the damage not being very spectacular,
            Phase Shift is generally left alone till the mid to late game due to the fact that most
            of her damage comes from Q and W. So typically Q is maxed out first, as it is the
            longest range nuked and thus the safest. W is given second priority, as it does require
            a closer distance to her enemies compare to Q. Dream Coil, on the other hand, should be
            taken at every opportunity in order to maximize its stun duration and damage. Bear in
            mind this skill build is very situational, there are a lot of situations too where you
            can max W first, especially if your lane partner is someone with a disable for you to
            follow up with.
            <br />
            Recommended skill build : Q W Q W Q R Q E(optional) W W E R<br />
            Alternative skill build: Q W W Q/E W R W<br />
            <div style={{ fontSize: "0.85rem" }}>
              **phase shift is situational as to dodge projectiles such as VS’s stun **
            </div>
          </GuideParagraph>
          <br /> <br />
          <GuideHeading1>Itemization:</GuideHeading1>
          <GuideHeading3>Core items:</GuideHeading3>
          <GuideParagraph>
            Urn / Vessel (optional) &gt; Boots of Speed &gt; Wand &gt; Blink Dagger &gt; Scepter
          </GuideParagraph>
          <GuideHeading3>Situational selections:</GuideHeading3>
          <GuideParagraph>
            Eul’s Scepter, Aether Lens, Force Staff, Veil of Discord, Aghanim’s Shard
          </GuideParagraph>
          <GuideHeading3>Item descriptions:</GuideHeading3>
          <GuideParagraph>
            <ul>
              <li>
                As Puck is very active in fights, Urn is great because you’ll be collecting a lot of
                charges. It also provides Mana regeneration, something a Puck appreciates. Spirit
                Vessel though is optional, get it only if you need it against heroes like Morphling,
                Alchemist etc.
              </li>
              <li>
                Blink Dagger should be your go-to item in most games for obvious reasons. It allows
                Puck to Blink in, W+Q+E+Q as harass, rinse and repeat. It also allows Puck to
                initiate with Dream Coil, too. Bear in mind with max level Phase Shift, Puck with a
                Dagger is nigh unkillable without ground-targeted disables such as Jakiro’s Ice Path
                or AoE DPS spells such as Dark Seer’s Ion Shell.
              </li>
              <li>Eul’s Scepter is generally considered against roots and silences.</li>
              <li>
                Aghanim’s Scepter is a great mid-late game pickup against Juggernaut, Lifestealer or
                just general BKB carriers. (Who doesn’t buy BKB on their carry nowadays?)
              </li>
              <li>
                Veil of Discord is extremely optional, but is a good item to consider against
                illusion spammers like Phantom Lancer and Terrorblade, so you can clear illusions
                better with it.
              </li>
            </ul>
          </GuideParagraph>
          <br /> <br />
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

PuckPosition4Guide.skipAuthentication = true

export { PuckPosition4Guide }
