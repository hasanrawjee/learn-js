window.onload = function () {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, idText) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.id = idText;
  return tdNode;
}

function createTxtNode(txt, index) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createBtnNode(index) {
  const btnNode = document.createElement('button');
  btnNode.innerText = "Edit text";
  btnNode.addEventListener('click', () => enableEditCell(index));
  return btnNode;
}


function enableEditCell(index) {
  console.log(index);
  const txtCell = document.getElementById("textCell-" + index);
  txtCell.innerHTML = "<input type='text' placeholder='Enter cell(" + index + ", 0)' />";
}

function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)", i), 'textCell-' + i);
    let col2 = createTDNode(createBtnNode(i), 'btnNode-' + i);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
