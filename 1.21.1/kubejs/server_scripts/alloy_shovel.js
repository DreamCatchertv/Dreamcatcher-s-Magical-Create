ServerEvents.recipes((event) => {

  event.custom({
    "type" : "create:sequenced_assembly",
    "ingredient": {
      "item": "allthemodium:unobtainium_shovel"
    },
    "loops": 1,
    "results": [
      {
        "item":{
          "id": "allthemodium:alloy_shovel",
               }

      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
          },
          {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_shovel"
                    }
            }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
          },
          {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_shovel"
                    }
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
          },
          {
            "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_shovel"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
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
              "id": "kubejs:incomplete_shovel"
                    }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_shovel"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
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
              "id": "kubejs:incomplete_shovel"
            }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_shovel"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_shovel"
            }
          }
        ]
      },


    ],
    "transitional_item": {
      "item": {
        "id": "kubejs:incomplete_shovel"
      }
    }
  });
});
