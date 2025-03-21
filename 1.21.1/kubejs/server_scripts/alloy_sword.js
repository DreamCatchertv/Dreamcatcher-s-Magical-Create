ServerEvents.recipes((event) => {

  event.custom({
    "type" : "create:sequenced_assembly",
    "ingredient": {
      "item": "allthemodium:unobtainium_sword"
    },
    "loops": 1,
    "results": [
      {
        "item":{
          "id": "allthemodium:alloy_sword",
               }

      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
          },
          {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_sword"
                    }
            }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
          },
          {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_sword"
                    }
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
          },
          {
            "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_sword"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
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
              "id": "kubejs:incomplete_sword"
                    }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_sword"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
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
              "id": "kubejs:incomplete_sword"
            }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_sword"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_sword"
            }
          }
        ]
      },


    ],
    "transitional_item": {
      "item": {
        "id": "kubejs:incomplete_sword"
      }
    }
  });
});
