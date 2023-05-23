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
  // var house_number = document.getElementById("house-number");
  // var address = document.getElementById("address");
  // var mobile_number = document.getElementById("mobile-number");
  // var name = document.getElementById("name");
  // var gender = document.getElementById("gender");
  // var age = document.getElementById("age");
  // var citizenship_number = document.getElementById("citizenship-number");

  var head_table = document.getElementById("head-table");
  html = "<tr><td>" + headResult.name + "</td><td>" + headResult.gender + "</td><td>" + headResult.age + "</td><td>" + headResult.citizenship_number + "</td><td><a  id = 'delete' class = 'btn btn-danger' href = 'family_report.html?house=" + house + " '>Delete</a></td><td><a href = '' class='btn btn-success' id='edit'>Edit</a></td></tr>";


  head_table.innerHTML += html;


  // house_number.textContent = headResult.id;
  // address.textContent = headResult.address;
  // mobile_number.textContent = headResult.mobile_number;
  // name.textContent = headResult.name;
  // gender.textContent = headResult.gender;
  // age.textContent = headResult.age;
  // citizenship_number.textContent = headResult.citizenship_number;



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

function getAllMembers() {
  var mem_names = [];
  var mem_ages = [];
  var mem_genders = [];
  var mem_citizenship_numbers = [];


  for (var i = 0; i < allMemData.length; i++) {
    var mem_data = allMemData[i];
    mem_names.push(mem_data.name);
    mem_ages.push(mem_data.age);
    mem_genders.push(mem_data.gender);
    mem_citizenship_numbers.push(mem_data.citizenship_number);

  }

  return {
    mem_names: mem_names,
    mem_ages: mem_ages,
    mem_genders: mem_genders,
    mem_citizenship_numbers: mem_citizenship_numbers

  };
}

// Example usage
var members = getAllMembers();
var mem_names = members.mem_names;
var mem_genders = members.mem_genders;
var mem_ages = members.mem_ages;
var mem_citizenship_numbers = members.mem_citizenship_numbers;
var mem_table = document.getElementById("member-table");

for (var i = 0; i < mem_names.length; i++) {
  var html = "<tr><td>" + mem_names[i] + "</td>" + "<td >" + mem_genders[i] + "</td><td>" + mem_ages[i] + "<td>" + mem_citizenship_numbers[i] + "<td><a  id = 'delete' class = 'btn btn-danger' href = 'family_report.html?house=" + house + " '>Delete</a></td><td><a href = '' class='btn btn-success' id='edit'>Edit</a></td></tr>";

  mem_table.innerHTML += html;
}

var delete_button = document.getElementById("delete");
function deleteFam() {
  var delId = document.getElementById("house-number").innerText;
  var index = allFormData.findIndex(function (item) {
    return item.id === delId;
  });

  if (index !== -1) {
    allFormData.splice(index, 1);
    console.log(`Data with ID ${delId} deleted successfully.`);
    localStorage.setItem("formData", JSON.stringify(allFormData));
  }
  else {
    console.log(`Data with ID ${delId} not found.`)
  }

}

delete_button.addEventListener("click", deleteFam);


