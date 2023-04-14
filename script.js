const handleGetFormData = () => ({
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  city: document.getElementById("city").value,
  zipCode: document.getElementById("zip-code").value,
  status: document.getElementById("status").checked,
});

function isNumber(num) {
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

function checkboxIsChecked() {
  if (document.getElementById("status").checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData() {
  if (handleGetFormData() != null && isNumber(handleGetFormData().zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

function submit(event) {
  event.preventDefault();
  if (validateFormData() === false) {
    console.log((document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi"));
  } else {
    console.log((document.getElementById("warning").innerHTML = ""));
  }
}

document.getElementById("submit-form").addEventListener("click", submit);
