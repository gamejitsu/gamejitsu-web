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

const UltimateTutorial: AuthenticatedComponent = () => {
  return (
    <Container>
      <Box px={[4]} pt={[4]}>
        <a id="start"></a>
        <Box display={["none", "none", "block"]}>
          <GuideBanner
            src={
              "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/0_banner.png "
            }
          />
        </Box>
        <Box>
          <MainTitle>The Ultimate tutorial for Dota 2 new players</MainTitle>
        </Box>
        <GuideParagraph>
          With the recent Netflix Dota 2 series being a huge hit, I imagined that there are some new
          players who want to try out Dota 2 itself but are struggling to do so because Dota 2 is
          notoriously hard to learn.
          <br />
          <br />
          While Dota 2 does have some new player content available on the web (and Valve is hard at
          work refurbishing the new player experience… hopefully), however,
          <b> there is a drastic lack of written content</b>.<br />
          <br />
          With this, I decided to come up with a guide on
          <b> Davion the Dragon Knight, specifically for new players</b>. The guide will have around
          10 episodes, and I will release a final collective post afterwards for ease of access.
          (You don’t need to send 10 links to your friends who want to learn Dota!)
          <br />
          <br />
        </GuideParagraph>
        <GuideParagraph>
          Dota is a highly complex game, it will make no sense to try to learn everything right off
          the bat.
          <br />
          Hence, I’ll include only the essentials enough for you to start enjoying the game right
          away while learning it! (I will omit non-key information and talk about them at a later
          episode)
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_1_hotkeys.jpg"
          }
        />
        <GuideParagraph>
          First of all, some basics on hotkeys settings. Click on the setting icon on the top left
          of the screen to access it. By clicking on settings and “Reset hotkeys”, you get to choose
          from a template that may be suitable for you.
          <ul>
            <li>League of Legends are suitable for people who came over from LoL.</li>
            <li>Arrow (Default) should be the default if you played Dota as your first MOBA.</li>
            <li>Legacy keys are for people who played Dota 1. Not recommended for beginners.</li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_2_mainmenu.jpg"
          }
        />
        <GuideParagraph>
          Next, let’s start again from the main menu. Contrary to other guides which might include a
          tutorial, we shall jump into a bot match right away. (It is recommended that you play the
          tutorials, but not necessary if you don’t like the tutorials. For one, I highly recommend
          the community tutorial by SirActionSlacks.) Let’s begin by clicking on the green “Play
          Dota” on the menu, which will bring you to this screen.
          <ol>
            <li>
              Here you get to choose your bot scripts. You can choose either Default Bots or Ranked
              Matchmaking AI, which functions slightly like your teammates in ranked mode. Just
              slightly… Go for easy, don’t go for passive because the bots don’t do anything at all
              in passive.
            </li>
            <li>Click on Start Bot Match to start the game.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_3_pickahero.jpg"
          }
        />
        <GuideParagraph>
          <ul>
            <li>
              The amount of heroes might scare you off because Dota gives you access to every hero
              right off the bat (Unless you’re playing the new player mode where only some heroes
              are available).
            </li>
            <li>Pick Dragon Knight from the Strength heroes tab.</li>
            <li>
              Dragon Knight is a tanky strength hero who has simple mechanics (easy to learn) but
              can deal damage too.
            </li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_4_pickdragonknight.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              This is your hero model. It might disappoint you that the Netflix series’ Davion looks
              much cooler, but more on that later.
            </li>
            <li>
              {" "}
              Your inventory. You get to start with a few items as you get 600 gold to spend, these
              will help you start the game. For now, let’s buy everything that is recommended by the
              system. (A green item, an axe, a gauntlet and a circlet that boosts your stats.) In
              Dota, most if not all items are not shareable. You cannot give items to your
              teammates.
            </li>
            <li>
              Your remaining gold after buying all these items. Gold is essential in Dota to buy
              more powerful items to empower your hero. Don’t worry, gold is limited to this game
              only, please don’t save your gold for the next game, it doesn’t work like that!
            </li>
            <li>Your team’s roster.</li>
            <li>Your opponent’s roster.</li>
            <li>
              Cosmetics. These are skins you can purchase with real money to make your hero look
              much cooler. You can purchase skin parts from the Community Market at super cheap
              prices. You can even turn Dota 2 into your personal dress-up Barbie Doll game.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_5_pickmid.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Your hero. Press F1 to select / center on your hero in the game. (You can change the
              hotkeys in settings) Let’s start from the middle lane. Right click a point to move
              towards it. Dragon Knight is a hero that is suited to go middle. Dota has 3 lanes, the
              top lane, the middle lane and the bottom lane. Each lane has towers. Your aim of this
              game? Destroy enemy towers, then destroy the enemy’s final building, which we call the
              Ancient. (Hence Dota’s full name: Defense of the Ancients)
            </li>
            <li>
              You get a skill point every level. Notice the yellow + indicating you can learn a
              skill.
            </li>
            <li>
              Your inventory. For your information, you can click and use some items in Dota 2.
            </li>
          </ol>
          <ul>
            <li>
              The green item with 3 charges: Tango, allows you to use it and eat a tree. It grants
              you a small buff that recovers HP slowly after eating the tree.
            </li>
            <li>
              The axe: Quelling Blade, increases your damage against creeps. Allows you to use it
              and cut a tree. (No regen buff unlike Tango)
            </li>
            <li>
              The brown glove: Gauntlets of Strength, gives you +3 Strength. Strength gives you more
              HP. Coincidentally, Dragon Knight is also a Strength hero, so Strength also gives you
              +3 damage.
            </li>
            <li>
              The silvery thing: Circlet, gives you +2 to all stats. Strength gives HP (and damage
              for Dragon Knight), Agility gives you more armor and attack speed, and Intelligence
              gives you more mana to spend on spell casting.
            </li>
            <li>
              The small green ball: Shared Tango. You can click on a teammate hero with your tango
              to share one of your delicious tangoes with him or her. Apparently, one of our AI
              teammates shared a Tango with us!
            </li>
          </ul>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_6_spells.jpg"
          }
        />
        <GuideParagraph>
          If you used the default (Or League of Legends) hotkey setup, your spells will be using the
          QWER hotkey layout. Let me go through Dragon Knight’s spells quick.
          <ol>
            <li>
              <b>Q – Breathe Fire.</b> Sprays fire at your enemies for instant damage to everyone
              burnt by it. Also decreases the enemy's normal attack damage for a set percentage for
              a while.
            </li>
            <li>
              <b>W – Dragon Tail.</b> Use your shield to smack an enemy, stunning him for a few
              seconds. If you are currently in Dragon Form, you can cast it from a longer range.
            </li>
            <li>
              <b>E – Dragon Blood.</b> Passive spell, which means you don’t need to activate it.
              Increases your HP regen per second and armor. Makes you tankier and harder to kill.
            </li>
            <li>
              <b>R – Elder Dragon Form (Ultimate spell).</b> Turns you into a ranged dragon. As you
              increase your level on this spell, the dragon type also improves. Green dragon has
              poison attack, red dragon has splash attack and blue dragon has an attack that slows
              down your enemies. You keep previous level’s bonuses upon levelling it too!
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_7_courier.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              {" "}
              This is your <b>courier</b>. Everyone has a courier to help them buy items and deliver
              them to you. You can only buy items at the base, so the courier serves to help you buy
              items without walking all the way home.
            </li>
            <li>
              {" "}
              The shopkeeper. You can also access the shop from the bottom right of your screen.
              (See the yellow $80? Click on that and the shop opens.)
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_8_shop.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>These are the recommended starting items. You already bought them.</li>
            <li>
              These are items that help you during the early stages of the game. We shall aim to
              purchase them now.
            </li>
            <li>These are mid game items.</li>
            <li>These are late game items. These are generally very powerful.</li>
            <li>These are popular items. No need to care about these now.</li>
            <li>This is the basic items tab.</li>
            <li>
              This is the upgrades / advanced items tab. These items require a combination of basic
              items to craft.
            </li>
            <li>
              These are neutral items. Sometimes when you kill neutral creeps, items drop. More on
              this later. You can click on the shop button again to close it.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_9_welcometomid.jpg"
          }
        />
        <GuideParagraph>
          After hearing a horn and a voice saying “The battle begins”, creeps will begin to spawn.
          You should follow your creeps to meet your opponents.
          <ol>
            <li>
              Your hero. You want to kill the enemy creeps, however, you want to deal the final blow
              (be the actual killer) to gain gold. You can attack a target by either right-clicking
              it, or click A and then left-click the target. However, you can gain EXP by simply
              being in the area when a creep dies. We call the act of getting gold from killing
              creeps “Farming” and dealing the final blow for gold “Last hitting”.
            </li>
            <li>The enemy creeps are brown coloured. Kill them for gold!</li>
            <li>
              The enemy hero, which is your opponent. In this game, we are facing an Intelligence
              hero, a spellcaster (For League players, a Mage), Zeus.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_10_firstfire.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              You can also use your spells to help you last hit. Press Q and then click on the
              direction to breathe fire.
            </li>
            <li>Your spells has a cooldown. Use them wisely.</li>
            <li>
              Your spells also have a mana cost. Notice that we spent 90 Mana to cast Breathe fire.
            </li>
            <li>
              Here you can view your KDA (Kills, deaths and assist) as well as LH / DN (last hits
              and denies.) More on denies later.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_11_leveltwo.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>You have reached level 2! Levelling is slower the higher your level is.</li>
            <li>
              You get a new skill point to learn or upgrade a skill. Let’s learn Dragon Blood to
              increase our survivability in the lane.
            </li>
            <li>
              This is the minimap. It gives us valuable information on how the fight is going
              everywhere else, where your teammates are and potentially where the opponents are.
            </li>
            <li>
              Notice that as you kill the enemy creeps, your creeps start to move closer to the
              enemy tower. This is called <b>“Pushing”</b>.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_12_firstdeny.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              An exclamation mark (!) is the indicator that a creep is denied. Denying is a unique
              mechanic that only exists in Dota 2 out of all MOBAs. Denying is the act of dealing
              the final blow to YOUR OWN creep. Doing this decreases the amount of EXP your opponent
              is getting from the creep death, and also prevents your opponent from last hitting the
              creep for gold. To do this, press A and click on your friendly creep when he is
              nearing death, similar to how you last hit enemy creeps.
            </li>
            <li>
              The enemy hero was trying to last hit the creep, but you denied it. Denying also
              annoys human opponents a lot, make sure to practice it!
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_13_purchasingboots.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We can open the shop and shift + left click and item to add it to our buying list.
              That way, we can be notified the moment we have enough money to buy it. I have
              previously added a Boots of Speed to our shopping cart, and now we have enough gold to
              buy it! Just right click to buy it and it will be deposited to our stash.
            </li>
            <li>
              This is our courier. We shall then use it to deliver our Boots to us in the middle
              lane.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_14_purchasedboots.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We can click on this blue arrow for the courier to immediately pick up our items from
              the stash and deliver to us.
            </li>
            <li>
              This is our stash. We can store up to 6 items here. The boots we purchased with 500
              gold are in the stash, ready for us to either pick it up ourselves in the base or have
              our courier deliver it to us.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_15_secondfire.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Once again, we used Breathe Fire to last hit creeps. This time though, we’ve managed
              to hit the enemy hero with our fire too!
            </li>
            <li>The enemy Zeus is in the direction our Fire is going. He will take damage.</li>
            <li>Remember to check your mana so you have enough mana for spells.</li>
            <li>Your spell will go on cooldown after casting it.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_16_purchasingsoulring.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              With our boots on us, let’s add the next item into our shopping list, the Soul Ring.
            </li>
            <li>
              Soul Ring helps solve our mana problems by allowing us to exchange some HP for
              temporary Mana.
            </li>
            <li>
              Our Boots are delivered by the courier, and are now in our inventory! Now we can move
              faster.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_17_soulringparts.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We have already purchased 2 parts of the item that is required to craft the Soul Ring,
              and they are now in the stash.
            </li>
            <li>
              {" "}
              We still have 1 part of the item remaining, the recipe required to craft the Soul
              Ring. It is good practice to purchase item parts whenever you have the money for it
              because you lose money when you die, but if you have no money to lose, you lose
              nothing when you die.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_18_purchasingmango.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We are running low on Mana! That is probably because we used too many spells in the
              lane.
            </li>
            <li>
              Let’s purchase “Enchanted Mango”. It replenishes our mana by 100 each time we eat 1
              Mango.
            </li>
            <li>The mango is purchased and added to our stash, ready for delivery or pickup.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_19_deliversoulring.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Notice on the minimap, our Courier is coming to us. Note that the courier also
              upgrades itself the higher level our hero is.
            </li>
            <li>
              While we wait for our items, we should continue farming and last hitting to gather
              more gold.
            </li>
            <li>As you can see, the icon is spinning. This means a delivery is in progress!</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_20_usesoulring.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Our Soul Ring is delivered, let’s try it out! Click on the item to use it (Or you can
              use item hotkeys, if you already have that setup already. If not, it’s fine too, we
              will learn that later.) You will lose 170 health but gain 150 mana. It last 10 seconds
              before the unused 150 mana will be lost, so many sure to use a spell as soon as
              possible.
            </li>
            <li>
              You can notice an effect (and a sound effect) on our hero upon casting Soul Ring.
            </li>
            <li>Our Mana and HP is adjusted to reflect the Soul Ring successful cast.</li>
            <li>Now, let’s Breathe Fire with our mana.</li>
          </ol>
        </GuideParagraph>

        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_21_thirdfire.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>Eat fire, Zeus! Notice the HP loss when you breathe fire in his face.</li>
            <li>
              This is the enemy tower. It will protect the enemy by attacking anything hostile that
              comes into their attack range, including you. You do not want to tank the tower,
              especially during early game when you are still weak. However, Dragon Knight is pretty
              tanky.
            </li>
            <li>
              Your creeps are still fighting enemy creeps. If your creeps die while the Zeus is
              away, the Zeus will not only not gain gold, but EXP too.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_22_eattango.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              {" "}
              We lost some HP upon getting attacked by the enemy tower, let’s eat a tree with Tango
              to replenish some HP. Find a tree, click on our Tango and then click on any tree.
            </li>
            <li>
              The buff indicator says we are restoring 7 HP per second thanks to eating a tree.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_23_firstdragon.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We have reached level 6! Now we can learn our ultimate spell, Elder Dragon Form.
            </li>
            <li>
              Elder Dragon Form turns us into a dragon with a ranged attack for 60 seconds. It also
              lets us move slightly faster. (We travel by wings now instead of legs, of course).
              Unfortunately you still couldn’t fly over terrain and trees, don’t ask me why, you’ll
              just have to accept this and move on. With each upgrade in the spell itself, the
              dragon type you can turn into also changes. Each dragon upgrade will still keep the
              bonuses from the previous upgrade, for example Red Dragon (level 2) provides splash
              damage but keeps the poison attack from Green Dragon (level 1).
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_24_firststun.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Your W (Dragon Tail) has a longer cast range when you are in Dragon Form, hence you
              can stun enemies from a range. Hence, your combo when you want to go on a target will
              be R+W+Q+ lots of normal attacks. (We also call normal attacks “Right clicks”, for
              your reference.)
            </li>
            <li>You can see that the enemy hero has a “Stunned” indicator on top of his head.</li>
            <li>You’re a dragon now! Though it seriously looks more like a green lizard.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_25_firstdeath.jpg"
          }
        />
        <GuideParagraph>
          <b>Let’s talk about dying in Dota 2.</b>
          <ol>
            <li>
              We have just died after killing Zeus, this is because we went too far into the tower,
              and we got killed by the tower after killing Zeus. Here we can see our revival time is
              28 seconds. You can also “buyback” – pay gold to be revived instantly, but this is not
              recommended during the early game. You are much better off waiting for the revive
              time. Buybacks should be saved for desperate scenarios where you are defending your
              base.
            </li>
            <li>
              This is the enemy tower, the culprit responsible for killing us. This also teaches us
              one fact – Don’t dive towers.
            </li>
            <li>
              We were on a killing spree (3 kills in a row) before our streak got ended by dying to
              the tower.
            </li>
            <li>
              Here is the board showing recent events. When you kill a hero, you get some gold. When
              you die, they get some gold and you lose some. If you kill someone who has a kill
              streak, you get more gold than usual.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_26_sangeandyasha.jpg"
          }
        />
        <GuideParagraph>
          For new players, I will recommend going for more stat items because you do not need to use
          them, just have them in your inventory to boost your fighting abilities. For this, I
          recommend <b>“Sange and Yasha”</b>.
          <ol>
            <li>
              {" "}
              Sange and Yasha can be found in the <b>“upgrades”</b> tab. It is an orange background
              item with 2 swords crossed. It gives us valuable stats suitable for Dragon Knight to
              increase both our attack damage and speed.
            </li>
            <li>
              However, make sure you purchased the early game items first! Notice that I did not
              purchase the blue and white dagger. That is called the <b>“Blink Dagger”</b> which
              helps you teleport a short distance immediately but does not provide any passive
              stats. We shall ignore this for now and talk about it in a later episode.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_27_tpscroll.jpg"
          }
        />
        <GuideParagraph>
          We have revived! Compared to walking all the way back to the middle lane (which is god
          damn far), let’s use our Town Portal Scroll (Also known as TP, Toilet paper, TP scroll,
          Teleport scroll, tele… whatever works for you.)
          <ol>
            <li>Click on your TP Scroll and click on any area near your middle tower.</li>
            <li>
              The TP Scroll requires a channel time. Don’t move or do anything during the channel
              time, or you will risk wasting your TP scroll!
            </li>
            <li>
              This blue effect indicates that someone (you) are teleporting in. As Dragon Knight is
              pretty tanky, you can try diving towers if you are confident you can achieve whatever
              you want to do (Kill Zeus, in this scenario) and escape the tower range quickly.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_28_killingzeus.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Even though we are a melee hero (Melee hero means we attack in the enemy’s faces,
              ranged hero, which our Dragon Form is, allows us to attack from a distance) our
              Breathe Fire has a decent range. Use it to finish off the Zeus!
            </li>
            <li>Our Breathe Fire goes on cooldown after using it.</li>
            <li>
              The tower is attacking us. Take note even if our creeps are in the tower range, the
              tower will switch targets to attack you the moment you attack an enemy hero in the
              tower range. The tower will want to protect its hero.
            </li>
            <li>Keep track of your HP when you dive a tower.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_29_thetower.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>You can check a tower’s attack range and HP by left-clicking it.</li>
            <li>
              The tower will attack any hostile target that enters its attack range first until it
              either dies or moves out of range. Hence, always let your creeps enter the tower range
              first. If you notice the tower attacking you instead of your creeps, move out of range
              then move in again.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_30_pushthetower.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>Now, we push with our creepwave.</li>
            <li>
              Make sure to retreat the moment a hero appears! You do not want to fight enemies under
              their tower.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_31_oneversustwo.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              After taking the tower, we can then fight enemies in the area safely, because they
              lost their tower protection.
            </li>
            <li>
              Take note as we are killing an enemy hero, Zeus is here to try to save his teammate.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_32_killzeusagain.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              After killing an enemy hero (The hero we just killed is known as the Drow Ranger),
              check our HP, Mana and our spells to see whether we can kill the Zeus too. Here we
              still have enough mana for a Dragon Tail, so we can stun the Zeus.
            </li>
            <li>The Zeus is stunned, and we can attempt a kill on him too for a double kill.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_33_pushsecondtower.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              After killing both Zeus and Drow, let’s push the second middle tower, known as the
              middle <b>TIER 2 tower</b>.
            </li>
            <li>
              Our Corrosive Breath in Dragon Form (poison attack) works against towers too, so it is
              wise to use Dragon Form to push towers.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_34_firsttalent.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>We are now level 10! We can choose our first “talent”.</li>
            <li>
              {" "}
              Talents are bonuses that differ on every hero. We can pick a talent once we reach
              level 10, 15, 20 and 25. Once we reach level 30, all talents will automatically be
              unlocked. For this game, we shall choose +2 Mana Regen (per second) so we can cast
              more spells.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_35_purchaseyasha.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We also have enough money to purchase a component of Sange and Yasha, which being
              Yasha. Let’s have the courier deliver it to us to boost our stats by a little bit.
            </li>
            <li>
              Our <b>Yasha</b> is in the stash. As our HP is not high, I have also purchased a{" "}
              <b>“Healing Salve”</b> to heal us for a little bit. Healing Salve is a consumable that
              heals us for some HP quickly, but it is more expensive and it will be interrupted if
              we take damage from enemy heroes. (Tangoes don’t)
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_36_firstneutitem.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              There are neutral creeps spread around the map that are available to be killed for
              some gold and EXP. More on neutral creeps later. Sometimes, they also drop items upon
              getting killed. Each hero can hold 1 neutral item aside from 6 normal items. We found
              a “Trusty Shovel”, let’s pick it up.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_37_firsttreasure.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Click on the Trusty Shovel to use it. You can use the item anywhere on the ground to
              dig for treasures.
            </li>
            <li>
              {" "}
              We have found… a TP scroll. Well, it is worth 50 gold, not a bad item. Let’s pick it
              up.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_38_firstpwrrune.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              There are runes in Dota 2. Some runes empower your hero for a short duration. For
              example, this rune we found is an Illusion rune that generates two illusions of Dragon
              Knight for a while. The illusions take more damage and deal less damage compared to
              your actual hero.
            </li>
            <li>
              The marked X shows where empowering runes (Known as power runes) spawn. They spawn in
              1 of the X every 2 minutes, starting from minute 4. More on runes in a later episode.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_39_firstillu.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Illusions are colored in blue so you and your teammates can recognize friendly
              illusions. The enemies will see the illusions in normal color.
            </li>
            <li>
              Our Yasha had just been delivered by the courier. Notice that it is colored in grey,
              because it is currently deposited in our backpack. We have 3 backpack slots that we
              can use to store items, but we will not receive stat bonuses from items in the
              backpack, so we will have to switch our Yasha to our active inventory to receive
              bonuses from it.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_40_backpack.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Drag and drop the Yasha from the Backpack to the Healing Salve to swap slots with it.
              Now we have slightly more armor, move faster and attack faster!
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_41_grouppush.jpg"
          }
        />
        <GuideParagraph>
          It is time to push the tier 2 tower, and your teammates are here with you too.
          <ol>
            <li>
              {" "}
              This is the enemy tier 2 tower, we want to destroy it so we can move closer towards
              the enemy base and the Ancient, which we want to destroy to win the game.
            </li>
            <li>This is your teammate Witch Doctor, coming here to help you push the tower.</li>
            <li>
              {" "}
              This is your teammate Sniper, coming here to help you push the tower, from a far
              range. Sniper is known to have one of the furthest attack range in the game. I mean,
              his name is Sniper, what do you expect?
            </li>
            <li>This is your teammate Necrophos, coming here to help you push the tower.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_42_fortify.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              This effect and the sound “Dire structures have been fortified” means every single
              enemy building is now indestructible for 5 seconds. The fortified towers will also
              attack multiple targets during the period. (Does not apply to tier 1 towers)
            </li>
            <li>
              You can see the message here indicating Dire fortification. Fortification is used
              primarily as a means to delay enemy pushes. You can also use your team’s Fortification
              at the yellow icon beside the minimap. It has a team cooldown of 5 minutes, use it
              wisely.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_43_purchasebkb.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We have purchased Sange and Yasha, now let’s go for our next item, Black King Bar.
              Black King bar is an item that grants you magic immunity for a short duration, which
              will be helpful in teamfights to keep magic damage and disables off your head.
            </li>
            <li>
              These are the components used to craft Black King Bar. Ogre Axe + Mithrill Hammer +
              Black King Bar recipe.
            </li>
            <li>As always, let us add it to our buying list by shift + clicking Black King Bar.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_46_enemydeftower.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              {" "}
              As we are pushing the enemy top tier 2 tower, always be on the lookout for enemies
              trying to defend their tower. As you can see, the enemy Lion is using a TP scroll to
              help defend his tower.
            </li>
            <li>Drow Ranger is coming over to defend her tower as well.</li>
            <li>
              Are we confident in trying to 1 versus 2? If not, we should back off and try pushing
              the tower on another day. Take note that we also do not have creeps left to push the
              tower with us. We should almost never try to push towers when we do not have creeps
              because Dota has a “Backdoor protection” that will protect towers if there are no
              creeps nearby. This is to ensure a very strong hero could not just backstab towers, as
              it is unfair for the defending team. (However, some specific heroes have the ability
              to kill towers under backdoor protection anyway.) More on this in a pushing guide in
              the near future.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_47_bountyrune.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              This is a Bounty Rune. It gives you and your team bonus gold when you pick it up. Pick
              it up by right-clicking it.
            </li>
            <li>Bounty runes spawn at points marked as X on the minimap.</li>
            <li>Bounty runes spawn every 5 minutes.</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_48_secondneutitem.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              While farming some neutral creeps because we had nothing to do at the moment, we got
              ourselves a new neutral item “Faded Broach”. However, we can only use 1 Neutral item.
            </li>
            <li>
              Hence, if you like Faded Broach compared to our Shovel, just drag and drop it on the
              shovel, the active neutral item will be replaced.
            </li>
            <li>
              The item will also be announced to your teammates, so if your teammates need it (in a
              real human-to-human game), you can discuss who should have it. Neutral items are all
              shareable.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_49_keepneutitem.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Now that we have Faded Broach equipped, we can right-click the Trusty Shovel and send
              it back to the neutral items stash. Any of our teammates can then pick up the item if
              they want it from the Shop/Neutrals tab. Remember, neutral items are shareable, hence
              you should let the most suitable hero have the most suitable neutral item, if
              possible.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_50_pushhighground.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We are now trying to <b>“Push the highground”</b>. Highground generally means the
              enemy base in Dota 2, because the base is stationed on the high ground. (duh)
            </li>
            <li>
              This is the enemy tier 3 tower. Not only is it stronger than previous towers, it is
              also positioned on the highground. This affects ranged heroes because ranged heroes
              attacking a highground target will have a 25% miss chance.
            </li>
            <li>
              Look at the minimap, these are the pushing doors you can try to invade the enemy base.
              Top, Mid and Bottom.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_51_pushinghighground.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>The enemy tier 3 tower.</li>
            <li>The enemy Drow Ranger trying to defend her tower.</li>
            <li>You are now level 15! You can now learn the second level of the talent tree.</li>
            <li>
              Let’s go for 400 health this time. 400 health, combined with Davion’s spectacular
              armor, has more value than 25 damage. Remember, you cannot deal damage if you’re dead!
            </li>
            <li>
              Check the minimap when you try to push. Where are the enemies? Where are your
              teammates? Are your teammates nearby to assist you in the push?
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_52_stoppushing.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>The whole enemy team is here to defend their highground.</li>
            <li>As such, it is advisable to escape for now until your other teammates come.</li>
            <li>
              This is your teammate. It is advisable to request your teammate to leave as you will
              be 2v5. However, since this is a bot, we can just leave him.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_53_counterpush.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              The Juggernaut bot actually surprised us by being able to fight everyone on the
              opposing team! Let’s help him out.
            </li>
            <li>We just helped Juggernaut kill the enemy Lion.</li>
            <li>
              Our ultimate, Elder Dragon Form, is also off cooldown. This means we can give it our
              all to help our teammates.
            </li>
            <li>
              As you can see, we are now GODLIKE. This means we have killed 9 heroes in a row
              without dying. The highest killstreak you can reach is 10 and above, being{" "}
              <b>“Beyond Godlike”</b>
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_54_contpushing.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Your teammate got a triple kill! Remember to use this to your advantage. With multiple
              heroes on the opposing team dead, you can then take some objectives, namely the enemy
              bottom tier 3 tower.
            </li>
            <li>
              The board also shows who are the heroes killed by Juggernaut, which is Sven, Drow
              Ranger and Zeus. You’ll recognize hero icons the more you play this game.
            </li>
            <li>
              Let’s destroy the enemy <b>tier 3 tower</b>.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_55_pushbarracks.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              After destroying the tower, the enemy barracks of the bottom lane will be vulnerable.
              This is the melee barracks. Destroying it will spawn super creeps for your team for
              the bottom lane. Super creeps are stronger than normal creeps.
            </li>
            <li>
              This is the ranged barracks. Destroying it will spawn super ranged creeps for your
              team for the bottom lane. Once again, super ranged creeps are stronger than normal
              ranged creeps. It is very hard to come back from a barracks deficit, do protect your
              barracks and try to destroy enemy barracks when you have the chance. Also, destroying
              all enemy barracks will grant your team <b>Mega creeps</b>. These creeps are so
              powerful that your opponents will very likely fall against them.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_56_enemyfountain.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Remember the place where you respawn and heal yourself? That is the fountain. The
              enemy has their own fountain too. You should NEVER enter the enemy fountain. The
              fountain has massive damage to punish any intruders. The fountain is also
              invulnerable.
            </li>
            <li>
              Hence, we should retreat,{" "}
              <b>and focus on our objective – winning the game by destroying the enemy Ancient</b>.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_57_smallbuilding.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              These are small random buildings that grant some gold upon destroying it. It doesn’t
              really do anything aside from the fact that your mindless creeps will attack it
              anyway, so you should always destroy them too, so your creeps can push the tier 4
              towers.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_58_bkbarrived.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Our <b>Black King Bar</b> has just arrived! Once again, let’s move it from our
              backpack to our active inventory.
            </li>
            <li>
              We had a few Healing Salves lying in our backpack, let’s use them too to regen our HP.
            </li>
            <li>
              The green circles around us indicates our Healing Salve is hard at work healing us up.
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_59_twopushes.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              We have now also pushed the middle lane and took the barracks. Now, we have two lanes
              of super creeps threatening the enemy Ancient. There are two very strong{" "}
              <b>tier 4 towers</b> protecting the ancient, be warned!
            </li>
            <li>
              There are some super creeps from the bottom lane who is currently engaged in battle.
              Once they finish killing the enemy normal creeps, they will join us in sieging the
              Ancient.
            </li>
            <li>
              Once again, you should periodically check the minimap to see where your teammates and
              enemies are
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_60_thirddragon.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              Weirdly, there seems to be no one defending the Ancient. Let’s try to take the tier 4
              towers quickly by activating Elder Dragon Form.
            </li>
            <li>
              We are level 18 now, which means we have the maximum level of our ultimate,
              <b>Elder Dragon Form</b>. We are now an ice dragon! (lizard?)
            </li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_61_activatebkb.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>
              The enemy Lion is here to try to defend his base, let’s kill him by activating{" "}
              <b>Black King Bar</b>. Click on the item (or its hotkey, if you have it) to activate
              it.
            </li>
            <li>
              Our hero will shine bright yellow when Black King bar is activated. Magical spells are
              useless against us now.
            </li>
            <li>The buff indicator shows the remaining duration of Black King Bar.</li>
            <li>This Lion thinks he can escape from the mighty Dragon Knight?</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_62_hitancient.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>This is the enemy Ancient. Destroying this building wins you the game!</li>
          </ol>
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_63_victory.jpg"
          }
        />
        <GuideParagraph>
          And we have won our first game of Dota 2 with Davion, the Dragon Knight.
          <br />
          You will then be presented with the end game scoreboard after you click Continue.
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_64_endgameboard.jpg"
          }
        />
        <GuideParagraph>
          You can also check detailed stats of the game by clicking on “Scoreboard”
        </GuideParagraph>
        <GuideImage
          src={
            "https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/chapter_1/lowq_65_endgameboard_2.jpg"
          }
        />
        <GuideParagraph>
          <ol>
            <li>Kills, deaths and assists.</li>
            <li>Net worth. The total gold worth your hero has.</li>
            <li>Items you have at the end of the game.</li>
            <li>Last hits and denies.</li>
            <li>Gold earned per minute.</li>
            <li>Your level at the end of the game.</li>
            <li>XP earned per minute.</li>
          </ol>
        </GuideParagraph>
        <GuideParagraph>
          This concludes our general guide of Davion, the Dragon Knight in our first Dota 2 game for
          newcomers. More episodes will be introduced talking about details such as how to farm
          faster, itemization in various situations, jungling and the mighty Roshan. Stay tuned!
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

UltimateTutorial.skipAuthentication = true

export { UltimateTutorial }
