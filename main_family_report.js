var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");




// Retrieve all stored form data from local storage
var storedData = localStorage.getItem("headData");
var allFormData = JSON.parse(storedData) || [];

// Function to find data by ID
function getDataById(id) {
  for (var i = 0; i < allFormData.length; i++) {
    if (allFormData[i].id === id) {
      return allFormData[i];
    }
  }
  return null; // Return null if data with the specified ID is not found
}

function fillData() {
  var house_number = document.getElementById("house-number");
  var house_number_1 = document.getElementById("house-number-1");
  var address = document.getElementById("address");
  var mobile_number = document.getElementById("mobile-number");
  var name = document.getElementById("name");
  var gender = document.getElementById("gender");
  var age = document.getElementById("age");
  var citizenship_number = document.getElementById("citizenship-number");



  house_number.textContent = result.id;
  house_number_1.textContent = result.id;
  address.textContent = result.address;
  mobile_number.textContent = result.mobile_number;
  name.textContent = result.name;
  gender.textContent = result.gender;
  age.textContent = result.age;
  citizenship_number.textContent = result.citizenship_number;


}

// Example usage
var idToSearch = house;
var result = getDataById(idToSearch);
if (result) {
  fillData();
} else {
  console.log("Data not found for ID:", idToSearch);
}

