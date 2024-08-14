var iFileName = "BMC";
RequiredSheetVersion("13.1.7");
SourceList["BMC"] = {
	name : "Beastheart and Monstrous Companion",
	abbreviation : "BMC",
	group : "MCDM Productions",
	date : "2023/07/18",
};

ClassList.beastheart = {
	
	regExpSearch : /beastheart/i,
	name : "Beastheart",
	source : ["BMC", 25],
	primaryAbility : ["Wisdom"],
	abilitySave : 5,
	prereqs : ["Strength/Dexterity 13", "Wisdom 13"],
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Str", "Wis"],
	skillstxt : {
		primary : "Choose three from Animal Handling, Athletics, Intimidation, Nature, Perception, Stealth, and Survival",
	},
	armorProfs : {
		primary : [true, true, false, true],
	},
	weaponProfs : {
		primary : [true, false, ["battleaxe", "greataxe", "longbow", "net", "scimitar", "shortsword"]],
	},
	equipment : "Beastheart starting equipment:" +
		"\n \u2022 Hide armor -or- Leather Armor;\n \u2022 A longbow -and- 20 arrows;" +
		"\n \u2022 A martial weapon -and- A shield -or- Two martial weapons;" +
		"\n \u2022 Two handaxes -or- A simple weapon;" +
		"\n \u2022 A dungeoneer's pack -or- An explorer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Companion Bond", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {
		"ferocity" : {
			name : "Ferocity",
			source : ["BMC", 6],
			minlevel : 1,
			description : desc([
				"At the start of each turn while not incapacitated your Companion gains 1d4 + (1 times the number of creatures within 5 feet of it(multiple creatures that share the same stat block such as a swarm of rats count as one creature.)) ferocity points, these points are used to power your companion's abilities as well as your abilities. There is no Maximum to the amount of Ferocity your companion can have. When Combat ends and your companion isn't dying your companion regains a number of hit points equal to its current ferocity and their ferocity drops to 0.",
			]),
		},	
		"rampage" : {
			name : "Rampage",
			source : ["BMC", 6],
			minlevel : 1,
			description : desc([
				"After you roll to increase your companion's ferocity if the companion has 10 ferocity or more you may make a Wisdom (Animal Handling) check DC 5 + Companion's Ferocity, to prevent your companion from entering a rampage. If you fail the DC, or choose not to make the check your Companion enters a Ramapge.  When a companion enters a rampage they immediately move up to their speed towards the nearest creature and make a signature attack dealing extra damage equal to half their ferocity rounded up, if there is a ally and enemy equidistant from your companion roll a die on odd numbers it attacks the ally, on even numbers it attacks the enemy. If your companion's movement is not enought to bring it within attacking range it uses the Dash action to get to the nearest creature. If the companion cant sense any potential targets they move as far as they can in a random direction avoiding danger. When a companion who has entered a rampage resolves their action or ends their turn, their ferocity drops to 0 and they are no longer in a rampage",
			]),
		},	
		"companion" : {
			name : "Companion",
			source : ["BMC", 27],
			minlevel : 1,
			description : desc([
				"You gain a Companion creature (Use 'Choose Feature' Button on page 2 to select Companion) If your Companion is greivously injured or dies, you may spend 1 minute and gain 1 level of Exhaustion to heal it to its maximum hit points, or Ressurect it to its maximum hit points, if there is no body it appears w/i 5 feet of you.",
			]),
			choices : ["Basilisk", "Blood Hawk", "Bulette", "Deinonychus", "Dragon Wyrmling", "Earth Elemental", "Gelatinous Cube", "Giant Spider", "Giant Toad", "Giant Weasel", "Hell Hound", "Mimic", "Owlbear", "Sporeling", "Worg"],
			"basilisk" : {
				name : "Basilisk",
				source : ["BMC", 9],
				minlevel : 1,
				description : desc([
					"You gain the company of a Basilisk Companion",
				]),
				creaturesAdd : [["Basilisk"]],
				creatureOptions : [{
				name : "Basilisk",
				source : [["BMC", 9]],
				size : 3,
				type : "Monstrocity",
				alignment : "Unaligned",
				ac : "15+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : "30 ft",
				scores : [16, 10, 15, 5, 12, 10],
				saves : ["", "", "Prof", "", "", ""],
				skills : {
					"Athletics" : 5, 
					"Survival" : 3,
				},
				senses : "Darkvision 60 ft",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Poison Spitle (2 Ferocity)",
					description : desc([
						"The basilisk makes a",
						"signature attack. On a hit, the attack deals an extra PB damage,",
						"and a creature the basilisk chooses within 5 feet of them other",
						"than the target takes PB poison damage.",
					]),
				}, {
					name : "3rd Level: Poison Gaze (5 Ferocity)",
					description : desc([
						"The basilisk chooses up",
						"to three creatures they can see within 15 feet of them. Each",
						"creature must succeed on a DC 10 plus PB Constitution saving",
						"throw or become poisoned until the start of the basilisk’s next turn.",
					]),
				}, {
					name : "5th Level: Lesser Petrifying Gaze (8 Ferocity)",
					description : desc([
						"The basilisk targets a creature they can see within 30 feet of them, which",
						"must make a DC 10 plus PB Constitution saving throw. On a",
						"failure, the creature magically begins to turn to stone and is",
						"restrained. the creature must repeat the saving throw at the",
						"end of their next turn. On a success, the efect ends. On a",
						"failure, the creature is petrifed for 1 hour or until freed by",
						"the lesser restoration spell or similar magic. (Lesser restoration",
						"normally doesn’t negate the petrifed condition, but the ",
						"companion’s Lesser Petrifying Gaze is weaker than other forms of",
						"petrifcation magic.)",
					]),
				}, {
					name : "Heavy Glare (Reaction)",
					description : desc([
						"When the basilisk’s caregiver hits a creature",
						"that can see the basilisk, the basilisk can force that creature to",
						"make a DC 10 plus PB Constitution saving throw. On a failure,",
						"the target can’t make opportunity attacks and has their speed",
						"reduced by 10 feet until the start of their next turn.",
					]),
					action : "reaction",
				}],       
				header : "Mostrocity",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"blood hawk" : {
				name : "Blood Hawk",
				source : ["BMC", 10],
				minlevel : 1,
				description : desc([
					"You gain the company of a Blood Hawk Companion",
				]),
				creaturesAdd : [["Blood Hawk"]],
				creatureOptions : [{
				name : "Blood Hawk",
				source : [["BMC", 10]],
				size : 4,
				type : "Beast",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 6,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["10 ft", "60 ft Fly"],
				scores : [8, 16, 12, 5, 14, 10],
				saves : ["", "Prof", "", "", "Prof", ""],
				skills : {
					"Perception" : 4,
				},	
				senses : ["The hawk has advantage on Wisdom (Perception) checks that rely on sight."],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Beak(Signature Attack)",
					ability : 2,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Distracting Attack (2 Ferocity)",
					description : desc([
						"The hawk makes a",
						"signature attack. On a hit, the attack deals its normal efects,",
						"and the next attack made against the target before the start of",
						"the hawk’s next turn has advantage.",
					]),
				}, {
					name : "3rd Level: Swooping Attack (5 Ferocity)",
					description : desc([
						"The hawk moves up",
						"to their speed without provoking opportunity attacks. During",
						"or at the end of this move, they can make a signature attack",
						"against one target. On a hit, the attack deals its normal efects,",
						"and the target must succeed on a DC 10 plus PB Strength saving",
						"throw or drop one item they are holding.",
					]),
				}, {
					name : "5th Level: Storm of Talons (8 Ferocity)",
					description : desc([
						"The hawk moves up",
						"to their speed without provoking opportunity attacks, then",
						"can target one creature within 5 feet of them, which must make",
						"a DC 10 plus PB Dexterity saving throw. On a failure, the target",
						"takes PBd10 slashing damage and is blinded until the end of",
						"the hawk’s next turn. On a success, the target takes half as much",
						"damage and is not blinded.",
					]),
				}, {
					name : "Swoop In (1/Long Rest) (Reaction)",
					description : desc([
						"When the hawk is within 30 feet of",
						"their caregiver and the caregiver is hit with an attack, the hawk",
						"can move up to their speed without provoking opportunity",
						"attacks. If the hawk ends this movement within 5 feet of the",
						"caregiver, the hawk is hit by the attack instead, and the attack",
						"deals half as much damage.",
					]),
					action : "reaction",
				}],
				header : "Beast",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(6 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 6 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"bulette" : {
				name : "Bulette",
				source : ["BMC", 11],
				minlevel : 1,
				description : desc([
					"You gain the company of a Bulette Companion",
				]),
				creaturesAdd : [["Bulette"]],
				creatureOptions : [{
				name : "Bulette",
				source : [["BMC", 11]],
				size : 2,
				type : "Monstrocity",
				alignment : "Unaligned",
				ac : "15+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft", "30 ft Burrow"],
				scores : [16, 10, 15, 5, 8, 8],
				saves : ["", "", "Prof", "", "", ""],
				skills : {
					"Perception" : 1,
				},	
				senses : ["Darkvision 60 ft", "Tremorsense 30 ft"],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Violent Attack (2 Ferocity)",
					description : desc([
						"The bulete makes a",
						"signature attack. On a hit, the attack deals an extra PB damage,",
						"and the bulete can move the target 5 feet in any direction.",
					]),
				}, {
					name : "3rd Level: Burrowing Trip (5 Ferocity)",
					description : desc([
						"The bulete moves up",
						"to half their burrowing speed without provoking opportunity",
						"attacks. Each creature standing on the ground that the bulette",
						"moves under must succeed on a DC 10 plus PB Dexterity saving throw or fall prone.",
					]),
				}, {
					name : "5th Level: Deadly Leap (8 Ferocity)",
					description : desc([
						"The bulete leaps up to",
						"30 feet, and if they land in a space that contains one or more",
						"creatures, each of those creatures must make a DC 10 plus",
						"PB Strength saving throw. On a failure, a creature takes PBd6",
						"bludgeoning damage and is knocked prone. On a success, the",
						"creature takes half as much damage, isn’t knocked prone, and",
						"is pushed 5 feet out of the bulete’s space into an unoccupied",
						"space of the creature’s choice. If no unoccupied space",
						"is available, the creature instead is knocked prone in",
						"the bulette’s space.",
					]),
				}],  
				traits : [{
					name : "Plated Protection",
					description : desc([
						"The bulette's caregiver can ride on he bulette while the bulette burrows",
					]),
				}],	
				header : "Mostrocity",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"deinonychus" : {
				name : "Deinonychus",
				source : ["BMC", 12],
				minlevel : 1,
				description : desc([
					"You gain the company of a Deionychus Companion",
				]),
				creaturesAdd : [["Deinonychus"]],
				creatureOptions : [{
				name : "Deinonychus",
				source : [["BMC", 12]],
				size : 3,
				type : "Beast",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : "40 ft",
				scores : [15, 16, 14, 5, 12, 8],
				saves : ["Prof", "Prof", "", "", "", ""],
				skills : {
					"Perception" : 3, 
					"Stealth" : 5,
				},	
				senses : "",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 2,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Overwhelming Attack (2 Ferocity)",
					description : desc([
						"The deinonychus makes a signature attack. On a hit, the attack deals an",
						"extra PB damage, and the target can’t take reactions until the",
						"start of the deinonychus’s next turn.",
					]),
				}, {
					name : "3rd Level: Clever Girl (5 Ferocity)",
					description : desc([
						"The deinonychus can take",
						"the Hide action then make a signature attack, or can make a",
						"signature attack then take the Hide action. If the deinonychus",
						"hits with the signature attack, they also knock the target prone.",
						"The deinonychus can move between their Hide action and the",
						"attack, or vice versa, even if such movement would normally",
						"negate an atempt to hide.",
					]),
				}, {
					name : "5th Level: Keep them Down (8 Ferocity)",
					description : desc([
						"The deinonychus",
						"leaps at another creature within 5 feet of them, which must",
						"make a DC 10 plus PB Dexterity saving throw. On a failure,",
						"the target takes PBd12 slashing damage and is knocked prone",
						"and grappled (escape DC 10 plus PB). On a success, the target",
						"takes half as much damage and is not knocked prone or grappled.",
						"A creature knocked prone by this feature can’t stand up",
						"until they are no longer grappled. If the deinonychus attacks or",
						"uses Keep them Down on another target, the grapple ends.",
					]),
				}],    
				header : "Beast",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"dragon wyrmling" : {
				name : "Dragon Wyrmling",
				source : ["BMC", 13],
				minlevel : 1,
				description : desc([
					"You gain the company of a Dragon Wyrmling Companion",
				]),
				creaturesAdd : [["Dragon Wyrmling"]],
				creatureOptions : [{
				name : "Dragon Wyrmling",
				source : [["BMC", 13]],
				size : 3,
				type : "Dragon",
				alignment : "Unaligned",
				ac : "15+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft", "30 ft Fly"],
				scores : [16, 10, 15, 5, 10, 12],
				saves : ["", "", "", "", "Prof", ""],
				skills : {
					"Perception" : 2,
				},	
				senses : "",
				damage_immunities : "see the Draconic Lineage Trait",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Spit Breath (2 Ferocity)",
					description : desc([
						"the wyrmling makes a",
						"signature attack as a ranged weapon attack, with a normal",
						"range of 30 feet and a long range of 60 feet. On a hit, the",
						"attack deals an extra PB damage, and all the damage dealt by",
						"the attack is of the type associated with the wyrmling’s lineage",
						"instead of piercing damage.",
					]),
				}, {
					name : "3rd Level: Frightul Presence (5 Ferocity)",
					description : desc([
						"Each creature of",
						"the wyrmling’s choice that is within 10 feet of the wyrmling",
						"and aware of them must succeed on a DC 10 plus PB Wisdom",
						"saving throw or become frightened of the wyrmling for 1",
						"minute. A creature can repeat the saving throw at the end of",
						"each of their turns, ending the efect on themself on a success.",
						"If a creature’s saving throw is successful or the efect ends for",
						"them, the creature is immune to the wyrmling’s Frightul Presence ",
						"for the next 24 hours.",
					]),
				}, {
					name : "5th Level: Breath Weapon (8 Ferocity).",
					description : desc([
						"The wyrmling exhales",
						"elemental energy that fills an area. Creatures in that area must",
						"make a DC 10 plus PB saving throw, taking PBd6 damage on",
						"a failed save, or half as much damage on a successful one. The",
						"damage type, area, and type of saving throw are determined",
						"by the wyrmling's Draconic Liniage trait.",
					]),
				}],
				traits : [{
					name : "Draconic Lineage",
					description : desc([
						"The wyrmling has a lineage that determines",
						"a damage type to which they have immunity and which applies",
						"to the damage dealt by their Spit Breath and Breath Weapon",
						"actions. See the Draconic Lineages table for more information.",
						"lineage		Damage type	Area",
						"Black/Copper	Acid		5x30 ft. line (Dex save)",
						"Silver/White 	Cold		15 ft. cone (Con save)",
						"Brass			Fire		5x30 ft. line (Dex save)",
						"Gold/Red 		Fire		15 ft. cone (Con save)",
						"Blue/Bronze	Lightning	5x30 ft. line (Dex save)",
						"Green 			Poison		15 ft. cone (Con save)",
					]),	
				}, {
					name : "Shared Resistance",
					description : desc([
						"The wyrmling’s caregiver has resistance to",
						"the damage type associated with their Draconic Lineage, and",
						"takes no damage from the wyrmling’s Breath Weapon action.",
					]),
				}],	
				header : "Dragon",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"earth elemental" : {
				name : "Earth Elemental",
				source : ["BMC", 14],
				minlevel : 1,
				description : desc([
					"You gain the company of an Earth Elemental Companion",
				]),
				creaturesAdd : [["Earth Elemental"]],
				creatureOptions : [{
				name : "Earth Elemental",
				source : [["BMC", 14]],
				size : 2,
				type : "Elemental",
				alignment : "Unaligned",
				ac : "15+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft", "30 ft Burrow"],
				scores : [16, 8, 15, 5, 10, 8],
				saves : ["", "", "Prof", "", "", ""],
				skills : {
					"Athletics" : 5,
				},	
				senses : "",
				damage_immunites : "Poison",
				condition_Immunities : ["Petrified", "Poisoned"],
				senses : ["Darkvision 60 ft", "Tremmor Sense 30 ft"],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Slam(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Bludeoning"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Stretch Attack (2 Ferocity).",
					description : desc([
						"The elemental makes",
						"a signature attack with a reach of 10 feet. On a hit, the attack",
						"deals an extra PB damage, and the elemental can pull the target 5 feet toward them.",
					]),
				}, {
					name : "3rd Level: Earthshaker (5 Ferocity).",
					description : desc([
						"Ferocity). The elemental strikes the",
						"ground, and each creature within 10 feet of them must succeed",
						"on a DC 10 plus PB Dexterity saving throw or be knocked",
						"prone. The elemental’s caregiver automatically succeeds on",
						"this saving throw.",
					]),
				}, {
					name : "5th Level: Transmute Ground (8 Ferocity)",
					description : desc([
						"The elemental",
						"picks a 10-foot-square area of ground they can see within",
						"30 feet of them. Each creature standing in the area must succeed",
						"on a DC 10 plus PB Strength saving throw or partially",
						"sink into the ground and become restrained. A creature can",
						"use their action to make a DC 10 plus PB Strength (Athletics)",
						"check, freeing themself or another creature within their",
						"reach on a success and ending the restrained condition for the",
						"freed creature.",
					]),
				}, {
					name : "Toss Me (Bonus Action)",
					description : desc([
						"While the elemental is within 5 feet of their caregiver,",
						"they can hurl the caregiver 5 times PB feet in any direction,",
						"including up. If the caregiver would normally take damage",
						"from a fall afer being thrown, they can negate the damage",
						"with a successful DC 15 Dexterity saving throw.",
					]),
				}], 
				trait : [{
					name : "Earth Glide",
					description : desc([
						"The elemental can burrow through nonmagical,",
						"unworked earth and stone. While doing so, the elemental",
						"doesn’t disturb the material they move through. While they",
						"use Earth Glide, the elemental can’t be used as a mount.",
					]),
				}],	
				header : "Elemental",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"gelatinous cube" : {
				name : "Gelatinous Cube",
				source : ["BMC", 15],
				minlevel : 1,
				description : desc([
					"You gain the company of a Gelatinous Cube Companion",
				]),
				creaturesAdd : [["Gelatinous Cube"]],
				creatureOptions : [{
				name : "Gelatinous Cube",
				source : [["BMC", 15]],
				size : 2,
				type : "Ooze",
				alignment : "Unaligned",
				ac : "11+Prof",
				hp : 8,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft"],
				scores : [16, 8, 16, 5, 10, 8],
				saves : ["", "", "Prof", "", "", ""],
				skills : {
					"Stealth" : 1,
				},	
				senses : "",
				damage_immunites : "Acid",
				condition_Immunities : ["Blinded", "Deafened", "Prone"],
				senses : ["Blindsight 60 ft (Blind Beyond this Radius)"],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Pseudopod(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Acid"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Burning Acid (2 Ferocity)",
					description : desc([
						"The gelatinous cube",
						"makes a signature attack with a reach of 10 feet. On a hit, the",
						"attack deals an extra PB damage, and a target that takes damage",
						"from the attack can’t regain hit points until the start of your",
						"next turn.",
					]),
				}, {
					name : "3rd Level: Slime Shower (5 Ferocity)",
					description : desc([
						"The cube spins rapidly,",
						"raining a shower of sticky, acidic slime around them. Each",
						"creature within 5 feet of the cube must succeed on a DC 10",
						"plus PB Dexterity saving throw or take 1d6 acid damage and",
						"have their speed reduced to 0 until the start of the cube’s",
						"next turn. The cube’s caregiver automatically succeeds on this",
						"saving throw.",
					]),
				}, {
					name : "5th Level: Engulf (8 Ferocity)",
					description : desc([
						"The cube atempts to pull a",
						"Large or smaller creature within 5 feet of them into their body.",
						"That creature must make a DC 10 plus PB Dexterity saving",
						"throw. On a failure, the target enters the cube’s space without",
						"provoking opportunity attacks, takes PBd6 acid damage, and is",
						"engulfed. On a success, a creature takes half as much damage,",
						"doesn’t move, and isn’t engulfed.",
						"An engulfed creature can’t breathe, is restrained, and takes",
						"PBd6 acid damage at the start of each of the cube’s turns.",
						"When the cube moves, the engulfed creature moves with",
						"them. An engulfed creature can try to escape by taking an",
						"action to make a DC 10 plus PB Strength check. On a success,",
						"the creature escapes and enters a space of their choice within",
						"5 feet of the cube.",
						"The cube can engulf one Large creature or up to four",
						"Medium or smaller creatures at a time.",
					]),
				}], 
				trait : [{
					name : "Flowing Form",
					description : desc([
						"The cube’s caregiver can enter a space occupied",
						"by the cube without becoming engulfed. While in the",
						"same space as the cube, the caregiver can attack and interact",
						"with creatures engulfed by the cube without harming or taking",
						"damage from the cube.",
					]),
				}, {
					name : "Transparent",
					description : desc([
						"Even when the cube is in plain sight, it takes a",
						"successful DC 10 plus PB Wisdom (Perception) check to spot a",
						"cube that has neither moved nor atacked. A creature that tries",
						"to enter the cube’s space while unaware of the cube takes 3",
						"(1d6) acid damage and can’t enter the space.",
					]),
				}],	
				header : "Ooze",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(8 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 8 as a base\n + "  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"giant spider" : {
				name : "Giant Spider",
				source : ["BMC", 16],
				minlevel : 1,
				description : desc([
					"You gain the company of a Giant Spider Companion",
				]),
				creaturesAdd : [["Giant Spider"]],
				creatureOptions : [{
				name : "Giant Spider",
				source : [["BMC", 16]],
				size : 2,
				type : "Beast",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 6,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft", "30 ft Climb"],
				scores : [15, 16, 12, 5, 10, 8],
				saves : ["Prof", "Prof", "", "", "", ""],
				skills : {
					"Stealth" : 5,
				},	
				senses : ["Darkvision 60 ft "],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 2,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Destabilizing Attack (2 Ferocity)",
					description : desc([
						"The spider makes",
						"a signature attack. On a hit, the attack deals its normal efects,",
						"and the target has disadvantage on the next attack roll they",
						"make before the start of the spider’s next turn.",
					]),
				}, {
					name : "3rd Level: Web (5 Ferocity)",
					description : desc([
						"The spider shoots strands of",
						"sticky webs at one creature they can see within 60 feet of",
						"them. The target must succeed on a DC 10 plus PB Dexterity",
						"saving throw or be restrained by webbing. As an action, the",
						"restrained target can make a DC 10 plus PB Strength check,",
						"bursting the webbing and ending the restrained condition on",
						"themself on a success.",
					]),
				}, {
					name : "5th Level: Engulf (8 Ferocity)",
					description : desc([
						"The spider makes signature",
						"attacks against PB creatures of their choice within 5 feet",
						"of them. On a hit, the target is poisoned until the end of their next turn.",
					]),
				}, {
					name : "Sticky Stuff (Bonus Action) (1/Long Rest)",
					description : desc([
						"While the spider’s caregiver is",
						"within 5 feet of it, the spider can coat the botom of the caregiver’s",
						"feet or footwear in a selective adhesive. Tis allows the",
						"caregiver to move up, down, and across vertical surfaces and",
						"upside down along ceilings, while leaving their hands free and",
						"giving the caregiver a climbing speed equal to their walking",
						"speed. The adhesive wears of afer 10 minutes.",
					]),
				}], 
				trait : [{
					name : "Spider Climb",
					description : desc([
						"The spider can climb difcult surfaces,",
						"including upside down on ceilings, without needing to make an",
						"ability check.",
					]),
				}, {
					name : "Web Sense",
					description : desc([
						"While in contact with a web, the spider knows",
						"the exact location of any other creature in contact with",
						"the same web.",
					]),
				}, {
					name : "Web Walker",
					description : desc([
						"The spider ignores movement restrictions caused by webbing.",
					]),
				}],	
				header : "Beast",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(6 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 6 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"giant toad" : {
				name : "Giant Toad",
				source : ["BMC", 17],
				minlevel : 1,
				description : desc([
					"You gain the company of a Giant Toad Companion",
				]),
				creaturesAdd : [["Giant Toad"]],
				creatureOptions : [{
				name : "Giant Toad",
				source : [["BMC", 17]],
				size : 2,
				type : "Beast",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft", "30 ft Swim"],
				scores : [16, 12, 15, 5, 10, 10],
				saves : ["Prof", "", "Prof", "", "", ""],
				skills : {
					"Athletics" : 5, 
					"Perception" : 2,
				},	
				senses : ["Darkvision 30 ft "],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Bludgeoning"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Stretch Attack (2 Ferocity)",
					description : desc([
						"The toad makes a signature",
						"attack with a reach of 10 feet by using their tongue. On a",
						"hit, the attack deals an extra PB damage and the toad can pull",
						"the target 5 feet toward them.",
					]),
				}, {
					name : "3rd Level: Fast Food (5 Ferocity)",
					description : desc([
						"The toad makes a signature",
						"attack. On a hit, the attack deals its normal efects, and the",
						"toad can jump up to 20 feet in any direction without provoking",
						"opportunity attacks. If the target of the attack is Large or",
						"smaller, the toad brings the target with them.",
					]),
				}, {
					name : "5th Level: Swallow (8 Ferocity)",
					description : desc([
						"The toad atempts to swallow",
						"a Medium or smaller creature within 5 feet of them, which",
						"must make a DC 10 plus PB Dexterity saving throw. On a failure,",
						"the target takes PBd6 bludgeoning damage and is swallowed.",
						"On a success, the target takes half as much damage and",
						"isn’t swallowed.",
						"A swallowed target is blinded and restrained, they have total",
						"cover against attacks and other efects outside the toad, and",
						"they take PBd6 acid damage at the start of each of the toad’s",
						"turns. The toad can have only one target swallowed at a time.",
						"Whenever the toad takes damage, they must succeed on a",
						"Constitution saving throw or regurgitate the swallowed creature,",
						"which falls prone in a space within 5 feet of the toad.",
						"The DC for this saving throw equals 10 or half the damage the",
						"toad takes, whichever is higher. If the toad is incapacitated or",
						"dies, a swallowed creature is no longer restrained by the toad",
						"and can escape from the corpse using 5 feet of movement,",
						"exiting prone.",
					]),
				}, {
					name : "Psychedelic Skin (Bonus Action) (1/Long Rest)",
					description : desc([
						"While the toad’s caregiver",
						"is within 5 feet of the toad, the toad can use a bonus action",
						"to coat a melee weapon held by the caregiver with poison",
						"secreted from the toad’s skin. The poison lasts for 1 hour or",
						"until the weapon deals damage as part of an attack. When a",
						"creature takes damage from the weapon, they must succeed",
						"on a DC 10 + PB Constitution saving throw or become poisoned",
						"for 1 minute. The creature can repeat the saving throw",
						"at the end of each of their turns, ending the efect on themself",
						"on a success.",
					]),
				}], 
				trait : [{
					name : "Amphibious",
					description : desc([
						"The toad can breathe air and water.",
					]),
				}, {
					name : "Standing Leap",
					description : desc([
						"The toad’s long jump is up to 20 feet and",
						"their high jump is up to 10 feet, with or without a running start.",
					]),
				}],	
				header : "Beast",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"giant weasel" : {
				name : "Giant Weasel",
				source : ["BMC", 18],
				minlevel : 1,
				description : desc([
					"You gain the company of a Giant Weasel Companion",
				]),
				creaturesAdd : [["Giant Weasel"]],
				creatureOptions : [{
				name : "Giant Weasel",
				source : [["BMC", 18]],
				size : 2,
				type : "Beast",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["40 ft"],
				scores : [12, 16, 14, 5, 12, 10],
				saves : ["Prof", "Prof", "", "", "", ""],
				skills : {
					"Acrobatics" : 5, 
					"Perception" : 3, 
					"Stealth" : 5,
				},	
				senses : ["Darkvision 60 ft ", "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 2,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Overwhelming Attack (2 Ferocity)",
					description : desc([
						"The weasel",
						"makes a signature attack. On a hit, the attack deals an extra PB",
						"damage, and the target can’t take reactions until the start of",
						"the weasel’s next turn.",
					]),
				}, {
					name : "3rd Level: Clamp Down (5 Ferocity)",
					description : desc([
						"The weasel makes a",
						"signature attack. On a hit, the attack deals its normal efects,",
						"and the target is grappled (escape DC 10 plus PB). While",
						"grappled, the target is restrained and the weasel can’t bite",
						"another target.",
					]),
				}, {
					name : "5th Level: Bite Frenzy (8 Ferocity)",
					description : desc([
						"The weasel makes signature",
						"attacks against PB creatures of their choice within 5 feet of",
						"the weasel. On a hit, the target of the attack is knocked prone.",
					]),
				}], 
				trait : [{
					name : "Treasure Sense",
					description : desc([
						"The weasel can pinpoint, by scent, the",
						"location of precious metals and stones, such as coins and gems,",
						"within 10 feet of them.",
					]),
				}],	
				header : "Beast",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"hell hound" : {
				name : "Hell Hound",
				source : ["BMC", 19],
				minlevel : 1,
				description : desc([
					"You gain the company of a Hell Hound Companion",
				]),
				creaturesAdd : [["Hell Hound"]],
				creatureOptions : [{
				name : "Hell Hound",
				source : [["BMC", 19]],
				size : 3,
				type : "Fiend",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["50 ft"],
				scores : [16, 12, 14, 6, 12, 8],
				saves : ["", "", "Prof", "", "", ""],
				skills : {
					"Perception" : 3,
				},	
				senses : ["Darkvision 60 ft ", "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Lava Spitle (2 Ferocity)",
					description : desc([
						"The hound makes a signature",
						"attack. On a hit, the attack deals an extra PB damage, and",
						"a creature the hound chooses within 5 feet of them other than",
						"the target takes PB fire damage.",
					]),
				}, {
					name : "3rd Level: Brutal Charge (5 Ferocity)",
					description : desc([
						"The hound can move",
						"up to their speed without provoking opportunity attacks.",
						"During or at the end of this move, they can make a signature",
						"attack against one target.",
					]),
				}, {
					name : "5th Level: Fire Breath (8 Ferocity)",
					description : desc([
						"The hound exhales fire",
						"in a 15-foot cone. Each creature in that area must make a",
						"DC 10 plus PB Dexterity saving throw, taking PBd6",
						"fire damage on a failed save, or half as much",
						"damage on a successful one.",
					]),
				}], 
				trait : [{
					name : "Consult Hell (1/Long Rest)",
					description : desc([
						"The hound’s caregiver can talk to",
						"the hound about a specifc course of action that the caregiver",
						"plans to take within the next 30 minutes, tapping into divinatory",
						"power through the hound’s connection to the infernal",
						"realm. Afer 1 minute, the hound then gives a response based",
						"on its own objective prophetic sense of the outcome: one",
						"bark for good results, two barks for bad results, three barks for",
						"both good and bad results, and no barks for results that aren’t",
						"especially good or bad.",
					]),
				}],	
				header : "Fiend",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"mimic" : {
				name : "Mimic",
				source : ["BMC", 20],
				minlevel : 1,
				description : desc([
					"You gain the company of a Mimic Companion",
				]),
				creaturesAdd : [["Mimic"]],
				creatureOptions : [{
				name : "Mimic",
				source : [["BMC", 20]],
				size : 3,
				type : "Monstrocity",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["30 ft"],
				scores : [16, 12, 15, 5, 12, 8],
				saves : ["", "Prof", "", "", "", ""],
				damage_immunities : "Acid",
				condition_immunities : "Prone",
				skills : {
					"Stealth" : 3,
				},	
				senses : ["Darkvision 60 ft "],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Distracting Attack (2 Ferocity)",
					description : desc([
						"The mimic makes",
						"a signature attack. On a hit, the attack deals its normal efects,",
						"and the next attack made against the target before the start of",
						"the mimic’s next turn has advantage.",
					]),
				}, {
					name : "3rd Level: Adhesive Pseudopods (5 Ferocity)",
					description : desc([
						"The mimic",
						"atempts to touch each creature of their choice within 5 feet of",
						"them. Each target must succeed on a DC 10 plus PB Dexterity",
						"saving throw or be grappled (escape DC 10 plus PB).",
					]),
				}, {
					name : "5th Level: I’m You (8 Ferocity)",
					description : desc([
						"The mimic uses their",
						"Shapechanger trait to polymorph into one Large or smaller",
						"creature they can see within 5 feet of them, with this form",
						"lasting until the start of the mimic’s next turn. Other than size,",
						"the mimic’s statistics do not change. Afer transforming, the",
						"mimic can make a signature attack against the creature whose",
						"form they have taken, and that creature must also make a DC",
						"10 plus PB Wisdom saving throw. On a failure, the creature",
						"has disadvantage on attack rolls and saving throws, and attacks",
						"against the creature have advantage, until the start of the mimic’s next turn.",
					]),
				}, {
					name : "Wearable Companion (Bonus Action)",
					description : desc([
						"While the mimic is within 5 feet of",
						"their caregiver, the mimic can cover the caregiver’s body and",
						"take on the appearance of clothing. While wearing the mimic,",
						"the caregiver can change the appearance of their clothing at",
						"will (no action required) as long as they are not incapacitated,",
						"and has advantage on Dexterity (Stealth) checks. Any attack",
						"that hits the caregiver also hits the mimic, and vice versa, with",
						"both taking the full damage and efect of the attack.",
						"While worn in this way, the mimic can’t move or take actions",
						"except to revert to their most recent form (a bonus action),",
						"which ends the state of being worn by their caregiver. If the",
						"mimic enters a rampage, the state of being worn ends immediately.",
						"When the mimic is no longer worn by the caregiver, the",
						"mimic enters the nearest unoccupied space of their choice.",
					])
				}], 
				trait : [{
					name : "Shapechanger",
					description : desc([
						"The mimic can use their action to polymorph",
						"into an object or back into their true, amorphous form. Their",
						"statistics are the same in each form. Any equipment they are",
						"wearing or carrying isn’t transformed. The mimic reverts to",
						"their true form if they die.",
					]),
				}, {
					name : "False Appearance (Object Form Only)",
					description : desc([
						"While the mimic",
						"remains motionless, they are indistinguishable from an ordinary object.",
					]),
				}],	
				header : "Monstrocity",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"owlbear" : {
				name : "Owlbear",
				source : ["BMC", 21],
				minlevel : 1,
				description : desc([
					"You gain the company of a Owlbear Companion",
				]),
				creaturesAdd : [["Owlbear"]],
				creatureOptions : [{
				name : "Owlbear",
				source : [["BMC", 21]],
				size : 2,
				type : "Monstrocity",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["40 ft"],
				scores : [16, 12, 15, 5, 12, 10],
				saves : ["Prof", "", "Prof", "", "", ""],
				skills : {
					"Athletics" : 5, 
					"Perception" : 3,
				},	
				senses : ["Darkvision 60 ft ", "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Claw(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Slashing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Violent Attack (2 Ferocity)",
					description : desc([
						"The owlbear makes a",
						"signature attack. On a hit, the attack deals an extra PB damage,",
						"and the owlbear can move the target 5 feet in any direction.",
					]),
				}, {
					name : "3rd Level: Owlie Oop (5 Ferocity)",
					description : desc([
						"The owlbear leaps up to",
						"20 feet without provoking opportunity attacks. When they",
						"land, each creature within 5 feet of them must succeed on a",
						"DC 10 plus PB Strength saving throw or be knocked prone.",
					]),
				}, {
					name : "5th Level: Bear Hug (8 Ferocity)",
					description : desc([
						"The owlbear atempts to",
						"grab and crush a creature within 5 feet of them that they can",
						"see, which must make a DC 10 plus PB Dexterity saving throw.",
						"On a failure, the target takes PBd10 bludgeoning damage and",
						"is grappled (escape DC 10 plus PB). On a success, the target",
						"takes half as much damage and is not grappled. Until this grapple",
						"ends, the target is also restrained. The grapple ends if the",
						"owlbear uses Bear Hug on another target.",
					]),
				}, {
					name : "Give a Hoot (Bonus Action) (1/Long Rest)",
					description : desc([
						"The owlbear lets loose a unique",
						"battle cry. If the owlbear’s caregiver can hear the cry, the caregiver",
						"gains 5 times PB temporary hit points.",
					])
				}],
				header : "Monstrocity",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"sporeling" : {
				name : "Sporeling",
				source : ["BMC", 22],
				minlevel : 1,
				description : desc([
					"You gain the company of a Sporeling Companion",
				]),
				creaturesAdd : [["Sporeling"]],
				creatureOptions : [{
				name : "Sporeling",
				source : [["BMC", 22]],
				size : 2,
				type : "Plant",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["40 ft"],
				scores : [8, 16, 15, 5, 12, 12],
				saves : ["", "", "Prof", "", "", ""],
				damage_immunities : ["Acid", "Poison"],
				condition_immunites : "Poisoned",
				skills : {
					"Perception" : 3,
				},	
				senses : ["Darkvision 60 ft "],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Corrupting Cough(Signature Attack)",
					ability : 2,
					damage : [1, 6, "Acid"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Destabilizing Attack (2 Ferocity)",
					description : desc([
						"The sporeling",
						"makes a signature attack. On a hit, the attack deals its normal",
						"efects, and the target has disadvantage on the next attack roll",
						"they make before the start of the sporeling’s next turn.",
					]),
				}, {
					name : "3rd Level: Spore Burst (5 Ferocity)",
					description : desc([
						"Each creature of the",
						"sporeling’s choice within 5 feet of them must succeed on a",
						"DC 10 plus PB Constitution saving throw or become poisoned",
						"until the start of the sporeling’s next turn.",
					]),
				}, {
					name : "5th Level: Hallucinogenic Spores (8 Ferocity)",
					description : desc([
						"Each enemy",
						"within 10 feet of the sporeling must make a DC 10 plus PB",
						"Wisdom saving throw. On a failure, the sporeling chooses",
						"whether the target creature uses their reaction to make a",
						"melee attack against another creature of the sporeling’s choice",
						"within the target creature’s reach, or whether the target creature falls prone.",
					]),
				}, {
					name : "Invigorating Spores (Bonus Action) (1/Long Rest)",
					description : desc([
						"While the sporeling’s",
						"caregiver is within 30 feet of them, the sporeling can use a",
						"bonus action to give the caregiver advantage on saving throws",
						"for 1 minute.",
					])
				}], 
				trait : [{
					name : "False Appearance",
					description : desc([
						"While the sporeling remains motionless, they are indistinguishable from an ordinary fungus.",
					]),
				}],	
				header : "Plant",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
			"worg" : {
				name : "Worg",
				source : ["BMC", 23],
				minlevel : 1,
				description : desc([
					"You gain the company of a Worg Companion",
				]),
				creaturesAdd : [["Worg"]],
				creatureOptions : [{
				name : "Worg",
				source : [["BMC", 23]],
				size : 2,
				type : "Monstrocity",
				alignment : "Unaligned",
				ac : "13+Prof",
				hp : 7,
				hd : [2, 8],
				hdLinked : ["beastheart"],
				speed : ["50 ft"],
				scores : [16, 15, 14, 7, 12, 10],
				saves : ["Prof", "Prof", "", "", "", ""],
				skills : {
					"Perception" : 3,
				},	
				senses : ["Darkvision 60 ft "],
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite(Signature Attack)",
					ability : 1,
					damage : [1, 6, "Piercing"],
					range : "Melee, 5 ft",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
				}],
				features : [{
					name : "1st Level: Overwhelming Atack (2 Ferocity)",
					description : desc([
						"Te worg makes",
						"a signature atack. On a hit, the atack deals an extra PB",
						"damage, and the target can’t take reactions until the start of the",
						"worg’s next turn.",
					]),
				}, {
					name : "3rd Level: Brutal Charge (5 Ferocity)",
					description : desc([
						"Te worg moves up",
						"to their speed without provoking opportunity atacks. During",
						"or at the end of this move, they can make a signature atack",
						"against one target.",
					]),
				}, {
					name : "5th Level: Bite Frenzy (8 Ferocity)",
					description : desc([
						"Te worg makes bite",
						"atacks against PB creatures of their choice within 5 feet of",
						"them. On a hit, a target is knocked prone.",
					]),
				}], 
				trait : [{
					name : "Move as One",
					description : desc([
						"While the worg’s caregiver is mounted on the",
						"worg, opportunity atacks against the worg or their caregiver",
						"are made with disadvantage. Te worg’s caregiver can mount",
						"or dismount the worg by spending 5 feet of movement.",
					]),
				}],	
				header : "Monstrocity",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.beastheart) return;
							var wisMod = Number(What('Wis Mod'));
							var beaLvl = classes.known.beastheart.level;
							HDobj.alt.push(7 + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl + beaLvl);
							HDobj.altStr.push(" = 7 as a base\n + " + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level"  + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level" + beaLvl + " from your beastheart level");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
				}],
			},
		},	
		"natural language" : {
			name : "Natural Language",
			source : ["BMC", 27],
			minlevel : 1,
			description : desc([
				"You can communicate simple thoughts or questions with your companion as well as other beasts and monstrocities. While speaking in this way you can make Wisdom (Animal Handling) checks in place of Charisma checks to influence these creatures.",
			]),
		},
		"primal exploits" : {
			name : "Primal Exploits",
			source : ["BMC", 27],
			minlevel : 2,
			description : desc([
				"at 2nd level you gain 3 primal exploits (Use 'Choose Feature' Button on page 2 to select your exploits), you gain an additional 2 exploits at 10th level and again at 17th level. When you gain a level in this class you can swap one Exploit that you already have selected with another as long as you meet the level requirements. In order to use your exploits your companion must be within 60 ft. and must have ferocity at least equal to the exploit's cost, you can not use an exploit while your companion has entered a rampage. Some exploits allow a companion to make a signature attack, this attack can't be modified with additional exploits or used as part of a ferocity action.",
			]),
			extraname : "Primal Exploits",
			extrachoices : ["Aid Us, Friend", "Bring Them Down", "Drag Them", "Feral Reflexes", "Hurricane Blow", "No Escape", "Primal Pounce", "Quick Hide", "Thrash", "Crushing Charge", "Expanding Fury", "Furious Vengeance", "Marked Prey", "Primal Shout", "Wrath of the Pack", "Blood Sport", "Break the Earth", "Bury the Dead", "Imbue Projectile", "Rend", "Spirit Form"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 10 ? 3 : n > 17 ? 5 : 7;
			}),	
			"aid us, friend" : {
				name : "Aid Us, Friend",
				source : ["BMC", 28],
				description : "\n   " + "(3 Ferocity) You can activate this exploit whenever you take the Attack action Before or after you attack, your companion can take the Help action as a bonus action",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},	
			"bring them down" : {
				name : "Bring Them Down",
				source : ["BMC", 28],
				description : "\n   " + "(4 Ferocity) When your companion hits a creature with their signature attack, you can use your reaction to command the companion to yank the target down The target must succeed on a Strength saving throw or fall prone",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},	
			"drag them" : {
				name : "Drag Them",
				source : ["BMC", 28],
				description : "\n   " + "(4 Ferocity) When your companion hits a Large or smaller creature with their signature attack and both the companion and the target are standing on the ground, you can use your reaction to command your companion to move the target The target must make a Strength saving throw On a failure, the companion moves up to half their walking speed in any direction you choose and pulls the target with it",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"feral reflexes" : {
				name : "Feral Reflexes",
				source : ["BMC", 28],
				description : "\n   " + "(2 Ferocity) When you or your companion is hit by an attack, you can use your reaction to increase the target’s AC by 2 against the triggering attack",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"hurricane blow" : {
				name : "Hurricane Blow",
				source : ["BMC", 28],
				description : "\n   " + "(3 Ferocity) You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, the attack deals its normal efects, and you can push the target up to 10 feet away from you",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"no escape" : {
				name : "No Escape",
				source : ["BMC", 28],
				description : "\n   " + "(1+ Ferocity) At the start of your turn when your companion gains ferocity and doesn’t enter a rampage, you can spend up to your Wisdom modifer in ferocity (minimum 1; no action required) Until the start of your next turn, your speed or your companion’s speed (your choice) increases by 5 feet × the ferocity spent",
				action : [""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"primal pounce" : {
				name : "Primal Pounce",
				source : ["BMC", 28],
				description : "\n   " + "(3 Ferocity) When your companion hits a creature with their signature attack, you can use your reaction to command the companion to grapple the target The target must make a Dexterity saving throw On a failure, the companion grabs the target and the target is grappled (escape DC equal to your exploit save DC) The grapple also ends if your companion attacks a creature other than the target",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"quick hide" : {
				name : "Quick Hide",
				source : ["BMC", 28],
				description : "\n   " + "(2 Ferocity) You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, your companion can take the Hide action as a reaction if they are able to hide",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"thrash" : {
				name : "Thrash",
				source : ["BMC", 28],
				description : "\n   " + "(4 Ferocity) When your companion hits a Large or smaller creature with a melee signature attack, you can use your reaction to command the companion to thrash the target from side to side, forcing them to make a Wisdom saving throw On a failure, the target has disadvantage on attack rolls, and attack rolls against the target have advantage, until the start of your next turn",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"crushing charge" : {
				name : "Crushing Charge",
				source : ["BMC", 29],
				description : "\n   " + "(8 Ferocity) As an action, you move up to your speed in a straight line without provoking opportunity attacks You can move through other creatures’ spaces, but must end your move in an unoccupied space Each creature in a space you move through, except for your companion, must make a Strength saving throw On a failure, a creature takes 4d6 bludgeoning damage and is knocked prone On a success, the creature takes half as much damage and isn’t knocked prone When you reach 17th level, the damage increases to 5d6",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"expanding fury" : {
				name : "Expanding Fury",
				source : ["BMC", 29],
				description : "\n   " + "(6 Ferocity) When your companion uses a ferocity action that afects creatures within a specifc distance of the companion, you can use your reaction to expand that distance by 10 feet",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"furious vengeance" : {
				name : "Furious Vengeance",
				source : ["BMC", 29],
				description : "\n   " + "(5 Ferocity) When a creature hits you or your companion with a melee attack, you can use your reaction to deal 4d6 psychic damage to the attacker When you reach 17th level, the damage increases to 5d6",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"marked prey" : {
				name : "Marked Prey",
				source : ["BMC", 29],
				description : "\n   " + "(4 Ferocity) When your companion uses a ferocity action that requires a creature to make a saving throw, you can use your reaction to impose disadvantage on the save",
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"primal shout" : {
				name : "Primal Shout",
				source : ["BMC", 29],
				description : "\n   " + "(6 Ferocity) As an action, you let loose a menacing bellow Each creature of your choice that can hear you within 15 feet of you must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"wrath of the pack" : {
				name : "Wrath of the Pack",
				source : ["BMC", 29],
				description : "\n   " + "(4 Ferocity) When you hit a creature with an attack and that creature is within 5 feet of your companion, you can have your companion make a signature attack against the creature (no action required) On a hit, the attack deals its normal efects, and the target is knocked prone",
				action : [""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"blood sport" : {
				name : "Blood Sport",
				source : ["BMC", 29],
				description : "\n   " + "(16 Ferocity) When you hit a Large or smaller creature with a melee weapon attack, you can also push the target up to 30 feet away from you and knock them prone If the target ends this move within 5 feet of your companion, the companion can make a signature attack against the target (no action required) On a hit, the attack deals its normal efects, and the target is pushed up to 30 feet away from your companion If the target ends this move within 5 feet of you, you can make a melee weapon attack against them (no action required) that deals an extra 4d6 damage if it hits",
				action : [""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"break the earth" : {
				name : "Break the Earth",
				source : ["BMC", 29],
				description : "\n   " + "(14 Ferocity) As an action, you open a 10-foot-radius pit in the ground, foor, or other surface within 60 feet of you The pit can be up to 50 feet deep, depending on the depth beneath the surface where it is opened Each creature standing in the area when the pit opens must make a Dexterity saving throw On a failure, a creature falls into the pit, taking 1d6 bludgeoning damage per 10 feet fallen and landing prone On a success, the creature moves to an unoccupied space of their choice at the edge of the pit A creature can climb the rough walls of the pit without an ability check",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"bury the dead" : {
				name : "Bury the Dead",
				source : ["BMC", 29],
				description : "\n   " + "(16 Ferocity) When you and your companion are within 5 feet of a creature, you can use an action to cause a vicious whirlwind flled with debris and dirt to rise around the creature, which must make a Dexterity saving throw On a failure, the creature takes 8d6 bludgeoning damage, is knocked prone, and is restrained On a success, the target takes half as much damage and isn’t knocked prone or restrained A creature restrained this way can use an action to make a Strength (Athletics) check against your exploit save DC, freeing themself on a success",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"imbue projectile" : {
				name : "Imbue Projectile",
				source : ["BMC", 29],
				description : "\n   " + "(14 Ferocity) As an action, you make a ranged weapon attack Whether or not the attack hits, a wave of energy explodes from the weapon or ammunition used in the attack, centered on your target Each creature within 20 feet of the target (including the target and excluding your companion) must make a Dexterity saving throw, taking 10d6 force damage on a failed save, or half as much damage on a successful one",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"rend" : {
				name : "Rend",
				source : ["BMC", 29],
				description : "\n   " + "(12 Ferocity) As an action, choose a creature you can see within 5 feet of you and your companion You make a melee weapon attack against the target, and your companion makes a signature attack against the target (no actions required) If you both hit and deal damage to the target, the target is knocked prone and takes an additional 6d6 damage of a type dealt by either attack (your choice)",
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"spirit form" : {
				name : "Spirit Form",
				source : ["BMC", 30],
				description : "\n   " + "(14 Ferocity) As a bonus action, you make you and your companion incorporeal until the end of your next turn While incorporeal, you each have resistance to acid, cold, fre, lightning, and thunder damage, and to bludgeoning, piercing, and slashing damage from nonmagical attacks While incorporeal, you and your companion each gain a fying speed equal to your individual walking speed, and each of you can move through other creatures and objects as if they were difcult terrain Either of you takes 5 (1d10) force damage if you end your turn inside an object",
				action : ["bonus action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
		},	
		"superior ferocity" : {
			name : "Superior Ferocity",
			source : ["BMC", 30],
			minlevel : 2,
			description : desc([
				"whenever your companion uses a ferocity action that requires a crea. to make an ability check or save. your companion can use your Primal Exploit DC in place of it's DC.",
			]),
		},
		"subclassfeature3" : {
			name : "Companion Bond",
			source : ["BMC", 30],
			minlevel : 3,
			description : desc([
				"You Specialize a bond between you and your Companion, granting you one of the following subclasses 'Ferocious Bond', 'Hunter Bond', 'Infernal Bond', 'Primordial Bond', or 'Protector Bond' you gain features from this subclass at 3rd, 7th, 11th, and 15th level.",
			])
		},	
		"master caregiver" : {
			name : "Master Caregiver",
			source : ["BMC", 30],
			minlevel : 3,
			description : desc([
				"You gain proficinecy in the Animal Handling Skill. If you already have proficiency your proficiency bonus is doubled for that skill.",
			]),
			skills : "animal handling",
		},	
		"beyond instinct" : {
			name : "Beyond Instinct",
			source : ["BMC", 30],
			minlevel : 5,
			description : desc([
				"Whenever your companion gains ferocity at the start of your tun they gain an additional 1, at 10th level this increases to 3, and at 15th level it increases to 5.",
				"Your companion gains proficincy with one saving throw of choice, they gain an addtional proficinecy at 10th level and at 15th level",
				"Your companion gains proficiency with one skill of choice (Acrobatics, Animal Handling, Athletics, Intimidation, Investigation, Perception, Performance, Sleight of Hand, Stealth, or Survival), you gain an additional skill proficiency of choice at 10th level, and 15th level.",
				"Your Companion uses Wisdom in place of Intelligence for the Investigation skill, Strength or Dexterity in place of Charisma for the Intimidation or Performance skill.",
			]),
		},	
		"improved signature attack" : {
			name : "Improved Signature Attack",
			source ["BMC", 30],
			minlevel : 5,
			description : desc([
				"Starting at 5th level, when your Companion hits with a Signature Weapon attack the attack deals one additional die of damage, this increases to two additional dice at 11th level and three additional dice at 17th level. Your Companion's attacks and ferocity actions now count as magical for the purpose of overcoming resistance and immunity to non-magical attacks.",
			]),
		},			
	},
};	
