let form = document.querySelector(".feedback-form");

form.addEventListener("input", (e) => {
  let oldObject = localStorage.getItem("feedback-form-state");
  let email = oldObject ? JSON.parse(oldObject).email : "";
  let message = oldObject ? JSON.parse(oldObject).message : "";
  if (e.target.name === "email") {
    email = e.target.value;
  } else {
    message = e.target.value;
  }

  const object = {
    "email" : email,
    "message" : message
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(object));
})
