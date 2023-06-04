var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");
// var added = params.get("added");
// var edited = params.get("edited");
var status = params.get("status");
var alert_message = document.getElementById("alert-box");


switch (status) {
  case "mem_added":
    var html = "<strong> Member Added </strong> Successfully.</div>";
    break;
  case "mem_edited":
    var html = "<strong> Member Edited </strong> Successfully.</div>";
    break;
  case "mem_deleted":
    var html = "<strong> Member Deleted </strong> Successfully.</div>";
    break;
  case "fam_added":
    var html = "<strong> Family </strong> Added Successfully.</div>";
    break;
  default:
    var html = "";

}

if (html != "") {
  alert_message.className = "alert alert-info";
  alert_message.role = "alert";
  alert_message.innerHTML += html;
  setTimeout(() => alert_message.remove(), 3000);
}
// same as: 
// setTimeout(function () {
//   alert_message.remove();
// }, 3000)



// Retrieve all stored form data from local storage
var headData = localStorage.getItem("headData");
var allHeadData = JSON.parse(headData) || [];

var memData = localStorage.getItem("memData");
var allMemData = JSON.parse(memData) || [];

// Function to find data by ID
function getHeadDataById(id) {
  for (var i = 0; i < allHeadData.length; i++) {
    if (allHeadData[i].id === id) {
      return allHeadData[i];
    }
  }
  return null; // Return null if data with the specified ID is not found
}

function fillHead() {
  var house_number = document.getElementById("house-number");
  var address = document.getElementById("address");
  var mobile_number = document.getElementById("mobile-number");
  var name = document.getElementById("name");
  var gender = document.getElementById("gender");
  var age = document.getElementById("age");
  var citizenship_number = document.getElementById("citizenship-number");



  house_number.textContent = headResult.id;
  address.textContent = headResult.address;
  mobile_number.textContent = headResult.mobile_number;
  name.textContent = headResult.name;
  gender.textContent = headResult.gender;
  age.textContent = headResult.age;
  citizenship_number.textContent = headResult.citizenship_number;


}


var headIdToSearch = house;
var headResult = getHeadDataById(headIdToSearch);
if (headResult) {
  fillHead();
} else {
  console.log("Data not found for ID:", headIdToSearch);
}




var matching_data = [];
// Function to find data by ID
function getMemDataById(id) {

  for (var i = 0; i < allMemData.length; i++) {
    if (allMemData[i].house_number.toString() === id.toString()) {
      matching_data.push(allMemData[i]);


    }
  }
  return matching_data;;
}

function fillMem() {
  var table_body = document.getElementById("table-body");
  table_body.innerHTML = ''; // Clear previous data

  for (var i = 0; i < memResult.length; i++) {
    var row = document.createElement("tr");

    var mem_name = document.createElement("td");
    var mem_gender = document.createElement("td");
    var mem_age = document.createElement("td");
    var mem_citizenship_number = document.createElement("td");
    var edit_delete_element = document.createElement("td");
    var edit_mem = document.createElement("a");
    var delete_mem = document.createElement("button");


    mem_name.textContent = memResult[i].name;
    mem_gender.textContent = memResult[i].gender;
    mem_age.textContent = memResult[i].age;
    mem_citizenship_number.textContent = memResult[i].citizenship_number;



    edit_mem.href = "edit_mem.html?mem_id=" + memResult[i].id + "&&house=" + memResult[i].house_number;
    delete_mem.id = "delete";
    edit_mem.className = "btn btn-success";
    delete_mem.className = "btn btn-danger";
    edit_mem.innerText = "Edit";
    delete_mem.innerText = "Delete";
    delete_mem.setAttribute("data-id", memResult[i].id)
    edit_delete_element.appendChild(edit_mem);
    edit_delete_element.appendChild(delete_mem);




    row.appendChild(mem_name);
    row.appendChild(mem_gender);
    row.appendChild(mem_age);
    row.appendChild(mem_citizenship_number);
    row.appendChild(edit_delete_element);


    table_body.appendChild(row);



  }
}



var memIdToSearch = house;
var memResult = getMemDataById(memIdToSearch);
if (memResult) {
  fillMem();
} else {
  console.log("Data not found for ID:", memIdToSearch);
}



var deleteButtons = document.querySelectorAll("#delete");
deleteButtons.forEach(function (deleteButtons) {
  deleteButtons.addEventListener("click", function deleteFam(event) {
    event.preventDefault();

    var mem_del_id = parseInt(deleteButtons.getAttribute("data-id"));
    var memIndex = allMemData.findIndex(function (item) {
      return item.house_number.toString() === house.toString() && item.id.toString() == mem_del_id.toString();
    });

    if (memIndex !== -1) {
      allMemData.splice(memIndex, 1);
      console.log(`Data with ID ${mem_del_id} deleted successfully.`);
      localStorage.setItem("memData", JSON.stringify(allMemData));
    } else {
      console.log(`Data with ID ${mem_del_id} not found.`);
    }

    window.location.href = "family_report.html?house=" + house + "&&status=mem_deleted";

  });

});





