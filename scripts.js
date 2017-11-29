(function(){ 
  
let checkClusters = document.getElementById("show-clusters");
let checkLabels = document.getElementById("show-labels");
let checkLines = document.getElementById("show-lines");
let checkAppendices = document.getElementById("show-appendices");

let appendices = document.getElementById("appendices");
let lines = document.getElementById("lines");
let clusters = document.getElementById("topic-clusters");
let labels = document.getElementById("station-labels");

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

let linesOnly = document.querySelectorAll("[id$='line-group']");
// console.log(linesOnly);

let toggleIL = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];


for (let i=1; i<=14; i++) {
  // console.log(`inside for loop ${i}`);
  let item = eval(`check${i}`);
  // console.log(`item: ${item}`);
  item.addEventListener("change", function(){
    // console.log(`inside for event listener for ${item}`);
    let num = i - 1;
    // console.log(`num: ${num}`);
    // console.log(`linesOnly[${num}]: ${linesOnly[num]}`);
    let elemID = linesOnly[num].id;
    // console.log(`num: ${num}, id: ${elemID}`);
    let elem = document.getElementById(elemID);
    // console.log(`elem: ${elem}`);
    // let toggle = eval(`toggle${i}`);
    // console.log(`toggle: ${toggleIL[num]}`);
    if (toggleIL[num]) { // currently hidden
      elem.classList.remove("hide");
      toggleIL[num] = false;
    } else { // currently shown
      elem.classList.add("hide");
      toggleIL[num] = true;
    }
  });

}


let toggleClusters = true; // hidden
let toggleAppendices = true; // hidden
let toggleLines = false; // unhidden
let toggleLabels = false; // unhidden

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

checkLines.addEventListener("change", function(){
  if (toggleLines) {
    lines.classList.remove("hide");
    toggleLines = false;
  } else {
    lines.classList.add("hide");
    toggleLines = true;
  }
});

checkLabels.addEventListener("change", function(){
  if (toggleLabels) {
    labels.classList.remove("hide");
    toggleLabels = false;
  } else {
    labels.classList.add("hide");
    toggleLabels = true;
  }
});






  
})();