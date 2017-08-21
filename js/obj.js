const subheaderobj = {
	"1":"TP cost",
	"2":"Limit cost",
	"3":"Speed",
	"4":"Skill accuracy",
	"5":"Acc. (mod)",
	"6":"Field effect",
	"8":"DMG % (If bound)",
	"11":"Lifesteal %",
	"14":"If front",
	"15":"If back",
	"18":"Swap row on hit (?)",
	"25":"Chase chance red.",
	"26":"Maximum chases",
	"27":"Ignore DMG type", //I'm not super sure about this one. It's on All Out and it seems to ignore a flag that checks if the attack has no base type?
	"29":"DMG type from bot",
	"33":"Horseplay",
	"39":"Chance to endure",
	"42":"Day bonus DMG %",
	"44":"Night bonus DMG %",
	"45":"Splash %",
	"51":"DW max hit mult",
	"53":"Target mod",
	"56":"Ailment chance",
	"60":"Missing HP mult",
	"62":"UNUSED", //Buc Nin
	"63":"UNUSED",
	"64":"Damage %",
	"65":"Pincushion DMG",
	"66":"Flat restore",
	"67":"HP restore",
	"68":"TP restore",
	"69":"Self-damage %",
	"71":"Endure with beast",
	"73":"Target acts next",
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
	"89":"Field steps",
	"92":"Flee chance",
	"94":"Crit damage", //replaces crit damage instead of buffing it
	"105":"% of damage taken",
	"106":"Beast to summon",
	"107":"Link on summon",
	"108":"Beast base HP",
	"109":"Beast stat mult",
	"110":"Link after use",
	"111":"UNUSED LINKING SUBHEADER", //investigate this!
	"112":"Link on use",
	"113":"Weapon type", //this is really weird. I'll need to investigate it in detail later
	"114":"Bot skill ID",
	"115":"Bot damage mult",
	"116":"Clone^2 * this mult", //find better wording
	"117":"Avoid DMG chance",
	"119":"Bonus DMG taken", //warrior might
	"120":"Bot HP and TP",
	"121":"DMG reduction %", //How does this differ from 85?
	"122":"Clone HP/TP",
	"125":"Line free cast",
	"126":"Link when attacked",
	"127":"Link on elem skill",
	"128":"Link on ally hit",
	"130":"Link on line hit", 
	"134":"Cannot miss",
	"135":"Unknown135", //shoot
	"136":"Unknown136", //all out
	"137":"Unknown137", //narmer's earthquake
	"139":"Hit twice", //??? not certain
	"142":"Ignore defenses",
	"144":"Use ailment on self",
	"145":"Double TP cost",
	"148":"Use ailment on self",
	"150":"Join clones after",
	"151":"Act first", //knighthood
	"152":"Act first", //quick draw
	"153":"Unknown153", //if you use it on the rear row in rear dignity. loads a value to the stack that doesn't seem to do anything with rear dignity, but might be used in other things.
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
	"179":"ATK % 2",
	"180":"Damage taken %", //rear dignity and other things
	"181":"ATK %", //rear dignity
	"182":"Bonus DMG taken", //not sure how this differs from 119
	"183":"Fore Honor flag",
	"184":"Rear dignity flag",
	"186":"Max HP %",
	"194":"Accuracy %", //this is the buff version, which differs from 284
	"197":"Evasion",
	"200":"Draw rate modifier",
	"205":"Ailment immunity", //205 and 206 are, as far as I can tell identical in the game's code
	"206":"Ailment immunity",
	"207":"Bind immunity",
	"208":"Guaranteed crit",
	"214":"Passive buff dur.", //unused. this subheader, if found in a passive, seems to make it so all buffs that are applied by the user to have a specific duration rather than what's specified on the skill.
	"216":"Reinforce flag",
	"218":"Use twice chance",
	"219":"Splash chance",
	"220":"DMG Up %",
	"221":"Parry chance",
	"222":"Stun chance",
	"223":"DEF %", //passive for guardian
	"226":"Bonus hit chance",
	"228":"Full DMG in back",
	"229":"TP cost reduction",
	"230":"Bonus crit chance",
	"231":"Crit during night",
	"232":"Instant kill chance",
	"235":"Use on evade",
	"239":"Heal mult %", //form qi
	"240":"Use on skill use",
	"241":"Use on death", //target allies
	"242":"Use on death", //target enemies
	"243":"Chance to revive",
	"244":"Use on ally death", //how does this differ from 243?
	"245":"Use on ally death", //how does this differ from 243 and 244?
	"246":"Ailment chance bonus", //this is too long, but that's fine because this is completely unused in the base game
	"247":"Ailment chance bonus", //this is too long, but that's fine because this is completely unused in the base game
	"248":"Recovery chance",
	"249":"Use on kill", //extend. HP only?
	"250":"Use on kill", //etheric return. TP only?
	"251":"ATK on kill",
	"252":"DMG vs. weakness",
	"253":"% health required",
	"254":"If HP full on front",
	"255":"Use when bound",
	"257":"Bonus EXP %",
	"258":"Activate chance", //seen in endure
	"259":"Bonus drop rate %",
	"260":"Rare drop chance",
	"262":"DMG % vs. high HP",
	"263":"Beast DMG %",
	"264":"Beast DEF %",
	"265":"Beast HP %",
	"267":"Max HP % to heal",
	"268":"Beast ailment %",
	"269":"Beast draw chance",
	"270":"Beast draw chance", //not sure why it has two subheaders for this
	"273":"Dual wield DMG %",
	"274":"Use while defending",
	"276":"Ailment resistance",
	"278":"Avoid blindside %",
	"279":"Use on DMG skill",
	"280":"Nobility proof flag",
	"282":"Fail if this ailment",
	"283":"Hit %",
	"284":"Evasion %",
	"285":"Hit rate at night",
	"286":"Dodge rate at night",
	"290":"Use on revive",
	"291":"HP cost on skill",
	"292":"Link chance on hit", //used only on EM barrier
	"293":"HP threshold", 
	"294":"Activation chance", //kaishaku
	"295":"Act first",
	"296":"Act last",
	"308":"UNUSED", //checked for in a subheader handler
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
	"346":"EXP Bonus % (/10)"
	//unknown: 26
}

const ename = ["Blank","Attack","Claw Cut","Poison Gun","Membrane","Sea God's Anger","Lightning Drop","Panic Rush","Poison Tail","Thorn","100-Leg Bind","Bite Off","Vine Dance","Choke","Chomp","Charge","Crush","Greedy Fang","Sharp Fang","Call Allies","Breath","Jump","Muddle Roar","DEFend","Ruin Claw","Ferocious Fish","Decay Breath","Life Absorb","Regen","Power Fang","Cover","Absorb Spirit","Withering Glare","Shell","Foul Spew","Mud Ink","Tear Apart","Aqua Shot","Ruin Fangs","King's Gift","Ice Slurry","Cuff Fangs","Dampen Claw","Claw Chop","Charge In","Ancient Curse","Unload","Combust","Ice Aura","Constricting Leg","Bloody Supper","Poison","Yawn","Twine","Fireball","Crazy Swipe","Mud Spit","Worm Crack","Heavy Fire","Call Allies B","Burning Wind","Fumes","Evil Cry","Flame Claw","Hiss","Ram","Venom Fang","Sticky Acid","Throw","DEFend Stance","Throw","Greedy Claws","Predator","Empress Hammer","Duster","Panic Spores","Double Fire","Bide Time","Great Spike","Roar","Lullaby of Rest","Blast Assault","Frost Lap","Fishman Drug","Icicle","Bouha Stance","Rush","Gale Blade","Torpedo","Ice Burn","NONE","Crushing Fang","Ominous Step","Dino Crush","Antihuman Fire","Dis-Element","Zone Icicle","Leaping Slash","Crystal Edge","Nightmare Solo","Soulshaking Song","Dazzling Eye","Bamboo Splicer","Ground Shake","Bronze Fang","Zone Thunder","Zone Blaze","Ice Beast","Wide Cut","Counter","Sea Guillotine","Deadly Incisor","Gel Electrolyte","Sleeper","Petals","Lightning Call","Bullrush","Moon Prayer","Venom","Branch","Stunning Spore","Diving Breath","Silent Claw","Stone Needle","Bolt Spread","Heavenly Bolt","Stinky Mist","Thunderclap","Dozing Gaze","Crazed Shout","Divine Storm","Exhaust Field","Phosphorescence","Amputate","Scythe Dance","Curse Spores","Violent Vines","Tangling Vines","Scorching Hell","Bewildering Eye","Snapping Teeth","Discharge","Crazy Noise","Binding","Mad Charge","Stone Eye","Spirit Dry","Parasite Venom","Dragon Head","Seven Plagues","Halloween","NONE","NONE","NONE","NONE","NONE","Self-Destruct","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Change","NONE","NONE","NONE","NONE","NONE","NONE","Spurting Fumes","Kaishaku Heal","NONE","NONE","NONE","Imperial Pride","NONE","NONE","Counter","NONE","NONE","NONE","NONE","NONE","Crystal Edge","Reversal Spore","NONE","NONE","NONE (poison damage handler?)","NONE","Counter","Mud Throw","Fin Smack","Whip Ripper","Earthquake","Marsh Dive","Submerged Move","Escape","Grand Berry","Ocean Rave","Spout","Great Melody","Freeze Ripple","Souha Stance","Tenchi Souha Sho","Disperse","Focus","Line Slice","Punching","Iron Claw","Heat Ray","Blizzard Breath","Electric Flash","Malfunction","Lament","Dubious Mist","Thin Ice","Thunder Wrath","Ocean Drop","Sweet Song","Brandish","Grasp Arm","Liberation","Uzurai","Punishment","Dark Breath","Thorn Cutter","Vine Rush","Spine Blaze","Frozen Eye","Death Thunder","Liberate","Accumulate","Bite Off","Shark Rush","Evil Placoid","Charge","Baracuda","Heated Shot","Dazzling Aurora","Arrest Mine","Oil Cannon","Thunder Cannon","Thunder Feather","Godly Flash","Panic Claw","Ice Crush","Heavenly Light","Critical Break","Fuming Snort","Fumes","Tie Up","Overeat","Hard Scale","Cold Wave","NONE","Violent Grudge","Withstand","NONE","Tentacle Grab","Cnidocyte Rush","Tentacle Reap","Tentacle Suck","Twin Ice Spear","Ice Breath","Ice Pillar","Twin Fire Spear","Fire Breath","Fire Pillar","Twin Volt Spear","Volt Breath","Volt Pillar","Dragon Quake","Ultimate Ruin","Regenerate","Devilish Smile","Misfortune","Breath of Envy","Mist Robe","Cold Stare","Demon Kiss","Reflection","Multi Hammer","Triple Hammer","Death Tentacle","Squid Press","Tidal Wave","Shower","Restoration","Supernova","Black Fire","Scarlet Ice","Green Flash","Grand Dive","Wing Rush","Ancient Breath","NONE","Magma Ocean","Ice Tempest","Proton Thunder","Regenerator","NONE","NONE","NONE","NONE","Nameless Wall","Mist Curtain","Chaotic Beckon","Spurting Fumes","Abyssal Offering","NONE","Demon Rage","Rising Claw","Chaos Tentacle","Primitive Burn","Foul Glacier","Dark Lightning","Ripping Neigh","Fetter Dance","Tail Swing","Divine Wrath","Retribution","Imperial Pride","Summons","Fortress","Conciliate","Restraint","Cruel Stare","Cruelty","Demon Reaper","Falcon Thrust","War Spirit","Kaitou Ranma","Ouka no Mai","Frigid","Regen","Iceblock","NONE","NONE","Zero Point","Shower","NONE","NONE","NONEDATA","NONE","Regen","Magic Lullaby","Petrivoice","Darkness Coil","Poison Tale","Voltage","Curse","Corrupt","Fangs","Blow","Searing","Howling","NO DATA","Beat","Red Fang","Strike","Aquaveil","Flood","Coiling","Ice Gaze","Frost Smile","Shock","Tentacle Beat","Vampire Kiss","Pollen","Cry Soul","Embrace","Lullaby","Tentacle","Six Sins","NO DATA","NO DATA","NO DATA","Corroding Acid","Lay Egg","Swallow Whole","Phoenix","Multiply","Multiply","Multiply","Poison Seeds","Scream","Poison Spores","Self-Destruct 1","Palsy Destruct","Endure"]; //it's gross but there's really no reason to load it as a data file tbh

const pname = ["Blank","Attack","HP Up","TP Up","Bandage","Combat Study","Limit Boost","AGI Up","LUC Up","Esc Up","Limit Boost","Chop","Mine","Take","Royal Lineage","Monarch March","Royal Veil","Triumphant Cry","Reinforce","Nobility Proof","Attack Order","Guard Order","Rally Order","Negotiation","Inspire","Ad Nihilo","Fire Arms","Freeze Arms","Shock Arms","Regal Radiance","Prevent Order","Protect Order","Knighthood","Endless Battle","Sword Mastery","Club Mastery","Avenger","Stun Attack","Wild Swings","Charge","Berserker Vow","Wolf Howl","White Flame","Break","Rush","Bind Cut","Rampage","Blade Rave","Crushing Blow","Arm Breaker","Freezing Blow","Nine Smashes","Guardian","Spear Mastery","Shield Mastery","Parry","Magic Parry","Recuperate","Selflessness","Provoke","Shrug Off","Switch Stab","Blitzritter","Long Stride","Line Guard","Antifire","Anticold","Antivolt","Bodyguard","Overwatch","Vigilance","Trickster","Rapier Mastery","Gun Mastery","Swashbuckling","Lady Luck","Limit Boost","Eagle Eye","Quick Draw","Rapid Fire","Chase Flame","Chase Ice","Chase Volt","Lights Out","Hanging","Chase Saber","Chase Blow","Chase Thrust","Pincushion","Troublemaker","Keburi no Sue","Kubikiri","Senpuku","Karuwaza","Nikudan","Knife Mastery","Suikyou","Otori","Kumogakure","Bunshin","Makibishi","Kagerou","Sarutobi","Fukubari","Kagenui","Takanoha","Izuna","Tagen Battou","Tonsou Jutsu","Form Qi","Fist Mastery","Ascetic Deeds","Ascetic Reward","Blood Return","Waking Chakra","Kikouken","Healing","Party Heal","Full Heal","Counter","Retaliate","Refresh","Resurrect","Unbind","Line Heal","Breakfire Fist","Darkness Fist","Fire Walk","Ether Mastery","Fire Mastery","Ice Mastery","Volt Mastery","Etheric Return","Singularity","Etheric Charge","Dark Ether","Meteor","Fire Star","Binary Fire","Fire Prophecy","Ice Star","Binary Ice","Ice Prophecy","Volt Star","Binary Thunder","Volt Prophecy","Horoscope","Beast Soul","Wild Mastery","Nature Pact","Sacrifice 1","Sacrifice 2","Alertness","Beast Roar","Primal Drums","Dismiss Beast","Call Bird","Call Snake","Call Mole","Call Insect","Call Cow","Call Owl","Call Elephant","Call Tiger","Call Lion","Call Ooze","Giant Kill","Bolt Mastery","Extend","Night Vision","Double Action","Proper Form","Pop Flares","Smoke Grenade","Snipe","Heavy Shot","Strafe","Sharpshooter","Armor Piercer","Fire Barrage","Front Mortar","Ice Barrage","Volt Barrage","Cloudbuster","Ambush","Earth's Bounty","Persistence","Brave Heart","Camp Mastery","Waste Not","Keen Nose","Play Possum","Sympathy Pain","Rotten Egg","Lullaby","Strange Seeds","Slap Awake","Horseplay","Double Crop","Safe Stroll","To Market","Rain or Shine","Keen Eye","Harvestry","Second Sword","Katana Mastery","Endure","Kaishaku","Bloody Lance","Morale Boost","Unified Spirit","Hilt Strike","Myoujou","Magatoki","5-Ring Sword","Daifuhensha","Warrior Might","Fore Honor","Rear Dignity","Ambush Stance","Fusillade","Blitz Command","Retreat","Sleep Mode","Overheat","Virus Scanner","EM Barrier","Infravision","Data Mining","Red Bot","Blue Bot","Yellow Bot","Resupply","Reflector","Shoot","All Out","Rocket Punch","Rocket Head","Rocket Jump","HP Cannon","Core Dump","DEFrag","Cross Slash","Indomitable","Charge Tactic","Mumyouken","Guard Tactic","Second Wind","Lethal Tactic","Aegis DEFense","Hellfire","Wind Tactic","Absolute Zero","Aegis Barrier","Sungrazer","Regroup Tactic","Typhoon Bolt","Aegis Shield","Quintessence","Star Smasher","Lucky Hammer","Uroboros Guard","Immortal","Buc Farm","Buc Nin","Buc Mon","Buc Farm","Nin Prin","Nin Glad","Nin Farm","Nin Do","Nin Farm","Bind Feather","Wind Wrap","Scratch","Poison Dust","Bull Run","Sleep Powder","Reckless Rush","Death Fang","Sleeping Lion","Plague Gunk","Bind Feather","Wind Wrap","Scratch","Poison Dust","Bull Run","Sleep Powder","Reckless Rush","Fierce Counter","Regal Authority","Plague Gunk","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Fusillade","Blitz Command","NONE","Reflector","EM Barrier","Kaishaku","NONE","NONE","NONE","Zod Nin","Zod Aba","Buc Nin","Buc Farm","Nin Prin","Snipe","Sharpshooter","NONE","NONE","NONE","NONE","NONE","NONE","NONE","NONE","Medica Type","Amrita Type","Hamao Type","Nectar Type","Nectar Type","Soma Type","Theriaca A","Theriaca A","Theriaca B","Theriaca B","NONE","NONE","NONE","Discharge","NONE","NONE","Strange Seed","Tiger Counter","Warrior Might","Cloudbuster","Counter","Retaliate","Chase Saber","Chase Blow","Chase Thrust","Chase Flame","Chase Ice","Chase Volt","Makibishi","Ambush Stance","Rocket Puch","Rocket Headbutt","Rocket Jump","Red Module","Blue Module","Yellow Module","Fire All","Infect","Restore Mark","Fire Prophecy","Ice Prophecy","Volt Prophecy","Last Chase","Metapon","Unihorn","Bravant","Stonard","Fire Mist","Ice Mist","Volt Mist","Cut Mist","Bash Mist","Stab Mist","Blaze Oil","Freeze Oil","Shock Oil","Fire Jar","Flame Jar","Ice Jar","Frost Jar","Volt Jar","Storm Jar","Poison Gas","Stun Gas","Blind Gas","Sleep Gas","Curse Gas","Addle Gas"]

const textheaders = ["Max level","Skill type","Body part","Target req","Target Type","Target Team","Where Use","Buff/Debuff","B/D type","unk.","B/D element","DMG element","ACureorInf","Ailment","Skill fl","unk3"]; //I don't like this. I should rewrite it as an object probably

const errorm = ["No error. Why are you here?","Error! ID must be under 400 for enemy table.","Error! ID must be under 421 for player table.","Error! Skill name not found (make sure the checkbox is correct).","Error! Skill table size mismatched. This should never happen."]; //same with this