$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  alert("Form is being submitted");

  e.preventDefault();
}
$().ready(function () {
  $("#myForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
      },
      email: {
        requires: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirm_password: {
        required: true,
        minlength: 8,
        equalto: "#password",
      },
    },
    messages: {
      name: {
        require: "Enter a name",
        minlength: "Atleast 5 characters",
      },
      email: {
        required: "enter email",
      },
      password: {
        required: "enter a password",
        minlength: "password must be of 8 letters",
      },
      confirm_password: {
        required: "enter a password",
        minlength: "password must be of 8 letters",
        equalto: "passwords do not match",
      },
    },
  });
});
