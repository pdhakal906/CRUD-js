var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");




// Retrieve all stored form data from local storage
var headData = localStorage.getItem("headData");
var allHeadData = JSON.parse(headData) || [];

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



var memData = localStorage.getItem("memData");
var allMemData = JSON.parse(memData) || [];
var matching_data = [];
// Function to find data by ID
function getMemDataById(id) {

  for (var i = 0; i < allMemData.length; i++) {
    if (allMemData[i].house_number === id) {
      matching_data.push(allMemData[i]);

    }
  }
  return matching_data;; // Return null if data with the specified ID is not found
}

// function fillMem() {
//   var memResult = matching_data;
//   for (var i = 0; i < memResult.length; i++) {
//     var mem_name = document.getElementById("mem-name");
//     var mem_gender = document.getElementById("mem-gender");
//     var mem_age = document.getElementById("mem-age");
//     var mem_citizenship_number = document.getElementById("mem-citizenship-number");




//     mem_name.textContent = memResult[i].name;
//     mem_gender.textContent = memResult[i].gender;
//     mem_age.textContent = memResult[i].age;
//     mem_citizenship_number.textContent = memResult[i].citizenship_number;
//   }



// }

function fillMem() {
  var table_body = document.getElementById("table-body");
  table_body.innerHTML = ''; // Clear previous data

  for (var i = 0; i < memResult.length; i++) {
    var row = document.createElement("tr");

    var mem_name = document.createElement("td");
    var mem_gender = document.createElement("td");
    var mem_age = document.createElement("td");
    var mem_citizenship_number = document.createElement("td");
    var delete_mem = document.createElement("a")

    mem_name.textContent = memResult[i].name;
    mem_gender.textContent = memResult[i].gender;
    mem_age.textContent = memResult[i].age;
    mem_citizenship_number.textContent = memResult[i].citizenship_number;

    row.appendChild(mem_name);
    row.appendChild(mem_gender);
    row.appendChild(mem_age);
    row.appendChild(mem_citizenship_number);

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

