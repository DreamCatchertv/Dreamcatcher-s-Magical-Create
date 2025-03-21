ServerEvents.recipes((event) => {

  event.custom({
    "type" : "create:sequenced_assembly",
    "ingredient": {
      "item": "allthemodium:unobtainium_pickaxe"
    },
    "loops": 1,
    "results": [
      {
        "item":{
          "id": "allthemodium:alloy_pick",
               }

      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          },
          {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
                    }
            }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          },
          {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
                    }
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          },
          {
            "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          },
          {
            "type": "fluid_stack",
            "fluid" : "minecraft:lava",
            "amount" : 500
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
                    }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          },
          {
            "type": "fluid_stack",
            "fluid" : "minecraft:lava",
            "amount" : 500
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
            }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_pick"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_pick"
            }
          }
        ]
      },


    ],
    "transitional_item": {
      "item": {
        "id": "kubejs:incomplete_pick"
      }
    }
  });
});
