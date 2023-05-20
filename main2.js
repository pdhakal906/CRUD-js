var url = window.location.href;
var params = new URL(url).searchParams;
var house = params.get("house");

console.log(house);
function fetchDataByIdFromLocalStorage(house) {
  var storedData = Object.values(localStorage)
    .filter(function (item) {
      return item.startsWith("data_");
    })
    .map(function (item) {
      return JSON.parse(item);
    });

  var matchedData = storedData.filter(function (data) {
    return data.id === house;
  });

  if (matchedData.length > 0) {
    console.log(matchedData);
    // Process or use the fetched data as needed
  } else {
    console.log("No data found for the given ID.");
  }
}

// Specify the desired ID here
fetchDataByIdFromLocalStorage(house);