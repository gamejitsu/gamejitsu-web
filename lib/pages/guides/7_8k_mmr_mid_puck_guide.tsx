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
const Puck78MmrMidGuide: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - 7.8k MMR Mid Puck guide`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          <Box>
            <MainTitle>7.8k MMR Mid Puck guide</MainTitle>
          </Box>
          <GuideParagraph>
            Puck is one of the most versatile heroes in the game as it can be rotated into position
            2, 3, 4 and even 5.
            <br />
            In fact, in professional games, we see Puck played in various positions in the recent
            Europe DPC:
            <br />
            <ul>
              <li>Puppey and Notail plays position 5 Puck</li>
              <li>Taiga plays position 4 Puck</li>
              <li>Chessie plays position 3 Puck</li>
              <li>w33 and Topson play position 2 Puck.</li>
            </ul>
            Puck can be impactful no matter the position played. Without lane restrictions, Puck is
            an extremely versatile pick during the drafting phase and you can conceal your
            strategies by picking it early.
            <br />
            The focus of this guide, however, is on position 2 Puck, arguably the most common role
            Puck is played in pubs. Puck can clear creep waves instantly and is able to escape from
            danger as long as you have great map awareness. This allows Puck to shove waves deeply
            without getting caught, something extremely valuable for the mid-late game phase.
          </GuideParagraph>
          <GuideHeading1>Laning Phase for Puck</GuideHeading1>
          <GuideParagraph>
            For Puck, fighting against tanky and high regen heroes might be unfavourable because
            Puck is constantly dishing damage on enemy heroes with its decent right-click damage and
            skirmish opportunities. Once you manage to get the enemy hero below a set threshold, you
            can then Illusory Orb + Waning Rift nuke your enemy to death. In fact, Puck is a mid
            hero capable of solo-killing its lane opponents more often than not.
            <br />
            As Puck relies on constant harass to do that, tanky mid heroes who can outregen your
            harass will be able to survive your onslaught. Heroes that fit into this category will
            be Dragon Knight, Timbersaw and arguably Kunkka mid. In these cases, you will need to go
            for plan B, which is to roam side lanes and get kills, winning lanes for your team. Puck
            is a great hero for skirmishes for two reasons:
            <br />
            <ul>
              <li>
                Puck's spells have short to medium cooldowns. Dream Coil has far lower cooldown
                compared to other AoE controls such as Ravage, Reverse Polarity and Black Hole.
              </li>
              <li>
                Puck generally has great middle rune control, as it can shove waves quickly before
                the rune spawns and then Orb towards one of the power rune respawn points.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading1>Skill Build for Puck</GuideHeading1>
          <GuideParagraph>
            Puck is so versatile that even the skill build can be different for each player. It also
            varies as it depends on who you are going up against.
            <br />
            For example, do you choose to pick up Phase Shift early during the laning phase or do
            you focus on maxing both Illusory Orb and Waning Rift for waveclear? If you fight
            against a hero like Queen of Pain you obviously want Phase Shift ASAP, but in some cases
            Phase Shift may be obsolete, by all means max your first two damage spells first.
            <br />
            My personal favourite skill build would be either:
            <br />
            <ul>
              <li>Q/W/Q/W/Q/R/Q/W/W/E</li>
              <li>Q/E/Q/W/Q/R/Q/W/W/W</li>
            </ul>
            At level 10, it is not recommended to take the talent first as you either take the
            chance to max out your damage duo, or take a point in Phase Shift because at level 10
            you should be actively fighting.
            <br />
            At level 12, I also prefer not to take level 2 Dream Coil, opting instead for higher
            levels in Phase Shift for better survivability. Level 2 of Dream Coil does not bring
            noticeable benefits compared to having more and longer Phase Shifts for better
            survivability.
            <br />
            If you choose to get Phase shift during laning, you can constantly try to harass the
            enemy and dodge their attacks once every 6 seconds. This allows you to gain an upper
            hand advantage in the lane and can execute kills with perfect calculation during the
            laning phase. If you choose to max Illusory Orb and Waning Rift, try to deal damage to
            the enemy using your nukes while taking last hits at the same time.
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch01"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_8k_mmr_mid_puck_guide"
            }
            picturesUrl={["c01_001_laning.jpg"]}
            pictureCaption={[
              "I very often see amateur Puck players using Phase Shift everytime when it is off cooldown to dodge whatever that is coming for them. DON'T DO THAT. In this screenshot, if the Puck commits a Phase Shift just to dodge Invoker's right click, the Invoker will likely chain stun Puck with Snap + Tornado + EMP and the Puck will potentially die."
            ]}
          />
          <GuideParagraph>
            This applies to both builds, when you reach level 10, you will surely have both Illusory
            Orb and Phase Shift maxed. At this time, you can farm more efficiently, speed up your
            items and split push dangerous lanes for your other cores. (Works best if you pick up an
            early Boots of Travel) Bring supports around you to keep ganking enemies with your coil
            as Puck wants to be constantly fighting. You are the primary space creator. You can be
            the position 2, or the position 2.5, depending on whatever your team needs you to be.
            Call for ganks or even smokes everytime your Dream Coil is off cooldown. In fact, the
            cooldown is so short, you can even commit it for solo pickoffs.
            <br />
            Sub-section regarding Phase Shift blinking:
          </GuideParagraph>

          <GuideCarousel
            carouselId={"ch02"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_8k_mmr_mid_puck_guide"
            }
            picturesUrl={["c02_001_blink.jpg", "c02_002_blink.jpg"]}
            pictureCaption={[
              "Against ground DPS or Void's Chronosphere, Puck can actually blink out of it coupled with Phase Shift, as long as you are blinking in the correct direction, because turn rates are a thing in Dota. As long as you are facing the direction you want to blink, you can generally escape things like Void's Chronosphere or even Jakiro's Macropyre."
            ]}
          />

          <GuideCarousel
            carouselId={"ch03"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_8k_mmr_mid_puck_guide"
            }
            picturesUrl={[
              "c03_001_blinkfail.jpg",
              "c03_002_blinkfail.jpg",
              "c03_003_blinkfail.jpg"
            ]}
            pictureCaption={[
              "In this case we have a bad example. The Puck is looking at Faceless Void's direction… Puck gets chronoed, but manages to Phase Shift successfully. Now the Puck is trying to blink towards its tower… And it fails. Notice the Puck is trying to turn right to complete the turn required to Blink out. In these situations you should just blink towards the enemy base instead to escape Chronohpere, as Puck was facing that direction"
            ]}
          />
          <br />
          <GuideHeading1>Item Build for Puck</GuideHeading1>
          <GuideParagraph>
            Core Puck can be categorised into two types, which being either physical damage Puck and
            magical damage Puck. Both playstyles has seen plays in the pro scene as both are often
            used depending on the situation. Of course, the item build will change drastically along
            with the playstyle.
          </GuideParagraph>
          <GuideHeading1>Physical Damage Item Build</GuideHeading1>
          <GuideParagraph>
            <b>√ Witch Blade</b>: One of the most essential item for physical Puck. Deal 1x your
            intelligence as damage every second for three seconds to the enemy. For early game Puck,
            it can deal quite a lot of damage to enemy heroes. It also increases the projectile
            speed and attack speed for Puck which is very efficient as a physical attack Puck.
            (NOTE: If you use Phase Shift attack to proc Witch Blade, the first target your
            projectile lands on will proc the Witch Blade passive.)
            <br />
            <br />
            <b>√ Blink Dagger</b>: Effective item for Puck as it allows Puck to combo with its
            Illusory Orb to slither in and out of fights. Phase Shift + Blink is also an effective
            get-out-of-jail card, sans a few extremely hard to dodge DPS spells such as Dark Seer's
            Ion Shell, Batrider's Firefly and even a good Weaver's Shukuchi under your face.
            <br />
            <br />
            <b>√ Eul’s Scepter of Divinity</b>: An escape item for Puck to primarily dispel silence
            or avoid stuns when Phase Shift or Illusory Orb is in cooldown. Silence is a very hard
            counter against a Puck no matter which builds the Puck is playing as Puck is a
            skill-based hero so having an item to dispel silence is significantly important if the
            enemy has silences or Orchid to deal with you.
            <br />
            <br />
            <b>√ Maelstrom</b>: Once you reached level 15 and have Phase Shift attack talent, you
            can potentially attack lots of units at once, which allows you to have high chances to
            proc the chain lightning. It is useful at clearing creeps and also helps in dishing out
            damage especially in prolonged teamfights.
            <br />
            <br />
            <b>√ Desolator</b>: Another damage type item that could heavily punish supports if they
            are out of position. Physical damage Puck with desolator is scary against supports. He
            can dive into the supports’ face, and coupled with Waning Rift's silence, insta-kill
            squishy supports with just a few hits. Take note with Phase Shift attack or Rapid Fire,
            the Desolator Armor debuff is applied to everyone struck, as opposed to Maelstrom and
            Witch Blade.
            <br />
            <br />
            <b>√ Daedalus</b>: As usual, used for dealing massive damage if it procs. A good item to
            buy with Puck’s Dream Coil Rapid Fire talent. Daedalus can proc against multiple targets
            with Rapid Fire / Phase Shift attack.
            <br />
            <br />
            <b>√ Nullifier</b>: Useful against Ghost, Glimmer and Euls.
            <br />
            <br />
            <b>√ Divine Rapier</b>: Can be bought if you have great confidence in your
            survivability. Can provide a huge damage boost to Dream Coil Rapid Fire and Phase Shift
            attack. Generally the last resort in stalemates or comeback attempts.
            <br />
            <br />
            <b>√ Refresher Orb</b>: This allows you to have double Dream Coil, which can be used to
            burst down enemy cores with your high damage output in the late game. Double Dream Coils
            with Rapid Fire on multiple heroes can be a death sentence for the enemy team,
            especially in the late game.
            <br />
            <br />
          </GuideParagraph>
          <GuideHeading1>Magical Damage Item Build</GuideHeading1>
          <GuideParagraph>
            <b>√ Blink Dagger</b>: Explained above.
            <br />
            <br />
            <b>√ Eul’s Scepter of Divinity</b>: Explained above.
            <br />
            <br />
            <b>√ Boots of Travel</b>: This allows you to move quickly to lanes to split push and
            still be able to join fights immediately. Great for a Puck who wants to shove waves to
            inflict lane pressure on the enemy as deep as possible towards their base.
            <br />
            <br />
            <b>√ Dagon</b>: High damage burst with a low cooldown. Very effective to use for Puck as
            itgg could burst heroes with low hp and retreat from the danger zone without any
            casualties. Recommended going for this item when your team lacks burst damage.
            <br />
            <br />
            <b>√ Linken’s Sphere</b>: When you need to protect yourself from single target instant
            stuns like Lion’s and Shadow Shaman’s Hex, this could be a great item to defend
            yourself. Puck is vulnerable to long-duration disables as it is disgustingly squishy,
            almost like gelatin. Remember, Puck is hard to catch, but once caught, you die
            instantly.
            <br />
            <br />
            <b>√ Bloodstone</b>: Great item that boosts mana regen and damage output of Puck.
            Another recommended item when you have confidence in yourself where you would not easily
            be caught. Having mana regen allows you to keep split pushing and pressuring lanes. In
            fact, you'll probably be healthy forever.
            <br />
            <br />
            <b>√ Ethereal Blade</b>: This item is good to be bought when you think you have the
            potential to burst down the enemy by using magic damage. Do not purchase this item when
            you are going for semi support type of Puck as you will be relying on your carry's
            physical damage. Only go for this if you are a magical Puck that is snowballing.
            <br />
            <br />
            <b>√ Scythe of Vyse</b>: Great to purchase when your team lacks single target control
            against key targets, or you think you need it to solo kill enemy heroes. However,
            Aghanim's Scepter is generally better in most situations.
            <br />
            <br />
            <b>√ Shiva’s Guard</b>: If you think the enemy could not burst you down even with
            disables, especially if they rely mainly on physical damage, Shivas is a decent item.
            Great especially against Tinker hiding in the treelines.
            <br />
            <br />
            <b>√ Aeon Disk</b>:<br />
            If you find yourself struggling to survive, by all means go for Aeon Disk. The instant
            dispel can allow you to chain Illusory Orb and Phase Shift instantly for a guaranteed
            escape. A very good item for Puck in the late game especially if the enemy heroes have a
            lot of instant disables capable of instakilling you.
            <br />
            <b>√ Octarine Core</b>: Reduces cooldown which allows you to do more damage and silence
            more opponents in a team fight. Would be useful if you have an extra slot, but I do not
            prioritise this item in an intense game as it does not help much for late intense game
            Puck gameplay. (I will generally go for this as the last item if slots are available.)
            <br />
            <br />
          </GuideParagraph>
          <GuideHeading1>Overall Item Build</GuideHeading1>
          <GuideParagraph>
            <b>√ Aghanim Scepter</b>Obscenely broken. Who decided that this can pierce BKB? Carries
            and slippery enemies like Storm Spirit, Ember Spirit and Void Spirit hate this item.
            Actually, I am pretty sure everyone on the opposing team will hate you for this item.
            It's just ridiculously stupid to have an AoE long range BKB-piercing disable, especially
            when the duration on both the coil and the snap stun is equally ridiculous.
            <br />
            <br />
            <b>√ Aghanim Shard</b>: Recommend against invis heroes for obvious reasons. It is also
            good to combo the item with Psychic Headband that could instantly push out enemies to
            break the coil.
            <br />
            <br />
          </GuideParagraph>
          <GuideHeading1>Talent Tree for Puck</GuideHeading1>
          <GuideParagraph>
            Similar to the previous Shadow Fiend’s guide, there will be two choices of choosing the
            talent tree for Puck as there are two different builds.
            <br />
            <br />
            <b>In the first choice of talent at level 10</b>, the magical build would rather go for
            150 cast range while the physical build would go for 30 damage.
            <br />
            <br />
            <b>At level 15</b>, it's fairly straightforward as well. Physical damage would surely
            prefer Phase Shift attack for obvious reasons. 12% spell amplification would be a huge
            damage boost to magical Puck especially for those with Ethereal Blade and Dagon build.
            <br />
            <br />
            <b>Moving on to level 20</b>, which might differ from each player to another. Some
            players prefer to go for 50% illusory orb distance/speed while some might choose -6s
            warning rift cooldown. 50% speed and distance allow you to escape further or join fights
            from a longer range, which is useful against heroes like Void Spirit and Ember Spirit.
            You can either catch up with them, or escape from them. -6s Waning Rift talent however
            is not only great for wave clear, it also synergizes with the level 25 talent.
            <br />
            <br />
            <b>At level 25</b>, physical build players would go for Dream Coil Rapid Fire. This
            talent turns Puck into an AoE physical monster. On the other hand, +275 warning right
            AoE and range is very useful for the magic build as it could be used for either escape
            or attack. The silence AoE is so ridiculous you stand to easily silence multiple targets
            in teamfights (and often multiple times, too)
            <br />
            <br />
          </GuideParagraph>
          <GuideHeading1>Conclusion</GuideHeading1>
          <GuideParagraph>
            Puck is broken in the current meta not just because of its kit being useful in almost
            every game, Puck is also broken due to the versatility it brings to drafting. It all
            comes down to different matchups and different playstyles by different players. Both
            builds bring great benefits to the table, whether it may be huge AoE physical damage,
            deep waveclears or just consistent disables.
            <br />
            <br />
            Thank you for reading until the end.
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

Puck78MmrMidGuide.skipAuthentication = true

export { Puck78MmrMidGuide }
