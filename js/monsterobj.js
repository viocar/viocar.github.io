const conditionalobj = {
	"512":"Kill with non-phys",
	"1024":"Kill with non-elem",
	"2048":"Kill with cut",
	"2560":"Kill with stab",
	"3072":"Kill with bash",
	"3584":"Kill with fire",
	"4096":"Kill with ice",
	"4608":"Kill with volt",
	"5632":"Kill with poison dmg.",
	"6656":"Kill while blinded",
	"8192":"Kill with curse dmg.",
	"8704":"Kill while sleeping",
	"9728":"Kill by petrify",
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
	"18482":"Kill w/ 5,000 dmg. atk."
}

const ename = ["Blank","Claw Shrimp","Fanged Fish","Devilfish","Starry Slug","Aplysiomorpha","Bolt Striker","Venomshroom","Trip Mushroom","Stun Eryngii","Cursed Shroom","Whorled Puffer","Red Starfish","Blue Starfish","King Starfish","Dragon Egg","Pandora Egg","Dragon Pup","Otherspawn","Pasaran","Clionean","Ringed Lemur","Claw Monkey","Great Platypus","Deadly Durian","Rotten Fruit","Nautilus","Ammonite","Hungry Coral","Rock Coral","Lava Beast","Deep Medium","Deep Maiden","Mistletoe","Vampire Tree","Insectortoise","Gigapede","Great Lynx","Flame Lynx","Volt Cat","High Onnep","High Walrus","Freed Savage","Coral Octopus","Silver Octopus","Deep Marine","Deep Raider","Ipupiara","White Fox","Divine Judge","Longicorn","Titan Arum","Miasma Bud","Great Anaconda","Silverback","Sea Wanderer","Big Snakehead","Cruel Roamer","Koolasuchus","Omnivore","Great Anteater","Deep Prelate","Deep Coistrel","Somnovore","Dreamsmasher","Largebill","Raging Tyrant","Greedy Lizard","Poison Dragon","Scaled Dragon","Mother Dragon","Stegosaurus","Great Hermit","Flame Lizard","Rattle Nozuchi","Guardian Ant","Killer Ant","Ptarmigan","Treerat","Forest Hare","Clawed Mole","Swordfish","Dementia Owl","Eerie Statue","Petaloid","Venomfly","Death Pumpkin","Hell Pumpkin","Tri-Pumpkin","Suicide Hare","Forest Frog","Spotted Frog","Furyhorn","Cursed Knight","Raging Boar","Death Scorpion","Sickwood","Dragonfly","Scylla Crab","Abyssal Death","Wicked Queen","Mud Lurker","Corotrangul","Iron Turtle","Cave Elephant","Sauroposeidon","Mortal Hunter","Revelationer","Pasaran","Pasaran","Pasaran","Gold Pasaran","Red Pasaran","Blue Pasaran","Sea Lobster","Forest Shrimp","Red Puffer","Yawnypus","Demon Octopus","Golden Idol","Silver Fox","Peach Crow","Longicorn Beta","Bog Lurker","Tentacle","Penguin","Deep Believer","Deep Sentinel","Sea Berserker","Calamity God","Glutton Beast","Pomona Taker","Pomona Taker","Attendant","Pincer Statue","Roaming Spirit","Splitstool","Avian King","Majordomo","Peach Crow","Largebill","Deep Lady","Deep One","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Drake","Dragon","Wyrm","Golem","Manticore","Scylla","Alraune","NONE","NONE","NONE","Narmer","Ketos","Gatekeeper","Keeper Head","Keeper Body","Automaton King","Olympia","Deep Princess","Kujura","Progenitor","Abyssal God","Abyssal God","Hammerhead","Ghost Ship","Meregho Saeno","Leviathan","King Penguin","Anemone","Ruin Caller","Frost Head","Flame Head","Thunder Head","Elder Dragon","Shin","Kraken","Kirin","Abyssal God","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE"];

const textheaders_main = ["Level","Experience","Unknown"];
const textheaders_stats = ["HP", "TP [unused]", "STR", "VIT", "AGI", "LUC", "TEC", "Type", "Acc", "Cut Res", "Bash Res", "Stab Res", "Fire Res", "Ice Res", "Volt Res"];
const textheaders_ares = ["Death Res", "Petrify Res", "Sleep Res", "Panic Res", "Plague Res", "Poison Res", "Blind Res", "Curse Res", "Paralyze Res", "Stun Res", "Head Bind Res", "Arm Bind Res", "Leg Bind Res"];
const textheaders_items = ["Item Name", "Drop Chance", "Condition"];

const errorm = ["No error. Why are you here?","Error! ID must be under 256","?","Error! Monster name not found.","Error! Monster table size mismatched. This should never happen."]; //same with this