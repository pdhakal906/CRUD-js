var storedHeadData = localStorage.getItem("headData");
var allHeadData = JSON.parse(storedHeadData) || [];

var storedMemData = localStorage.getItem("memData");
var allMemData = JSON.parse(storedMemData) || [];

// Function to get all IDs, names, addresses, and phone numbers
function getAllResult() {
  var ids = [];
  var names = [];
  var addresses = [];


  for (var i = 0; i < allHeadData.length; i++) {
    var formData = allHeadData[i];
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
  var html = "<tr><td id='house-number'>" + ids[i] + "</td><td id = 'name'><a href='family_report.html?house=" + ids[i] + "'>" + names[i] + "</a></td><td id='address'>" + addresses[i] + "</td><td><button class = 'btn btn-danger' id = 'delete'>Delete</button></td></tr>";

  table.innerHTML += html;
}

var deleteButtons = document.querySelectorAll("#delete");
deleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener("click", function deleteFam(event) {
    event.preventDefault();
    var row = deleteButton.parentNode.parentNode;
    var delId = row.querySelector("#house-number").innerText.toString();

    var headIndex = allHeadData.findIndex(function (item) {
      return item.id.toString() === delId;
    });

    if (headIndex !== -1) {
      allHeadData.splice(headIndex, 1);
      console.log(`Data with ID ${delId} deleted successfully.`);
      localStorage.setItem("headData", JSON.stringify(allHeadData));
    } else {
      console.log(`Data with ID ${delId} not found.`);
    }

    var memIndex = allMemData.findIndex(function (item) {
      return item.house_number.toString() === delId;
    });

    if (memIndex !== -1) {
      allMemData.splice(memIndex, 1);
      console.log(`Member with house number ${delId} deleted.`);
      localStorage.setItem("memData", JSON.stringify(allMemData));
    } else {
      console.log(`Member with house number ${delId} not found.`);
    }

    // window.location.href = "report_list.html";
  });
})