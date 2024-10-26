


export function getCaretaker() {
    return getPeople()
}

export function getAilments() {
    return ["feverish", "flu-ridden", "injured", "concussed", "bleeding", "cold-ridden", "shivering", "heat-stricken", "head-injured", "bone-broken", "singed", "severely burnt", "dog-bitten", 
            "nauseous", "queasy", "lightheaded", "hypothermic", "impaled", "knife-wounded", "stabbed", "splinter-injured", "glass-cut", "bruised", "confused", "delirious", "anaphylactic shocked",
            "road rashed", "bemigrained", "malnourished", "dehydrated", "broken", "exhausted", "asthmatic", "poisoned", "deafened", "blinded", "hallucinating", "drugged", "anxious", "choking",
            "retching", "contagious", "motion sick", "homesick", "hungover", "stuffy", "congested", "sunburnt", "frostbitten", "fainting", "wound-infected", "lethargic", "sick and injured",
            "coughing", "disoriented", "aching", "flushed", "pale", "burning up"]
}

export function getSufferingFrom() {
    return ["fever", "flu", "an injury", "concussion", "blood-loss", "a headcold", "hypothermia", "stomach flu", "heat stroke", "a head injury", "broken bones", "burns", "severe burns", "dog bites", 
            "nausea", "queasiness", "lightheadedness", "hypothermia", "impalement", "a knife wound", "a stab wound", "splinters", "glass cuts", "bruises",
            "bronchitis", "pneumonia", "a UTI", "confusion", "a heart attack", "cardiac arrest", "indigestion", "lumbago", "a broken collar bone", "psoriasis", "eczema", "anaphylaxis", 
            "road rash", "migraine", "malnourishment", "dehydration", "a black eye", "a broken jaw", "a broken leg", "a broken arm", "oxygen deprivation", "and asthma attack", "poisoning",
            "insomnia", "panic attack", "throwing up", "chicken pox", "pink eye", "shingles", "appendicitis", "addiction", "ear infection", "strep throat", "laryngitis", "labyrinthitis", "motion sickness",
            "hangover", "congestion", "sunburn", "frostbite", "having fainted", "an infected wound", "heartburn", "medication side effects", "cramps", "a persistent cough", "the sniffles",
            "brain fog", "summer flu", "body aches"]
}
export function getSickie() {
    return getPeople()
}

export function getLocation() {
    return ["at Nonnatus House", "at the Mother House", "at patient's house", "at the maternity ward", "in hospital", "at the market", "at the surgery", 
            "in her bedroom", "in the kitchen", "in the parlour", "in the clinical room", "in her office", "in the garden", "in the chapel", "on the staircase"]
}


// function weightrandom(probabilities) {
//     let shot = Math.random();
//     return probabilities.map((val,ind,arr) => { arr[ind] = (ind === 0 ? 0 : arr[ind-1])+val; return arr[ind] }).map(x => x >= shot).indexOf(true);
//   }

function getPeople() {
    return [
        {name:"Sister Julienne",
        id:"srj",
        c_score:1, // How likely to be caretaker
        s_score:1, // How likely to be sickie
        c_selected:false, // Selected by default as caretaker
        s_selected:true   // Selected by default as sickie
        },
        {name:"Sister Evangelina",
        id:"sre",
        c_score:1,
        s_score:0.3,
        c_selected:true,
        s_selected:true
        },
        {name:"Sister Monica Joan",
        id:"srmj",
        c_score:0.7,
        s_score:0.5,
        c_selected:true,
        s_selected:true        
        },
        {name:"Phyllis",
        id:"phyllis",
        c_score:1,
        s_score:.3,
        c_selected:true,
        s_selected:false        
        },
        {name:"Trixie",
        id:"trixie",
        c_score:.8,
        s_score:.1,
        c_selected:true,
        s_selected:false        
        },
        {name:"Sister Hilda",
        id:"srh",
        c_score:.3,
        s_score:.01,
        c_selected:false,
        s_selected:false
        },  
        {name:"Shelagh",
        id:"shelagh",
        c_score:.3,
        s_score:.01,
        c_selected:false,
        s_selected:false
        },
        {name:"Doctor Turner",
        id:"drt",
        c_score:.3,
        s_score:.01,
        c_selected:false,
        s_selected:false
        },
        {name:"Teddy",
        id:"teddy",
        c_score:.3,
        s_score:.3,
        c_selected:false,
        s_selected:false
        },
        {name:"Sister Ursula",
        id:"sru",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false
        },
        {name:"Mother Mildred",
        id:"mom",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false
        },
        {name:"Valerie",
        id:"val",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },
        {name:"Mother Jesu Emmanuel",
        id:"mje",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },
        {name:"Lucille",
        id:"lucille",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },
        {name:"Jenny",
        id:"jenny",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },
        {name:"Chummy",
        id:"chummy",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },             
        {name:"Cynthia",
        id:"cynthia",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },
        {name:"Patsy",
        id:"patsy",
        c_score:.01,
        s_score:.01,
        c_selected:false,
        s_selected:false        
        },         

    ]
}