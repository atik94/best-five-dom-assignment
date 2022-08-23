let playerArray = [];
function addToPlayer(element) {
  let playerName = element.parentNode.children[0].innerText;
  let playerObj = {
    playerName: playerName,
  };
  if (playerArray.length === 5) {
    alert("can not selected");
    return alert();
  } else {
    playerArray.push(playerObj);
    displayPlayer(playerArray);
  }
}

function displayPlayer(playerArrayName) {
  let container = document.getElementById("container");
  container.innerText = "";
  for (let i = 0; i < playerArrayName.length; i++) {
    let name = playerArray[i].playerName;
    let li = document.createElement("li");
    li.innerText = name;
    container.appendChild(li);
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  let totalPlayer = playerArray.length;
  let playerCost = document.getElementById("player-cost");
  let playerCostString = playerCost.value;
  let perPlayerCost = parseFloat(playerCostString);
  let perPlayerCostTotal = totalPlayer * perPlayerCost;
  let playerExpense = document.getElementById("player-expense");
  playerExpense.innerText = perPlayerCostTotal;
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
});
