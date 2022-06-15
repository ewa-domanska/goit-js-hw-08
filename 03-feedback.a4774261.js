var form=document.querySelector(".feedback-form");form.addEventListener("input",(function(e){var a=localStorage.getItem("feedback-form-state"),t=a?JSON.parse(a).email:"",r=a?JSON.parse(a).message:"";"email"===e.target.name?t=e.target.value:r=e.target.value;var m={email:t,message:r};localStorage.setItem("feedback-form-state",JSON.stringify(m))}));
//# sourceMappingURL=03-feedback.a4774261.js.map
