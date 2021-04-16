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

const GuideBanner = styled.img`
  width: 100%;
  height: auto;
`
const WhyYouShouldBePlayingDawnbreaker: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - Why you should be playing Dawnbreaker offlane, not safelane`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          {/* <Box display={["none", "none", "block"]}>
            <GuideBanner
              src={
                "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/foo_bar.jpg"
              }
            />
          </Box> */}
          <Box>
            <MainTitle>Why you should be playing Dawnbreaker offlane, not safelane</MainTitle>
          </Box>
          <GuideParagraph>
            Being the latest addition to the Dota 2 universe, Valora the Dawnbreaker is tested in
            multiple roles, starting with the middle lane and then the safelane. However, according
            to a few of our coaches from Gamejitsu, She is actually, in fact, best played in the
            offlane.
            <br />
            <br />
            Now hear me out, even though her hammer might look painful enough to be played as a
            carry, bear in mind that Omniknight is useless… I mean, not played as a carry, and he
            has a hammer too. Her spells scale with damage, but she doesn’t have a robust farming
            mechanism aside from the occasional hammer swinging (Starbreaker) to actually farm the
            items to give her enough damage to carry a game. However, she is both scarily tanky
            without items, as well as the fact that she can create 5v4 situations easily.
          </GuideParagraph>
          <GuideHeading2>Why Dawnbreaker Offlane?</GuideHeading2>
          <GuideParagraph>
            <ul>
              <li>This beast has a 720 HP and 5 armor level 1.</li>
              <li>
                She trades nearly as well as a Legion Commander or a Chaos Knight offlane thanks to
                Luminosity and Starbreaker.
              </li>
              <li>
                12th highest winrate in the Divine / Immortal bracket, standing at 53.28%. Her
                offlane winrate is 53.71%.
              </li>
              <li>
                She’s extremely similar to Mars and Legion Commander in a sense, with a touch of
                Nature’s Prophet’s global backup ability.
              </li>
              <li>
                Extremely versatile regarding itemization. You can build aggressive damage builds on
                her such as Echo Sabre, S&Y and Abyssal Blade, yet in other situations stuffs like
                Pipe, Crimson Guard and Solar Crest are all great options too.
              </li>
              <li>
                Strong at all stages of the game, as ger spells scale and global presence is a
                useful thing to have at all stages of the game.
              </li>
              <li>
                With Solar Guardian, she can solo-push a single lane and force the enemies to react
                and then force 5v4 teamfights at the other side of the map by teleporting away with
                Solar Guardian. Do consider BKB if enemies have a way to stop your teleportation,
                and remember to always get the Solar Guardian cooldown talent.
              </li>
              <li>
                With the current meta gearing towards the safelane carry teleporting to the enemy
                safelane and trying to push the tower 3v2 with their offlane, Valora’s Solar
                Guardian is the biggest deterrent to that, and it prevents the enemy offlane from
                ending the laning phase early to wreck havoc in your safelane jungle.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading2>Of course, she has her weaknesses too.</GuideHeading2>
          <GuideParagraph>
            <ul>
              <li>
                Celestial Hammer costs a ton of mana for Valora early in the game, as well as having
                pitiful damage. The 20-50 burn damage for 2.5 seconds almost seems like a joke from
                Valve because they have nothing else to add to the hammer mechanic. The pull range
                is half of the spell’s actual range, which kinda sucks pre-level 25 talent.
              </li>
              <li>
                Solar Guardian’s cooldown early game is pretty long, which means the enemy can
                record and remember her cooldowns and dive towers when they know you aren’t going to
                be counter initiating from the other side of the map any time soon.
              </li>
              <li>
                Some mana issues early game, yet not the best candidate for Soul Ring because
                Starbreaker costs only 80 mana, but has more than 10 seconds cooldown to be able to
                cast it twice during the Soul Ring’s 10 seconds duration. While you can add
                Celestial Hammer into the combo, the damage Celestial Hammer provides is a joke for
                waveclear with the damage to mana ratio.
              </li>
              <li>
                Doesn’t actually provide spectacular damage output during the lategame. Her primary
                job is to just whack squishy heroes in a teamfight while proccing Luminosity as many
                times as possible. If you’re looking for the damage output of a Mars or Legion
                Commander lategame, don’t even think about Dawnbreaker.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading2>Alright, so now how should we play Dawnbreaker?</GuideHeading2>
          <GuideParagraph>
            <ul>
              <li>
                Dawnbreaker is a pretty decent laner overall, albeit not disgusting enough to
                outright force enemy carries out of the lane. We want to be farming while trading
                with the enemy carry as much as possible. Overall, the primary task in the offlane
                is to reach level 6 ASAP. If you can lane against two heroes alone, you can have
                your position 4 leave the lane and go stack / gank / pull / do whatever.
              </li>
              <li>
                As Starbreaker has bonus damage during the swing, and even higher bonus damage
                during the final hit (smash), we want to ideally attack anything once to have 1
                charge in Luminosity so our smash can proc Luminosity. If you don’t do that, you
                might have 3 charges in Luminosity and you’ll then have to proc it with a normal
                right-click, which does not have bonus damage.
              </li>
            </ul>
          </GuideParagraph>
          <GuideImage
            src={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/why_you_should_be_playing_dawnbreaker_offlane/lowq_c01_001_laning.jpg"
            }
            caption={
              "The correct combo during laning is to whack creeps once when enemy heroes come near to last hit creeps, then Starbreak straight away and then even deny the creep if possible."
            }
          />
          <GuideParagraph>
            <ul>
              <li>
                Once you reach level 6, gauge whether the enemy carry is strong enough to be
                switching lanes and pushing your safelane tower. If the enemy carry had a rough lane
                against you, you can have your position 4 leave the lane and go play top lane
                instead, creating a 3v2 situation. If the enemy carry decides to react, just commit
                Solar Guardian afterwards and further force a 4v3 situation. Abuse Solar Guardian
                and always go for the numbers game -- fighting fewer heroes with more is the key to
                playing a good tempo game with Dawnbreaker.
              </li>
              <li>
                If the enemy carry leaves the lane, start committing wards in the enemy safelane
                jungle. This is done so that you know if the enemies are trying to gank you, as
                Dawnbreaker wants to keep the enemy lanes pushed. You want heroes to react to your
                push, while your teammates start teamfights on the other side of the map, and you
                Solar Guardian in. Think Dawnbreaker as Nature’s Prophet except she counter
                initiates waaaaaaaaaaaaay better. One of our 7k MMR offlane coach was a Legion
                Commander spammer until Dawnbreaker came along.
              </li>
              <li>
                If no one is committing anything on you, just farm and push the lane while farming
                the enemy jungle too. More often than not your job is to act as an annoyance because
                if the enemies don’t react to you, they lose towers and their jungle. If they do,
                they lose heroes on the other side of the map. The only losing scenario that will
                happen is that they manage to kill you before you Solar Guardian away, hence the
                wards.
              </li>
              <li>
                Try not to pick Valora into heroes that can interrupt your Solar Guardian
                teleporation while laning well against you 1v1. Batrider and Doom comes to mind,
                because you can’t kill them, can’t really run from them and can’t Solar Guardian
                away from them.
              </li>
              <li>
                Lategame-wise, the gameplan stays generally the same, except you want to be timing
                your Solar Guardian well enough to ensure whoever on your team that needs to stay
                alive receives your Solar Guardian backup. It can be your carry who got jumped, your
                support Lion who needs to stay alive against the enemy Storm Spirit or even your mid
                Templar Assassin who has the most amount of burst damage to deal with the enemy
                Lifestealer. Use Starbreaker as much as possible, on as many targets as possible to
                abuse the stun and the extra charges from the talent.
              </li>
            </ul>
          </GuideParagraph>
          <GuideImage
            src={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/why_you_should_be_playing_dawnbreaker_offlane/lowq_c02_001_solarguardian.jpg"
            }
            caption={
              "There are multiple ways to use Solar Guardian. You can use it as a counter-initiation tool, or even a Phoenix Egg / taunt in the middle of the teamfight to force enemies to either try to stun you or risk getting stunned instead."
            }
          />
          <br />
          <GuideHeading2>How do we itemize Dawnbreaker?</GuideHeading2>
          <GuideParagraph>
            <ul>
              <li>
                First of all, Phase Boots is the most important item you want to have. Don’t go for
                Treads just because you think you can proc Luminosity more often -- We aren’t
                playing her as a right-click carry here. You want to ready Luminosity, then Phase up
                to the enemy carry and whack him. Remember, heroes give more heal compared to
                creeps.
              </li>
              <li>
                Magic Stick / Wand gives better value compared to Soul Ring regarding Valora’s mana
                issues, as Starbreaker is the spell we want to spam to farm and it costs only 80
                mana.
              </li>
              <li>
                Orb of corrosion is a decent item on Valora if you have a better matchup against the
                enemy carry. Avoid this item if you realise you can’t outfight the enemy carry.
              </li>
              <li>
                During the midgame, you should consider Echo Sabre if you had a decent start. If
                you’re playing more of an aura bitch role, Vlads and Vanguard can be a decent
                choice.Don’t underestimate Vlads on Valora, Solar Guardian-ing into a teamfight
                while having Vlads provides a ton of healing which is deceptively good for
                counter-initiation teamfights, not to mention Luminosity providing AoE heal. It’s
                almost like turning your whole team into Huskars.
              </li>
              <li>
                Sange and Yasha are decent value items, because Sange amplifies your healing, while
                Yasha gives you bonus attack speed to proc more passives.
              </li>
              <li>
                Crimson Guard and Pipe of Insight can be bought if your team needs them. Aura items
                are all great on Valora because, with Solar Guardian, you can make sure your team
                will be benefiting from it almost every single teamfight.
              </li>
              <li>
                Assault Cuirass is also great on Valora for obvious reasons similar to the ones
                above.
              </li>
            </ul>
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

WhyYouShouldBePlayingDawnbreaker.skipAuthentication = true

export { WhyYouShouldBePlayingDawnbreaker }
