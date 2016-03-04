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



});
