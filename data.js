var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.21027332134717902,
          "pitch": 0.0900702581168531,
          "rotation": 0.7853981633974483,
          "target": "1-hab-1"
        },
        {
          "yaw": 0.12251565498840122,
          "pitch": -0.03257759723725506,
          "rotation": 0.7853981633974483,
          "target": "2-hab-2"
        },
        {
          "yaw": 0.026672181437168874,
          "pitch": -0.10627416673645484,
          "rotation": 0,
          "target": "4-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hab-1",
      "name": "HAB 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7804351418277999,
        "pitch": 0.11337057448782772,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.283044085042392,
          "pitch": 0.004700146220560697,
          "rotation": 0,
          "target": "4-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hab-2",
      "name": "HAB 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7084713290678426,
        "pitch": -0.01055341343134586,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.6442971912317343,
          "pitch": 0.07481580364171947,
          "rotation": 0,
          "target": "4-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8115777268764433,
        "pitch": 0.12899163926643453,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.502579756171883,
          "pitch": -0.013889306241869903,
          "rotation": 4.71238898038469,
          "target": "4-pasillo"
        },
        {
          "yaw": -2.550681508492822,
          "pitch": 0.003007423570018375,
          "rotation": 1.5707963267948966,
          "target": "5-salon---cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.01861133088619127,
        "pitch": -0.11608754774478314,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.08039890828692009,
          "pitch": -0.028069592902230767,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.2002019642498425,
          "pitch": -0.17717606854275658,
          "rotation": 4.71238898038469,
          "target": "1-hab-1"
        },
        {
          "yaw": -0.5067314163301617,
          "pitch": -0.04454344269937316,
          "rotation": 4.71238898038469,
          "target": "2-hab-2"
        },
        {
          "yaw": 3.0839854579496313,
          "pitch": 0.01323706213544007,
          "rotation": 0,
          "target": "5-salon---cocina"
        },
        {
          "yaw": -2.8061322087021434,
          "pitch": -0.0017390480557288868,
          "rotation": 0.7853981633974483,
          "target": "3-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salon---cocina",
      "name": "SALON - COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.006203776962074414,
        "pitch": 0.03517742361860243,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -0.03470073953586805,
          "pitch": -0.06295852943438263,
          "rotation": 0,
          "target": "7-terraza"
        },
        {
          "yaw": 0.36473597213991127,
          "pitch": -0.04184971465428333,
          "rotation": 0,
          "target": "6-hab-3"
        },
        {
          "yaw": 2.498825447991547,
          "pitch": 0.005542102587845932,
          "rotation": 0,
          "target": "4-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hab-3",
      "name": "HAB 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9684605368763197,
        "pitch": 0.12136425446045607,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.1464051495184151,
          "pitch": -0.010937801639418154,
          "rotation": 0,
          "target": "7-terraza"
        },
        {
          "yaw": -2.096166092603033,
          "pitch": -0.01590920559243969,
          "rotation": 0,
          "target": "5-salon---cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-terraza",
      "name": "TERRAZA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5876216743054865,
          "pitch": -0.09002038353289166,
          "rotation": 0,
          "target": "8-balcon"
        },
        {
          "yaw": 1.6111042458425722,
          "pitch": -0.035789154885051744,
          "rotation": 0,
          "target": "4-pasillo"
        },
        {
          "yaw": 2.21176308265271,
          "pitch": 0.03651139342296261,
          "rotation": 3.141592653589793,
          "target": "5-salon---cocina"
        },
        {
          "yaw": 0.17714799730308606,
          "pitch": -0.03321177580462731,
          "rotation": 0,
          "target": "6-hab-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balcon",
      "name": "BALCON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5285321681059401,
        "pitch": -0.10656878268907022,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 3.1351289224660537,
          "pitch": 0.06449504917226534,
          "rotation": 0,
          "target": "7-terraza"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
