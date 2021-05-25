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

//login form
document.querySelector(".login-form").addEventListener("submit", loginUser);

function loginUser(e){
    e.preventDefault();

    //taking input values
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    SelectAllData(email,password);
}

//selecting data form database users table and checking
function SelectAllData(email,password){
    firebase.database().ref('users').once('value',function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                useremail = CurrentRecord.val().email;
                userpass = CurrentRecord.val().password;
            }
        );
        if(useremail==email && userpass==password){
            // saveLoginInfo(email, password);
            window.location="index.html";
            $('.login-form input[type="text"]').val('');
            $('.login-form textarea').val('');
        }
        else{
            alert("Incorrect Login Credentials! Please try again.");
            $('.login-form input[type="text"]').val('');
            $('.login-form textarea').val('');
        }
    });
}