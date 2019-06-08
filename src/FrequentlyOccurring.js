import uuidv4 from 'uuid/v4';
const S1 = "Series 1";
const S2 = "Series 2";
const S3 = "Series 3";
const S4 = "Series 4";
const S5 = "Series 5";
const S6 = "Series 6";
const S7 = "Series 7";
const S8 = "Series 8";
const S9 = "Series 9";
const ALL = [S1, S2, S3, S4, S5, S6, S7, S8, S9];



const FRED = "Fred";
const _FRED = [FRED, S1, S2, S3, S4, S5, S6, S7, S8, S9];
const SR_J = "Sister Julienne"
const _SR_J = [SR_J, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const SR_E = "Sister Evangelina";
const _SR_E = [SR_E, S1, S2, S3, S4, S5];
const SR_MJ = "Sister Monica Joan";
const _SR_MJ = [SR_MJ, S1, S2, S3, S4, S5, S6, S7, S8, S9];
const JENNY = "Jenny";
const PETER = "Peter";
// const _PETER = [PETER, S1, S2, S3, S4, S5, S6];
const _JENNY = [JENNY, S1, S2, S3];
const CYNTHIA = "Cynthia"
// const _CYNTHIA = [CYNTHIA, S1, S2, S3, S4, S5, S6]
const TRIXIE = "Trixie"
// const _TRIXIE = [TRIXIE, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const CHUMMY = "Chummy"
// const _CHUMMY = [CHUMMY, S1, S2, S3, S4, S5]
const DR_T = "Dr Turner"
const _DR_T = [DR_T, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const TIM = "Tim"
const _TIM = [TIM, S2, S3, S4, S5, S6, S7, S8, S9]
const PATSY = "Patsy"
const _PATSY = [PATSY, S2, S3, S4, S5, S6]
const SHELAGH = "Shelagh"
// const _SHELAGH = [SHELAGH, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const SR_W = "Sister Winifred";
const _SR_W = [SR_W, S3, S4, S5, S6, S7, S8];
const TOM = "Tom"
// const _TOM = [TOM, S3, S4, S5, S6, S7]
const PHYLLIS = "Phyllis";
const _PHYLLIS = [PHYLLIS, S4, S5, S6, S7, S8, S9];
const BARBARA = "Barbara"
// const _BARBARA = [BARBARA, S4, S5, S6, S7]
const VI = "Violet"
// const _VI = [VI, S4, S5, S6, S7, S8, S9]
const DELIA = "Delia";
const _DELIA = [DELIA, S4, S5, S6];
const VAL = "Valerie";
const _VAL = [VAL, S6, S7, S8, S9];
const REGGIE = "Reggie"
const _REGGIE = [REGGIE, S6, S7, S8, S9]
const LUCILLE = "Lucille"
// const _LUCILLE = [LUCILLE, S7, S8, S9]
const SR_H = "Sister Hilda";
const _SR_H = [SR_H, S8, S9];
const SR_F = "Sister Frances"
// const _SR_F = [SR_F, S8, S9]
const MO_M = "Mother Mildred"
const _MO_M = [MO_M, S8, S9]

const allFilterCategories = [S1,S2,S3,S4,S5,S6,S7,S8,S9,FRED,SR_J,SR_E,SR_MJ,JENNY,CYNTHIA,TRIXIE,PETER,CHUMMY,DR_T,
  TIM,PATSY,SHELAGH,SR_W,TOM,PHYLLIS,BARBARA,VI,DELIA,VAL,REGGIE,LUCILLE,SR_H,SR_F,MO_M]

export {
  S1,S2,S3,S4,S5,S6,S7,S8,S9,FRED,SR_J,SR_E,SR_MJ,JENNY,CYNTHIA,TRIXIE,PETER,CHUMMY,DR_T,TIM,
  PATSY,SHELAGH,SR_W,TOM,PHYLLIS,BARBARA,VI,DELIA,VAL,REGGIE,LUCILLE,SR_H,SR_F,MO_M, allFilterCategories
};


export function getFrequentlyOccurringEvents() {
    
    return [
        {id:uuidv4(), isChecked:false, placement:"pool", title:"The Commercial Road is mentioned", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Someone is offered a cup of well sugared tea", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Fred mentions El Alemain", tags:_FRED},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Monica Joan eats cake/sweets", tags:_SR_MJ},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Julienne is asked for help/advice", tags:_SR_J},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"\"Nonnatus House, midwife speaking!\"", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Val mentions a family member", tags:_VAL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Someone uses rhyming slang", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Violet is worried about Reggie", tags:_REGGIE.concat([VI])},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Urine sample is provided in a jam jar", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Someone is referred to as being \"in the family way\"", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Hilda talks about before she became a nun", tags:_SR_H},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"\"Oh, Patrick\"", tags:[SHELAGH, S3, S4, S5, S6, S7, S8, S9]},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Monica Joan mentions astronomy or astrology", tags:_SR_MJ},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Twins or triplets are born", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Father attends birth", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Phyllis is annoyed at people being late", tags:_PHYLLIS},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Mother Mildred unknowningly offends someone", tags:_MO_M},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Labouring mother says \"I can't do it!\"", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"\"I am a member of the Institute of Advanced Motorists\"", tags:_PHYLLIS},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Someone is gardening", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Pregnant woman smokes", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Brand of soap is mentioned", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Monica Joan quotes the bible/Keats etc", tags:_SR_MJ},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Tim acts over his age", tags:_TIM},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Undiagnosed twins", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Dr Turner corrects someone", tags:_DR_T},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"The autoclave is being filled or emptied", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Patsy is cleaning something", tags:_PATSY},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Winifred mentions preparing food for someone", tags:_SR_W},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Someone is offered a barley sugar", tags:_PHYLLIS},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Jenny is disgusted by something", tags:_JENNY},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Monica Joan says she’s useless", tags:_SR_MJ},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"A blessing is said", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Sister Evangelina disapproves", tags:_SR_E},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Patsy and Delia are almost caught", tags:_DELIA.concat([PATSY])},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"The nuns sing", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Song is played on the radio", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"There's a montage", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Other word for \"toilet\" is used (lav, privy, khazi etc)", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Board game is played at Nonnatus House", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Someone gives birth", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Episode made me cry", tags:ALL},
        {id:uuidv4(), isChecked:false,placement:"pool", title:"Heard of a new disease for the first time in this episode", tags:ALL},

        // {id:uuidv4(), isChecked:false,placement:"pool", title:"", tags:[]},
    ]
}