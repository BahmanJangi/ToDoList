// Define Variables

const parent_list = document.querySelector("ul"); // Get Task list Parent Node

// Provide "close" and "Edit" buttons
const span_close_icon =
  '<span class="close icon fa fa-close" title="close task"></span>';

const span_edit_icon =
  '<span class="edit icon fa fa-edit" title="edit task"></span>';

//**************************************************************************************************************** */

// Adding "Close" and "Edit" buttons to list items
if (parent_list.hasChildNodes()) {
  let li = document.getElementsByTagName("LI");
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML += span_close_icon + span_edit_icon;
  }
}

//**************************************************************************************************************** */

//Click on "Close" Button Delete The Item From List

parent_list.addEventListener(
  "click",
  function (ev) {
    if (
      ev.target.tagName === "SPAN" &&
      ev.target.className === "close icon fa fa-close"
    ) {
      if (confirm("Are You Sure To Remove This Task ?")) {
        parent_list.removeChild(ev.target.parentElement);
      }
    }
  },
  false
);

//**************************************************************************************************************** */

//Click On "Edit" Button
parent_list.addEventListener(
  "click",
  function (ev) {
    if (
      ev.target.tagName === "SPAN" &&
      ev.target.className === "edit icon fa fa-edit"
    ) {
      if (ev.target.parentElement.className === "checked") {
        alert("You can not Edit a 'Checked' Task ...!");
      } else {
        let input_text_edit = prompt(
          "Enter another Task to replace whit current Task....:",
          ev.target.parentElement.textContent
        );
        if (
          input_text_edit &&
          input_text_edit != ev.target.parentElement.textContent
        ) {
          let innerHTML_value =
            input_text_edit + span_close_icon + span_edit_icon;
          ev.target.parentElement.innerHTML = innerHTML_value;
        }
      }
    }
  },
  false
);

//**************************************************************************************************************** */

// Insert "Checked" status for Item when click on
parent_list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");

      if (ev.target.className != "checked") {
        let tag_i = ev.target.lastChild;
        ev.target.removeChild(tag_i);
      } else {
        let icon_tag = document.createElement("I");
        icon_tag.className = "fa fa-check";
        ev.target.appendChild(icon_tag);
      }
    }
  },
  false
);

//**************************************************************************************************************** */

// Create New List Item
function addNewElement() {
  var input_value = document.getElementById("inputVal").value;
  if (input_value != "") {
    var element = document.createElement("li");

    let innerHTML_value = input_value + span_close_icon + span_edit_icon;

    element.innerHTML = innerHTML_value;

    document.getElementById("MyUl").appendChild(element);

    document.getElementById("inputVal").value = "";
  } else {
    alert("Please Enter Your Text....!");
  }
}

//**************************************************************************************************************** */

// Clear list items

function clearList() {
  if (parent_list.hasChildNodes()) {
    if (confirm("Are you sure to 'Clear Tasks List' ?")) {
      parent_list.innerHTML = "";
    }
  } else {
    alert("Task List Empty...!");
  }
}
