// https://restcountries.com/v3.1/all

var xmlhttp = new XMLHttpRequest();
var url = "https://restcountries.com/v3.1/all";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var arr = JSON.parse(this.responseText);
    filterCountry(arr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function filterCountry(arr) {
  arr.forEach((element, index) => {
    console.log(element.name.common, element.flag);
  });
}
