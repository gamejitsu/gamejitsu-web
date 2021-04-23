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
const Position4Or5SpiritBreakerGuide: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - 6.3k MMR Pos 4/5 Spirit Breaker master guide`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          <Box display={["none", "none", "block"]}>
            <GuideBanner
              src={
                "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_3k_mmr_position_4_or_5_spirit_breaker_guide/banner.png"
              }
            />
          </Box>
          <Box>
            <MainTitle>6.3k MMR Pos 4/5 Spirit Breaker master guide</MainTitle>
          </Box>
          <Flex justifyContent="center" pb={4} pt={3} style={{ color: "#08ff07" }}>
            Guide was written by Otomo, who is both a coach on Gamejitsu and a caster, as well as
            No. 64 Spirit Breaker on Dotabuff.
          </Flex>
          <GuideParagraph>
            Hello everyone and welcome to this Dota 2 guide for Spirit Breaker, One of my favorite
            heroes and my most played. I've been meaning to write hero specific guides for a long
            time and thought "why not start with the hero I know best?" This guide will be in the
            form of questions I expect players would have about Spirit breaker. It's something new I
            wanna try so bear with me if it's not your cup of tea. Without further ado, let's begin.
          </GuideParagraph>
          <GuideHeading1>Hero Overview</GuideHeading1>
          <GuideHeading2>Is Spirit Breaker worth playing right now?</GuideHeading2>
          <GuideParagraph>
            Spirit Breaker is in a mediocore place right now, he's not good at laning and his
            roaming potential is a bit lackluster. He's just not very impressive during the early
            game. However he does posses a ton of magic immunity piercing potential. He is tanky and
            in aggressive lineups SB shines with his chasing potential.
          </GuideParagraph>
          <GuideHeading2>
            Alright tell me about Spirit Breaker's starting stats, are they any good?
          </GuideHeading2>
          <GuideParagraph>
            SB has some very impressive starting stats along with some pretty bad ones. The
            positives include his starting hp of 780, which is one of the highest health pools at
            the start of the game. SB also comes with 4 hp regen and almost 5 armor. Combine that
            with 65 average starting damage, this would put SB as one of the better traders during
            the laning stage if it wasn't for some.... issus the hero has.
          </GuideParagraph>
          <GuideHeading2>Issues? What sort of issues?</GuideHeading2>
          <GuideParagraph>
            While SB has some big positives at the start, it's more than balanced by his weaknesses.
            For a start as a melee hero he has to actually reach his enemy to do damage, something
            difficult with his 290 movement speed (only 4 melee heroes are slower). This slow
            movement speed makes the actual trading part not happen most of the time. Another big
            issue that SB suffers from is having the 2nd slowest base attack speed in the game. Most
            heroes have 1.7 attack speed with a few exceptions. SB has 1.9 base attack speed,
            reducing the effectivness of his high starting damage because he simply doesn't swing
            his weapon fast enough to abuse it.
          </GuideParagraph>
          <GuideHeading1>Abilities</GuideHeading1>
          <GuideHeading2>What makes Charge such a good spell?</GuideHeading2>
          <GuideParagraph>
            Cool, let's talk about SB's abilities now. Charge of darkness is an amazing ability. SB
            can target anyone on the map and charge towards them with insane speed. While charging
            SB provides flying vision of the enemy, meaning that it is impossible to juke while
            being charged. All enemies are bashed along the way as well.
          </GuideParagraph>
          <GuideHeading2>
            Did you just....describe Charge without giving me any new information?
          </GuideHeading2>
          <GuideParagraph>
            Fair enough, here are some cool tricks about Charge that make the ability so amazing
            <ul>
              <li>
                While you cannot target a magic immune person to charge, if you charge someone and
                they turn magic immune, they still get bashed when SB reaches them. So don't cancel
                a charge just because the enemy used BKB.
              </li>
            </ul>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch01"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7_3k_mmr_position_4_or_5_spirit_breaker_guide"
            }
            picturesUrl={["c01_001_sb.jpg", "c01_002_sb.jpg"]}
            pictureCaption={[
              "Although you couldn't Charge magic immue targets directly, you can still bash them along the way. A good method to do so is to stand beside your target and charge something else.",
              "Although you couldn't Charge magic immue targets directly, you can still bash them along the way. A good method to do so is to stand beside your target and charge something else."
            ]}
          />
          <GuideParagraph>
            <ul>
              <li>
                Charge provides assist gold to SB, regardless of whether he reaches his victim or
                not. So long as an enemy hero is being charged and dies, SB gets assist gold no
                matter what. This means it's always worth charging an enemy your team is trying to
                kill. SB provides flying vision and gets a bounty out of it.
              </li>
              <li>
                In teamfights, always charge the furthest enemy away. It's very easy to bash
                multiple people while charging. Don't charge the frontline Mars/Underlord, you'll
                only stun them. Instead aim for the backline heroes like CM and Oracle, which allows
                SB to bash everyone between them.
              </li>
              <li>
                Try to ensure that the Charge path doesn't pass by Roshan. Roshan WILL bash you and
                that bash can cost your team valuable kills. Nothing is worse than losing a kill due
                to a Roshan bash and then having your teammates describe the many ways in which they
                met your mother.
              </li>
              <li>
                Due to his low attack speed, enemies can often turn on their magic immunity and
                teleport away, all while SB gets 1-2 attacks off them. If charge is online though,
                you can just stand next to the enemy and charge anyone on the map, giving you a 100%
                chance to stop their TP. Make sure to position Spirit Breaker in such a way that it
                looks like you're farting in the enemy's face, for maximum value.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading2>Is Charge completely nullified by Linken's sphere?</GuideHeading2>
          <GuideParagraph>
            If SB is being a nuisance, a lot of good players will get a Linken so that they can just
            avoid the headache of being charged. This is especially true of heroes who wanna split
            push and not get caught by SB (Nature's Prophet, Clinkz, Tinker). This is very difficult
            to counter but there are 2-3 ways to get around an enemy that has linkens.
            <ol>
              <li>
                SB has to work together with a hero who has another single target spell. For example
                Shadow Shaman. SB can break Linkens globally and Shaman can then follow up with hex
                or shackles. It's fine if Shaman breaks Linken and charge goes off as well. This
                requires quite a lot of communication and coordination to pull off though, so expect
                it to Always work in your pubs ;)
              </li>
              <li>
                Because Charge changes target to the nearest enemy once the initial target dies,
                it's possible to charge the nearest creep to the enemy with Linken and wait (well
                hope) for it to die and then SB will automatically aim for the enemy hero. This
                completely bypasses Linken but requires a lot of luck to work. Still it can be done.
                Across over 1k games with SB, I've pulled off this manouver at least twice.
              </li>
              <li>
                Of course, this works both ways. If you have another hero who has the hunting
                capabilities, you can help him cancel the enemy's Linkens from a global range,
                effectively nullifying the Linkens pickup.
              </li>
            </ol>
          </GuideParagraph>

          <GuideHeading2>
            I see some pros max Charge and others max Bash first, why is that?
          </GuideHeading2>
          <GuideParagraph>
            While Charge is incredible, it's rare to max first because it just doesn't provide much
            benefit to do so early. Charge bonus speed starts at 300 and goes all the way up to 375
            at max level, not much of an increase. The cooldown does decrease substantially as it
            levels up, from 17 seconds to 11. Yet in most early skirmishs getting multiple charges
            off simply isn't feasible due to how fights are decided in 5 seconds.
            <br />
            Charge does get maxed out in few pro games when the team feels they want this nonstop
            aggression all over the map. Still this is rare and maxing Bash first is the standard
            because it impacts all of Spirit Breaker's damage early and deleting enemies &gt;
            stunning them.
          </GuideParagraph>
          <GuideHeading2>
            I hear a lot about "charge this" and "bash that". How come Bulldoze hasn't been
            mentioned?
          </GuideHeading2>
          <GuideParagraph>
            Because Bulldoze is a fairly straightforward spell. There really isn't much to it. It
            adds 30% movement speed and 70% status resistence at max level. Still here are some
            tricks you can do with it.
            <ul>
              <li>
                Bulldoze should be used at the start of fights when most spells are being thrown
                out. It's when SB will get the most benefit out of the status resistence of the
                spell.
              </li>
              <li>
                Bulldoze IS DISPELLABLE!. While this fact is useless in most games, it does mean
                that SB should use Bulldoze After being hit by Oracle's Fortune's End, Invoker's
                tornado and any Euls on the enemy team.
              </li>
              <li>
                Consider using Bulldoze to tank some spells for allies when you can. An example of
                this is if you think an ally is going to be hit by Mirana's arrow, then turn on
                Bulldoze and tank it, it will stun SB at max by 1.5 seconds, compared to someone
                else for 5 seconds.
              </li>
              <li>
                When chasing enemies that are really far and hard to catch (Tinker, Nature's
                prophet). Use Bulldoze immediately while charging them for the boost of speed. You
                get 8 seconds of bonus speed rather than "saving it" when you get near them and only
                benefitting from 2-3 seconds of bonus movement speed.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading2>Does Greater Bash have any tricks to it?</GuideHeading2>
          <GuideParagraph>
            Greater Bash does a % of SB's movement speed as damage. It famously procs 17% of the
            time using a pesudo-random modifier. There isn't much players can do to influence this
            but there are a few things to keep in mind.
            <ul>
              <li>
                Since it's pseudo-random, it's possible to "wind up" the bash by hitting anything a
                few times to increase the chance of the next attack being a bash. This is (in my
                opinion) usually not worth it because you never if a bash will trigger while winding
                it up. A couple of hits with no bash would usually be the best you can get.
              </li>
              <li>
                Bash pushes people in the direction SB is facing, so try to always position yourself
                so you push them towards your allies/away from enemies.
              </li>
              <li>
                Similar to the above point, Bash can push people up/down cliffs and into safety. So
                be very careful when fighting near impassable terrain. Bash can even push people out
                of Kinetic field and Mars' ultimate. Take a second to better position yourself so
                you don't accidentally save enemies by bashing them to safety.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading2>
            Nether Strike got nerfed a while back and now it's slowly being buffed again, How good
            is the ulti right now?
          </GuideHeading2>
          <GuideParagraph>
            A long long while back, NS used to do 150/250/350 damage on an 80/70/60 second cooldown.
            Right now it does 100/175/250 on 90/75/60 second cooldowns. It's fair to say the spell
            has lost quite a bit of power over the last couple of years.The new shard upgrade is
            incredible though and turns NS from a mediocre ultimate to a pretty damn good one. Even
            without shard, there are still some good tricks you can do with NS.
            <ul>
              <li>
                When attacking from fog/invisibility, consider using NS first before charge. NS
                pushes enemies twice the distance as a regular bash. You can follow up with a charge
                after to push enemies almost 500 distance out of position
              </li>
              <li>
                Enemies always expect SB to charge in first and then use his ulti. Use this to
                defend/siege highground. Especially while defending you can ulti someone into your
                base and charge them further in. This trick has turned countless losing games into a
                win for me.
              </li>
              <li>
                If you're facing an enemy with Linken and you gotta decide whether to break it with
                Charge or NS, always use Charge. Charge's low cd makes it a lot more expendable.
                Nether Strike is a type of "Blink Strike" similar to Phantom Assasin and Riki. This
                means you can use it defensively to get out of sticky situations.
              </li>
            </ul>
          </GuideParagraph>
          <GuideHeading2>
            Is Spirit Breaker's skill build set in stone or do I have a lot of wiggle room?
          </GuideHeading2>
          <GuideParagraph>
            SB has a somewhat fixed skill build, generaly maxing Bash first and then Charge. You
            also want to put points in the ulti whenever you can and a value point early in Bulldoze
            is worth it. There are a few levels where you'll have to make a choice between two
            viable option thought.
          </GuideParagraph>
          <GuideHeading2>Level 1: Bash or Charge?</GuideHeading2>
          <GuideParagraph>
            At level 1 you gotta decide if you want to take a point in Bash or Charge. Bash gives
            you more damage, better trading and can proc 2-3 times in the 17 seconds it takes to use
            Charge. It also works well with a starting orb of venom. Charge gives you a guaranteed
            1.2 sec stun, and it allows SB to close the distance to the enemy. It's weaker in the
            lane though. Personally I almost always take Bash level 1 because it allows me to trade
            more effectively. Charge feels mostly pointless because SB goes in, does zero damage and
            then....nothing. I think both are viable but Bash seems a lot more useful level 1.
          </GuideParagraph>
          <GuideHeading2>Level 4: Charge level 2 or Bulldoze?</GuideHeading2>
          <GuideParagraph>
            At level 4 (assuming you take 2 levels of bash at level 3) a second level of Charge is
            an option or you can put a value point in Bulldoze. Bulldoze puts a bigger strain on
            SB's limited mana pool but the bonuses it provides are pretty sizeable. A second level
            of charge lowers it's cooldown, which is also helpful.
            <br />I generally go for Bulldoze at this point, it just gives too much value to ignore.
            However a second level in charge is ok if your team is dumpstering the enemy and lower
            cooldown gets you more involved.
          </GuideParagraph>
          <GuideHeading2>Level 10: First talent point or max Charge?</GuideHeading2>
          <GuideParagraph>
            Spirit Breaker's level 10 talents are.....fine. I'll discuss both options in the talent
            section but both are decent options. Maxing Charge at level 10 has the potential to
            provide a lot for your team. Going from 13 to 11 seconds cooldown is very useful.
            Talents can provide a lot of utility or extra armor, both are helpful as well.
            <br />
            Level 10 offers several options that boil down mostly to personal preference. Expirement
            a bit and take what you like at this level.
          </GuideParagraph>
          <GuideHeading1>TALENTS</GuideHeading1>
          <GuideHeading2>
            Not a whole lot of customization for skills. Are Talents flexible at least?
          </GuideHeading2>
          <GuideParagraph>
            I'd say about 3 of the talents are pretty flexible and 1 talent is set in stone. Let's
            go through all the choices.
          </GuideParagraph>
          <GuideHeading2>
            At level 10 +500 Night Vision has an almost 3% winrate increase over 4 armor, is it
            really that good?
          </GuideHeading2>
          <GuideParagraph>
            Extra night vision is really nice to have because most enemies will be limited to 800
            vision at night while Spirit Breaker has 1300, that's a lot of vision to work with.
            Vision talent is very useful if you put SB at the front of the team as he'll be able to
            provide a lot more information at night than almost any other hero.
            <br />
            Another major benefit of extra night vision is that smoke breaks at 1025 distance, which
            means at 800 night vision, most heroes don't realize they broke enemy smokes till it's
            too late. However, if SB takes the night vision talent, you'll know exactly when and
            where enemies are when you reveal them.
            <br />
            When you compare how much utility Night Vision gives you, 4 armor feels pretty tame in
            comparison. With 4 armor enemies can hurt you a little less physically (although their
            Tipping still hurts emotionally). That doesn't make it a bad talent at all, just a
            little more limited in what it can provide.
          </GuideParagraph>
          <GuideHeading2>
            The level 15 talent choice is even more one-sided, isn't 40 damage incredible?
          </GuideHeading2>
          <GuideParagraph>
            Uhh.... Not on Spirit Breaker. Remember his 1.9 base attack speed? Second lowest in the
            game?
            <br />
            And let's not forget the glorious agility gain of....1.7? Those are some wolves of
            Icewrack values right there.
            <br />
            Spirit Breaker simply doesn't attack fast enough to make use of the damage value, nor is
            building attack speed items worth it. Compared to that you can get 10 hp regen, which is
            a lot more reliable. Spirit Breaker is always in the thick of fights and the extra regen
            makes a difference in surviving those engagements. It's a no brainer at level 15.
          </GuideParagraph>
          <GuideHeading2>Aghhh! Both level 20 talents look great, Which do I pick?</GuideHeading2>
          <GuideParagraph>
            SB has some great late game talents, and level 20 is a really tough choice. Reducing
            Bulldoze to 10.5-second cooldown gives you near 100% uptime, while the bash talent is an
            extra 37% damage to all bashes..
            <br />
            This really comes down to preferences, cause both talents can do a lot. Using Bulldoze
            2-3 times a fight just makes Spirit Breaker uncontrollable for the enemy team. My only
            issue with this talent is that Bulldoze IS dispellable, which makes this talent not
            worth it in games vs many dispels. Other than that this talent is always good.
            <br />
            Bash talent is a bit more offensive and I take it if I feel like my team is ahead. It
            also works really well if Spirit Breaker has Aghanims. The extra damage adds up in that
            situation. I also like how this talent allows SB to actually kill lane creeps with his
            charge..
            <br />
            Honestly, there is no wrong talent choice here, even taking Bulldoze cooldown isn't too
            bad vs dispels, just less optimal. So take what you prefer.
          </GuideParagraph>
          <GuideHeading2>
            There is no winrate difference between the level 25 talents. Are they equally effective?
          </GuideHeading2>
          <GuideParagraph>
            The level 25 talents for Spirit Breaker are just amazing. 650 extra health allows him to
            tank so much in a fight. If you want to survive longer in fights, it's the obvious
            choice to take.
            <br />
            The 20% extra bash chance is more interesting though. At 37% chance to bash, SB can
            almost guarantee a bash every 3 hits and at level 25 he (kinda) has the attack speed to
            pull it off without any attack speed items.
            <br />
            Let's assume that with his level 25 talent, Spirit Breaker can completely shutdown 1
            enemy. There are still some things to consider. Does the enemy have 1 magic immune carry
            that nobody else can handle? Does Spirit Breaker have a BKB to allow him to hit the
            enemy carry nonstop?
            <br />
            It may sound like I think the 20% bash talent is worse but honestly, they are both
            great. It just takes a little more to get the bash talent to work. But if you can make
            it work, it's an insane amount of magic piercing lockdown that SB can provide.
          </GuideParagraph>
          <GuideHeading1>Conclusion</GuideHeading1>
          <GuideParagraph>
            Originally I wanted to write everything about Spirit Breaker in one post but this is
            long enough as it is. I'll be doing part 2 which will include item builds and gameplay.
            I'll also include good questions we get in this post if they cover something I haven't
            thought of. I hope you all enjoyed this post, it was a real joy writing about my
            favourite space cow and hopefully, it helps a few of you appreciate him a little more.
            Till next time!
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

Position4Or5SpiritBreakerGuide.skipAuthentication = true

export { Position4Or5SpiritBreakerGuide }
