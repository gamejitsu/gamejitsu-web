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

const Position5MasterGuide: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} pt={[4]}>
        <a id="start"></a>
        <Box>
          <MainTitle>Position 5 master guide</MainTitle>
        </Box>
        <GuideParagraph>
          In Dota 2 there are 5 positions a player will take for their team. They are the Carry,
          Midlaner, Offlaner, Soft support, and Hard support.
        </GuideParagraph>
        <GuideParagraph>
          The positions are defined by the farm priority they have, lane they take, and job in the
          game. But is there more to every role than the lane they go? Is an offlane Slardar the
          same as an offlane Necrophos? Does an Enchantress 5 do the same job as a Warlock 5?
        </GuideParagraph>
        <GuideParagraph>
          This guide intends to look more closely at position 5 and show the different ways the role
          can be played. I'll also provide examples of heroes who fulfill the specific types of play
          styles each subrole can take. I am hoping lower-ranked players who wish to increase their
          MMR can use this information to pick the role they are best suited for and veteran players
          to find new ways to enjoy Dota.
        </GuideParagraph>
        <GuideParagraph>Here are some of the ways position 5 can be played.</GuideParagraph>
        <GuideHeading1>Position 5. Hard support.</GuideHeading1>
        <GuideParagraph>
          When it comes to Hard support, I think there are 2/3 very distinct styles it can be played
          without much overlap.
        </GuideParagraph>
        <GuideHeading2>1) Lane Dominator</GuideHeading2>
        <GuideParagraph>
          This style of playing the position 5 relies massively on winning the first 10 minutes of
          the lane. It's also often called the position 6 support because the heroes here lack
          scaling and focus entirely on support items. It's very common to find this style of play
          ended the game with boots, wand, and hopefully a Glimmer or Force staff.
        </GuideParagraph>
        <GuideParagraph>
          This style of position 5 is very good for people who are happy to fully support their
          cores. Later in the game, the lane dominator is expected to break smokes, walk high ground
          to provide vision for his team, absorb as many stuns and spells as possible before dying.
          It is an incredibly selfless style of Dota but it works if the team has strong core
          players who need to be enabled.
        </GuideParagraph>
        <GuideParagraph>
          This style works well with weak carry laners who really need a strong support to sustain
          them early. It also bolsters strong lane carries like Ursa to dominate their lane. This is
          why it's seen as such a popular way to play position 5. And even though the strength of
          this playstyle diminishes the longer the game goes on, it can still make plays even late
          in the game to win it.
        </GuideParagraph>
        <GuideParagraph>
          Heroes who excel in this style: Undying. Enchantress. Crystal Maiden. All these heroes are
          expected to decimate the enemy offlane and help the carry get free farm.
        </GuideParagraph>
        <GuideHeading3>Undying</GuideHeading3>
        <GuideParagraph>
          One of the best if not the best lane dominating supports. Decay spam makes trading against
          him near impossible, soul rip is a great nuke and heal with a low cooldown at max level.
          Tombstone makes prolonged fights very good for undying and Flesh Golem gives Undying the
          hp he needs to tank everything. However after the 20 min mark, Undying falls off due to
          being susceptible to burst and providing no stuns as a support.
        </GuideParagraph>
        <GuideParagraph>
          While Undying is quite weak in the late game, there are a few things he can do to bolster
          his effectiveness. Using Soul Rip only for heals is the best way to use it later on, as it
          loses 25% effectiveness (or more) as a nuke due to enemy magic resistance. Tombstone
          provides massive vision in fights, so putting it on a cliff can make all the difference in
          close engagements. Apart from that, the hero is fantastic with an Aghanims, so getting it
          from the 3rd or 4th Rosh can make the hero a big threat again.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/rdbrvutb3aa61.png?width=946&format=png&auto=webp&s=cf51d553f43c2ff2ac6b05fdf8b11e44d8e77ec6"
          }
          caption={
            "This hero can effectively zone two heroes all by himself, especially if they're Strength heroes."
          }
        />
        <GuideUpdate>
          <b>Shard Update: </b>Undying's shard increase Decay AoE by 100 and spawns a zombie on
          affected enemies.
        </GuideUpdate>
        <GuideParagraph>
          It's a decent upgrade to Decay but it's hard to imagine rushing this at 20 minutes. A pos
          5 Undying benefits a lot more from utility items than from this upgrade. This is one of
          those shards that can be skipped until 50 minutes.
        </GuideParagraph>
        <GuideHeading3>Enchantress</GuideHeading3>
        <GuideParagraph>
          Amazing in the laning stage due to getting strong creeps. Her Impetus and high sustain
          mean that trading against her is difficult for most opponents. However, she is one of the
          squishiest heroes in the game with an ulti that only works vs physical damage
        </GuideParagraph>
        <GuideParagraph>
          Her ability to get creeps for a short duration is fantastic during the laning stage when
          she can go to the jungle, grab a strong creep, and use all it's mana before it expires.
          However later in the game finding useful creeps just when they are needed is difficult to
          manage. Not to mention that only specific neutral creeps are worth having in team fights
          late game.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/mgk7c02b3aa61.png?width=849&format=png&auto=webp&s=1f24b35e40d938dbf6dd8db1fcbbc1185e5083d6"
          }
          caption={
            "When playing AGAINST enchantress, you want to try your best to keep this large camp blocked, either with wards or with your hero. Having this creep enables her to get ez high level creeps to decimate your lane. When playing AGAINST enchantress, you want to try your best to keep this large camp blocked, either with wards or with your hero. Having this creep enables her to get ez high level creeps to decimate your lane."
          }
        />
        <GuideUpdate>
          <b>Shard Update:</b> Adds 3 permanent Nature’s Attendants that follow you around.
        </GuideUpdate>
        <GuideParagraph>
          It's good passive healing that might help Enchantress from being bursted down early in
          fights. It's 39 (99 with talents) hp healed a second, which is nothing to scoff at. Still
          Enchantress might get more survivability out of other items first, before getting her
          Shard later in the game.
        </GuideParagraph>
        <GuideHeading3>Crystal Maiden</GuideHeading3>
        <GuideParagraph>
          At level 2, CM has one of the best nuking combos in the game. 280 damage combined with 1.5
          seconds of root and 5 seconds of slow. She also provides solid mana sustain for her entire
          team, easing the laning stage for everyone. However she is incredibly slow, fragile and
          has no bkb piercing abilities. CM is great during the laning stage but her power
          diminishes significantly as the game progresses.
        </GuideParagraph>
        <GuideParagraph>
          Later in the game, CM's usefulness (beyond typical pos 6 jobs) extends to spamming Crystal
          nova in fights. Nova is a 5 second slow on an 8-second cooldown. It's a solid nuke that
          also provides vision in the area it's used. More importantly, it has a very good cast
          range which enables CM to stay safe while spamming it. Frostbite should only be used on
          enemies who come to close due to its cast range. It's better to stay behind and use it
          when an enemy tries to target CM than it is to walk into dangerous territory and die. As
          for her ultimate, Freezing field...uhh.... it exists? (At low level games you might be
          lucky to somehow farm a BKB due to the inefficiency of your cores, at high level it’s just
          a last dance before death)
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/1698t6la3aa61.png?width=780&format=png&auto=webp&s=32e6f97245d1d16777ff36a75a0472c8a2d42fbd"
          }
          caption={
            "She can outfight almost anyone with Crystal Nova, but bear in mind her base mana is ridiculously low even for an INT hero. Grab some Mangoes"
          }
        />
        <GuideUpdate>
          <b>Shard Update: </b>Reduces Frostbite cooldown by 1 second and allows it to be cast on
          yourself, reducing incoming damage by 70% for the duration. Allows casting Frostbite while
          channeling as long as a valid target is in range. Quite a comprehensive shard upgrade,
          let's break it down to bullet points:
          <br />
          <ul>
            <li>Frostbite cooldown reduced by 1 second</li>
            <li>Frostbite can be selfcast, reducing incoming damage by 70%</li>
            <li>Frostbite can be cast while channeling</li>
          </ul>
          <br />
          That's a lot of upgrades, each providing a respectable benefit. Being able to Frostbite
          yourself while channeling Freezing Field seems pretty good. Also as CM gets killed first
          in each fight, she can just bite herself when enemies jump on her. 5 Second cooldown on
          Bite makes it super spammable.
          <br />
          <br />
          It looks good on paper but time will tell how good this Shard is. As usual, pos 5s should
          be prioritizing getting their core support items first, then consider Shards or even
          Aghanims.
        </GuideUpdate>
        <GuideHeading2>2) Scaling position 5</GuideHeading2>
        <GuideParagraph>
          This is a slightly greedier version of playing position 5. This style involves using
          heroes that aren't amazing during the laning stage but are more valuable later in the
          game. Heroes here often have a bkb piercing ultimate or large teamfight ability that makes
          them a threat even late game.
        </GuideParagraph>
        <GuideParagraph>
          This style works well when it's combined with a carry who can self sustain or it's versus
          a weak offlane combo. Remember that you are sacrificing some of the position 5's laning
          stage for a stronger late game. This style needs games to be dragged out for it to be
          fully effective.
        </GuideParagraph>
        <GuideParagraph>
          Heroes who excel in this style: Keeper of the Light. Warlock. Lion. Heroes with strong
          ultimates who can become threats even to late-game carries.
        </GuideParagraph>
        <GuideHeading3>Keeper of the Light</GuideHeading3>
        <GuideParagraph>
          While Kotl has great movement speed, it doesn't amount to much during the laning stage. He
          is relatively squishy and his right clicks feel like rough hugs more than anything. Most
          of the time Kotl will try to blast range creeps or simply pull creeps. With the removal of
          Blinding Light as a basic ability, the hero is even less of a presence during the laning
          stage. More than any other pos 5, Kotl relies on his carry to win the laning stage.
        </GuideParagraph>

        <GuideParagraph>
          Past the laning stage, Kotl becomes more and more of a threat. His ulti is incredibly
          powerful. Chakra is a godsend for heroes with low cooldowns or mana issues and using
          Blinding Light on an enemy core can more than halve their physical damage for 6 seconds.
          Kotl is also fantastic for pushing dead lanes and farming with his Illuminate. With his
          farming ability, it's easy for him to get multiple useful items for his team. Recall also
          serves as a great splitpushing assist, having one of your teammates pushing sidelanes and
          then recalling them to force a 5v4 or even 5v3 teamfight.
        </GuideParagraph>
        <GuideParagraph>
          It takes good positioning to get the most out of this hero but in the right hands, Kotl is
          a force to be reckoned with late game, especially when this hero doesn’t even require much
          items to be an annoyance.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/lc011eg93aa61.png?width=1079&format=png&auto=webp&s=14f8d8cc820ed984c8d80141e58b0b6974b0dd30"
          }
          caption={
            "Actively stacking creeps is a must for any good KotL, because you can farm them quickly, and no one can contest it or they risk eating a white flying horse to the face."
          }
        />
        <GuideUpdate>
          <b>Shard Update: </b> Causes Illuminate to heal allied units for 40% of its damage during
          daytime.
        </GuideUpdate>
        <GuideParagraph>
          A respectable upgrade for late game, providing the team with 210/275 heal when fully
          casted. It is limited to healing during daytime only though, which makes it useless 50% of
          the time. It's a decent shard but usually not worth rushing. You might want to consider it
          early only when you are deathballing and aiming to go highground against heroes like
          Spectre who couldn’t really defend but at the same time want to drag the game out.
        </GuideParagraph>
        <GuideHeading3>Warlock</GuideHeading3>
        <GuideParagraph>
          During the laning stage, Warlock provides a respectable heal for his core and decent
          harass with Fatal bonds. That's really all he has going for him. Unfortunately, the hero
          lacks early stuns and simply does nothing against ultra-aggressive offlaners. His stats
          aren't amazing either except for his above average strength gain. The hero requires levels
          to be useful and takes his time to come online.
        </GuideParagraph>
        <GuideParagraph>
          However, later in the game Warlock provides an incredible slow, a massive AOE BKB piercing
          stun, and the % damage of Fatal Bonds is always great. Not only that but bringing him down
          in fights is risky when he hits level 20, as he gets a free ultimate when he dies anyway.
          His slow makes teamfights awkward as enemies will have to "waste" a stun to stop it's
          channelling and the hero is simply too bothersome to focus down. Warlock's insane ulti
          cast range means that he'll be able to bring it down in every fight.
        </GuideParagraph>
        <GuideParagraph>
          He also benefits greatly from the 3rd Rosh. Whether it's the Refresher Shard or the
          Aghanims, Warlock's 2 golems wreck havoc in fights.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/msaqeju83aa61.png?width=647&format=png&auto=webp&s=1557a1dec98ac0ceed2d55dc1497d4bd927b8566"
          }
          caption={
            "Bear in mind your Shadow Word can be used to heal your carry, yet at the same time can be used to outzone enemy supports too."
          }
        />
        <GuideUpdate>
          <b>Shard Update:</b> Shadow Word now provides +20/-20% movement speed on allies/enemies.
        </GuideUpdate>
        <GuideParagraph>
          Definitely one of the weaker shards to get. I imagine it's made for players who go for the
          Shadow Word talents. Problem is who wants 500 AOE Shadow Word when you can get a free
          golem instead? Warlock scales well into the late game but his shard is definitely not
          worth getting.
        </GuideParagraph>
        <GuideHeading3>Lion</GuideHeading3>
        <GuideParagraph>
          Perhaps a bit surprising to find Lion here, nevertheless it is where (I believe) he
          belongs, despite recent Dota power creeping causing this hero to be a former shadow of
          itself. Lion is absolutely atrocious in the lane, being slow, squishy, and unable to trade
          hits with the enemy. His combo of Stun + Mana Drain is extremely lackluster now. Lion's
          early levels are a nightmare, with Hex having a 30 second CD and Finger of Death taking
          almost 3 minutes to recharge. He was once thought of as a strong early support but with so
          many other position 5 heroes to pick who lane better, Lion just looks weak by comparison.
          With every hero in Dota getting slowly buffed with mobility spells, stat gains, spell
          resistance, status resistance etc... yet Lion is just forgotten, it’s sad to say this hero
          just isn’t that great now.
        </GuideParagraph>
        <GuideParagraph>
          There is a bright side though, Lion's disables become more and more useful as the game
          goes on. Landing an Earth spike on multiple heroes can win fights outright. When Hex is
          maxed, it's a 4 second disable on a 12-second cooldown. He can provide almost 8 seconds of
          disables with a giant scaling nuke to finish opponents off. A good Lion player is a
          priority target for enemies to focus down in every fight, he's simply too dangerous to
          ignore. All this of course assumes your carry doesn't get destroyed in lane.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/jo5xtaf83aa61.png?width=1023&format=png&auto=webp&s=0e6dc2f79cfdb0b2c7c0dc8910a41f982d6d5832"
          }
          caption={
            "The hero has pitiful base damage to zone, average BAT and 12 seconds CD on Impale for measly 80 damage level 1. Better off pulling and contesting pulls instead."
          }
        />
        <GuideParagraph>
          Another upgrade that players can ignore most of the time. True sight on the target is good
          to have, yet players can just plant a sentry, especially a support player like Lion. The
          attack speed reduction is respectable but it's hard to justify it over a force staff or
          glimmer cape. Most enemies can just go magic immune to dodge it and Lion has better things
          to do in fights than mana drain an enemy for 5 seconds.
          <br />
          <br />
          It's another skippable shard for sure.
        </GuideParagraph>
        <GuideHeading2>3) Dual purpose 5's:</GuideHeading2>
        <GuideParagraph>
          When picking a position 5, it doesn't have to be a choice between a strong laning stage or
          a strong late game. Many pos 5's can do well in the laning stage and scale well into the
          late game. Here are some of the heroes who excel in both.
        </GuideParagraph>
        <GuideHeading3>Disruptor</GuideHeading3>
        <GuideParagraph>
          Disruptor is a fantastic pos 5 to have at all stages of the game. He can win the laning
          stage with Thunder Strike spam. It not only slows enemy movement but also their attack
          speed, making trades extremely favorable for Disruptor. The vision provided also means
          that enemies will take a few slaps on the butt as they retreat.
          <br />
          <br />
          After the laning stage, Disruptor can control the battlefield with Glimpse and Kinetic
          field to separate his enemies. Static Storm is an instant AOE silence nuke that does more
          damage during it's 5 second duration. It effectively creates a "no-go" area for the enemy.
          <br />
          <br />
          With Aghanim this hero can cast an AOE Doom, catching 2 enemies with it will win most
          fights for his team. His only problem is that the hero isn't very strong from behind.
          Glimpse really does nothing when your team is losing and Static Storm doesn’t provide
          enough damage to kill. Despite his flaws, Disruptor is well worth mastering.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/mttpnep73aa61.png?width=749&format=png&auto=webp&s=20d895770c243e040dde91696a6120c28bab2b02"
          }
          caption={"With Thunder Strike, enemies are severely discouraged from trading with you."}
        />
        <GuideUpdate>
          <b>Shard Upgrade:</b> Allows Thunder Strike to be cast on allies, follows the ally and
          deals damage around them. Each strike gives a short 1s buff that provides +50% MS and +75
          Attack Speed (strike interval is every 2 seconds). Increases radius by 160 when used on
          allies.
        </GuideUpdate>
        <GuideParagraph>
          Buffing allies with 50% ms is pretty nuts honestly. The problem is that Disruptor's
          Aghanim's upgrade is so good that Shard is never worth rushing over it. An AOE Doom is
          simply too good to pass up. You might want to consider Shard first if your carry is a
          farmed Sven or Ursa who runs at people, or Shard after Aghanim’s Scepter if you are
          playing an advatangeous game. In losing games though, Glimmer will be the better choice
          for gold.
        </GuideParagraph>
        <GuideHeading3> Winter Wyvern</GuideHeading3>
        <GuideParagraph>
          Another very flexible hero. Wyvern has multiple slows to win the laning stage and is quite
          tanky for a pos 5. Arctic burn can hit multiple targets from a distance while giving
          Wyvern flying movement, which can help escape sticky situations. Splinter Blast is a great
          nuke on a low cooldown. Wyvern is a solid laner, though slightly hampered by the long
          cooldown on Arctic Burn and the situational use of her Blast as overusing Splinter Blast
          during laning will not only cause the lane to push, but also potentially steal farm from
          your carry (which will really piss them off if you’re playing solo MMR)
          <br />
          <br />
          One of the best things about this hero is her Ulti. Wyvern's ulti can turn fights around
          at any moment. It can be used on BKB targets just to waste most of their BKB, it can burst
          down enemy supports and even some cores. Such a powerful ulti makes Wyvern one of the best
          play making position 5 heroes, along with a great hero to turn the game when you're
          behind.
          <br />
          <br />
          The hero does come with some issues though. Splinter blast and Winter's curse both heavily
          rely on the opponent's positioning, while Cold Embrace can be easily misused, making this
          hero difficult to master. Wyvern's amazing strength is balanced out by her difficulty.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/dx4p7x973aa61.png?width=747&format=png&auto=webp&s=d11e2abb48e4f380974ce5cfd3d518035e0febbd"
          }
          caption={
            "The hero might be slow and doesn't provide aggressive zoning as some other heroes, but her 90 seconds cd mini Blackhole with decent casting range makes up for her shortcomings. What else did you pick her for besides seeing enemies kill each other?"
          }
        />
        <GuideUpdate>
          <b>Shard Upgrade:</b> When Cold Embrace ends, a Splinter Blast goes off at that location,
          hitting enemies within 1200 range.
        </GuideUpdate>
        <GuideParagraph>
          A free Splinter Blast everytime Cold Embrace is used is actually pretty darn useful.
          Splinter blast is a great spell and hasving an extra "charge" of it adds a lot of utility
          to Wyvern. It's massive AOE is nothing to scoff at either.
          <br />
          <br />
          It looks great on paper, but I believe more time is needed to fully judge how good this
          shard is.
        </GuideParagraph>
        <GuideHeading3>Bane</GuideHeading3>
        <GuideParagraph>
          The nightmare of carries as well as the bane of their existence. Bane is one of the best
          disabling supports out there but he comes with a pretty high skill ceiling.
          <br />
          <br />
          During the laning stage, Bane can output tremendous pressure on the enemy offlane.
          Nightmare is 4 seconds of free hits, while Brain sap makes trading against Bane pointless
          at best. He also has great stat gain which makes his laning presence even more impressive.
          <br />
          <br />
          The mid game is probably Bane's strongest timing. Fiend's grip can remove an enemy for 6
          seconds while dealing significant damage. (If you position yourself well enough to not get
          stunned, or you have a Glimmer Cape used in conjunction) Combining it with a nightmare on
          another enemy, Bane can potentially turn fights into a 5 v 3 for his team.
          <br />
          <br />
          Later in the game Bane's impact diminshes due to the fact that when enemies stick as 5,
          it's easy for one of them to cancel a Fiend's grip. Another thing is a lot of teams will
          buy a Linken or Lotus Orb to counter Bane. Bane's average cast range and movement speed
          also make it hard for him to grip key targets in fights.
          <br />
          <br />
          Still, despite his weaknesses late game, Bane is always useful to have around. Nightmare
          saves can save cores and turn fights around. Fiend's grip is one of the best single target
          disables which also pierces BKB. A dificult hero to master but in the right hands Bane
          always demands the enemy's attention.
        </GuideParagraph>
        <GuideImage
          src={
            "https://preview.redd.it/orx5qxu63aa61.png?width=591&format=png&auto=webp&s=8c0895b8121b77bb803ccdd04b8a6674eed8b27a"
          }
          caption={
            "Back when he had damage-decreasing Enfeeble, every carry player hates him. Still hate him though."
          }
        />
        <GuideUpdate>
          <b>Shard Upgrade:</b>Fiend’s Grip now creates an uncontrollable illusion that is also
          channeling Fiend’s Grip on the target. Illusion takes 750% incoming damage and immediately
          dies if it is interrupted. Multiple Fiend’s Grip effects do not stack on the target.
        </GuideUpdate>
        <GuideParagraph>
          A pretty damn good shard upgrade for Bane. It also comes at the time he really benefits
          from it. Around 20 minutes is when teamfights start becoming common and that's when Bane
          starts having some issues. While his ulti is incredible, it's also easy to cancel with any
          stun or silence. Having an extra "Bane" channel fiend's Grip in fights can really offset
          that problem.
          <br />
          <br />
          It's not a complete solution of course, enemies with AOE disables could catch both Banes.
          However it's an extra headache for enemies and that's the whole point of Bane isn't it?
        </GuideParagraph>
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
      </Box>
      <Spacer padding={60} />
      <Footer />
    </Container>
  )
}

Position5MasterGuide.skipAuthentication = true

export { Position5MasterGuide }
