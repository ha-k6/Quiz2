$(function () {
  $("#myForm").submit(handleFormSubmit);
});
function handleFormSubmit(e) {
  alert("Form is being submitted");
  var name_script = $("#name").val();
  var password_script = $("#password").val();
  var c_password_script = $("#confirm_password").val();
  if (name_script.length < 5) {
    $("#name").after("<p>Enter name with more than 5 letters</p>");
    e.preventDefault();
  }
  if (password_script.length < 8) {
    $("#password").after("<p>Enter password more than 8 letter</p>");
    e.preventDefault();
  }
  if (password_script != c_password_script) {
    $("#confirm_password").after("<p>Enter same password</p>");
    e.preventDefault();
  }
}
