var iFileName = "Beastheart and Monstrous Companions";
RequiredSheetVersion("13.1.14");
SourceList["BMC"] = {
	name : "Beastheart and Monstrous Companions",
	abbreviation : "BMC",
	group : "MCDM Productions",
	date : "2024/08/14",
};

ClassList["beastheart"] = {
	name : "Beastheart",
	regExpSearch : /beastheart/i,
	source : ["BMC", 25],
	primaryAbility : ["Wisdom, and Strength or Dexterity"],
	abilitySave : 5,
	prereqs : ["Wisdom 13, and Strength 13 or Dexterity 13"],
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Str", "Wis"],
	skillstxt : {
		primary : "Choose three from Animal Handling, Athletics, Intimidation, Nature, Perception, Stealth, and Survival",
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [false, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["battleaxe", "greataxe", "longbow", "net", "scimitar", "shortsword"]],
		secondary : [false, false]
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
				"At the start of each turn, while not incapacitated, your companion gains 1d4 + (1 per creature within 5 feet that it can see or hear) Ferocity Points. (Creatures sharing a stat block, like a swarm of rats, count as one.) There is no limit to the level of ferocity your companion can have. When combat ends and it isn't dying, your companion regains hit points equal to its current ferocity, then its ferocity drops to 0.",
			]),
		},
		"rampage" : {
			name : "Rampage",
			source : ["BMC", 6],
			minlevel : 1,
			description : desc([
				"After rolling to increase your companion's ferocity, if it reaches 10 or more ferocity and is not incapacitated, you may make a Wisdom (Animal Handling) check (DC 5 + the companion's Ferocity) to prevent it from entering a rampage (no action required but it must be able to see or hear you). If you fail the check or choose not to roll, your companion enters a rampage. When this happens, it immediately moves up to its speed toward the nearest creature and makes a signature attack, dealing extra damage equal to half its ferocity. If an ally and enemy are equally close, roll any die: on an odd number, it attacks the ally; on an even number, it attacks the enemy. If no creature is in reach, it uses the Dash action toward the nearest creature. If no targets are sensed, it moves as far as possible in a random direction (GM decides), avoiding danger. At the end of its turn or after resolving its action, its ferocity drops to 0 and it is no longer in a rampage.",
			]),
		},
		"companion" : {
			name : "Companion",
			source : ["BMC", 27],
			minlevel : 1,
			description : desc([
				"You gain a companion creature (Select the Companion on your Companion sheet). If your companion is injured or dies, you may spend 1 minute and gain 1 level of exhaustion to heal it to its maximum hit points, or resurrect it to its maximum hit points. If no body remains, it appears within 5 feet of you.",
			]),
		},
		"natural language" : {
			name : "Natural Language",
			source : ["BMC", 27],
			minlevel : 1,
			description : desc([
				"You can communicate simple statements or questions with your companion as well as other beasts and monstrosities. While doing so, you can make Wisdom (Animal Handling) checks in place of Charisma checks to influence these creatures.",
			]),
		},
		"primal exploits" : {
			name : "Primal Exploits",
			source : ["BMC", 27],
			minlevel : 2,
			description : desc([
				"At 2nd level you gain 3 primal exploits (Use 'Choose Feature' Button on page 2 to select your exploits). You gain an additional 2 exploits at 10th level and 17th level. When you gain a level in this class, you can swap one exploit with another, as long as you meet the requirements. To use an exploit, your companion must be within 60 ft. and have ferocity at least equal to the exploit's cost. You can't use exploits while your companion has entered a rampage (but it can be unconscious). Some exploits let your companion to make a signature attack; this attack can't be modified with additional exploits or used as part of a ferocity action.",
			]),
			extraname : "Primal Exploits",
			extrachoices : ["Aid Us, Friend", "Bring Them Down", "Drag Them", "Feral Reflexes", "Hurricane Blow", "No Escape", "Primal Pounce", "Quick Hide", "Thrash", "Crushing Charge", "Expanding Fury", "Furious Vengeance", "Marked Prey", "Primal Shout", "Wrath of the Pack", "Blood Sport", "Break the Earth", "Bury the Dead", "Imbue Projectile", "Rend", "Spirit Form"],
			extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 10 ? 3 : n <= 17 ? 15 : 7;

			}),
			"aid us, friend" : {
				name : "Aid Us, Friend",
				source : ["BMC", 28],
				description : desc([
					"(3 Ferocity) You can activate this exploit whenever you take the Attack action Before or after you attack, your companion can take the Help action as a bonus action"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"bring them down" : {
				name : "Bring Them Down",
				source : ["BMC", 28],
				description : desc([
					"(4 Ferocity) When your companion hits a creature with their signature attack, you can use your reaction to command the companion to yank the target down The target must succeed on a Strength saving throw or fall prone"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"drag them" : {
				name : "Drag Them",
				source : ["BMC", 28],
				description : desc([
					"(4 Ferocity) When your companion hits a Large or smaller creature with their signature attack and both the companion and the target are standing on the ground, you can use your reaction to command your companion to move the target The target must make a Strength saving throw On a failure, the companion moves up to half their walking speed in any direction you choose and pulls the target with it"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"feral reflexes" : {
				name : "Feral Reflexes",
				source : ["BMC", 28],
				description : desc([
					"(2 Ferocity) When you or your companion is hit by an attack, you can use your reaction to increase the target's AC by 2 against the triggering attack"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"hurricane blow" : {
				name : "Hurricane Blow",
				source : ["BMC", 28],
				description : desc([
					"(3 Ferocity) You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, the attack deals its normal effects, and you can push the target up to 10 feet away from you"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"no escape" : {
				name : "No Escape",
				source : ["BMC", 28],
				description : desc([
					"(1+ Ferocity) At the start of your turn when your companion gains ferocity and doesn't enter a rampage, you can spend up to your Wisdom modifier in ferocity (minimum 1; no action required) Until the start of your next turn, your speed or your companion's speed (your choice) increases by 5 feet × the ferocity spent"
				]),
				action : [""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"primal pounce" : {
				name : "Primal Pounce",
				source : ["BMC", 28],
				description : desc([
					"(3 Ferocity) When your companion hits a creature with their signature attack, you can use your reaction to command the companion to grapple the target The target must make a Dexterity saving throw On a failure, the companion grabs the target and the target is grappled (escape DC equal to your exploit save DC) The grapple also ends if your companion attacks a creature other than the target"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"quick hide" : {
				name : "Quick Hide",
				source : ["BMC", 28],
				description : desc([
					"(2 Ferocity) You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, your companion can take the Hide action as a reaction if they are able to hide"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"thrash" : {
				name : "Thrash",
				source : ["BMC", 28],
				description : desc([
					"(4 Ferocity) When your companion hits a Large or smaller creature with a melee signature attack, you can use your reaction to command the companion to thrash the target from side to side, forcing them to make a Wisdom saving throw On a failure, the target has disadvantage on attack rolls, and attack rolls against the target have advantage, until the start of your next turn"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 2; },
			},
			"crushing charge" : {
				name : "Crushing Charge",
				source : ["BMC", 29],
				description : desc([
					"(8 Ferocity) As an action, you move up to your speed in a straight line without provoking opportunity attacks You can move through other creatures' spaces, but must end your move in an unoccupied space Each creature in a space you move through, except for your companion, must make a Strength saving throw On a failure, a creature takes 4d6 bludgeoning damage and is knocked prone On a success, the creature takes half as much damage and isn't knocked prone When you reach 17th level, the damage increases to 5d6"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"expanding fury" : {
				name : "Expanding Fury",
				source : ["BMC", 29],
				description : desc([
					"(6 Ferocity) When your companion uses a ferocity action that afects creatures within a specifc distance of the companion, you can use your reaction to expand that distance by 10 feet"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"furious vengeance" : {
				name : "Furious Vengeance",
				source : ["BMC", 29],
				description : desc([
					"(5 Ferocity) When a creature hits you or your companion with a melee attack, you can use your reaction to deal 4d6 psychic damage to the attacker When you reach 17th level, the damage increases to 5d6"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"marked prey" : {
				name : "Marked Prey",
				source : ["BMC", 29],
				description : desc([
					"(4 Ferocity) When your companion uses a ferocity action that requires a creature to make a saving throw, you can use your reaction to impose disadvantage on the save"
				]),
				action : ["reaction"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"primal shout" : {
				name : "Primal Shout",
				source : ["BMC", 29],
				description : desc([
					"(6 Ferocity) As an action, you let loose a menacing bellow Each creature of your choice that can hear you within 15 feet of you must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"wrath of the pack" : {
				name : "Wrath of the Pack",
				source : ["BMC", 29],
				description : desc([
					"(4 Ferocity) When you hit a creature with an attack and that creature is within 5 feet of your companion, you can have your companion make a signature attack against the creature (no action required) On a hit, the attack deals its normal effects, and the target is knocked prone"
				]),
				action : [""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 10; },
			},
			"blood sport" : {
				name : "Blood Sport",
				source : ["BMC", 29],
				description : desc([
					"(16 Ferocity) When you hit a Large or smaller creature with a melee weapon attack, you can also push the target up to 30 feet away from you and knock them prone If the target ends this move within 5 feet of your companion, the companion can make a signature attack against the target (no action required) On a hit, the attack deals its normal effects, and the target is pushed up to 30 feet away from your companion If the target ends this move within 5 feet of you, you can make a melee weapon attack against them (no action required) that deals an extra 4d6 damage if it hits"
				]),
				action : [""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"break the earth" : {
				name : "Break the Earth",
				source : ["BMC", 29],
				description : desc([
					"(14 Ferocity) As an action, you open a 10-foot-radius pit in the ground, foor, or other surface within 60 feet of you The pit can be up to 50 feet deep, depending on the depth beneath the surface where it is opened Each creature standing in the area when the pit opens must make a Dexterity saving throw On a failure, a creature falls into the pit, taking 1d6 bludgeoning damage per 10 feet fallen and landing prone On a success, the creature moves to an unoccupied space of their choice at the edge of the pit A creature can climb the rough walls of the pit without an ability check"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"bury the dead" : {
				name : "Bury the Dead",
				source : ["BMC", 29],
				description : desc([
					"(16 Ferocity) When you and your companion are within 5 feet of a creature, you can use an action to cause a vicious whirlwind flled with debris and dirt to rise around the creature, which must make a Dexterity saving throw On a failure, the creature takes 8d6 bludgeoning damage, is knocked prone, and is restrained On a success, the target takes half as much damage and isn't knocked prone or restrained A creature restrained this way can use an action to make a Strength (Athletics) check against your exploit save DC, freeing themself on a success"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"imbue projectile" : {
				name : "Imbue Projectile",
				source : ["BMC", 29],
				description : desc([
					"(14 Ferocity) As an action, you make a ranged weapon attack Whether or not the attack hits, a wave of energy explodes from the weapon or ammunition used in the attack, centered on your target Each creature within 20 feet of the target (including the target and excluding your companion) must make a Dexterity saving throw, taking 10d6 force damage on a failed save, or half as much damage on a successful one"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"rend" : {
				name : "Rend",
				source : ["BMC", 29],
				description : desc([
					"(12 Ferocity) As an action, choose a creature you can see within 5 feet of you and your companion You make a melee weapon attack against the target, and your companion makes a signature attack against the target (no actions required) If you both hit and deal damage to the target, the target is knocked prone and takes an additional 6d6 damage of a type dealt by either attack (your choice)"
				]),
				action : ["action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
			"spirit form" : {
				name : "Spirit Form",
				source : ["BMC", 30],
				description : desc([
					"(14 Ferocity) As a bonus action, you make you and your companion incorporeal until the end of your next turn While incorporeal, you each have resistance to acid, cold, fre, lightning, and thunder damage, and to bludgeoning, piercing, and slashing damage from nonmagical attacks While incorporeal, you and your companion each gain a fying speed equal to your individual walking speed, and each of you can move through other creatures and objects as if they were difcult terrain Either of you takes 5 (1d10) force damage if you end your turn inside an object"
				]),
				action : ["bonus action"],
				prereqeval : function(v) { return classes.known.beastheart.level >= 17; },
			},
		},
		"superior ferocity" : {
			name : "Superior Ferocity",
			source : ["BMC", 30],
			minlevel : 2,
			description : desc([
				"Whenever your companion uses a ferocity action that forces a creature to make a save or ability check, it can use your Primal Exploit DC instead of its own.",
			]),
		},
		"subclassfeature3" : {
			name : "Companion Bond",
			source : ["BMC", 30],
			minlevel : 3,
			description : desc([
				"You form a bond with your companion, choosing one of the following subclasses: 'Ferocious Bond', 'Hunter Bond', 'Infernal Bond', 'Primordial Bond', or 'Protector Bond'. You gain features from your chosen subclass at 3rd, 7th, 11th, and 15th level.",
			])
		},
		"master caregiver" : {
			name : "Master Caregiver",
			source : ["BMC", 30],
			minlevel : 3,
			description : desc([
				"You gain proficiency in Animal Handling. If you're already proficient, you gain expertise.",
			]),
			skills : [["Animal Handling", "increment"]],
			skillstxt : "You gain Animal Handling proficiency or expertise if you are already proficient"
		},
		"beyond instinct" : {
			name : "Beyond Instinct",
			source : ["BMC", 30],
			minlevel : 5,
			description : desc([
				"When your companion gains ferocity at the start of your turn, they gain +1 extra. This increases to +3 at 10th level and +5 at 15th level.",
				"Your companion gains proficiency in one saving throw of choice, with an additional choice at 10th and 15th level.",
				"Your companion gains proficiency in one skill of choice (Acrobatics, Animal Handling, Athletics, Intimidation, Investigation, Perception, Performance, Sleight of Hand, Stealth, or Survival), plus one more at 10th and 15th level.",
				"Your Companion can use Wisdom in place of Intelligence for Investigation, and Strength or Dexterity instead of Charisma for Intimidation or Performance.",
			]),
		},
		"improved signature attack" : {
			name : "Improved Signature Attack",
			source : ["BMC", 30],
			minlevel : 5,
			description : desc([
				"Starting at 5th level, when your Companion hits with a signature attack, it deals one additional die of damage. This increases to two additional dice at 11th level and three additional dice at 17th level. Its attacks and ferocity actions now count as magical for the purpose of overcoming resistance and immunity to non-magical attacks.",
			]),
		},
		"faithful companion" : {
			name : "Faithful Companion",
			source : ["BMC", 30],
			minlevel : 6,
			description : desc([
				"At 6th level, you no longer need a bonus action to command your companion. As long as you aren't incapacitated, verbal or physical signs suffice. Additionally, when your companion is enraged, you choose its movement and attacks on creatures, provided it can see or hear you and you're not incapacitated.",
			]),
		},
		"rejuvenating ferocity" : {
			name : "Rejuvenating Ferocity",
			source : ["BMC", 30],
			minlevel : 6,
			description : desc([
				"At 6th level, you can use a bonus action to spend any amount of your companion's ferocity to heal it by the same amount. You can use this feature a number of times equal to your Wisdom modifier (minimum 1), and regain all uses on a long rest.",
			]),
			action : ["bonus action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"primal strike" : {
			name : "Primal Strike",
			source : ["BMC", 31],
			minlevel : 8,
			description : desc([
				"At 8th level, once per turn, you can deal an additional 1d8 (TYPE OF DAMAGE) damage with a weapon attack. Each time you level up, you can change the damage type.",
			]),
			// TODO ADD TO ATTACKS AND LVL 14 UPDATE
		},
		"mystic connection" : {
			name : "Mystic Connection",
			source : ["BMC", 31],
			minlevel : 9,
			description : desc([
				"TODO TLDR",
			]),
		},
		"loyal to the end" : {
			name : "Loyal to the End",
			source : ["BMC", 32],
			minlevel : 13,
			description : desc([
				"At 13th level, you are immune to being charmed or frightened.",
			]),
			// TODO ADD EFFECT AND ADD TO COMPANION
		},
		"keen senses" : {
			name : "Keen Senses",
			source : ["BMC", 32],
			minlevel : 14,
			description : desc([
				"At 14th level, you gain advantage on Wisdom (Perception) checks based on hearing, sight, or smell. Additionally, you can take the Search action as a bonus action.",
			]),
			// TODO ADD EFFECT
		},
		"summon the wilds" : {
			name : "Summon the Wilds",
			source : ["BMC", 32],
			minlevel : 18,
			description : desc([
				"At 18th level, you can summon a distracting swarm of creatures (birds, fish, insects, rodents, etc.) in a 30-foot cube within 120 feet that you can see as an action. The swarm lasts 1 minute and can be moved up to 30 feet as a bonus action each turn. Creatures you choose starting their turn in the swarm must succeed on a Wisdom save against your exploit save DC or suffer disadvantage on ability checks, attack rolls, saving throws, and -5 to passive Wisdom (Perception) until the start of their next turn. You can use this feature once per short or long rest.",
			]),
			// TODO ADD EFFECT
		},
		"unbreakable friendship" : {
			name : "Unbreakable Friendship",
			source : ["BMC", 32],
			minlevel : 20,
			description : desc([
				"At 20th level, while you have at least 1 hit point and your companion can see or hear you, you gain these benefits: You automatically succeed on Wisdom (Animal Handling) checks to prevent your companion's rampage (you may choose to forgo the check to allow it). If your companion is reduced to 0 hit points but not killed outright, it drops to 1 hit point instead. Your companion gains 1d10 ferocity whenever you roll initiative.",
			]),
		},
	},
};

AddSubClass("beastheart", "ferocious", {
	regExpSearch : /ferocious/i,
	subname : "Ferocious Bond",
	source : ["BMC", 32],
	features : {
		"subclassfeature3" : {
			name : "Frenzied Charge",
			source : ["BMC", 32],
			minlevel : 3,
			description : desc([
				"Whenever your companion enters a rampage, you can use a reaction to move up to your speed and make a melee weapon attack against a target at the end of the movement.",
			]),
			action : ["reaction", "(on rampage)"]
		},
		"subclassfeature3.1" : {
			name : "Fury of the Wise",
			source : ["BMC", 32],
			minlevel : 3,
			description : desc([
				"You gain proficiency in the Intimidation skill if you do not already have it. Additionally, your Charisma (Intimidation) checks gain a bonus equal to your Wisdom modifier",
			]),
			addMod : { type : "skill", field : "intimidation", mod : "max(Wis|0)", text : "I can add my Wisdom modifier to my Charisma (Intimidation) checks." },
			skillstxt : "You gain Intimidation proficiency.",
			skills : ["Intimidation"]
		},
		"subclassfeature7" : {
			name : "Energizing Rampage",
			source : ["BMC", 32],
			minlevel : 7,
			description : desc([
				"When your companion ends a rampage, their ferocity drops to 4 instead of 0."
			]),
		},
		"subclassfeature11" : {
			name : "Furious Rampage",
			source : ["BMC", 32],
			minlevel : 11,
			description : desc([
				"Whenever your companion hits one of your enemies with a signature attack during a rampage, the attack deals extra damage equal to the companion's ferocity (instead of half their ferocity).",
				"Additionally, whenever your companion attacks a target within 5 feet of you while in a rampage, they make the attack with advantage.",
				"If you attack a creature within 5 feet of your companion when you use Frenzied Charge, you make your attack with advantage."
			]),
		},
		"subclassfeature15" : {
			name : "Invigorated Rampage",
			source : ["BMC", 33],
			minlevel : 15,
			description :desc([
				"When your companion hits another creature with their signature attack while in a rampage, or if you hit another creature with the attack granted to you by Frenzied Charge, the target is either blinded, deafened, or frightened of the attacker (your choice) until the end of the target's next turn"
			]),
		}
	}
});

AddSubClass("beastheart", "hunter", {
	regExpSearch : /hunter/i,
	subname : "Hunter Bond",
	source : ["BMC", 34],
	features : {
		"subclassfeature3" : {
			name : "Chosen Quarry",
			source : ["BMC", 34],
			minlevel : 3,
			description : desc([
				"You and your companion can single out a creature as your prey. Whenever your companion gains ferocity at the start of your turn and doesn't enter a rampage, you can spend 4 ferocity to mark a creature within 90 feet of you (no action required). That creature becomes your quarry for 1 minute, or until you use this feature to mark another target as your quarry. Whenever you or your companion hit your quarry with a weapon attack or deal damage to them with a ferocity action, the quarry takes an extra 1d6 damage."
			])
		},
		"subclassfeature3.1" : {
			name : "Hunter's Instincts",
			source : ["BMC", 34],
			minlevel : 3,
			description : desc([
				"You gain proficiency and expertise in the Survival skill if you do not already have it, and you can use Survival instead of Insight when you make a Wisdom check to read a creature's intentions or discern if a creature is lying"
			]),
			skillstxt : "You gain Survival proficiency and expertise",
			skills : ["Survival", "full"]
		},
		"subclassfeature7" : {
			name : "Primal Warding",
			source : ["BMC", 34],
			minlevel : 7,
			description : desc([
				"As an action, you trap a 10-foot-square area of ground centered on a point you can see within 30 feet of you, with the trap lasting for 8 hours or until it is triggered.",
				"When you set the trap, you can designate any number of specifc creatures that are unaffected by it.",
				"Finding the trap requires a successful Intelligence (Investigation) check against your exploit save DC. A creature that walks into the trap's area triggers the trap and must make a Constitution saving throw against your exploit save DC.",
				"On a failure, the creature takes 4d8 force damage and is blinded for 1 minute. On a success, the creature takes half as much damage and isn't blinded.",
				"A creature blinded by the trap can repeat the saving throw at the end of each of their turns, ending the effect on themself on a success.",
				"A mental alarm alerts you with a ping in your mind if you are within 1 mile of the trap when it is triggered This ping awakens you if you are sleeping.",
				"If you set more than one trap, you know which one was triggered. You can use this feature to set a number of traps equal to your Wisdom modifier (minimum one). You regain all expended uses when you finish a long rest.",
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Synchronized Stealth",
			source : ["BMC", 34],
			minlevel : 11,
			description : desc([
				"When either you or your companion takes the Hide action, the other can take the Hide action as a reaction if they are able to hide Additionally, when you take the Hide action within 5 feet of your companion, you have advantage on the Dexterity (Stealth) check made as part of the action"
			]),
			action : ["reaction", ""],
		},
		"subclassfeature15" : {
			name : "Unseen Hunters",
			source : ["BMC", 34],
			minlevel : 15,
			description : desc([
				"You can use an action to make you and your companion invisible for 10 minutes. While invisible, neither of you can be tracked by nonmagical means unless you or your companion chooses to leave a trail. Either of you can end the invisibility on yourself as a bonus action. Once you use this feature, you can use it again when you finish a long rest."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("beastheart", "infernal", {
	regExpSearch : /infernal/i,
	subname : "Infernal Bond",
	source : ["BMC", 36],
	features : {
		"subclassfeature3" : {
			name : "Devil's Understanding",
			source : ["BMC", 36],
			minlevel : 3,
			description : desc([
				"You can speak, write, and understand Infernal. Additionally, you gain proficiency in the Arcana or Religion skill (your choice) if you do not already have proficiency in those skills."
			]),
			languageProfs : ["Infernal"],
			skillstxt : "You gain proficiency in either Arcana or Religion."
		},
		"subclassfeature3.1" : {
			name : "Infernal Exploits",
			source : ["BMC", 36],
			minlevel : 3,
			description : desc([
				"You gain one infernal exploit of your choice, which functions in the same manner as your primal exploits and uses your exploit save DC as applicable. The exploit you choose must be one available at 3rd level. You gain one additional infernal exploit at 11th level. Whenever you gain a level in this class, you can choose one of the infernal exploits you know and replace it with another infernal exploit, for which you must have the appropriate beastheart level"
			]),
			//TODO
		},
		"subclassfeature7" : {
			name : "Hell's Charmer",
			source : ["BMC", 38],
			minlevel : 7,
			description : desc([
				"As an action, choose one creature that can see you and your companion within 30 feet of you. That creature must make a Wisdom saving throw, doing so with advantage if you or your allies are fighting them.",
				"On a success, the creature knows you tried to charm them and becomes hostile toward you and your companion.",
				"On a failure, the creature is charmed by you and your companion for 10 minutes, or until you or your allies do anything physically, mentally, or emotionally harmful to the creature.",
				"The charmed creature is friendly to you When this effect ends, a charmed creature doesn't remember what happened during the time they were charmed. You can use this feature a number of times equal to your Wisdom modifier (minimum once) You regain all uses when you finish a long rest",
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Fiendish Traits",
			source : ["BMC", 38],
			minlevel : 11,
			description : desc([
				"your companion's connection to Hell causes them to become more fiendish. Choose one trait for your companion."
			]),
			//TODO
		},
		"subclassfeature15" : {
			name : "Fiendish Form",
			source : ["BMC", 38],
			minlevel : 15,
			description : desc([
				"As a bonus action, you can spend 6 ferocity to transform your companion into a fiendish form for 1 minute. While in this form, your companion undergoes the following changes:",
				"\u2022 They are a fiend",
				"\u2022 They have resistance to bludgeoning, piercing, and slashing damage",
				"\u2022 They have advantage on saving throws against spells and other magical effects",
			]),
			action : ["bonus action", ""],
		}
	}
});

AddSubClass("beastheart", "primordial", {
	regExpSearch : /primordial/i,
	subname : "Primordial Bond",
	source : ["BMC", 39],
	features : {
		"subclassfeature3" : {
			name : "Nature Exploits",
			source : ["BMC", 39],
			minlevel : 3,
			description : desc([
				"you gain one nature exploit of your choice, which functions in the same manner as your primal exploits and uses your exploit save DC as applicable. The exploit you choose must be one available at 3rd level. You gain one additional nature exploit at 11th level. Whenever you gain a level in this class, you can choose one of the nature exploits you know and replace it with another nature exploit, for which you must have the appropriate beastheart level."
			]),
			extraname : "Nature Exploits",
			extrachoices : ["Elemental Shield", "Freezing Strike", "Sickening Strike", "Wings When I Need Them", "Lava Geyser", "Lightning Eruption", "Plant Prison", "Stinging Swarm", "Thunderous Rebuke"],
			extraTimes : levels.map(function (n) {
					return n < 3 ? 0 : n >= 3 && n < 11 ? 1 : n >= 11 ? 2 : 0;
			}),
			"elemental shield" : {
				name : "Elemental Shield",
				source : ["BMC", 39],
				submenu : "[beastheart level  3+]",
				description : desc([
					"(3 Ferocity) When a creature you can see within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use a reaction to give the affected creature resistance to that damage type (including against the triggering attack) until the end of their next turn."
				]),
				action : ["reaction", ""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 3; },
			},
			"freezing strike" : {
				name : "Freezing Strike",
				source : ["BMC", 39],
				submenu : "[beastheart level  3+]",
				description : desc([
					"(2 Ferocity) You can activate this exploit whenever you take the Attack action. The first time you hit a creature with a weapon attack this turn, the attack deals an extra 1d6 cold damage and the target's speed is reduced by 10 feet until the start of your next turn. The extra damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
				]),
				prereqeval : function(v) { return classes.known.beastheart.level >= 3; },
			},
			"sickening strike" : {
				name : "Sickening Strike",
				source : ["BMC", 39],
				submenu : "[beastheart level  3+]",
				description : desc([
					"(3 Ferocity) You can activate this exploit whenever you take the Attack action. The first time you hit a creature with a weapon attack this turn, the target must succeed on a Constitution saving throw or be poisoned until the start of your next turn"
				]),
				prereqeval : function(v) { return classes.known.beastheart.level >= 3; },
			},
			"wings when i need them" : {
				name : "Wings When I Need Them",
				source : ["BMC", 39],
				submenu : "[beastheart level  3+]",
				description : desc([
					"(5 Ferocity). At the start of your turn when your companion gains ferocity and doesn't enter a rampage, you can manifest a spectral eagle (no action required) that lifts you or your companion (your choice) to the sky. The target gains a flying speed equal to their walking speed until the start of their next turn"
				]),
				prereqeval : function(v) { return classes.known.beastheart.level >= 3; },
			},
			"lava geyser" : {
				name : "Lava Geyser",
				source : ["BMC", 39],
				submenu : "[beastheart level  11+]",
				description : desc([
					"(8 Ferocity). As an action, you summon a powerful rush of lava centered on a point on the ground you can see within 30 feet of you. The lava fills a cylinder that is 10 feet tall with a 5-foot radius, and forces each creature in its area to make a Dexterity saving throw. On a failure, a creature takes 4d6 fire damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone The lava then dissolves into fiery mist and fades away. When you reach 17th level, the damage increases to 5d6"
				]),
				action : ["action", ""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 11; },
			},
			"lightning eruption" : {
				name : "Lightning Eruption",
				source : ["BMC", 39],
				submenu : "[beastheart level  11+]",
				description : desc([
					"(8 Ferocity). When you hit a creature with a weapon attack, the attack deals an extra 5d6 lightning damage and you can choose one other creature within 30 feet of the target that you can see. That creature must make a Dexterity saving throw, taking 5d6 lightning damage on a failed save, or half as much damage on a successful one. When you reach 17th level, both instances of damage increase to 6d6"
				]),
				prereqeval : function(v) { return classes.known.beastheart.level >= 11; },
			},
			"plant prison" : {
				name : "Plant Prison",
				source : ["BMC", 39],
				submenu : "[beastheart level  11+]",
				description : desc([
					"(5 Ferocity). As an action, choose a creature you can see within 30 feet of you. Thorny vines erupt from the ground beneath the target, which must make a Dexterity saving throw. On a failure, the target takes 4d6 piercing damage and is restrained until the start of your next turn. On a success, the target takes half as much damage and isn't restrained. When you reach 17th level, the damage increases to 5d6"
				]),
				action : ["action", ""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 11; },
			},
			"stinging swarm" : {
				name : "Stinging Swarm",
				source : ["BMC", 41],
				submenu : "[beastheart level  11+]",
				description : desc([
					"(6 Ferocity). As an action, you conjure a swarm of stinging insects in a line that is 5 feet wide and 30 feet long. Each creature in the line except your companion must make a Constitution saving throw, taking 4d6 piercing damage on a failed save, or half as much damage on a successful one. The insects then dissolve to shadow and fade away. When you reach 17th level, the damage increases to 5d6"
				]),
				action : ["action", ""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 11; },
			},
			"thunderous rebuke" : {
				name : "Thunderous Rebuke",
				source : ["BMC", 41],
				submenu : "[beastheart level  11+]",
				description : desc([
					"(6 Ferocity). When you or your companion is hit with a melee attack by a creature within 5 feet of that target, you can use your reaction to force the attacker to make a Constitution saving throw. On a failure, the attacker takes 3d6 thunder damage and is pushed 10 feet away from the target. On a success, the attacker takes half as much damage and isn't pushed. When you reach 17th level, the damage increases to 4d6"
				]),
				action : ["reaction", ""],
				prereqeval : function(v) { return classes.known.beastheart.level >= 11; },
			},
		},
		"subclassfeature3.1" : {
			name : "Primal Understanding",
			source : ["BMC", 41],
			minlevel : 3,
			description : desc([
				"you can speak, write, and understand Primordial and Sylvan. Additionally, you gain profciency in the Nature skill if you do not already have it."
			]),
			languageProfs : ["Primordial", "Sylvan"],
			skills : ["Nature"],
			skillstxt : "You gain proficiency in Nature."
		},
		"subclassfeature7" : {
			name : "Allied Earth",
			source : ["BMC", 41],
			minlevel : 7,
			description : desc([
				"Whenever your companion has at least 1 ferocity, the ground within 10 feet of them is difcult terrain for their enemies."
			])
		},
		"subclassfeature11" : {
			name : "Spirit Stampede",
			source : ["BMC", 41],
			minlevel : 11,
			description : desc([
				"When your companion enters a rampage each creature of your choice within 30 feet of your companion takes force damage equal to the companion's ferocity."
			])
		},
		"subclassfeature15" : {
			name : "Allied Weather",
			source : ["BMC", 41],
			minlevel : 15,
			description : desc([
				"Whenever your companion has at least 1 ferocity and is hit with a melee attack by a creature within 10 feet of them, choose one of the following efects:",
				"\u2022 The attacker must succeed on a Strength saving throw against your exploit save DC or fall prone",
				"\u2022 The attacker must succeed on a Dexterity saving throw against your exploit save DC or take lightning damage equal to your companion's ferocity",
			]),
		}
	}
});

AddSubClass("beastheart", "protector", {
	regExpSearch : /protector/i,
	subname : "Protector Bond",
	source : ["BMC", 41],
	features : {
		"subclassfeature3" : {
			name : "Beast Vitality",
			source : ["BMC", 41],
			minlevel : 3,
			description : desc([
				"Your hit point maximum increases by 3, and increases by 1 again whenever you gain a level in this class."
			]),
			calcChanges : {
				hp : function (totalHD) {
					return [totalHD * 1, '\n + ' + totalHD + ' from Beast Vitality (' + (totalHD * 1) + ')', true];
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Pack Phalanx",
			source : ["BMC", 41],
			minlevel : 3,
			description : desc([
				"Whenever you and your companion are not incapacitated and are both within 5 feet of a creature, that creature has disadvantage on attack rolls against any target that is not you or your companion."
			])
		},
		"subclassfeature7" : {
			name : "Thickened Hide",
			source : ["BMC", 41],
			minlevel : 7,
			description : desc([
				"Your companion's AC increases by 2"
			]),
		},
		"subclassfeature11" : {
			name : "Sentinel Companion",
			source : ["BMC", 41],
			minlevel : 11,
			description : desc([
				"When a creature within 5 feet of your companion makes an attack against a creature other than you or your companion, you can spend 2 ferocity to have your companion use their reaction to make a signature attack against the attacking creature"
			]),
			action : ["reaction", ""],
		},
		"subclassfeature15" : {
			name : "Undying Protector",
			source : ["BMC", 41],
			minlevel : 15,
			description : desc([
				"If you can see your companion when you drop to 0 hit points, you can spend 2 ferocity to drop to 1 hit point instead. Each time you use this feature after the first, the ferocity cost increases by 2. When you finish a short or long rest,the ferocity cost resets to 2"
			]),
		}
	}
});


CompanionList ["beastheart companion"] = {
	name: "Beastheart Companion",
	nameMenu: "Companion (Beastheart class feature)",
	source: ["BMC", 8],
	attributesAdd : {
	header : "Companion",},
	}

CompanionList ["beastheart companion protector"] = {
	name: "Beastheart Companion Protector",
	nameMenu: "Companion (Beastheart Protector subclass feature)",
	source: ["BMC", 8],
	attributesAdd : {
	header : "Companion",},
    traits : [{
        name : "Thickened Hide",
        minlevel : 7,
        description: desc([
			"Your companion's AC increases by 2"
        ]),
		addMod: [{
			type: "",
			field: "Comp.Use.AC",
			mod: 2,
			text: "A 7th-level Beastheart companion gains Thickened Hide, granting it +2 AC."
			}],
        // eval: function(prefix, lvl) {
        //     if(!classes.known.beastheart || !(/protector/i).test(classes.known.beastheart.subclass)) return;
        //     var fldName = prefix + "Comp.Use.AC";
        //     var newAC = What(prefix + "Comp.Use.AC") + "+2";
        //     Value(fldName, newAC);

        //     var traitBox = prefix + "Comp.Use.Traits";
        //     var existingTraits = What(traitBox); // Get current value
        //     // AddTooltip(prefix + "Comp.Use.Traits", "test", ""); // this adds a tooltip
        //     var feature = "\u25C6 Thickened Hide" + desc(["Your companion's AC increases by 2"])
        //     Value(traitBox, existingTraits + feature);

        // },
        // removeeval : function(prefix, lvl) {
        //     var fldName = prefix + "Comp.Use.AC";
        //     var newAC = What(prefix + "Comp.Use.AC")+ "-2";
        //     Value(fldName, newAC);

        //     var traitBox = prefix + "Comp.Use.Traits";
        //     var existingTraits = What(traitBox);
        //     var featureToRemove = new RegExp("\u25C6 Thickened Hide[\\s\\S]*?(?=\u25C6|$)");
        //     var updatedTraits = existingTraits.replace(featureToRemove, "");
        //     Value(traitBox, updatedTraits);
        // }
    }],
	}




CreatureList["basilisk"] = {
	name : "Basilisk",
	source : ["BMC", 9],
	size : 3,
	type : "Monstrosity",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "15+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
		name : "Bite (Signature Attack)",
		ability : 1,
		damage : [1, 6, "Piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["", "Prof"],
		abilitytodamage : false,
	}],
	features : [{
		name : "1st Level: Poison Spittle (2 Ferocity)",
		description : desc([
			"The basilisk makes a signature attack. On a hit, the attack deals PB extra damage, and a creature the basilisk chooses within 5 feet of it, other than the target, takes PB poison damage.",
		]),
	}, {
		name : "3rd Level: Poison Gaze (5 Ferocity)",
		description : desc([
			"The basilisk chooses up to three creatures it can see within 15 feet. Each creature must succeed on a DC 10 + PB Con saving throw or become poisoned until the start of the basilisk's next turn.",
		]),
		minlevel : 3
	}, {
		name : "5th Level: Lesser Petrifying Gaze (8 Ferocity)",
		description : desc([
			"The basilisk targets one creature it can see within 30 feet. The target must make a DC 10 + PB Con saving throw. On a failure, it begins to turn to stone and is restrained. It repeats the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 1 hour or until cured by the lesser restoration spell or similar magic. (This petrification is weaker than typical, allowing weaker spells to cure it.)",
		]),
		minlevel : 5
	}, {
		name : "Heavy Glare (Reaction)",
		description : desc([
			"When the basilisk's caregiver hits a creature that can see the basilisk, it can force that creature to make a DC 10 + PB Con saving throw. On a failure, the target's speed is reduced by 10 feet and it can't make opportunity attacks until the start of its next turn.",
		]),
		action : "reaction",
	}],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["blood hawk"] = {
	name : "Blood Hawk",
	source : ["BMC", 10],
	size : 4,
	type : "Beast",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 6,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Beak (Signature Attack)",
        ability : 2,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Distracting Attack (2 Ferocity)",
        description : desc([
            "The hawk makes a",
            "signature attack. On a hit, the attack deals its normal effects,",
            "and the next attack made against the target before the start of",
            "the hawk's next turn has advantage.",
        ]),
    }, {
        name : "3rd Level: Swooping Attack (5 Ferocity)",
        description : desc([
            "The hawk moves up",
            "to their speed without provoking opportunity attacks. During",
            "or at the end of this move, they can make a signature attack",
            "against one target. On a hit, the attack deals its normal effects,",
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
            "the hawk's next turn. On a success, the target takes half as much",
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
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(6 + beaLvl * 6);
			HDobj.altStr.push(" = 6 as a base\n + " + (beaLvl * 6) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["bulette"] = {
	name : "Bulette",
	source : ["BMC", 11],
	size : 2,
	type : "Monstrosity",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "15+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Violent Attack (2 Ferocity)",
        description : desc([
            "The bulette makes a",
            "signature attack. On a hit, the attack deals an extra PB damage,",
            "and the bulette can move the target 5 feet in any direction.",
        ]),
    }, {
        name : "3rd Level: Burrowing Trip (5 Ferocity)",
        description : desc([
            "The bulette moves up",
            "to half their burrowing speed without provoking opportunity",
            "attacks. Each creature standing on the ground that the bulette",
            "moves under must succeed on a DC 10 plus PB Dexterity saving throw or fall prone.",
        ]),
    }, {
        name : "5th Level: Deadly Leap (8 Ferocity)",
        description : desc([
            "The bulette leaps up to",
            "30 feet, and if they land in a space that contains one or more",
            "creatures, each of those creatures must make a DC 10 plus",
            "PB Strength saving throw. On a failure, a creature takes PBd6",
            "bludgeoning damage and is knocked prone. On a success, the",
            "creature takes half as much damage, isn't knocked prone, and",
            "is pushed 5 feet out of the bulette's space into an unoccupied",
            "space of the creature's choice. If no unoccupied space",
            "is available, the creature instead is knocked prone in",
            "the bulette's space.",
        ]),
    }],
    traits : [{
        name : "Plated Protection",
        description : desc([
            "The bulette's caregiver can ride on he bulette while the bulette burrows",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["deinonychus"] = {
	name : "Deinonychus",
	source : ["BMC", 12],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 2,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Overwhelming Attack (2 Ferocity)",
        description : desc([
            "The deinonychus makes a signature attack. On a hit, the attack deals an",
            "extra PB damage, and the target can't take reactions until the",
            "start of the deinonychus's next turn.",
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
            "negate an attempt to hide.",
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
            "A creature knocked prone by this feature can't stand up",
            "until they are no longer grappled. If the deinonychus attacks or",
            "uses Keep them Down on another target, the grapple ends.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["dragon wyrmling"] = {
	name : "Dragon Wyrmling",
	source : ["BMC", 13],
	size : 3,
	type : "Dragon",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "15+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
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
            "the attack is of the type associated with the wyrmling's lineage",
            "instead of piercing damage.",
        ]),
    }, {
        name : "3rd Level: Frightful Presence (5 Ferocity)",
        description : desc([
            "Each creature of",
            "the wyrmling's choice that is within 10 feet of the wyrmling",
            "and aware of them must succeed on a DC 10 plus PB Wisdom",
            "saving throw or become frightened of the wyrmling for 1",
            "minute. A creature can repeat the saving throw at the end of",
            "each of their turns, ending the effect on themself on a success.",
            "If a creature's saving throw is successful or the effect ends for",
            "them, the creature is immune to the wyrmling's Frightful Presence ",
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
            "by the wyrmling's Draconic Lineage trait.",
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
            "The wyrmling's caregiver has resistance to",
            "the damage type associated with their Draconic Lineage, and",
            "takes no damage from the wyrmling's Breath Weapon action.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["earth elemental"] = {
	name : "Earth Elemental",
	source : ["BMC", 14],
	size : 2,
	type : "Elemental",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "15+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
    speed : ["30 ft", "30 ft Burrow"],
    scores : [16, 8, 15, 5, 10, 8],
    saves : ["", "", "Prof", "", "", ""],
    skills : {
        "Athletics" : 5,
    },
    damage_immunities : "Poison",
    condition_immunities : ["Petrified", "Poisoned"],
    senses : ["Darkvision 60 ft", "Tremorsense 30 ft"],
    proficiencyBonus : 2,
    proficiencyBonusLinked : true,
    attacksAction : 1,
    attacks : [{
        name : "Slam (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Bludgeoning"],
        range : "Melee (5 ft)",
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
            "prone. The elemental's caregiver automatically succeeds on",
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
            "from a fall after being thrown, they can negate the damage",
            "with a successful DC 15 Dexterity saving throw.",
        ]),
    }],
    trait : [{
        name : "Earth Glide",
        description : desc([
            "The elemental can burrow through nonmagical,",
            "unworked earth and stone. While doing so, the elemental",
            "doesn't disturb the material they move through. While they",
            "use Earth Glide, the elemental can't be used as a mount.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["gelatinous cube"] = {
	name : "Gelatinous Cube",
	source : ["BMC", 15],
	size : 2,
	type : "Ooze",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "11+Prof",
	hp : 8,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
    speed : ["30 ft"],
    scores : [16, 8, 16, 5, 10, 8],
    saves : ["", "", "Prof", "", "", ""],
    skills : {
        "Stealth" : 1,
    },
    damage_immunities : "Acid",
    condition_immunities : ["Blinded", "Deafened", "Prone"],
    senses : ["Blindsight 60 ft (Blind Beyond this Radius)"],
    proficiencyBonus : 2,
    proficiencyBonusLinked : true,
    attacksAction : 1,
    attacks : [{
        name : "Pseudopod (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Acid"],
        range : "Melee (5 ft)",
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
            "from the attack can't regain hit points until the start of your",
            "next turn.",
        ]),
    }, {
        name : "3rd Level: Slime Shower (5 Ferocity)",
        description : desc([
            "The cube spins rapidly,",
            "raining a shower of sticky, acidic slime around them. Each",
            "creature within 5 feet of the cube must succeed on a DC 10",
            "plus PB Dexterity saving throw or take 1d6 acid damage and",
            "have their speed reduced to 0 until the start of the cube's",
            "next turn. The cube's caregiver automatically succeeds on this",
            "saving throw.",
        ]),
    }, {
        name : "5th Level: Engulf (8 Ferocity)",
        description : desc([
            "The cube attempts to pull a",
            "Large or smaller creature within 5 feet of them into their body.",
            "That creature must make a DC 10 plus PB Dexterity saving",
            "throw. On a failure, the target enters the cube's space without",
            "provoking opportunity attacks, takes PBd6 acid damage, and is",
            "engulfed. On a success, a creature takes half as much damage,",
            "doesn't move, and isn't engulfed.",
            "An engulfed creature can't breathe, is restrained, and takes",
            "PBd6 acid damage at the start of each of the cube's turns.",
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
            "The cube's caregiver can enter a space occupied",
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
            "cube that has neither moved nor attacked. A creature that tries",
            "to enter the cube's space while unaware of the cube takes 3",
            "(1d6) acid damage and can't enter the space.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(8 + beaLvl * 8);
			HDobj.altStr.push(" = 8 as a base\n + " + (beaLvl * 8) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["giant spider"] = {
	name : "Giant Spider",
	source : ["BMC", 16],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 6,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 2,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Destabilizing Attack (2 Ferocity)",
        description : desc([
            "The spider makes",
            "a signature attack. On a hit, the attack deals its normal effects,",
            "and the target has disadvantage on the next attack roll they",
            "make before the start of the spider's next turn.",
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
            "While the spider's caregiver is",
            "within 5 feet of it, the spider can coat the bottom of the caregiver's",
            "feet or footwear in a selective adhesive. Tis allows the",
            "caregiver to move up, down, and across vertical surfaces and",
            "upside down along ceilings, while leaving their hands free and",
            "giving the caregiver a climbing speed equal to their walking",
            "speed. The adhesive wears of after 10 minutes.",
        ]),
    }],
    trait : [{
        name : "Spider Climb",
        description : desc([
            "The spider can climb difficult surfaces,",
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
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(6 + beaLvl * 6);
			HDobj.altStr.push(" = 6 as a base\n + " + (beaLvl * 6) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["giant toad"] = {
	name : "Giant Toad",
	source : ["BMC", 17],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Bludgeoning"],
        range : "Melee (5 ft)",
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
            "attack. On a hit, the attack deals its normal effects, and the",
            "toad can jump up to 20 feet in any direction without provoking",
            "opportunity attacks. If the target of the attack is Large or",
            "smaller, the toad brings the target with them.",
        ]),
    }, {
        name : "5th Level: Swallow (8 Ferocity)",
        description : desc([
            "The toad attempts to swallow",
            "a Medium or smaller creature within 5 feet of them, which",
            "must make a DC 10 plus PB Dexterity saving throw. On a failure,",
            "the target takes PBd6 bludgeoning damage and is swallowed.",
            "On a success, the target takes half as much damage and",
            "isn't swallowed.",
            "A swallowed target is blinded and restrained, they have total",
            "cover against attacks and other effects outside the toad, and",
            "they take PBd6 acid damage at the start of each of the toad's",
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
            "While the toad's caregiver",
            "is within 5 feet of the toad, the toad can use a bonus action",
            "to coat a melee weapon held by the caregiver with poison",
            "secreted from the toad's skin. The poison lasts for 1 hour or",
            "until the weapon deals damage as part of an attack. When a",
            "creature takes damage from the weapon, they must succeed",
            "on a DC 10 + PB Constitution saving throw or become poisoned",
            "for 1 minute. The creature can repeat the saving throw",
            "at the end of each of their turns, ending the effect on themself",
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
            "The toad's long jump is up to 20 feet and",
            "their high jump is up to 10 feet, with or without a running start.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["giant weasel"] = {
	name : "Giant Weasel",
	source : ["BMC", 18],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 2,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Overwhelming Attack (2 Ferocity)",
        description : desc([
            "The weasel",
            "makes a signature attack. On a hit, the attack deals an extra PB",
            "damage, and the target can't take reactions until the start of",
            "the weasel's next turn.",
        ]),
    }, {
        name : "3rd Level: Clamp Down (5 Ferocity)",
        description : desc([
            "The weasel makes a",
            "signature attack. On a hit, the attack deals its normal effects,",
            "and the target is grappled (escape DC 10 plus PB). While",
            "grappled, the target is restrained and the weasel can't bite",
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
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["hell hound"] = {
	name : "Hell Hound",
	source : ["BMC", 19],
	size : 3,
	type : "Fiend",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Lava Spittle (2 Ferocity)",
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
            "The hound's caregiver can talk to",
            "the hound about a specific course of action that the caregiver",
            "plans to take within the next 30 minutes, tapping into divinatory",
            "power through the hound's connection to the infernal",
            "realm. After 1 minute, the hound then gives a response based",
            "on its own objective prophetic sense of the outcome: one",
            "bark for good results, two barks for bad results, three barks for",
            "both good and bad results, and no barks for results that aren't",
            "especially good or bad.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["mimic"] = {
	name : "Mimic",
	source : ["BMC", 20],
	size : 3,
	type : "Monstrosity",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Distracting Attack (2 Ferocity)",
        description : desc([
            "The mimic makes",
            "a signature attack. On a hit, the attack deals its normal effects,",
            "and the next attack made against the target before the start of",
            "the mimic's next turn has advantage.",
        ]),
    }, {
        name : "3rd Level: Adhesive Pseudopods (5 Ferocity)",
        description : desc([
            "The mimic",
            "attempts to touch each creature of their choice within 5 feet of",
            "them. Each target must succeed on a DC 10 plus PB Dexterity",
            "saving throw or be grappled (escape DC 10 plus PB).",
        ]),
    }, {
        name : "5th Level: I'm You (8 Ferocity)",
        description : desc([
            "The mimic uses their",
            "Shapechanger trait to polymorph into one Large or smaller",
            "creature they can see within 5 feet of them, with this form",
            "lasting until the start of the mimic's next turn. Other than size,",
            "the mimic's statistics do not change. After transforming, the",
            "mimic can make a signature attack against the creature whose",
            "form they have taken, and that creature must also make a DC",
            "10 plus PB Wisdom saving throw. On a failure, the creature",
            "has disadvantage on attack rolls and saving throws, and attacks",
            "against the creature have advantage, until the start of the mimic's next turn.",
        ]),
    }, {
        name : "Wearable Companion (Bonus Action)",
        description : desc([
            "While the mimic is within 5 feet of",
            "their caregiver, the mimic can cover the caregiver's body and",
            "take on the appearance of clothing. While wearing the mimic,",
            "the caregiver can change the appearance of their clothing at",
            "will (no action required) as long as they are not incapacitated,",
            "and has advantage on Dexterity (Stealth) checks. Any attack",
            "that hits the caregiver also hits the mimic, and vice versa, with",
            "both taking the full damage and effect of the attack.",
            "While worn in this way, the mimic can't move or take actions",
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
            "wearing or carrying isn't transformed. The mimic reverts to",
            "their true form if they die.",
        ]),
    }, {
        name : "False Appearance (Object Form Only)",
        description : desc([
            "While the mimic",
            "remains motionless, they are indistinguishable from an ordinary object.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["owlbear"] = {
	name : "Owlbear",
	source : ["BMC", 21],
	size : 2,
	type : "Monstrosity",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Claw (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Slashing"],
        range : "Melee (5 ft)",
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
            "The owlbear attempts to",
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
            "battle cry. If the owlbear's caregiver can hear the cry, the caregiver",
            "gains 5 times PB temporary hit points.",
        ])
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["sporeling"] = {
	name : "Sporeling",
	source : ["BMC", 22],
	size : 2,
	type : "Plant",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
    speed : ["40 ft"],
    scores : [8, 16, 15, 5, 12, 12],
    saves : ["", "", "Prof", "", "", ""],
    damage_immunities : ["Acid", "Poison"],
    condition_immunities : "Poisoned",
    skills : {
        "Perception" : 3,
    },
    senses : ["Darkvision 60 ft "],
    proficiencyBonus : 2,
    proficiencyBonusLinked : true,
    attacksAction : 1,
    attacks : [{
        name : "Corrupting Cough (Signature Attack)",
        ability : 2,
        damage : [1, 6, "Acid"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Destabilizing Attack (2 Ferocity)",
        description : desc([
            "The sporeling",
            "makes a signature attack. On a hit, the attack deals its normal",
            "effects, and the target has disadvantage on the next attack roll",
            "they make before the start of the sporeling's next turn.",
        ]),
    }, {
        name : "3rd Level: Spore Burst (5 Ferocity)",
        description : desc([
            "Each creature of the",
            "sporeling's choice within 5 feet of them must succeed on a",
            "DC 10 plus PB Constitution saving throw or become poisoned",
            "until the start of the sporeling's next turn.",
        ]),
    }, {
        name : "5th Level: Hallucinogenic Spores (8 Ferocity)",
        description : desc([
            "Each enemy",
            "within 10 feet of the sporeling must make a DC 10 plus PB",
            "Wisdom saving throw. On a failure, the sporeling chooses",
            "whether the target creature uses their reaction to make a",
            "melee attack against another creature of the sporeling's choice",
            "within the target creature's reach, or whether the target creature falls prone.",
        ]),
    }, {
        name : "Invigorating Spores (Bonus Action) (1/Long Rest)",
        description : desc([
            "While the sporeling's",
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
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}


CreatureList["worg"] = {
	name : "Worg",
	source : ["BMC", 23],
	size : 2,
	type : "Monstrosity",
	alignment : "Unaligned",
	companion : ["beastheart companion", "beastheart companion protector"],
	companionApply : "beastheart companion",
	ac : "13+Prof",
	hp : 7,
	hd : [1, 8],
	hdLinked : ["beastheart"],
	challengeRating : "20",
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
        name : "Bite (Signature Attack)",
        ability : 1,
        damage : [1, 6, "Piercing"],
        range : "Melee (5 ft)",
        description : "",
        modifiers : ["", "Prof"],
        abilitytodamage : false,
    }],
    features : [{
        name : "1st Level: Overwhelming Attack (2 Ferocity)",
        description : desc([
            "Te worg makes",
            "a signature attack. On a hit, the attack deals an extra PB",
            "damage, and the target can't take reactions until the start of the",
            "worg's next turn.",
        ]),
    }, {
        name : "3rd Level: Brutal Charge (5 Ferocity)",
        description : desc([
            "Te worg moves up",
            "to their speed without provoking opportunity attacks. During",
            "or at the end of this move, they can make a signature attack",
            "against one target.",
        ]),
    }, {
        name : "5th Level: Bite Frenzy (8 Ferocity)",
        description : desc([
            "Te worg makes bite",
            "attacks against PB creatures of their choice within 5 feet of",
            "them. On a hit, a target is knocked prone.",
        ]),
    }],
    trait : [{
        name : "Move as One",
        description : desc([
            "While the worg's caregiver is mounted on the",
            "worg, opportunity attacks against the worg or their caregiver",
            "are made with disadvantage. Te worg's caregiver can mount",
            "or dismount the worg by spending 5 feet of movement.",
        ]),
    }],
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.beastheart) return;
			var beaLvl = classes.known.beastheart.level;
			HDobj.alt.push(7 + beaLvl * 7);
			HDobj.altStr.push(" = 7 as a base\n + " + (beaLvl * 7) + " from caregiver's level");
		},
		setAltHp : true,
		hpForceRecalc : true
	},
}