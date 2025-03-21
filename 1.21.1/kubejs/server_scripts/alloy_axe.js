ServerEvents.recipes((event) => {

  event.custom({
    "type" : "create:sequenced_assembly",
    "ingredient": {
      "item": "allthemodium:unobtainium_axe"
    },
    "loops": 1,
    "results": [
      {
        "item":{
          "id": "allthemodium:alloy_axe",
               }

      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
          },
          {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_axe"
                    }
            }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
          },
          {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_axe"
                    }
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
          },
          {
            "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_axe"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
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
              "id": "kubejs:incomplete_axe"
                    }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_axe"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
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
              "id": "kubejs:incomplete_axe"
            }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_axe"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_axe"
            }
          }
        ]
      },


    ],
    "transitional_item": {
      "item": {
        "id": "kubejs:incomplete_axe"
      }
    }
  });
});
