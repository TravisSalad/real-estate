$(document).on('ready', function(){

function zillowApi(state){  //create a function that takes on state abbreviation and retrieves zillow mortgage data
  console.log('meoq');
  $.ajax({  //make ajax request to zillow
    type: 'GET',
    url: 'http://www.zillow.com/webservice/GetRateSummary.htm?zws-id=X1-ZWz1f6abi6ygaz_4wzn5&output=json',
    data: {state: state},
    dataType: 'jsonp',
    success: function(data) {
      console.log(data);  //show rates for 15 + 30 yr mortgage for today and last week
      $("#show-rate").text("Today fifteen year: " + data.response.today.fifteenYearFixed);
      $("#show-rate-2").text("Today thirty year: " + data.response.today.thirtyYearFixed);
      $("#show-rate-3").text("Last week fifteen year: " + data.response.lastWeek.fifteenYearFixed);
      $("#show-rate-4").text("Last week thirty year: " + data.response.lastWeek.thirtyYearFixed);
    },
    error: function(data, blah, error) {
      console.log('error: ' + error);
    }
  });
}


$("#search").on('click', function() {   //when search button is clicked pass #select-state value to zillowApi function
  zillowApi($("#select-state").val())
  event.preventDefault();
});

$("#contact-form").validate({   //validate contact-form
  submitHandler: function(form){
    form.submit();
  },
  messages: {   //display error messages
    "your-name": "Please enter your first and last name.",
    "your-email": "Please enter a valid email address (example@example.com)",
    "your-message": "500 character max.",
  }
});

//WELCOME MESSAGE ON CLICK IN MODAL

$('#login-modal').appendTo("body");
$('#register-modal').appendTo("body");

$("#welcome").hide(); //hides li #welcome which will show once injected with username data

function welcomeMessage(){
  var userinfo = $("#username").val();   //retrieves value of username input
  var greeting = ("Welcome, " + userinfo);  //welcome message to be displayed once "logged in"
  console.log(userinfo);
  $("#welcome").append(greeting);   //append greeting to welcome li and then show that element and hide the sign up and register buttons
  $("#welcome").show();
  $(".sign-up-list").hide();
  // console.log(greeting);
  sessionStorage.setItem("greeting", greeting); //save greeting in session storage
};

console.log(sessionStorage.getItem("greeting"));

$("#login-button").on("click", function(){  //when login button is click, run welcome message
  welcomeMessage();
});


//create an onload function that checks if a username is present and if so displays
//welcome message, if no username is present, displays the sign in/register buttons
window.onload = function(){
  var name = sessionStorage.getItem("greeting");
  if (name.length != 0){
    $("#welcome").append(name);
    $("#welcome").show();
    $(".sign-up-list").hide();
  }else{
    $(".sign-up-list").show();
    $("#welcome").hide();
  }
};

});
