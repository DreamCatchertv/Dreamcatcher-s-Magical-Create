ServerEvents.recipes((event) => {

  event.custom({
    "type" : "create:sequenced_assembly",
    "ingredient": {
      "item": "allthemodium:unobtainium_mace"
    },
    "loops": 1,
    "results": [
      {
        "item":{
          "id": "allthemodium:alloy_mace",
               }

      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          },
          {
            "item": "allthemodium:unobtainium_allthemodium_alloy_block"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
                    }
            }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          },
          {
            "item": "allthemodium:unobtainium_vibranium_alloy_block"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
                    }
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          },
          {
            "item": "allthemodium:vibranium_allthemodium_alloy_block"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          },
          {
            "type": "fluid_stack",
            "fluid" : "minecraft:lava",
            "amount" : 1000
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
                    }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
                    }
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          },
          {
            "type": "fluid_stack",
            "fluid" : "minecraft:lava",
            "amount" : 1000
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
            }
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "kubejs:incomplete_mace"
          }
        ],
        "results" : [
          {
            "item": {
              "id": "kubejs:incomplete_mace"
            }
          }
        ]
      },


    ],
    "transitional_item": {
      "item": {
        "id": "kubejs:incomplete_mace"
      }
    }
  });
});
