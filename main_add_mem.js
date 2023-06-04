var url = window.location.href;
var params = new URL(url).searchParams;

var house = params.get("house");
var status = params.get("status");
// iterator for auto incrementing member id
var itr = 1;



var alert_message = document.getElementById("alert-box");

var memData = localStorage.getItem("memData");
var allMemData = JSON.parse(memData) || [];

switch (status) {
  case "head_added":
    var html = "<strong> Family Head</strong> Added Successfully.</div>";
    break;
  case "mem_added":
    var html = "<strong> Family Member</strong> Added Successfully.</div>";
    break;
  default:
    var html = "";
}


alert_message.className = "alert alert-info";
alert_message.role = "alert";
alert_message.innerHTML += html;
setTimeout(() => alert_message.remove(), 3000);

// same as: 
// setTimeout(function () {
//   alert_message.remove();
// }, 3000)

var form = document.getElementById("myForm");
var cancel = document.createElement("a");
var done = document.createElement("a");
cancel.href = "new_family.html";
done.href = "family_report.html?house=" + house + "&&status=fam_added";
done.id = "done";
cancel.className = "btn btn-danger";
done.className = "btn btn-success";
cancel.innerText = "Cancel";
done.innerText = "Done";


form.appendChild(cancel);
form.appendChild(done);


// this should be outside the function
var matching_data = [];
// Function to find member data by ID
function getMemDataById(id) {

  for (var i = 0; i < allMemData.length; i++) {
    if (allMemData[i].house_number.toString() === id.toString()) {
      matching_data.push(allMemData[i]);


    }
  }
  return matching_data;;
}

var memIdToSearch = house;
var memResult = getMemDataById(memIdToSearch);
// console.log(memResult.length);


function generateId() {
  if (allMemData.length != 0) {
    for (i = 0; i < allMemData.length; i++) {
      if (allMemData[i].house_number.toString() === house.toString()) {
        if (allMemData[i].id.toString() != itr.toString()) {
          itr++;
          break;
        } else {
          itr++;
        }
      }
    }
    return itr;
  } else {
    itr = 1;
    return itr;
  }
}
var itr = generateId();

document.getElementById("submit").addEventListener("click", function (event) {
  // Prevent form submission to avoid page reload
  event.preventDefault();

  var house_number = house;
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var citizenship_number = document.getElementById("citizenship-number").value;


  if (house_number == "" || name == "" || gender == "" || age == "" || citizenship_number == "") {
    alert("Please fill out all required fields");
    return;
  }


  var formData = {
    house_number: house_number,
    id: itr,
    name: name,
    gender: gender,
    age: age,
    citizenship_number: citizenship_number


  };




  var storedData = localStorage.getItem("memData");
  var allFormData = storedData ? JSON.parse(storedData) : [];

  if (!Array.isArray(allFormData)) {
    allFormData = [];
  }

  allFormData.push(formData);

  localStorage.setItem("memData", JSON.stringify(allFormData));



  document.getElementById("myForm").reset();


  window.location.href = "add_mem.html?house=" + house + "&&status=mem_added";











});











