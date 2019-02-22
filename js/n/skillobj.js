const subheader_obj = {
	"1":"TP cost",
	"2":"Limit cost",
	"3":"Speed",
	"4":"Skill accuracy",
	"5":"Acc. (mod)",
	"6":"Field effect",
    "7":"UNUSED",
	"8":"DMG mult if ailment",
	"9":"DMG mult per ailm.",
    "10":"UNUSED",
	"11":"Lifesteal %",
    "12":"UNUSED",
    "13":"UNUSED",
	"14":"If front",
	"15":"If back",
    "16":"UNUSED",
    "17":"UNUSED",
	"18":"Swap row on hit (?)",
    "19":"UNUSED",
    "20":"UNUSED",
    "21":"UNUSED",
    "22":"UNUSED",
    "23":"UNUSED",
    "24":"UNUSED",
	"25":"Chase chance red.",
	"26":"Maximum chases",
	"27":"Use weap DMG type", //I'm not super sure about this one. It's on All Out and it seems to ignore a flag that checks if the attack has no base type?
    "28":"Bot chase elem.", //unsure
	"29":"DMG type from bot",
    "30":"Elem from attack",
	"31":"Uncounterable",
    "32":"UNUSED",
	"33":"Horseplay",
    "34":"UNUSED",
    "35":"Mult per buff",
    "36":"Mult per debuff",
    "37":"UNUSED",
    "38":"UNUSED",
	"39":"Chance to endure",
    "40":"UNUSED",
    "41":"UNUSED",
	"42":"Day bonus DMG %",
	"43":"UNUSED",
	"44":"Night bonus DMG %",
	"45":"Splash %",
    "46":"UNUSED", //related to 47
    "47":"Ocean Drop",                      //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	"48":"Damage vs. Binds", //just binds?
	"49":"Reduce chance", //chance reduction after minimum hits it seems
    "50":"UNUSED",
	"51":"DW max hit mult",
	"52":"Valid kill target", //only one monster skill has this
	"53":"Target mod",
	"54":"UNUSED",
	"55":"UNUSED",
	"56":"Ailment chance",
	"57":"Chance vs. ailment",
    "58":"UNUSED",
	"59":"Unknown59",
	"60":"Missing HP mult",
    "61":"UNUSED",
	"62":"UNUSED", //Buc Nin
	"63":"UNUSED",
	"64":"Damage %",
	"65":"Pincushion DMG",
	"66":"Restore rate",
	"67":"HP restore",
	"68":"TP restore",
	"69":"Self-damage %",
	"70":"UNUSED",
	"71":"Self-destruct",
    "72":"UNUSED",
	"73":"Target acts next",
    "74":"UNUSED",
	"75":"Min hits",
	"76":"Max hits",
	"77":"Skill link (ID)",
	"78":"Link after turns",
	"79":"Summon monster",
	"80":"Summon amount",
	"81":"Poison damage",
	"82":"Charge %",
	"83":"Cure ailment",
	"84":"Cure bind",
	"85":"DMG reduction %",
	"86":"Same row DR bonus",
	"87":"Preemptive chance",
    "88":"UNUSED",
	"89":"Field steps",
    "90":"Something in throw", //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    "91":"UNUSED",
	"92":"Flee chance",
    "93":"UNUSED",
	"94":"Crit damage", //replaces crit damage instead of buffing it
    "95":"UNUSED",
    "96":"UNUSED",
    "97":"UNUSED",
    "98":"UNUSED",
    "99":"UNUSED",
	"100":"something to do with subheaders", //figure it out - not in data
    "101":"UNUSED",
    "102":"UNUSED",
    "103":"Unknown103", //hmm
    "104":"% of damage taken", //a cumulative counter, divided across the team
	"105":"% of damage taken", //counter
	"106":"Beast to summon",
	"107":"Link on summon",
	"108":"Beast base HP",
	"109":"Beast stat mult",
	"110":"Link after use", //target self-team
	"111":"Link after use", //target enemy team
	"112":"Link on use",
	"113":"Weapon type", //this is really weird. I'll need to investigate it in detail later
	"114":"Bot skill ID",
	"115":"Bot damage mult",
	"116":"Clone^2 * this mult", //find better wording
	"117":"Avoid DMG chance",
	"118":"Chance to sprout",
	"119":"Bonus DMG taken", //warrior might
	"120":"Bot HP and TP",
	"121":"Bodyguard DMG %", //How does this differ from 85?
	"122":"Clone HP/TP",
    "124":"Abyssal God Event",
	"125":"Line free cast",
	"126":"Link when attacked",
	"127":"Block and link W.A.",
	"128":"Link on ally hit",
	"129":"DOESN'T EXIST!",
	"130":"Link on line hit", 
	"134":"Cannot miss",
	"135":"Cannot repeat", //shoot - may also be "cannot be chased"
	"136":"Use weap animation", //all out - may also be "cannot be chased"
	"137":"Unknown137", //narmer's earthquake
	"139":"Hit twice", //??? not certain
    "140":"Cast twice", //also not sure
	"142":"Ignore DEF buffs",
    "143":"Some unused ailment thing",
	"144":"Use ailment on self",
	"145":"Double TP cost",
	"146":"Die after use",
	"147":"All drops on kill",
	"148":"Use ailment on self",
	"149":"Dispel arms buff",
	"150":"Join clones after",
	"151":"Act first", //knighthood
	"152":"Act first", //quick draw
	"153":"Rear Dignity flag",
	"155":"1% DMG per miss HP",
	"156":"Clear ailment AR",
	"157":"Clear bind AR",
	"159":"Formaldehyde",
	"161":"Provoke flag",
	"162":"Unknown162", //enemy kaishaku heal?
	"164":"Defrag flag", //again, not sure what this does exactly. don't care enough to find out
	"165":"Yggdroid bind flag", //I don't actually know what this is for. it seems to do... something with binds.
	"166":"Restrict to bots",
	"167":"Kill bots after use",
	"168":"Check for bot", //all out works only with bots
	"170":"Buff duration",
	"172":"Use skill at EOT",
	"174":"ELE weakness %",
	"175":"DEF % (ailment)",
	"176":"ATK % (ailment)",
	"177":"ATK %",
	"178":"Damage taken %",
	"179":"ATK %", //daifuhensha and fore honor
	"180":"Damage taken %", //rear dignity and other things
	"181":"ATK %", //rear dignity
	"182":"Bonus DMG taken", //not sure how this differs from 119
	"183":"Fore Honor flag",
	"184":"Rear dignity buff",
	"186":"Max HP %",
	"194":"Accuracy %", //this is the buff version, which differs from 284
	"197":"Evasion",
	"200":"Draw rate modifier",
	"205":"Ailment immunity", //205 and 206 are, as far as I can tell, identical in the game's code
	"206":"Ailment immunity",
	"207":"Bind immunity",
	"208":"Guaranteed crit",
	"214":"Passive buff dur.", //unused. this subheader, if found in a passive, seems to make it so all buffs that are applied by the user to have a specific duration rather than what's specified on the skill.
	"215":"Cast when buffed",
	"216":"Cast on buff use",
	"218":"Use twice chance",
	"219":"Splash chance",
	"220":"DMG Up %",
	"221":"Parry chance",
	"222":"Stun chance",
	"223":"DEF %", //passive for guardian
	"226":"Bonus hit chance",
	"227":"UNUSED PRIORITY SUBHEADER", //roll a number between x and the subheader value. if found, this character gets +17,000 speed (EO2 1st Hit) [quickness]
	"228":"Full DMG in back",
	"229":"TP cost reduction",
	"230":"Bonus crit chance",
	"231":"Crit during night",
	"232":"Instant kill chance",
	"235":"Use on evade",
	"237":"UNUSED PRIORITY SUBHEADER",
	"238":"UNUSED PRIORITY SUBHEADER",
	"239":"Heal mult %", //form qi
	"240":"Use on skill use",
	"241":"Use on death", //target allies
	"242":"Use on death", //target enemies
	"243":"Chance to revive",
	"244":"Use on ally death",
	"245":"Use on ally death 2", //how does this differ from 244?
	"246":"Bonus bind chance", //unused
	"247":"Bonus ailment chance", //unused
	"248":"Recovery chance",
	"249":"HP on kill", //extend. HP only?
	"250":"TP on kill", //etheric return. TP only?
	"251":"ATK on kill",
	"252":"DMG vs. weakness",
	"253":"% health required",
	"254":"If HP full on front",
	"255":"Use when bound",
	"256":"Heal at battle end",
	"257":"Bonus EXP %",
	"258":"Activate chance", //seen in endure
	"259":"Bonus drop rate %",
	"260":"Rare drop chance",
	"262":"DMG % vs. high HP",
	"263":"Beast DMG %",
	"264":"Beast DEF %",
	"265":"Beast HP %",
	"267":"Chance to trigger", //with beast
	"268":"Beast ailment %",
	"269":"Beast draw chance",
	"270":"Beast draw chance", //not sure why it has two subheaders for this
	"273":"Dual wield DMG %",
	"274":"Use on defend",
	"276":"Ailment resistance",
	"277":"Reduce blindside chance", //unused
	"278":"Avoid blindside %",
	"279":"Use on DMG skill",
	"280":"Nobility proof flag",
	"281":"Use on buff expire",
	"282":"Fail if this ailment",
	"283":"Hit %",
	"284":"Evasion %",
	"285":"Hit rate at night",
	"286":"Dodge rate at night",
	"289":"Damage while ailment", //unused. ailment goes in the main ailment header. probably used in EO2 sight
	"290":"Use on revive",
	"291":"HP cost on skill",
	"292":"Link when hit %", //used only on EM barrier
	"293":"HP threshold", 
	"294":"Activation chance", //kaishaku
	"295":"Act first",
	"296":"Act last",
	"306":"Drain damage",
	"308":"UNUSED", //checked for in a subheader handler
	"312":"UNUSED PRIORITY SUBHEADER", //checked for in priority function
	"314":"Block element",
	"320":"UNUSED LINKING SUBHEADER", //checked for in linking function
	"324":"Sword DMG %",
	"325":"Club DMG %",
	"326":"Spear DMG %",
	"327":"Shield DMG %",
	"328":"Rapier DMG %",
	"329":"Gun DMG %",
	"330":"Knife DMG %",
	"331":"Unarmed DMG %",
	"332":"Unarmed DMG %", //this is actually used in wild mastery, but it's just 100% for each value. weird
	"334":"Bolt DMG %",
	"335":"Katana DMG %",
	"337":"HP Up %", //note: this subheader doesn't actually change things
	"338":"TP Up %", //nor does this one
	"342":"AGI Up % (unused)",
	"343":"LUC Up % (unused)",
	"344":"Bonus ESC chance",
	"345":"Bonus limit",
	"346":"EXP Bonus % (/10)",
    "347":"Golem endure",
    "348":"Golem endure HP"
}

const ENEMY_SKILL_NAME = ["None","Attack","Jump Kick","Harsh Buzz","Rising Bile","Thunder Strike","Paralysis Roll","Shell Guard","Swing","Muddle Roar","Stomp","Sleep Breath","Poison Breath","Charge","Tail Swipe","Coconut Strike","Tangling Vine","Piercing Stinger","Rising Fang","Drain","Sweet Mist","Corrode","Fireball","Rush","Slumber Needle","Ruinous Strike","Double Slash","Sharp Fang","Jumping","Thorn","Bite Off","Zone Icicle","Pincer Shield","Icy Leg Lash","Diving Press","Crush","Poison Sting","Frigid Tail Whip","Absolute Fight","Absolute Fight","Absolute Fight","Sealing Volt","Black Wings","Petrifying Stare","Talon Zapper","Wind Flash","Air Slash","Rage Fangs","Voltking's Fury","Raging Winds","Rending Claw","Horn Strike","Foul Spew","Binding Claw","Cover","Shield Shell","Ruin Fangs","Chomp","Slumber Claw","Mangle Fang","Ice Slurry","Ancient Curse","Ancient Curse","Swim Frenzy","Calming Wave","Mow Down","Feeding Vortex","Terrible Roar","Baboon Dunk","Tackle","Leg Sweep","Toxic Mist","Ground Dash","Fire Breath","Crimson Gale","Balloon Drop","Dust Wings","Guard Wing","Flame Howl","Sleep Pollen","Stampede","Burning Wind","Mucus Frenzy","Unload","Devour Ally","Devour Ally","Devour Ally","Raging Flame","Hound Howl","Potent Acid","Electrified Juice","Pineapple Mash","Scarlet Glare","Ground Shake","Panic Dive","Flame Spell","Noxious Fang","Flame Burst","Carapace Wall","Crazy Swipe","Recoil Needle","Peck Rush","Poison Dust","Vertigo Gel","Solar Flame","Giant Swing","Snail Dance","Bind Fang","Echolocation","Bloodsucker","Ferocious Fish","Paralyze Fang","Menacing Glare","Assault Wing","Frigid Wind","Predatory Ice","Stance","Counter Blow","Counter Blow","Techno Bash","Techno Bash","Power Tackle","Blinding Spores","Manic Ambush","Giant Hammer","Holy Shock","Trample","Scalding Juice","Panic Assault","Thunderclap","Pandemistrike","Carnage Claw","Magnetic Storm","Magnetic Storm","Dozing Gaze","Bind Mace","Violent Beating","Crushing Kick","Poison Spores","Lava Boulder","Icicle Lump","Hama Dive","Stupefying Buzz","Blazing Lance","Snowy Claw","Mighty Pierce","Electric Dive","Oil Spin","Glider","Shell Cutter","Stunning Glare","Scorching Glare","Onrush","Calamity Roar","Red-Hot Fangs","Blade Fin","Violent Crash","Crushing Kick","Volt Shot","Forest Breach","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Cross Counter","Evil Cry","Seal Arms","Stone Gleam","Leg Slash","Firestorm","Silent Claw","Frigid Branch","None","Siren Song","Wide Bind","Leg Hex","Supreme Bind","High Ecstasy","Death Glare","Volt Strike","Reverse Solids","Volt Shoulder","Feral Ice Fang","Knockout Tackle","Multi-Stab","Illusion Kick","Blast Horn","Arm Slash","Purge","King's Claws","Slumber Mist","Ice Shot","Limb Crusher","Spirit Eroder","Hammerhead","Toxic Comet","Riposte Fang","Guillotine Chomp","Ivy Drain","Binding Leaf","Licking","Freezing Jump","Dive Twister","Thrust Up","Cursed Kick","Heavenly Bolt","Cold Front","Jolting Blow","Ruinous Pollen","Flame Claw","Plague Club","Leg Zapper","Scorching Juice","Scythe Slash","Slash Rampage","Tri-Death","Charge","Ruinous Strike","Arm Breaker","Rock Crusher","None","Stunning Roar","Berserker Rage","Berserk","Silent Stare","Cross Counter","Fire Rush","Combo Smash","Hurricane Punch","None","Cure","Holy Veil","Mud Throw","Fin Strike","Whip Ripper","Marsh Dive","Earthquake","Rest","Ram","Wing Talon","Tail Strike","Whirlwind","Galvanic Ray","Shining Breath","Shrill Cry","Chaos Scream","Claws of Despair","Storm Feather","Feast","Bloodbath","Grand Berry","Freeze Ripple","Great Melody","Ocean Rave","Spout","Ancient Roll","Ancient Roll","Thunderwing","Pinion Spear","Deathbringer","Chaosbringer","Grip","Wind Breath","Menacing Gust","Vine Grab: Head","Vine Grab: Arm","Vine Grab: Leg","Suspicious Pollen","Darkness Rend","Poison Mist","Deathly Glare","Thousand Hertz","Sinister Flame","Dark Mist","Avarice Claw","Crushing Tail","Hellfire Breath","Healing Howl","Selfless Love","Fire Breath","Harsh Cry","Dust Tail","Scorching Fire","Fire Cannon","Horned Hurl","Sleep Tail","Fire Wall","Fire Wall","Fire Regen","Fire Chaser","Scale Stuck","Scale Summon","Snake Pile","Great Blaze","Double Strike","Menacing Roar","Doom Assault","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Doom Breath","Bite","Imperial Claws","Pound","Call Allies","Roar","Stone Gleam","Pierce","Thrust","Safeguard","Thunder Storm","Hail Storm","Cursed Gas","Petrifying Gas","Panic Gas","Self Heal","Self Heal Active","Self Heal Inactive","Resonant Growl","Shadow Remnant","Wide Bravery","Guard Rush EX","Frigid Slash EX","Act Breaker","Ominous Wave","Clear Mind EX","Shadow Burst","Miracle Edge EX","Binding Light","Sealing Flame","Quaking Thunder","Clean Sweep","Power Press","Hateful Glare","Megalodive","Mode Change","Mode Change","Pentacle Slam","Pentacle Slam","Call Front","Icicle Jail","Icicle Jail","Lick","Ice Storm","Poison Spit","Slurp","Reflection","Rock Hammer","Sledgehammer","Regen","Reflection","Endure","Flame Sigh","Frost Smile","Lightning","Tendril Thrash","Vampiric Kiss","Ancient Pollen","Spider Lily","Lightning Storm","Back Kick","Clawbinder","Panic Glare","Ebon Gaze","Sky Dive","Rest","Wing Shield","Wing Shield Down","Cry Soul","Lullaby","Piercing Shell","Ice Shave","Six Sins","Summon Tentacle","Shocking Bind","Ghost Tentacle","Squeeze Grip","Tail Whip","Serpent's Curse","Serpent's Curse","Poison Flame","Evil Eye","Death's Embrace","Alluring Body","Familiar","Head Bind","Arm Bind","Leg Bind","Binding Thrash","None","None","Copycat","Gorge","Throw","Fuse","Gorge","None","Summon","None","None","Stunning Juice","None","None","None","None","None","None","None","None","Glinting Blade","None","None","None","Reversal Slam","None","None","None","None","None","None","None","Bad Beak","None","None","None","Dream Eater","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Boulder Crush","None","Putrid Breath","Violent Cry","Berserk Cry","Reckless Barrier","Tusk Strike","Brandish","Eradicate","King's Rush","Grind","Queen's Verdict","Duster","Ruler's Eye","Empress Flare","Guard Line","Healing Honey","Repressive Howl","Cold Fangs","Howl","Fierce Rush","Silver Fang","Stunning Howl","Howl","Fire Torrent","Echoing Howl","Dragon Smash","Draconic Fury","Dragon Claw","Red Fang","Summon Ally","Resonant Fire","Ice Breath","Iceblock","Crushing Arm","Glacial Regen","Sonic Scream","Triple Strike","Summon Ally","Resonant Ice","Glacial Regen","Volt Breath","Soul Strike","Judgement","Corrupt Howl","Binding Dance","Summon Ally","Resonant Thunder","Resonant Thunder","Resonant Thunder","Scorching Hell","Frozen Hell","Thunderous Hell","Dark Lunge","Hellish Stab","Endless Drop","Dark Invitation","Lure of Death","None","None","None","None","None","None","None","Dream Eater","None","Glinting Blade","Stunning Juice","None","None","None","None","None","None","Combo Stance","Reversal Slam","None","None","Unholy Light","Unholy Light","Violent Blades","Undead Regen","Rearing Head","Death Tumble","Condemnation","Eternal Body","Eternal Body","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Change Spell","Bracing Liquid","Bracing Liquid","Binding Juice","Binding Juice","Camouflage","Icicle","Rhino Rampage","Muddy Plague","Headbutt Binder","Pandemic March","Jet Uppercut","Boomerang Hook","Back Smash","Choking Vine","Wind Flash EX","Techno Bash","Blizzard","Frozen Tongue","Entrapment","Entrapment","Binding Root","Ripping Arm","Legsnap Needle","Deadly Vortex","Sudden Slash","Vertigo Lash","Confusing Dust","Slice and Dice","Sticky Spit","Toxic Spew","Mind Ruin","Cruel Fangs","Snow Cover","Dynamo Thunder","Dust Storm","Destructive Fang","Roar of Triumph","Devourer Needle","Molt","Needle Shower","Binding Shine","Conviction Shine","Coiling Vine","Infernal Flame","Attack Line EX","Leg Bite","Infernal Blaze","Earthquake","Lonely Fang","Scissor Wrath","Scissor Wrath","Scissor Wrath","Refreshing Honey","Refreshing Honey","Ice-Cold Acid","Piercing Beak","Heavy Claw","Claw Slice","Ominous Wind","Self-Destruct","Insanity Scales","Rock Coil","Spark","Biting Flurry","Freezing Juice","Pinebuster","Wintry Moon","Heat Wave","Reed Cutter","Dead Zone","Eternal Chant","Absorb Vine","Puke Shower","Strike Barrage","Furious Glare","Piercing Gaze","Severing Claw","Enchanted Eyes","Crazy Eye","Focused Bite","Demonic Shine","Horned Hurl","Deer Outrage","Frigid Scythe","Frozen Fury","Blind Blade","Curse Fang","Sonic Fang","Playful Bite","Frolic","Pout","Eruption","Death Glare","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"]; //it's gross but there's really no reason to load it as a data file tbh

const PLAYER_SKILL_NAME = ["Blank","Attack","Healing Wall","Preemptive Taunt","Front Guard","Ally Shield","Shield Smite","Taunt","Fortify","Rear Guard","Chop","Aegis","Phys DEF Up","Elem DEF Up","Keep Guard","Recovery Guard","Fire Wall","Ice Wall","Volt Wall","Shield Bash","En Garde","HP Up","Heal Guard","Line Shield","Full Guard","Shield Flare","Shield Protect","Painless","Force 3","Scavenge","Antibodies","Patch Up","Healing","Line Heal","Refresh","Revive","Head Bash","Take","Final Gift","Elem DEF Up","Auto-Revive","Delayed Heal","Unbind","Group Therapy","Star Drop","Medical Rod","Safe Passage","Overheal","Staff Mastery","Heal-All","Chase Heal","Deja Vu","Heavy Strike","Intensive Care","Healing Touch","Force 3","Risk Perception","Blind Arrow","Power Shot","Chain Dance","Flame Arrow","Resuscitate","Safe Passage","Sorting Skill","Natural Instinct","Finishing Shot","Speed Up","Flank Shot","Multi-Shot","Drop Shot","Trickery","Efficiency","Cautious Steps","Quick Step","Disabling Shot","Nature's Blessing","Sagittarius Shot","Hazy Arrow","Scapegoat","Sneak Attack","Illusory Formation","Mirage Arrow","Force 3","Upper Stance","Clear Stance","Swift Stance","Upward Slash","Charging Thrust","Sheath Strike","Breath","Arm Strike","Air Blade","Mine","Phys ATK Up","Duel","Flame Grater","Lightning Stab","Frigid Slash","Helm Splitter","Haze Slash","Horizontal Slash","Full Proficiency","Speed Up","Rouse Spirits","Swallow Strike","Stone Thrust","Petal Scatter","Musou","Issen","Force 3","HP Up","Turning Tide","Bloody Veil","Long Thrust","Draining Thrust","Legion Thrust","Spear Assist","Spirit Shield","Mine","Phys DEF Up","Bloodlust","Battle Instinct","Head Pierce","Draining Burst","Legion Burst","Delayed Charge","Bloody Offense","Blood Fortune","Allied Bonds","Phys ATK Up","Black Sabbath","Spear Reversal","Cross Charge","Legion Charge","Hero Battle","Gae Bolg","Force 3","Cover Support","Medic Bullet","Rapid Fire","Splash Shot","Arm Snipe","Leg Snipe","Shell Shock","Pop Flare","Mine","Penetrator","Preemptive Fire","Preemptive Flare","TP Up","Head Snipe","Scattershot","Feint Shot","Charged Shot","Act Quick","Multi-Shot","Phys ATK Up","Charged Fire","Charged Ice","Charged Volt","Ricochet","Double Action","Riot Gun","Force 3","Royal Veil","Reinforce","Attack Order","Guard Order","Fire Arms","Freeze Arms","Shock Arms","Negotiation","Take","Royal Dignity","Monarch March","Royal Lineage","Prevent Order","Rally Order","Tactical Decree","Protect Order","Element Bomb I","Healing Decree","Renew","Status DEF Up","Dauntless Order","Element Bomb II","Clearance","Final Decree","Victory Vow","Proof of Nobility","Force 3","Singularity","Etheric Return","Fire Star","Ice Star","Volt Star","Etheric Gleam","Etheric Charge","Horoscope","Mine","Etheric Boon","TP Up","Anti-Ether","Ether Mastery","Binary Fire","Binary Ice","Binary Thunder","Ether Shot","Dark Ether","Free Energy","Multi-Strike Ether","Meteor","Fire Prophecy","Ice Prophecy","Volt Prophecy","Divination","Astrosign","Force 3","Proficiency","Reflexes","Concealment","Shadow Bind","Bone Crusher","Ninpo: Daggers","Ninpo: Caltrops","Ninpo: Mirage","Chop","Beheading","Revenge Bomb","Auto-Mirage","Status ATK Up","Izuna","Hawk Strike","Ninpo: Flight","Ninpo: Mirror","Ninpo: Double","Mystic Calm","Return Malice","Dominance","Drawing Slice","Ninpo: Smoke","Ninpo: Panic","Diversion Gambit","Ninpo: Toxic Mist","Force 3","Second Sword","Avidya Sight","Bolt Slash","Echoing Slash","Great Warrior","Front Command","Shot Command","Taunt Assassins","Take","Peerless Demon","Bloody Lance","Morale Boost","Morning Star","Twilight Hour","Twin Swallows","Blitz Command","Endure Command","Seppuku","Reincarnation","Execution","Curse Strike","5-Ring Sword","Warrior Might","Swift Justice","Unified Effort","Decoy Party","Force 3","Proficiency","Phys DEF Up","Falcon Slash","Blazing Link","Freezing Link","Electric Link","Power Break","Vanguard","Mine","Initiative","Status DEF Up","Smash Link","Improved Link","Double Strike","Spiral Slice","Penetrate","Speed Break","Guard Break","Link Mastery","Single Devotion","Link Finale","Sword Tempest","Swift Stab","Full Break","Trinity","Full Charge","Force 3","Proficiency","Blade Flurry","Shadow Cloak","Ice Knife","Biding Slice","Sand Throw","Sleep Throw","Decoy Sign","Chop","Foul Mastery","Auto-Cloak","Speed Up","Shadow Bite","Nerve Throw","Curse Throw","Spread Throw","Backstab","Sneak Attack","Follow Trace","Auto-Spread","Enduring Cloak","Assassinate","Swift Edge","Venom Throw","Killing Intent","Disaster","Force 3","Avenger","Heat Shield","Sharp Edge","Natural Edge","Blood Edge","Assault Drive","Heat Sink","Heavy Guard","Mine","Intercooler","Status DEF Up","Trip Edge","Cool Edge","Massive Edge","Impulse Edge","Flame Drive","Freeze Drive","Shock Drive","Absorber","HP Up","Element Boost","Force Edge","Charge Edge","Accel Drive","Ignition","Conversion","Force 3","Double Punch","HP Up","Adrenaline","Concussion","Arm Breaker","Low Blow","One-Two Punch","Corkscrew","Chop","Fighting Spirit","Following Strike","Status ATK Up","Leading Blow","Cross Counter","Fault Blocker","Devil's Fist","Clinch","Breather","Raging Billows","Million Rush","Meditation","Thunder Fist","Lash Out","Resonance Blow","Bind Rush","Final Blow","Force 3","Endless Shroud","Black Wave","Miasma Armor","Toxic Reap","Paralyzing Reap","Stifling Miasma","Eroding Miasma","Sluggish Miasma","Take","Spirit Absorb","Black Shroud","Status ATK Up","Darkness Reap","Chaos Reap","Wilting Miasma","Binding Miasma","Atonement","Soul Transfer","Death Tolerance","Enduring Armor","Ephemeral Reap","Fatal Reap","Spirit Barrier","Miasma Wall","Endless Armor","Miasma Tsunami","Force 3","Encourage","Heroic Bonds","Afterimage","Mirage Sword","Wide Bravery","Frigid Slash","Clear Mind","Physical Shield","Chop","Great Bravery","Graceful Image","Heroic Steel","Charge Image","Burst Blade","Spark Blade","Fervor","New Challenger","Elemental Shield","Dark Image","Retain Force","Regiment Rave","Act Breaker","Force Gift","Guard Rush","Brave Heart","Miracle Edge","Force 3","Biding Slice","Finishing Shot","Blazing Link","Freezing Link","Electric Link","Blitz Command","Echoing Slash","Bloodlust","Fire Prophecy","Ice Prophecy","Volt Prophecy","Ninpo: Caltrops","Warrior Might","Message Wait","Spirit Absorb","Execution","Cross Charge","Delayed Charge","Battle Instinct","Sagittarius Shot","Delayed Heal","Chase Heal","Deja Vu","1 Turn Heal","Clinch","Cross Counter","Upper Stance","Clear Stance","Swift Stance","Turning Tide","Shield Flare","Tactical Decree","Final Decree","Clearance","Endure Command","Heal After 1 Turn","Poison Damage","Formation Change","Swap","Defend","Escape","Items","Medica","Amrita","Hamao","Nectar","Dummy","Dummy","Soma","Theriaca α","Theriaca α All","Theriaca β","Theriaca β All","Formaldehyde","Laudanum","Unihorn","Bravant","Stonard","Fire Mist","Chill Mist","Spark Mist","Cut Mist","Bash Mist","Stab Mist","All Mist","Blaze Oil","Freeze Oil","Shock Oil","Axcela","Dummy","Dummy","EXP Up","Codex Register","Dummy","Dummy","Dummy","Fire Talisman","Ice Talisman","Volt Talisman","Flame Talisman","Freeze Talisman","Shock Talisman","Blind Gas","Poison Gas","Nerve Gas","Confuse Gas","Curse Gas","Sleep Gas","Tangler: Head","Tangler: Arms","Tangler: Legs","Dummy","Dummy","HP&TP","Food Effect (HP)","Food Effect (TP)","Food Effect (Revive)","Food Effect (Damage)","Dummy","Dummy","Dummy","Dummy","Turn Vampire","HP Up","TP Up","STR Up","VIT Up","AGI Up","LUC Up","TEC Up","WIS Up","Vine Grab: Arm","Thumb Jab","Claw Sever","Harsh Buzz","Flame Rush","Volt Strike","Silver Thrust","Fake-Out Stab","Breaking Arrow","Death Pile","Whirlwind","Guard Dance","Volt Barrage","Hilt Strike","Torch Smash","Leaping Rush","Gale Flash","Mind Vigor","Sumu Kasi","Hanging","Infernal Barrier","Darkness Rend","Thunder Wall","Chaos Scream","Rage Fangs","Rending Claw","Phantom Swords","Immobilizing Cut","Venomous Stab","Snail Dance","Amateur Medic","Rest","Amateur Savior","Halloween","Chrono Gatling","Full Thrust","Glimmering Luck","Snow Windmill","Champion's Dignity","Destructive Tusk","Fieldwork","Malice Slash","Clairvoyant","Storytelling","Wide Spark","Foot Sweep","Analyze","Reverse Slash","Toxic Comet","Lick","Multi-Blast","Bloodthirsty Blade","Tri-Death","Calamity Cannon","Delta Block","Royal Veil","Protect Order","Element Bomb I","Element Bomb II","Front Command","Shot Command","Bind Rush","Miracle Edge","Spark Blade","Guard Rush","Clear Mind","War Heal","War Heal Line","Displace","Strange Seeds","Strength Slash","Guard Slash","Blade Barrage","Enchanted Eyes","Hurricane Punch","Feast","Ocean Rave","Pierce","Dummy","Smoke Cannon","Sleep Tail","Dummy","Bite","Boulder Toss","Deathbringer","Dummy","Black Flash","Dragon Smash","Sonic Scream","Curse Strike","Barrage","Vertigo Slash","Hellish Pinwheel","Evil Cry","Limb Crusher","Hammerhead","Leg Zapper","Fear Glint","Calamity Arrows","Biting Flurry","Rend","Massacre Wave","Alluring Body","Vertigo Lash","Sticky Spit","Sky Dive","Devourer Needle","Coiling Vine","Queen's Verdict","Boomerang Hook","Frozen Fury","Dummy","Cut Jar","Bash Jar","Stab Jar","Dummy","Petrify Gas","Skill 296","Skill 297","Skill 298","Skill 299","Skill 29A","Vampire","War Edge Master","War Heal","War Heal Line","Displace","Random Disease","Strength Slash","Guard Slash","Take","Status DEF Up","HP Up","Rouse","Artery","War Response","War Revive","Headcut","Armcut","Legcut","Phys ATK Up","Mind Drain","Epidemic","War Heal All","Barrier","Ailing Slash","War Edge Power","Fairy Robe","Force 3","Proficiency","Bracing Walk","Circle Boon","Curse Circle","Nerve Circle","Chain Circle","Snare Circle","Dismiss Heal","Chop","Status ATK Up","Warding Mist","Sleep Circle","Hood Circle","Dismiss Revive","Dismiss Blow","Charm Eye","Atrophic Eye","Tame Ground","Circle Mastery","TP Return","Chaos Circle","Poison Circle","Dismiss Blast","Dismiss Quake","Circle Paradise","Releasal Spell","Force 3","Earth's Bounty","Excavation","Flee","Sympathy Pain","Play Possum","Strange Seeds","Slap Awake","Keen Eye","Harvestry","Persistence","Fearless","Waste Not","Godsend","Share the Wealth","Rotten Egg","Survival Wisdom","Rain or Shine","Safe Stroll","Blessed Remains","Fruitful Song","Nature's Blessing","Harvest Festival","Lullaby","Double Crop","Item Echo","Final Secret","Force 3","Artery","War Response","War Revive","Headcut","Armcut","Legcut","War Heal All","Curse Circle","Nerve Circle","Chain Circle","Snare Circle","Circle Boon","Sleep Circle","Hood Circle","Chaos Circle","Poison Circle","Proficiency","Undying Soul","Ghastly March","Sunlight Damage","Night Heal","Ghastly March","Additional Skill 302"]

const text_headers = ["Max level","Skill type","Body part","Target req","Target Type","Target Team","Where Use","Buff/Debuff","B/D type","Unknown","B/D element","DMG element","ACureorInf","Ailment","Skill fl","Unknown 2"]; //I don't like this. I should rewrite it as an object probably

const error_m = ["No error. Why are you here?","Error! ID must be under 400 for enemy table.","Error! ID must be under 421 for player table.","Error! Skill name not found (make sure the checkbox is correct).","Error! Skill table size mismatched. This should never happen."]; //same with this