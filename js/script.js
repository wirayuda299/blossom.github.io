const nav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

const icon = document.querySelector('.fa-bars').addEventListener('click', () => {
    if(scrollY < 100) {
        nav.classList.add('bg-dark', 'shadow')
    }
})


// toggle class btn up to rotate btn
const arrowBtn = document.querySelector(".fa-chevron-down");
arrowBtn.addEventListener("click", () => arrowBtn.classList.toggle("btn-up"));

function validation() {
  const firstName = document.getElementById("firstName");
  if (!firstName.checkValidity()) {
    document.querySelector(".warn-text").innerHTML =
      firstName.validationMessage;
  } else {
    document.querySelector(".warn-text").innerHTML = "Looks good";
  }
}
function validation1() {
  const lastName = document.getElementById("lastName");
  if (!lastName.checkValidity()) {
    document.querySelector(".last-name").innerHTML = lastName.validationMessage;
  } else {
    document.querySelector(".last-name").innerHTML = "Looks good";
  }
}

function validation3() {
  const numOfChild = document.getElementById("child").value;
  const numOfAdult = document.getElementById("adult").value;
  const txt = document.querySelector(".adultTxt");
  if (numOfAdult === 0) {
    txt.innerText = "min 1 person to stay";
    setTimeout(() => txt.innerText = '', 1000);
  } else {
    txt.innerHTML = "looks good";
    setTimeout(() => txt.innerText = '', 1000);
  }
}
