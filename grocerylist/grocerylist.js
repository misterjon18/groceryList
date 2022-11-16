let groceryList = {
  Meats: ["fish", "chicken", "pork", "beef"],
  "Soaps and Shampoos": ["Head n Shoulders", "Safeguard", "Dove", "Rejoice"],
  Vegetables: ["Carrots", "Petchay", "Talong", "Sitaw"],
  "Canned Goods": ["corned beef", "sardines", "spam", "beef loaf"],
};

let id = 0;
let strHTML = "";

for (let key in groceryList) {
  var s = `<div class="column">
  <h1 class="main-header">${key}</h1>`;

  var cb = "";
  for (let value of groceryList[key]) {
    id++;
    cb += `<input type="checkbox" id="${id}" name="food" checked>
    <label for="${id}"> ${value}</label></br>`;
  }
  s = s + cb + "</div>";
  strHTML += s;
}

document.getElementById("content").innerHTML = strHTML;
