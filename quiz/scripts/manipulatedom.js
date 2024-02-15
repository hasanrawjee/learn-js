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

function createTDNode(childNode, id) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.id = id;
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButtonNode(txt, index) {
  let buttonNode = document.createElement('button');
  buttonNode.innerText = txt;
  buttonNode.id = `edittext${index}`;
  buttonNode.onclick = () => handleEditTextClick(index);
  return buttonNode;
}


function handleEditTextClick(index) {
  console.log("Edit text clicked", index);
  const textCell = document.getElementById("col0-" + index);
  textCell.classList.add("tdNode")
  console.log('textCell', textCell);
  const inputCell = document.createElement('input');
  inputCell.type = "text";
  inputCell.placeholder = "Enter Cell (x,y)...";
  textCell.replaceChild(inputCell, textCell.childNodes[0]);
}

function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)", i), 'textCell-' + i);
    let col2 = createTDNode(createButtonNode("Edit text", i), `col1-${i}`);
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
