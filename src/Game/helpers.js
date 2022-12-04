

export default function buildProducerStates(producers) {

    let list = [];

    for (let i = 0; i < 10; i++) {
        let sublist = producers.map(() => 0);
        list.push(sublist)
    } 

    return list;

}

