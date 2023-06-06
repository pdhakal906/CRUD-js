function generateData() {
  var storedHeadData = localStorage.getItem("headData");
  var allHeadData = storedHeadData ? JSON.parse(storedHeadData) : [];

  var storedMemData = localStorage.getItem("memData");
  var allMemData = storedMemData ? JSON.parse(storedMemData) : [];


  var search = document.getElementById("search");
  var table = document.getElementById("table");
  var search_display = document.getElementById("search-display");
  var no_res_div = document.getElementById("no-res-div");

  search.addEventListener("input", function (event) {

    search_display.innerHTML = "";

    var typedValue = event.target.value.toLowerCase();

    var filteredHeadData = [];
    var filteredMemData = [];

    if (typedValue.length > 0) {
      var heading = document.createElement("h3");
      heading.innerHTML = "Search Result(s) For:";
      search_display.appendChild(heading);

      var paragraph = document.createElement("p");
      paragraph.innerHTML = typedValue;
      search_display.appendChild(paragraph);

      filteredHeadData = allHeadData.filter(function (data) {
        return data.name.toLowerCase().includes(typedValue);
      });

      filteredMemData = allMemData.filter(function (data) {
        return data.name.toLowerCase().includes(typedValue);
      });
    }

    if (filteredHeadData.length === 0 && filteredMemData.length === 0) {

      no_res_div.innerHTML = "<p>No result found</p>";
    }

    if (typedValue.length === 0) {
      no_res_div.innerHTML = "";
    }

    populateTable(filteredHeadData, filteredMemData);

  });

  function populateTable(headData, memData) {
    table.innerHTML = "";



    if (headData.length > 0) {
      var trHeader = document.createElement("tr");
      var thName = document.createElement("th");
      no_res_div.innerHTML = "";
      thName.textContent = "Name";
      trHeader.appendChild(thName);
      table.appendChild(trHeader);

      headData.forEach(function (item) {
        var tr = document.createElement("tr");
        var aName = document.createElement("a");
        // console.log(item.id);
        aName.textContent = item.name;
        aName.href = "family_report.html?house=" + item.id;
        tr.appendChild(aName);
        table.appendChild(tr);
      });
    }

    if (memData.length > 0) {
      if (!trHeader) {
        var trHeader = document.createElement("tr");
        var thName = document.createElement("th");
        no_res_div.innerHTML = "";
        thName.textContent = "Name";
        trHeader.appendChild(thName);
        table.appendChild(trHeader);
      }

      memData.forEach(function (item) {
        var tr = document.createElement("tr");
        var aName = document.createElement("a");
        // console.log(item.id);
        aName.textContent = item.name;
        aName.href = "family_report.html?house=" + item.house_number;
        tr.appendChild(aName);
        table.appendChild(tr);
      });
    }
  }
}

generateData();
