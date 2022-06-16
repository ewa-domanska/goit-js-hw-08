import throttle from "lodash.throttle";

let form = document.querySelector(".feedback-form");
let emailInput = form.querySelector("input");
let messageInput = form.querySelector("textarea");
let button = form.querySelector("button");

let oldObject = localStorage.getItem("feedback-form-state");
let email = oldObject ? JSON.parse(oldObject).email : "";
let message = oldObject ? JSON.parse(oldObject).message : "";

emailInput.value = email
messageInput.value = message

let saveForm = (e) => {
  if (e.target.name === "email") {
    email = e.target.value;
  } else {
    message = e.target.value;
  }

  const object = {
    "email": email,
    "message": message
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(object));
};

form.addEventListener("input", throttle(saveForm, 500));

button.addEventListener("click", () => {
  console.log(localStorage.getItem("feedback-form-state"));
  localStorage.removeItem("feedback-form-state");
  emailInput.value = "";
  messageInput.value = "";
})
