const itemFileRenameMap = {
  "assets/minecraft/textures/item/golden_apple.png": "apple_golden.png",
  "assets/minecraft/textures/item/beef.png": "beef_raw.png",
  "assets/minecraft/textures/item/cooked_beef.png": "beef_cooked.png",
  "assets/minecraft/textures/item/oak_boat.png": "boat.png",
  "assets/minecraft/textures/item/bow.png": "bow_standby.png",
  "assets/minecraft/textures/item/book.png": "book_normal.png",
  "assets/minecraft/textures/item/enchanted_book.png": "book_enchanted.png",
  "assets/minecraft/textures/item/written_book.png": "book_writable.png",
  "assets/minecraft/textures/item/bucket.png": "bucket_empty.png",
  "assets/minecraft/textures/item/cooked_chicken.png": "chicken_cooked.png",
  "assets/minecraft/textures/item/chicken.png": "chicken_raw.png",
  "assets/minecraft/textures/item/lava_bucket.png": "bucket_lava.png",
  "assets/minecraft/textures/item/milk_bucket.png": "bucket_milk.png",
  "assets/minecraft/textures/item/water_bucket.png": "bucket_water.png",
  "assets/minecraft/textures/item/golden_carrot.png": "carrot_golden.png",
  "assets/minecraft/textures/item/popped_chorus_fruit.png": "chorus_fruit_popped.png",
  "assets/minecraft/textures/item/acacia_door.png": "door_acacia.png",
  "assets/minecraft/textures/item/birch_door.png": "door_birch.png",
  "assets/minecraft/textures/item/dark_oak_door.png": "door_dark_oak.png",
  "assets/minecraft/textures/item/iron_door.png": "door_iron.png",
  "assets/minecraft/textures/item/jungle_door.png": "door_jungle.png",
  "assets/minecraft/textures/item/spruce_door.png": "door_spruce.png",
  "assets/minecraft/textures/item/oak_door.png": "door_wood.png",
  "assets/minecraft/textures/item/black_dye.png": "dye_powder_black.png",
  "assets/minecraft/textures/item/blue_dye.png": "dye_powder_blue.png",
  "assets/minecraft/textures/item/brown_dye.png": "dye_powder_brown.png",
  "assets/minecraft/textures/item/cyan_dye.png": "dye_powder_cyan.png",
  "assets/minecraft/textures/item/gray_dye.png": "dye_powder_gray.png",
  "assets/minecraft/textures/item/green_dye.png": "dye_powder_green.png",
  "assets/minecraft/textures/item/light_blue_dye.png": "dye_powder_light_blue.png",
  "assets/minecraft/textures/item/lime_dye.png": "dye_powder_lime.png",
  "assets/minecraft/textures/item/magenta_dye.png": "dye_powder_magenta.png",
  "assets/minecraft/textures/item/orange_dye.png": "dye_powder_orange.png",
  "assets/minecraft/textures/item/pink_dye.png": "dye_powder_pink.png",
  "assets/minecraft/textures/item/purple_dye.png": "dye_powder_purple.png",
  "assets/minecraft/textures/item/red_dye.png": "dye_powder_red.png",
  "assets/minecraft/textures/item/light_gray_dye.png": "dye_powder_silver.png",
  "assets/minecraft/textures/item/white_dye.png": "dye_powder_white.png",
  "assets/minecraft/textures/item/yellow_dye.png": "dye_powder_yellow.png",
  "assets/minecraft/textures/item/fire_charge.png": "fireball.png",
  "assets/minecraft/textures/item/firework_rocket.png": "fireworks.png",
  "assets/minecraft/textures/item/firework_star.png": "fireworks_charge.png",
  "assets/minecraft/textures/item/firework_star_overlay.png": "fireworks_charge_overlay.png",
  "assets/minecraft/textures/item/tropical_fish.png": "fish_clownfish_raw.png",
  "assets/minecraft/textures/item/fishing_rod.png": "fishing_rod_uncast.png",
  "assets/minecraft/textures/item/cooked_cod.png": "fish_cod_cooked.png",
  "assets/minecraft/textures/item/cod.png": "fish_cod_uncooked.png",
  "assets/minecraft/textures/item/pufferfish.png": "fish_pufferfish_raw.png",
  "assets/minecraft/textures/item/cooked_salmon.png": "fish_salmon_cooked.png",
  "assets/minecraft/textures/item/salmon.png": "fish_salmon_raw.png",
  "assets/minecraft/textures/item/golden_axe.png": "gold_axe.png",
  "assets/minecraft/textures/item/golden_boots.png": "gold_boots.png",
  "assets/minecraft/textures/item/golden_chestplate.png": "gold_chestplate.png",
  "assets/minecraft/textures/item/golden_helmet.png": "gold_helmet.png",
  "assets/minecraft/textures/item/golden_hoe.png": "gold_hoe.png",
  "assets/minecraft/textures/item/golden_horse_armor.png": "gold_horse_armor.png",
  "assets/minecraft/textures/item/golden_leggings.png": "gold_leggings.png",
  "assets/minecraft/textures/item/golden_pickaxe.png": "gold_pickaxe.png",
  "assets/minecraft/textures/item/golden_shovel.png": "gold_shovel.png",
  "assets/minecraft/textures/item/golden_sword.png": "gold_sword.png",
  "assets/minecraft/textures/item/map.png": "map_empty.png",
  "assets/minecraft/textures/item/filled_map.png": "map_filled.png",
  "assets/minecraft/textures/item/filled_map_markings.png": "map_filled_markings.png",
  "assets/minecraft/textures/item/glistering_melon_slice.png": "melon_speckled.png",
  "assets/minecraft/textures/item/melon_slice.png": "melon.png",
  "assets/minecraft/textures/item/melon_seeds.png": "seeds_melon.png",
  "assets/minecraft/textures/item/minecart.png": "minecart_normal.png",
  "assets/minecraft/textures/item/chest_minecart.png": "minecart_chet.png",
  "assets/minecraft/textures/item/command_block_minecart.png": "minecart_command_block.png",
  "assets/minecraft/textures/item/furnace_minecart.png": "minecart_furnace.png",
  "assets/minecraft/textures/item/hopper_minecart.png": "minecart_hopper.png",
  "assets/minecraft/textures/item/tnt_minecart.png": "minecart_tnt.png",
  "assets/minecraft/textures/item/cooked_mutton.png": "mutton_cooked.png",
  "assets/minecraft/textures/item/mutton.png": "mutton_raw.png",
  "assets/minecraft/textures/item/nether_brick.png": "netherbrick.png",
  "assets/minecraft/textures/item/cooked_porkchop.png": "porkchop_cooked.png",
  "assets/minecraft/textures/item/porkchop.png": "porkchop_raw.png",
  "assets/minecraft/textures/item/baked_potato.png": "potato_baked.png",
  "assets/minecraft/textures/item/potion.png": "potion_bottle_empty.png",
  "assets/minecraft/textures/item/cooked_rabbit.png": "rabbit_cooked.png",
  "assets/minecraft/textures/item/rabbit.png": "rabbit_raw.png",
  "assets/minecraft/textures/item/redstone.png": "redstone_dust.png",
  "assets/minecraft/textures/item/sugar_cane.png": "reeds.png",
  "assets/minecraft/textures/item/wheat_seeds.png": "seeds_wheat.png",
  "assets/minecraft/textures/item/oak_sign.png": "sign.png",
  "assets/minecraft/textures/item/fermented_spider_eye.png": "spider_eye_fermented.png",
  "assets/minecraft/textures/item/pumpkin_seeds.png": "seeds_pumpkin.png",
  "assets/minecraft/textures/item/totem_of_undying.png": "totem.png",
  "assets/minecraft/textures/item/music_disc_11.png": "record_11.png",
  "assets/minecraft/textures/item/music_disc_13.png": "record_13.png",
  "assets/minecraft/textures/item/music_disc_blocks.png": "record_blocks.png",
  "assets/minecraft/textures/item/music_disc_cat.png": "record_cat.png",
  "assets/minecraft/textures/item/music_disc_chirp.png": "record_chirp.png",
  "assets/minecraft/textures/item/music_disc_far.png": "record_far.png",
  "assets/minecraft/textures/item/music_disc_mellohi.png": "record_mall.png",
  "assets/minecraft/textures/item/music_disc_stal.png": "record_mellohi.png",
  "assets/minecraft/textures/item/music_disc_stard.png": "record_stal.png",
  "assets/minecraft/textures/item/music_disc_wait.png": "record_stard.png",
  "assets/minecraft/textures/item/music_disc_ward.png": "record_wait.png",
};

const blockFileRenameMap = {
  "assets/minecraft/textures/block/anvil.png": "anvil_base.png",
"assets/minecraft/textures/block/anvil_top.png": "anvil_top_damaged_0.png",
"assets/minecraft/textures/block/chipped_anvil_top.png": "anvil_top_damaged_1.png",
"assets/minecraft/textures/block/damaged_anvil_top.png": "anvil_top_damaged_2.png",
"assets/minecraft/textures/block/bricks.png": "brick.png",
"assets/minecraft/textures/block/mossy_cobblestone.png": "cobblestone_mossy.png",
"assets/minecraft/textures/block/cocoa_stage0.png": "cocoa_stage_0.png",
"assets/minecraft/textures/block/cocoa_stage1.png": "cocoa_stage_1.png",
"assets/minecraft/textures/block/cocoa_stage2.png": "cocoa_stage_2.png",
"assets/minecraft/textures/block/comparator.png": "comparator_off.png",
"assets/minecraft/textures/block/dead_bush.png": "deadbush.png",
"assets/minecraft/textures/block/podzol_side.png": "dirt_podzol_side.png",
"assets/minecraft/textures/block/podzol_top.png": "dirt_podzol_top.png",
"assets/minecraft/textures/block/dispenser_front.png": "dispenser_front_horizontal.png",
"assets/minecraft/textures/block/acacia_door_bottom.png": "door_acacia_lower.png",
"assets/minecraft/textures/block/acacia_door_top.png": "door_acacia_upper.png",
"assets/minecraft/textures/block/birch_door_bottom.png": "door_birch_lower.png",
"assets/minecraft/textures/block/birch_door_top.png": "door_birch_upper.png",
"assets/minecraft/textures/block/dark_oak_door_bottom.png": "door_dark_oak_lower.png",
"assets/minecraft/textures/block/dark_oak_door_top.png": "door_dark_oak_upper.png",
"assets/minecraft/textures/block/iron_door_bottom.png": "door_iron_lower.png",
"assets/minecraft/textures/block/iron_door_top.png": "door_iron_upper.png",
"assets/minecraft/textures/block/jungle_door_bottom.png": "door_jungle_lower.png",
"assets/minecraft/textures/block/jungle_door_top.png": "door_jungle_upper.png",
"assets/minecraft/textures/block/spruce_door_bottom.png": "door_spruce_lower.png",
"assets/minecraft/textures/block/spruce_door_top.png": "door_spruce_upper.png",
"assets/minecraft/textures/block/oak_door_bottom.png": "door_wood_lower.png",
"assets/minecraft/textures/block/oak_door_top.png": "door_wood_upper.png",
"assets/minecraft/textures/block/dropper_front.png": "dropper_front_horizontal.png",
"assets/minecraft/textures/block/end_portal_frame_eye.png": "endframe_eye.png",
"assets/minecraft/textures/block/end_portal_frame_side.png": "endframe_side.png",
"assets/minecraft/textures/block/end_portal_frame_top.png": "endframe_top.png",
"assets/minecraft/textures/block/fire_0.png": "fire_layer_0.png",
"assets/minecraft/textures/block/fire_1.png": "fire_layer_1.png",
"assets/minecraft/textures/block/furnace_front.png": "furnace_front_off.png",
"assets/minecraft/textures/block/grass_block_side.png": "grass_side.png",
"assets/minecraft/textures/block/grass_block_side_overlay.png": "grass_side_overlay.png",
"assets/minecraft/textures/block/grass_block_snow.png": "grass_side_snowed.png",
"assets/minecraft/textures/block/grass_block_top.png": "grass_top.png",
"assets/minecraft/textures/block/item_frame.png": "itemframe_background.png",
"assets/minecraft/textures/block/nether_bricks.png": "nether_brick.png",
"assets/minecraft/textures/block/nether_wart_stage0.png": "nether_wart_stage_0.png",
"assets/minecraft/textures/block/nether_wart_stage1.png": "nether_wart_stage_1.png",
"assets/minecraft/textures/block/nether_wart_stage2.png": "nether_wart_stage_2.png",
"assets/minecraft/textures/block/note_block.png": "noteblock.png",
"assets/minecraft/textures/block/piston_top.png": "piston_top_normal.png",
"assets/minecraft/textures/block/potatoes_stage0.png": "potatoes_stage_0.png",
"assets/minecraft/textures/block/potatoes_stage1.png": "potatoes_stage_1.png",
"assets/minecraft/textures/block/potatoes_stage2.png": "potatoes_stage_2.png",
"assets/minecraft/textures/block/potatoes_stage3.png": "potatoes_stage_3.png",
"assets/minecraft/textures/block/activator_rail.png": "rail_activator.png",
"assets/minecraft/textures/block/activator_rail_on.png": "rail_activator_powered.png",
"assets/minecraft/textures/block/detector_rail.png": "rail_detector.png",
"assets/minecraft/textures/block/detector_rail_on.png": "rail_detector_powered.png",
"assets/minecraft/textures/block/powered_rail.png": "rail_golden.png",
"assets/minecraft/textures/block/powered_rail_on.png": "rail_golden_powered.png",
"assets/minecraft/textures/block/rail.png": "rail_normal.png",
"assets/minecraft/textures/block/rail_corner.png": "rail_normal_turned.png",
"assets/minecraft/textures/block/carved_pumpkin.png": "pumpkin_face_off.png",
"assets/minecraft/textures/block/attatched_pumpkin_stem.png": "pumpkin_stem_connected.png",
"assets/minecraft/textures/block/pumpkin_stem.png": "pumpkin_stem_disconnected.png",
"assets/minecraft/textures/block/nether_quartz_ore.png": "quartz_ore.png",
"assets/minecraft/textures/block/chiseled_quartz_block.png": "qurtz_block_chiseled.png",
"assets/minecraft/textures/block/chiseled_quartz_top.png": "qurtz_block_chiseled_top.png",
"assets/minecraft/textures/block/quartz_pillar.png": "quartz_block_lines.png",
"assets/minecraft/textures/block/quartz_pillar_top.png": "quartz_block_lines_top.png",
"assets/minecraft/textures/block/chiseled_red_sandstone.png": "red_sandstone_carved.png",
"assets/minecraft/textures/block/red_sandstone.png": "red_sandstone_normal.png",
"assets/minecraft/textures/block/cut_red_sandstone.png": "red_sandstone_smooth.png",
"assets/minecraft/textures/block/chiseled_sandstone.png": "sandstone_carved.png",
"assets/minecraft/textures/block/sandstone.png": "sandstone_normal.png",
"assets/minecraft/textures/block/cut_sandstone.png": "sandstone_smooth.png",
"assets/minecraft/textures/block/acacia_log.png": "log_acacia.png",
"assets/minecraft/textures/block/acacia_log_top.png": "log_acacia_top.png",
"assets/minecraft/textures/block/dark_oak_log.png": "log_big_oak.png",
"assets/minecraft/textures/block/dark_oak_log_top.png": "log_big_oak_top.png",
"assets/minecraft/textures/block/birch_log.png": "log_birch.png",
"assets/minecraft/textures/block/birch_log_top.png": "log_birch_top.png",
"assets/minecraft/textures/block/jungle_log.png": "log_jungle.png",
"assets/minecraft/textures/block/jungle_log_top.png": "log_jungle_top.png",
"assets/minecraft/textures/block/oak_log.png": "log_oak.png",
"assets/minecraft/textures/block/oak_log_top.png": "log_oak_top.png",
"assets/minecraft/textures/block/spruce_log.png": "log_spruce.png",
"assets/minecraft/textures/block/spruce_log_top.png": "log_spruce_top.png",
"assets/minecraft/textures/block/torch.png": "torch_on.png",
"assets/minecraft/textures/block/andesite.png": "stone_andesite.png",
"assets/minecraft/textures/block/polished_andesite.png": "stone_andesite_smooth.png",
"assets/minecraft/textures/block/diorite.png": "stone_diorite.png",
"assets/minecraft/textures/block/polished_diorite.png": "stone_diorite_smooth.png",
"assets/minecraft/textures/block/granite.png": "stone_granite.png",
"assets/minecraft/textures/block/polished_granite.png": "stone_granite_smooth.png",
"assets/minecraft/textures/block/smooth_stone.png": "stone_slab_side.png",
"assets/minecraft/textures/block/smooth_stone.png": "stone_slab_top.png",
"assets/minecraft/textures/block/stone_bricks.png": "stonebrick.png",
"assets/minecraft/textures/block/cracked_stone_bricks.png": "stonebrick_cracked.png",
"assets/minecraft/textures/block/mossy_stone_bricks.png": "stonebrick_mossy.png",
"assets/minecraft/textures/block/wheat_stage0.png": "wheat_stage_0.png",
"assets/minecraft/textures/block/wheat_stage1.png": "wheat_stage_1.png",
"assets/minecraft/textures/block/wheat_stage2.png": "wheat_stage_2.png",
"assets/minecraft/textures/block/wheat_stage3.png": "wheat_stage_3.png",
"assets/minecraft/textures/block/wheat_stage4.png": "wheat_stage_4.png",
"assets/minecraft/textures/block/wheat_stage5.png": "wheat_stage_5.png",
"assets/minecraft/textures/block/wheat_stage6.png": "wheat_stage_6.png",
"assets/minecraft/textures/block/wheat_stage7.png": "wheat_stage_7.png",
"assets/minecraft/textures/block/redstone_torch.png": "redstone_torch_on.png",
"assets/minecraft/textures/block/redstone_lamp.png": "redstone_lamp_off.png",
"assets/minecraft/textures/block/packed_ice.png": "ice_packed.png",
"assets/minecraft/textures/block/brown_mushroom.png": "mushroom_block_skin_brown.png",
"assets/minecraft/textures/block/red_mushroom_block.png": "mushroom_block_skin_red.png",
"assets/minecraft/textures/block/mushroom_stem.png": "mushroom_block_skin_stem.png",
"assets/minecraft/textures/block/brown_mushroom.png": "mushroom_brown.png",
"assets/minecraft/textures/block/red_mushroom.png": "mushroom_red.png",
"assets/minecraft/textures/block/acacia_planks.png": "planks_acacia.png",
"assets/minecraft/textures/block/dark_oak_planks.png": "planks_big_oak.png",
"assets/minecraft/textures/block/birch_planks.png": "planks_birch.png",
"assets/minecraft/textures/block/jungle_planks.png": "planks_jungle.png",
"assets/minecraft/textures/block/oak_planks.png": "planks_oak.png",
"assets/minecraft/textures/block/spruce_planks.png": "planks_spruce.png",
"assets/minecraft/textures/block/slime_block.png": "slime.png",
"assets/minecraft/textures/block/tripwire_hook.png": "trip_wire_source.png",
"assets/minecraft/textures/block/tripwire.png": "trip_wire.png",
"assets/minecraft/textures/block/black_wool.png": "wool_colored_black.png",
"assets/minecraft/textures/block/blue_wool.png": "wool_colored_blue.png",
"assets/minecraft/textures/block/brown_wool.png": "wool_colored_brown.png",
"assets/minecraft/textures/block/cyan_wool.png": "wool_colored_cyan.png",
"assets/minecraft/textures/block/gray_wool.png": "wool_colored_gray.png",
"assets/minecraft/textures/block/green_wool.png": "wool_colored_green.png",
"assets/minecraft/textures/block/light_blue_wool.png": "wool_colored_light_blue.png",
"assets/minecraft/textures/block/lime_wool.png": "wool_colored_lime.png",
"assets/minecraft/textures/block/magenta_wool.png": "wool_colored_magenta.png",
"assets/minecraft/textures/block/orange_wool.png": "wool_colored_orange.png",
"assets/minecraft/textures/block/pink_wool.png": "wool_colored_pink.png",
"assets/minecraft/textures/block/purple_wool.png": "wool_colored_purple.png",
"assets/minecraft/textures/block/red_wool.png": "wool_colored_red.png",
"assets/minecraft/textures/block/light_gray_wool.png": "wool_colored_silver.png",
"assets/minecraft/textures/block/white_wool.png": "wool_colored_white.png",
"assets/minecraft/textures/block/yellow_wool.png": "wool_colored_yellow.png",
"assets/minecraft/textures/block/cobweb.png": "web.png",
"assets/minecraft/textures/block/lily_pad.png": "water_lily.png",
"assets/minecraft/textures/block/oak_trapdoor.png": "trapdoor.png",
"assets/minecraft/textures/block/tall_grass_bottom.png": "double_plant_grass_bottom.png",
"assets/minecraft/textures/block/tall_grass_top.png": "double_plant_grass_top.png",
"assets/minecraft/textures/block/grass.png": "tallgrass.png",
"assets/minecraft/textures/block/wet_sponge.png": "sponge_wet.png",
"assets/minecraft/textures/block/acacia_sapling.png": "sapling_acacia.png",
"assets/minecraft/textures/block/birch_sapling.png": "sapling_birch.png",
"assets/minecraft/textures/block/jungle_sapling.png": "sapling_jungle.png",
"assets/minecraft/textures/block/oak_sapling.png": "sapling_oak.png",
"assets/minecraft/textures/block/dark_oak_sapling.png": "sapling_roofed.png",
"assets/minecraft/textures/block/spruce_sapling.png": "sapling_spruce.png",
"assets/minecraft/textures/block/repeater.png": "repeater_off.png",
"assets/minecraft/textures/block/sugar_cane.png": "reeds.png",
"assets/minecraft/textures/block/jack_o_lantern.png": "pumpkin_face_on.png",
"assets/minecraft/textures/block/dark_prismarine.png": "prismarine_dark.png",
"assets/minecraft/textures/block/prismarine.png": "prismarine_rough.png",
"assets/minecraft/textures/block/spawner.png": "mob_spawner.png",
"assets/minecraft/textures/block/attached_melon_stem.png": "melon_stem_connected.png",
"assets/minecraft/textures/block/melon_stem.png": "melon_stem_disconnected.png",
"assets/minecraft/textures/block/terracotta.png": "hardened_clay.png",
"assets/minecraft/textures/block/black_terracotta.png": "hardened_clay_stained_black.png",
"assets/minecraft/textures/block/blue_terracotta.png": "hardened_clay_stained_blue.png",
"assets/minecraft/textures/block/brown_terracotta.png": "hardened_clay_stained_brown.png",
"assets/minecraft/textures/block/cyan_terracotta.png": "hardened_clay_stained_cyan.png",
"assets/minecraft/textures/block/gray_terracotta.png": "hardened_clay_stained_gray.png",
"assets/minecraft/textures/block/green_terracotta.png": "hardened_clay_stained_green.png",
"assets/minecraft/textures/block/light_blue_terracotta.png": "hardened_clay_stained_light_blue.png",
"assets/minecraft/textures/block/lime_terracotta.png": "hardened_clay_stained_lime.png",
"assets/minecraft/textures/block/magenta_terracotta.png": "hardened_clay_stained_magenta.png",
"assets/minecraft/textures/block/orange_terracotta.png": "hardened_clay_stained_orange.png",
"assets/minecraft/textures/block/pink_terracotta.png": "hardened_clay_stained_pink.png",
"assets/minecraft/textures/block/purple_terracotta.png": "hardened_clay_stained_purple.png",
"assets/minecraft/textures/block/red_terracotta.png": "hardened_clay_stained_red.png",
"assets/minecraft/textures/block/light_gray_terracotta.png": "hardened_clay_stained_silver.png",
"assets/minecraft/textures/block/white_terracotta.png": "hardened_clay_stained_white.png",
"assets/minecraft/textures/block/yellow_terracotta.png": "hardened_clay_stained_yellow.png",
"assets/minecraft/textures/block/farmland.png": "farmland_dry.png",
"assets/minecraft/textures/block/farmland_moist.png": "farmland_wet.png",
"assets/minecraft/textures/block/black_stained_glass.png": "glass_black.png",
"assets/minecraft/textures/block/blue_stained_glass.png": "glass_blue.png",
"assets/minecraft/textures/block/brown_stained_glass.png": "glass_brown.png",
"assets/minecraft/textures/block/cyan_stained_glass.png": "glass_cyan.png",
"assets/minecraft/textures/block/gray_stained_glass.png": "glass_gray.png",
"assets/minecraft/textures/block/green_stained_glass.png": "glass_green.png",
"assets/minecraft/textures/block/light_blue_stained_glass.png": "glass_light_blue.png",
"assets/minecraft/textures/block/lime_stained_glass.png": "glass_lime.png",
"assets/minecraft/textures/block/magenta_stained_glass.png": "glass_magenta.png",
"assets/minecraft/textures/block/orange_stained_glass.png": "glass_orange.png",
"assets/minecraft/textures/block/pink_stained_glass.png": "glass_pink.png",
"assets/minecraft/textures/block/purple_stained_glass.png": "glass_purple.png",
"assets/minecraft/textures/block/red_stained_glass.png": "glass_red.png",
"assets/minecraft/textures/block/light_gray_stained_glass.png": "glass_silver.png",
"assets/minecraft/textures/block/white_stained_glass.png": "glass_white.png",
"assets/minecraft/textures/block/yellow_stained_glass.png": "glass_yellow.png",
"assets/minecraft/textures/block/black_stained_glass_pane_top.png": "glass_pane_top_black.png",
"assets/minecraft/textures/block/blue_stained_glass_pane_top.png": "glass_pane_top_blue.png",
"assets/minecraft/textures/block/brown_stained_glass_pane_top.png": "glass_pane_top_brown.png",
"assets/minecraft/textures/block/cyan_stained_glass_pane_top.png": "glass_pane_top_cyan.png",
"assets/minecraft/textures/block/light_stained_glass_pane_top.png": "glass_pane_top_gray.png",
"assets/minecraft/textures/block/green_stained_glass_pane_top.png": "glass_pane_top_green.png",
"assets/minecraft/textures/block/light_blue_stained_glass_pane_top.png": "glass_pane_top_light_blue.png",
"assets/minecraft/textures/block/lime_stained_glass_pane_top.png": "glass_pane_top_lime.png",
"assets/minecraft/textures/block/magenta_stained_glass_pane_top.png": "glass_pane_top_magenta.png",
"assets/minecraft/textures/block/orange_stained_glass_pane_top.png": "glass_pane_top_orange.png",
"assets/minecraft/textures/block/pink_stained_glass_pane_top.png": "glass_pane_top_pink.png",
"assets/minecraft/textures/block/purple_stained_glass_pane_top.png": "glass_pane_top_purple.png",
"assets/minecraft/textures/block/red_stained_glass_pane_top.png": "glass_pane_top_red.png",
"assets/minecraft/textures/block/light_gray_stained_glass_pane_top.png": "glass_pane_top_silver.png",
"assets/minecraft/textures/block/white_stained_glass_pane_top.png": "glass_pane_top_white.png",
"assets/minecraft/textures/block/yellow_stained_glass_pane_top.png": "glass_pane_top_yellow.png",
"assets/minecraft/textures/block/acacia_leaves.png": "leaves_acacia.png",
"assets/minecraft/textures/block/big_oak_leaves.png": "leaves_big_oak.png",
"assets/minecraft/textures/block/birch_leaves.png": "leaves_birch.png",
"assets/minecraft/textures/block/jungle_leaves.png": "leaves_jungle.png",
"assets/minecraft/textures/block/oak_leaves.png": "leaves_oak.png",
"assets/minecraft/textures/block/spruce_leaves.png": "leaves_spruce.png",
"assets/minecraft/textures/block/allium.png": "flower_allium.png",
"assets/minecraft/textures/block/blue_orchid.png": "flower_blue_orchid.png",
"assets/minecraft/textures/block/dandelion.png": "flower_dandelion.png",
"assets/minecraft/textures/block/azure_bluet.png": "flower_houstonia.png",
"assets/minecraft/textures/block/oxyde_daisy.png": "flower_oxeye_daisy.png",
"assets/minecraft/textures/block/poppy.png": "flower_rose.png",
"assets/minecraft/textures/block/orange_tulip.png": "flower_tulip_orange.png",
"assets/minecraft/textures/block/red_tulip.png": "flower_tulip_red.png",
"assets/minecraft/textures/block/white_tulip.png": "flower_tulip_white.png",
"assets/minecraft/textures/block/pink_tulip.png": "flower_tulip_pink.png",
"assets/minecraft/textures/block/sunflower_back.png": "double_plant_sunflower_back.png",
"assets/minecraft/textures/block/sunflower_bottom.png": "double_plant_sunflower_bottom.png",
"assets/minecraft/textures/block/sunflower_front.png": "double_plant_sunflower_front.png",
"assets/minecraft/textures/block/sunflower_top.png": "double_plant_sunflower_top.png",
"assets/minecraft/textures/block/large_fern_bottom.png": "double_plant_fern_bottom.png",
"assets/minecraft/textures/block/large_fern_top.png": "double_plant_fern_top.png",
"assets/minecraft/textures/block/lilac_bottom.png": "double_plant_syringa_bottom.png",
"assets/minecraft/textures/block/lilac_top.png": "double_plant_syringa.png",
"assets/minecraft/textures/block/peony_bottom.png": "double_plant_bottom.png",
"assets/minecraft/textures/block/peony_top.png": "double_plant_paeonia.png",
"assets/minecraft/textures/block/rose_bush_bottom.png": "double_plant_rose_bottom.png",
"assets/minecraft/textures/block/rose_bush_top.png": "double_plant.png",
};

let selectedFile = null;

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  event.target.classList.remove("drag-over");

  const file = event.dataTransfer.files[0];
  if (file) {
    selectedFile = file;
    document.getElementById("downloadButton").classList.add("hover-effect");
  }
}

function duplicateAndDownload() {
  if (!selectedFile) {
    alert("Please select a file by dragging it into the container or clicking to select.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const zipData = event.target.result;
    const zip = new JSZip();

    JSZip.loadAsync(zipData).then(function (originalZip) {
      const newZip = new JSZip();

      const copyPromises = [];
      originalZip.forEach(function (relativePath, file) {
        if (!file.dir) {
          let newRelativePath = relativePath;
          let fileRenameMapToUse;

          // Check if the file belongs to the "items" folder
          if (relativePath.startsWith("assets/minecraft/textures/item/")) {
            newRelativePath = relativePath.replace("assets/minecraft/textures/item/", "assets/minecraft/textures/items/");
            fileRenameMapToUse = itemFileRenameMap;
          }
          // Check if the file belongs to the "blocks" folder
          else if (relativePath.startsWith("assets/minecraft/textures/block/")) {
            newRelativePath = relativePath.replace("assets/minecraft/textures/block/", "assets/minecraft/textures/blocks/");
            fileRenameMapToUse = blockFileRenameMap;
          }

          if (fileRenameMapToUse && fileRenameMapToUse[relativePath]) {
            const newFilename = fileRenameMapToUse[relativePath];
            newRelativePath = newRelativePath.substring(0, newRelativePath.lastIndexOf("/") + 1) + newFilename;
          }

          copyPromises.push(file.async("uint8array").then(function (data) {
            newZip.file(newRelativePath, data);
          }));
        }
      });

      // Modify the pack.mcmeta file
      const packMetaEntry = originalZip.file("pack.mcmeta");
      if (packMetaEntry) {
        copyPromises.push(packMetaEntry.async("text").then(function (metaText) {
          // Update "pack_format" to 1
          const updatedMetaText = metaText.replace(/"pack_format"\s*:\s*\d+/, '"pack_format": 1');
          newZip.file("pack.mcmeta", updatedMetaText);
        }));
      }

      Promise.all(copyPromises).then(function () {
        newZip.generateAsync({ type: "uint8array" }).then(function (content) {
          const blob = new Blob([content], { type: "application/zip" });
          const fileName = selectedFile.name.replace(".zip", "_1.8.zip");

          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          selectedFile = null;
        });
      });
    });
  };

  reader.readAsArrayBuffer(selectedFile);
}

function openFileExplorer() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

document.getElementById("fileInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    selectedFile = file;
    document.getElementById("downloadButton").classList.add("hover-effect");
  }
});