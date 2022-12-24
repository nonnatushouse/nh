export default function getPowerups(images) {
    let powerups = [
        {id: 0, producer: 0, cost: 25, bps: 2, unlocked: false, bought: false, img: images.doctor},
        {id: 1, producer: 1, cost: 100, bps: 2, unlocked: false, bought: false, img: images.nun},
        {id: 2, producer: 2, cost: 500, bps: 2, unlocked: false, bought: false, img: images.midwife},
        {id: 3, producer: 3, cost: 2500, bps: 2, unlocked: false, bought: false, img: images.maternity},
        {id: 4, producer: 4, cost: 10000, bps: 2, unlocked: false, bought: false, img: images.nh},



    ]

    for (let i = 0; i < powerups.length; i++) {
        powerups[i].id = i;
    }

    return powerups;

}