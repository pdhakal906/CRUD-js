// function display() {
//   var storedHeadData = localStorage.getItem("headData");
//   var allHeadData = storedHeadData ? JSON.parse(storedHeadData) : [];
//   var storedMemData = localStorage.getItem("memData");
//   var allMemData = storedMemData ? JSON.parse(storedMemData) : [];

//   var search = document.getElementById("search");
//   var search_result = document.getElementById("search-display");
//   var table_area = document.getElementById("table-area");
//   search.addEventListener("input", function (event) {
//     var typedValue = event.target.value;

//     search_result.innerHTML = "";

//     if (typedValue.length > 0) {
//       var heading = document.createElement("h3");
//       heading.innerHTML = "Search Result(s) For: ";
//       search_result.appendChild(heading);

//       var paragraph = document.createElement("p");
//       paragraph.innerHTML = typedValue;
//       search_result.appendChild(paragraph);

//       table_area.innerHTML = "";

//       for (i = 0; i < allHeadData.length; i++) {
//         if (allHeadData[i].name.localeCompare(typedValue) === 1) {
//           // console.log(allHeadData[i].id);
//           // console.log(allHeadData[i].address);
//           table = "<table class='table'><thead><tr><th>House Number</th><th>Name</th><th>Address</th></thead><tbody><tr><td id='house-number'>" + allHeadData[i].id + "</td><td id='name'><a href='family_report.html?house=" + allHeadData[i].id + "'>" + allHeadData[i].name + "</a></td><td id='address'>" + allHeadData[i].address + "</tbody>";
//           table_area.innerHTML += table;
//         } else if (allMemData[i].name.localeCompare(typedValue) === 1) {
//           var house = allHeadData[i].house_number;
//           var address = allHeadData[i].address
//           table = "<table class='table'><thead><tr><th>House Number</th><th>Name</th><th>Address</th></thead><tbody><tr><td id='house-number'>" + allMemData[i].house_number + "</td><td id='name'><a href='family_report.html?house=" + house + "'>" + allMemData[i].name + "</a></td><td id='address'>" + address + "</tbody>";
//           table_area.innerHTML += table;
//         } else {
//           table_area.innerHTML = "";
//         }
//       }
//     }
//   });
// }

// display();


// var nameList = ["pratik", "prateek", "pxczn", "ram", "boy", "bat"];
// var naam = "pratik dhakal";
// var query = "dhakal";
// console.log(naam.includes(query));

// function show() {
//   str = "Pratik"
//   return abc;
// }
// console.log(show());
// console.log(1);

// var items = ["pratik", "pallav", "pranav", "prabin"];

// document.getElementById('searchInput').addEventListener('input', function () {
//   var searchQuery = this.value.toLowerCase();
//   var items = document.querySelectorAll('#resultsList li');

//   for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     var text = item.textContent.toLowerCase();

//     if (text.includes(searchQuery)) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   }
// });


// var str = "";
// function gen() {
//   str = "pratik";
//   return str;
// }

// gen()
// console.log(str);

// var str = "";
// function gen() {
//   str = "pratik";
//   return str;
// }

// function get() {
//   gen();
//   console.log(str);
// }

// get();

document.querySelector("#search-input").addEventListener("input", filterList);

function filterList() {
  const searchInput = document.querySelector("#search-input");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}