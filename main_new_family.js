document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission to avoid page reload


  var id = document.getElementById("house-number").value;
  var address = document.getElementById("address").value;
  var mobile_number = document.getElementById("mobile-number").value;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var citizenship_number = document.getElementById("citizenship-number").value;




  var formData = {
    id: id,
    address: address,
    mobile_number: mobile_number,
    name: name,
    gender: gender,
    age: age,
    citizenship_number: citizenship_number
  };




  var storedData = localStorage.getItem("headData");
  var allFormData = storedData ? JSON.parse(storedData) : [];

  if (!Array.isArray(allFormData)) {
    allFormData = [];
  }

  allFormData.push(formData);

  localStorage.setItem("headData", JSON.stringify(allFormData));

  alert("New Family Added");

  document.getElementById("myForm").reset();
  window.location.href = "add_mem.html?house=" + id;
});

// var storedData = localStorage.getItem("formData");
// var allFormData = JSON.parse(storedData);

// console.log(allFormData);


