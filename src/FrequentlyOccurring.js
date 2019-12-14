const S1 = "Series 1";
const S2 = "Series 2";
const S3 = "Series 3";
const S4 = "Series 4";
const S5 = "Series 5";
const S6 = "Series 6";
const S7 = "Series 7";
const S8 = "Series 8";
const S9 = "Series 9";
// const S10 = "Series 10";
// const S11 = "Series 11";
const ALL = [S1, S2, S3, S4, S5, S6, S7, S8, S9];



const FRED = "Fred";
const _FRED = [FRED, S1, S2, S3, S4, S5, S6, S7, S8, S9];
const SR_J = "Sister Julienne"
const _SR_J = [SR_J, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const SR_E = "Sister Evangelina";
const _SR_E = [SR_E, S1, S2, S3, S4, S5];
const SR_MJ = "Sister Monica Joan";
const _SR_MJ = [SR_MJ, S1, S2, S3, S4, S5, S6, S7, S8, S9];
const SR_B = "Sister Bernadette"
const _SR_B = [SR_B, S1, S2]
const JENNY = "Jenny";
const _JENNY = [JENNY, S1, S2, S3];
const PETER = "Peter";
const _PETER = [PETER, S1, S2, S3, S4, S5, S6];
const CYNTHIA = "Cynthia"
// const _CYNTHIA = [CYNTHIA, S1, S2, S3, S4, S5, S6]
const TRIXIE = "Trixie"
const _TRIXIE = [TRIXIE, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const CHUMMY = "Chummy"
const _CHUMMY = [CHUMMY, S1, S2, S3, S4, S5]
const DR_T = "Dr Turner"
const _DR_T = [DR_T, S1, S2, S3, S4, S5, S6, S7, S8, S9]
const TIM = "Tim"
const _TIM = [TIM, S2, S3, S4, S5, S6, S7, S8, S9]
const PATSY = "Patsy"
const _PATSY = [PATSY, S2, S3, S4, S5, S6]
const SHELAGH = "Shelagh"
const _SHELAGH = [SHELAGH, S3, S4, S5, S6, S7, S8, S9]
const SR_W = "Sister Winifred";
const _SR_W = [SR_W, S3, S4, S5, S6, S7, S8];
const TOM = "Tom"
// const _TOM = [TOM, S3, S4, S5, S6, S7]
const PHYLLIS = "Phyllis";
const _PHYLLIS = [PHYLLIS, S4, S5, S6, S7, S8, S9];
const BARBARA = "Barbara"
const _BARBARA = [BARBARA, S4, S5, S6, S7]
const VI = "Violet"
const _VI = [VI, S4, S5, S6, S7, S8, S9]
const DELIA = "Delia";
const _DELIA = [DELIA, S4, S5, S6];
const VAL = "Valerie";
const _VAL = [VAL, S6, S7, S8, S9];
const REGGIE = "Reggie"
const _REGGIE = [REGGIE, S6, S7, S8, S9]
const LUCILLE = "Lucille"
const _LUCILLE = [LUCILLE, S7, S8, S9]
const SR_H = "Sister Hilda";
const _SR_H = [SR_H, S8, S9];
const SR_F = "Sister Frances"
const _SR_F = [SR_F, S8, S9]
const MO_M = "Mother Mildred"
const _MO_M = [MO_M, S8, S9]
const MS_H = "Miss Higgins"
const _MS_H = [MS_H, S8, S9]

const allFilterCategories = [S1,S2,S3,S4,S5,S6,S7,S8,S9,FRED,SR_J,SR_E,SR_MJ,JENNY,CYNTHIA,TRIXIE,PETER,CHUMMY,DR_T,
  TIM,PATSY,SHELAGH,SR_W,TOM,PHYLLIS,BARBARA,VI,DELIA,VAL,REGGIE,LUCILLE,SR_H,SR_F,MO_M,MS_H]

export {
  S1,S2,S3,S4,S5,S6,S7,S8,S9,FRED,SR_J,SR_E,SR_MJ,JENNY,CYNTHIA,TRIXIE,PETER,CHUMMY,DR_T,TIM,
  PATSY,SHELAGH,SR_W,TOM,PHYLLIS,BARBARA,VI,DELIA,VAL,REGGIE,LUCILLE,SR_H,SR_F,MO_M,MS_H, allFilterCategories
};


export function getFrequentlyOccurringEvents() {
    
    return [
        {id:"a1", isChecked:false,placement:"pool", title:"The Commercial Road is mentioned", tags:ALL},
        {id:"a2", isChecked:false,placement:"pool", title:"Someone is offered a cup of (well-sugared) tea", tags:ALL},
        {id:"a3", isChecked:false,placement:"pool", title:"Fred mentions El Alemain", tags:_FRED},
        {id:"a4", isChecked:false,placement:"pool", title:"Sister Monica Joan eats cake or sweets", tags:_SR_MJ},
        {id:"b5", isChecked:false,placement:"pool", title:"Turnadette moment", tags:_DR_T.concat(SHELAGH).concat(SR_B)},
        {id:"a5", isChecked:false,placement:"pool", title:"Sister Julienne is asked for help or advice", tags:_SR_J},
        {id:"a6", isChecked:false,placement:"pool", title:"\"Nonnatus House, midwife speaking!\"", tags:ALL},
        {id:"a7", isChecked:false,placement:"pool", title:"Val mentions a family member", tags:_VAL},
        {id:"a8", isChecked:false,placement:"pool", title:"Someone uses rhyming slang", tags:ALL},
        {id:"a9", isChecked:false,placement:"pool", title:"Violet is worried about Reggie", tags:_REGGIE.concat([VI])},
        {id:"a0", isChecked:false,placement:"pool", title:"Urine sample is provided in a jam jar", tags:ALL},
        {id:"aa", isChecked:false,placement:"pool", title:"\"I'm/She's in the family way\"", tags:ALL},
        {id:"ab", isChecked:false,placement:"pool", title:"Sister Hilda talks about before she became a nun", tags:_SR_H},
        {id:"ac", isChecked:false,placement:"pool", title:"\"Oh, Patrick\"", tags:_SHELAGH},
        {id:"ad", isChecked:false,placement:"pool", title:"Sister Monica Joan mentions astronomy or astrology", tags:_SR_MJ},
        {id:"ae", isChecked:false,placement:"pool", title:"Multiplet birth", tags:ALL},
        {id:"af", isChecked:false,placement:"pool", title:"Father attends birth", tags:ALL},
        {id:"ag", isChecked:false,placement:"pool", title:"Phyllis is annoyed at someone", tags:_PHYLLIS},
        {id:"ah", isChecked:false,placement:"pool", title:"Mother Mildred unwittingly offends someone", tags:_MO_M},
        {id:"ai", isChecked:false,placement:"pool", title:"Tim plays an instrument", tags:_TIM},
        {id:"aj", isChecked:false,placement:"pool", title:"Labouring mother says \"I can't do it!\"", tags:ALL},
        {id:"ak", isChecked:false,placement:"pool", title:"\"I am a member of the Institute of Advanced Motorists\"", tags:_PHYLLIS},
        {id:"al", isChecked:false,placement:"pool", title:"Someone is gardening", tags:ALL},
        {id:"am", isChecked:false,placement:"pool", title:"Pregnant woman smokes", tags:ALL},
        {id:"an", isChecked:false,placement:"pool", title:"Brand of soap is mentioned", tags:ALL},
        {id:"ao", isChecked:false,placement:"pool", title:"Sister Monica Joan quotes the Bible, Keats, Shakespeare, etc", tags:_SR_MJ},
        {id:"ap", isChecked:false,placement:"pool", title:"Tim acts over his age", tags:_TIM},
        {id:"aq", isChecked:false,placement:"pool", title:"Undiagnosed multiplet", tags:ALL},
        {id:"ar", isChecked:false,placement:"pool", title:"Dr Turner corrects someone", tags:_DR_T},
        {id:"as", isChecked:false,placement:"pool", title:"The autoclave is being filled or emptied", tags:ALL},
        {id:"at", isChecked:false,placement:"pool", title:"Patsy is cleaning something", tags:_PATSY},
        {id:"au", isChecked:false,placement:"pool", title:"Sister Winifred prepares or mentions food", tags:_SR_W},
        {id:"av", isChecked:false,placement:"pool", title:"Someone is offered a barley sugar", tags:ALL},
        {id:"ax", isChecked:false,placement:"pool", title:"Jenny is disgusted by something", tags:_JENNY},
        {id:"ay", isChecked:false,placement:"pool", title:"Sister Monica Joan says she’s useless", tags:_SR_MJ},
        {id:"az", isChecked:false,placement:"pool", title:"A blessing is said", tags:ALL},
        {id:"ba", isChecked:false,placement:"pool", title:"Sister Evangelina disapproves", tags:_SR_E},
        {id:"bb", isChecked:false,placement:"pool", title:"Patsy and Delia are almost caught", tags:_DELIA.concat([PATSY])},
        {id:"bc", isChecked:false,placement:"pool", title:"Someone sings", tags:ALL},
        {id:"bd", isChecked:false,placement:"pool", title:"More than 8 people gathered at the dining table", tags:ALL},
        {id:"be", isChecked:false,placement:"pool", title:"Song is played on the radio", tags:ALL},
        {id:"bf", isChecked:false,placement:"pool", title:"There's a montage", tags:ALL},
        {id:"bg", isChecked:false,placement:"pool", title:"Alternative word for \"toilet\" is used (lav, privy, khazi etc)", tags:ALL},
        {id:"bh", isChecked:false,placement:"pool", title:"Board game is played at Nonnatus House", tags:ALL},
        {id:"bi", isChecked:false,placement:"pool", title:"Birth scene", tags:ALL},
        {id:"bj", isChecked:false,placement:"pool", title:"Episode made me cry", tags:ALL},
        {id:"bk", isChecked:false,placement:"pool", title:"Heard of a new disease for the first time in this episode", tags:ALL},
        {id:"bl", isChecked:false,placement:"pool", title:"Sister Monica Joan watches television", tags:_SR_MJ},
        {id:"bm", isChecked:false,placement:"pool", title:"Euphemism such as \"down stairs\"/\"down below\" is used", tags:ALL},
        {id:"bn", isChecked:false,placement:"pool", title:"Sister Julienne is in the clinical room", tags:_SR_J},
        {id:"bo", isChecked:false,placement:"pool", title:"The Motherhouse is mentioned", tags:ALL},
        {id:"bp", isChecked:false,placement:"pool", title:"Trixie calls someone \"sweetie\"", tags:_TRIXIE},
        {id:"bq", isChecked:false,placement:"pool", title:"Val calls someone \"chick\"", tags:_VAL},
        {id:"br", isChecked:false,placement:"pool", title:"Phyllis calls someone \"lass\"", tags:_PHYLLIS},
        {id:"bs", isChecked:false,placement:"pool", title:"Lucille calls someone \"precious\"", tags:_LUCILLE},
        {id:"bt", isChecked:false,placement:"pool", title:"Sister Julienne calls someone \"my dear\"", tags:_SR_J},
        {id:"bu", isChecked:false,placement:"pool", title:"Violet is working in her shop", tags:_VI},
        {id:"bv", isChecked:false,placement:"pool", title:"Fred has a money making scheme", tags:_FRED},
        {id:"bw", isChecked:false,placement:"pool", title:"Sister Monica Joan refuses medical intervention", tags:_SR_MJ},
        {id:"bx", isChecked:false,placement:"pool", title:"Phyllis reassures someone", tags:_PHYLLIS},
        {id:"by", isChecked:false,placement:"pool", title:"Dr Turner attends a birth", tags:_DR_T},
        {id:"bz", isChecked:false,placement:"pool", title:"Fred repairs something", tags:_FRED},
        {id:"ca", isChecked:false,placement:"pool", title:"Sister Julienne hosts meeting in her office", tags:_SR_J},
        {id:"cb", isChecked:false,placement:"pool", title:"Sister Evangelina proclaims that \"Breast is best!\"", tags:_SR_E},
        {id:"cc", isChecked:false,placement:"pool", title:"Character who is no longer on the show is mentioned", tags:ALL},
        {id:"cd", isChecked:false,placement:"pool", title:"Someone says \"tickety-boo\"", tags:ALL},
        {id:"ce", isChecked:false,placement:"pool", title:"Hand closeup", tags:ALL},
        {id:"cf", isChecked:false,placement:"pool", title:"Peter Noakes is at Nonnatus on official business", tags:_PETER},
        {id:"cg", isChecked:false,placement:"pool", title:"Sister Bernadette interacts with Dr Turner", tags:_SR_B.concat(DR_T)},
        {id:"ch", isChecked:false,placement:"pool", title:"Phyllis and Barbara attend birth together", tags:_BARBARA.concat(PHYLLIS)},
        {id:"ci", isChecked:false,placement:"pool", title:"Sister Evangelina and Sister Monica Joan bicker", tags:_SR_E.concat(SR_MJ)},
        {id:"cj", isChecked:false,placement:"pool", title:"Chummy destroys something", tags:_CHUMMY},
        {id:"ck", isChecked:false,placement:"pool", title:"Chummy mentions her mother or father", tags:_CHUMMY},
        {id:"cl", isChecked:false,placement:"pool", title:"Cub scout meeting", tags:ALL},
        {id:"cm", isChecked:false,placement:"pool", title:"Sister Frances reveals details about her pre-nun life", tags:_SR_F},
        {id:"cn", isChecked:false,placement:"pool", title:"Nonnatun is bicycling", tags:ALL},
        {id:"co", isChecked:false,placement:"pool", title:"Nuns and midwives disagree", tags:ALL},
        {id:"cp", isChecked:false,placement:"pool", title:"Soundtrack \"In the Mirror\" is playing", tags:ALL},
        {id:"cq", isChecked:false,placement:"pool", title:"Soundtrack \"Biking\" is playing", tags:ALL},
        {id:"cr", isChecked:false,placement:"pool", title:"Soundtrack \"The Adventure of Life\" is playing", tags:ALL},
        {id:"cs", isChecked:false,placement:"pool", title:"Soundtrack \"The Miracle\" is playing", tags:ALL},
        {id:"ct", isChecked:false,placement:"pool", title:"Soundtrack \"The Wedding\" is playing", tags:ALL},
        {id:"cu", isChecked:false,placement:"pool", title:"Soundtrack \"We Will Be Memories\" is playing", tags:ALL},
        {id:"cv", isChecked:false,placement:"pool", title:"Soundtrack \"Where Rose Lies\" is playing", tags:ALL},
        {id:"cw", isChecked:false,placement:"pool", title:"Soundtrack \"Christmas\" is playing", tags:ALL},
        {id:"cx", isChecked:false,placement:"pool", title:"Character sings along with song on radio", tags:ALL},
        
        {id:"b0", isChecked:false,placement:"pool", title:"Fred is scared of Mother Mildred", tags:_MO_M.concat(FRED)},
        {id:"b1", isChecked:false,placement:"pool", title:"Miss Higgins suggest improvement to routines", tags:_MS_H},
        {id:"b2", isChecked:false,placement:"pool", title:"Shelagh CANNOT BELIEVE what Miss Higgins just said/did", tags:_MS_H.concat(SHELAGH)},
        {id:"b3", isChecked:false,placement:"pool", title:"Reggie helps someone", tags:_REGGIE},
        {id:"b4", isChecked:false,placement:"pool", title:"Female friendship on display", tags:ALL},

        {id:"b6", isChecked:false,placement:"pool", title:"Shulienne moment", tags:_SR_J.concat(SHELAGH).concat(SR_B)},
        {id:"b7", isChecked:false,placement:"pool", title:"Nonnatun(s) travel beyond Poplar", tags:ALL},
        {id:"b8", isChecked:false,placement:"pool", title:"Nonnatun(s) watch television", tags:ALL},
        {id:"b9", isChecked:false,placement:"pool", title:"Keep Fit class (or mentioned)", tags:ALL},
        {id:"c0", isChecked:false,placement:"pool", title:"Lucille goes on date", tags:_LUCILLE},
        {id:"c1", isChecked:false,placement:"pool", title:"Compline is mentioned", tags:ALL},
        {id:"c2", isChecked:false,placement:"pool", title:"The Great Silence is mentioned", tags:ALL},
        {id:"c3", isChecked:false,placement:"pool", title:"Mrs B is mentioned", tags:ALL},
        {id:"c4", isChecked:false,placement:"pool", title:"Someone is cooking", tags:ALL},
        {id:"c5", isChecked:false,placement:"pool", title:"Dr Turner is summoned", tags:_DR_T},
        {id:"c6", isChecked:false,placement:"pool", title:"Phyllis drives her car", tags:_PHYLLIS},

        {id:"c7", isChecked:false,placement:"pool", title:"Sister Monica Joan goes missing", tags:_SR_MJ},
        {id:"c8", isChecked:false,placement:"pool", title:"Sister Monica Joan spouts wisdom", tags:_SR_MJ},

        // {id:"", isChecked:false,placement:"pool", title:"", tags:[]},
    ]
}