

const S1 = "Series 1"
const S2 = "Series 2"
const S3 = "Series 3"
const S4 = "Series 4"
const S5 = "Series 5"
const S6 = "Series 6"
const S7 = "Series 7"
const S8 = "Series 8"
const S9 = "Series 9"
const ALL = "All"


export function getFrequentlyOccurringEvents() {
    return [
        {id:"1", isChecked:false, placement:"pool", title:"Someone mentions the Commercial Road", tags:[ALL]},
        {id:"2", isChecked:false,placement:"pool", title:"Fred mentions El Alemain", tags:[ALL]},
        {id:"3", isChecked:false,placement:"pool", title:"Phyllis mentions being a member of the Institute of Advanced Motorists", tags:[S4, S5, S6, S7, S8, S9]},
        {id:"4", isChecked:false,placement:"pool", title:"Someone is offered a barley sugar", tags:[ALL]},
        {id:"5", isChecked:false,placement:"pool", title:"Sister Monica Joan gets excited about cake", tags:[ALL]},
        {id:"6", isChecked:false,placement:"pool", title:"Sister Monica Joan mentions astronomy or astrology", tags:[ALL]},
        {id:"7", isChecked:false,placement:"pool", title:"Twins or triplets are born", tags:[ALL]},
        {id:"8", isChecked:false,placement:"pool", title:"Sister Winifred mentions preparing food for someone", tags:[S3, S4, S5, S6, S7, S8]},
        {id:"9", isChecked:false,placement:"pool", title:"\"Oh, Patrick\"", tags:[S3, S4, S5, S6, S7, S8, S9]},
        {id:"10", isChecked:false,placement:"pool", title:"Other word for \"toilet\" is used (lav, privy, khazi, smallest room, etc)", tags:[ALL]},
        {id:"11", isChecked:false,placement:"pool", title:"A board game is played at Nonnatus House", tags:[ALL]},
        {id:"12", isChecked:false,placement:"pool", title:"Jenny is disgusted by something", tags:[S1, S2, S3]},

    ]
}