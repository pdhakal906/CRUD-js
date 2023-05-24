var url = window.location.href;
var params = new URL(url).searchParams;
var mem_id = params.get("mem_id");
var house = params.get("house");

var memData = localStorage.getItem("memData");
var allMemData = JSON.parse(memData) || [];

var memResult = getMemDataById(house, mem_id);
if (memResult) {
  fillMem();
} else {
  console.log("Data not found for ID:", mem_id, house);
}

function getMemDataById(house, mem_id) {
  for (var i = 0; i < allMemData.length; i++) {
    if (allMemData[i].house_number.toString() === house && allMemData[i].id.toString() === mem_id) {
      return allMemData[i];
    }
  }
  return null; // Return null if data with the specified ID is not found
}

function fillMem() {
  var mem_name = document.getElementById("name");
  var mem_gender = document.getElementById("gender");
  var mem_age = document.getElementById("age");
  var mem_citizenship_number = document.getElementById("citizenship-number");

  mem_name.value = memResult.name;
  mem_gender.value = memResult.gender;
  mem_gender.selected = memResult.gender;
  mem_age.value = memResult.age;
  mem_gender.value = memResult.gender;
  mem_citizenship_number.value = memResult.citizenship_number;
}

function updateData(house_number, id, name, gender, age, citizenship_number) {
  for (var i = 0; i < allMemData.length; i++) {
    if (allMemData[i].house_number.toString() === house_number && allMemData[i].id.toString() === id) {
      allMemData[i].name = name;
      allMemData[i].gender = gender;
      allMemData[i].age = age;
      allMemData[i].citizenship_number = citizenship_number;
      break;
    }
  }

  localStorage.setItem("memData", JSON.stringify(allMemData));
  alert("Data saved");
}

document.getElementById("submit").addEventListener("click", function editMem(event) {
  event.preventDefault();

  var house_number = house;
  var id = mem_id;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var citizenship_number = document.getElementById("citizenship-number").value;

  updateData(house_number, id, name, gender, age, citizenship_number);
});
