export default function getPowerups(images) {
    let powerups = [
        // {id: 0, producer: 0, cost: 20, sign: "x", bps: 2, unlocked: false, bought: false, img: images.doctor},
        // {id: 0, producer: 0, cost: 50, sign: "+", bps: 1, unlocked: false, bought: false, img: images.doctor},
        // {id: 0, producer: 0, cost: 100, sign: "+", bps: 2, unlocked: false, bought: false, img: images.doctor},
        // {id: 0, producer: 0, cost: 250, sign: "+", bps: 3, unlocked: false, bought: false, img: images.doctor},


        // {id: 1, producer: 1, cost: 1000, sign: "+", bps: 10, unlocked: false, bought: false, img: images.nun},
        // {id: 1, producer: 1, cost: 2000, sign: "+", bps: 10, unlocked: false, bought: false, img: images.nun},
        // {id: 1, producer: 1, cost: 5000, sign: "x", bps: 1.5, unlocked: false, bought: false, img: images.nun},
        // {id: 1, producer: 1, cost: 15000, sign: "+", bps: 50, unlocked: false, bought: false, img: images.nun},
 
        // {id: 2, producer: 2, cost: 20000, sign: "+", bps: 50, unlocked: false, bought: false, img: images.midwife},
        // {id: 2, producer: 2, cost: 50000, sign: "+", bps: 100, unlocked: false, bought: false, img: images.midwife},
        // {id: 2, producer: 2, cost: 100000, sign: "x", bps: 1.5, unlocked: false, bought: false, img: images.midwife},
   
        // {id: 3, producer: 3, cost: 200000, sign: "x", bps: 1.2, unlocked: false, bought: false, img: images.maternity},
        // {id: 3, producer: 3, cost: 300000, sign: "x", bps: 1.5, unlocked: false, bought: false, img: images.maternity},
        // {id: 3, producer: 3, cost: 400000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.maternity},
    
 
        // {id: 0, producer: 0, cost: 600000, sign: "x", bps: 25, unlocked: false, bought: false, img: images.doctor},
        // {id: 1, producer: 1, cost: 600000, sign: "x", bps: 10, unlocked: false, bought: false, img: images.nun},
        // {id: 2, producer: 2, cost: 600000, sign: "x", bps: 5, unlocked: false, bought: false, img: images.midwife},
        // {id: 3, producer: 3, cost: 600000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.maternity},

        // {id: 0, producer: 0, cost: 1500000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.doctor},
        // {id: 1, producer: 1, cost: 1500000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.nun},
        // {id: 2, producer: 2, cost: 1500000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.midwife},
        // {id: 3, producer: 3, cost: 1500000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.maternity},



        {id: 4, producer: 4, cost: 15000000, sign: "x", bps: 2, unlocked: false, bought: false, img: images.nh},

    //     {id: 0, producer: 0, cost: 25, sign: "+", bps: 2, unlocked: false, bought: false, img: images.doctor},
    //     {id: 1, producer: 1, cost: 100, sign: "+", bps: 2, unlocked: false, bought: false, img: images.nun},
    //     {id: 2, producer: 2, cost: 500, sign: "+", bps: 2, unlocked: false, bought: false, img: images.midwife},
    //     {id: 3, producer: 3, cost: 2500, sign: "+", bps: 2, unlocked: false, bought: false, img: images.maternity},
    //     {id: 4, producer: 4, cost: 10000, sign: "+", bps: 2, unlocked: false, bought: false, img: images.nh},



    ]

    for (let i = 0; i < powerups.length; i++) {
        powerups[i].id = i;
    }

    return powerups;

}