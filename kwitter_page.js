//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDLfViRq2SM52m2pYTjGHs3SZxjQ28-K74",
    authDomain: "kwitter---2-7a29c.firebaseapp.com",
    databaseURL: "https://kwitter---2-7a29c-default-rtdb.firebaseio.com",
    projectId: "kwitter---2-7a29c",
    storageBucket: "kwitter---2-7a29c.appspot.com",
    messagingSenderId: "208921125758",
    appId: "1:208921125758:web:b4e999ddc35710c266092f",
    measurementId: "G-GN909KN9W3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name, 
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "" ;
}   


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

