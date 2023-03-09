var count = 0

function upload(){
  
  var name =document.getElementById('name').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var phone = document.getElementById('phone').value

  // function createCookie(name, value, days) {
  //   var expires;
  //   if (days) {
  //     var date = new Date();
  //     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  //     expires = "; expires=" + date.toGMTString();
  //   }
  //   else {
  //     expires = "";
  //   }
  //   document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
  // }

  var user = {
    name: name,
    email: email,
    password: password,
    phone:phone
  };

  var userInfo = JSON.stringify(user);
  count = count+1;
  // createCookie('new',user,2)
  localStorage.setItem(name, userInfo);
  
  name.value =""
  email.value =""
  password.value =""
  phone.value=""
  console.log(count)
}