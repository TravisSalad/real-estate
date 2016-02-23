jQuery.validator.addMethod("lettersonly", function(value, element){
  return this.optional(element) || /^[a-z\s]+$/i.test(value);
});
$(document).on("ready", function(){
  $("#contact-form").validate({
    errorClass: "my-error-class",
    validClass: "my-valid-class",
    submitHandler: function(form){
      form.submit();
    },
    rules: {
      "your-name": {
        required: true,
        maxLength: 150,
        lettersonly: true,
      },
      "your-email": {
        required: true,
        email: true,
      },
      "your-message" {
        required: false,
        maxLength: 500,
      },
    },
    messages: {
      "your-name": "Please enter your first and last name.",
      "your-email": "Please enter a valid email address",
      "your-message": "500 character max",
    },
  });
});
