// keywords //
const req = "required units";
const spec = "Specialisation";
const major = "Major";
const minor = "Minor";
const cs = "Computer Science";
const ds = "Data Science";
const it = "Information Technology";
const maths = "Mathematics";
const ibl = "Industry Based Learning";

//////////////// UNIVERSITIES ////////////////////
const monash = "Monash University";
const unimelb = "The University of Melbourne";
const rmit = "RMIT University";
const qut = "Queensland University of Technology"






/////////////////////////////////////////////////////////////
//////////////// MONASH //////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////// Bachelor of Computer Science ////////////////
//////////////////////////////////////////////////////////////
// FIT units for all Comp Sci students //
// Level 1 //
const fit1008 = {
    name: "Introduction to computer science",
    code: "FIT1008",
    cp: 6,
    faculty: it,
}
const fit1045 = {
    name: "Algorithms and programming fundamentals in python",
    code: "FIT1045",
    cp: 6,
    faculty: it,
}

const fit1047 = {
    name: "Introduction to computer systems, networks and security",
    code: "FIT1047",
    cp: 6,
    faculty: it,
}

const fit1049 = {
    name: "IT professional practice",
    code: "FIT1049",
    cp: 6,
    faculty: it,
}

const fit1055 = {
    name: "IT professional practice and ethics",
    code: "FIT1055",
    cp: 6,
    faculty: it,
}
// Level 2 //
const fit2004 = {
    name: "Algorithms and data structures",
    code: "FIT2004",
    cp: 6,
    faculty: it,
}
const fit2014 = {
    name: "Theory of computation",
    code: "FIT2014",
    cp: 6,
    faculty: it,
}

// Level 3 //
// OPTION 1 - cs //
const fit3161 = {
    name = "Computer science project 1",
    code: "FIT3161",
    cp: 6,
    faculty: it,
}
const fit3162 = {
    name = "Computer science project 2",
    code: "FIT3162",
    cp: 6,
    faculty: it,
}
//OPTION 2 - ds //
const fit3163 = {
    name = "Data science project 1",
    code: "FIT3163",
    cp: 6,
    faculty: it,
}
const fit3164 = {
    name = "Data science project 2",
    code: "FIT3164",
    cp: 6,
    faculty: it,
}
// OPTION 3 - ibl //
const fit3045 = {
    name = "Industry-based learning",
    code: "FIT3045",
    cp: 18,
    faculty: it,
}
// MAT units for all Comp Sci students //
// Level 1 //
const mat1830 = {
    name: "Discrete mathematics for computer science",
    code: "MAT1830",
    cp: 6,
    faculty: maths,
}

const mat1841 = {
    name: "Continuous mathematics for computer science",
    code: "MAT1841",
    cp: 6,
    faculty: maths,
}
// SPECIALISATION: Advanced computer science //
// FIT units //
// Level 2 //
const fit2099 = {
    name: "Object oriented design and implementation",
    code: "FIT2099",
    cp: 6,
    faculty: it,
}
const fit2102 = {
    name: "Programming paradigms",
    code: "FIT2102",
    cp: 6,
    faculty: it,
}
// Level 3 //
const fit3143 = {
    name: "Parallel computing",
    code: "FIT3143",
    cp: 6,
    faculty: it,
}
const fit3155 = {
    name: "Advanced data structures and algorithsm",
    code: "FIT3155",
    cp: 6,
    faculty: it,
}
const fit3171 = {
    name: "Databases",
    code: "FIT3171",
    cp: 6,
    faculty: it,
}

// SPECIALISATIONS //
const compsci03 = {
    name: "Advanced computer science",
    type: spec,
    uni: monash,
    code: "COMPSCI03",
    units: [fit2099, fit2102, fit3143, fit3155, fit3171],
    options: [fit3031, fit3077, fit3080, fit3081, fit3088, fit3094, fit3139, fit3142, fit3146, fit3152, fit3159, fit3165, fit3173, fit3175, fit3181, fit3182, fit3183, mth3170, mth3175],
    cp: 36,
}
const datasci01 = {
    name: "Data science",
    type: spec,
    uni: monash,
    code: "DATASCI01",
    units: [],
    cp: 36,
}
////////////////////////////////////////////////////////////////
const c2001a = {
    type: "Foundational computer science study",
    units: [fit1008, fit1045, fit1047, fit2004, fit2014, mat1830, mat1841],
}
const c2001b = {
    type: "Professional skills study",
    units: [fit1049, fit1055],
}
// if option compsci03: c2001cd = compsci03,
// if option datasci01: c2001cd = datasci01.
const c2001ecs = {
    type: "Applied practice options",
    units: [fit3161, fit3162],
    cp: 12,
}
const c2001eds = {
    type: "Applied practice options",
    units: [fit3163, fit3164],
    cp: 12,
}
const c2001eibl = {
    type: "Applied practice options",
    units: [fit3045],
    cp: 18,
}
const c2001e = {
    type: "Applied practice",
    options: [c2001ecs, c2001eds, c2001eibl],
}
const c2001f = {
    type: "Free elective study",

}
///////////////////////////////////////////////////////////////
const c2001 = {
    name: "Bachelor of Computer Science",
    uni: monash,
    code: "C2001",
    "ATAR - lowest adjusted": 85.7,
    "ATAR - lowest unadjusted": 75,
    "ATAR - guarantee": 80,
    options: [compsci03, datasci01],
    "credit points total": 144,
    "credit points per unit": 6,
    req: [c2001a, c2001b, c2001cd, c2001e, c2001f],
}
//////////////////////////////////////////////////////////////