document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission to avoid page reload

  // Retrieve form values
  var id = document.getElementById("house-number").value;
  var address = document.getElementById("address").value;
  var mobile_number = document.getElementById("mobile-number").value;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var citizenship_number = document.getElementById("citizenship-number").value;
  var occupation = document.getElementById("occupation").value;


  // Create an object or data structure to store the values
  var formData = {
    id: id,
    address: address,
    mobile_number: mobile_number,
    name: name,
    gender: gender,
    age: age,
    citizenship_number: citizenship_number,
    occupation: occupation

  };

  // Save the form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Optional: Provide feedback to the user
  alert("Form data saved!");

  // Clear the form inputs if desired
  document.getElementById("myForm").reset();

  var storedData = localStorage.getItem("formData");
  var formData = JSON.parse(storedData);



});


