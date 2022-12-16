const COUNT_ZERO = 0
const COUNT_ONE = 1
// const COUNT_TWO = 2
const COUNT_THREE = 3


const CHANGE_TIDBIT_SEC = 10 * 1000


export function getStringToShow(totalCount, allProducers, totalTime) {
    if (totalCount === COUNT_ZERO) return [INFO[COUNT_ZERO], false];
    if (totalCount === COUNT_ONE) return [INFO[COUNT_ONE], false];

    if (totalCount === COUNT_THREE) return [INFO[COUNT_THREE], false];


    
    const sec = (totalTime - (totalTime % CHANGE_TIDBIT_SEC )) / CHANGE_TIDBIT_SEC;
    
    let tidbitID = sec % TIDBITS.length;
    console.log(tidbitID)
    return [TIDBITS[tidbitID], true]
}

const INFO = {
    0: "Click on 'Deliver a baby' to deliver your first baby.",
    1: "Well done! Click again to deliver another baby.",
    2: "Excellent! Keep going.",
    3: "You can do it!",
    4: "One more!",
    5: "Oh, look! Deliver 5 more to purchase your first helper.",
    6: "Just 4 more. Keep going!",
    10: "You can now buy your first helper. Click on Doctor to purchase one."
}


// const ACHIEVEMENTS = {

// }


const TIDBITS = [
    "A doctor may carry gas and air in their boot.",
    "Tea is a medicine best served well-sugared.",
    "Some midwives are members of the Institute of Advanced Motorists.",
]



