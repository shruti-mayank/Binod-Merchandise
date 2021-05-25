// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAD6kvdCQB6eEuhO6aBbK4hT7nD7aZIQDo",
    authDomain: "ecommerce-b9d86.firebaseapp.com",
    projectId: "ecommerce-b9d86",
    storageBucket: "ecommerce-b9d86.appspot.com",
    messagingSenderId: "1091132160686",
    appId: "1:1091132160686:web:2afb698b0677216368cb3f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//signup
let userInfo = firebase.database().ref("users");
document.querySelector(".signup-form").addEventListener("submit", signUpUser);

function signUpUser(e){
  e.preventDefault();

  //taking input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;  
  let password = document.querySelector(".password").value;

  saveSignupInfo(name, email, phone, password);
  window.location="index.html";
    $('.signup-form input[type="text"]').val('');
    $('.signup-form textarea').val('');
}

//saving into firebase
function saveSignupInfo(name, email, phone, password){
  let newUserInfo = userInfo.push();

  newUserInfo.set({
    name: name,
    email: email,
    phone: phone,
    password: password,
  });
}