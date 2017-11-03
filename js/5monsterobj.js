const conditionalobj = {
	"0":"No condition",
	"512":"Kill with non-phys",
	"1024":"Kill with non-elem",
	"2048":"Kill with cut",
	"2560":"Kill with stab",
	"3072":"Kill with bash",
	"3584":"Kill with fire",
	"4096":"Kill with ice",
	"4608":"Kill with volt",
	"5632":"Kill with poison dmg.",
	"6144":"Kill while paralyzed",
	"6656":"Kill while blinded",
	"7168":"Kill while panicked",
	"8192":"Kill with curse dmg.",
	"8704":"Kill while sleeping",
	"9728":"Kill while petrified",
	"10240":"Kill by instant death",
	"10752":"Kill while head bound",
	"11264":"Kill while arm bound",
	"11776":"Kill while leg bound",
	"12288":"Kill while full bound",
	"12801":"Kill on turn one",
	"12805":"Kill before turn six",
	"13825":"Kill with solo party",
	"15360":"Don't get rare drop",
	"17558":"Kill w/ mush. dagger",
	"18482":"Kill w/ 5,000 dmg. atk.",
	"20480":"Kill with any phys",
	"20992":"Kill with any elem",
	"21504":"Kill while any bound",
	"22016":"Kill w/ combustion"
}

const ename = ["NONE","Rabid Acorn","Forest Aye-Aye","Air Squirrel","Roper","Charging Boar","Man-eating Hare","Toxipede","Myconid","Owl Beast","Bucking Giraffe","Stun Cicada","Jumping Caracal","Spotted Hound","Rending Mole","Prancing Parrot","Impeding Tengu","Glaring Stinger","Iron Crustacean","Zombie Mutt","Ghost","Horned Skull","Petite Spriggan","Skelesword","Bone Archer","Roaming Wraith","Headless Hunter","Flame Temptress","Grand Spriggan","Zombie Dragon","Soultaker","Hypno Bat","Cave Leech","Fire Cryst","Ice Cryst","Volt Cryst","Raging Tortoise","Sword Saurian","Lance Saurian","Hammer Saurian","Chiroptilla","Sonar Worm","Hellhound","Alluring Imp","Emperor Falcon","Xenopod","Dreamray","Slender Demon","Taurus Demon","Plague Demon","Coffin Demon","Mounting Horror","Harvester","Wild Dog","Ice Bat","Forest Turtle","Venomous Leech","Colossal Roper","Cursed Capra","Stoneray","Chiroptekong","Volt Squirrel","Gobbler","Popping Gel","Zombie Squirrel","Cracked Skull","Eerie Choker","Klaxon Cicada","Tantrum Turkey","Mole King","Panda Ant","Fire Ant","Puffer Sparrow","Crimson Caracal","Steel Acorn","Ice Squirrel","Horned Gel","Cliff Goat","NONE","Bladed Phasmid","Stone Steed","Battering Boar","Clawed Fiend","Mimic Aye-Aye","Stardust","Asura Cicada","Prosperous Gel","Night Witch","Wily Parrot","Cerberus","Xenolion","Fire Squirrel","Camo Dog","Doom Wheel","Dread Worm","Hex Steed","Shielded Phasmid","NONE","NONE","NONE","Wounded Boar","Hurt Crustacean","Crazed Stinger","Enraged Tengu","Angry Mole Lord","Xenolord","Rampaging Roper","Luring Phantom","Saurian Looter","Saurian Bandit","Megavolt Marmot","Saurian Leader","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Evil Dragon","Star Devourer","Star Devourer","Rocket Engine","Agile Sword","Towering Sword","Sound Cannon","Energy Tube","Bomb Chamber","Bind Snake","Undead Fencer","Undead Archer","Golem Body","Golem Head","Golem Arm","NONE","Golem Leg","White Golem","Red Golem","Black Golem","Yellow Golem","NONE","Amalgolem","Hippogryph","Undead King","Crystal Dragon","Eternal Tyrant","Star Devourer","Primordiphant","Lamia","Dryad","NONE","NONE","NONE","NONE","NONE","Crystal Dragon","Undead King","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE"];

const textheaders_main = ["Level","Experience","Unknown"];
const textheaders_stats = ["HP", "STR", "VIT", "AGI", "LUC", "INT", "WIS", "Type", "Acc", "Cut Res", "Bash Res", "Stab Res", "Fire Res", "Ice Res", "Volt Res"];
const textheaders_ares = ["Death Res", "Petrify Res", "Sleep Res", "Panic Res", "Unused", "Poison Res", "Blind Res", "Curse Res", "Paralyze Res", "Stun Res", "Head Bind Res", "Arm Bind Res", "Leg Bind Res"];
const textheaders_items = ["Item Name", "Drop Chance", "Condition"];

const errorm = ["No error. Why are you here?","Error! ID must be under 272","?","Error! Monster name not found.","Error! Monster table size mismatched. This should never happen."]; //same with this