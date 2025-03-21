ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting({
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      A: { item: "allthemodium:alloy_pick" },
      B: { item: "allthemodium:alloy_axe" },
      C: { item: "allthemodium:alloy_shovel" },
      D: { item: "ars_technica:calibrated_precision_mechanism" },
      E: { item: "ars_elemental:mark_of_mastery" },
      F: { item: "mob_grinding_utils:fluid_xp_bucket" },
      G: { item: "cookingforblockheads:cow_jar" },
      H: { item: "allthemodium:alloy_sword" },
      I: { item: "createoreexcavation:diamond_drill" }
    },
    pattern: [
      "ABC",
      "DEF",
      "GHI"
    ],
    result: { count: 1, "id": "allthemodium:alloy_paxel" },
    show_notification: false
  });
});
