(function(){ 
  
let checkClusters = document.getElementById("show-clusters");
let checkLabels = document.getElementById("show-labels");
let checkLines = document.getElementById("show-lines");
let checkAppendices = document.getElementById("show-appendices");

let appendices = document.getElementById("appendices");
let lines = document.getElementById("lines");
let clusters = document.getElementById("topic-clusters");

let toggleClusters = false; // unhidden
let toggleAppendices = false; // unhidden
let toggleLines = false; // unhidden

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


  
})();