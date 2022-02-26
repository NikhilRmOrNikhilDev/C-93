// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyClikOLSESBVQmX2UxGHnlvx7kF002qxrE",
      authDomain: "social-website-66a03.firebaseapp.com",
      projectId: "social-website-66a03",
      storageBucket: "social-website-66a03.appspot.com",
      messagingSenderId: "627240915766",
      appId: "1:627240915766:web:2a580aab3a15225f91d997"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
