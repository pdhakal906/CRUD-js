var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");

console.log(house);

function fetchDataByIdFromLocalStorage(house) {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var storedData = localStorage.getItem(key);

    try {
      var data = JSON.parse(storedData);

      // Check if the data's ID matches the desired ID
      console.log("Comparing:", data.id, house);
      if (parseInt(data.id) === parseInt(house)) {
        console.log("Match found:", data);
        return data;
        // Process or use the fetched data as needed
      } else {
        console.log("not found");
        return null;
      }
    } catch (error) {
      console.log("Invalid JSON:", storedData);
    }
  }
}
var data = fetchDataByIdFromLocalStorage(house);

function fillData() {
  var house_number = document.getElementById("house-number");
  var house_number_1 = document.getElementById("house-number-1");
  var address = document.getElementById("address");
  var mobile_number = document.getElementById("mobile-number");
  var name = document.getElementById("name");
  var gender = document.getElementById("gender");
  var age = document.getElementById("age");
  var citizenship_number = document.getElementById("citizenship-number");
  var occupation = document.getElementById("occupation");


  house_number.textContent = data.id;
  house_number_1.textContent = data.id;
  address.textContent = data.address;
  mobile_number.textContent = data.mobile_number;
  name.textContent = data.name;
  gender.textContent = data.gender;
  age.textContent = data.age;
  citizenship_number.textContent = data.citizenship_number;
  occupation.textContent = data.occupation;



}

fillData();