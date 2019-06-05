

const S1 = "Series 1"
const S2 = "Series 2"
const S3 = "Series 3"
const S4 = "Series 4"
const S5 = "Series 5"
const S6 = "Series 6"
const S7 = "Series 7"
const S8 = "Series 8"
const S9 = "Series 9"
const ALL = [S1, S2, S3, S4, S5, S6, S7, S8, S9]

const FRED = "Fred"
const _FRED = [FRED, S1, S2, S3, S4, S5, S6, S7, S8, S9]
// const SR_J = "Sr. Julienne"
// const _SR_J = [SR_J, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const SR_E = "Sr. Evangelina"
const _SR_E = [SR_E, S1, S2, S3, S4, S5];
const SR_MJ = "Sr. Monica Joan"
const _SR_MJ = [SR_MJ, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const JENNY = "Jenny Lee"
const _JENNY = [JENNY, S1, S2, S3]
// const CYNTHIA = "Cynthia Miller"
// const _CYNTHIA = [CYNTHIA, S1, S2, S3, S4, S5, S6]
// const TRIXIE = "Trixie Franklin"
// const _TRIXIE = [TRIXIE, S1, S2, S3, S4, S5, S6, S7, S8, S9]
// const CHUMMY = "CAMILLA CHUMMY FORTHESCUE-CHUMLEY BROWN"
// const _CHUMMY = [CHUMMY, S1, S2, S3, S4, S5]
// const DR_T = "DOCTOR TURNER"
// const _DR_T = [DR_T, S1, S2, S3, S4, S5, S6, S7, S8, S9]
// const TIM = "TIMOTHY TURNER"
// const _TIM = [TIM, S2, S3, S4, S5, S6, S7, S8, S9]
// const PATSY = "Patsy Mount"
// const _PATSY = [PATSY, S2, S3, S4, S5, S6]
// const SHELAGH = "SHELAGH TURNER"
// const _SHELAGH = [SHELAGH, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const SR_W = "SISTER WINIFRED"
const _SR_W = [SR_W, S3, S4, S5, S6, S7, S8]
// const TOM = "TOM HEREWARD"
// const _TOM = [TOM, S3, S4, S5, S6, S7]
const PHYLLIS = "PHYLLIS CRANE"
const _PHYLLIS = [PHYLLIS, S4, S5, S6, S7, S8, S9]
// const BARBARA = "BARBARA GILBERT"
// const _BARBARA = [BARBARA, S4, S5, S6, S7]
// const VI = "VIOLET BUCKLE"
// const _VI = [VI, S4, S5, S6, S7, S8, S9]
const DELIA = "Delia Busby"
const _DELIA = [DELIA, S4, S5, S6]
const VAL = "VALERIE DYER"
const _VAL = [VAL, S6, S7, S8, S9]
// const REGGIE = "Reggie"
// const _REGGIE = [REGGIE, S6, S7, S8, S9]
// const LUCILLE = "LUCILLE ANDERSSON"
// const _LUCILLE = [LUCILLE, S7, S8, S9]
// const SR_H = "SISTER HILDA"
// const _SR_H = [SR_H, S8, S9]
// const SR_F = "SISTER FRANCES"
// const _SR_F = [SR_F, S8, S9]
// const MO_M = "Mother Mildred"
// const _MO_M = [MO_M, S8, S9]



export function getFrequentlyOccurringEvents() {
    
    return [
        {id:"1", isChecked:false, placement:"pool", title:"The Commercial Road is mentioned", tags:ALL},
        {id:"2", isChecked:false,placement:"pool", title:"Fred mentions El Alemain", tags:_FRED},
        {id:"3", isChecked:false,placement:"pool", title:"\"I am a member of the Institute of Advanced Motorists\"", tags:_PHYLLIS},
        {id:"4", isChecked:false,placement:"pool", title:"Someone is offered a barley sugar", tags:_PHYLLIS},
        {id:"5", isChecked:false,placement:"pool", title:"Sister Monica Joan eats cake/sweets", tags:_SR_MJ},
        {id:"6", isChecked:false,placement:"pool", title:"Sister Monica Joan mentions astronomy or astrology", tags:_SR_MJ},
        {id:"7", isChecked:false,placement:"pool", title:"Twins or triplets are born", tags:ALL},
        {id:"8", isChecked:false,placement:"pool", title:"Sister Winifred mentions preparing food for someone", tags:_SR_W},
        {id:"9", isChecked:false,placement:"pool", title:"\"Oh, Patrick\"", tags:[S3, S4, S5, S6, S7, S8, S9]},
        {id:"10", isChecked:false,placement:"pool", title:"Other word for \"toilet\" is used (lav, privy, khazi etc)", tags:ALL},
        {id:"11", isChecked:false,placement:"pool", title:"Board game is played at Nonnatus House", tags:ALL},
        {id:"12", isChecked:false,placement:"pool", title:"Jenny is disgusted by something", tags:_JENNY},
        {id:"13", isChecked:false,placement:"pool", title:"Father attends birth", tags:ALL},
        {id:"14", isChecked:false,placement:"pool", title:"The nuns sing", tags:ALL},
        {id:"15", isChecked:false,placement:"pool", title:"Song is played on the radio", tags:ALL},
        {id:"16", isChecked:false,placement:"pool", title:"There's a montage", tags:ALL},
        {id:"17", isChecked:false,placement:"pool", title:"\"Nonnatus House, midwife speaking!\"", tags:ALL},
        {id:"18", isChecked:false,placement:"pool", title:"Val mentions a family member", tags:_VAL},
        {id:"19", isChecked:false,placement:"pool", title:"Someone uses rhyming slang", tags:ALL},
        {id:"20", isChecked:false,placement:"pool", title:"Someone gives birth", tags:ALL},
        {id:"21", isChecked:false,placement:"pool", title:"Brand of soap is mentioned", tags:ALL},
        {id:"22", isChecked:false,placement:"pool", title:"Urine in jam jar", tags:ALL},
        {id:"23", isChecked:false,placement:"pool", title:"Sister Evangelina disapproves", tags:_SR_E},
        {id:"24", isChecked:false,placement:"pool", title:"Patsy and Delia are almost caught", tags:_DELIA},
        {id:"25", isChecked:false,placement:"pool", title:"\"I can't do it!\"", tags:ALL},
        {id:"26", isChecked:false,placement:"pool", title:"Episode made me cry", tags:ALL},
        {id:"27", isChecked:false,placement:"pool", title:"Undiagnosed twins", tags:ALL},
        // {id:"", isChecked:false,placement:"pool", title:"", tags:[]},


    ]
}