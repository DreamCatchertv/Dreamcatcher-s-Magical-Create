const removeItems = [
    'ironfurnaces:augment_generator',
    'ironfurnaces:item_heater',
    'create_new_age:thorium',
    'create_new_age:radioactive_thorium',
    'create_new_age:reactor_glass',
    'create_new_age:reactor_rod',
    'create_new_age:reactor_casing',
    'create_new_age:reactor_fuel_acceptor',
    'create_new_age:reactor_heat_vent',
    'create_connected:parallel_gearbox',
    'create_connected:vertical_parallel_gearbox',
    'create_connected:six_way_gearbox',
    'create_connected:vertical_six_way_gearbox',
    'create_connected:brass_gearbox',
    'create_connected:vertical_brass_gearbox',
    'alltheores:uranium_ingot',
    'alltheores:uranium_dust',
    'alltheores:uranium_ore',
    'alltheores:deepslate_uranium_ore',
    'alltheores:other_uranium_ore',
    'alltheores:nether_uranium_ore',
    'alltheores:end_uranium_ore',
    'create:crushed_raw_uranium',
    'geore:ruby_spyglass',
    'geore:topaz_spyglass',
    'geore:sapphire_spyglass',
]

const removeID = [
    'ironfurnaces:augment_generator',
    'ironfurnaces:item_heater',
    'create_new_age:thorium',
    'create_new_age:radioactive_thorium',
    'create_new_age:reactor_glass',
    'create_new_age:reactor_rod',
    'create_new_age:reactor_casing',
    'create_new_age:reactor_fuel_acceptor',
    'create_new_age:reactor_heat_vent',
    'create_connected:parallel_gearbox',
    'create_connected:vertical_parallel_gearbox',
    'create_connected:six_way_gearbox',
    'create_connected:vertical_six_way_gearbox',
    'create_connected:brass_gearbox',
    'create_connected:vertical_brass_gearbox',
    'alltheores:uranium_ingot',
    'alltheores:uranium_dust',
    'alltheores:uranium_ore',
    'alltheores:deepslate_uranium_ore',
    'alltheores:other_uranium_ore',
    'alltheores:nether_uranium_ore',
    'alltheores:end_uranium_ore',
    'create:crushed_raw_uranium',
    'geore:ruby_spyglass',
    'geore:topaz_spyglass',
    'geore:sapphire_spyglass',
]



// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')

/*
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing".
 */

// Listen for the "recipes" server event.
//ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    // Remove all recipes where output is Generator Augment:
//    event.remove({ output: '' })


    // Remove all recipes where output is Factory Augment:
  //  event.remove({ output: '' })

  //  console.log('Hello! The recipe event has fired!')
//})


ServerEvents.recipes(event => {
    removeItems.forEach(item => event.remove({ output: item }));
    removeItems.forEach(item => event.remove({ input: item }));
    removeID.forEach(item => event.remove({ id: item }));
})

