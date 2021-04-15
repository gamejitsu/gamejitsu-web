import React from "react"
import Head from "next/head"
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

const UltimateTutorial: AuthenticatedComponent = () => {
  return (
    <>
      <Head>
        <title>{`Gamejitsu - Ultimate Tutorial for new Dota 2 Players`}</title>
      </Head>
      <Container>
        <Box px={[4]} pt={[4]}>
          <a id="start"></a>
          <Box display={["none", "none", "block"]}>
            <GuideBanner
              src={
                "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2/banner_crop.png"
              }
            />
          </Box>
          <Box>
            <MainTitle>The Ultimate Tutorial for new Dota 2 Players</MainTitle>
          </Box>
          <GuideParagraph>
            With the recent Netflix Dota 2 series being a huge hit, I imagined that there are some
            new players who want to try out Dota 2 itself but are struggling to do so because Dota 2
            is notoriously hard to learn.
            <br />
            <br />
            While Dota 2 has some new player experience included in the game itself, the game has a
            literally vertical learning curve, and written guides may be helpful for players who
            like to read and learn at their own pace.
            <br />
            <br />
            With this, I decided to come up with a guide on <b>Davion the Dragon Knight</b>,
            specifically for new players. The guide will have around 10 episodes, and a final
            collective post will be released afterwards for ease of access.
            <br />
            <br />
            Dota is a highly complex game, it will make no sense to try to learn everything right
            off the bat.
            <br />
            Hence, I’ll include only the essentials enough for you to start enjoying the game right
            away while learning it!
            <br />
            <br />
            !! start info dump !!
            <br />
            <br />
            Your first step? Download the game, get into the main menu, click on Play Dota, and
            start a bot match. I recommend easy because passive bots aren’t passive, they’re
            completely useless in helping you learn the game because passive bots ACTIVELY REFUSE TO
            ATTACK THE PLAYER.
            <br />
            <br />
            <b>F1 to select your hero</b> (you can change every hotkey in the settings menu),{" "}
            <b>
              heroes normally have 4 spells they can cast to do things, 6 item slots to buy items
              that can also do things, you get to learn or upgrade a spell every time you level up,
              one of the spells is an ultimate spell that you can only acquire at level 6.
            </b>
            <br />
            <br />
            !! info dump end. Sorry for scaring you. !!
            <br />
            <br />
            Once you start the game, you will be greeted with the pick hero screen.
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch01"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c01_001_pickdk.jpg", "lowq_c01_002_pickdk.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                There are over a hundred different heroes in Dota, each having completely different
                skillsets and looks. Some can be simple, some require thirty fingers and three
                keyboards to play on a decent level. For now, we will go with our trusty Davion, the
                Dragon Knight. Lucky for you, he is mechanically simple, great for a new player.
              </li>
              <li>
                Dota items look like a library of headache for new players, but for now, let’s just
                buy whatever the default game guide tells us to buy. You can take your time reading
                what the items do while you wait for the countdown.
              </li>
              <li>
                This is you. Doesn’t look as suave as the Netflix Davion? Don’t worry you can always
                play barbie doll and dress up your hero later. Dota has a far more developed
                cosmetics (“skin”) system compared to almost every other online game in the world.
                Have fun wasting money buying hats!
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch02"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c02_001_base.jpg",
              "lowq_c02_002_base.jpg",
              "lowq_c02_003_base.jpg",
              "lowq_c02_004_base.jpg",
              "lowq_c02_005_base.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                This is the fountain area. You spawn, heal and respawn here. If you keep seeing the
                respawn animation throughout the game, don’t worry, you probably just suck at the
                game, dying over ten times isn’t a bug in this game. Welcome to Dota 2.
              </li>
              <li>
                This is the shop. You can also access the shop by clicking on the button on the
                bottom right of your screen, but you don’t really need to buy anything more now. You
                don’t have money anymore anyway after buying the recommended starting items.
              </li>
              <li>
                This is your “Ancient”. Obviously, since the game is called “Defense of the
                Ancients”, you want to defend this thing and destroy the enemy’s Ancient to win.
              </li>
              <li>
                These are tier 4 towers. The strongest towers in the game, protecting your Ancient.
              </li>
              <li>
                As you go further out, you can see the tier 3 tower, which defends your base’s entry
                point(s). You have 3 of them in different lanes.
              </li>
              <li>This is the tier 2 tower. Once again, one in each lane.</li>
              <li>
                And finally, the outer tier 1 tower. The weakest tower, but still strong enough to
                punish anyone who tries to cross it. You can only destroy the tier 2 tower only if
                the tier 1 tower is already destroyed. I mean, you need to know how to walk before
                you run, right?
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch03"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c03_001_advance.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                Let’s advance with our creep when the battle begins! (You’ll hear a horn sound.)
                Davion the Dragon Knight is a hero suitable to go to the middle lane, so let’s do
                that. (You can of course play any hero in any lane. The middle lane is generally a
                1v1 matchup, so when you die, congratulations, you have no one else to blame.)
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch04"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c04_001_lasthit.jpg", "lowq_c04_002_lasthit.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                In Dota, the only way to gain gold is by killing things. What a brutal game. What’s
                worse? You need to be the one dealing the killing blow to actually make money off
                killing these little things. They’re called creeps, and they’ll fight for you /
                against you depending on whatever side they’re on of course.
              </li>
              <li>
                You can also do a “deny”, which is… killing your own creeps. Imagine being in the
                army and your teammate kills you because you don’t want your teammate dying under
                the enemy hands? … Yeah that makes absolutely no sense. However, denying causes the
                enemy hero to gain reduced EXP from the creep death. It annoys the heck out of them
                too, look at that “!”, isn’t it pissing you off?
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch05"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c05_001_tower.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                This is the enemy tower. They’re coloured differently because Dire is full of edgy
                people. We are the Radiant, bright and sunny kids who love nature and peace… who am
                I kidding you want to kill your opponents too.
              </li>
              <li>
                We do not want to get close to the tower during the early game simply because we are
                too weak to tank the tower damage. Towers hit like a truck, so we let our creeps
                tank the tower.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch06"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c06_001_buyitem.jpg",
              "lowq_c06_002_buyitem.jpg",
              "lowq_c06_003_buyitem.jpg",
              "lowq_c06_004_buyitem.jpg",
              "lowq_c06_005_buyitem.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>When you think you have money, you click on the shop to open… the shop menu.</li>
              <li>
                For now, let’s follow the guide and buy whatever the guide proposes us to buy, in
                order. Let’s purchase a Soul Ring for now. The game will automatically help you buy
                whatever parts needed to “craft” the item.
              </li>
              <li>
                See that arrow? Click on that, and this flying creature (Probably a donkey in your
                game because you are a donkey… for now) will automatically pick up whatever items
                you bought and start delivering them to you. You’ve probably understood the
                important fact that you need to be at the base to buy items immediately. This ain’t
                some mobile MOBA game where you can purchase items anywhere on the map. It’s logical
                anyway.
              </li>
              <li>
                Once you click on the arrow, which is actually “Courier deliver items”, your courier
                picks up the items and puts them into its inventory, and then starts the delivery.
              </li>
              <li>The button, in case you missed it.</li>
              <li>
                Now the courier has to hold onto a bunch of extremely heavy (probably) items and
                deliver them to you. You animal abuser.
              </li>
              <li>Once your courier reaches you, you will receive the item(s).</li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch07"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c07_001_levelsix.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                Remember at first I told you you could only learn an ultimate on level six? Our
                ultimate turns us into a dragon… that actually looks more like a lizard. Our Dragon
                Form upgrades our attack so we have a ranged attack, our attacks poison people (and
                things, notably, the tower for some weird reason. Probably corrosive or acidic.) and
                we fly faster. Unfortunately for you, you can’t fly over cliffs or trees because…
                there’s no logic in this game that is why. You’ll just have to accept this and move
                on.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch08"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c08_001_soulring.jpg",
              "lowq_c08_002_soulring.jpg",
              "lowq_c08_003_soulring.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                Remember the Soul Ring you bought? This item solves your mana problems. If you
                haven’t realised, casting spells not only has a cooldown, but mana cost too. If you
                don’t have mana, you can’t cast spells. Notably for Davion, having no mana means you
                can’t breathe fire. (No you can’t use gasoline as a replacement), stun people with
                your shield (I am pretty sure you just need your hands instead of magical power to
                do that, but welcome to Dota 2) and you can’t turn into a Dragon either. Anyways,
                clicking on the Soul Ring casts it, and gives you 150 mana for 10 seconds at the
                expense of 170 HP. What a demonic item.
              </li>
              <li>
                The item goes into cooldown when you use it. What do I mean by 10 seconds? It means
                if you don’t use up the 150 mana, it disappears after 10 seconds. No you do not get
                your health back.
              </li>
              <li>There will be a sound and visual effect when you cast Soul Ring.</li>
              <li>As you can see, your mana increased.</li>
              <li>
                What’s the use of it when the mana disappears after 10 seconds? Here’s the trick. If
                you use up the mana, then there’s no mana to disappear! Perfect logic. This
                basically means we get a free Breathe Fire approximately every 30 seconds. Wait
                don’t we lose HP? Davion is tanky and has Dragon Blood for faster HP regen, so the
                item synergizes perfectly. Now treat your enemies to some tasty fire.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch09"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c09_001_gank.jpg",
              "lowq_c09_002_gank.jpg",
              "lowq_c09_003_gank.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                In Dota, a “gank” is basically… many people ganging up on a target to bully him.
                Does it remind you of your high school life?
              </li>
              <li>
                As Davion, the Dragon Knight with honour and justice, we should… of course, join the
                gang of bullies!
              </li>
              <li>
                It is ideal to start fights by first casting your Dragon’s Tail to stun the enemy,
                preventing him from escaping while you and your bully mates whack the living
                daylights out of him
              </li>
              <li>
                As you can see, this whatever thing that looks like a walking watermelon is now
                “Stunned”.
              </li>
              <li>As the enemy is close to death, use Breathe Fire to finish him off.</li>
              <li>
                Congratulations, you’ve just cooked a watermelon. I hope it tastes like steak.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch10"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c10_001_tphome.jpg",
              "lowq_c10_002_tphome.jpg",
              "lowq_c10_003_tphome.jpg",
              "lowq_c10_004_tphome.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                {" "}
                We are low on health and mana! Let’s go home and regenerate. What? You don’t like
                walking home because you’re such a lazy bum? Oh sweet child. Let’s use the Town
                Patrol scroll, otherwise known as Teleport scroll, TP scroll, toilet paper, whatever
                you want to call it to go home quickly.{" "}
              </li>
              <li>
                Simply click on it twice and you’ll automatically Teleport home. You can also
                manually target your base buildings. The TP Scroll teleports you to any friendly
                buildings.
              </li>
              <li>
                The spell requires you to channel it. Don’t do anything when you’re channelling a
                spell or you’ll break it!
              </li>
              <li>
                A magical circle will appear below you. Take note, enemies can interrupt channeling
                spells by stunning you.
              </li>
              <li>
                After the spell ends, you’ll be at home! If you periodically lose track of where
                your hero is, simply click F1 a few times and your camera will be moved
                automatically to your hero.
              </li>
              <li>As you can see, the Fountain gives us a regeneration buff. </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch11"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c11_001_death.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>In other news, we have just died.</li>
              <li>
                The “48” indicates that we have 48 seconds of respawn time left, enough for us to
                think why is Dota 2 so freaking hard and why am I torturing myself by playing this
                game.
              </li>
              <li>
                You get gold by killing heroes, you also lose gold and the enemy will gain gold
                killing you. The gold gained by the enemy is not equal to the gold you lost, so
                don’t worry. Generally, the richer you are, the more gold the killer gains when you
                die.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch12"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c12_001_talent.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                We are now level 10! We can now learn a talent. Talents are special upgrades that
                upgrade a specific part of your hero. No, you can’t get a talent that makes you more
                likeable by the opposite gender.
              </li>
              <li>
                There are generally two talents to select from. Higher-level talents can be accessed
                at level 15, 20 and 25 respectively. At level 27, 28, 29 and 30, you can also learn
                the remaining talents.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch13"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c13_001_blink.jpg", "lowq_c13_002_blink.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                We just had enough gold to purchase the infamous Blink Dagger. For League Players,
                this is “Flash” on a 15 seconds cooldown and an almost-screenwide instant
                teleportation ability.
              </li>
              <li>
                Simply click on the item then target anywhere on the ground and poof. This item is
                extremely useful to jump on unsuspecting targets and surprise them. Bear in mind the
                item will be disabled for a few seconds if you’re damaged by enemy heroes because
                being able to blink away while getting your face smacked makes no sense.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch14"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c14_001_neuts.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                Aside from your teammates and enemies, Dota also have neutral creeps, basically,
                animals living in the jungle with their loved families until you decide to step in
                and massacre all of them just for that little bit of gold and occasional item drops.
                You monster.
              </li>
              <li>
                Sometimes, neutral creeps drop “neutral items”. Each hero can only carry 1 of these
                items at a time. The later the game goes, the stronger the items dropped.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch15"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c15_001_teamfight.jpg",
              "lowq_c15_002_teamfight.jpg",
              "lowq_c15_003_teamfight.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                Ah, the best part of Dota. Fighting. This is what we call a teamfight, where many
                heroes slam their faces into each other.
              </li>
              <li>Your teammates sometimes help you stun enemies...</li>
              <li>...use that to your advantage and whack them while they’re stunned!</li>
              <li>Make sure to finish off enemies on low HP to get the sweet sweet gold.</li>
              <li>Take note of the enemy tower while you’re going at it.</li>
              <li>
                After a teamfight, if you somehow survived and the enemies are dead, make sure to do
                something meaningful by destroying their towers. Remember, in this game, heroes
                respawn, towers do not.
              </li>
              <li>Turning into a Dragon lets you push towers faster.</li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch16"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c16_001_tiertwo.jpg",
              "lowq_c16_002_tiertwo.jpg",
              "lowq_c16_003_tiertwo.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>If you’re lucky, you can even proceed to push the enemy tier 2 tower.</li>
              <li>
                And if you’re even luckier, you will see the enemies coming to defend their tier 2
                tower, only to not learn their lesson and die to you again for gold.
              </li>
              <li>
                And if you’re extra freaking lucky, they’ll once again die, and you can then destroy
                the tier 2 tower too!
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch17"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c17_001_hg.jpg",
              "lowq_c17_002_hg.jpg",
              "lowq_c17_003_hg.jpg",
              "lowq_c17_004_hg.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                The entrance to the enemy’s main base, also known as the highground (Because it’s on
                the high ground, duh) is fiercely defended by a tier 3 tower.
              </li>
              <li>
                It is ideal to push with your teammates because more heroes = more damage = faster
                tower pushing speed... duh.
              </li>
              <li>
                This is the enemy mid melee barracks. Destroying it will upgrade your melee creeps
                for the middle lane.
              </li>
              <li>
                This is the enemy mid ranged barracks. Destroying it will upgrade your ranged creeps
                for the middle lane. We have more melee creeps than ranged creeps, so it is
                generally recommended to prioritize destroying the melee barracks first. Once again,
                the buildings do not respawn.
              </li>
              <li>These are a bunch of idiots trying desperately to defend their base.</li>
              <li>These are upgraded creeps</li>
              <li>
                As you can see, they have the name “super” in their name, which means they’re
                stronger. Man and Superman, you get the difference?
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch18"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={[
              "lowq_c18_001_mega.jpg",
              "lowq_c18_002_mega.jpg",
              "lowq_c18_003_mega.jpg"
            ]}
          />
          <GuideParagraph>
            <ol>
              <li>
                After destroying the enemy middle lane, we then move to destroy the enemy top lane’s
                entry point and the tier 3 tower, aiming for the barracks.
              </li>
              <li>
                Do this while the middle lane is pushed to keep the enemy busy trying to defend two
                lanes at once.
              </li>
              <li>This is the bottom lane, which is, to our favour, pushed in as well.</li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch19"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c19_001_bkb.jpg", "lowq_c19_002_bkb.jpg", "lowq_c19_003_bkb.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                We have enough money to purchase more items. Sorry for only remembering to buy items
                only when I die. You can purchase items when you’re alive too. Let’s purchase a
                Black King Bar. No, you can’t eat it, it isn’t energy nor a chocolate bar.
              </li>
              <li>
                If the item appears in your bottom inventory, it means it is in the backpack. You
                are carrying the item but the item does not provide bonuses in the backpack. You
                need to drag and drop it into your primary inventory.
              </li>
              <li>Just click on it and hold left mouse and drag.</li>
              <li>And Drop.</li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch20"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c20_001_assault.jpg", "lowq_c20_002_assault.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>While we’re shopping, let’s buy Assault Cuirass too.</li>
              <li>
                This item gives us armor and attack speed. Weird that armors make you attack faster…
                isn’t heavy armor supposed to slow us down? Welcome to Dota 2 where nothing makes
                sense.
              </li>
              <li>
                Some components required to craft Assault Cuirass is only available in the “Secret
                Shop”. You need to go to the “Secret” shop (Not really that secret) to purchase the
                components.
              </li>
              <li></li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch21"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c21_001_bkbact.jpg", "lowq_c21_002_bkbact.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                We have managed to surround 4 heroes! (...with just ourselves, but it doesn’t
                matter!)
              </li>
              <li>Let’s activate Dragon Form and get ready to 1v4 like a man.</li>
              <li>
                Click on Black King Bar to activate it. The BKB gives you magic immunity, which
                makes you nearly invincible to magic attacks and spells. You also glow yellow and
                grow bigger, which… looks cool but that’s about it.
              </li>
            </ol>
          </GuideParagraph>
          <GuideCarousel
            carouselId={"ch22"}
            bucketUrl={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1_v2"
            }
            picturesUrl={["lowq_c22_001_end.jpg", "lowq_c22_002_end.jpg", "lowq_c22_003_end.jpg"]}
          />
          <GuideParagraph>
            <ol>
              <li>
                These are the enemy tier 4 towers. Destroying it will make the enemy Ancient
                vulnerable to attacks.
              </li>
              <li>
                This is the enemy Ancient… other than destroying it, what else do you think we are
                supposed to do?
              </li>
              <li>
                Your first victory (Or probably your first defeat, but Dota is a complex game. Don’t
                worry about losing your first few games.)
              </li>
            </ol>
          </GuideParagraph>
          <GuideParagraph>
            That concludes episode 1. Episode 1 only covers the most basic gameplay enough to help
            you complete a game but doesn’t really go into the details on anything. The more you
            play, the more you learn about new stuff. This game has such a deep learning curve
            you’ll still find yourself learning new things after a few thousand hours. I have 20000
            hours into the game and I am still learning new things everyday!
            <br />
            <br />
            Welcome to Dota 2. Remember, you probably suck at the game, but so does everyone else.
            <br />
            <br />
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
    </>
  )
}

UltimateTutorial.skipAuthentication = true

export { UltimateTutorial }
