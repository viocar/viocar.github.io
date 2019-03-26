const subheader_obj = {
	0x1:"TP cost",
	0x2:"Limit cost",
	0x3:"Speed",
	0x4:"Skill accuracy",
	0x5:"Accuracy modifier",
    0x6:"Effect", //seems to be a generic subheader... it's on upper stance but also the survivalist item thing
    0xB:"Stance duration", //Upper Stance
    0xC:"Maximum activations", //Scapegoat
    0xE:"Maximum activations", //Chase Heal (is this per person?)
    0x2B:"Ailment damage mult.", //Shadow Bite
    0x2E:"Lifesteal", //Blood Edge
    0x4E:"TP Lifesteal", //Gae Bolg
    0x50:"Damage mult. at day", //Morning Star
    0x52:"Damage mult. at night", //Twilight Hour
    0x53:"Splash percent", //Splash Shot
    0x59:"Max hit mult. w/ 2 weap.", //5-Ring Sword
    0x5F:"Lifesteal", //Healing Decree
    0x60:"Ailment chance mult.", //Spread Throw
    0x62:"Target type modifier",
    0x69:"Crit while Upper St.", //Upward Slash
    0x6A:"Crit while Clear St.", //Charging Thrust
    0x6B:"Crit while Swift St.", //Sheath Strike
    0x6D:"[Some chance thing]", //Burst Blade
    0x7D:"Ail./binds removed", //Breather
    0x7E:"Damage absorption",
    0x89:"Combo multiplier", //Cross Charge
    0x8F:"Both type multiplier",
    0x92:"Back row multiplier",
    0x99:"Ailment chance",
    0x9B:"Ail. chance in miasma", //Toxic Reap
    0x9F:"Lower HP damage mult.", //Spear Reversal
    0xA1:"Revive chance", //Seppuku
    0xAB:"Cloak ailment chance", //Backstab
    0xAC:"Damage mult. w/ cloak", //Backstab
    0xAD:"[Prob. almighty dmg.]", //Backstab
    0xAE:"[Prob. reduce turns?]",
    0xAF:"[Prob. hits w/ 2 weap?]", //Twin Swallows
    0xB0:"Formula factor", //Regiment Rave
    0xB1:"Maximum multiplier", //Regiment Rave
    0xB2:"Ailment % at max HP", //Act Breaker
    0xB3:"Force restore to line", //Force Gift
    0xBC:"Cast preemptively", //Preemptive Taunt
    0xC3:"Amplified damage", //Charged Shot
    0xC7:"Instant death chance", //Head Pierce
    0xC8:"Head bind chance",
    0xD3:"Incoming Dmg. Red.", //Physical Shield
    0xD4:"Shield element", //Physical Shield
    0xD5:"Damage",
    0xD7:"Healing", //Heal Guard, Healing
    0xD8:"Flat HP heal", //Hamao
    0xD9:"Flat TP heal", //Hamao
    0xE1:"Minimum hits",
    0xE2:"Maximum hits",
    0xE3:"Ailment extra max hits", //Swift Edge
    0xE5:"Delay turns",
    0xED:"Poison factor", //Venom Throw
    0xE4:"Skill link", //Shield Flare
    0xF0:"(H) Ailments removed",
    0xF2:"Damage multiplier", //Front Guard
    0xF4:"Preemptive chance up",
    0xF6:"Field skill duration",
    0xF9:"Party lifesteal", //Black Sabbath - all allies or only self?
    0x104:"Charge", //Prophecies and Charge Image
    0x105:"Charge", //Charge Edge
    0x11B:"[Prob. chase chance]", //Blazing Link
    0x11C:"Link chance decrease", //Blazing Link
    0x11D:"[Maximum links?]", //Blazing Link
    0x122:"Self-cast after use",
    0x125:"Skill for ally to use", //Blitz Command
    0x126:"[Weap. types to link?]", //Blitz Command
    0x12D:"Bonus dmg. per clone", //Drawing Slice
    0x12E:"Cur. HP% for clone", //Ninpo: Mirage
    0x12F:"Cur. TP% for clone", //Ninpo: Double
    0x134:"Bonus enmity", //Ninpo: Mirage
    0x13A:"Damage multiplier", //Ally Shield
    0x13B:"Bonus evasion", //Ninpo: Mirage
    0x147:"Force restore", //Force Edge
    0x149:"Ail. force restore", //Dominance
    0x14A:"Force restored", //Axcela
    0x14C:"Link at EOT if not hit", //Biding Slice
    0x14F:"Overheat cooldown", //Sharp Edge
    0x151:"Overheat duration", //Assault Drive
    0x152:"Flat TP heal", //Impulse Edge
    0x156:"Damage % as TP", //Tactical Decree
    0x157:"Damage dealt mult.", //Final Decree
    0x158:"Damage taken mult.", //Final Decree
    0x159:"HP restore factor", //Clearance
    0x15A:"TP restore factor", //Clearance
    0x164:"Max HP increase", //Spirit Absorb
    0x172:"Damage type increase", //Arms skills
    0x176:"User cur. HP % cost", //Draining Thrust
    0x177:"Party cur. HP % cost", //Blood Fortune - how do this and Legion Thrust differ?
    0x178:"Party cur. HP % cost", //Legion Thrust
    0x17E:"Damage down mult.", //Shell Shock
    0x17F:"Defense down mult.", //Shell Shock
    0x180:"[Acc or eva mult.]", //Shell Shock
    0x181:"[Acc or eva mult2.]", //Shell Shock
    0x184:"[Link if del. charge?]",
    0x185:"[Ail. to block? (H)]", //Battle Instinct
    0x189:"TP multiplier", //Dark Ether
    0x18D:"Element damage mult.", //Spear Assist
    0x18F:"Static HP restore", //Healing Wall
    0x190:"Percent HP restore", //Healing Wall
    0x191:"Static TP restore", //Allied Bonds
    0x192:"Percent TP restore", //Allied Bonds
    0x19B:"Musou Upper damage",
    0x19C:"Musou Clear damage",
    0x19D:"[Musou Swift Acc/Eva]",
    0x19E:"[Musou Swift Acc/Eva2]",
    0x19F:"Musou Swift spd. mult.",
    0x1A0:"[Musou Clear ailmult.]",
    0x1A1:"[Musou Clear ailmult2.]",
    0x1A2:"[Musou Clear ailmult3.]",
    0x1A9:"Ailment charge", //Meditation
    0x1C5:"Evasion bonus", //Ninpo: Flight
    0x1C7:"Reduction per evade", //Ninpo: Flight
    0x1C8:"Link on chase", //Chase Heal
    0x1C9:"Chance reduction",
    0x1D2:"TP cost multiplier", //Act Quick
    0x1D9:"Max turns since use", //Resonance Blow
    0x1DD:"Damage multiplier", //Full Guard
    0x1DE:"[Max hits per target?]", //Ninpo: Daggers
    0x1E0:"[Dmg. down per enemy]",
    0x1EB:"Can revive", //Resuscitate
    0x1EC:"Revive healing", //Resuscitate
    0x1F6:"Cooldown", //On that protector skill
    0x208:"Maximum counters", //Ninpo: Caltrops
    0x20A:"Enmity multiplier", //Chain Dance
    0x20B:"Evasion increase", //Chain Dance
    0x219:"Healing power mult.", //Deja Vu
    0x21C:"Elemental charge", //Etheric Charge
    0x21D:"Multi-Strike charge", //Multi-Strike Ether
    0x22E:"Potential link 1", //One-Two Punch
    0x22F:"Potential link 2", //One-Two Punch
    0x230:"Potential link 3 ", //One-Two Punch
    0x231:"Follow-up chance", //Concussion
    0x232:"Potential link 4", //Concussion
    0x233:"[Pr. follow dmg. mult.]", //Concussion
    0x234:"Current HP % recoil", //Thunder Fist
    0x235:"Charge", //Breather
    0x239:"Follow dmg. mult.", //Leading Blow
    0x23D:"Lash Out maximum hits", //Lash Out
    0x240:"Duration", //Miasma Armor
    0x241:"Speed multiplier", //Miasma Armor
    0x242:"Ail. nullify chance", //Miasma Wall
    0x243:"Max nullifies", //Miasma Wall
    0x244:"Ailments to nullify (H)", //Miasma Wall
    0x248:"Link at EOT if activated", //Guard Rush
    0x24A:"[Ail. nullify chance]", //Spirit Barrier
    0x24B:"[Bind nullify chance]", //Spirit Barrier
    0x24C:"Max nullifies", //Spirit Barrier
    0x24E:"Outgoing dmg. mult.", //Miasma Tsunami
    0x24F:"Incoming dmg. mult.", //Miasma Tsunami
    0x250:"[Evasion multiplier?]", //Miasma Tsunami
    0x252:"[Prob. ail. inf. up]", //Miasma Tsunami
    0x253:"[Prob. bind inf. up]", //Miasma Tsunami
    0x25E:"[Final Decree link]", //Final Decree
    0x268:"Link when dual wield", //Echoing Slash
    0x279:"HP cost per activation", //Warrior Might
    0x27A:"[Range for counter?]", //Front Command
    0x27D:"Break debuff mult.", //Full Break
    0x27E:"Bonus dmg. per link", //Link Finale
    0x27F:"Charge damage mult.", //Full Charge
    0x280:"Charge speed mult.", //Full Charge
    0x294:"[Link on hit?]", //Spark Blade
    0x295:"Incoming dmg. mult.", //Guard Rush
    0x297:"Minimum multiplier", //Regiment Rave
    0x298:"Afterimage chance up", //Mirage Sword
    0x299:"Afterimage chance up", //Charge Image
    0x29B:"Damage inc. per proc", //Guard Rush
    0x29C:"Damage limit", //Guard Rush
    0x29D:"Stack limit", //Guard Rush
    0x2AB:"Encounter multiplier", //Cautious Steps
    0x2AC:"Bonus EXP", //Taunt Assassins
    0x2AE:"Rare breed % up", //New Challenger   
    0x2AF:"Minimum battles", //New Challenger
    0x2B0:"Maximum battles", //New Challenger
    0x2BE:"Can't miss",
    0x2F8:"Zodiac skill flag", //Zodiac damage skills
    0x30C:"Heal skill flag",
    0x32F:"Link skill flag", //Links
    0x402:"Buff duration", //Taunt?
    0x405:"Buff link at EOT", //Protect Order
    0x409:"Element dmg. resist", //Fire Mist
    0x410:"Buff damage mult.", //Shield Bash debuff
    0x411:"Buff damage mult.", //Taunt
    0x412:"Buff damage mult.", //Great Warrior
    0x413:"Damage multiplier", //Heavy Guard
    0x415:"[Buff speed mult.?]", //Swift Justice
    0x419:"Max HP increase %", //Rally Order
    0x41B:"Accuracy multiplier", //Trickery
    0x41E:"Evasion multiplier", //Feint Shot
    0x423:"Buff bonus speed", //Swift Justice
    0x425:"Enmity multiplier", //Taunt
    0x428:"Buff endure chance", //Dauntless Order
    0x42B:"[Prob. anti-ailment %]", //Prevent Order
    0x42D:"[Prob. anti-bind %]", //Prevent Order
    0x432:"Ailment chance mult.", //Blood Fortune
    0x433:"Bind chance mult.", //Blood Fortune
    0x43A:"Extra links", //Improved Link
    0x43B:"Chance red. down", //Improved Link
    0x441:"[Heal or speed mult]",
    0x445:"Ail. recovery chance", //Wilting Miasma
    0x446:"[Heal or speed mult2]",
    0x45B:"Healing multiplier", //Efficiency
    0x45D:"Bind. recovery chance", //Binding Miasma
    0x45F:"Link [Deja Vu]", //Deja Vu
    0x466:"Buff endure heal", //Dauntless Order
    0x472:"Outgoing dmg. mult.", //Proficiency (NIN)
    0x473:"Outgoing dmg. mult.", //ATK Up
    0x475:"Zod. skill dmg. mult.", //Ether Mastery
    0x476:"Incoming dmg. mult.", //Second Sword
    0x477:"Damage multiplier", //Initiative
    0x47A:"Type null chance", //Anti-Ether
    0x480:"Damage multiplier", //DEF UP
    0x48A:"Chance for 0 TP cost", //that ether thing on zod
    0x48B:"TP cost reduction", //Mystic Calm
    0x48F:"Instant kill chance", //Beheading
    0x494:"Infliction % bonus", //Return Malice
    0x495:"Ailments boosted (H)", //Return Malice
    0x499:"Bonus speed", //Speed Up
    0x4A5:"Chance", //Auto-Revive
    0x4A9:"Recovery chance", //Antibodies
    0x4A1:"Revive chance", //Reincarnation
    0x4AA:"Link on kill",
    0x4AD:"Damage up % per kill", //Bloody Lance
    0x4AE:"Stack cap", //Bloody Lance
    0x4B0:"Weakness multiplier", //Singularity
    0x4C2:"Endure chance", //Aegis
    0x4C3:"Scavenge multiplier", //Scavenge
    0x4CB:"Cur HP % for dmg.", //Heroic Bonds
    0x4CC:"Outgoing dmg. mult.", //Heroic Bonds
    0x4CD:"Cur HP % for spd.", //Heroic Bonds
    0x4CE:"Speed multiplier", //Heroic Bonds
    0x4CF:"Cover chance", //Great Bravery
    0x4D0:"Cur HP % threshold", //Great Bravery
    0x4D2:"Cur HP % for def.", //Heroic Steel
    0x4D3:"Incoming dmg. mult.", //Heroic Steel
    0x4D4:"Cur HP % for enmity", //Heroic Steel
    0x4D5:"Enmity increase", //Heroic Steel
    0x4D6:"Afterimage chance", //Afterimage
    0x4DC:"Dmg. mult. per ailment", //Foul Mastery
    0x4DD:"Max damage increase", //Foul Mastery
    0x4DE:"Max stacks", //Foul Mastery
    0x4DF:"Skill repeat chance", //Follow Trace
    0x4E0:"Re-apply chance", //Enduring Cloak
    0x4F9:"Health threshold",
    0x4FA:"[prob. proc chance]",
    0x505:"Overheal maximum HP", //Overheal
    0x513:"Damage mult. per link", //Link Mastery
    0x514:"Damage mult maximum", //Link Mastery
    0x52B:"Buff reapply chance", //Renew
    0x546:"Link on debuff chance", //Endless Shroud
    0x547:"[Prob. proc chance]", //Spirit Absorb
    0x54B:"[Prob. dmg. down1]", //Black Shroud
    0x54C:"[Prob. dmg. down2]", //Black Shroud
    0x54E:"[Ail. recovery up]", //Death Tolerance
    0x54F:"[Bind. recovery up]", //Death Tolerance
    0x551:"Duration reduction", //Enduring Armor
    0x552:"Damage multiplier", //Duel
    0x553:"Damage up % per hit", //Peerless Demon
    0x554:"Stack cap", //Peerless Demon
    0x55E:"TP spent damage mult.", //Etheric Boon
    0x55F:"Repeat chance", //Double Punch
    0x560:"Extra attack chance", //Million Rush
    0x561:"Dmg. mult. 1 ailments", //Raging Billows
    0x562:"Dmg. mult. 2 ailments", //Raging Billows
    0x563:"Dmg. mult. 3 ailments", //Raging Billows
    0x564:"Dmg. mult. 4 ailments", //Raging Billows
    0x565:"Link on bind", //Following Strike
    0x566:"Dmg. mult. if lost HP", //Fighting Spirit
    0x568:"[Back row full dmg.?]", //Proficiency (NIN)
    0x569:"Link crit chance", //Smash Link
    0x56A:"Damage mult. 1 elem.", //Single Devotion
    0x56B:"Damage mult. 2 elem.", //Single Devotion
    0x56C:"Damage mult. 3 elem.", //Single Devotion
    0x56D:"Drive damage mult.", //Intercooler
    0x56E:"Drive cooldown down", //Intercooler
    0x56F:"Damage mult. after hit", //Bloody Veil
    0x572:"Afterimage persist %", //Dark Image
    0x573:"Force recovered", //Retain Force
    0x576:"Second attack damage", //Blade Flurry
    0x579:"Overheat dmg. mult.", //Heat Shield
    0x57F:"Stop blindside chance",
    0x584:"[Maybe max activ.?]", //Royal Veil
    0x583:"TP refund %", //Graceful Image
    0x585:"Accuracy multiplier", //Speed Up
    0x586:"Evasion multiplier",
    0x587:"Accuracy multiplier", //Initiative
    0x58C:"Dmg. to ailing enemy", //Proficiency (NSK)
    0x591:"Link HP threshold", //Execution
    0x592:"Link % at HP thresh.", //Execution
    0x5A1:"Activation chance", //Adrenaline
    0x5A9:"Required HP %", //Royal Veil
    0x5AA:"[Staff damage or TP]", //Staff Mastery
    0x5AD:"Chance", //En Garde
    0x5B1:"Out. dmg. mult. at night", //Avidya Sight
    0x5BB:"Pierce chance", //Penetrator
    0x5BD:"Counter link chance", //Bloodlust
    0x5BE:"Null ailment chance",
    0x5BF:"Chance",
    0x5C4:"Infliction chance up", //Status ATK Up
    0x5C6:"[Probably chance]", //Stances
    0x5CA:"Resistance", //Status DEF Up
    0x5D4:"Chance", //Multi-Shot
    0x5E0:"Stance damage mult.", //Upper Stance
    0x5E1:"Stance damage mult.", //Clear Stance
    0x5E2:"[Acc or speed mult.]", //Swift Stance
    0x5E3:"[Acc or speed mult2.]", //Swift Stance
    0x5E4:"Speed multiplier", //Swift Stance
    0x5E5:"[Ailment multiplier?]", //Clear Stance
    0x5E6:"[Ailment multiplier2?]", //Clear Stance
    0x5E7:"[Ailment multiplier3?]", //Clear Stance
    0x5E8:"Upper damage mult.", //Full Proficiency
    0x5E9:"Clear damage mult.", //Full Proficiency
    0x5EA:"[Swift acc. or eva.]", //Full Proficiency
    0x5EB:"[Swift acc. or eva2.]", //Full Proficiency
    0x5EC:"Swift speed mult.", //Full Proficiency
    0x5ED:"[Clear ailment mult.]", //Full Proficiency
    0x5EE:"[Clear ailment mult2.]", //Full Proficiency
    0x5EF:"[Clear ailment mult3.]", //Full Proficiency
    0x5F8:"Act last", //Spear Assist
    0x633:"Force boost duration",
    0x636:"Damage multiplier", //Trinity
    0x638:"Shield protect boost",
    0x63A:"TP cost mult.",
    0x63B:"ICare [speed or mult]", //Intensive Care
    0x63C:"ICare [speed or mult2]",
    0x63D:"Accuracy multiplier", //Trinity
    0x640:"Damage multiplier", //Hero Battle
    0x643:"Evasion bonus", //Diversion Gambit
    0x645:"Second use dmg. mult.", //Double Action
    0x647:"Enmity bonus", //Diversion Gambit
    0x648:"Ailment multiplier", //Killing Intent
    0x649:"Damage multiplier", //Divination
    0x64A:"TP refund", //Divination
    0x64B:"Speed multiplier", //Trinity
    0x64C:"Damage multiplier", //Bind Rush
    0x64E:"Chase link", //Bind Rush
    0x64F:"Party lifesteal", //Hero Battle
    0x665:"Evasion multiplier", //Illusory Formation
    0x666:"Damage multiplier", //Unified Effort
    0x668:"Speed multiplier", //Illusory Formation
    0x66B:"Party max HP %", //Unified Effort
    0x66C:"Ailment turn extend", //Disaster
    0x675:"Maximum effect level",
    0x676:"[Break eff. stage 1]",
    0x677:"[Break eff. stage 2]",
    0x678:"[Break eff. stage 3]",
    0x679:"Poison factor stage 1",
    0x67A:"Poison factor stage 2",
    0x67B:"Poison factor stage 3",
    0x67C:"[Overheal %]", //Miracle Edge
    0x682:"Threshold ail. chance",
    0x6A2:"Damage multiplier", //Proficiency (LDN)
    0x6A3:"Accuracy multiplier", //Proficiency (LDN)
    0x6B7:"HP multiplier", //HP Up
    0x6B6:"[Probably TP mult.]",
    0x6B8:"Flat HP bonus", //Turn Vampire
    0x6B9:"TP multiplier", //TP Up
    0x6BA:"Flat TP bonus", //TP Up (0x21A)
    0x6BB:"[Probably STR mult.]", //Turn Vampire
    0x6BC:"STR up", //STR Up
    0x6BD:"[Probably VIT mult.]", //Turn Vampire
    0x6BE:"VIT up", //VIT Up
    0x6BF:"[Probably AGI mult.]", //Turn Vampire
    0x6C0:"AGI up", //AGI Up
    0x6C1:"[Probably LUC mult.]", //Turn Vampire
    0x6C2:"LUC up", //LUC Up
    0x6C3:"[Probably INT mult.]", //Turn Vampire
    0x6C4:"INT up", //TEC Up
    0x6C5:"[Probably WIS mult.]", //Turn Vampire
    0x6C6:"WIS up", //WIS Up
    0x6D9:"[Prob. activ. chance]", //Miasma Armor
}

const ENEMY_SKILL_NAME = ["None","Attack","Jump Kick","Harsh Buzz","Rising Bile","Thunder Strike","Paralysis Roll","Shell Guard","Swing","Muddle Roar","Stomp","Sleep Breath","Poison Breath","Charge","Tail Swipe","Coconut Strike","Tangling Vine","Piercing Stinger","Rising Fang","Drain","Sweet Mist","Corrode","Fireball","Rush","Slumber Needle","Ruinous Strike","Double Slash","Sharp Fang","Jumping","Thorn","Bite Off","Zone Icicle","Pincer Shield","Icy Leg Lash","Diving Press","Crush","Poison Sting","Frigid Tail Whip","Absolute Fight","Absolute Fight","Absolute Fight","Sealing Volt","Black Wings","Petrifying Stare","Talon Zapper","Wind Flash","Air Slash","Rage Fangs","Voltking's Fury","Raging Winds","Rending Claw","Horn Strike","Foul Spew","Binding Claw","Cover","Shield Shell","Ruin Fangs","Chomp","Slumber Claw","Mangle Fang","Ice Slurry","Ancient Curse","Ancient Curse","Swim Frenzy","Calming Wave","Mow Down","Feeding Vortex","Terrible Roar","Baboon Dunk","Tackle","Leg Sweep","Toxic Mist","Ground Dash","Fire Breath","Crimson Gale","Balloon Drop","Dust Wings","Guard Wing","Flame Howl","Sleep Pollen","Stampede","Burning Wind","Mucus Frenzy","Unload","Devour Ally","Devour Ally","Devour Ally","Raging Flame","Hound Howl","Potent Acid","Electrified Juice","Pineapple Mash","Scarlet Glare","Ground Shake","Panic Dive","Flame Spell","Noxious Fang","Flame Burst","Carapace Wall","Crazy Swipe","Recoil Needle","Peck Rush","Poison Dust","Vertigo Gel","Solar Flame","Giant Swing","Snail Dance","Bind Fang","Echolocation","Bloodsucker","Ferocious Fish","Paralyze Fang","Menacing Glare","Assault Wing","Frigid Wind","Predatory Ice","Stance","Counter Blow","Counter Blow","Techno Bash","Techno Bash","Power Tackle","Blinding Spores","Manic Ambush","Giant Hammer","Holy Shock","Trample","Scalding Juice","Panic Assault","Thunderclap","Pandemistrike","Carnage Claw","Magnetic Storm","Magnetic Storm","Dozing Gaze","Bind Mace","Violent Beating","Crushing Kick","Poison Spores","Lava Boulder","Icicle Lump","Hama Dive","Stupefying Buzz","Blazing Lance","Snowy Claw","Mighty Pierce","Electric Dive","Oil Spin","Glider","Shell Cutter","Stunning Glare","Scorching Glare","Onrush","Calamity Roar","Red-Hot Fangs","Blade Fin","Violent Crash","Crushing Kick","Volt Shot","Forest Breach","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Cross Counter","Evil Cry","Seal Arms","Stone Gleam","Leg Slash","Firestorm","Silent Claw","Frigid Branch","None","Siren Song","Wide Bind","Leg Hex","Supreme Bind","High Ecstasy","Death Glare","Volt Strike","Reverse Solids","Volt Shoulder","Feral Ice Fang","Knockout Tackle","Multi-Stab","Illusion Kick","Blast Horn","Arm Slash","Purge","King's Claws","Slumber Mist","Ice Shot","Limb Crusher","Spirit Eroder","Hammerhead","Toxic Comet","Riposte Fang","Guillotine Chomp","Ivy Drain","Binding Leaf","Licking","Freezing Jump","Dive Twister","Thrust Up","Cursed Kick","Heavenly Bolt","Cold Front","Jolting Blow","Ruinous Pollen","Flame Claw","Plague Club","Leg Zapper","Scorching Juice","Scythe Slash","Slash Rampage","Tri-Death","Charge","Ruinous Strike","Arm Breaker","Rock Crusher","None","Stunning Roar","Berserker Rage","Berserk","Silent Stare","Cross Counter","Fire Rush","Combo Smash","Hurricane Punch","None","Cure","Holy Veil","Mud Throw","Fin Strike","Whip Ripper","Marsh Dive","Earthquake","Rest","Ram","Wing Talon","Tail Strike","Whirlwind","Galvanic Ray","Shining Breath","Shrill Cry","Chaos Scream","Claws of Despair","Storm Feather","Feast","Bloodbath","Grand Berry","Freeze Ripple","Great Melody","Ocean Rave","Spout","Ancient Roll","Ancient Roll","Thunderwing","Pinion Spear","Deathbringer","Chaosbringer","Grip","Wind Breath","Menacing Gust","Vine Grab: Head","Vine Grab: Arm","Vine Grab: Leg","Suspicious Pollen","Darkness Rend","Poison Mist","Deathly Glare","Thousand Hertz","Sinister Flame","Dark Mist","Avarice Claw","Crushing Tail","Hellfire Breath","Healing Howl","Selfless Love","Fire Breath","Harsh Cry","Dust Tail","Scorching Fire","Fire Cannon","Horned Hurl","Sleep Tail","Fire Wall","Fire Wall","Fire Regen","Fire Chaser","Scale Stuck","Scale Summon","Snake Pile","Great Blaze","Double Strike","Menacing Roar","Doom Assault","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Doom Breath","Bite","Imperial Claws","Pound","Call Allies","Roar","Stone Gleam","Pierce","Thrust","Safeguard","Thunder Storm","Hail Storm","Cursed Gas","Petrifying Gas","Panic Gas","Self Heal","Self Heal Active","Self Heal Inactive","Resonant Growl","Shadow Remnant","Wide Bravery","Guard Rush EX","Frigid Slash EX","Act Breaker","Ominous Wave","Clear Mind EX","Shadow Burst","Miracle Edge EX","Binding Light","Sealing Flame","Quaking Thunder","Clean Sweep","Power Press","Hateful Glare","Megalodive","Mode Change","Mode Change","Pentacle Slam","Pentacle Slam","Call Front","Icicle Jail","Icicle Jail","Lick","Ice Storm","Poison Spit","Slurp","Reflection","Rock Hammer","Sledgehammer","Regen","Reflection","Endure","Flame Sigh","Frost Smile","Lightning","Tendril Thrash","Vampiric Kiss","Ancient Pollen","Spider Lily","Lightning Storm","Back Kick","Clawbinder","Panic Glare","Ebon Gaze","Sky Dive","Rest","Wing Shield","Wing Shield Down","Cry Soul","Lullaby","Piercing Shell","Ice Shave","Six Sins","Summon Tentacle","Shocking Bind","Ghost Tentacle","Squeeze Grip","Tail Whip","Serpent's Curse","Serpent's Curse","Poison Flame","Evil Eye","Death's Embrace","Alluring Body","Familiar","Head Bind","Arm Bind","Leg Bind","Binding Thrash","None","None","Copycat","Gorge","Throw","Fuse","Gorge","None","Summon","None","None","Stunning Juice","None","None","None","None","None","None","None","None","Glinting Blade","None","None","None","Reversal Slam","None","None","None","None","None","None","None","Bad Beak","None","None","None","Dream Eater","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Boulder Crush","None","Putrid Breath","Violent Cry","Berserk Cry","Reckless Barrier","Tusk Strike","Brandish","Eradicate","King's Rush","Grind","Queen's Verdict","Duster","Ruler's Eye","Empress Flare","Guard Line","Healing Honey","Repressive Howl","Cold Fangs","Howl","Fierce Rush","Silver Fang","Stunning Howl","Howl","Fire Torrent","Echoing Howl","Dragon Smash","Draconic Fury","Dragon Claw","Red Fang","Summon Ally","Resonant Fire","Ice Breath","Iceblock","Crushing Arm","Glacial Regen","Sonic Scream","Triple Strike","Summon Ally","Resonant Ice","Glacial Regen","Volt Breath","Soul Strike","Judgement","Corrupt Howl","Binding Dance","Summon Ally","Resonant Thunder","Resonant Thunder","Resonant Thunder","Scorching Hell","Frozen Hell","Thunderous Hell","Dark Lunge","Hellish Stab","Endless Drop","Dark Invitation","Lure of Death","None","None","None","None","None","None","None","Dream Eater","None","Glinting Blade","Stunning Juice","None","None","None","None","None","None","Combo Stance","Reversal Slam","None","None","Unholy Light","Unholy Light","Violent Blades","Undead Regen","Rearing Head","Death Tumble","Condemnation","Eternal Body","Eternal Body","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","Change Spell","Bracing Liquid","Bracing Liquid","Binding Juice","Binding Juice","Camouflage","Icicle","Rhino Rampage","Muddy Plague","Headbutt Binder","Pandemic March","Jet Uppercut","Boomerang Hook","Back Smash","Choking Vine","Wind Flash EX","Techno Bash","Blizzard","Frozen Tongue","Entrapment","Entrapment","Binding Root","Ripping Arm","Legsnap Needle","Deadly Vortex","Sudden Slash","Vertigo Lash","Confusing Dust","Slice and Dice","Sticky Spit","Toxic Spew","Mind Ruin","Cruel Fangs","Snow Cover","Dynamo Thunder","Dust Storm","Destructive Fang","Roar of Triumph","Devourer Needle","Molt","Needle Shower","Binding Shine","Conviction Shine","Coiling Vine","Infernal Flame","Attack Line EX","Leg Bite","Infernal Blaze","Earthquake","Lonely Fang","Scissor Wrath","Scissor Wrath","Scissor Wrath","Refreshing Honey","Refreshing Honey","Ice-Cold Acid","Piercing Beak","Heavy Claw","Claw Slice","Ominous Wind","Self-Destruct","Insanity Scales","Rock Coil","Spark","Biting Flurry","Freezing Juice","Pinebuster","Wintry Moon","Heat Wave","Reed Cutter","Dead Zone","Eternal Chant","Absorb Vine","Puke Shower","Strike Barrage","Furious Glare","Piercing Gaze","Severing Claw","Enchanted Eyes","Crazy Eye","Focused Bite","Demonic Shine","Horned Hurl","Deer Outrage","Frigid Scythe","Frozen Fury","Blind Blade","Curse Fang","Sonic Fang","Playful Bite","Frolic","Pout","Eruption","Death Glare","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"]; //it's gross but there's really no reason to load it as a data file tbh

const PLAYER_SKILL_NAME = ["Blank","Attack","Healing Wall","Preemptive Taunt","Front Guard","Ally Shield","Shield Smite","Taunt","Fortify","Rear Guard","Chop","Aegis","Phys DEF Up","Elem DEF Up","Keep Guard","Recovery Guard","Fire Wall","Ice Wall","Volt Wall","Shield Bash","En Garde","HP Up","Heal Guard","Line Shield","Full Guard","Shield Flare","Shield Protect","Painless","Force 3","Scavenge","Antibodies","Patch Up","Healing","Line Heal","Refresh","Revive","Head Bash","Take","Final Gift","Elem DEF Up","Auto-Revive","Delayed Heal","Unbind","Group Therapy","Star Drop","Medical Rod","Safe Passage","Overheal","Staff Mastery","Heal-All","Chase Heal","Deja Vu","Heavy Strike","Intensive Care","Healing Touch","Force 3","Risk Perception","Blind Arrow","Power Shot","Chain Dance","Flame Arrow","Resuscitate","Safe Passage","Sorting Skill","Natural Instinct","Finishing Shot","Speed Up","Flank Shot","Multi-Shot","Drop Shot","Trickery","Efficiency","Cautious Steps","Quick Step","Disabling Shot","Nature's Blessing","Sagittarius Shot","Hazy Arrow","Scapegoat","Sneak Attack","Illusory Formation","Mirage Arrow","Force 3","Upper Stance","Clear Stance","Swift Stance","Upward Slash","Charging Thrust","Sheath Strike","Breath","Arm Strike","Air Blade","Mine","Phys ATK Up","Duel","Flame Grater","Lightning Stab","Frigid Slash","Helm Splitter","Haze Slash","Horizontal Slash","Full Proficiency","Speed Up","Rouse Spirits","Swallow Strike","Stone Thrust","Petal Scatter","Musou","Issen","Force 3","HP Up","Turning Tide","Bloody Veil","Long Thrust","Draining Thrust","Legion Thrust","Spear Assist","Spirit Shield","Mine","Phys DEF Up","Bloodlust","Battle Instinct","Head Pierce","Draining Burst","Legion Burst","Delayed Charge","Bloody Offense","Blood Fortune","Allied Bonds","Phys ATK Up","Black Sabbath","Spear Reversal","Cross Charge","Legion Charge","Hero Battle","Gae Bolg","Force 3","Cover Support","Medic Bullet","Rapid Fire","Splash Shot","Arm Snipe","Leg Snipe","Shell Shock","Pop Flare","Mine","Penetrator","Preemptive Fire","Preemptive Flare","TP Up","Head Snipe","Scattershot","Feint Shot","Charged Shot","Act Quick","Multi-Shot","Phys ATK Up","Charged Fire","Charged Ice","Charged Volt","Ricochet","Double Action","Riot Gun","Force 3","Royal Veil","Reinforce","Attack Order","Guard Order","Fire Arms","Freeze Arms","Shock Arms","Negotiation","Take","Royal Dignity","Monarch March","Royal Lineage","Prevent Order","Rally Order","Tactical Decree","Protect Order","Element Bomb I","Healing Decree","Renew","Status DEF Up","Dauntless Order","Element Bomb II","Clearance","Final Decree","Victory Vow","Proof of Nobility","Force 3","Singularity","Etheric Return","Fire Star","Ice Star","Volt Star","Etheric Gleam","Etheric Charge","Horoscope","Mine","Etheric Boon","TP Up","Anti-Ether","Ether Mastery","Binary Fire","Binary Ice","Binary Thunder","Ether Shot","Dark Ether","Free Energy","Multi-Strike Ether","Meteor","Fire Prophecy","Ice Prophecy","Volt Prophecy","Divination","Astrosign","Force 3","Proficiency","Reflexes","Concealment","Shadow Bind","Bone Crusher","Ninpo: Daggers","Ninpo: Caltrops","Ninpo: Mirage","Chop","Beheading","Revenge Bomb","Auto-Mirage","Status ATK Up","Izuna","Hawk Strike","Ninpo: Flight","Ninpo: Mirror","Ninpo: Double","Mystic Calm","Return Malice","Dominance","Drawing Slice","Ninpo: Smoke","Ninpo: Panic","Diversion Gambit","Ninpo: Toxic Mist","Force 3","Second Sword","Avidya Sight","Bolt Slash","Echoing Slash","Great Warrior","Front Command","Shot Command","Taunt Assassins","Take","Peerless Demon","Bloody Lance","Morale Boost","Morning Star","Twilight Hour","Twin Swallows","Blitz Command","Endure Command","Seppuku","Reincarnation","Execution","Curse Strike","5-Ring Sword","Warrior Might","Swift Justice","Unified Effort","Decoy Party","Force 3","Proficiency","Phys DEF Up","Falcon Slash","Blazing Link","Freezing Link","Electric Link","Power Break","Vanguard","Mine","Initiative","Status DEF Up","Smash Link","Improved Link","Double Strike","Spiral Slice","Penetrate","Speed Break","Guard Break","Link Mastery","Single Devotion","Link Finale","Sword Tempest","Swift Stab","Full Break","Trinity","Full Charge","Force 3","Proficiency","Blade Flurry","Shadow Cloak","Ice Knife","Biding Slice","Sand Throw","Sleep Throw","Decoy Sign","Chop","Foul Mastery","Auto-Cloak","Speed Up","Shadow Bite","Nerve Throw","Curse Throw","Spread Throw","Backstab","Sneak Attack","Follow Trace","Auto-Spread","Enduring Cloak","Assassinate","Swift Edge","Venom Throw","Killing Intent","Disaster","Force 3","Avenger","Heat Shield","Sharp Edge","Natural Edge","Blood Edge","Assault Drive","Heat Sink","Heavy Guard","Mine","Intercooler","Status DEF Up","Trip Edge","Cool Edge","Massive Edge","Impulse Edge","Flame Drive","Freeze Drive","Shock Drive","Absorber","HP Up","Element Boost","Force Edge","Charge Edge","Accel Drive","Ignition","Conversion","Force 3","Double Punch","HP Up","Adrenaline","Concussion","Arm Breaker","Low Blow","One-Two Punch","Corkscrew","Chop","Fighting Spirit","Following Strike","Status ATK Up","Leading Blow","Cross Counter","Fault Blocker","Devil's Fist","Clinch","Breather","Raging Billows","Million Rush","Meditation","Thunder Fist","Lash Out","Resonance Blow","Bind Rush","Final Blow","Force 3","Endless Shroud","Black Wave","Miasma Armor","Toxic Reap","Paralyzing Reap","Stifling Miasma","Eroding Miasma","Sluggish Miasma","Take","Spirit Absorb","Black Shroud","Status ATK Up","Darkness Reap","Chaos Reap","Wilting Miasma","Binding Miasma","Atonement","Soul Transfer","Death Tolerance","Enduring Armor","Ephemeral Reap","Fatal Reap","Spirit Barrier","Miasma Wall","Endless Armor","Miasma Tsunami","Force 3","Encourage","Heroic Bonds","Afterimage","Mirage Sword","Wide Bravery","Frigid Slash","Clear Mind","Physical Shield","Chop","Great Bravery","Graceful Image","Heroic Steel","Charge Image","Burst Blade","Spark Blade","Fervor","New Challenger","Elemental Shield","Dark Image","Retain Force","Regiment Rave","Act Breaker","Force Gift","Guard Rush","Brave Heart","Miracle Edge","Force 3","Biding Slice","Finishing Shot","Blazing Link","Freezing Link","Electric Link","Blitz Command","Echoing Slash","Bloodlust","Fire Prophecy","Ice Prophecy","Volt Prophecy","Ninpo: Caltrops","Warrior Might","Message Wait","Spirit Absorb","Execution","Cross Charge","Delayed Charge","Battle Instinct","Sagittarius Shot","Delayed Heal","Chase Heal","Deja Vu","1 Turn Heal","Clinch","Cross Counter","Upper Stance","Clear Stance","Swift Stance","Turning Tide","Shield Flare","Tactical Decree","Final Decree","Clearance","Endure Command","Heal After 1 Turn","Poison Damage","Formation Change","Swap","Defend","Escape","Items","Medica","Amrita","Hamao","Nectar","Dummy","Dummy","Soma","Theriaca α","Theriaca α All","Theriaca β","Theriaca β All","Formaldehyde","Laudanum","Unihorn","Bravant","Stonard","Fire Mist","Chill Mist","Spark Mist","Cut Mist","Bash Mist","Stab Mist","All Mist","Blaze Oil","Freeze Oil","Shock Oil","Axcela","Dummy","Dummy","EXP Up","Codex Register","Dummy","Dummy","Dummy","Fire Talisman","Ice Talisman","Volt Talisman","Flame Talisman","Freeze Talisman","Shock Talisman","Blind Gas","Poison Gas","Nerve Gas","Confuse Gas","Curse Gas","Sleep Gas","Tangler: Head","Tangler: Arms","Tangler: Legs","Dummy","Dummy","HP&TP","Food Effect (HP)","Food Effect (TP)","Food Effect (Revive)","Food Effect (Damage)","Dummy","Dummy","Dummy","Dummy","Turn Vampire","HP Up","TP Up","STR Up","VIT Up","AGI Up","LUC Up","TEC Up","WIS Up","Vine Grab: Arm","Thumb Jab","Claw Sever","Harsh Buzz","Flame Rush","Volt Strike","Silver Thrust","Fake-Out Stab","Breaking Arrow","Death Pile","Whirlwind","Guard Dance","Volt Barrage","Hilt Strike","Torch Smash","Leaping Rush","Gale Flash","Mind Vigor","Sumu Kasi","Hanging","Infernal Barrier","Darkness Rend","Thunder Wall","Chaos Scream","Rage Fangs","Rending Claw","Phantom Swords","Immobilizing Cut","Venomous Stab","Snail Dance","Amateur Medic","Rest","Amateur Savior","Halloween","Chrono Gatling","Full Thrust","Glimmering Luck","Snow Windmill","Champion's Dignity","Destructive Tusk","Fieldwork","Malice Slash","Clairvoyant","Storytelling","Wide Spark","Foot Sweep","Analyze","Reverse Slash","Toxic Comet","Lick","Multi-Blast","Bloodthirsty Blade","Tri-Death","Calamity Cannon","Delta Block","Royal Veil","Protect Order","Element Bomb I","Element Bomb II","Front Command","Shot Command","Bind Rush","Miracle Edge","Spark Blade","Guard Rush","Clear Mind","War Heal","War Heal Line","Displace","Strange Seeds","Strength Slash","Guard Slash","Blade Barrage","Enchanted Eyes","Hurricane Punch","Feast","Ocean Rave","Pierce","Dummy","Smoke Cannon","Sleep Tail","Dummy","Bite","Boulder Toss","Deathbringer","Dummy","Black Flash","Dragon Smash","Sonic Scream","Curse Strike","Barrage","Vertigo Slash","Hellish Pinwheel","Evil Cry","Limb Crusher","Hammerhead","Leg Zapper","Fear Glint","Calamity Arrows","Biting Flurry","Rend","Massacre Wave","Alluring Body","Vertigo Lash","Sticky Spit","Sky Dive","Devourer Needle","Coiling Vine","Queen's Verdict","Boomerang Hook","Frozen Fury","Dummy","Cut Jar","Bash Jar","Stab Jar","Dummy","Petrify Gas","Skill 296","Skill 297","Skill 298","Skill 299","Skill 29A","Vampire","War Edge Master","War Heal","War Heal Line","Displace","Random Disease","Strength Slash","Guard Slash","Take","Status DEF Up","HP Up","Rouse","Artery","War Response","War Revive","Headcut","Armcut","Legcut","Phys ATK Up","Mind Drain","Epidemic","War Heal All","Barrier","Ailing Slash","War Edge Power","Fairy Robe","Force 3","Proficiency","Bracing Walk","Circle Boon","Curse Circle","Nerve Circle","Chain Circle","Snare Circle","Dismiss Heal","Chop","Status ATK Up","Warding Mist","Sleep Circle","Hood Circle","Dismiss Revive","Dismiss Blow","Charm Eye","Atrophic Eye","Tame Ground","Circle Mastery","TP Return","Chaos Circle","Poison Circle","Dismiss Blast","Dismiss Quake","Circle Paradise","Releasal Spell","Force 3","Earth's Bounty","Excavation","Flee","Sympathy Pain","Play Possum","Strange Seeds","Slap Awake","Keen Eye","Harvestry","Persistence","Fearless","Waste Not","Godsend","Share the Wealth","Rotten Egg","Survival Wisdom","Rain or Shine","Safe Stroll","Blessed Remains","Fruitful Song","Nature's Blessing","Harvest Festival","Lullaby","Double Crop","Item Echo","Final Secret","Force 3","Artery","War Response","War Revive","Headcut","Armcut","Legcut","War Heal All","Curse Circle","Nerve Circle","Chain Circle","Snare Circle","Circle Boon","Sleep Circle","Hood Circle","Chaos Circle","Poison Circle","Proficiency","Undying Soul","Ghastly March","Sunlight Damage","Night Heal","Ghastly March","Additional Skill 302"]

const text_headers = ["Max level","Skill type","Body part","Target req","Range","Icon","Target Type","Target Team","Where Use","Buff/Debuff","B/D type","B/D element","DMG element","Cure or Inflict","Ailment","Skill fl"]; //I don't like this. I should rewrite it as an object probably

const error_m = ["No error. Why are you here?","Error! ID must be under 901 for enemy table.","Error! ID must be under 770 for player table.","Error! Skill name not found (make sure the checkbox is correct).","Error! Skill table size mismatched. This should never happen."]; //same with this