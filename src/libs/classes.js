import { t } from "../translation/translate";

const classList = [
  {
    name: "Arcanist",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: ["arcanist"],
    },
    skills: [
      {
        skillName: "Arcane Circle",
        currentLvl: 0,
        maxLvl: 4,
        description: "ArcaneCircle_desc",
        specialSkill: "",
      },
      {
        skillName: "Arcane Regeneration",
        currentLvl: 0,
        maxLvl: 2,
        description: "ArcaneRegeneration_desc",
        specialSkill: "",
      },
      {
        skillName: "Bind and Summon",
        currentLvl: 0,
        maxLvl: 1,
        description: "BindAndSummon_desc",
        specialSkill: "",
      },
      {
        skillName: "Emergency Arcanum",
        currentLvl: 0,
        maxLvl: 6,
        description: "EmergencyArcanum_desc",
        specialSkill: "",
      },
      {
        skillName: "Ritual Arcanism",
        currentLvl: 0,
        maxLvl: 1,
        description: "RitualArcanism_desc",
        specialSkill: "Ritual Arcanism",
      },
    ],
  },
  {
    name: "Chimerist",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: true,
      },
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Consume",
        currentLvl: 0,
        maxLvl: 5,
        description: "Consume_desc",
        specialSkill: "",
      },
      {
        skillName: "Feral Speech",
        currentLvl: 0,
        maxLvl: 1,
        description: "FeralSpeech_desc",
        specialSkill: "",
      },
      {
        skillName: "Pathogenesis",
        currentLvl: 0,
        maxLvl: 1,
        description: "Pathogenesis_desc",
        specialSkill: "",
      },
      {
        skillName: "Ritual Chimerism",
        currentLvl: 0,
        maxLvl: 1,
        description: "RitualChimerism_desc",
        specialSkill: "Ritual Chimerism",
      },
      {
        skillName: "Spell Mimic",
        currentLvl: 0,
        maxLvl: 10,
        description: "SpellMimic_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Darkblade",
    book: "core",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: true,
        shields: false,
        melee: true,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Agony",
        currentLvl: 0,
        maxLvl: 5,
        description: "Agony_desc",
        specialSkill: "",
      },
      {
        skillName: "Dark Blood",
        currentLvl: 0,
        maxLvl: 1,
        description: "DarkBlood_desc",
        specialSkill: "",
      },
      {
        skillName: "Heart of Darkness",
        currentLvl: 0,
        maxLvl: 1,
        description: "HeartOfDarkness_desc",
        specialSkill: "",
      },
      {
        skillName: "Painful Lessons",
        currentLvl: 0,
        maxLvl: 3,
        description: "PainfulLessons_desc",
        specialSkill: "",
      },
      {
        skillName: "Shadow Strike",
        currentLvl: 0,
        maxLvl: 5,
        description: "ShadowStrike_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Elementalist",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: true,
      },
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Cataclysm",
        currentLvl: 0,
        maxLvl: 3,
        description: "Cataclysm_desc",
        specialSkill: "",
      },
      {
        skillName: "Elemental Magic",
        currentLvl: 0,
        maxLvl: 10,
        description: "ElementalMagic_desc",
        specialSkill: "",
      },
      {
        skillName: "Magic Artillery",
        currentLvl: 0,
        maxLvl: 3,
        description: "MagicArtillery_desc",
        specialSkill: "",
      },
      {
        skillName: "Ritual Elementalism",
        currentLvl: 0,
        maxLvl: 1,
        description: "RitualElementalism_desc",
        specialSkill: "Ritual Elementalism",
      },
      {
        skillName: "Spellblade",
        currentLvl: 0,
        maxLvl: 4,
        description: "Spellblade_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Entropist",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: true,
      },
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Absorb MP",
        currentLvl: 0,
        maxLvl: 5,
        description: "AbsorbMP_desc",
        specialSkill: "",
      },
      {
        skillName: "Entropic Magic",
        currentLvl: 0,
        maxLvl: 10,
        description: "EntropicMagic_desc",
        specialSkill: "",
      },
      {
        skillName: "Lucky Seven",
        currentLvl: 0,
        maxLvl: 1,
        description: "LuckySeven_desc",
        specialSkill: "",
      },
      {
        skillName: "Ritual Entropism",
        currentLvl: 0,
        maxLvl: 1,
        description: "RitualEntropism_desc",
        specialSkill: "Ritual Entropism",
      },
      {
        skillName: "Stolen Time",
        currentLvl: 0,
        maxLvl: 4,
        description: "StolenTime_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Fury",
    book: "core",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: true,
        shields: false,
        melee: true,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Adrenaline",
        currentLvl: 0,
        maxLvl: 5,
        description: "Adrenaline_desc",
        specialSkill: "",
      },
      {
        skillName: "Frenzy",
        currentLvl: 0,
        maxLvl: 1,
        description: "Frenzy_desc",
        specialSkill: "",
      },
      {
        skillName: "Indomitable Spirit",
        currentLvl: 0,
        maxLvl: 4,
        description: "IndomitableSpirit_desc",
        specialSkill: "",
      },
      {
        skillName: "Provoke",
        currentLvl: 0,
        maxLvl: 5,
        description: "Provoke_desc",
        specialSkill: "",
      },
      {
        skillName: "Withstand",
        currentLvl: 0,
        maxLvl: 5,
        description: "Withstand_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Guardian",
    book: "core",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: true,
        shields: true,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Bodyguard",
        currentLvl: 0,
        maxLvl: 1,
        description: "Bodyguard_desc",
        specialSkill: "",
      },
      {
        skillName: "Defensive Mastery",
        currentLvl: 0,
        maxLvl: 5,
        description: "DefensiveMastery_desc",
        specialSkill: "Defensive Mastery",
      },
      {
        skillName: "Dual Shieldbearer",
        currentLvl: 0,
        maxLvl: 1,
        description: "DualShieldbearer_desc",
        specialSkill: "Dual Shieldbearer",
      },
      {
        skillName: "Fortress",
        currentLvl: 0,
        maxLvl: 5,
        description: "Fortress_desc",
        specialSkill: "Fortress",
      },
      {
        skillName: "Protect",
        currentLvl: 0,
        maxLvl: 1,
        description: "Protect_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Loremaster",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Flash of Insight",
        currentLvl: 0,
        maxLvl: 3,
        description: "FlashOfInsight_desc",
        specialSkill: "",
      },
      {
        skillName: "Focused",
        currentLvl: 0,
        maxLvl: 5,
        description: "Focused_desc",
        specialSkill: "Focused",
      },
      {
        skillName: "Knowledge Is Power",
        currentLvl: 0,
        maxLvl: 1,
        description: "KnowledgeIsPower_desc",
        specialSkill: "",
      },
      {
        skillName: "Quick Assessment",
        currentLvl: 0,
        maxLvl: 6,
        description: "QuickAssessment_desc",
        specialSkill: "",
      },
      {
        skillName: "Trained Memory",
        currentLvl: 0,
        maxLvl: 1,
        description: "TrainedMemory_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Orator",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Condemn",
        currentLvl: 0,
        maxLvl: 4,
        description: "Condemn_desc",
        specialSkill: "",
      },
      {
        skillName: "Encourage",
        currentLvl: 0,
        maxLvl: 6,
        description: "Encourage_desc",
        specialSkill: "",
      },
      {
        skillName: "My Trust In You",
        currentLvl: 0,
        maxLvl: 2,
        description: "MyTrustInYou_desc",
        specialSkill: "",
      },
      {
        skillName: "Persuasive",
        currentLvl: 0,
        maxLvl: 2,
        description: "Persuasive_desc",
        specialSkill: "",
      },
      {
        skillName: "Unexpected Ally",
        currentLvl: 0,
        maxLvl: 1,
        description: "UnexpectedAlly_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Rogue",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 2,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Cheap Shot",
        currentLvl: 0,
        maxLvl: 5,
        description: "CheapShot_desc",
        specialSkill: "",
      },
      {
        skillName: "Dodge",
        currentLvl: 0,
        maxLvl: 3,
        description: "Dodge_desc",
        specialSkill: "Dodge",
      },
      {
        skillName: "High Speed",
        currentLvl: 0,
        maxLvl: 3,
        description: "HighSpeed_desc",
        specialSkill: "",
      },
      {
        skillName: "See You Later",
        currentLvl: 0,
        maxLvl: 1,
        description: "SeeYouLater_desc",
        specialSkill: "",
      },
      {
        skillName: "Soul Steal",
        currentLvl: 0,
        maxLvl: 5,
        description: "SoulSteal_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Sharpshooter",
    book: "core",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: true,
        melee: false,
        ranged: true,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Barrage",
        currentLvl: 0,
        maxLvl: 1,
        description: "Barrage_desc",
        specialSkill: "",
      },
      {
        skillName: "Crossfire",
        currentLvl: 0,
        maxLvl: 1,
        description: "Crossfire_desc",
        specialSkill: "",
      },
      {
        skillName: "Hawkeye",
        currentLvl: 0,
        maxLvl: 5,
        description: "Hawkeye_desc",
        specialSkill: "",
      },
      {
        skillName: "Ranged Weapon Mastery",
        currentLvl: 0,
        maxLvl: 4,
        description: "RangedWeaponMastery_desc",
        specialSkill: "Ranged Weapon Mastery",
      },
      {
        skillName: "Warning Shot",
        currentLvl: 0,
        maxLvl: 4,
        description: "WarningShot_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Spiritist",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Healing Power",
        currentLvl: 0,
        maxLvl: 2,
        description: "HealingPower_desc",
        specialSkill: "",
      },
      {
        skillName: "Ritual Spiritism",
        currentLvl: 0,
        maxLvl: 1,
        description: "RitualSpiritism_desc",
        specialSkill: "Ritual Spiritism",
      },
      {
        skillName: "Spiritual Magic",
        currentLvl: 0,
        maxLvl: 10,
        description: "SpiritualMagic_desc",
        specialSkill: "",
      },
      {
        skillName: "Support Magic",
        currentLvl: 0,
        maxLvl: 1,
        description: "SupportMagic_desc",
        specialSkill: "",
      },
      {
        skillName: "Vismagus",
        currentLvl: 0,
        maxLvl: 1,
        description: "Vismagus_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Tinkerer",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 2,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [
        "tinkerer-alchemy",
        "tinkerer-infusion",
        "tinkerer-magitech",
      ],
    },
    skills: [
      {
        skillName: "Emergency Item",
        currentLvl: 0,
        maxLvl: 1,
        description: "EmergencyItem_desc",
        specialSkill: "",
      },
      {
        skillName: "Gadgets",
        currentLvl: 0,
        maxLvl: 5,
        description: "Gadgets_desc",
        specialSkill: "",
      },
      {
        skillName: "Potion Rain",
        currentLvl: 0,
        maxLvl: 2,
        description: "PotionRain_desc",
        specialSkill: "",
      },
      {
        skillName: "Secret Formula",
        currentLvl: 0,
        maxLvl: 5,
        description: "SecretFormula_desc",
        specialSkill: "",
      },
      {
        skillName: "Visionary",
        currentLvl: 0,
        maxLvl: 5,
        description: "Visionary_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Wayfarer",
    book: "core",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 2,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Faithful Companion",
        currentLvl: 0,
        maxLvl: 5,
        description: "FaithfulCompanion_desc",
        specialSkill: "Faithful Companion",
      },
      {
        skillName: "Resourceful",
        currentLvl: 0,
        maxLvl: 4,
        description: "Resourceful_desc",
        specialSkill: "",
      },
      {
        skillName: "Tavern Talk",
        currentLvl: 0,
        maxLvl: 3,
        description: "TavernTalk_desc",
        specialSkill: "",
      },
      {
        skillName: "Treasure Hunter",
        currentLvl: 0,
        maxLvl: 2,
        description: "TreasureHunter_desc",
        specialSkill: "",
      },
      {
        skillName: "Well-Traveled",
        currentLvl: 0,
        maxLvl: 1,
        description: "WellTraveled_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Weaponmaster",
    book: "core",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: true,
        melee: true,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Bladestorm",
        currentLvl: 0,
        maxLvl: 1,
        description: "Bladestorm_desc",
        specialSkill: "",
      },
      {
        skillName: "Bone Crusher",
        currentLvl: 0,
        maxLvl: 4,
        description: "BoneCrusher_desc",
        specialSkill: "",
      },
      {
        skillName: "Breach",
        currentLvl: 0,
        maxLvl: 3,
        description: "Breach_desc",
        specialSkill: "",
      },
      {
        skillName: "Counterattack",
        currentLvl: 0,
        maxLvl: 1,
        description: "Counterattack_desc",
        specialSkill: "",
      },
      {
        skillName: "Melee Weapon Mastery",
        currentLvl: 0,
        maxLvl: 4,
        description: "MeleeWeaponMastery_desc",
        specialSkill: "Melee Weapon Mastery",
      },
    ],
  },
  {
    name: "Arcanist-Rework",
    book: "rework",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: ["arcanist-rework"],
    },
    skills: [],
  },
  {
    name: "Ace of Cards",
    book: "bonus",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: true,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      custom: [
        "You may choose to permanently increase your maximum Hit Points or Mind Points by 5 (your choice).",
      ],
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Double or Nothing",
        currentLvl: 0,
        maxLvl: 1,
        description: "DoubleOrNothing_desc",
        specialSkill: "",
      },
      {
        skillName: "High or Low",
        currentLvl: 0,
        maxLvl: 1,
        description: "HighOrLow_desc",
        specialSkill: "",
      },
      {
        skillName: "Magic Cards",
        currentLvl: 0,
        maxLvl: 3,
        description: "MagicCards_desc",
        specialSkill: "",
      },
      {
        skillName: "Mulligan",
        currentLvl: 0,
        maxLvl: 5,
        description: "Mulligan_desc",
        specialSkill: "",
      },
      {
        skillName: "Trap Card",
        currentLvl: 0,
        maxLvl: 4,
        description: "TrapCard_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Necromancer",
    book: "bonus",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: true,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      custom: [
        "You may choose to permanently increase your maximum Hit Points or Mind Points by 5 (your choice).",
      ],
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Beyond The Realms Of Death",
        currentLvl: 0,
        maxLvl: 5,
        description: "BeyondTheRealmsOfDeath_desc",
        specialSkill: "",
      },
      {
        skillName: "Children Of The Grave",
        currentLvl: 0,
        maxLvl: 1,
        description: "ChildrenOfTheGrave_desc",
        specialSkill: "",
      },
      {
        skillName: "Fear Is The Key",
        currentLvl: 0,
        maxLvl: 3,
        description: "FearIsTheKey_desc",
        specialSkill: "",
      },
      {
        skillName: "For Whom The Bell Tolls",
        currentLvl: 0,
        maxLvl: 3,
        description: "ForWhomTheBellTolls_desc",
        specialSkill: "",
      },
      {
        skillName: "Rondo Of Nightmare",
        currentLvl: 0,
        maxLvl: 1,
        description: "RondoOfNightmare_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Chanter",
    book: "high",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Magichant",
        currentLvl: 0,
        maxLvl: 10,
        description: "Magichant_desc",
        specialSkill: "",
      },
      {
        skillName: "Resonance",
        currentLvl: 0,
        maxLvl: 3,
        description: "Resonance_desc",
        specialSkill: "",
      },
      {
        skillName: "Siren's Song",
        currentLvl: 0,
        maxLvl: 1,
        description: "SirensSong_desc",
        specialSkill: "",
      },
      {
        skillName: "Sound Barrier",
        currentLvl: 0,
        maxLvl: 5,
        description: "SoundBarrier_desc",
        specialSkill: "",
      },
      {
        skillName: "Vibrato",
        currentLvl: 0,
        maxLvl: 1,
        description: "Vibrato_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Commander",
    book: "high",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: true,
        ranged: true,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Bishop's Edict",
        currentLvl: 0,
        maxLvl: 5,
        description: "BishopsEdict_desc",
        specialSkill: "",
      },
      {
        skillName: "Charging Cavalry",
        currentLvl: 0,
        maxLvl: 5,
        description: "ChargingCavalry_desc",
        specialSkill: "",
      },
      {
        skillName: "Crushing Chariot",
        currentLvl: 0,
        maxLvl: 1,
        description: "CrushingChariot_desc",
        specialSkill: "",
      },
      {
        skillName: "King's Castle",
        currentLvl: 0,
        maxLvl: 4,
        description: "KingsCastle_desc",
        specialSkill: "",
      },
      {
        skillName: "Queen's Gambit",
        currentLvl: 0,
        maxLvl: 6,
        description: "QueensGambit_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Dancer",
    book: "high",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: true,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      custom: [
        "You may choose to permanently increase your maximum Hit Points or Mind Points by 5 (your choice).",
      ],
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Dance",
        currentLvl: 0,
        maxLvl: 10,
        description: "Dance_desc",
        specialSkill: "",
      },
      {
        skillName: "Follow My Lead",
        currentLvl: 0,
        maxLvl: 1,
        description: "FollowMyLead_desc",
        specialSkill: "",
      },
      {
        skillName: "Frenetic Footwork",
        currentLvl: 0,
        maxLvl: 2,
        description: "FreneticFootwork_desc",
        specialSkill: "",
      },
      {
        skillName: "Quick-Change",
        currentLvl: 0,
        maxLvl: 1,
        description: "QuickChange_desc",
        specialSkill: "",
      },
      {
        skillName: "Wardancer",
        currentLvl: 0,
        maxLvl: 5,
        description: "Wardancer_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Symbolist",
    book: "high",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 2,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: ["default"],
    },
    skills: [
      {
        skillName: "Magic Symbols",
        currentLvl: 0,
        maxLvl: 3,
        description: "MagicSymbols_desc",
        specialSkill: "",
      },
      {
        skillName: "Mirage",
        currentLvl: 0,
        maxLvl: 1,
        description: "Mirage_desc",
        specialSkill: "",
      },
      {
        skillName: "Personal Touch",
        currentLvl: 0,
        maxLvl: 5,
        description: "PersonalTouch_desc",
        specialSkill: "",
      },
      {
        skillName: "Symbolic Connection",
        currentLvl: 0,
        maxLvl: 1,
        description: "SymbolicConnection_desc",
        specialSkill: "",
      },
      {
        skillName: "Symbolism",
        currentLvl: 0,
        maxLvl: 10,
        description: "Symbolism_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Esper",
    book: "techno",
    benefits: {
      hpplus: 0,
      mpplus: 5,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Cognitive Focus",
        currentLvl: 0,
        maxLvl: 5,
        description: "CognitiveFocus_desc",
        specialSkill: "",
      },
      {
        skillName: "Hypercognition",
        currentLvl: 0,
        maxLvl: 5,
        description: "Hypercognition_desc",
        specialSkill: "",
      },
      {
        skillName: "Navigator",
        currentLvl: 0,
        maxLvl: 1,
        description: "Navigator_desc",
        specialSkill: "",
      },
      {
        skillName: "Psychic Gifts",
        currentLvl: 0,
        maxLvl: 5,
        description: "PsychicGifts_desc",
        specialSkill: "",
      },
      {
        skillName: "Psychokinesis",
        currentLvl: 0,
        maxLvl: 1,
        description: "Psychokinesis_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Mutant",
    book: "techno",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Akromorphosis",
        currentLvl: 0,
        maxLvl: 3,
        description: "Akromorphosis_desc",
        specialSkill: "",
      },
      {
        skillName: "Biophagy",
        currentLvl: 0,
        maxLvl: 4,
        description: "Biophagy_desc",
        specialSkill: "",
      },
      {
        skillName: "Ecdysis",
        currentLvl: 0,
        maxLvl: 1,
        description: "Ecdysis_desc",
        specialSkill: "",
      },
      {
        skillName: "Genoclepsis",
        currentLvl: 0,
        maxLvl: 2,
        description: "Genoclepsis_desc",
        specialSkill: "",
      },
      {
        skillName: "Theriomorphosis",
        currentLvl: 0,
        maxLvl: 6,
        description: "Theriomorphosis_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Pilot",
    book: "techno",
    benefits: {
      hpplus: 5,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: true,
        ranged: true,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: [],
    },
    skills: [
      {
        skillName: "Compression Tech",
        currentLvl: 0,
        maxLvl: 1,
        description: "CompressionTech_desc",
        specialSkill: "",
      },
      {
        skillName: "Flexible Configuration",
        currentLvl: 0,
        maxLvl: 4,
        description: "FlexibleConfiguration_desc",
        specialSkill: "",
      },
      {
        skillName: "Heart in the Engine",
        currentLvl: 0,
        maxLvl: 3,
        description: "HeartInTheEngine_desc",
        specialSkill: "",
      },
      {
        skillName: "Personal Vehicle",
        currentLvl: 0,
        maxLvl: 5,
        description: "PersonalVehicle_desc",
        specialSkill: "",
      },
      {
        skillName: "Strong Grip",
        currentLvl: 0,
        maxLvl: 1,
        description: "StrongGrip_desc",
        specialSkill: "",
      },
    ],
  },
  {
    name: "Blank Class",
    book: "homebrew",
    benefits: {
      hpplus: 0,
      mpplus: 0,
      ipplus: 0,
      isCustomBenefit: false,
      martials: {
        armor: false,
        shields: false,
        melee: false,
        ranged: false,
      },
      rituals: {
        ritualism: false,
      },
      spellClasses: ["default"],
    },
    skills: [],
  },
];

export const tinkererAlchemy = {
  spellType: "tinkerer-alchemy",
  rank: 1,
  targets: [
    {
      rangeFrom: 1,
      rangeTo: 6,
      effect: t("You or one ally you can see that is present on the scene"),
    },
    {
      rangeFrom: 7,
      rangeTo: 11,
      effect: t("One enemy you can see that is present on the scene"),
    },
    {
      rangeFrom: 12,
      rangeTo: 16,
      effect: t("You and every ally present on the scene"),
    },
    {
      rangeFrom: 17,
      rangeTo: 20,
      effect: t("Every enemy present on the scene"),
    },
  ],
  effects: [
    {
      dieValue: 0,
      effect: t("suffers 20 poison damage"),
    },
    {
      dieValue: 0,
      effect: t("recovers 30 Hit Points"),
    },
    {
      dieValue: 1,
      effect: t(
        "treats their Dexterity and Might dice as if they were one size higher (up to a maximum of d12) until the end of your next turn"
      ),
    },
    {
      dieValue: 2,
      effect: t(
        "treats their Insight and Willpower dice as if they were one size higher (up to a maximum of d12) until the end of your next turn"
      ),
    },
    {
      dieValue: 3,
      effect: t(
        "suffers 20 air damage. This amount increases to 30 damage if you are level 20 or higher, or to 40 damage if you are level 40 or higher"
      ),
    },
    {
      dieValue: 4,
      effect: t(
        "suffers 20 bolt damage. This amount increases to 30 damage if you are level 20 or higher, or to 40 damage if you are level 40 or higher"
      ),
    },
    {
      dieValue: 5,
      effect: t(
        "suffers 20 dark damage. This amount increases to 30 damage if you are level 20 or higher, or to 40 damage if you are level 40 or higher"
      ),
    },
    {
      dieValue: 6,
      effect: t(
        "suffers 20 earth damage. This amount increases to 30 damage if you are level 20 or higher, or to 40 damage if you are level 40 or higher"
      ),
    },
    {
      dieValue: 7,
      effect: t(
        "suffers 20 fire damage. This amount increases to 30 damage if you are level 20 or higher, or to 40 damage if you are level 40 or higher"
      ),
    },
    {
      dieValue: 8,
      effect: t(
        "suffers 20 ice damage. This amount increases to 30 damage if you are level 20 or higher, or to 40 damage if you are level 40 or higher"
      ),
    },
    {
      dieValue: 9,
      effect: t(
        "gains Resistance to air and fire damage until the end of the scene"
      ),
    },
    {
      dieValue: 10,
      effect: t(
        "gains Resistance to bolt and ice damage until the end of the scene"
      ),
    },
    {
      dieValue: 11,
      effect: t(
        "gains Resistance to dark and earth damage until the end of the scene"
      ),
    },
    {
      dieValue: 12,
      effect: t("suffers enraged"),
    },
    {
      dieValue: 13,
      effect: t("suffers poisoned"),
    },
    {
      dieValue: 14,
      effect: t("suffers dazed, shaken, slow and weak"),
    },
    {
      dieValue: 15,
      effect: t("recovers from all status effects"),
    },
    {
      dieValue: 16,
      effect: t("recovers 50 Hit Points and 50 Mind Points"),
    },
    {
      dieValue: 17,
      effect: t("recovers 50 Hit Points and 50 Mind Points"),
    },
    {
      dieValue: 18,
      effect: t("recovers 100 Hit Points"),
    },
    {
      dieValue: 19,
      effect: t("recovers 100 Mind Points"),
    },
    {
      dieValue: 20,
      effect: t("recovers 100 Hit Points and 100 Mind Points"),
    },
  ],
};

export const tinkererInfusion = {
  spellType: "tinkerer-infusion",
  rank: 1,
  effects: [
    {
      infusionRank: 1,
      name: t("Cryo"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **ice**."
      ),
    },
    {
      infusionRank: 1,
      name: t("Pyro"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **fire**."
      ),
    },
    {
      infusionRank: 1,
      name: t("Volt"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **bolt**."
      ),
    },
    {
      infusionRank: 2,
      name: t("Cyclone"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **air**."
      ),
    },
    {
      infusionRank: 2,
      name: t("Exorcism"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **light**."
      ),
    },
    {
      infusionRank: 2,
      name: t("Seismic"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **earth**."
      ),
    },
    {
      infusionRank: 2,
      name: t("Shadow"),
      effect: t(
        "The attack deals 5 extra damage, and its damage becomes **dark**."
      ),
    },
    {
      infusionRank: 3,
      name: t("Vampire"),
      effect: t(
        "Choose one option: you recover an amount of HP equal to half the HP loss suffered by the target of the attack; **or** you recover an amount of MP equal to half the HP loss suffered by the target of the attack. This infusion can only be used if the attack targeted **a single** creature."
      ),
    },
    {
      infusionRank: 3,
      name: t("Venom"),
      effect: t(
        "The attack deals 5 extra damage, its damage becomes **poison**, and each creature hit by the attack suffers **poisoned**."
      ),
    },
  ],
};

export default classList;
