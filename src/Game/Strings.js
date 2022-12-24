const COUNT_ZERO = 0
const COUNT_ONE = 1
const COUNT_TWO = 2
const COUNT_THREE = 3
const COUNT_FOUR = 4
const COUNT_FIVE = 5
const COUNT_SIX = 6
const COUNT_SEVEN = 7
const COUNT_EIGHT = 8
const COUNT_NINE = 9





const CHANGE_TIDBIT_SEC = 60 * 1000


export function getStringToShow(totalCount, count, allProducers, allPowerups, totalTime) {
    if (totalCount === COUNT_ZERO) return [INFO[COUNT_ZERO], false];
    if (totalCount === COUNT_ONE) return [INFO[COUNT_ONE], false];
    if (totalCount === COUNT_TWO) return [INFO[COUNT_TWO], false];
    if (totalCount === COUNT_THREE) return [INFO[COUNT_THREE], false];
    if (totalCount === COUNT_FOUR) return [INFO[COUNT_FOUR], false];
    if (totalCount === COUNT_FIVE) return [INFO[COUNT_FIVE], false];
    if (totalCount === COUNT_SIX) return [INFO[COUNT_SIX], false];
    if (totalCount === COUNT_SEVEN) return [INFO[COUNT_SEVEN], false];
    if (totalCount === COUNT_EIGHT) return [INFO[COUNT_EIGHT], false];
    if (totalCount === COUNT_NINE) return [INFO[COUNT_NINE], false];

    if (count >= allPowerups[0].cost && count <= allPowerups[0].cost*1.5 && !allPowerups[0].bought 
        && allPowerups[0].unlocked &&  !allPowerups[0].bought) {
        return ["You can now buy your first powerup! Powerups increase a producer's bps", false]
    }

    for (let i = 1; i < 10000000; i = i*10) {
        if (totalCount > 1000*i && totalCount < 1200*i) return ["Achievement get: You delivered " + String((1000*i).toLocaleString('en'))  + " babies in total!", false]
    }

    for (let i = allProducers.length - 1; i > 0; i--) {
        if (allProducers[i].howManyBought === 0 && count >= allProducers[i].cost/2 && count < allProducers[i].cost*0.7) return [INFO["FirstX"] + allProducers[i].name + "!", false]    
 
    }

    if (allProducers[0].howManyBought === 0 && count >= 10 && count < 50) return [INFO[10], false];
    if (allProducers[0].howManyBought === 1 && count < 11) return [INFO["FirstDoctor"], false];
    if (allProducers[0].howManyBought === 1 && count >= 11 && count < 50) return [INFO["SecondDoctor"], false];
    

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
    5: "Oh, look, a helper! Deliver 5 more to purchase your first helper.",
    6: "Just 4 more. Push! I mean, press! (the 'Deliver a baby' button)",
    7: "Just 3 more. Nearly there!",
    8: "Just 2 more. You can do it!",
    9: "Just 1 more. One more big push!",
    10: "You can now buy your first helper! Click on Doctor to purchase one.",
    "FirstDoctor": "Excellent! Your Doctor helper will now automatically deliver one baby per second (bps).",
    "SecondDoctor": "You can have multiple helpers. Click on Doctor again to buy a second doctor.",
    "FirstNun1": "Oh look, a new type of helper! Soon you'll be able to purchase it.",
    "FirstNun2": "Click on Nun to purchase your first Nun helper - Nun helpers deliver more babies per second than Doctors.",
    "FirstX": "Soon you'll be able to aquire your first "
}


// const ACHIEVEMENTS = {

// }


const TIDBITS = [
    "Doctors may carry gas and air in their boots.",
    "Tea is a medicine best served well-sugared.",
    "What is Nonnatus House full of? - Nun-sense!", // Xmas cracker
    "Some midwives are members of the Institute of Advanced Motorists.",
    "Some nuns get a driving license, to ensure a speedy delivery.",
    "History tells of nuns who became adept at the art of recumbent dining.",
    "What did Sister Julienne say when Trixie asked for an opinion on her new hairstyle? - \"Franklin my dear, I don't give a damn\"",
    "'Cluedo' is about collecting clues, not divine inspiration.", // Quote
    "Edna Mode had to redesign the nurses' uniforms as the capes kept getting stuck in the spokes.",
    "How come Sister Bernadette quit being a nun? - She kicked the habit!" // Xmas cracker



]



