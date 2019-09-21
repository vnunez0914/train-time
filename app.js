var firebaseConfig = {
  apiKey: "AIzaSyD3AYqlmGWA8MxG0Rw8kFqgu5z4IgvsM5Y",
  authDomain: "train-time-136d1.firebaseapp.com",
  databaseURL: "https://train-time-136d1.firebaseio.com",
  projectId: "train-time-136d1",
  storageBucket: "",
  messagingSenderId: "893632141965",
  appId: "1:893632141965:web:27ff1a74b9f8adcfcae0c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
  console.log("clicked")
   event.preventDefault();


})
