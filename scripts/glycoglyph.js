//this file stores all the global variables for settings specific to application

var nameid = "cfg_name"; //id of the input field where the name will be written

//declare a global variable to store the child information
var childglycan = {
  "name": "",
  "linkage": "",
  "monosaccharide": "",
  "linknum": 0,
  "substituent": "",
  "children": []
};

glyd3render = false; //setting for d3glycanstructure.js

var trackname = []; //array which tracks the names for undo/redo
var tracknum = -1;

//templates holds the starter templates 
// these can be directly added as names so it is easy
var templates = [
  //N-glycans
  {
    name: "Chitobiose-core",
    structure: "GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core",
    structure: "Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-fuc",
    structure: "Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-bis",
    structure: "Mana1-6(GlcNAcb1-4)(Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-bis-fuc",
    structure: "Mana1-6(GlcNAcb1-4)(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-hyb",
    structure: "Mana1-6(Mana1-3)Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-hyb-fuc",
    structure: "Mana1-6(Mana1-3)Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-oligoman",
    structure: "Mana1-2Mana1-6(Mana1-2Mana1-3)Mana1-6(Mana1-2Mana1-2Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },

  //O-glycans
  {
    name: "Core-1",
    structure: "Galb1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-2",
    structure: "GlcNAcb1-6(Galb1-3)GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-3",
    structure: "GlcNAcb1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-4",
    structure: "GlcNAcb1-6(GlcNAcb1-3)GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-5",
    structure: "GalNAca1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-6",
    structure: "GlcNAcb1-6GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-7",
    structure: "GalNAca1-6GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-8",
    structure: "Gala1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  // {
  //   name: "",
  //   structure: "",
  //   type: "starter",
  //   subtype: "O"
  // },
];


var terminals = [
  {
    name: "Blood Group A",
    sequence: "GalNAca1-3(Fuca1-2)Gal",
    type: "antigen",
  },
  {
    name: "Blood Group B",
    sequence: "Galb1-3(Fuca1-2)Gal",
    type: "antigen",
  },
  {
    name: "Blood Group H",
    sequence: "Fuca1-2Gal",
    type: "antigen",
  },
  {
    name: "CAD Antigen",
    sequence: "Neu5Aca2-6(GalNAcb1-4(Neu5Aca2-3)Galb1-3)GalNAc",
    type: "antigen",
  },
  {
    name: "Forsmann Antigen",
    sequence: "GalNAca1-3GalNAcb1-3Gal",
    type: "antigen",
  },
  {
    name: "Galili Antigen",
    sequence: "Gala1-3Galb1-4GlcNAc",
    type: "antigen",
  },
  {
    name: "P antigen",
    sequence: "GalNAcb1-3Gala1-4Galb1-4Glc",
    type: "antigen",
  },
  {
    name: "Pk antigen",
    sequence: "Gala1-4Galb1-4Glc",
    type: "antigen",
  },
  {
    name: "SDA Antigen",
    sequence: "GalNAcb1-4(Neu5Aca2-3)Galb1-4GlcNAcb1-3Gal",
    type: "antigen",
  },
  {
    name: "High Mannose Terminals",
    sequence: "Mana1-2Man",
    type: "mannose",
  },
  {
    name: "LacDiNAc",
    sequence: "GalNAcb1-4GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Lactosamine",
    sequence: "Galb1-4GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Neo-Lactosamine",
    sequence: "Galb1-3GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Poly-Lactosamine",
    sequence: "Galb1-4GlcNAcb1-3Galb1-4GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Lewis A",
    sequence: "Galb1-3(Fuca1-4)GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis B",
    sequence: "Fuca1-2Galb1-3(Fuca1-4)GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis C",
    sequence: "Galb1-3GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis D",
    sequence: "Fuca1-2Galb1-3GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis X",
    sequence: "Galb1-4(Fuca1-3)GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis Y",
    sequence: "Fuca1-2Galb1-4(Fuca1-3)GlcNAc",
    type: "lewis",
  },
  /*Template Object
  {
    name: "",
    sequence: "",
    type: "",
  },
  */
]

//create a list of monosaccharides
var monos = [
  'Glc', 'Man', 'Gal', 'Gul', 'Alt', 'All', 'Tal', 'Ido',
  'GlcNAc', 'ManNAc', 'GalNAc', 'GulNAc', 'AltNAc', 'AllNAc', 'TalNAc', 'IdoNAc',
  'GlcN', 'ManN', 'GalN', 'GulN', 'AltN', 'AllN', 'TalN', 'IdoN',
  'GlcA', 'ManA', 'GalA', 'GulA', 'AltA', 'AllA', 'TalA', 'IdoA',
  'Qui', 'Rha', '6dGul', '6dAlt', '6dTal', 'Fuc',
  'QuiNAc', 'RhaNAc', '6dAltNAc', '6dTalNAc', 'FucNAc',
  'Oli', 'Tyv', 'Abe', 'Par', 'Dig', 'Col',
  'Ara', 'Lyx', 'Xyl', 'Rib',
  'Kdn', 'Neu5Ac', 'Neu5Gc', 'Neu', 'Sia',
  'Pse', 'Leg', 'Aci', '4eLeg',
  'Bac', 'LDmanHep', 'Kdo', 'Dha', 'DDmanHep', 'MurNAc', 'MurNGc', 'Mur',
  'Api', 'Fru', 'Tag', 'Sor', 'Psi',
  'Hex', 'HexN', 'HexNAc'
];

var aminoacids = ['A', 'G', 'I', 'L', 'P', 'V', 'F', 'W', 'Y', 'D', 'E', 'R', 'H', 'K', 'S', 'T', 'C', 'M', 'N', 'Q'];



// variable holds GlycoCT monosaccharides list
// Adapted from SugarSketcher by Author:  Davide Alocci and Renaud Costa
// https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/io/glycoCT/MonosaccharideGlycoCT.js
var gctMonoList = {
  Hex: {
    glycoct: "HEX",
    transform: "",
    configdefault: "",
  },

  Glc: {
    glycoct: "glc-HEX",
    transform: "",
    configdefault: "d",
  },

  Man: {
    glycoct: "man-HEX",
    transform: "",
    configdefault: "d",
  },

  Gal: {
    glycoct: "gal-HEX",
    transform: "",
    configdefault: "d",
  },

  Gul: {
    glycoct: "gul-HEX",
    transform: "",
    configdefault: "d",
  },

  Alt: {
    glycoct: "alt-HEX",
    transform: "",
    configdefault: "l",
  },

  All: {
    glycoct: "all-HEX",
    transform: "",
    configdefault: "d",
  },

  Tal: {
    glycoct: "tal-HEX",
    transform: "",
    configdefault: "d",
  },

  Ara: {
    glycoct: "ara-PEN",
    transform: "",
    configdefault: "l",
  },

  Lyx: {
    glycoct: "lyx-PEN",
    transform: "",
    configdefault: "d",
  },

  Rib: {
    glycoct: "rib-PEN",
    transform: "",
    configdefault: "d",
  },

  Bac: {
    glycoct: "glc-HEX",
    transform: "|2:d|4:d|6:d",
    configdefault: "d",
  },

  Fuc: {
    glycoct: "gal-HEX",
    transform: "-1:5|6:d",
    configdefault: "l",
  },

  HexA: {
    glycoct: "HEX",
    transform: "|6:a",
    configdefault: "",
  },

  GlcA: {
    glycoct: "glc-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  ManA: {
    glycoct: "man-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  GalA: {
    glycoct: "gal-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  GulA: {
    glycoct: "gul-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  AltA: {
    glycoct: "alt-HEX",
    transform: "-1:5|6:a",
    configdefault: "l",
  },

  AllA: {
    glycoct: "all-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  TalA: {
    glycoct: "tal-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  Qui: {
    glycoct: "glc-HEX",
    transform: "-1:5|6:d",
    configdefault: "d",
  },

  dHex: {
    glycoct: "HEX",
    transform: "|6:d",
    configdefault: "",
  },

  Ido: {
    glycoct: "ido-HEX",
    transform: "",
    configdefault: "l",
  },

  IdoA: {
    glycoct: "ido-HEX",
    transform: "-1:5|6:a",
    configdefault: "l",
  },

  Pen: {
    glycoct: "PEN-1:4",
    transform: "",
    configdefault: "",
  },

  Rha: {
    glycoct: "man-HEX",
    transform: "|6:d",
    configdefault: "l",
  },

  SixdAlt: {
    glycoct: "alt-HEX",
    transform: "|6:d",
    configdefault: "l",
  },

  SixdTal: {
    glycoct: "tal-HEX",
    transform: "|6:d",
    configdefault: "d",
  },

  Xyl: {
    glycoct: "xyl-PEN",
    transform: "",
    configdefault: "d",
  },

  ddHex: {
    glycoct: "HEX",
    transform: "|2:d|6:d",
    configdefault: "",
  },

  Unknown: {
    glycoct: "unknown",
    transform: "",
    configdefault: "",
  },

  Oli: {
    glycoct: "PEN",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Tyv: {
    glycoct: "ara-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Abe: {
    glycoct: "dxyl-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Par: {
    glycoct: "rib-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Col: {
    glycoct: "lxyl-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Dig: {
    glycoct: "rib-HEX",
    transform: "|2:d|6:d",
    configdefault: "d",
  },

  Nonu: {
    glycoct: "NON",
    transform: "",
    configdefault: "",
  },

  Kdn: {
    glycoct: "gro-dgal-NON-2:6",
    transform: "|1:a|2:keto|3:d",
    configdefault: "d",
  },

  Kdo: {
    glycoct: "man-OCT-2:6",
    transform: "|1:a|2:keto|3:d",
    configdefault: "d",
  },

  Fru: {
    glycoct: "ara-HEX-2:5",
    transform: "|2:keto",
    configdefault: "d",
  },

  // GlycoCT not found
  Assigned: {
    glycoct: "assigned-PEN",
    transform: "",
    configdefault: "",
  },
  LDManHep: {
    glycoct: "ldmanhep-HEX",
    transform: "",
    configdefault: "",
  },

  DDManHep: {
    glycoct: "ddmanhep-HEX",
    transform: "",
    configdefault: "",
  },

  Dha: {
    glycoct: "dha-HEX",
    transform: "",
    configdefault: "",
  },

  Mur: {
    glycoct: "mur-HEX",
    transform: "",
    configdefault: "",
  },

  Sia: {
    glycoct: "sia-NON",
    transform: "",
    configdefault: "",
  },

  Api: {
    glycoct: "api-PEN",
    transform: "",
    configdefault: "l",
  },

  Tag: {
    glycoct: "tag-PEN",
    transform: "",
    configdefault: "d",
  },

  Sor: {
    glycoct: "sor-PEN",
    transform: "",
    configdefault: "l",
  },

  Psi: {
    glycoct: "psi-PEN",
    transform: "",
    configdefault: "d",
  }

};


// variable holds GlycoCT substituents
// Adapted from SugarSketcher by Author:  Davide Alocci
// https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/glycomics/dictionary/SubstituentType.js
var gctSubList = {
  NAcetyl: {
    glycoct: "n-acetyl"
  },
  Amino: {
    glycoct: "amino"
  },
  NGlycolyl: {
    glycoct: "n-glycolyl"
  },
  Methyl: {
    glycoct: "methyl"
  },
  Acetyl: {
    glycoct: "acetyl"
  },
  Sulfate: {
    glycoct: "sulfate"
  },
  Phosphate: {
    glycoct: "phosphate"
  },
  Bromo: {
    glycoct: 'bromo'
  },
  Chloro: {
    glycoct: 'chloro'
  },
  Ethyl: {
    glycoct: 'ethyl'
  },
  Ethanolamine: {
    glycoct: 'ethanolamine'
  },
  Fluoro: {
    glycoct: 'fluoro'
  },
  Formyl: {
    glycoct: 'formyl'
  },
  Hydroxymethyl: {
    glycoct: 'hydroxymethyl'
  },
  Imino: {
    glycoct: 'imino'
  },
  RLactate1: {
    glycoct: '(r)-lactate'
  },
  SLactate1: {
    glycoct: '(s)-lactate'
  },
  NAlanine: {
    glycoct: 'n-alanine'
  },
  NFormyl: {
    glycoct: 'n-formyl'
  },
  NMethyl: {
    glycoct: 'n-methyl'
  },
  NSuccinate: {
    glycoct: 'n-succinate'
  },
  NSulfate: {
    glycoct: 'n-sulfate'
  },
  NTrifluoroacetyl: {
    glycoct: 'n-trifluoroacetyl'
  },
  Nitrate: {
    glycoct: 'nitrate'
  },
  Pyruvate: {
    glycoct: 'pyruvate'
  },
  Thio: {
    glycoct: 'thio'
  },
  RPyruvate: {
    glycoct: '(r)-pyruvate'
  },
  SPyruvate: {
    glycoct: '(s)-pyruvate'
  },
  RLactate2: {
    glycoct: '(r)-lactate2'
  },
  SLactate2: {
    glycoct: '(s)-lactate2'
  },
  Unknown: {
    glycoct: 'unknown'
  }
};

//list of commonly used monosaccharides
var commonMonos = ["Glc", "Man", "Gal", "GlcNAc", "GalNAc", "Fuc", "Neu5Ac", "Neu5Gc", "Neu", "Xyl", "IdoA", "GlcA", "Unknown"];


// URL of the current application
var getUrl = window.location.href.split('/').slice(0,-1).join('/') + '/';

//load the css file into svgStyle
var svgStyle = '';
let fetchCSS = d3.text(getUrl + '/css/styles.css').then(function (d) {
    svgStyle = d;
});

// Get list of monosaccharides for which symbols are available
var svgarr = [];
let fetchSVG = d3.xml('img/monos.svg').then(function (data) {
    svgarr = [].map.call(data.querySelectorAll("symbol"), function (symbol) {
        return {
            id: symbol.getAttribute("data-abbr"), //use the data-abbr to get id
            viewBox: symbol.getAttribute('viewBox'),
            innerhtml: symbol.innerHTML.replace(/\n|\t/g, '').trim(),
            fullname: symbol.getAttribute("data-shortname") //use the data-shortname to get the shortname
        };
    });
    // console.log(svgarr);
    return svgarr;
});
//This file contains code which will add the information to an object to be appended to the parent node
//It takes user input for processing

//function to reset the childglycan
function resetchildglycan() {
  childglycan = {
    "name": "",
    "linkage": "",
    "monosaccharide": "",
    "linknum": 0,
    "substituent": "",
    "children": []
  };
  //clear out the monosachharide selection information from the DOM
  $('#subscheck').empty();
  $('#monocheck').empty();
  $('#linkagecheck').empty();
}


function addSub() {
  //get details from the forms
  var subposlist = Array.from(document.querySelectorAll('#subposlist input'));
  var subpos = subposlist.length && subposlist.find(r => r.checked).value;

  var subtypelist = Array.from(document.querySelectorAll('#subtypelist input'));
  var subtype = subtypelist.length && subtypelist.find(r => r.checked).value;
  if (subtype === "other") {
    subtype = document.getElementById("substituentother").value
  }
  var subvalue = subpos + subtype;
  var sub = '[' + subvalue + ']';
  $('#subscheck').append(sub); // add linkage to the childglycan object
  childglycan.substituent = childglycan.substituent + sub; //because more than one substituent can be added
  makechildglycanname();
}

function clearSub() {
  $('#subscheck').empty();
  childglycan.substituent = "";
  makechildglycanname();
}
//function on what to do when monosaccharide is selected
function monoselect(mono) {
  if (mono === "Unknown") {
    var node = prompt("Please enter name for the node", "");
    if (node != null) {
      mono = node;
    }
    else {
      alert('Error: Name for the node was blank - did not add the node');
      return;
    }
  }
  childglycan.monosaccharide = mono;  // add/overwrite monosaccharide to the childglycan object
  $('#monocheck').empty().append(mono);
  makechildglycanname();
}

function addLinkage() {
  //get details from the forms
  var orientlist = Array.from(document.querySelectorAll('#orientlist input'));
  var orient = orientlist.length && orientlist.find(r => r.checked).value;

  var anoposlist = Array.from(document.querySelectorAll('#anoposlist input'));
  var anopos = anoposlist.length && anoposlist.find(r => r.checked).value;

  var acclist = Array.from(document.querySelectorAll('#acclist input'));
  var acc = acclist.length && acclist.find(r => r.checked).value;

  if (acc == '?') {
    childglycan.linknum = 0;
  } else {
    childglycan.linknum = +acc;
  }
  var linkage = orient + anopos + '-' + acc;

  $('#linkagecheck').empty().append(linkage);
  childglycan.linkage = linkage; // add/overwrite linkage to the childglycan object
  makechildglycanname();

}

function makechildglycanname() {

  childglycan.name = childglycan.substituent + childglycan.monosaccharide + childglycan.linkage;
  // console.log(childglycan);

}
function addmono(path, multiple) {
  // check for childglycan having sufficient information
  if (childglycan.monosaccharide == "") {
    alert('No monosaccharide selected. \n\nPlease select a monosaccharide to add.');
    resetchildglycan();
    $("#multimode").empty(); // remove message that multimode is on
    return;
  }
  if (childglycan.linkage === "") {
    childglycan.linkage = "??-?";
    // alert("Linkage information for the monosaccharide has not been added. \n\nPlease Add Linkage information.");
    // return;
  }

  //get the name from the name div and create the object
  var name = document.getElementById(nameid).value;
  var nameobj = JSON.parse(glycantojson(name));

  //create a recursive function to traverse into the nameobj to the parentnode using the path
  var pathcount = 0;
  var duplicatelinknum = false;
  var overrideduplicate = false;
  function recurse(obj) {
    if (obj.name === path[pathcount].data.name) {
      if (pathcount < path.length - 1) {
        pathcount++;
        var index = obj.children.findIndex((e) => (e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID));
        recurse(obj.children[index]);
      } else {

        //check if child glycan has same linkage as another sibling and if so warn the user.
        obj.children.forEach(a => {
          if (a.linknum == childglycan.linknum) {
            duplicatelinknum = true;
            alert('You are trying to add a node to a position which is occupied. \nTwo nodes cannot have same linkage acceptor position. \nPlease check the linkages.')

            //NOTE- the option to override is not allowed as it can cause downstream errors in naming if user decides to edit the name themselves
            //user is allowed to override if necessary
            // if (confirm("Two nodes cannot have same linkage position. Are you sure you would like to continue?")) {
            //   overrideduplicate = true;
            // } else {
            //   overrideduplicate = false;
            // }

          }
        });


        //push the childglycan once the parent node is reached
        if (duplicatelinknum === false) {
          obj.children.push(childglycan);
        }
      }
    }
    return obj;
  }

  //use above recursive function to go to the parentnode selected and push the childglycan there
  recurse(nameobj);

  // console.log(nameobj);

  outputname(nameobj);

  //at the end reset the global variable childglycan if it was pushed
  if ((duplicatelinknum === false || overrideduplicate === true) && multiple == false) {
    resetchildglycan(); //function from addinfo.js
  }

}

function outputname(nameobj) {
  // console.log(nameobj);
  var struc = d3.hierarchy(nameobj); //call d3 hierarchy on structure obj
  // console.log(struc);
  var structure = sortchildren(struc); //sort the structure
  // console.log(structure);
  var newname = objecttoname(structure);
  tracknames(newname); //push new name

  // console.log(trackname);
  document.getElementById(nameid).value = newname; // output the name to the input field
  d3glycanstructure(newname, 'd3glycanstruc');

  //update glycoCT
  cfgToGlycoCT();
}


function addfirstmono() {
  nameobj = childglycan;
  //
  if (nameobj.linkage === "") {
    let link = prompt(`You have not added any linkage for the first monosaccharide.
    \nThis will be treated as an open ring. If this is what you desire leave the field below blank and press OK.
    \nTo indicate a closed ring please type in the linkage information: 
    \nFor example:
    \n"??" if linkage position is unknown in both anomeric configuratio and position or 
    \n"?1" where 1 indicates the position number and can be replaced with the position you desire.  or
    \n"b1" where b indicates the anomeric configuration and 1 indicates the position.
    `, "")
    if (link == null || link == "") {
      nameobj.linkage = "";
    } else {
      nameobj.linkage = link;
    }
  }else{
    nameobj.linkage = nameobj.linkage.split(/\-/g)[0];
  }
  nameobj.name = nameobj.substituent + nameobj.monosaccharide + nameobj.linkage //recreate the name
  outputname(nameobj);
  resetchildglycan();
}
//Draws the structure
function d3glycanstructure(glycanname, drawdivID) {
  //MOD: this version of d3glycanstructure is incapable of drawing glycopeptides
  // // aminoacids.some(function (v) { return glycanname.search(v) > -1 }) // check for aminoacids
  // if (glycanname.search(/(\{)|(\})/g) > -1) {
  //   gpdraw(glycanname, drawdivID);
  //   return;
  // }

  drawersize = 400;
  if (glyd3render === true) {
    $('#slideout').css('width', drawersize + 'px');
    $('#slideout').animate({ right: '0px' }, { queue: false, duration: 500 });
  }


  //convert the glycanname to json
  var glycanjson = glycantojson(glycanname);

  var data = JSON.parse(glycanjson);
  // console.log(data);

  var depth = getDepth(data); //using the depth you can set different dimensions for the SVG images
  //allowing for better visibility of larger structures

  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
    width = 360 - margin.left - margin.right;
  //if fixed drawing area height:
  var drawingareachoice = document.getElementById('drawingchoice').value;
  if (drawingareachoice === 'fixdrawingarea') {
    height = 520 - margin.top - margin.bottom;
  } else if (drawingareachoice === 'fixglycansize' && depth <= 2) {
    height = 50 * depth;
  } else if (drawingareachoice === 'fixglycansize' && depth < 10) {
    height = 50 * depth;
  } else if (drawingareachoice === 'fixglycansize' && depth >= 10) {
    height = 520 - margin.top - margin.bottom;
  }

  var orientations = {

    size: [width, height],
    x: function (d) {
      return d.x;
    },
    y: function (d) {
      return height - d.y;
    },

  };//rotates the glycan to vertical drawing from bottom to top

  //only refresh for mouseover type of drawings not for the ctrl+click type
  if (drawdivID == 'd3glycanstruc') {
    d3.select('#d3glycanstrucsub' + drawdivID).remove();
    //    d3.select('#' + drawdivID).select('.refreshremove').remove();
  }

  //create a div to draw the glycans
  var div = d3
    .select('#' + drawdivID)
    .append('div')
    .attr('id', 'd3glycanstrucsub' + drawdivID);
  //push the div to the bottom if it is in the drawer
  if (drawdivID == 'd3glycanstruc') {
    div.style('position', 'absolute')
      .style('bottom', '10px');
  }

  var svg = d3
    .select('#d3glycanstrucsub' + drawdivID)
    .append('svg')
    .attr('id', drawdivID + 'SVG')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('id', 'glycang')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


  //adjust the symbol size depending on the depth
  var symbsize = document.getElementById('symbolsize').value;


  var o = orientations;


  // Compute the layout.
  var treemap = d3.tree().size(o.size);

  var nodes = d3.hierarchy(data);


  nodes = treemap(nodes);

  fixfucers(nodes, width);

  //adjust to keep root node at the same position.
  var dxg = nodes.x - width / 2;
  if (dxg != 0) {
    d3.select('#glycang')
      .attr('transform', 'translate(' + (margin.left - dxg) + ',' + margin.top + ')');
  }

  var links = nodes.descendants().slice(1);

  // Create the link lines.
  svg
    .selectAll('.glyd3link')
    .data(links)
    .enter()
    .append('path')
    .attr('class', 'glyd3link')
    .attr('d', function (d) {
      return (
        'M' + d.x + ',' + o.y(d) + 'L' + d.parent.x + ',' + o.y(d.parent)
      );
    })
    .attr('stroke-width', 2);

  // Create the node groups.
  var node = svg
    .selectAll('.node')
    .data(nodes.descendants())
    .enter()
    .append('g')
    .attr('transform', function (d) {
      return rotateFuc(d, o);
    });


  node
    .append('use')
    .attr('xlink:href', function (d, i) { return drawsymbol(d, i, 'glycan') })
    .attr('x', -symbsize / 2)
    .attr('y', -symbsize / 2)
    .attr('height', symbsize) //important for firefox
    .attr('width', symbsize)
    .attr('class', 'symbol')
    .on('click', function (d) {
      var path = nodes.path(d);
      var modelist = Array.from(document.querySelectorAll('#modelist input'));
      var mode = modelist.length && modelist.find(r => r.checked).value;
      if (mode === "add") {
        if (multimode) { //check if multimode is on from initialize.js
          addmono(path, true);
        } else {
          addmono(path, false);
        }
      } else if (mode === "replace") {
        if (multimode) {
          replacemono(path, true);
        } else {
          replacemono(path, false);
        }
      } else if (mode === "delete") {
        deletemono(path);
      }
    })
    .on('mouseover', function (d) {
      d3.select(this.parentElement).append('circle')
        .attr('class', 'highlightnode')
        .attr('r', (symbsize/2)+10)
        .attr('fill', function (d) {
          var modelist = Array.from(document.querySelectorAll('#modelist input'));
          var mode = modelist.length && modelist.find(r => r.checked).value;
          if (mode === "add") {
            d3.select(this.parentElement).selectAll('.symbol').classed('addcursor', true).classed('replacecursor', false).classed('deletecursor', false);
            return "#227093";
          } else if (mode === "replace") {
            d3.select(this.parentElement).selectAll('.symbol').classed('replacecursor', true).classed('addcursor', false).classed('deletecursor', false);
            return "#FFBA3B";
          } else if (mode === "delete") {
            d3.select(this.parentElement).selectAll('.symbol').classed('deletecursor', true).classed('addcursor', false).classed('replacecursor', false);
            return "#7D1515";
          }
        })
        .attr('fill-opacity', 0.4)
        .lower(); //lower makes the circle append before the node in the parent so that the mouseout function can work

      $(document).bind("keyup", (f) => {
        if (f.originalEvent.key == "Delete" || f.originalEvent.key == "d") {
          $.when($(document).unbind("keyup")).then((g) => {
            var path = nodes.path(d);
            deletemono(path);
          });
        }
      })
    })
    .on('mouseout', function (d) {
      $(document).unbind("keyup"); //remove the keyup event for checking to delete
      d3.selectAll('.highlightnode').remove();
    });

  // //get the linkage drawing settings;
  var linkVisible, linkRotate, linkAbbr, linkFontSize;
  (document.getElementById('linkagevisible') != null) ? linkVisible = document.getElementById('linkagevisible').checked : linkVisible = true;
  (document.getElementById('linkagerotate') != null) ? linkRotate = document.getElementById('linkagerotate').checked : linkRotate = true;
  (document.getElementById('linkageabbr') != null) ? linkAbbr = document.getElementById('linkageabbr').checked : linkAbbr = false;
  (document.getElementById('linkFontSize') != null) ? linkFontSize = document.getElementById('linkFontSize').value : linkFontSize = 14;


  if (linkVisible === true) {
    //append linkage text
    node
      .append('text')
      .attr('transform', function (d, i) {
        return transformlinkText(d, i, linkRotate, linkFontSize, linkAbbr,symbsize);
      })
      .text(function (d) { 
        // console.log(linkageText(d, linkAbbr));
        return linkageText(d, linkAbbr) })
      .attr('font-size', linkFontSize)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Arial,Sans');
  }

  //append substitution text
  node
    .append('text')
    .text(function (d) { return subText(d); })
    .attr('font-size', linkFontSize)
    .style('font-family', 'Arial,Sans')
    .attr('x', -linkFontSize - 3)
    .attr('y', 3)
    .attr('text-anchor', 'end');
  //  console.log(glycanname);
  //  console.log('drawing finished');
}



//getDepth function gets how deep the data is nested
function getDepth(obj) {
  var depth = 0;
  if (obj.children) {
    obj.children.forEach(function (d) {
      var tmpDepth = getDepth(d);
      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
  }
  return 1 + depth;
};

//fix the fucoses to right angles
function fixfucers(node, width) {
  //try these name 
  //Galb1-4(Galb1-4)GlcNAcb1-3(Fuca1-2)Sp8
  //Galb1-4(Fuca1-3)GlcNAcb1-6(Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-3)Galb1-4Glc-Sp21
  //Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-2Mana1-3(Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-2Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb-Sp19
  //Fuca1-2Galb1-4(Fuca1-3)GlcNAcb1-3Galb1-4(Fuca1-3)GlcNAcb1-3Galb1-4(Fuca1-3)GlcNAcb-Sp0

  //get the option for the fucose
  var fucopt = document.getElementById('fucoseopt').value;
  //if original styling then just return and don't modify the values for the fucose
  if (fucopt === 'fucoriginal') { return }

  //get the center value
  var centerx = node.x;

  //go through each node and check if fucose present.
  node.each((d) => {
    if (d.data.monosaccharide === "Fuc") {
      //get the x-limits for the child nodes of the parent of the fucose
      // if (d.parent.depth === 0) { return; }
      if (d.depth === 0) { return; }
      var xmin = d.parent.children[0].x;
      var xmax = d.parent.children[d.parent.children.length - 1].x;
      //count number of non-fucose children
      var nonfucchild = d.parent.children.filter((e) => { return e.data.name.search('Fuc') === -1 }).length;
      var allchildren = d.parent.children.length;

      //drop the fucose to the level of its parent node
      d.y = d.parent.y;
      //get the parent node x value
      var parentx = d.parent.x;

      if (fucopt === 'fucout') {
        //this code puts the fucoses outwards at all times
        if (d.x < centerx) {
          d.x = d.parent.x - (width / 4); //to the left 
        } else if (d.x > centerx) {
          d.x = d.parent.x + (width / 4); //to the right
        } else if (d.x == centerx) {
          if (d.parent.x < centerx) {
            d.x = d.parent.x - (width / 4); //to the left 
          } else if (d.parent.x > centerx) {
            d.x = d.parent.x + (width / 4); //to the left 
          } else {
            d.x = d.parent.x - (width / 4); //to the left as default condition
          }
        } else {
          d.x = d.parent.x - (width / 4); //to the left as default condition
        }
      }

      if (fucopt === 'fucdown') {
        //This code can shift fucose either to left or right of parent
        //check if fucose is left or right of parent node and adjust the x-value with respect to the width
        if (d.x < d.parent.x) {
          d.x = d.parent.x - (width / 4); //to the left
        } else {
          d.x = d.parent.x + (width / 4); //to the right
        }
      }

      if (fucopt === 'fucleft') {
        //This code is alternative to above to push fucose strictly to the left of the parent
        d.x = d.parent.x - (width / 4); //push to left
      }

      //find the difference in x between the siblings of the fucose and the parent
      var diffx; //the difference in x between parent and siblings
      d.parent.children.forEach((e) => {
        if (e.data.monosaccharide !== "Fuc" && diffx == undefined) {
          diffx = e.x - parentx;
        }
      });

      //go through each sibling of the fucose and adjust the x.
      d.parent.children.forEach((c, i) => {
        if (c.data.monosaccharide !== "Fuc" && c.data.name !== d.parent.data.name) {
          c.each((child) => {
            child.x = child.x - diffx;
          })
        }
      })
    }
  })
}

//returns coordinates for transform for linkage text
function transformlinkText(d, i, linkRotate, fontSize, linkAbbr,symbsize) {
  // console.log(d);
  if (i > 0) { //ignores the first sugar as that is the root
    //calculate the angle between this node and the parent node
    var angle = Math.atan2((d.y - d.parent.y), (d.parent.x - d.x)) * 180 / Math.PI;
    //adjust angle for fucose if not using classical drawing
    var fuctype = document.getElementById('fucoseopt').value;
    if (d.data.monosaccharide === "Fuc" && fuctype != 'fucoriginal' && d.depth > 0) {

      if (d.x < d.parent.x) {
        angle = 30 //to the left
      } else {
        angle = 150 //to the right
      }
    }
    if (d.data.monosaccharide === "Fuc" && fuctype != 'fucoriginal') {
      if (angle <= 45) {
        return 'translate(' + (d.parent.x - d.x - 10) / 2 + ',' + (d.y - d.parent.y + 25) / 2 + ') rotate(' + angle + ')';
      } else {
        angle = -30;
        return 'translate(' + (d.parent.x - d.x + 10) / 2 + ',' + (d.y - d.parent.y + 30) / 2 + ') rotate(' + angle + ')';
      }
    }
    if (linkRotate == false) {
      var n;
      linkAbbr ? n = 2 : n = 4;
      switch (true) {
        case (d.x < d.parent.x):
          return 'translate(' + (d.parent.x - d.x - (fontSize * 6) + (fontSize * n)) / (fontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
        case (d.x === d.parent.x):
          return 'translate(' + (d.parent.x - d.x + (fontSize * 6) + (fontSize * n)) / (fontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
        case (d.x > d.parent.x):
          return 'translate(' + (d.parent.x - d.x + (fontSize * 6) - (fontSize * n)) / (fontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
      }
    }
    return 'translate(' + (d.parent.x + 10 - d.x) / 2 + ',' + (d.y - d.parent.y) / 2 + ') rotate(' + angle + ')';


  }else {
    return `translate(${symbsize/4},${symbsize})`
  }
}

function rotateFuc(d, o) {
  // console.log(d.depth);
  // if (d.depth === 1) { return 'translate(' + o.x(d) + ',' + o.y(d) + ')'; }
  if (d.depth === 0) { return 'translate(' + o.x(d) + ',' + o.y(d) + ')'; }
  //do not rotate if classical styling for fucose
  var fuctype = document.getElementById('fucoseopt').value;
  if (fuctype === 'fucoriginal') {
    return 'translate(' + o.x(d) + ',' + o.y(d) + ')';
  } else if (d.data.monosaccharide !== "Fuc") {
    return 'translate(' + o.x(d) + ',' + o.y(d) + ')';
  }
  else {
    d.y = d.y + 4;
    if (d.x < d.parent.x) {
      return 'translate(' + o.x(d) + ',' + o.y(d) + ') rotate(-30)';
    } else {
      return 'translate(' + o.x(d) + ',' + o.y(d) + ') rotate(30)';
    }
  }
}



//find the symbol to draw in the monos.svg
function drawsymbol(d, i, type) {
  if (type === "gp" && i === 0) { return; } //do not draw first residue in glycopeptides
  if (d.data.monosaccharide != undefined) {
    var str = d.data.monosaccharide;
  } else {
    var str = d.data.name;
  }
  if (str != "") {
    return 'img/monos.svg#' + str.toLowerCase();
  } else {
    return 'img/monos.svg#unknown'
  }
}


//returns the linkage text after replacing the a to alpha and b to beta
function linkageText(d, abbr) {
  var str = d.data.linkage;

  //special case for fucose to the right
  if (d.data.monosaccharide === "Fuc" && d.x > d.parent.x) {
    if (abbr == true) {
      str = str.replace(/[\d\?]\-/g, '');
    }
    str = str.split("").reverse().join("");
    str = str.replace (/a/gi, '\u03B1').replace(/b/gi, '\u03B2');
    console.log(str);
    return str;
  }

  if (abbr == true) {
    str = str.replace(/a(?=[\d\?]\-[\d\?])/g, '\u03B1')
      .replace(/b(?=[\d\?]\-[\d\?])/, '\u03B2')
      .replace(/[\d\?]\-/g, '');
    return str;
  }
  if (str.search(/[a,b,\?][\d,\?]\-[\d,\?]/) > -1) {

    if (str.search(/a[\d,\?]\-[\d,\?]/) > -1) {
      str = str.replace(/a(?=[\d\?]\-[\d\?])/, '\u03B1'); //replaces a to alphas
    } else if (str.search(/b[\d\?]\-[\d\?]/) > -1) {
      str = str.replace(/b(?=[\d\?]\-[\d\?])/, '\u03B2'); //replaces b to beta
    }
    return str.substr(str.indexOf('-') - 2);
  } else if (str.search(/[a,b,\?]\-/) > -1) {
    return str.substr(str.indexOf('-') - 1);
  }
  // if partial linkage information
  else if (str.search(/[a,b,\?][\d,\?]/) > -1) {
    if (str.charAt(str.length - 2) === 'a') {
      return '\u03B1' + str.charAt(str.length - 1);
    } else if (str.charAt(str.length - 2) === 'b') {
      return '\u03B2' + str.charAt(str.length - 1);
    }else {
      return str;
    }
  }
  else if (str === "a") {
    return '\u03B1';
  }
  else if (str === 'b') {
    return '\u03B2';
  }
  else {
    return str;
  }
}

//returns the substituent text
function subText(d) {
  if (d.data.substituent != undefined) {
    var str = d.data.substituent;
  } else {
    var str = "";
    return;
  }

  //replace the brackets with "," to create the output string
  str = str.replace(/\[(?=[0-9a-zA-Z])/g, '').replace(/\](?=[0-9a-zA-Z])/g, ',').replace(']', '');

  return str;

}
function deletemono(path) {
  //if first node just remove the svg to start fresh
  if (path.length == 1) {
    document.getElementById(nameid).value = "";
    $("#d3glycanstruc").empty();
    $("#glycoCT").html("");
    return;
  }
  //get the name from the name div and create the object
  var name = document.getElementById(nameid).value;
  var nameobj = JSON.parse(glycantojson(name));

  //create a recursive function to traverse into the nameobj to the parentnode using the path
  var pathcount = 0;
  var duplicatelinknum = false;
  var overrideduplicate = false;
  function recurse(obj) {
    if (obj.name === path[pathcount].data.name) {
      if (pathcount < path.length - 2) {
        pathcount++;
        var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID)
        recurse(obj.children[index]);
      } else {
        var index = obj.children.findIndex((e) => e.name === path[pathcount+1].data.name && e.uniqueNodeID === path[pathcount+1].data.uniqueNodeID)
        obj.children.splice(index, 1); //delete the mono
      }
    }
    return obj;
  }

  //use above recursive function to go to the parentnode selected and delete the childglycan there
  recurse(nameobj);

  outputname(nameobj); //function from addmono.js

  resetchildglycan(); //function from addinfo.js


}
function getGTCID() {
  // define reducing end types
  let types = [
    { anomer: "a", name: "alpha", },
    { anomer: "b", name: "beta", },
    { anomer: "?", name: "unknown" },
    { anomer: "", name: "open" }
  ];

  //Prepare the table for the output
  $("#gtcid").html(`
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Reducing End Type:</th>
          <th class="alpha" scope="col">&alpha;</th>
          <th class="beta" scope="col">&beta;</th>
          <th class="unknown" scope="col">Unknown (?)</th>
          <th class="open"  scope="col">Open</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GlyTouCan ID:</th>
          <td class="alpha" id="alphagtcid"></td>
          <td class="beta" id="betagtcid"></td>
          <td class="unknown" id="unknowngtcid"></td>
          <td class="open" id="opengtcid"></td>
        </tr>
      </tbody>
    </table>
    `);
  let name = document.getElementById(nameid).value;
  let glycanobj = JSON.parse(glycantojson(name));

  // Go recursively inside the tree to reach the glycan. 
  // This is done for names with linkers for example: 
  // Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1-Sp8
  // because the node Sp8 doesn't have a anomer
  function recursetoglycan(glycan) {
    if (glycan.monosaccharide != "") {
      return glycan;
    }else {
      return recursetoglycan(glycan.children[0])
    }
  }
  glycanobj = recursetoglycan(glycanobj);

  let primaryanomer;
  if (glycanobj.monosaccharide !== "") {primaryanomer = glycanobj.anomer;}

  //for each anomer
  types.forEach((f) => {
    glycanobj.anomer = f.anomer; //set the anomer type for the glycan
    let glycanjson = JSON.stringify(glycanobj); //recreate the JSON for the glycan
    let glycoCT = jsonToGlycoCT(glycanjson); //get the glycoCT
    // build the url to query GlyTouCan
    let url = "https://api.glycosmos.org/glycanformatconverter/2.3.2-snapshot/glycoct2wurcs/"
    url += encodeURI(glycoCT);
    //Query GlyTouCan
    $.get(url).done(function (data) {
      if (data.id === undefined) { //if undefined it means there was some error in the GlycoCT
        $(`#${f.name}gtcid`).html(`Error`);
      } else if (data.id === "no accnumber") { //if No Accession Number 
        $(`#${f.name}gtcid`).html(`Not Available`)
      } else { // If successful retrieval of accession number
        $(`#${f.name}gtcid`).html(`<a href="https://glytoucan.org/Structures/Glycans/${data.id}" target="_blank">${data.id}</a>`)
      };
    }).fail(function () { // if failed to connect to GlyCosmos alert the user
      alert("Error communicating with GlyTouCan.");
    }).done(() => {
      //highlight the column with the set anomer
      let highlight = types.filter(f => f.anomer === primaryanomer);
      highlight.forEach((h) => {
        // console.log(h);
        d3.selectAll(`.${h.name}`).classed("table-success", true);
      })
    });
  });



  // let glycoCT = document.getElementById("glycoCT").value;
  // // build the url
  // let url = "https://api.glycosmos.org/glycanformatconverter/2.3.2-snapshot/glycoct2wurcs/"
  // url += encodeURI(glycoCT);

  // // console.log(url);
  // $.get(url, function (data, status) {
  //   console.log(data.id);
  //   // if (data.id === undefined) {
  //   //   $("#gtcid").html(`Could not obtain GlyTouCan ID for structure. Check GlycoCT`);
  //   // } else if (data.id === "no accnumber") {
  //   //   $("#gtcid").html(`No GlyTouCan ID for given structure. Consider registering structure with GlyTouCan.`)
  //   // } else {
  //   //   $("#gtcid").html(`The GlyTouCan ID is: <a href="https://glytoucan.org/Structures/Glycans/${data.id}" target="_blank">
  //   // ${data.id}</a>`);
  //   //}
  // })
}
//takes the CFG glycan name and converts it into a glycan tree object and returns it as json
function glycantojson(glycanname) {
  // console.clear();
  // MOD because this is a a builder we do not just say NoGlycan
  //check if glycanname has any monosaccharides
  // if (!monos.some(function (v) { return glycanname.search(v) > -1 })) {
  //   glycanname = 'NoGlycan';
  // }

  //remove whitespace between string if any
  glycanname = glycanname.replace(/ /g, '');

  //replace sulfated position brackets
  glycanname = glycanname.replace(/\((?=\d[a-zA-Z]\))/g, '[');
  glycanname = glycanname.replace(/(\[\d[a-zA-Z])\)/g, '$1]');

  //clean up GlcN(Gc)
  if (glycanname.indexOf('GlcN(Gc)') > -1) {
    glycanname = glycanname.replace(/GlcN\(Gc\)/, 'GlcNGc');
  }

  var glynamearray = glystrtoarray(glycanname);

  function glystrtoarray(str) {
    //split the glycannamenow to the array
    var arr = str.split(/(\)|\(|-[\d,\?]|-(?=[a-zA-z]))/g).filter(function (n) {
      return n !== '';
    });

    //clean up the array to add the linkages back to the glycan
    var newarr = [];
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1].search(/\-[\d,\?]/) > -1) {
        newarr.push(arr[i] + arr[i + 1]);
      } else if (arr[i].search(/\-/) < 0) {
        newarr.push(arr[i]);
      }
    }
    //push the last value of arr
    newarr.push(arr[arr.length - 1]);
    return newarr;
  }


  var glyjson = JSON.stringify(parseTree(glynamearray), 0, 2);

  // Answer from stackoverflow question answered by ryeballar modified for performance
  // https://stackoverflow.com/questions/50673284/delimited-text-to-nested-javascript-object-json
  function parseTree(arr) {
    return arr.reduce(parseTreeReducer, [])[0];
  }

  function parseTreeReducer(array, ch, idx, src) {
    // console.log({array, ch, src, idx});
    let indexBracket = array.lastIndexOf('(');
    if (ch === `(`) {
      // is it an open bracket?
      // store it in the array stack!

      array.push(ch);
    } else if (ch === `)`) {
      // is it a close bracket?
      // remove the last open bracket
      // this prepares the nodes after the open bracket index
      // to be the children of the next node

      array.splice(indexBracket, 1);
    } else if (ch !== '-') {
      // make sure to ignore '-' key

      // separate the linkage, monosaccharide, subsituents information
      var link, mono, sub, linknum;
      var chnosub = ch.substring(ch.lastIndexOf(']') + 1, ch.length); //name without substituents like sulfates
      if (chnosub != ch) {
        sub = ch.replace(chnosub, ''); //get the substituent information
      }
      //to get linkage information countdown from the length of the chnosub till the string matches to one of the monos
      //when you have the index for that (i), you can use that to separate the linkage from the monosaccharide
      for (i = 0; i < chnosub.length; i++) {
        if (monos.includes(chnosub.substring(0, (chnosub.length - i))) === true) {
          link = chnosub.substring((chnosub.length - i), chnosub.length);
          linknum = +link.substr(-1)
          mono = chnosub.substring(0, (chnosub.length - i));
          break;
        }
      }

      //special cases
      //Case 1: Neu5,9Ac
      if (ch.search(/Neu5\,9Ac/g) > -1) {
        mono = "Neu";
        sub = '[5Ac][9Ac]';
        link = ch.replace(/Neu5\,9Ac/g, '');
        linknum = +link.substr(-1);
      }

      //end of special cases

      //add default values
      if (link == undefined) { link = ""; }
      if (mono == undefined) { mono = ""; }
      if (sub == undefined) { sub = ""; }
      if (linknum == undefined) { linknum = 0; }

      var anomer = link.charAt(0);
      if (/^\d+$/.test(anomer)) {
        // anomer is a digit
        anomer = '?';
      }
      if (/\-$/.test(link)) {
        // link has hyphen at the end
        link = link.replace(/\-$/, '');
      }

      // push the node in the array stack
      array.push({
        name: ch, // name
        linkage: link, //add the linkage information
        monosaccharide: mono, //monosaccharide
        substituent: sub, //substituent
        linknum: linknum, //linkage number
        anomer: anomer, //anomeric configuration of sugar
        uniqueNodeID: idx, //use the parsetreereducer index as the uniqueNodeID

        // ensure that we only get the nodes that are after the
        // last open bracket from the array stack and remove them.
        // These removed nodes will be assigned as children for
        // this current node
        children: array
          .splice(
            // make sure we don't delete the open bracket
            indexBracket + 1,
            // only remove items beyond the open bracket index
            array.length - indexBracket - 1
          )
          .reverse(), // reverse to represent the expected output (optional!)
      });
    }
    // return the array stack
    return array;
  }

  // console.log(glyjson); //logs the entire glycan as json
  return glyjson;
}
//function takes the cfg name from the input field and outputs the GlycoCT
function cfgToGlycoCT() {
  var cfgname = document.getElementById(nameid).value;
  if (cfgname === '') {
    alert('No name typed. Please check Name above.');
    return;
  }
  var glycanjson = glycantojson(cfgname);
  var glycoCT = jsonToGlycoCT(glycanjson).replace(/\n/g, "<br>");

  document.getElementById('glycoCT').innerHTML = glycoCT;
}

//takes the glycan tree JSON and converts it to GlycoCT
function jsonToGlycoCT(json) {
  var glycoCT = 'Hello';
  var glycan = JSON.parse(json); //parse the json into the glycan obj.
  glycan = d3.hierarchy(glycan);
  var RES = 'RES\n';
  var REScount = 1;
  var LIN = 'LIN\n';
  var LINcount = 1;
  // console.log(glycan);

  // This function recurses through the glycan object to mutate the RES and LIN variables above
  // to generate the RES and LIN fields of the GlycoCT
  function recurseToGlycoCT(obj, parentRES = 1) {

    var data = obj.data;
    let thismono = data.monosaccharide;
    let subcount = 0; //keep count of substituents
    let parentCount = REScount; //This keeps a track of the parent residue for linkages.
    // Passing in the parentCount into the recursive function as parentRES helps to keep track of what is attached
    // to what in case of branching.
    let subs = splitSubs(data.substituent).pop();

    //assign anomeric assignment for the basetype
    var thisanomer = "";
    // console.log(data.anomer);
    if (data.anomer == undefined) {
      thisanomer = "x";
    } else if (data.anomer === "" || data.anomer === "-") {
      thisanomer = "o";
    } else if (data.anomer == "?") {
      thisanomer = "x"
    } else {
      thisanomer = data.anomer;
    }

    // Add the residue and substituents
    let strippedmono = '';

    if (thismono.indexOf('NAc') > -1) {
      strippedmono = thismono.split('NAc')[0];
      subs.unshift("NAc");
      subcount++;
    } else if (thismono.indexOf('NGc') > -1) {
      strippedmono = thismono.split('NGc')[0];
      subs.unshift("NGc");
      subcount++;
    } else if (thismono === 'Neu5Ac') {
      strippedmono = "Kdn";
      subs.unshift("5Ac");
      subcount++;
    } else if (thismono === 'Neu5Gc') {
      strippedmono = "Kdn";
      subs.unshift("5Gc");
      subcount++;
    }
    else if (thismono.indexOf('N') > -1 && gctMonoList.hasOwnProperty(thismono.replace(/N/g, ''))) {
      strippedmono = thismono.replace(/N/g, '');
      subs.unshift("N");
      subcount++;
    } // add other conditions to strip the substituents from the base sugar
    else {
      strippedmono = thismono;
    }


    let type = getRingType(thismono, thisanomer);

    // start writing out the name
    //console.log(strippedmono);
    // Start with the RES portion of the parent monosaccharide
    if (gctMonoList.hasOwnProperty(strippedmono)) {
      //Check if gct stripped mono has a transform, if not append the type and append to RES                                                                                        
      if (gctMonoList[strippedmono].transform == "") {
        RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct + '-' + type + gctMonoList[strippedmono].transform;
        // //concatenate the ring begin and end values to the RES
        // RES += type
        if (thisanomer === "o") {
          RES += '|1:aldi';
        }
      }
      //for cases with transforms in the gctMonoList
      else {
        RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct + gctMonoList[strippedmono].transform;
      }

      RES += "\n";
      REScount++;
    }


    // Add the Linkage of the node to the parentRes
    if (data.linkage !== '' && data.linkage !== "?" && LINcount != 1) {
      let link = data.linkage
      //e.g. for a1-3 for RES 1 and 2:     1:1o(3+1)2d
      let parentAttachmentPos = link.charAt(link.length - 1),
        childAttachmentPos = link.charAt(link.indexOf('-') - 1);

      if (parentAttachmentPos === "?") { parentAttachmentPos = "-1" };
      if (childAttachmentPos === "?") { childAttachmentPos = "1" };
      LIN += `${LINcount}:${parentRES}o(${parentAttachmentPos}+${childAttachmentPos})${parentCount}d\n`;
      LINcount++;
    }


    //Add substituents
    subs = subs.filter(f => f !== "");
    subs.forEach((s) => {
      // console.log(s);
      let position, substituent;
      switch (true) {
        case (s === "NAc"):
          position = 2;
          substituent = "n-acetyl";
          break;
        case (s === "NGc"):
          position = 2;
          substituent = "n-glycolyl";
          break;
        case (s.indexOf("Ac") > -1):
          position = s.split(/(?!\d)/g)[0];
          console.log(position);
          substituent = "acetyl";
          //special case
          if (thismono === "Neu5Ac") { substituent = "n-acetyl" };
          break;
        case (s.indexOf("Gc") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "glycolyl";
          //special case
          if (thismono === "Neu5Gc") { substituent = "n-glycolyl" };
          break;
        case (s.indexOf("Me") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "methyl";
          break;
        case (s.indexOf("N") > -1):
          position = 2;
          substituent = "amino";
          break;
        case (s.indexOf("S") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "sulfate";
          break;
        case (s.indexOf("P") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "phospho";
          break;
        default:
          position = s.charAt(0);
          substituent = s.split(/(?!\d)/g)[1];
      }
      RES += `${REScount}s:${substituent}\n`;
      LIN += `${LINcount}:${parentCount}d(${position}+1)${REScount}n\n`;
      LINcount++;
      subcount++;
      REScount++;
    })

    //all counters must move before this

    if (obj.data.children.length > 0) {
      obj.children.forEach(a => recurseToGlycoCT(a, parentCount)); //pass the REScount as the parent sugar number for the LIN
    }


    return obj;
  }

  recurseToGlycoCT(glycan);

  if (LIN !== "LIN\n") {
    glycoCT = RES + LIN;
  } else {
    glycoCT = RES;
  }

  glycoCT = glycoCT.trim();
  return glycoCT;
}




function splitSubs(str) {
  if (subs === "") return [];
  var subs = [];
  //replace the brackets with "," and then split it
  subs = str.replace(/\[(?=[0-9a-zA-Z])/g, '').replace(/\](?=[0-9a-zA-Z])/g, ',').replace(']', '');
  subs = subs.split(/,/g);
  if (typeof subs === "object") {
    subs = [subs];
  }
  return subs;

}


//function decides whether ring is pyranose, furanose or open
function getRingType(mono, anomer) {
  // if ring is open then just return open
  if (anomer === "o") {
    return "0:0";
  }

  //list of pyranose type 
  let pyranose = `Gal,Glc,Man,GalNAc,GlcNAc,ManNAc,Fuc,Neu5Ac,Neu5Gc,Neu,Sia,Xyl,IdoA,GlcA,
  GalA,GlcA,ManA,GlcN,GalN,ManN,Hex,HexNAc,HexA,HexN
  `;
  let furanose = `Rib,Api,Ara`;

  pyranose = pyranose.split(/,/g);
  furanose = furanose.split(/,/g);

  if (pyranose.includes(mono)) {
    return '1:5'
  }

  if (furanose.includes(mono)) {
    return '1:4'
  }

  return 'x:x'
}


function copyGlycoCT(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");

  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("GlycoCT Copied");
  }
}
//Once all the monosaccharide symbols are fetched start appending the buttons
fetchSVG.then(function (svg) {
  // console.log(svgarr);
  svgarr.forEach(mono => {
    appendButton(mono, 'fulllist');
  })

  commonMonos.forEach(e => {
    //find the common monosaccharides based on the "common" array
    var mono = svgarr.find((m) => {
      return m.id == e;
    });
    appendButton(mono, 'commonlist');
  })

});


//funciton appends button for monosaccharide in a given div id.
function appendButton(mono, divid) {
  const div = d3.select('#' + divid)
    .append('div')
    .attr('class', 'monodiv');

  const btn = div.append('div')
    .attr('id', (divid + 'btn' + mono.id))
    .attr('class', 'monobtndiv')
    .attr('title', mono.id + " OR " + mono.fullname)
    .attr('data-abbr', mono.id)
    .on('mouseup', function () {
      monoselect(this.dataset.abbr);
    })

  const svg = btn.append('svg')
    .attr('id', 'mono' + mono.id)
    .attr('viewBox', mono.viewBox)
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('width', '55')
    .attr('height', '35');



  let g = svg.append('g').attr("transform", "scale(0.5 0.5) translate(25,0)");

  g.html(mono.innerhtml);

  let name = svg.append("g")
    .attr("transform", "translate(50%,50)")
    .append("text")
    .text(mono.id)
    .attr("text-anchor", "middle")
    .attr("x", "50%")
    .attr("y", "90%")
    .attr("font-size", "1em")
    // .attr("font-weight", "bold")
    ;

}




//call appendTerminals in initialize to append the terminals
function appendTerminals() {
  terminals.forEach((f,i) => {
    $("#terminalslist").append(`
    <li class="template">
    <button class="btn btn-outline-primary btn-sm"
      onclick="addTerminaltoChild(${i})">${f.name}</button>
    </li>
  `)
  })
}

function addTerminaltoChild(i) {
  let terminal = terminals[i].sequence;
  childglycan = JSON.parse(glycantojson(terminal));
  $('#monocheck').html(terminal);
  $('#linkagecheck').html("<i>Add Linkage</i>")
}
//Function takes glycantojson like object passed into d3.hierarchy
// and converts it back to the CFG Name by recursion
var bracketcount = 0 //counter to keep a track of brackets opening and closing
function objecttoname(obj, bindex) {

  //write down the name
  var name = '';
  if (obj.data.monosaccharide != "" && obj.data.linkage != "") { //ideal conditions both mono and linkage present
    if (obj.data.substituent === undefined || obj.data.substituent === "[]") { obj.data.substituent = ""}
    if (obj.data.linkage.search('-') === -1 && obj.depth > 0) {
      obj.data.linkage = obj.data.linkage + '-';
    }
    name = obj.data.substituent + obj.data.monosaccharide + obj.data.linkage + name;
  } else if (obj.data.linkage == "" && obj.parent == null) { //condition for root node
    name = obj.data.name + name;
  } 
    else { //condition for all other nodes without linkage information
    name = obj.data.name + "-" + name;
  }

  //if the index of the childnode is >1 then put a bracket for the branch
  if (bindex > 1) {
    name = name + ')';
  }
  
  if (obj.data.children.length > 0) {
    obj.children.forEach((e,i) => {
      name = objecttoname(e, obj.children.length- i) + name;

    });
  }

  //if the index of the childnode is >1 then put a closing bracket for the branch
  if (bindex > 1) {
    name = '(' + name;
  }

  return name;
}
function replacemono(path, multiple) {
  //if first node just remove the svg to start fresh
  if (path.length == 1) {
    document.getElementById(nameid).value = "";
    $("#d3glycanstruc").empty();
    return;
  }

  if (childglycan.monosaccharide == "" && childglycan.linkage == "" && childglycan.substituent == ""){
    alert("No replacement criteria selected. Please select what would you like to replace with.")
    return;
  }
  //get the name from the name div and create the object
  var name = document.getElementById(nameid).value;
  var nameobj = JSON.parse(glycantojson(name));

  //create a recursive function to traverse into the nameobj to the parentnode using the path
  var pathcount = 0;
  var duplicatelinknum = false;
  var overrideduplicate = false;
  function recurse(obj) {
    if (obj.name === path[pathcount].data.name) {
      if (pathcount < path.length - 2) {
        pathcount++;
        var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID)
        recurse(obj.children[index]);
      } else {
        var index = obj.children.findIndex((e) => e.name === path[pathcount + 1].data.name)
        if (childglycan.linkage != "") {
          var linkindex = obj.children.findIndex((e) => e.linknum === childglycan.linknum);
          if (linkindex > -1 && linkindex != index) {
            alert ("Two nodes cannot have same linkage position. Please check linkages.")
              return;
          }
          obj.children[index].linkage = childglycan.linkage;
          obj.children[index].linknum = childglycan.linknum;
        }
        if (childglycan.monosaccharide != "") {
          obj.children[index].monosaccharide = childglycan.monosaccharide;
        }
        if (childglycan.substituent != "") {
          obj.children[index].substituent = childglycan.substituent;
        }else if (childglycan.substituent == "[]") {
          obj.children[index].substituent = "";
        }

        obj.children[index].name = obj.children[index].substituent + obj.children[index].monosaccharide + obj.children[index].linkage;


      }
    }
    return obj;
  }

  //use above recursive function to go to the parentnode selected and delete the childglycan there
  recurse(nameobj);

  outputname(nameobj); //function from addmono.js

  if (multiple === false){
    resetchildglycan(); //function from addinfo.js
  }

}
// Replaces the CSS to inline styles using the svgStyle global variable
function replacecss(svgid) {
    // console.log(svg_style);
    // replace all comments in the svg style
    var allStyle = svgStyle.replace(/\/\*.*\*\//g, '').replace(/\r?\n|\r/g, '').split('}');
    // console.log(all_style);
    allStyle.forEach(function (el) {
        if (el.trim() != '') {
            var full_rule_string = el.split('{');
            var selector = full_rule_string[0].trim();
            var all_rule = full_rule_string[1].split(';');
            all_rule.forEach(function (elem) {
                if (elem.trim() != '') {
                    var attr_value = elem.split(':');
                    //d3.selectAll(selector).style(attr_value[0].trim() + '', attr_value[1].trim() + '');
                    var prop = attr_value[0].trim();
                    var value = attr_value[1].trim();
                    if (prop == 'font-weight') {
                        d3.select('#' + svgid).selectAll(selector).each(function (d, i) {
                            if (!this.getAttribute(prop) && this.style[prop] !== value) {
                                d3.select(this).style(prop + '', value + '');
                            }
                        });
                    } else {
                        d3.select('#' + svgid).selectAll(selector).each(function (d, i) {
                            // console.log(this);
                            if (!this.getAttribute(prop) && !this.style[prop]) {
                                d3.select(this).style(prop + '', value + '');
                            }
                        });
                    }
                }
            });
        }
    });
}


// Replaces <use> in the svg using the svgarr global
function replaceuse(svgid) {
    var use = $(`#${svgid} use`).each(function (i) {
        // console.log(this);
        var href = this.getAttribute('href');
        if (href === null) { return }
        var obj = {
            id: href.split('#')[1],
            x: this.getAttribute('x'),
            y: this.getAttribute('y'),
            height: this.getAttribute('height'),
            width: this.getAttribute('width')
        }

        //get the viewbox and html from svgarr global variable mapped above
        var mono = svgarr.find(e => {
            // console.log(e);
            // console.log(obj);
            return e.id.toLowerCase() == obj.id;
        });

        var s = '<svg id="' + obj.id + '" x="' + obj.x + '" y="' + obj.y + '" height="' + obj.height + '" width="' + obj.width + '" viewBox="' + mono.viewBox + '">'
        s += mono.innerhtml;
        s += '</svg>'
        $(this).parent().prepend(s); //prepend final svg
    }).remove();
}

// Function to save SVG
function savesvg(svgid) {
    replacecss(svgid);
    replaceuse(svgid);
    var svgData = document.getElementById(svgid);
    svgData.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgData.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svgData = document.getElementById(svgid).outerHTML;
    var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "Figure.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    d3glycanstructure(document.getElementById(nameid).value, 'd3glycanstruc');//redraw glycan
}

//function fixes order of children based on linker
function sortchildren(obj) {
  if (obj.data.children.length > 0) {

    obj.children.sort(function (x, y) {
      return d3.ascending(x.data.linknum, y.data.linknum);
    });

    // to check for core fucose 
    //    1. One Child Monosaccharide is "Fuc"
    //    2. The depth of the parent should be 0 (if linker not present) or 1 (if linker is present)
    //    3. The parent mono is GlcNAc
    //    4. There is a sibling child mono is also GlcNAc                      
    // check parent depth   && parent mono is GlcNAc                     && sibling mono is GlcNAc     
    if (obj.children.findIndex((e) => e.data.monosaccharide == "Fuc") > -1 &&
        obj.depth <= 1 &&
        obj.data.monosaccharide === "GlcNAc" &&
        obj.children.findIndex((e) => e.data.monosaccharide == "GlcNAc") > -1) {
      // console.log("Found core fucose");
      // when core fucose found sort differently
      obj.children.sort ((x,y) => x.data.monosaccharide == "Fuc" ? -1 : y.data.monosaccharide == "Fuc" ? 1 : 0)
    }

    //recurse all children
    obj.children.forEach(e => {
      sortchildren(e);
    });
  }

  return obj;
}

function starttemplate(name) {

  //get the input field for the name
  var nameinput = document.getElementById(nameid);
  if (nameinput.value != ""){
    if(!confirm("This will clear current Name field. Are you sure you would like to continue?")){
      return;
    }
  }
  
  nameinput.value = "";
  var template = templates.filter((e) => e.name == name && e.type ==="starter");
  nameinput.value = template[0].structure;

  tracknames(nameinput.value);
  
  d3glycanstructure(nameinput.value, 'd3glycanstruc');
  cfgToGlycoCT();
}
function tracknames(name) {
  if (tracknum > 0) {
    $('#undodiv').removeClass('hide').addClass('show');
  }
  
  trackname[tracknum] = name; //push new name in position of the tracknum
  tracknum++;
  trackname = trackname.filter((d,i) => i < tracknum);

  //hide the redo button 
  if (tracknum === trackname.length){
    $('#redodiv').addClass('hide').removeClass('show');
  }
}

function undo() {
  if (tracknum < 2) {
    return;
  }
  var nameinput = document.getElementById(nameid);
  tracknum--;
  if (trackname[tracknum-1] != undefined) {
    nameinput.value = trackname[tracknum-1];
    if (nameinput.value != "") {
      d3glycanstructure(nameinput.value, 'd3glycanstruc');
    } else {
      $("#d3glycanstruc").empty();
    }
  }
  if (tracknum === 1) {
    //hide the undo button
    $('#undodiv').addClass('hide').removeClass('show');
  }
  if (tracknum < trackname.length) {
    $('#redodiv').removeClass('hide').addClass('show');
  }

}

function redo() {
  if (tracknum >= trackname.length) { return;}
  var nameinput = document.getElementById(nameid);
  tracknum++;
  if (tracknum <= trackname.length){
    nameinput.value = trackname[tracknum-1];
    if (nameinput.value != "") {
      d3glycanstructure(nameinput.value, 'd3glycanstruc');
    } else {
      $("#d3glycanstruc").empty();
    }
  }
  if (tracknum === trackname.length){
    $('#redodiv').addClass('hide').removeClass('show');
  }
  if (tracknum < trackname.length) {
    $('#undodiv').removeClass('hide').addClass('show');
  }
}
