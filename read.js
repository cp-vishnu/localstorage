
const keys = Object.keys(localStorage);
console.log(keys.length)
console.log(keys);


for (let index = 0; index < keys.length; index++) {
  
  

  var userString = localStorage.getItem(keys[index]);

// Convert the string back to an object
var user = JSON.parse(userString);
var new_row = document.createElement("tr")
var td_sn = document.createElement("td")
var td_name = document.createElement("td")
var td_email = document.createElement("td")
var td_phone = document.createElement("td")
var td_password = document.createElement("td")
var td_action = document.createElement("td")
  
new_row.appendChild(td_sn)
new_row.appendChild(td_name)
new_row.appendChild(td_email)
new_row.appendChild(td_phone)
new_row.appendChild(td_password)
new_row.appendChild(td_action)


var new_tableRow = document.getElementById("table")
new_tableRow.appendChild(new_row)
td_sn.innerHTML =index+1
td_name.innerHTML= user.name
td_email.innerHTML =user.email
td_phone.innerHTML =user.phone
td_password.innerHTML =user.password
  td_action.innerHTML = "<a class='btn btn-outline-success' href='update.html?id="+keys[index]+"' >update</a><button class='btn btn-outline-danger' onclick='deleteItem()'>delete</button>"
// console.log(user.name); 
// console.log(user.email); 

}

function updateItem() {

}


