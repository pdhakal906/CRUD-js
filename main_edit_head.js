var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");

var headData = localStorage.getItem("headData");
var allHeadData = JSON.parse(headData) || [];

var headResult = getHeadDataById(house);
if (headResult) {
  fillHead();
} else {
  console.log("Data not found for ID:", house);
}

function getHeadDataById(house) {
  for (var i = 0; i < allHeadData.length; i++) {
    if (allHeadData[i].id.toString() === house) {
      return allHeadData[i];
    }
  }
  return null; // Return null if data with the specified ID is not found
}

function fillHead() {
  var head_name = document.getElementById("name");
  var head_gender = document.getElementById("gender");
  var head_age = document.getElementById("age");
  var head_citizenship_number = document.getElementById("citizenship-number");

  head_name.value = headResult.name;
  head_gender.value = headResult.gender;
  head_gender.selected = headResult.gender;
  head_age.value = headResult.age;
  head_gender.value = headResult.gender;
  head_citizenship_number.value = headResult.citizenship_number;
}

function updateData(house_number, name, gender, age, citizenship_number) {
  for (var i = 0; i < allHeadData.length; i++) {
    if (allHeadData[i].id.toString() === house_number) {
      allHeadData[i].name = name;
      allHeadData[i].gender = gender;
      allHeadData[i].age = age;
      allHeadData[i].citizenship_number = citizenship_number;
      break;
    }
  }

  localStorage.setItem("headData", JSON.stringify(allHeadData));
  alert("Data saved");
}

document.getElementById("submit").addEventListener("click", function editMem(event) {
  event.preventDefault();

  var house_number = house;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var citizenship_number = document.getElementById("citizenship-number").value;

  if (name == "" || gender == "" || age == "" || citizenship_number == "") {
    alert("Please fill out all required fields");
    return;
  }

  updateData(house_number, name, gender, age, citizenship_number);
  window.location.href = "report_list.html?status=head_edited";
});
