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
    //console.log(name);
    let li = document.createElement("li");
    li.innerText = name;
    container.appendChild(li);
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  if (playerArray.length > 5) {
    alert("too large");
  } else {
    let totalPlayer = playerArray.length;
    let playerCost = document.getElementById("player-cost");
    let playerCostString = playerCost.value;
    let perPlayerCost = parseFloat(playerCostString);
    let perPlayerCostTotal = totalPlayer * perPlayerCost;
    let playerExpense = document.getElementById("player-expense");
    playerExpense.innerText = perPlayerCostTotal;
  }
  // let totalPlayer = playerArray.length;
  // //console.log(totalPlayer);
  // let playerCost = document.getElementById("player-cost");
  // let playerCostString = playerCost.value;
  // let perPlayerCost = parseFloat(playerCostString);
  // let perPlayerCostTotal = totalPlayer * perPlayerCost;
  // let playerExpense = document.getElementById("player-expense");
  // playerExpense.innerText = perPlayerCostTotal;
});
document.getElementById("calculate-total").addEventListener("click", function () {
  let totalPlayer = playerArray.length;
  let playerCost = document.getElementById("player-cost");
  let playerCostString = playerCost.value;
  let perPlayerCost = parseFloat(playerCostString);
  let perPlayerCostTotal = totalPlayer * perPlayerCost;

  let managerCost = document.getElementById("manager-cost");
  let managerCostString = managerCost.value;
  let managerCostTotal = parseFloat(managerCostString);

  let coachCost = document.getElementById("coach-cost");
  let coachCostString = coachCost.value;
  let coachCostTotal = parseFloat(coachCostString);
  let calculateTotal = managerCostTotal + coachCostTotal + perPlayerCostTotal;
  let total = document.getElementById("total");
  total.innerText = calculateTotal;
  //console.log(calculateTotal);
});
