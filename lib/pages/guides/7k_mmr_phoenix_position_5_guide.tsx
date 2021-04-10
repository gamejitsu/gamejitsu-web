import React from "react"
import { Box, Flex } from "rebass/styled-components"
import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Footer } from "gamejitsu/components"
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

const Position5PhoenixGuide: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} pt={[4]}>
        <a id="start"></a>
        <Box>
          <MainTitle>7k MMR Phoenix position 5 guide</MainTitle>
        </Box>
        <GuideParagraph>
          If you've followed Singapore Major recently, you'll see iG picked 4 games of Phoenix in
          the grand finals, which is played by both Kaka and Oli respectively. Phoenix is a very
          flexible hero and is capable of playing in any role, but realistically he or she is best
          suited for 5. Extremely well as a 4 and occasionally as a 3.{" "}
          <b>This guide is assuming Phoenix as a 5. Why Phoenix? What are its strengths?</b>
          <ul>
            <li style={{ textDecoration: "line-through" }}>Because scree kaw kaw haha im a bird</li>
            <li>
              The strength of Phoenix is its ability to push waves while not showing on the map,
              making it very easy to play the dead lane as Phoenix is very evasive and hard to kill.
            </li>
            <li>In doing so, you can get levels/farm and have more impact.</li>
            <li>
              Most cores prefer not to counter-pick a Phoenix so you won't be playing against hard
              counters in most games in this meta.
            </li>
            <li>
              The amount of chaos created by simply dropping your Egg is enough to win most fights
              by making the enemy decide to focus your egg or run away.
            </li>
            <li>
              Phoenix also doesn't need many items to have massive impact making him an ideal 5.
              Back when laning was all about winning the lane for an advantage Phoenix is not
              preferred as a 5 compared to lane dominators like Disruptor and Undying, but in the
              current meta where anyone can be a 5, Phoenix excels because it is great at teamfights
              later.
            </li>
            <li>
              Phoenix is also extremely good at sieging with Sunray and using Egg if they
              overcommit. The damage, the heal, the bzzzzzt sound effect demoralizing enemies to try
              to commit fully into teamfights are all its strong points.
            </li>
          </ul>
        </GuideParagraph>
        <GuideHeading2>How should I build Phoenix?</GuideHeading2>
        <GuideParagraph>
          <ul>
            <li>
              As a support Phoenix, sometimes you can change up your build and decide between maxing
              Sun Ray or Fire Spirits.
            </li>
            <li>
              If you are 4-5 manning a lot, prioritize Sun Ray and if your team is more focused on
              split pushing.
            </li>
            <li>
              If teamfights aren’t happening as often and you are expected to push deadlanes, max
              Spirits and push out the deadlane while making sure you always have a TP ready to
              defend towers.
            </li>
            <li>
              <b>What is the “deadlane”?</b>
            </li>
            <li>
              The deadlane essentially means the most risky lane to play in, Typically, this may be
              the lane which is the most pushed out, or the lane where the enemy heroes have the
              highest kill potential.
            </li>
            <li>
              Dead lanes are hard to push, but still keeping them pushed causes a tug-of-war effect,
              where the enemies have to commit heroes to come and defend while you can immediately
              TP back to force a 5v4 teamfight.
            </li>
            <li>
              Phoenix can push deadlanes effectively because you can throw Fire Spirits from a super
              far range, out of sight.
            </li>
            <li>
              If enemies ever try to catch you when you try to push deadlanes, just Icarus Dive and
              TP away. Take extra caution if the enemy has heroes like a Spirit Breaker though.
            </li>
          </ul>
        </GuideParagraph>
        <GuideHeading2>Regarding Phoenix’s laning stage. How does it fare?</GuideHeading2>
        <GuideParagraph>
          <ul>
            <li>One thing to note is Phoenix's laning is not great but not terrible either.</li>
            <li>
              With a 51/44/37/30 cooldown scaling on its Fire Spirits, as a support, in most cases,
              you will mostly be using your Spirits to harass/trade off cd and playing defensively
              while concentrating on stacking/pulling to get as much exp as possible without
              leeching too much from your core.
            </li>
            <li>
              In game 3 of IG vs EG in the Singapore Major, Oli's Phoenix was literally lvl 1 with
              not a single point of exp until 4 minutes because he kept getting chased and harassed
              around by Cr1t.
            </li>
            <li>
              Sometimes you have to save your Spirits just to survive (especially against a Tusk or
              Earth Spirit). Position 4/5 Phoenix playstyle is very similiar, playing to get levels
              and winning the lane is a bonus.
            </li>
            <li>
              If you can harass the enemy laners by all means go for it, but if you couldn’t, just
              go and stack creeps. Phoenix can stack multiple camps at once with practice.
            </li>
            <li>
              Also, a few simple tricks to hit your Spirits easily. Throw Spirits when the enemy is
              trying to last hit a specific creep, or deny creeps.
            </li>
            <li>
              Ideally avoid throwing two or more spirits at once unless you’re confident you can hit
              two heroes separately, because you want to keep your Spirits with you for as long as
              possible to force movements from the enemies.
            </li>
            <li>
              Remember, Fire Spirits have a bloody long cooldown so you should make sure you don’t
              waste all the valuable little birds 2 seconds into the spell. That way, the enemies
              know you have a long downtime and will proceed to play aggressively.
            </li>
          </ul>
        </GuideParagraph>
        <GuideHeading2>Early Game, what should Phoenix be doing in the laning stage?</GuideHeading2>
        <GuideParagraph>
          <ul>
            <li>Phoenix is extremely exp hungry and requires a lane to play in.</li>
            <li>
              You can create your own “lane” by stacking the jungle and asking your carry/mid to
              clear it while you sit in a lane. This is what Oli does in most cases when he is not
              needed to defend towers. Your carry will love the stacks, and you’ll appreciate the
              EXP from the lane.
            </li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7k_mmr_phoenix_position_5_guide/lowq_001_stacking.jpg"
          }
          caption={
            "Phoenix is probably the easiest hero to do multi-stacks aside from Shadow Demon."
          }
        />
        <GuideParagraph>
          <ul>
            <li>
              Stacking at every moment is also a good discipline to have as a 5 and is what Oli
              does.
            </li>
            <li>
              In some cases, the deadlane can't be occupied even by a Phoenix but it's still a good
              idea to shove the deadlane to force rotations.
            </li>
            <li>
              Pay attention to your EXP and the game time and try to get lvl 6 before 10-12 minutes.
              One dirty trick I use if the carry refuses to jungle when he could is to ping jungle
              camps and tell him “I think there’s stacks here” to trick him into leaving the lane
              while I take lane farm.
            </li>
            <li>
              Sometimes you need to take EXP from the stacks you made instead of giving it to your
              cores. Most of the reason you want to give as much exp to your carry as a 5 in the
              laning stage is so that the carry has enough farm/levels to move out from the safelane
              to pressure the enemy safelane tower or jungle efficiently.
            </li>
            <li>
              Always be on the lookout for empty lanes when your cores rotate around and soak up
              EXP. The earlier you reach level 6, the earlier you can start skirmishes which can
              potentially get you a tower or even two.
            </li>
          </ul>
        </GuideParagraph>
        <GuideHeading2>Mid Game. How should Phoenix be fighting?</GuideHeading2>
        <GuideParagraph>
          <ul>
            <li>
              Don't be afraid to Egg. Sometimes you just have to go in and die for your team to
              actually play the game. Try to position your Egg in a way to bait the enemy closer to
              your team instead of trying to Egg to ensure it doesn’t break.
            </li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7k_mmr_phoenix_position_5_guide/lowq_002_supernova.jpg"
          }
          caption={
            "Of course, the best Eggs are in conflicting positions, which being positions that force your opponents to choose whether to fight or back off. Chances are, they'll be too confused to react to you. Great for counter-initiations."
          }
        />
        <GuideParagraph>
          <ul>
            <li>
              In some cases you need to play around your Sun Ray instead of your Egg. Mostly in
              sieging or if your cores keep getting jumped and dying. Or if the enemy has really
              good anti-egg heroes (Jugg, Ursa, Lifestealer, etc..)
            </li>
            <li>
              In the mid game, if the enemy cores have very strong kill threats on you or your
              cores, like a Storm with an Orchid or a Void Spirit with aghs, you should be playing
              near your team and breaking smokes by standing on highgrounds or be in position to
              counter initiate in fights.
            </li>
            <li>
              Other than that, if your team needs time to farm and meet their timings, just sit in
              the deadlane which is the most unsafe lane and shove it out while hiding in the trees.
            </li>
            <li>
              Sometimes you have to put yourself at risk so your cores can feel just a little bit
              safer. If your team is really behind, you might have to cover your cores and watch
              them push out a lane.
            </li>
          </ul>
        </GuideParagraph>
        <GuideHeading2>Late Game strategies, how to Egg (Supernova)?</GuideHeading2>
        <GuideParagraph>
          <ul>
            <li>
              Anything goes at this point and as long as you get your egg off, the fights should be
              rather easy. Because in the late game, your cores should have disables in the form of
              Abyssal Blades or enough damage to deter the enemy from killing your egg.
            </li>
            <li>
              There are also other ways to play around your Egg. Phoenix and Enigma are similar in
              the sense that the threat they present by not using their Ultimates already exerts a
              ton of pressure on the enemy. This makes Phoenix ideal at sieging highground as all
              you need to do is Sun Ray your cores. If the enemy either decides to commit and
              initiate on your team, commit Fire Spirits + Egg to immediately counter-initiate.
            </li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7k_mmr_phoenix_position_5_guide/lowq_003_sieging.jpg"
          }
          caption={
            "During slow sieges, all you have to do is to Sun Ray your cores sieging the tower at a safe position."
          }
        />
        <GuideParagraph>
          <ul>
            <li>
              That being said, try not to aggressively Egg to start fights. The use of Egg should be
              more towards counter-intitiating or resetting fights. You want the primary effect of
              confusing the enemy on whether they should destroy your egg or run, not go in and tell
              them to “hit me, HIT ME”. You aren’t a masochist, those are Bristleback players.
            </li>
            <li>
              Always try to fight around compact areas with hills/highgrounds nearby. If you manage
              to get your Egg off on a cliff it’s pretty hard to lose a fight.
            </li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/7k_mmr_phoenix_position_5_guide/lowq_004_icarussupernova.jpg"
          }
          caption={
            "Oli sometimes commit Icarus Dive to fly to some weird-ass position to Supernova -- EG is unable to react as they'll have to circle around."
          }
        />
        <GuideParagraph>
          <ul>
            <li>
              Don’t show on the map and make yourself an easy target, you want to make the enemies
              really work for your death by making themselves go out of position.
            </li>
          </ul>
        </GuideParagraph>
        <GuideHeading2>Itemization</GuideHeading2>
        <GuideParagraph>
          <ul>
            <li>
              You can think of using your buyback as an offensive item if you are in a decent
              position and you made the enemy overcommit to kill you. Oli really prioritizes having
              buyback unless he can get his Eul's in 1 shot.
            </li>
            <li>
              Euls - Your main job in teamfights is to get your egg off, and you can't do it if you
              are dead. Eul's helps you to survive and kite in fights as well as give you a disable.
            </li>
            <li>
              Force Staff/Glimmer Cape - Usually it's one or the other. In some games, Glimmer can
              be useless and you badly need the repositioning use of the Force Staff instead. Get
              either of these 2 items if you feel Eul isn't necessary to survive.
            </li>
            <li>
              BKB - Against a ton of hard disables, you might need to consider getting BKB instead
              of Euls just to guarantee your egg off.
            </li>
            <li>
              Refresher - What's better than 1 egg? Pay attention to your mana and carry some spare
              mangos if you decide to rush Refresher. If the enemy has no kill threat on you at all
              you can just rush a refresher to guarantee a teamfight win.
            </li>
            <li>
              Halberd - If you don't feel you need a dispel in the form of Euls, you can tank
              yourself up instead to make the enemy take longer to kill you. Halberd is also overall
              a great item against the meta carries in this patch (Troll, Monkey King, Slark, etc).
            </li>
            <li>
              Hex - If your team is lacking in the hard disables department then in some cases you
              need to go for a Hex.
            </li>
            <li>
              Shiva's Guard - Once again, if the enemy has no silence/disables, you can rush these
              luxury items if you prefer.
            </li>
            <li>
              Aghanims – It's an okay item but only get it if the enemy has no egg hitters or if you
              are absolutely confident in your Egg positions.
            </li>
            <li>
              Urn of Shadows – As a 5, you won’t actually be making many aggressive plays to get urn
              charges and instead you will mostly be breaking smokes and covering your cores. I
              highly recommend against getting Urn as a 5 unless nobody else is getting it.
            </li>
          </ul>
        </GuideParagraph>
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
  )
}

Position5PhoenixGuide.skipAuthentication = true

export { Position5PhoenixGuide }
