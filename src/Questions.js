const GENERAL = "GENERAL"
const QUOTES = "QUOTES"
const NAMES_PLACES = "NAMES_PLACES"
const S1_S4 = "S1_S4"
const S5_S8 = "S5-S8"
const CAST_CREW = "CAST_CREW"
const MEDICAL = "MEDICAL"


export {GENERAL,QUOTES,NAMES_PLACES,S1_S4,S5_S8,CAST_CREW,MEDICAL}

export default function getQuestions(set) {
  switch (set) {
    case GENERAL:
      return {
        "default-sister-monica-joan-name": {
          id: "default-sister-monica-joan-name",
          question:
            "What was Sister Monica Joan's name before she joined the order of St Raymond Nonnatus?",
          answers: [
            { id: "a", answer: "Louise", isCorrect: false },
            { id: "b", answer: "Enid", isCorrect: false },
            { id: "c", answer: "Antonia", isCorrect: true },
            { id: "d", answer: "Mary", isCorrect: false }
          ]
        },
        "default-last-to-join": {
          id: "default-last-to-join",
          question:
            "Who of the following joined Nonnatus House last?",
          answers: [
            { id: "a", answer: "Chummy", isCorrect: false },
            { id: "b", answer: "Barbara", isCorrect: false },
            { id: "c", answer: "Phyllis", isCorrect: false },
            { id: "d", answer: "Valerie", isCorrect: true }
          ]
        },
        "default-nonnatus-house-phone-number": {
          id: "default-nonnatus-house-phone-number",
          question: "What is the phone number for Nonnatus House?",
          answers: [
            { id: "a", answer: "Poplar 594", isCorrect: false },
            { id: "b", answer: "Poplar 459", isCorrect: true },
            { id: "c", answer: "Poplar 945", isCorrect: false },
            { id: "d", answer: "Poplar 999", isCorrect: false }
          ]
        },
        "default-2016-christmas-special-travel": {
          id: "default-2016-christmas-special-travel",
          question:
            "Where do the Nonnatuns travel to in the 2016 Christmas Special?",
          answers: [
            { id: "a", answer: "Wales", isCorrect: false },
            { id: "b", answer: "Australia", isCorrect: false },
            { id: "c", answer: "South Africa", isCorrect: true },
            { id: "d", answer: "The West End", isCorrect: false }
          ]
        },
        "14-vegetarian": {
          id: "14-vegetarian",
          question: "Who is a self-confessed vegetarian?",
          answers: [
            { id: "a", answer: "Sister Evangelina", isCorrect: false },
            { id: "b", answer: "Phyllis", isCorrect: true },
            { id: "c", answer: "Jenny", isCorrect: false },
            { id: "d", answer: "Trixie", isCorrect: false }
          ]
        },

        "default-dr-turner-car-color": {
          id: "default-dr-turner-car-color",
          question: "What color is Dr Turner's car (series 1-7)?",
          answers: [
            { id: "a", answer: "Red", isCorrect: false },
            { id: "b", answer: "Yellow", isCorrect: false },
            { id: "c", answer: "Blue", isCorrect: false },
            { id: "d", answer: "Green", isCorrect: true }
          ]
        },
        "default-first-breech-delivery": {
          id: "default-first-breech-delivery",
          question: "Who was the first midwife shown delivering a breech baby?",
          answers: [
            { id: "a", answer: "Cynthia", isCorrect: false },
            { id: "b", answer: "Jenny", isCorrect: false },
            { id: "c", answer: "Trixie", isCorrect: false },
            { id: "d", answer: "Chummy", isCorrect: true }
          ]
        },
        "default-toxaemia-question": {
          id: "default-toxaemia-question",
          question: "'Toxaemia' is another word for...?",
          answers: [
            { id: "a", answer: "Pre-Eclampsia", isCorrect: true },
            { id: "b", answer: "Tokophobia", isCorrect: false },
            { id: "c", answer: "Cancer", isCorrect: false },
            { id: "d", answer: "Spina Bifida", isCorrect: false }
          ]
        },

        "np_angela_middle_name": {
          id: "np_angela_middle_name",
          question:
            "What is Angela Turner's middle name?",
          answers: [
            { id: "a", answer: "Bernadette", isCorrect: false },
            { id: "b", answer: "Julienne", isCorrect: true },
            { id: "c", answer: "Joan", isCorrect: false },
            { id: "d", answer: "Shelagh", isCorrect: false }
          ]
        },

        "default-what-year-does-series-1-take-place": {
          id: "default-what-year-does-series-1-take-place",
          question: "During what year does the first series take place?",
          answers: [
            { id: "a", answer: "1956", isCorrect: false },
            { id: "b", answer: "1957", isCorrect: true },
            { id: "c", answer: "1958", isCorrect: false },
            { id: "d", answer: "1959", isCorrect: false }
          ]
        },
        "default-nonnatus-house-address": {
          id: "default-nonnatus-house-address",
          question:
            "On what street is Nonnatus House located? (series 3 onwards)",
          answers: [
            { id: "a", answer: "Hendy Street", isCorrect: false },
            { id: "b", answer: "Kenilworth Street", isCorrect: false },
            { id: "c", answer: "Wick Street", isCorrect: true },
            { id: "d", answer: "Barley Street", isCorrect: false }
          ]
        },
        "default-sister-julienne-name": {
          id: "default-sister-julienne-name",
          question:
            "What was Sister Julienne's name before she joined the order of St Raymond Nonnatus?",
          answers: [
            { id: "a", answer: "Louise", isCorrect: true },
            { id: "b", answer: "Enid", isCorrect: false },
            { id: "c", answer: "Antonia", isCorrect: false },
            { id: "d", answer: "Mary", isCorrect: false }
          ]
        },

        "default-real-order-based-on": {
          id: "default-real-order-based-on",
          question:
            "The order of St Raymond Nonnatus is based on a real order of nuns. What is that order's name?",
          answers: [
            {
              id: "a",
              answer: "The Community of St. John the Divine",
              isCorrect: true
            },
            {
              id: "b",
              answer: "The Order of Saint Benedict",
              isCorrect: false
            },
            { id: "c", answer: "The Company of St. Ursula", isCorrect: false },
            {
              id: "d",
              answer: "The Order of the Immaculate Conception",
              isCorrect: false
            }
          ]
        },
        "default-games-at-nonnatus": {
          id: "default-games-at-nonnatus",
          question:
            "Which of the following games have not been seen played at Nonnatus House?",
          answers: [
            { id: "a", answer: "Monopoly", isCorrect: false }, //S1E6
            { id: "b", answer: "Cluedo", isCorrect: false }, //S2E4
            { id: "c", answer: "Scrabble", isCorrect: false }, //S8E4
            { id: "d", answer: "Chess", isCorrect: true }
          ]
        },
        "np_vals_aunts_pub": {
          id: "np_vals_aunts_pub",
          question:
            "What is the name of Valerie’s aunt’s pub?",
          answers: [
            { id: "a", answer: "The Hand and Sheers", isCorrect: false },
            { id: "c", answer: "The Master's Arms", isCorrect: false },
            { id: "b", answer: "The Black Sail", isCorrect: true },
            { id: "d", answer: "The Horse and Hound", isCorrect: false }
          ]
        },
        "np_where_is_the_motherhouse": {
          id: "np_where_is_the_motherhouse",
          question:
            "Where is the Motherhouse located?",
          answers: [
            { id: "a", answer: "Poplar", isCorrect: false },
            { id: "c", answer: "Surrey", isCorrect: false },
            { id: "b", answer: "Chatham", isCorrect: false },
            { id: "d", answer: "Chichester", isCorrect: true }
          ]
        },
        "np_akela": {
          id: "np_akela",
          question:
            "Who of the following have NOT been akela for the cubs?",
          answers: [
            { id: "a", answer: "Phyllis", isCorrect: false },
            { id: "c", answer: "Chummy", isCorrect: false },
            { id: "b", answer: "Patsy", isCorrect: false },
            { id: "d", answer: "Cynthia", isCorrect: true }
          ]
        },


        "bts-author": {
          id: "bts-author",
          question: "Whose memoirs was the show originally based on?",
          answers: [
            { id: "a", answer: "Terri Coates", isCorrect: false },
            { id: "c", answer: "Jennifer Worth", isCorrect: true },
            { id: "b", answer: "Pippa Harris", isCorrect: false },
            { id: "d", answer: "Heidi Thomas", isCorrect: false }
          ]
        }
      };





    case QUOTES:
      return {};
    case NAMES_PLACES:
      return {
        "default-sister-monica-joan-name": {
          id: "default-sister-monica-joan-name",
          question:
            "What was Sister Monica Joan's name before she joined the order of St Raymond Nonnatus?",
          answers: [
            { id: "a", answer: "Louise", isCorrect: false },
            { id: "b", answer: "Enid", isCorrect: false },
            { id: "c", answer: "Antonia", isCorrect: true },
            { id: "d", answer: "Mary", isCorrect: false }
          ]
        },
        "default-nonnatus-house-address": {
          id: "default-nonnatus-house-address",
          question:
            "On what street is Nonnatus House located? (series 3 onwards)",
          answers: [
            { id: "a", answer: "Hendy Street", isCorrect: false },
            { id: "b", answer: "Kenilworth Street", isCorrect: false },
            { id: "c", answer: "Wick Street", isCorrect: true },
            { id: "d", answer: "Barley Street", isCorrect: false }
          ]
        }, 

        "default-sister-julienne-name": {
          id: "default-sister-julienne-name",
          question:
            "What was Sister Julienne's name before she joined the order of St Raymond Nonnatus?",
          answers: [
            { id: "a", answer: "Louise", isCorrect: true },
            { id: "b", answer: "Enid", isCorrect: false },
            { id: "c", answer: "Antonia", isCorrect: false },
            { id: "d", answer: "Mary", isCorrect: false }
          ]
        },
        "default-2016-christmas-special-travel": {
          id: "default-2016-christmas-special-travel",
          question:
            "Where do the Nonnatuns travel to in the 2016 Christmas Special?",
          answers: [
            { id: "a", answer: "Wales", isCorrect: false },
            { id: "b", answer: "Australia", isCorrect: false },
            { id: "c", answer: "South Africa", isCorrect: true },
            { id: "d", answer: "The West End", isCorrect: false }
          ]
        },
        "default-sister-evangelina-name": {
          id: "default-sister-evangelina-name",
          question:
            "What was Sister Evangelina's name before she joined the order of St Raymond Nonnatus?",
          answers: [
            { id: "a", answer: "Louise", isCorrect: false },
            { id: "b", answer: "Enid", isCorrect: true },
            { id: "c", answer: "Antonia", isCorrect: false },
            { id: "d", answer: "Mary", isCorrect: false }
          ]
        },


        "np_angela_middle_name": {
          id: "np_angela_middle_name",
          question:
            "What is Angela Turner's middle name?",
          answers: [
            { id: "a", answer: "Bernadette", isCorrect: false },
            { id: "b", answer: "Julienne", isCorrect: true },
            { id: "c", answer: "Joan", isCorrect: false },
            { id: "d", answer: "Shelagh", isCorrect: false }
          ]
        },
        "np_vals_aunts_pub": {
          id: "np_vals_aunts_pub",
          question:
            "What is the name of Valerie’s aunt’s pub?",
          answers: [
            { id: "a", answer: "The Hand and Sheers", isCorrect: false },
            { id: "c", answer: "The Master's Arms", isCorrect: false },
            { id: "b", answer: "The Black Sail", isCorrect: true },
            { id: "d", answer: "The Horse and Hound", isCorrect: false }
          ]
        },
        "np_where_is_the_motherhouse": {
          id: "np_where_is_the_motherhouse",
          question:
            "Where is the Motherhouse located?",
          answers: [
            { id: "a", answer: "Poplar", isCorrect: false },
            { id: "c", answer: "Surrey", isCorrect: false },
            { id: "b", answer: "Chatham", isCorrect: false },
            { id: "d", answer: "Chichester", isCorrect: true }
          ]
        },
        
      };

    case S1_S4:
      return {
        "14-vegetarian": {
          id: "14-vegetarian",
          question: "Which of the following characters is a self-confessed vegetarian?",
          answers: [
            { id: "a", answer: "Sister Evangelina", isCorrect: false },
            { id: "b", answer: "Phyllis", isCorrect: true },
            { id: "c", answer: "Jenny", isCorrect: false },
            { id: "d", answer: "Trixie", isCorrect: false }
          ]
        },


      };

    case S5_S8:
      return {};


    case CAST_CREW:
      return {
        "bts-author": {
          id: "bts-author",
          question: "Whose memoirs was the show originally based on?",
          answers: [
            { id: "a", answer: "Terri Coates", isCorrect: false },
            { id: "b", answer: "Pippa Harris", isCorrect: false },
            { id: "c", answer: "Jennifer Worth", isCorrect: true },
            { id: "d", answer: "Heidi Thomas", isCorrect: false }
          ]
        },
      };

      case MEDICAL:
        return {
          "medical-toxaemia-question": {
            id: "default-toxaemia-question",
            question: "'Toxaemia' is another word for...?",
            answers: [
              { id: "a", answer: "Pre-Eclampsia", isCorrect: true },
              { id: "b", answer: "Tokophobia", isCorrect: false },
              { id: "c", answer: "Cancer", isCorrect: false },
              { id: "d", answer: "Spina Bifida", isCorrect: false }
            ]
          },

          "medical-toxaemia-symptom-question": {
            id: "medical-toxaemia-symptom-question",
            question: "Which of the following is a symptom of Toxaemia/Pre-Eclampsia?",
            answers: [
              { id: "a", answer: "Swollen ancles", isCorrect: true },
              { id: "b", answer: "High blood pressure", isCorrect: true },
              { id: "c", answer: "Protein in urine", isCorrect: true },
              { id: "d", answer: "Headaches", isCorrect: true }
            ]
          },



        };

    default:
      return {};
  }
}
