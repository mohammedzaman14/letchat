
const firebaseConfig = {
      apiKey: "AIzaSyCMm9i0L_DoNOSHylckwbdUDi-gMoyjkHY",
      authDomain: "kwitter-cae4f.firebaseapp.com",
      databaseURL: "https://kwitter-cae4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-cae4f",
      storageBucket: "kwitter-cae4f.appspot.com",
      messagingSenderId: "521403750162",
      appId: "1:521403750162:web:a77bbeaf9642b5e3b5c5cb",
      measurementId: "G-B7B7N11RNW"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
