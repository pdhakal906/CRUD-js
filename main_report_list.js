var url = window.location.href;
var params = new URL(url).searchParams;

var storedHeadData = localStorage.getItem("headData");
var allHeadData = JSON.parse(storedHeadData) || [];

var storedMemData = localStorage.getItem("memData");
var allMemData = JSON.parse(storedMemData) || [];


var status = params.get("status");
var alert_message = document.getElementById("alert-box");


switch (status) {
  case "head_edited":
    var html = "<strong> Family Head Edited </strong> Successfully.</div>";
    break;
  case "head_deleted":
    var html = "<strong> Family Deleted </strong> Successfully.</div>"
    break;
  default:
    var html = "";

}

if (html != "") {
  alert_message.className = "alert alert-info";
  alert_message.role = "alert";
  alert_message.innerHTML += html;
  setTimeout(() => alert_message.remove(), 3000);

}

// same as: 
// setTimeout(function () {
//   alert_message.remove();
// }, 3000)






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
  var html = "<tr><td id='house-number'>" + ids[i] + "</td><td id = 'name'><a href='family_report.html?house=" + ids[i] + "'>" + names[i] + "</a></td><td id='address'>" + addresses[i] + "</td><td><a href='edit_head.html?house=" + ids[i] + "' class = 'btn btn-success'>Edit</a></td><td><button class = 'btn btn-danger' id = 'delete'>Delete</button></td></tr>";

  table.innerHTML += html;
}

var deleteButtons = document.querySelectorAll("#delete");
deleteButtons.forEach(function (deleteButtons) {
  deleteButtons.addEventListener("click", function deleteFam(event) {
    event.preventDefault();
    var row = deleteButtons.parentNode.parentNode;
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

    var memIndexesToDelete = [];
    for (var i = 0; i < allMemData.length; i++) {
      if (allMemData[i].house_number.toString() === delId) {
        memIndexesToDelete.push(i);
      }
    }

    if (memIndexesToDelete.length > 0) {
      memIndexesToDelete.sort(function (a, b) {
        return b - a;
      });

      for (var i = 0; i < memIndexesToDelete.length; i++) {
        var memIndex = memIndexesToDelete[i];
        allMemData.splice(memIndex, 1);
      }

      console.log(`Deleted ${memIndexesToDelete.length} member(s) with house number ${delId}.`);
      localStorage.setItem("memData", JSON.stringify(allMemData));
    } else {
      console.log(`Member(s) with house number ${delId} not found.`);
    }

    window.location.href = "report_list.html?status=head_deleted";

  });

})