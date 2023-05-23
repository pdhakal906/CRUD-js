var url = window.location.href;
var params = new URL(url).searchParams;
var mem_id = params.get("mem_id");
var house = params.get("house");

var memData = localStorage.getItem("memData");
var allMemData = JSON.parse(memData) || [];
console.log(allMemData.length);

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




var memResult = getMemDataById(house, mem_id);
if (memResult) {
  fillMem();
} else {
  console.log("Data not found for ID:", mem_id, house);
}


document.getElementById("submit").addEventListener("click", function editMem() {
  console.log("submitted");
  event.preventDefault();
});