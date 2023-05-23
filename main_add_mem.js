var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");
var id = 1;

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission to avoid page reload


  var house_number = house;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var citizenship_number = document.getElementById("citizenship-number").value;
  var occupation = document.getElementById("occupation").value;



  var formData = {
    house_number: house_number,
    id: id,
    name: name,
    gender: gender,
    age: age,
    citizenship_number: citizenship_number,
    occupation: occupation

  };




  var storedData = localStorage.getItem("memData");
  var allFormData = storedData ? JSON.parse(storedData) : [];

  if (!Array.isArray(allFormData)) {
    allFormData = [];
  }

  allFormData.push(formData);

  localStorage.setItem("memData", JSON.stringify(allFormData));

  alert("New Member Added");

  document.getElementById("myForm").reset();
  id += 1;

});