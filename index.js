function getFirstSelector(selector){
  var firstOne = document.querySelector(selector);
  return firstOne;
}

function nestedTarget(){
  var getTarget = document.getElementById('nested').querySelector('div.target');
  return getTarget;
}

function increaseRankBy (n){
const nodeList = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for ( var i=0;nodeList.length >i;i++){
nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n
}
}

function deepestChild(){
var parent = document.getElementById('grand-node')
var child = parent.querySelector('div')

while(child){
parent = child;
var child = parent.querySelector('div')
}
return parent;
}
