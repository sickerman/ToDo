function addToDo(toDO) {
  list = document.getElementById("item");
  toDO = document.getElementById("input").value;
  item = ` <li class="item">
          <p class="text">${toDO}</p>
        </li>`;
  position = "beforeend";
  list.insertAdjacentHTML(position, item);
  console.log("clicked");
}

document.getElementById("addButton").addEventListener("click", addToDo);
