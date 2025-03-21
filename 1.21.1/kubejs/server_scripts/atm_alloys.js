ServerEvents.recipes(event => {

    function enchanting_apparatus(output, pedestalItems, reagent, nbt, sourceCost, id){
        let recipe = {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": nbt,
            "pedestalItems": [],
            "reagent": {},
            "result": {
                "count": output.count || 1,
                "id": output.item
            },
            "sourceCost": sourceCost
        };

        if (reagent.tag) {
            recipe.reagent.tag = reagent.tag;
        } else {
            recipe.reagent.item = reagent.item;
        }

        pedestalItems.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.pedestalItems.push(ingredients);
        });

        event.custom(recipe).id(`kubejs:enchanting_apparatus/${id}`);
    }

    enchanting_apparatus(
        {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
        [
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:air_essence'},
            {tag: 'c:ingots/allthemodium'},
            {item: 'ars_nouveau:earth_essence'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:fire_essence'},
            {tag: 'c:ingots/unobtainium'},
            {item: 'ars_nouveau:water_essence'}],
        {item: 'ars_nouveau:wilden_tribute'},
        false,
        10000,
        'unobtainium_allthemodium_alloy_ingot'
    );

    enchanting_apparatus(
        {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
        [
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:air_essence'},
            {tag: 'c:ingots/allthemodium'},
            {item: 'ars_nouveau:earth_essence'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:fire_essence'},
            {tag: 'c:ingots/vibranium'},
            {item: 'ars_nouveau:water_essence'}],
        {item: 'ars_nouveau:wilden_tribute'},
            false,
            10000,
            'vibranium_allthemodium_alloy_ingot'
    );


    enchanting_apparatus(
        {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
        [
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:air_essence'},
            {tag: 'c:ingots/unobtainium'},
            {item: 'ars_nouveau:earth_essence'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:fire_essence'},
            {tag: 'c:ingots/vibranium'},
            {item: 'ars_nouveau:water_essence'}],
        {item: 'ars_nouveau:wilden_tribute'},
            false,
            10000,
            'unobtainium_vibranium_alloy_ingot'
    );

})






