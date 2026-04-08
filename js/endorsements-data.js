(() => {
  "use strict";

  window.APP_META = {
    "acVersion": "AC 61-65K",
    "dateIssued": "2025-11-14",
    "display": "AC 61-65K (issued 11/14/2025)",
    "sourceUrl": "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_61-65K.pdf",
    "documentPageUrl": "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1044476"
  };

  window.ENDORSEMENTS = [
    {
      "id": "A.1",
      "order": 1,
      "title": "Prerequisites for practical test",
      "cfr": [
        "14 CFR \u00a7 61.39(a)(6)(i) and (ii)"
      ],
      "acRef": "AC 61-65K, A.1",
      "sourcePage": "A-7",
      "verbatimText": "I certify that [First name, MI, Last name] has received and logged training time within 2 calendar months preceding the month of application in preparation for the practical test and they are prepared for the required practical test for the issuance of [applicable] certificate.",
      "category": "practical-test-prereqs",
      "explanation": "Confirms the applicant received recent practical-test preparation within the required 2-calendar-month window and is ready for the checkride.",
      "whoIssues": "standard-cfi",
      "expiration": "2-calendar-months",
      "perFlight": false,
      "aliases": [
        "a.1",
        "prerequisites for practical test"
      ],
      "tags": [
        "checkride",
        "practical test prereqs"
      ],
      "cardExplanation": "Certifies the applicant completed checkride prep training within the past 2 calendar months and is ready for the practical test."
    },
    {
      "id": "A.2",
      "order": 2,
      "title": "Review of deficiencies identified on airman knowledge test",
      "cfr": [
        "14 CFR \u00a7 61.39(a)(6)(iii), as required"
      ],
      "acRef": "AC 61-65K, A.2",
      "sourcePage": "A-7",
      "verbatimText": "I certify that [First name, MI, Last name] has demonstrated satisfactory knowledge of the subject areas in which they were deficient on the [applicable] airman knowledge test.",
      "category": "practical-test-prereqs",
      "explanation": "Documents review of the applicant's knowledge-test deficiencies when the Airman Knowledge Test Report shows missed areas.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.2",
        "review of deficiencies identified on airman knowledge test"
      ],
      "tags": [
        "knowledge test",
        "practical test prereqs"
      ],
      "cardExplanation": "Documents that the CFI reviewed the knowledge areas the applicant missed on their written test."
    },
    {
      "id": "A.3",
      "order": 3,
      "title": "Pre-solo aeronautical knowledge",
      "cfr": [
        "14 CFR \u00a7 61.87(b)"
      ],
      "acRef": "AC 61-65K, A.3",
      "sourcePage": "A-7",
      "verbatimText": "I certify that [First name, MI, Last name] has satisfactorily completed the pre-solo knowledge test of 14 CFR \u00a7 61.87(b) for the [make and model (M/M)] aircraft.",
      "category": "student-pilot",
      "explanation": "Use before first solo to confirm the student passed the required pre-solo knowledge test in that make and model.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.3",
        "pre-solo aeronautical knowledge"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Confirms the student passed the required pre-solo knowledge quiz for the specific make and model before their first solo."
    },
    {
      "id": "A.4",
      "order": 4,
      "title": "Pre-solo flight training",
      "cfr": [
        "14 CFR \u00a7 61.87(c)(1) and (2)"
      ],
      "acRef": "AC 61-65K, A.4",
      "sourcePage": "A-8",
      "verbatimText": "I certify that [First name, MI, Last name] has received and logged pre-solo flight training for the maneuvers and procedures that are appropriate to the [M/M] aircraft. I have determined they have demonstrated satisfactory proficiency and safety on the maneuvers and procedures required by 14 CFR \u00a7 61.87 in this or similar make and model of aircraft to be flown.",
      "category": "student-pilot",
      "explanation": "Documents the required pre-solo flight training and proficiency in the maneuvers and procedures for that make and model.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.4",
        "pre-solo flight training"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Confirms the student has completed and is proficient in all required pre-solo flight training for the specific make and model."
    },
    {
      "id": "A.5",
      "order": 5,
      "title": "Pre-solo flight training at night",
      "cfr": [
        "14 CFR \u00a7 61.87(o)"
      ],
      "acRef": "AC 61-65K, A.5",
      "sourcePage": "A-8",
      "verbatimText": "Flight training must be received within the 90-calendar-day period preceding the date of the flight. I certify that [First name, MI, Last name] has received flight training at night on night flying procedures that include takeoffs, approaches, landings, and go-arounds at night at the [airport name] airport where the solo flight will be conducted; navigation training at night in the vicinity of the [airport name] airport where the solo flight will be conducted. This endorsement expires 90 calendar days from the date the flight training at night was received.",
      "category": "student-pilot",
      "explanation": "Required before a student solos at night. It covers night procedures at the airport used and expires 90 calendar days after the night training.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.5",
        "night solo",
        "pre-solo flight training at night"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Required before a student solos at night. Covers night procedures at the specific airport and expires 90 calendar days after training."
    },
    {
      "id": "A.6",
      "order": 6,
      "title": "Solo flight (first 90-calendar-day period)",
      "cfr": [
        "14 CFR \u00a7 61.87(n)"
      ],
      "acRef": "AC 61-65K, A.6",
      "sourcePage": "A-8",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training to qualify for solo flying. I have determined they meet the applicable requirements of 14 CFR \u00a7 61.87(n) and are proficient to make solo flights in [M/M].",
      "category": "student-pilot",
      "explanation": "Authorizes a student's first solo flights in a specific make and model. It must be issued by the instructor who provided the training and expires in 90 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.6",
        "solo flight (first 90-calendar-day period)"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Authorizes a student's first solo flights in a specific make and model. Must be given by the training instructor and expires in 90 calendar days."
    },
    {
      "id": "A.7",
      "order": 7,
      "title": "Solo flight (each additional 90-calendar-day period)",
      "cfr": [
        "14 CFR \u00a7 61.87(p)"
      ],
      "acRef": "AC 61-65K, A.7",
      "sourcePage": "A-8",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training to qualify for solo flying. I have determined that they meet the applicable requirements of 14 CFR \u00a7 61.87(p) and are proficient to make solo flights in [M/M].",
      "category": "student-pilot",
      "explanation": "Renews solo authority for another 90 calendar days after the initial solo period expires.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.7",
        "solo flight (each additional 90-calendar-day period)"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Renews solo flying authority for another 90 calendar days after the initial endorsement expires."
    },
    {
      "id": "A.8",
      "order": 8,
      "title": "Solo takeoffs and landings at another airport within 25 nautical miles (NM)",
      "cfr": [
        "14 CFR \u00a7 61.93(b)(1)"
      ],
      "acRef": "AC 61-65K, A.8",
      "sourcePage": "A-8",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.93(b)(1). I have determined that they are proficient to practice solo takeoffs and landings at [airport name]. The takeoffs and landings at [airport name] are subject to the following conditions: [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Authorizes solo takeoffs and landings at another airport within 25 NM. This endorsement also expires in 90 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "25 nm solo",
        "a.8",
        "solo takeoffs and landings at another airport within 25 nautical miles (nm)",
        "solo to another airport"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Authorizes solo takeoffs and landings at a specific airport within 25 NM. Expires in 90 calendar days."
    },
    {
      "id": "A.9",
      "order": 9,
      "title": "Solo cross-country flight",
      "cfr": [
        "14 CFR \u00a7 61.93(c)(1) and (2)"
      ],
      "acRef": "AC 61-65K, A.9",
      "sourcePage": "A-8",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required solo cross-country training. I find they have met the applicable requirements of 14 CFR \u00a7 61.93 and are proficient to make solo cross-country flights in a [M/M] aircraft, [aircraft category].",
      "category": "student-pilot",
      "explanation": "Provides the initial solo cross-country endorsement package for the category, make, and model to be flown.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.9",
        "solo cross country flight",
        "solo cross-country flight"
      ],
      "tags": [
        "solo",
        "solo xc",
        "student pilot"
      ],
      "cardExplanation": "Grants the student general solo cross-country authority for a specific category, make, and model."
    },
    {
      "id": "A.10",
      "order": 10,
      "title": "Solo cross-country flight",
      "cfr": [
        "14 CFR \u00a7 61.93(c)(3)"
      ],
      "acRef": "AC 61-65K, A.10",
      "sourcePage": "A-8",
      "verbatimText": "I have reviewed the cross-country planning of [First name, MI, Last name]. I find the planning and preparation to be correct to make the solo flight from [origination airport] to [origination airport] via [route of flight] with landings at [names of the airports] in a [M/M] aircraft on [date]. [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Documents the instructor's review of planning for a specific solo cross-country flight. It is required before each solo XC flight.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": true,
      "aliases": [
        "a.10",
        "per flight solo xc",
        "solo cross country flight",
        "solo cross-country flight",
        "solo xc planning"
      ],
      "tags": [
        "solo",
        "solo xc",
        "student pilot"
      ],
      "cardExplanation": "Documents the CFI's review of a student's planning for a specific solo cross-country flight. Required before every solo XC flight."
    },
    {
      "id": "A.11",
      "order": 11,
      "title": "Repeated solo cross-country flights not more than 50 NM from the point of departure",
      "cfr": [
        "14 CFR \u00a7 61.93(b)(2)"
      ],
      "acRef": "AC 61-65K, A.11",
      "sourcePage": "A-9",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in both directions between and at both [airport names]. I have determined that they are proficient of 14 CFR \u00a7 61.93(b)(2) to conduct repeated solo cross-country flights over that route, subject to the following conditions: [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Approves repeated solo cross-country flights on a specific route not more than 50 NM from the departure point.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.11",
        "repeated solo cross country flights not more than 50 nm from the point of departure",
        "repeated solo cross-country flights not more than 50 nm from the point of departure"
      ],
      "tags": [
        "solo",
        "solo xc",
        "student pilot"
      ],
      "cardExplanation": "Authorizes repeated solo cross-country flights on a specific route no more than 50 NM from the departure airport."
    },
    {
      "id": "A.12",
      "order": 12,
      "title": "Solo flight in Class B airspace",
      "cfr": [
        "14 CFR \u00a7 61.95(a)"
      ],
      "acRef": "AC 61-65K, A.12",
      "sourcePage": "A-9",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.95(a). I have determined they are proficient to conduct solo flights in [name of Class B] airspace. [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Authorizes student solo flight in Class B airspace after the required training and proficiency review. Expires in 90 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.12",
        "class b",
        "class b solo",
        "solo flight in class b airspace"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Authorizes a student to fly solo inside Class B airspace after required training. Expires in 90 calendar days."
    },
    {
      "id": "A.13",
      "order": 13,
      "title": "Solo flight to, from, or at an airport located in Class B airspace",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.95(b) and 91.131(b)(1)"
      ],
      "acRef": "AC 61-65K, A.13",
      "sourcePage": "A-9",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.95(b)(1). I have determined that they are proficient to conduct solo flight operations at [name of airport]. [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Authorizes student solo flight to, from, or at a Class B airport. Expires in 90 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.13",
        "class b",
        "class b airport solo",
        "solo flight to, from, or at an airport located in class b airspace"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Authorizes a student to fly solo to, from, or at a Class B airport after required training. Expires in 90 calendar days."
    },
    {
      "id": "A.14",
      "order": 14,
      "title": "Endorsement of U.S. citizenship recommended by the Transportation Security Administration (TSA)",
      "cfr": [
        "Title 49 of the Code of Federal Regulations (49 CFR) \u00a7 1552.15(c)"
      ],
      "acRef": "AC 61-65K, A.14",
      "sourcePage": "A-9",
      "verbatimText": "The flight instructor must keep a copy of the documents used to provide proof of citizenship for 5 years or make the following endorsement in the student\u2019s logbook and the instructor\u2019s logbook or other record used to record flight student endorsements with the following: I certify that [First name, MI, Last name] has presented me a [type of document presented, such as a U.S. birth certificate or U.S. passport, and the relevant control or sequential number on the document, if any] establishing that they are a U.S. citizen or national in accordance with 49 CFR \u00a7 1552.7(a).",
      "category": "student-pilot",
      "explanation": "Provides the TSA-recommended citizenship logbook endorsement when the instructor uses the endorsement method instead of retaining document copies.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.14",
        "citizenship endorsement",
        "endorsement of u.s. citizenship recommended by the transportation security administration (tsa)",
        "endorsement of us citizenship recommended by the transportation security administration (tsa)",
        "tsa citizenship"
      ],
      "tags": [
        "student pilot"
      ],
      "cardExplanation": "Provides the TSA-recommended citizenship endorsement when the CFI chooses the logbook method instead of keeping document copies on file."
    },
    {
      "id": "A.15",
      "order": 15,
      "title": "Solo flight in Class B, C, and D airspace",
      "cfr": [
        "14 CFR \u00a7 61.94(a)"
      ],
      "acRef": "AC 61-65K, A.15",
      "sourcePage": "A-9",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.94(a). I have determined they are proficient to conduct solo flights in [name of Class B, C, or D] airspace and authorized to operate to, from, through, and at [name of airport]. [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Authorizes a sport or recreational student to solo in Class B, C, or D airspace. Expires in 90 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.15",
        "class b",
        "solo flight in class b, c, and d airspace"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Authorizes a sport or recreational student to fly solo in Class B, C, or D airspace. Expires in 90 calendar days."
    },
    {
      "id": "A.16",
      "order": 16,
      "title": "Solo flight to, from, or at an airport located in Class B, C, or D airspace or at an airport having an operational control tower",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.94(a) and 91.131(b)(1)"
      ],
      "acRef": "AC 61-65K, A.16",
      "sourcePage": "A-10",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.94(a)(1). I have determined that they are proficient to conduct solo flight operations at [name of airport located in Class B, C, or D airspace or an airport having an operational control tower]. [List any applicable conditions or limitations.]",
      "category": "student-pilot",
      "explanation": "Authorizes a sport or recreational student to solo to, from, or at a towered airport or airport in Class B, C, or D airspace. Expires in 90 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "90-calendar-days",
      "perFlight": false,
      "aliases": [
        "a.16",
        "class b",
        "solo flight to, from, or at an airport located in class b, c, or d airspace or at an airport having an operational control tower",
        "towered airport solo"
      ],
      "tags": [
        "solo",
        "student pilot"
      ],
      "cardExplanation": "Authorizes a sport or recreational student to fly solo to, from, or at a towered airport or airport within Class B, C, or D airspace. Expires in 90 calendar days."
    },
    {
      "id": "A.17",
      "order": 17,
      "title": "Aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.35(a)(1) and 61.309"
      ],
      "acRef": "AC 61-65K, A.17",
      "sourcePage": "A-10",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required aeronautical knowledge training of 14 CFR \u00a7 61.309. I have determined that they are prepared for the [name of] knowledge test.",
      "category": "sport-pilot",
      "explanation": "Confirms the required ground training or review is complete and the applicant is prepared for the aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.17",
        "aeronautical knowledge test"
      ],
      "tags": [
        "knowledge test",
        "sport pilot"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the aeronautical knowledge test."
    },
    {
      "id": "A.18",
      "order": 18,
      "title": "Taking flight proficiency check for different category or class of aircraft",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.309 and 61.311"
      ],
      "acRef": "AC 61-65K, A.18",
      "sourcePage": "A-10",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7\u00a7 61.309 and 61.311 and have determined that they are prepared for the [name of] proficiency check. /s/ [date] S. P. (Instructor name) 987654321 RE 12-31-2026 Note: Cannot be provided to applicants seeking an airplane or helicopter privilege. Must accomplish a practical test, 14 CFR \u00a7 61.321(b).",
      "category": "sport-pilot",
      "explanation": "Confirms the required training and proficiency for the taking flight proficiency check for different category or class of aircraft.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.18",
        "taking flight proficiency check for different category or class of aircraft"
      ],
      "tags": [
        "checkride",
        "sport pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to take a flight proficiency check for a different category or class of aircraft."
    },
    {
      "id": "A.19",
      "order": 19,
      "title": "Passing flight proficiency check for different category or class of aircraft",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.309 and 61.311"
      ],
      "acRef": "AC 61-65K, A.19",
      "sourcePage": "A-10",
      "verbatimText": "I certify that [First name, MI, Last name] has met the requirements of 14 CFR \u00a7\u00a7 61.309 and 61.311, and I have determined them proficient to act as pilot in command of [category and class of] aircraft. /s/ [date] S. P. (Instructor name) 987654321 RE 12-31-2026 Note: Cannot be provided to applicants seeking an airplane or helicopter privilege. Must accomplish a practical test, 14 CFR \u00a7 61.321(b).",
      "category": "sport-pilot",
      "explanation": "Confirms the required training and proficiency for the passing flight proficiency check for different category or class of aircraft.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.19",
        "passing flight proficiency check for different category or class of aircraft"
      ],
      "tags": [
        "checkride",
        "sport pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to pass a flight proficiency check for a different category or class of aircraft."
    },
    {
      "id": "A.20",
      "order": 20,
      "title": "Taking sport pilot practical test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.309, 61.311, and 61.313"
      ],
      "acRef": "AC 61-65K, A.20",
      "sourcePage": "A-10",
      "verbatimText": "I certify that [First name, MI, Last name] has received the training required in accordance with 14 CFR \u00a7\u00a7 61.309 and 61.311 and met the aeronautical experience requirements of 14 CFR \u00a7 61.313. I have determined that they are prepared for the [type of] practical test. Note: The endorsement for a practical test is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in endorsements 1 and 2 (see paragraphs A.1 and A.2).",
      "category": "sport-pilot",
      "explanation": "Confirms the required training and proficiency for the taking sport pilot practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.20",
        "taking sport pilot practical test"
      ],
      "tags": [
        "checkride",
        "sport pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to take the sport pilot practical test."
    },
    {
      "id": "A.21",
      "order": 21,
      "title": "Passing a sport pilot practical test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.309, 61.311, and 61.313"
      ],
      "acRef": "AC 61-65K, A.21",
      "sourcePage": "A-11",
      "verbatimText": "This endorsement is required by 14 CFR \u00a7 61.317 and is issued by an examiner. I certify that [First name, MI, Last name] has met the requirements of 14 CFR \u00a7\u00a7 61.309, 61.311, and 61.313, and I have determined them proficient to act as pilot in command of [category and class of] aircraft. /s/ [date] Examiner 987654321 RE 12-31-2026",
      "category": "sport-pilot",
      "explanation": "Confirms the required training and proficiency for the passing a sport pilot practical test.",
      "whoIssues": "examiner-only",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.21",
        "passing a sport pilot practical test"
      ],
      "tags": [
        "checkride",
        "sport pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to pass the sport pilot practical test."
    },
    {
      "id": "A.22",
      "order": 22,
      "title": "Passing a sport pilot practical test with a simplified flight controls limitation",
      "cfr": [
        "14 CFR \u00a7 61.45(g)(4)(ii)"
      ],
      "acRef": "AC 61-65K, A.22",
      "sourcePage": "A-11",
      "verbatimText": "This endorsement is required by 14 CFR \u00a7 61.45 and is issued by an examiner. I certify that [First name, MI, Last name] has successfully completed the practical test in [category/class/model] with simplified flight controls designation and is authorized to act as pilot in command in [aircraft category/class] limited to [aircraft model] with simplified flight controls designation. /s/ [date] Examiner 987654321 RE 12-31-2026",
      "category": "sport-pilot",
      "explanation": "Confirms the required training and proficiency for the passing a sport pilot practical test with a simplified flight controls limitation.",
      "whoIssues": "examiner-only",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.22",
        "passing a sport pilot practical test with a simplified flight controls limitation"
      ],
      "tags": [
        "checkride",
        "sport pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to pass the sport pilot practical test with a simplified flight controls limitation."
    },
    {
      "id": "A.23",
      "order": 23,
      "title": "Class B, C, or D airspace; at an airport located in Class B, C, or D airspace; or to, from, through, or at an airport having an operational control tower",
      "cfr": [
        "14 CFR \u00a7 61.325"
      ],
      "acRef": "AC 61-65K, A.23",
      "sourcePage": "A-11",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.325. I have determined they are proficient to conduct operations in Class B, C, or D airspace; at an airport located in Class B, C, or D airspace; or to, from, through, or at an airport having an operational control tower.",
      "category": "sport-pilot",
      "explanation": "Documents the training, qualification, or authorization described in class b, c, or d airspace; at an airport located in class b, c, or d airspace; or to, from, through, or at an airport having an operational control tower.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.23",
        "class b",
        "class b, c, or d airspace; at an airport located in class b, c, or d airspace; or to, from, through, or at an airport having an operational control tower"
      ],
      "tags": [
        "sport pilot"
      ],
      "cardExplanation": "Authorizes a sport pilot to operate in Class B, C, or D airspace or at a towered airport after completing the required training."
    },
    {
      "id": "A.24",
      "order": 24,
      "title": "Aircraft that has a maximum speed in level flight with maximum continuous power (V H) less than or equal to 87 Knots Calibrated Airspeed (KCAS)",
      "cfr": [
        "14 CFR \u00a7 61.327"
      ],
      "acRef": "AC 61-65K, A.24",
      "sourcePage": "A-11",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7 61.327(a) in a [M/M] aircraft. I have determined them proficient to act as pilot in command of an aircraft that has a V H less than or equal to 87 KCAS.",
      "category": "sport-pilot",
      "explanation": "Documents the training, qualification, or authorization described in aircraft that has a maximum speed in level flight with maximum continuous power (v h) less than or equal to 87 knots calibrated airspeed (kcas).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.24",
        "aircraft that has a maximum speed in level flight with maximum continuous power (v h) less than or equal to 87 knots calibrated airspeed (kcas)"
      ],
      "tags": [
        "sport pilot"
      ],
      "cardExplanation": "Authorizes a sport pilot to act as PIC in an aircraft with a VH at or below 87 KCAS after completing the required training."
    },
    {
      "id": "A.25",
      "order": 25,
      "title": "Aircraft that has a VH greater than 87 KCAS",
      "cfr": [
        "14 CFR \u00a7 61.327"
      ],
      "acRef": "AC 61-65K, A.25",
      "sourcePage": "A-11",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7 61.327(b) in a [M/M] aircraft. I have determined them proficient to act as pilot in command of an aircraft that has a V H greater than 87 KCAS.",
      "category": "sport-pilot",
      "explanation": "Documents the training, qualification, or authorization described in aircraft that has a vh greater than 87 kcas.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.25",
        "aircraft that has a vh greater than 87 kcas"
      ],
      "tags": [
        "sport pilot"
      ],
      "cardExplanation": "Authorizes a sport pilot to act as PIC in an aircraft with a VH above 87 KCAS after completing the required training."
    },
    {
      "id": "A.26",
      "order": 26,
      "title": "Flight training at night",
      "cfr": [
        "14 CFR \u00a7 61.329"
      ],
      "acRef": "AC 61-65K, A.26",
      "sourcePage": "A-12",
      "verbatimText": "I certify that [First Name, MI, Last Name], [grade of pilot certificate], [certificate number], has received the required training at night in a [category and class] aircraft. I have determined they meet all of the requirements of 14 CFR \u00a7 61.329(a) and are proficient to operate as a sport pilot at night.",
      "category": "sport-pilot",
      "explanation": "Documents the training, qualification, or authorization described in flight training at night.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.26",
        "flight training at night"
      ],
      "tags": [
        "sport pilot"
      ],
      "cardExplanation": "Documents completion of the required flight training at night for a sport pilot."
    },
    {
      "id": "A.27",
      "order": 27,
      "title": "To act as pilot in command (PIC) in an aircraft with retractable landing gear",
      "cfr": [
        "14 CFR \u00a7 61.331(a)"
      ],
      "acRef": "AC 61-65K, A.27",
      "sourcePage": "A-12",
      "verbatimText": "I certify that [First Name, MI, Last Name], [certificate number], has received the required training of 14 CFR \u00a7 61.331(a) in an aircraft with retractable landing gear. I have determined that they are proficient in the operation of an aircraft with retractable landing gear when exercising their sport pilot privileges.",
      "category": "sport-pilot",
      "explanation": "Documents the training, qualification, or authorization described in to act as pilot in command (pic) in an aircraft with retractable landing gear.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.27",
        "to act as pilot in command (pic) in an aircraft with retractable landing gear"
      ],
      "tags": [
        "sport pilot"
      ],
      "cardExplanation": "Authorizes a sport pilot to act as PIC in an aircraft with retractable landing gear after completing the required training."
    },
    {
      "id": "A.28",
      "order": 28,
      "title": "To act as PIC in an airplane with a manual controllable pitch propeller",
      "cfr": [
        "14 CFR \u00a7 61.331(b)"
      ],
      "acRef": "AC 61-65K, A.28",
      "sourcePage": "A-12",
      "verbatimText": "I certify that [First Name, MI, Last Name], [certificate number], has received the required training of 14 CFR \u00a7 61.331(b) in an airplane with a controllable pitch propeller. I have determined that they are proficient in the operation of an airplane with a controllable pitch propeller when exercising their sport pilot privileges.",
      "category": "sport-pilot",
      "explanation": "Use when endorsing a pilot to act as PIC in an airplane with a manual controllable pitch propeller. It documents the required training and proficiency for that privilege.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.28",
        "to act as pic in an airplane with a manual controllable pitch propeller"
      ],
      "tags": [
        "sport pilot"
      ],
      "cardExplanation": "Authorizes a sport pilot to act as PIC in an airplane with a manually controllable pitch propeller after completing the required training."
    },
    {
      "id": "A.29",
      "order": 29,
      "title": "Aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.35(a)(1), 61.96(b)(3), and 61.97(b)"
      ],
      "acRef": "AC 61-65K, A.29",
      "sourcePage": "A-12",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.97(b). I have determined that they are prepared for the [name of] knowledge test.",
      "category": "recreational-pilot",
      "explanation": "Confirms the required ground training or review is complete and the applicant is prepared for the aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.29",
        "aeronautical knowledge test"
      ],
      "tags": [
        "knowledge test",
        "recreational pilot"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the aeronautical knowledge test for a recreational pilot certificate."
    },
    {
      "id": "A.30",
      "order": 30,
      "title": "Flight proficiency/practical test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.96(b)(5), 61.98(a) and (b), and 61.99"
      ],
      "acRef": "AC 61-65K, A.30",
      "sourcePage": "A-12",
      "verbatimText": "The endorsement for a practical test is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in paragraphs A.1 and A.2. I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7\u00a7 61.98(b) and 61.99. I have determined that they are prepared for the [name of] practical test.",
      "category": "recreational-pilot",
      "explanation": "Confirms the required training and proficiency for the flight proficiency/practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.30",
        "flight proficiency/practical test"
      ],
      "tags": [
        "checkride",
        "recreational pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to take the recreational pilot flight proficiency test or practical test."
    },
    {
      "id": "A.31",
      "order": 31,
      "title": "Recreational pilot to operate within 50 NM of the airport where training was received",
      "cfr": [
        "14 CFR \u00a7 61.101(b)"
      ],
      "acRef": "AC 61-65K, A.31",
      "sourcePage": "A-12",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.101(b). I have determined that they are competent to operate at the [name of airport].",
      "category": "recreational-pilot",
      "explanation": "Documents the training, qualification, or authorization described in recreational pilot to operate within 50 nm of the airport where training was received.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.31",
        "recreational pilot to operate within 50 nm of the airport where training was received"
      ],
      "tags": [
        "recreational pilot"
      ],
      "cardExplanation": "Authorizes a recreational pilot to fly within 50 NM of the airport where they received their training."
    },
    {
      "id": "A.32",
      "order": 32,
      "title": "Recreational pilot to act as PIC on a flight that exceeds 50 NM of the departure airport",
      "cfr": [
        "14 CFR \u00a7 61.101(c)"
      ],
      "acRef": "AC 61-65K, A.32",
      "sourcePage": "A-13",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required cross-country training of 14 CFR \u00a7 61.101(c). I have determined that they are proficient in cross-country flying of 14 CFR part 61 subpart E.",
      "category": "recreational-pilot",
      "explanation": "Documents the training, qualification, or authorization described in recreational pilot to act as pic on a flight that exceeds 50 nm of the departure airport.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.32",
        "recreational pilot to act as pic on a flight that exceeds 50 nm of the departure airport"
      ],
      "tags": [
        "recreational pilot"
      ],
      "cardExplanation": "Authorizes a recreational pilot to act as PIC on flights that go beyond 50 NM from the departure airport."
    },
    {
      "id": "A.33",
      "order": 33,
      "title": "Recreational pilot with less than 400 flight hours and no logged PIC time within the preceding 180 calendar days",
      "cfr": [
        "14 CFR \u00a7 61.101(g)"
      ],
      "acRef": "AC 61-65K, A.33",
      "sourcePage": "A-13",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required 180-day recurrent training of 14 CFR \u00a7 61.101(g) in a [M/M] aircraft. I have determined them proficient to act as pilot in command of that aircraft.",
      "category": "recreational-pilot",
      "explanation": "Documents the training, qualification, or authorization described in recreational pilot with less than 400 flight hours and no logged pic time within the preceding 180 calendar days.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.33",
        "recreational pilot with less than 400 flight hours and no logged pic time within the preceding 180 calendar days"
      ],
      "tags": [
        "recreational pilot"
      ],
      "cardExplanation": "Authorizes a recreational pilot with fewer than 400 hours and no logged PIC time in the past 180 days to resume acting as PIC after completing the required training."
    },
    {
      "id": "A.34",
      "order": 34,
      "title": "Recreational pilot to conduct solo flights for the purpose of obtaining an additional certificate or rating while under the supervision of an authorized flight instructor",
      "cfr": [
        "14 CFR \u00a7 61.101(j)"
      ],
      "acRef": "AC 61-65K, A.34",
      "sourcePage": "A-13",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.87 in a [M/M] aircraft. I have determined they are prepared to conduct a solo flight on [date] under the following conditions: [List all conditions which require endorsement (e.g., flight which requires communication with air traffic control (ATC), flight in an aircraft for which the pilot does not hold a category/class rating, etc.).]",
      "category": "recreational-pilot",
      "explanation": "Use when authorizing recreational pilot to conduct solo flights for the purpose of obtaining an additional certificate or rating while under the supervision of an authorized flight instructor. It documents the required training and proficiency for this solo privilege.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.34",
        "recreational pilot to conduct solo flights for the purpose of obtaining an additional certificate or rating while under the supervision of an authorized flight instructor"
      ],
      "tags": [
        "recreational pilot",
        "solo"
      ],
      "cardExplanation": "Authorizes a recreational pilot to conduct solo flights to work toward an additional certificate or rating while under CFI supervision."
    },
    {
      "id": "A.35",
      "order": 35,
      "title": "Class B, C, or D airspace; at an airport located in Class B, C, or D airspace; or to, from, through, or at an airport having an operational control tower",
      "cfr": [
        "14 CFR \u00a7 61.101(d)"
      ],
      "acRef": "AC 61-65K, A.35",
      "sourcePage": "A-13",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.101(d). I have determined they are proficient to conduct operations in Class B, C, or D airspace; at an airport located in Class B, C, or D airspace; or to, from, through, or at an airport having an operational control tower.",
      "category": "recreational-pilot",
      "explanation": "Documents the training, qualification, or authorization described in class b, c, or d airspace; at an airport located in class b, c, or d airspace; or to, from, through, or at an airport having an operational control tower.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.35",
        "class b",
        "class b, c, or d airspace; at an airport located in class b, c, or d airspace; or to, from, through, or at an airport having an operational control tower"
      ],
      "tags": [
        "recreational pilot"
      ],
      "cardExplanation": "Authorizes a recreational pilot to fly in Class B, C, or D airspace or to, from, or at a towered airport after completing the required training."
    },
    {
      "id": "A.36",
      "order": 36,
      "title": "Aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.35(a)(1), 61.103(d), and 61.105"
      ],
      "acRef": "AC 61-65K, A.36",
      "sourcePage": "A-13",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7 61.105. I have determined they are prepared for the [name of] knowledge test.",
      "category": "private-pilot",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.36",
        "aeronautical knowledge test"
      ],
      "tags": [
        "knowledge test",
        "private pilot"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the private pilot aeronautical knowledge test."
    },
    {
      "id": "A.37",
      "order": 37,
      "title": "Flight proficiency/practical test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.103(f), 61.107(b), and 61.109"
      ],
      "acRef": "AC 61-65K, A.37",
      "sourcePage": "A-14",
      "verbatimText": "The endorsement for a practical test is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in paragraphs A.1 and A.2. I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7\u00a7 61.107 and 61.109. I have determined they are prepared for the [name of] practical test.",
      "category": "private-pilot",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight proficiency/practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.37",
        "flight proficiency/practical test"
      ],
      "tags": [
        "checkride",
        "private pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and is proficient to take the private pilot flight proficiency test or practical test."
    },
    {
      "id": "A.38",
      "order": 38,
      "title": "Aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.35(a)(1), 61.123(c), and 61.125"
      ],
      "acRef": "AC 61-65K, A.38",
      "sourcePage": "A-14",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.125. I have determined that they are prepared for the [name of] knowledge test.",
      "category": "commercial-pilot",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.38",
        "aeronautical knowledge test"
      ],
      "tags": [
        "commercial pilot",
        "knowledge test"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the instrument rating aeronautical knowledge test."
    },
    {
      "id": "A.39",
      "order": 39,
      "title": "Flight proficiency/practical test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.123(e), 61.127, and 61.129"
      ],
      "acRef": "AC 61-65K, A.39",
      "sourcePage": "A-14",
      "verbatimText": "The endorsement for a practical test is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in paragraphs A.1 and A.2. I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7\u00a7 61.127 and 61.129. I have determined that they are prepared for the [name of] practical test.",
      "category": "commercial-pilot",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight proficiency/practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.39",
        "flight proficiency/practical test"
      ],
      "tags": [
        "checkride",
        "commercial pilot"
      ],
      "cardExplanation": "Confirms the applicant has the required training and is proficient to take the instrument rating flight proficiency test or practical test."
    },
    {
      "id": "A.40",
      "order": 40,
      "title": "Restricted privileges ATP Certificate, Airplane Multiengine Land (AMEL) rating",
      "cfr": [
        "14 CFR \u00a7 61.160"
      ],
      "acRef": "AC 61-65K, A.40",
      "sourcePage": "A-14",
      "verbatimText": "This certifying statement can only be provided by an authorized institution of higher education in accordance with its Letter of Authorization (LOA). Refer to AC 61-139, Institution of Higher Education\u2019s Application for Authority to Certify its Graduates for an Airline Transport Pilot Certificate with Reduced Aeronautical Experience. The [insert institution\u2019s name] certifies that the recipient of this degree has successfully completed all of the aviation coursework requirements of 14 CFR \u00a7 61.160[(b), (c), or (d)] and therefore meets the academic eligibility requirements of 14 CFR \u00a7 61.160[(b), (c), or (d)].",
      "category": "atp",
      "explanation": "Documents the training, qualification, or authorization described in restricted privileges atp certificate, airplane multiengine land (amel) rating.",
      "whoIssues": "approved-institution",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.40",
        "r-atp",
        "restricted atp",
        "restricted privileges atp certificate, airplane multiengine land (amel) rating"
      ],
      "tags": [
        "atp"
      ],
      "cardExplanation": "Documents the training and qualification required for a restricted privileges ATP certificate with an Airplane Multiengine Land rating."
    },
    {
      "id": "A.41",
      "order": 41,
      "title": "ATP Certification Training Program (CTP)",
      "cfr": [
        "14 CFR \u00a7 61.153(e)"
      ],
      "acRef": "AC 61-65K, A.41",
      "sourcePage": "A-14",
      "verbatimText": "This endorsement is only provided by an approved training provider of an ATP CTP and is found on the graduation certificate a pilot receives following completion of that training in accordance with 14 CFR \u00a7 61.156. Refer to AC 61-138, Airline Transport Pilot Certification Training Program. The applicant named above has successfully completed the Airline Transport Pilot Certification Training Program as required by 14 CFR \u00a7 61.156, and therefore has met the prerequisite required by 14 CFR \u00a7 61.35(a)(2) for the Airline Transport Pilot Multiengine Airplane Knowledge Test.",
      "category": "atp",
      "explanation": "Documents the training, qualification, or authorization described in atp certification training program (ctp).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.41",
        "atp certification training program (ctp)",
        "atp ctp"
      ],
      "tags": [
        "atp"
      ],
      "cardExplanation": "Documents successful completion of the ATP Certification Training Program required before taking the ATP knowledge test."
    },
    {
      "id": "A.42",
      "order": 42,
      "title": "Aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.35(a)(1) and 61.65(a) and (b)"
      ],
      "acRef": "AC 61-65K, A.42",
      "sourcePage": "A-15",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.65(b). I have determined that they are prepared for the Instrument\u2013[airplane, helicopter, or powered-lift] knowledge test.",
      "category": "instrument-rating",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.42",
        "aeronautical knowledge test"
      ],
      "tags": [
        "instrument rating",
        "knowledge test"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the ATP aeronautical knowledge test."
    },
    {
      "id": "A.43",
      "order": 43,
      "title": "Flight proficiency/practical test",
      "cfr": [
        "14 CFR \u00a7 61.65(a)(6)"
      ],
      "acRef": "AC 61-65K, A.43",
      "sourcePage": "A-15",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.65(c) and (d). I have determined they are prepared for the Instrument\u2013[airplane, helicopter, or powered-lift] practical test.",
      "category": "instrument-rating",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight proficiency/practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.43",
        "flight proficiency/practical test"
      ],
      "tags": [
        "checkride",
        "instrument rating"
      ],
      "cardExplanation": "Confirms the applicant has the required training and is proficient to take the ATP flight proficiency test or practical test."
    },
    {
      "id": "A.44",
      "order": 44,
      "title": "Prerequisites for instrument practical tests",
      "cfr": [
        "14 CFR \u00a7 61.39(a)"
      ],
      "acRef": "AC 61-65K, A.44",
      "sourcePage": "A-15",
      "verbatimText": "I certify that [First name, MI, Last name] has received and logged the required flight time/training of 14 CFR \u00a7 61.39(a) in preparation for the practical test within 2 calendar months preceding the date of the test and has satisfactory knowledge of the subject areas in which they were shown to be deficient by the FAA Airman Knowledge Test Report. I have determined they are prepared for the Instrument\u2013[airplane, helicopter, or powered-lift] practical test.",
      "category": "instrument-rating",
      "explanation": "Combines the instrument practical-test recommendation with the required review of knowledge-test deficiencies. It is limited to 2 calendar months.",
      "whoIssues": "standard-cfi",
      "expiration": "2-calendar-months",
      "perFlight": false,
      "aliases": [
        "a.44",
        "prerequisites for instrument practical tests"
      ],
      "tags": [
        "checkride",
        "instrument rating"
      ],
      "cardExplanation": "Combines the instrument practical test recommendation with documentation of knowledge test deficiency review. Valid for 2 calendar months."
    },
    {
      "id": "A.45",
      "order": 45,
      "title": "Fundamentals of instructing knowledge test",
      "cfr": [
        "14 CFR \u00a7 61.183(d)"
      ],
      "acRef": "AC 61-65K, A.45",
      "sourcePage": "A-15",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required fundamentals of instruction training of 14 CFR \u00a7 61.185(a)(1). I have determined that they are prepared for the Fundamentals of Instructing knowledge test.",
      "category": "flight-instructor",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the fundamentals of instructing knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.45",
        "fundamentals of instructing knowledge test"
      ],
      "tags": [
        "flight instructor",
        "knowledge test"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the Fundamentals of Instructing knowledge test."
    },
    {
      "id": "A.46",
      "order": 46,
      "title": "Flight instructor aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7 61.183(f)"
      ],
      "acRef": "AC 61-65K, A.46",
      "sourcePage": "A-15",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.185(a)[(2) or (3) (as appropriate to the flight instructor rating sought)]. I have determined that they are prepared for the [name of] knowledge test.",
      "category": "flight-instructor",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the flight instructor aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.46",
        "flight instructor aeronautical knowledge test"
      ],
      "tags": [
        "flight instructor",
        "knowledge test"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the flight instructor aeronautical knowledge test."
    },
    {
      "id": "A.47",
      "order": 47,
      "title": "Flight instructor ground and flight proficiency/practical test",
      "cfr": [
        "14 CFR \u00a7 61.183(g)"
      ],
      "acRef": "AC 61-65K, A.47",
      "sourcePage": "A-15",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.187(b). I have determined that they are prepared for the certificated flight instructor \u2013 [aircraft category and class] practical test. Note: The endorsement for a practical test is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in endorsements 1 and 2 (see paragraphs A.1 and A.2).",
      "category": "flight-instructor",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight instructor ground and flight proficiency/practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.47",
        "flight instructor ground and flight proficiency/practical test"
      ],
      "tags": [
        "checkride",
        "flight instructor"
      ],
      "cardExplanation": "Confirms the applicant has the required training and is proficient to take the flight instructor ground and flight practical test."
    },
    {
      "id": "A.48",
      "order": 48,
      "title": "Flight instructor certificate with instrument\u2013(category/class) rating/practical test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.183(g) and 61.187(a) and (b)(7)"
      ],
      "acRef": "AC 61-65K, A.48",
      "sourcePage": "A-16",
      "verbatimText": "The endorsement for a practical test is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in endorsements 1 and 2 (see paragraphs A.1 and A.2). I certify that [First name, MI, Last name] has received the required certificated flight instructor - instrument training of 14 CFR \u00a7 61.187(b)(7). I have determined they are prepared for the certificated flight instructor - instrument\u2013[airplane, helicopter, or powered-lift] practical test.",
      "category": "flight-instructor",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight instructor certificate with instrument\u2013(category/class) rating/practical test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.48",
        "flight instructor certificate with instrument\u2013(category/class) rating/practical test"
      ],
      "tags": [
        "checkride",
        "flight instructor"
      ],
      "cardExplanation": "Confirms the applicant has the required training and is proficient to take the flight instructor practical test for an instrument category or class rating."
    },
    {
      "id": "A.49",
      "order": 49,
      "title": "Spin training",
      "cfr": [
        "14 CFR \u00a7 61.183(i)(1)"
      ],
      "acRef": "AC 61-65K, A.49",
      "sourcePage": "A-16",
      "verbatimText": "The spin training endorsement is only required of flight instructor airplane and flight instructor glider applicants. I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.183(i) in [an airplane, a glider]. I have determined that they are competent and possess instructional proficiency in stall awareness, spin entry, spins, and spin recovery procedures.",
      "category": "flight-instructor",
      "explanation": "Documents the required spin training for the applicable flight instructor applicant.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.49",
        "spin training"
      ],
      "tags": [
        "flight instructor"
      ],
      "cardExplanation": "Documents that a flight instructor applicant completed the required spin awareness and recovery training."
    },
    {
      "id": "A.50",
      "order": 50,
      "title": "Helicopter Touchdown Autorotation",
      "cfr": [
        "FAA-S-8081-7, Flight Instructor Practical Test Standards for Rotorcraft Category Gyroplane Rating"
      ],
      "acRef": "AC 61-65K, A.50",
      "sourcePage": "A-16",
      "verbatimText": "I certify that [First name, MI, Last name] has received training in straight-in autorotations in a single engine helicopter and autorotation with turns in a single engine helicopter to include touchdown. I have determined that they are competent in instructional knowledge relating to the elements, common errors, performance, and correction of common errors related to straight-in autorotations in a single engine helicopter and autorotation with turns in a single engine helicopter.",
      "category": "flight-instructor",
      "explanation": "Documents the training, qualification, or authorization described in helicopter touchdown autorotation.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.50",
        "helicopter touchdown autorotation",
        "touchdown autorotation"
      ],
      "tags": [
        "flight instructor"
      ],
      "cardExplanation": "Documents that a helicopter flight instructor applicant completed the required touchdown autorotation training."
    },
    {
      "id": "A.51",
      "order": 51,
      "title": "Fundamentals of instructing knowledge test",
      "cfr": [
        "14 CFR \u00a7 61.405(a)(1)"
      ],
      "acRef": "AC 61-65K, A.51",
      "sourcePage": "A-16",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7 61.405(a)(1). I have determined that they are prepared for the Fundamentals of Instructing knowledge test.",
      "category": "sport-pilot-instructor",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the fundamentals of instructing knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.51",
        "fundamentals of instructing knowledge test"
      ],
      "tags": [
        "knowledge test",
        "sport pilot instructor"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the Fundamentals of Instructing knowledge test for a sport pilot flight instructor certificate."
    },
    {
      "id": "A.52",
      "order": 52,
      "title": "Sport pilot flight instructor aeronautical knowledge test",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.35(a)(1) and 61.405(a)"
      ],
      "acRef": "AC 61-65K, A.52",
      "sourcePage": "A-16",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.405(a)(2). I have determined that they are prepared for the [name of the knowledge test].",
      "category": "sport-pilot-instructor",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the sport pilot flight instructor aeronautical knowledge test.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.52",
        "sport pilot flight instructor aeronautical knowledge test"
      ],
      "tags": [
        "knowledge test",
        "sport pilot instructor"
      ],
      "cardExplanation": "Confirms the applicant completed the required ground training and is ready to take the sport pilot flight instructor aeronautical knowledge test."
    },
    {
      "id": "A.53",
      "order": 53,
      "title": "Flight instructor with a sport pilot rating flight proficiency check for additional category/class",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.409 and 61.419"
      ],
      "acRef": "AC 61-65K, A.53",
      "sourcePage": "A-17",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training in accordance with 14 CFR \u00a7\u00a7 61.409 and 61.419 and have determined that they are prepared for a proficiency check for the flight instructor with a sport pilot rating in a [aircraft category and class]. Note: Cannot be provided to applicants seeking an airplane or helicopter privilege. Must successfully accomplish a practical test per 14 CFR \u00a7 61.419(e).",
      "category": "sport-pilot-instructor",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight instructor with a sport pilot rating flight proficiency check for additional category/class.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.53",
        "flight instructor with a sport pilot rating flight proficiency check for additional category/class"
      ],
      "tags": [
        "checkride",
        "sport pilot instructor"
      ],
      "cardExplanation": "Confirms the applicant has the required training and proficiency to take a flight proficiency check for an additional category or class as a sport pilot flight instructor."
    },
    {
      "id": "A.54",
      "order": 54,
      "title": "Flight instructor with a sport pilot rating proficiency check completion endorsement for additional category or class privilege",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.409 and 61.419"
      ],
      "acRef": "AC 61-65K, A.54",
      "sourcePage": "A-17",
      "verbatimText": "I certify that [First name, MI, Last name] has successfully completed a proficiency check in accordance with 14 CFR \u00a7\u00a7 61.409 and 61.419. I have determined that they are proficient and authorized for the additional [aircraft category and class] flight instructor privilege. Note: Not applicable to the airplane or helicopter privilege. Must successfully accomplish a practical test per 14 CFR \u00a7 61.419(e).",
      "category": "sport-pilot-instructor",
      "explanation": "Confirms the required training and proficiency for the flight instructor with a sport pilot rating proficiency check completion endorsement for additional category or class privilege.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.54",
        "flight instructor with a sport pilot rating proficiency check completion endorsement for additional category or class privilege"
      ],
      "tags": [
        "sport pilot instructor"
      ],
      "cardExplanation": "Documents successful completion of a flight proficiency check for an additional category or class privilege as a sport pilot flight instructor."
    },
    {
      "id": "A.55",
      "order": 55,
      "title": "Flight instructor with a sport pilot rating practical test endorsement",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.409 and 61.411"
      ],
      "acRef": "AC 61-65K, A.55",
      "sourcePage": "A-17",
      "verbatimText": "An endorsement is required in addition to the 14 CFR \u00a7 61.39 endorsements provided in paragraphs A.1 and A.2. I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.409 and met the aeronautical experience requirements of 14 CFR \u00a7 61.411. I have determined that they are prepared for the flight instructor with a sport pilot rating practical test in a [aircraft category and class]. /s/ [date] S. P. [Instructor name] 987654321 RE 12-31-2026",
      "category": "sport-pilot-instructor",
      "explanation": "Confirms the applicant received the required training and is proficient for the flight instructor with a sport pilot rating practical test endorsement.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.55",
        "flight instructor with a sport pilot rating practical test endorsement"
      ],
      "tags": [
        "checkride",
        "sport pilot instructor"
      ],
      "cardExplanation": "Confirms the applicant has the required training and is proficient to take the sport pilot flight instructor practical test."
    },
    {
      "id": "A.56",
      "order": 56,
      "title": "Flight instructor with a sport pilot rating practical test completion endorsement",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.409 and 61.411"
      ],
      "acRef": "AC 61-65K, A.56",
      "sourcePage": "A-17",
      "verbatimText": "This endorsement is required by 14 CFR \u00a7 61.417 and is issued by an authorized evaluator. I certify that [First name, MI, Last name] has met the requirements in accordance with 14 CFR \u00a7\u00a7 61.409 and 61.411 and successfully completed the practical test. I have determined that they are proficient and authorized for the [aircraft category and class] flight instructor privilege. /s/ [date] S. P. [Examiner name] 987654321 RE 12-31-2026",
      "category": "sport-pilot-instructor",
      "explanation": "Confirms the required training and proficiency for the flight instructor with a sport pilot rating practical test completion endorsement.",
      "whoIssues": "examiner-only",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.56",
        "flight instructor with a sport pilot rating practical test completion endorsement"
      ],
      "tags": [
        "checkride",
        "sport pilot instructor"
      ],
      "cardExplanation": "Documents successful completion of the sport pilot flight instructor practical test."
    },
    {
      "id": "A.57",
      "order": 57,
      "title": "Flight instructor with a sport pilot rating to train sport pilots on flight by reference to instruments",
      "cfr": [
        "14 CFR \u00a7 61.412"
      ],
      "acRef": "AC 61-65K, A.57",
      "sourcePage": "A-17",
      "verbatimText": "This endorsement from an instructor certificated under 14 CFR part 61 subpart H to a flight instructor with a sport pilot rating (14 CFR part 61 subpart K) authorizes the 14 CFR part 61 subpart K instructor to train sport pilot candidates on control and maneuvering an airplane solely by reference to the instruments. I certify that I have given [First name, MI, Last name] 3 hours of flight training and 1 hour of ground instruction specific to providing flight training on control and maneuvering an airplane solely by reference to the instruments in accordance with 14 CFR \u00a7 61.412. I have determined that they are proficient and authorized to provide training on control and maneuvering an airplane solely by reference to the flight instruments to this instructor\u2019s sport pilot candidate, who intends to operate an aircraft with a V H greater than 87 KCAS on a cross-country flight. /s/ [date] Subpart H Instructor 987654321 RE 12-31-2026",
      "category": "sport-pilot-instructor",
      "explanation": "Documents the training, qualification, or authorization described in flight instructor with a sport pilot rating to train sport pilots on flight by reference to instruments.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.57",
        "flight instructor with a sport pilot rating to train sport pilots on flight by reference to instruments"
      ],
      "tags": [
        "sport pilot instructor"
      ],
      "cardExplanation": "Authorizes a sport pilot flight instructor to provide training in flight by reference to instruments after completing the required training."
    },
    {
      "id": "A.58",
      "order": 58,
      "title": "Spin training",
      "cfr": [
        "14 CFR \u00a7 61.405(b)(1)(ii)"
      ],
      "acRef": "AC 61-65K, A.58",
      "sourcePage": "A-18",
      "verbatimText": "This spin training endorsement is only required for flight instructor airplane and flight instructor glider applicants. I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.405(b)(1)(ii). I have determined that they are competent and possess instructional proficiency in stall awareness, spin entry, spins, and spin recovery procedures.",
      "category": "sport-pilot-instructor",
      "explanation": "Documents the required spin training for the applicable flight instructor applicant.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.58",
        "spin training"
      ],
      "tags": [
        "sport pilot instructor"
      ],
      "cardExplanation": "Documents that a sport pilot flight instructor applicant completed the required spin awareness and recovery training."
    },
    {
      "id": "A.59",
      "order": 59,
      "title": "Ground instructor who does not meet the recent experience requirements",
      "cfr": [
        "14 CFR \u00a7 61.217(d)"
      ],
      "acRef": "AC 61-65K, A.59",
      "sourcePage": "A-18",
      "verbatimText": "This endorsement is issued by an authorized instructor (ground or flight) as defined in 14 CFR \u00a7 61.1(b). I certify that [First name, MI, Last name] has demonstrated knowledge in the subject areas prescribed for a [basic, advanced, instrument] ground instructor under 14 CFR \u00a7 61.213(a)(3) and (a)(4), as appropriate.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in ground instructor who does not meet the recent experience requirements.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.59",
        "ground instructor who does not meet the recent experience requirements"
      ],
      "tags": [
        "additional recurrent"
      ],
      "cardExplanation": "Documents that a ground instructor who no longer meets the recent experience requirements has completed the refresher training needed to resume instructing."
    },
    {
      "id": "A.60",
      "order": 60,
      "title": "R-22/R-44 ground training",
      "cfr": [
        "SFAR 73, section 2(a)(1) or (2)"
      ],
      "acRef": "AC 61-65K, A.60",
      "sourcePage": "A-18",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] has received the ground training required by SFAR 73, section 2(a)(3)(i)\u2013(v).",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in r-22/r-44 ground training.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.60",
        "r-22/r-44 ground training"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Documents completion of the required ground training for operating an R-22 or R-44 helicopter."
    },
    {
      "id": "A.61",
      "order": 61,
      "title": "R-22 solo endorsement",
      "cfr": [
        "SFAR 73, section 2(b)(3)"
      ],
      "acRef": "AC 61-65K, A.61",
      "sourcePage": "A-18",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] meets the experience requirements of SFAR 73, section 2(b)(3) and has been given training specified by SFAR 73, section 2(b)(3)(i)\u2013(iv). They have been found proficient to solo the R-22 helicopter.",
      "category": "robinson-sfar73",
      "explanation": "Use when authorizing r-22 solo endorsement. It documents the required training and proficiency for this solo privilege.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.61",
        "r-22 solo endorsement"
      ],
      "tags": [
        "robinson",
        "robinson sfar73",
        "solo"
      ],
      "cardExplanation": "Authorizes a student to fly solo in an R-22 helicopter after completing the required training."
    },
    {
      "id": "A.62",
      "order": 62,
      "title": "R-22 PIC endorsement",
      "cfr": [
        "SFAR 73, section 2(b)(1)(ii)"
      ],
      "acRef": "AC 61-65K, A.62",
      "sourcePage": "A-19",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] has been given training specified by SFAR 73, section 2(b)(1)(ii)(A)\u2013(D) for Robinson R-22 helicopters and is proficient to act as pilot in command. An annual flight review must be completed by [date 12 calendar months after date of this endorsement] unless the requirements of SFAR 73, section 2(b)(1)(i) are met.",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in r-22 pic endorsement.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.62",
        "r-22 pic endorsement"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Authorizes a pilot to act as PIC in an R-22 helicopter after completing the required training."
    },
    {
      "id": "A.63",
      "order": 63,
      "title": "R-22 flight instructor endorsement",
      "cfr": [
        "SFAR 73, section 2(b)(5)(iv)"
      ],
      "acRef": "AC 61-65K, A.63",
      "sourcePage": "A-19",
      "verbatimText": "This endorsement may only be issued by an FAA aviation safety inspector (ASI) or authorized designated examiner per SFAR 73, section 2(b)(5)(iv). I certify that [First name, MI, Last name], holder of CFI Certificate No. [ ], meets the experience requirements and has completed the flight training specified by SFAR 73, section 2(b)(5)(i)\u2013(ii) and (iii)(A)\u2013(D), and has demonstrated an ability to provide instruction on the general subject areas of SFAR 73, section 2(a)(3) and the flight training identified in SFAR 73, section 2(b)(5)(iii) in a Robinson R-22 helicopter. /s/ [date] J. J. Jones DPE Designation Number, Exp. 12-31-2026; or /s/ [date] I. M. Inspector FAA Aviation Safety Inspector",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in r-22 flight instructor endorsement.",
      "whoIssues": "dpe-or-asi-only",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.63",
        "r-22 flight instructor endorsement"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Authorizes a flight instructor to provide training in an R-22 helicopter after completing the required training."
    },
    {
      "id": "A.64",
      "order": 64,
      "title": "Flight review in an R-22 helicopter",
      "cfr": [
        "SFAR 73, section 2(c)(1) and (3)"
      ],
      "acRef": "AC 61-65K, A.64",
      "sourcePage": "A-19",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] has satisfactorily completed the flight review in an R-22 required by 14 CFR \u00a7 61.56 and SFAR 73, section 2(c)(1) and (3), on [date of flight review].",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in flight review in an r-22 helicopter.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.64",
        "flight review in an r-22 helicopter"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Documents completion of a flight review conducted in an R-22 helicopter."
    },
    {
      "id": "A.65",
      "order": 65,
      "title": "R-44 solo endorsement",
      "cfr": [
        "SFAR 73, section 2(b)(4)"
      ],
      "acRef": "AC 61-65K, A.65",
      "sourcePage": "A-19",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] meets the experience requirements of SFAR 73, section 2(b)(4) and has been given training specified by SFAR 73, section 2(b)(4)(i)\u2013(iv). They have been found proficient to solo the R-44 helicopter.",
      "category": "robinson-sfar73",
      "explanation": "Use when authorizing r-44 solo endorsement. It documents the required training and proficiency for this solo privilege.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.65",
        "r-44 solo endorsement"
      ],
      "tags": [
        "robinson",
        "robinson sfar73",
        "solo"
      ],
      "cardExplanation": "Authorizes a student to fly solo in an R-44 helicopter after completing the required training."
    },
    {
      "id": "A.66",
      "order": 66,
      "title": "R-44 PIC endorsement",
      "cfr": [
        "SFAR 73, section 2(b)(2)(ii)"
      ],
      "acRef": "AC 61-65K, A.66",
      "sourcePage": "A-19",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] has been given training specified by SFAR 73, section 2(b)(2)(ii)(A)\u2013(D) for Robinson R-44 helicopters and is proficient to act as pilot in command. An annual flight review must be completed by [date 12 calendar months after date of this endorsement] unless the requirements of SFAR 73, section 2(b)(2)(i) are met.",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in r-44 pic endorsement.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.66",
        "r-44 pic endorsement"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Authorizes a pilot to act as PIC in an R-44 helicopter after completing the required training."
    },
    {
      "id": "A.67",
      "order": 67,
      "title": "R-44 flight instructor endorsement",
      "cfr": [
        "SFAR 73, section 2(b)(5)(iv)"
      ],
      "acRef": "AC 61-65K, A.67",
      "sourcePage": "A-19",
      "verbatimText": "This endorsement may only be issued by an FAA ASI or authorized Designated Pilot Examiner (DPE) per SFAR 73, section 2(b)(5)(iv). I certify that [First name, MI, Last name], holder of CFI Certificate No. [ ], meets the experience requirements and has completed the flight training specified by SFAR 73, section 2(b)(5)(i)\u2013(ii) and (iii)(A)\u2013(D), and has demonstrated an ability to provide instruction on the general subject areas of SFAR 73, section 2(a)(3) and the flight training identified in SFAR 73, section 2(b)(5)(iii) in a Robinson R-44 helicopter. /s/ [date] J. J. Jones DPE Designation Number, Exp. 12-31-2026; or /s/ [date] I. M. Inspector FAA Aviation Safety Inspector",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in r-44 flight instructor endorsement.",
      "whoIssues": "dpe-or-asi-only",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.67",
        "r-44 flight instructor endorsement"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Authorizes a flight instructor to provide training in an R-44 helicopter after completing the required training."
    },
    {
      "id": "A.68",
      "order": 68,
      "title": "Flight review in an R-44 helicopter",
      "cfr": [
        "SFAR 73, section 2(c)(2) and (3)"
      ],
      "acRef": "AC 61-65K, A.68",
      "sourcePage": "A-20",
      "verbatimText": "I certify that [First name, MI, Last name, Pilot Certificate No. ] has satisfactorily completed the flight review in an R-44 required by 14 CFR \u00a7 61.56 and SFAR 73, section 2(c)(2) and (3), on [date of flight review].",
      "category": "robinson-sfar73",
      "explanation": "Documents the training, qualification, or authorization described in flight review in an r-44 helicopter.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.68",
        "flight review in an r-44 helicopter"
      ],
      "tags": [
        "robinson",
        "robinson sfar73"
      ],
      "cardExplanation": "Documents completion of a flight review conducted in an R-44 helicopter."
    },
    {
      "id": "A.69",
      "order": 69,
      "title": "Completion of a flight review",
      "cfr": [
        "14 CFR \u00a7 61.56(a) and (c)"
      ],
      "acRef": "AC 61-65K, A.69",
      "sourcePage": "A-20",
      "verbatimText": "No logbook entry reflecting unsatisfactory performance on a flight review is required. I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has satisfactorily completed a flight review of 14 CFR \u00a7 61.56(a) on [date].",
      "category": "additional-recurrent",
      "explanation": "Completes a flight review when the instructor determines the pilot can safely exercise certificate privileges.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.69",
        "bfr",
        "biennial flight review",
        "completion of a flight review",
        "flight review"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents that a pilot satisfactorily completed a flight review and can safely exercise their certificate privileges."
    },
    {
      "id": "A.70",
      "order": 70,
      "title": "Completion of any phase of an FAA-sponsored Pilot Proficiency Program (WINGS)",
      "cfr": [
        "14 CFR \u00a7 61.56(e)"
      ],
      "acRef": "AC 61-65K, A.70",
      "sourcePage": "A-20",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has satisfactorily completed Level: [Basic/Advanced/Master, as appropriate],",
      "category": "additional-recurrent",
      "explanation": "Documents completion of a qualifying WINGS phase that substitutes for a flight review.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.70",
        "completion of any phase of an faa-sponsored pilot proficiency program (wings)",
        "wings"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents completion of a qualifying WINGS phase, which counts as a flight review."
    },
    {
      "id": "A.71",
      "order": 71,
      "title": "Completion of an instrument proficiency check (IPC)",
      "cfr": [
        "14 CFR \u00a7 61.57(d)"
      ],
      "acRef": "AC 61-65K, A.71",
      "sourcePage": "A-20",
      "verbatimText": "No logbook entry reflecting unsatisfactory performance on an IPC is required. I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has satisfactorily completed the instrument proficiency check of 14 CFR \u00a7 61.57(d) in a [M/M] aircraft on [date].",
      "category": "additional-recurrent",
      "explanation": "Completes an instrument proficiency check when a CFII determines the pilot is proficient to resume instrument privileges.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.71",
        "completion of an instrument proficiency check (ipc)",
        "instrument proficiency check",
        "ipc"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents that a pilot satisfactorily completed an instrument proficiency check and may resume flying under IFR."
    },
    {
      "id": "A.72",
      "order": 72,
      "title": "To act as PIC in a complex airplane",
      "cfr": [
        "14 CFR \u00a7 61.31(e)"
      ],
      "acRef": "AC 61-65K, A.72",
      "sourcePage": "A-20",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required training of 14 CFR \u00a7 61.31(e) in a [M/M] complex airplane. I have determined that they are proficient in the operation and systems of a complex airplane.",
      "category": "additional-recurrent",
      "explanation": "Required before acting as PIC under the privilege described in to act as pic in a complex airplane.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.72",
        "complex",
        "to act as pic in a complex airplane"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Required before acting as PIC in a complex airplane. Documents the required ground and flight training."
    },
    {
      "id": "A.73",
      "order": 73,
      "title": "To act as PIC in a high-performance airplane",
      "cfr": [
        "14 CFR \u00a7 61.31(f)"
      ],
      "acRef": "AC 61-65K, A.73",
      "sourcePage": "A-21",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required training of 14 CFR \u00a7 61.31(f) in a [M/M] high-performance airplane. I have determined that they are proficient in the operation and systems of a high-performance airplane.",
      "category": "additional-recurrent",
      "explanation": "Required before acting as PIC under the privilege described in to act as pic in a high-performance airplane.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.73",
        "high performance",
        "to act as pic in a high-performance airplane"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Required before acting as PIC in a high-performance airplane. Documents the required ground and flight training."
    },
    {
      "id": "A.74",
      "order": 74,
      "title": "To act as PIC in a pressurized aircraft capable of high-altitude operations",
      "cfr": [
        "14 CFR \u00a7 61.31(g)"
      ],
      "acRef": "AC 61-65K, A.74",
      "sourcePage": "A-21",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required training of 14 CFR \u00a7 61.31(g) in a [M/M] pressurized aircraft. I have determined that they are proficient in the operation and systems of a pressurized aircraft.",
      "category": "additional-recurrent",
      "explanation": "Required before acting as PIC under the privilege described in to act as pic in a pressurized aircraft capable of high-altitude operations.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.74",
        "high altitude",
        "pressurized",
        "to act as pic in a pressurized aircraft capable of high-altitude operations"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Required before acting as PIC in a pressurized aircraft capable of high-altitude operations. Documents the required ground and flight training."
    },
    {
      "id": "A.75",
      "order": 75,
      "title": "To act as PIC in a tailwheel airplane",
      "cfr": [
        "14 CFR \u00a7 61.31(i)"
      ],
      "acRef": "AC 61-65K, A.75",
      "sourcePage": "A-21",
      "verbatimText": "This endorsement may be given in a sport pilot aircraft by a sport pilot instructor or in an airplane by a flight instructor with a rating other than a sport pilot rating. I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required training of 14 CFR \u00a7 61.31(i) in a [M/M] of tailwheel airplane. I have determined that they are proficient in the operation of a tailwheel airplane.",
      "category": "additional-recurrent",
      "explanation": "Required before acting as PIC under the privilege described in to act as pic in a tailwheel airplane.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.75",
        "tailwheel",
        "to act as pic in a tailwheel airplane"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Required before acting as PIC in a tailwheel airplane. Documents the required ground and flight training."
    },
    {
      "id": "A.76",
      "order": 76,
      "title": "To act as PIC of an aircraft in solo operations when the pilot does not hold an appropriate category/class rating",
      "cfr": [
        "14 CFR \u00a7 61.31(d)(2)"
      ],
      "acRef": "AC 61-65K, A.76",
      "sourcePage": "A-21",
      "verbatimText": "I certify that [First name, MI, Last name] has received the training as required by 14 CFR \u00a7 61.31(d)(2) to serve as a pilot in command in a [specific category and class] of aircraft. I have determined that they are prepared to solo that [M/M] aircraft. Limitations: [optional].",
      "category": "additional-recurrent",
      "explanation": "Authorizes solo operations in an aircraft when the pilot does not yet hold the appropriate category or class rating.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.76",
        "solo in unrated aircraft",
        "solo without category class",
        "to act as pic of an aircraft in solo operations when the pilot does not hold an appropriate category/class rating"
      ],
      "tags": [
        "additional recurrent",
        "recurrent",
        "solo"
      ],
      "cardExplanation": "Authorizes a pilot to conduct solo operations in an aircraft category or class for which they do not yet hold a rating."
    },
    {
      "id": "A.77",
      "order": 77,
      "title": "Retesting after failure of a knowledge or practical test",
      "cfr": [
        "14 CFR \u00a7 61.49"
      ],
      "acRef": "AC 61-65K, A.77",
      "sourcePage": "A-21",
      "verbatimText": "In the case of a failed knowledge test, the instructor may complete the endorsement in the space provided at the bottom of the applicant\u2019s Airman Knowledge Test Report (AKTR). The instructor must sign the block provided for the instructor\u2019s recommendation on the reverse side of FAA Form 8710-1, Airman Certificate and/or Rating Application, for each retake of a practical test. I certify that [First name, MI, Last name] has received the additional [flight and/or ground, as appropriate] training as required by 14 CFR \u00a7 61.49. I have determined that they are proficient to pass the [name of] knowledge/practical test.",
      "category": "additional-recurrent",
      "explanation": "Required before retesting after a failed knowledge or practical test. It documents additional training in the deficient areas.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.77",
        "notice of disapproval",
        "retest",
        "retesting after failure of a knowledge or practical test"
      ],
      "tags": [
        "additional recurrent",
        "checkride",
        "recurrent"
      ],
      "cardExplanation": "Required before retaking a failed knowledge or practical test. Documents that the applicant received additional training in the deficient areas."
    },
    {
      "id": "A.78",
      "order": 78,
      "title": "Additional aircraft category or class rating (other than ATP)",
      "cfr": [
        "14 CFR \u00a7 61.63(b) or (c)"
      ],
      "acRef": "AC 61-65K, A.78",
      "sourcePage": "A-21",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required training for an additional [aircraft category/class rating]. I have determined that they are prepared for the [name of] practical test for the addition of a [name of specific aircraft category/class/type] type rating.",
      "category": "additional-recurrent",
      "explanation": "Core endorsement for an additional category or class rating, other than ATP. It is typically paired with A.1 for the practical test recommendation.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.78",
        "add on",
        "additional aircraft category or class rating (other than atp)",
        "additional category",
        "additional class",
        "airplane add on",
        "asel to amel",
        "helicopter add on",
        "helicopter to asel"
      ],
      "tags": [
        "add-on",
        "additional recurrent",
        "recurrent",
        "transition"
      ],
      "cardExplanation": "Core endorsement for adding a new category or class rating below ATP level, typically paired with A.1 for the practical test."
    },
    {
      "id": "A.79",
      "order": 79,
      "title": "Type rating only, already holds the appropriate category or class rating (other than ATP)",
      "cfr": [
        "14 CFR \u00a7 61.63(d)(2)"
      ],
      "acRef": "AC 61-65K, A.79",
      "sourcePage": "A-22",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.63(d)(2) for an addition of a [name of] type rating.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in type rating only, already holds the appropriate category or class rating (other than atp).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.79",
        "type rating only, already holds the appropriate category or class rating (other than atp)"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents the required training to add a type rating when the pilot already holds the appropriate category and class rating, below ATP level."
    },
    {
      "id": "A.80",
      "order": 80,
      "title": "Type rating concurrently with an additional category or class rating (other than ATP)",
      "cfr": [
        "14 CFR \u00a7 61.63(d)(2)"
      ],
      "acRef": "AC 61-65K, A.80",
      "sourcePage": "A-22",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.63(d)(2) for an addition of a [name of specific category/class/type] type rating. I have determined that they are prepared for the [name of] practical test for the addition of a [name of specific aircraft category/class/type] type rating.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in type rating concurrently with an additional category or class rating (other than atp).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.80",
        "type rating concurrently with an additional category or class rating (other than atp)"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents the required training to add a type rating and a new category or class rating at the same time, below ATP level."
    },
    {
      "id": "A.81",
      "order": 81,
      "title": "Type rating only, already holds the appropriate category or class rating (at the ATP level)",
      "cfr": [
        "14 CFR \u00a7 61.157(b)(2)"
      ],
      "acRef": "AC 61-65K, A.81",
      "sourcePage": "A-22",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.157(b)(2) for an addition of a [name of] type rating.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in type rating only, already holds the appropriate category or class rating (at the atp level).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.81",
        "type rating only, already holds the appropriate category or class rating (at the atp level)"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents the required training to add a type rating when the pilot already holds the appropriate category and class rating at the ATP level."
    },
    {
      "id": "A.82",
      "order": 82,
      "title": "Type rating concurrently with an additional category or class rating (at the ATP level)",
      "cfr": [
        "14 CFR \u00a7 61.157(b)(2)"
      ],
      "acRef": "AC 61-65K, A.82",
      "sourcePage": "A-22",
      "verbatimText": "I certify that [First name, MI, Last name] has received the required training of 14 CFR \u00a7 61.157(b)(2) for an addition of a [name of the specific category/class/type] type rating.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in type rating concurrently with an additional category or class rating (at the atp level).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.82",
        "type rating concurrently with an additional category or class rating (at the atp level)"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents the required training to add a type rating and a new category or class rating at the same time at the ATP level."
    },
    {
      "id": "A.83",
      "order": 83,
      "title": "Launch procedures for operating a glider",
      "cfr": [
        "14 CFR \u00a7 61.31(j)"
      ],
      "acRef": "AC 61-65K, A.83",
      "sourcePage": "A-22",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required training in a glider [M/M] for [ground-tow, aerotow, self-launch] procedure. I have determined that they are proficient in [ground-tow, aerotow, self-launch] procedure.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in launch procedures for operating a glider.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.83",
        "launch procedures for operating a glider"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents the required training in the specific launch procedures used for the glider being flown."
    },
    {
      "id": "A.84",
      "order": 84,
      "title": "Glider and unpowered ultralight vehicle towing experience",
      "cfr": [
        "14 CFR \u00a7 61.69(a)(5)"
      ],
      "acRef": "AC 61-65K, A.84",
      "sourcePage": "A-22",
      "verbatimText": "This endorsement is made by the pilot who is qualified per 14 CFR \u00a7 61.69(c) and (d) and who conducted the flights. This endorsement does not have to be made by a flight instructor. I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has accomplished at least three flights in an aircraft while towing [a glider or unpowered ultralight vehicle, or while simulating towing flight procedures, as applicable]. /s/ [date] J. J. Jones 987654321",
      "category": "additional-recurrent",
      "explanation": "Documents the towing experience required to tow a glider or unpowered ultralight vehicle. This one can be issued by a qualified non-instructor pilot.",
      "whoIssues": "non-instructor",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.84",
        "glider and unpowered ultralight vehicle towing experience",
        "glider tow",
        "tow pilot"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents that a pilot has the towing experience required to tow a glider or unpowered ultralight. Can be issued by a qualified non-instructor pilot."
    },
    {
      "id": "A.85",
      "order": 85,
      "title": "Glider and unpowered ultralight vehicle towing ground and flight",
      "cfr": [
        "14 CFR \u00a7 61.69(a)(3)"
      ],
      "acRef": "AC 61-65K, A.85",
      "sourcePage": "A-23",
      "verbatimText": "I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the required ground and flight training in [a glider or unpowered ultralight vehicle, as applicable]. I have determined that they are proficient in the techniques and procedures essential to the safe towing of [gliders or unpowered vehicles, as applicable], including airspeed limitations, emergency procedures, signals used, and maximum angles of bank.",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in glider and unpowered ultralight vehicle towing ground and flight.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.85",
        "glider and unpowered ultralight vehicle towing ground and flight",
        "glider tow training"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents completion of the required ground and flight training to tow gliders or unpowered ultralight vehicles."
    },
    {
      "id": "A.86",
      "order": 86,
      "title": "Review of a home-study curriculum",
      "cfr": [
        "14 CFR \u00a7 61.35(a)(1)"
      ],
      "acRef": "AC 61-65K, A.86",
      "sourcePage": "A-23",
      "verbatimText": "I certify I have reviewed the home-study curriculum of [First name, MI, Last name]. I have determined that they are prepared for the [name of] knowledge test. Note: This endorsement cannot be used for the ATP Airplane Multiengine Knowledge Test.",
      "category": "additional-recurrent",
      "explanation": "Confirms the applicant completed the required ground training or review and is prepared for the review of a home-study curriculum.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.86",
        "home study",
        "review of a home-study curriculum"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Confirms the applicant completed a home-study curriculum review and is prepared for the applicable knowledge test."
    },
    {
      "id": "A.87",
      "order": 87,
      "title": "Aeronautical experience credit\u2014 ultralight vehicles",
      "cfr": [
        "14 CFR \u00a7 61.52"
      ],
      "acRef": "AC 61-65K, A.87",
      "sourcePage": "A-23",
      "verbatimText": "I certify that I have reviewed the records of [First name, MI, Last name], as required by 14 CFR \u00a7 61.52(c). I have determined that they may use [number of hours] aeronautical experience obtained in an ultralight vehicle to meet the requirements for [certificate/rating/privilege].",
      "category": "additional-recurrent",
      "explanation": "Documents the training, qualification, or authorization described in aeronautical experience credit\u2014 ultralight vehicles.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.87",
        "aeronautical experience credit\u2014 ultralight vehicles"
      ],
      "tags": [
        "additional recurrent",
        "recurrent"
      ],
      "cardExplanation": "Documents aeronautical experience credit granted for prior ultralight vehicle flying time."
    },
    {
      "id": "A.88",
      "order": 88,
      "title": "Endorsement required for ground training to act as PIC of an aircraft using night vision goggles (NVG)",
      "cfr": [
        "14 CFR \u00a7 61.31(k)(1)"
      ],
      "acRef": "AC 61-65K, A.88",
      "sourcePage": "A-23",
      "verbatimText": "This training and endorsement must be given by an authorized instructor, which is one who meets the requirements of 14 CFR \u00a7 61.195(k)(1)\u2013(7). Refer to 14 CFR \u00a7 61.31(k)(3) for exceptions to this required ground training. I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the ground training required by 14 CFR \u00a7 61.31(k)(1), (i) through (v) to conduct night vision goggle operations.",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement required for ground training to act as pic of an aircraft using night vision goggles (nvg).",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.88",
        "endorsement required for ground training to act as pic of an aircraft using night vision goggles (nvg)",
        "nvg ground"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of the required ground training to act as PIC using night vision goggles."
    },
    {
      "id": "A.89",
      "order": 89,
      "title": "Endorsement required for flight training and statement of proficiency to act as PIC of an aircraft using NVG",
      "cfr": [
        "14 CFR \u00a7 61.31(k)(2)"
      ],
      "acRef": "AC 61-65K, A.89",
      "sourcePage": "A-23",
      "verbatimText": "This training and endorsement must be given by an authorized instructor, which is one who meets the requirements of 14 CFR \u00a7 61.195(k)(1)\u2013(7). Refer to 14 CFR \u00a7 61.31(k)(3) for exceptions to this required flight training. I certify that [First name, MI, Last name], [grade of pilot certificate], [certificate number], has received the flight training on night vision goggle operations required by 14 CFR \u00a7 61.31(k)(2), (i) through (iv). I find them proficient in the use of night vision goggles.",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement required for flight training and statement of proficiency to act as pic of an aircraft using nvg.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.89",
        "endorsement required for flight training and statement of proficiency to act as pic of an aircraft using nvg",
        "nvg flight"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of the required flight training and confirms proficiency to act as PIC using night vision goggles."
    },
    {
      "id": "A.90",
      "order": 90,
      "title": "Endorsement required to provide training for NVGOs",
      "cfr": [
        "14 CFR \u00a7 61.195(k)(7)"
      ],
      "acRef": "AC 61-65K, A.90",
      "sourcePage": "A-24",
      "verbatimText": "\u201cPosition,\u201d as mentioned in the signature block of the endorsement, is a person who is authorized by the FAA to provide that logbook endorsement. Refer to FAA Order 8900.1, Flight Standards Information Management System. I certify that [First name, MI, Last name], holder of CFI Certificate No. [ ], meets the night vision goggle instructor requirements of 14 CFR \u00a7 61.195(k) and is authorized to perform the night vision goggle pilot-in-command qualification and recent flight experience requirements under 14 CFR \u00a7\u00a7 61.31(k) and 61.57(f) and (g). This endorsement does not provide the authority to endorse another flight instructor as a night vision goggle instructor. /s/ [date] I. M. Inspector 987654321CFI RE Date 12-31-24 Position",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement required to provide training for nvgos.",
      "whoIssues": "dpe-or-asi-only",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.90",
        "endorsement required to provide training for nvgos",
        "nvg instructor"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents the training and authorization required for a CFI to provide night vision goggle training to others."
    },
    {
      "id": "A.91",
      "order": 91,
      "title": "Endorsement for EFVS ground training",
      "cfr": [
        "14 CFR \u00a7 61.66(a)"
      ],
      "acRef": "AC 61-65K, A.91",
      "sourcePage": "A-24",
      "verbatimText": "I certify that [First name, MI, Last name], [pilot certificate], [certificate number], has satisfactorily completed the ground training required by 14 CFR \u00a7 61.66(a) appropriate to the [appropriate aircraft category] category of aircraft.",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement for efvs ground training.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.91",
        "efvs ground",
        "endorsement for efvs ground training"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of the required ground training for using an enhanced flight vision system (EFVS)."
    },
    {
      "id": "A.92",
      "order": 92,
      "title": "Endorsement for EFVS flight training",
      "cfr": [
        "14 CFR \u00a7 61.66(b)"
      ],
      "acRef": "AC 61-65K, A.92",
      "sourcePage": "A-24",
      "verbatimText": "I certify that [First name, MI, Last name], [pilot certificate], [certificate number], has received the flight training required by 14 CFR \u00a7 61.66(b) and is proficient in the use of EFVS in the [appropriate aircraft category in which the flight training was conducted] category of aircraft for EFVS operations conducted under [14 CFR \u00a7 91.176(a), (b), or both 14 CFR \u00a7 91.176(a) and (b)].",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement for efvs flight training.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.92",
        "efvs flight",
        "endorsement for efvs flight training"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of the required flight training for using an EFVS."
    },
    {
      "id": "A.93",
      "order": 93,
      "title": "Endorsement for EFVS ground and flight training",
      "cfr": [
        "14 CFR \u00a7 61.66(a) and (b)"
      ],
      "acRef": "AC 61-65K, A.93",
      "sourcePage": "A-24",
      "verbatimText": "I certify that [First name, MI, Last name], [pilot certificate], [certificate number], has satisfactorily completed the ground training required by 14 CFR \u00a7 61.66(a) and has received the flight training required by 14 CFR \u00a7 61.66(b) for EFVS operations and is proficient in the use of EFVS in the [appropriate aircraft category in which the ground and flight training was conducted] category of aircraft for EFVS operations conducted under [14 CFR \u00a7 91.176(a), (b), or both 14 CFR \u00a7 91.176(a) and (b)].",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement for efvs ground and flight training.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.93",
        "efvs combined",
        "endorsement for efvs ground and flight training"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of both the required ground and flight training for using an EFVS."
    },
    {
      "id": "A.94",
      "order": 94,
      "title": "Endorsement for EFVS supplementary training",
      "cfr": [
        "14 CFR \u00a7 61.66(c)"
      ],
      "acRef": "AC 61-65K, A.94",
      "sourcePage": "A-24",
      "verbatimText": "I certify that [First name, MI, Last name], [pilot certificate], [certificate number], has satisfactorily completed the required ground and flight training required by 14 CFR \u00a7 61.66(c) for EFVS operations and is proficient in the use of EFVS in the [appropriate aircraft category in which the supplementary ground and flight training was conducted] category of aircraft for EFVS operations conducted under [14 CFR \u00a7 91.176(a), (b), or both 14 CFR \u00a7 91.176(a) and (b)].",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for endorsement for efvs supplementary training.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.94",
        "efvs supplemental",
        "endorsement for efvs supplementary training"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of supplementary EFVS training required for a specific operation or aircraft."
    },
    {
      "id": "A.95",
      "order": 95,
      "title": "To act as PIC in an aircraft with a simplified flight controls designation",
      "cfr": [
        "14 CFR \u00a7\u00a7 61.31(l) and 61.45(h)(1)"
      ],
      "acRef": "AC 61-65K, A.95",
      "sourcePage": "A-25",
      "verbatimText": "I certify that [First Name, MI, Last Name], [grade of pilot certificate], [certificate number], has received the required training of 14 CFR \u00a7 61.31(l)(1) in a [M/M] aircraft with simplified flight controls designation. I have determined that [pilot name] is proficient in the operation of an [category and class, M/M] aircraft with simplified flight controls.",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for to act as pic in an aircraft with a simplified flight controls designation.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.95",
        "simplified flight controls",
        "to act as pic in an aircraft with a simplified flight controls designation"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Authorizes a pilot to act as PIC in an aircraft with a simplified flight controls designation after completing the required training."
    },
    {
      "id": "A.96",
      "order": 96,
      "title": "Initial cadre training in an aircraft with simplified flight controls",
      "cfr": [
        "14 CFR \u00a7 61.195(n)"
      ],
      "acRef": "AC 61-65K, A.96",
      "sourcePage": "A-25",
      "verbatimText": "I certify that [First Name, MI, Last Name], [grade of pilot certificate], [certificate number], has received the required training of 14 CFR \u00a7 61.195(n)(2)(ii) in a [M/M] aircraft with simplified flight controls designation. I have determined that [pilot name] is proficient in the operation of an [category and class, M/M] aircraft with simplified flight controls. Signature of Instructor Pilot _________ Print Name _____________ Cert No. _________ Date ______",
      "category": "specialty-operations",
      "explanation": "Documents the training, qualification, or authorization needed for initial cadre training in an aircraft with simplified flight controls.",
      "whoIssues": "standard-cfi",
      "expiration": "none",
      "perFlight": false,
      "aliases": [
        "a.96",
        "initial cadre training in an aircraft with simplified flight controls",
        "simplified flight controls instructor"
      ],
      "tags": [
        "specialty operations"
      ],
      "cardExplanation": "Documents completion of the initial cadre training required to instruct or operate aircraft with simplified flight controls."
    }
  ];
})();
