let playerArray = [];
function addToPlayer(element) {
  let playerName = element.parentNode.children[0].innerText;
  //console.log(playerName);
  let playerObj = {
    playerName: playerName,
  };
  playerArray.push(playerObj);
  //console.log(playerArray);
  displayPlayer(playerArray);
}

function displayPlayer(playerArrayName) {
  let container = document.getElementById("container");
  container.innerText = "";
  //console.log(playerArrayName);
  for (let i = 0; i < playerArrayName.length; i++) {
    //console.log(playerArray[i].playerName);
    let name = playerArray[i].playerName;
    console.log(name);
    let li = document.createElement("li");
    li.innerText = name;
    container.appendChild(li);
  }
}
