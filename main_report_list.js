var storedData = localStorage.getItem("formData");
var allFormData = JSON.parse(storedData) || [];

// Function to get all IDs, names, addresses, and phone numbers
function getAllResult() {
  var ids = [];
  var names = [];
  var addresses = [];
  var phoneNumbers = [];

  for (var i = 0; i < allFormData.length; i++) {
    var formData = allFormData[i];
    ids.push(formData.id);
    names.push(formData.name);
    addresses.push(formData.address);
    phoneNumbers.push(formData.mobile_number);
  }

  return {
    ids: ids,
    names: names,
    addresses: addresses,
    phoneNumbers: phoneNumbers
  };
}

// Example usage
var result = getAllResult();
var ids = result.ids;
var names = result.names;
var addresses = result.names;
var phone = result.phoneNumbers
var table = document.getElementById("data-table");

for (var i = 0; i < ids.length; i++) {
  var html = "<tr><td id='house-number'>" + ids[i] + "</td><td id = 'name'><a href='family_report.html?house=" + ids[i] + "'>" + names[i] + "</a></td><td id='address'>" + addresses[i] + "</td><td><button class = 'btn btn-danger'>Delete</button></td></tr>";

  table.innerHTML += html;
}



// console.log("All IDs:", result.ids);
// console.log("All Names:", result.names);
// console.log("All Addresses:", result.addresses);
// console.log("All Phone Numbers:", result.phoneNumbers);

