var storedData = localStorage.getItem("headData");
var allFormData = JSON.parse(storedData) || [];

// Function to get all IDs, names, addresses, and phone numbers
function getAllResult() {
  var ids = [];
  var names = [];
  var addresses = [];


  for (var i = 0; i < allFormData.length; i++) {
    var formData = allFormData[i];
    ids.push(formData.id);
    names.push(formData.name);
    addresses.push(formData.address);

  }

  return {
    ids: ids,
    names: names,
    addresses: addresses

  };
}

// Example usage
var result = getAllResult();
var ids = result.ids;
var names = result.names;
var addresses = result.addresses;
var table = document.getElementById("data-table");

for (var i = 0; i < ids.length; i++) {
  var html = "<tr><td id='house-number'>" + ids[i] + "</td><td id = 'name'><a href='family_report.html?house=" + ids[i] + "'>" + names[i] + "</a></td><td id='address'>" + addresses[i] + "</td><td><a class = 'btn btn-danger' href = 'report_list.html' id = 'delete'>X</a></td></tr>";

  table.innerHTML += html;
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


