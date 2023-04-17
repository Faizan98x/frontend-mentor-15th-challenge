let error = document.getElementById("error");
let alertmsg = document.getElementById("email");

function Check(inputtext) {
  var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputtext.value.match(format)) {
    document.getEmail.email.focus();
    error.classList.add("hidden");
  } else {
    document.getEmail.email.focus();
    document.getEmail.email.style.border = "1px solid hsl(354, 100%, 66%)";
    error.classList.remove("hidden");
  }
}
