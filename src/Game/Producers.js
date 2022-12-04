


export default function getProducers(images) {
    let producers = [
        {id: 0, cost: 10, bps: 1, unlocked: false, howManyBought: 0, img: images.doctor, name: "Doctor"},
        {id: 1, cost: 100, bps: 5, unlocked: false, howManyBought: 0, img: images.nun, name: "Nun"},
        {id: 2, cost: 500, bps: 25, unlocked: false, howManyBought: 0, img: images.midwife, name: "Midwife"},
        {id: 3, cost: 2500, bps: 125, unlocked: false, howManyBought: 0, img: images.maternity, name: "Maternity Home"},
        {id: 4, cost: 10000, bps: 500, unlocked: false, howManyBought: 0, img: images.nh, name: "Nonnatus House"},
        {id: 4, cost: 90000, bps: 4500, unlocked: false, howManyBought: 0, img: images.poplar, name: "Poplar Hospitals"},
        {id: 4, cost: 400000, bps: 20000, unlocked: false, howManyBought: 0, img: images.london, name: "London Hospitals"},
        {id: 4, cost: 1500000, bps: 75000, unlocked: false, howManyBought: 0, img: images.uk, name: "UK Hospitals"},
        {id: 4, cost: 10000000, bps: 500000, unlocked: false, howManyBought: 0, img: images.europe, name: "Europe Hospitals"},
        {id: 4, cost: 100000000, bps: 5000000, unlocked: false, howManyBought: 0, img: images.world, name: "World Hospitals"},



    ]

    for (let i = 0; i < producers.length; i++) {
        producers[i].id = i;
    }

    return producers;

}