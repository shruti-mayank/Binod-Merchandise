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

//referencing collections
let contactInfo = firebase.database().ref("info");

//calling submit button
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    //taking input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    
    saveContactInfo(name, email,message);
    
    alert("Message sent. Thank you!");
      $('.contact-form input[type="text"]').val('');
      $('.contact-form textarea').val('');
}

//Saving info to firebase
function saveContactInfo(name, email, message){
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}