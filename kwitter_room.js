user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

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
  

  

 
  function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row ;

    //End code
    });});}
getData();

function redirectToRoomName(name) {

console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

