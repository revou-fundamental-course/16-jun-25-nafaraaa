document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameField = document.getElementById("name");
  const dobField = document.getElementById("dob");
  const genderFields = document.getElementsByName("gender");
  const msgField = document.getElementById("message-box");

  const resultName = document.getElementById("result-name");
  const resultDOB = document.getElementById("result-dob");
  const resultGender = document.getElementById("result-gender");
  const resultMessage = document.getElementById("result-message");
  const timeField = document.getElementById("time");

  const welcome = document.getElementById("welcome-msg");

  nameField.addEventListener("input", () => {
    const name = nameField.value.trim();
    welcome.innerText = name
      ? `Hi ${name}, Welcome To Website`
      : "Hi there, Welcome To Website";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameField.value.trim();
    const dob = dobField.value.trim();
    const msg = msgField.value.trim();
    const gender = [...genderFields].find((g) => g.checked)?.value;

    if (!name || !dob || !gender || !msg) {
      alert("Please fill in all columns before submit the message");
      return;
    }

    resultName.innerText = name;
    resultDOB.innerText = dob;
    resultGender.innerText = gender;
    resultMessage.innerText = msg;
    timeField.innerText = new Date().toLocaleString();
  });
});
