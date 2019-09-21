
//Firebase key

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
  event.preventDefault();
  // Grabs user input
  var name = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  // Creates local "temporary" object for holding employee data

  var trainInfo = {
    name: name,
    destination: destination,
    time: trainTime,
    frequency: frequency
  };
  database.ref().push(trainInfo)//sends info to database and appends because of .push()

  // console.log(trainInfo.name)
  // console.log(trainInfo.destination)
  // console.log(trainInfo.time)
  // console.log(trainInfo.frequency)
  
  //clears info from form after submitting
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

//firebase adds child grabs value of root from parent or of root
database.ref().on("child_added", function(snapshot){
  console.log("grabbed from DB"+ snapshot.val())
  var sv = snapshot.val()
  var trainName = sv.name;
  var trainDest = sv.destination;
  var firstTrain = sv.time;
  var trainFrequency = sv.frequency;

  //calculate train time arrival and minutes away??

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDest),
    $("<td>").text(firstTrain),
    $("<td>").text(trainFrequency),
  );

  $("#train-table > tbody").append(newRow);

})


