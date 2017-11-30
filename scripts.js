(function(){ 
  
let checkCoords = document.getElementById("show-coords");
let checkClusters = document.getElementById("show-clusters");
let checkLabels = document.getElementById("show-labels");
let checkLines = document.getElementById("show-lines");
let checkOldLines = document.getElementById("show-oldlines");
let checkAppendices = document.getElementById("show-appendices");
let checkExchanges = document.getElementById("show-exchanges");

let coords = document.getElementById("coordinates");
let exchanges = document.getElementById("exchanges");
let appendices = document.getElementById("appendices");
let lines = document.getElementById("lines");
let clusters = document.getElementById("clusters");

let check1 = document.getElementById("show-1");
let check2 = document.getElementById("show-2");
let check3 = document.getElementById("show-3");
let check4 = document.getElementById("show-4");
let check5 = document.getElementById("show-5");
let check6 = document.getElementById("show-6");
let check7 = document.getElementById("show-7");
let check8 = document.getElementById("show-8");
let check9 = document.getElementById("show-9");
let check10 = document.getElementById("show-10");
let check11 = document.getElementById("show-11");
let check12 = document.getElementById("show-12");
let check13 = document.getElementById("show-13");
let check14 = document.getElementById("show-14");
// HIDE AND SHOW INDIVIDUAL LINES
let linesOnly = document.querySelectorAll("[id$='line-group']");
let toggleIL = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];
for (let i=1; i<=14; i++) {
  let item = eval(`check${i}`);
  item.addEventListener("change", function(){
    let num = i - 1;
    let elemID = linesOnly[num].id;
    let elem = document.getElementById(elemID);
    if (toggleIL[num]) { // currently hidden
      elem.classList.remove("hide");
      toggleIL[num] = false;
    } else { // currently shown
      elem.classList.add("hide");
      toggleIL[num] = true;
    }
  });
}


let toggleCoords = false; // unhidden
let toggleClusters = true; // hidden
let toggleExchanges = true; // hidden
let toggleAppendices = true; // hidden
// let toggleLines = false; // unhidden
let toggleLabels = false; // unhidden
let toggleOldLines = false; // unhidden

checkCoords.addEventListener("change", function(){
  if (toggleCoords) {
    coords.classList.remove("hide");
    toggleCoords = false;
  } else {
    coords.classList.add("hide");
    toggleCoords = true;
  }
});


// HIDE AND SHOW OLD LINES
// let oldLines = document.querySelectorAll(".old-line");
// let toggleOL = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];
// checkOldLines.addEventListener("change", function(){
//   for (i=0; i<oldLines.length; i++) {
//     if (toggleOL[i]) {
//       oldLines[i].classList.remove("hide");
//       toggleOL[i] = false;
//     } else {
//       oldLines[i].classList.add("hide");
//       toggleOL[i] = true;
//     }
//   }
// });

checkExchanges.addEventListener("change", function(){
  if (toggleExchanges) {
    exchanges.classList.remove("hide");
    toggleExchanges = false;
  } else {
    exchanges.classList.add("hide");
    toggleExchanges = true;
  }
});

checkClusters.addEventListener("change", function(){
  if (toggleClusters) {
    clusters.classList.remove("hide");
    toggleClusters = false;
  } else {
    clusters.classList.add("hide");
    toggleClusters = true;
  }
});

checkAppendices.addEventListener("change", function(){
  if (toggleAppendices) {
    appendices.classList.remove("hide");
    toggleAppendices = false;
  } else {
    appendices.classList.add("hide");
    toggleAppendices = true;
  }
});

// checkLines.addEventListener("change", function(){
//   if (toggleLines) {
//     lines.classList.remove("hide");
//     toggleLines = false;
//   } else {
//     lines.classList.add("hide");
//     toggleLines = true;
//   }
// });

// checkLabels.addEventListener("change", function(){
//   if (toggleLabels) {
//     labels.classList.remove("hide");
//     toggleLabels = false;
//   } else {
//     labels.classList.add("hide");
//     toggleLabels = true;
//   }
// });






  
})();