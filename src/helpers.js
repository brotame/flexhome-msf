export function checkRequiredInputs() {
  const msf = document.getElementById('msf');
  let filledInputs = 0;

  const inputs = Array.from(msf.querySelectorAll('input, select, textarea'));
  const requiredInputs = inputs.filter((input) => input.required);
  const requiredCheckboxes = requiredInputs.filter(
    (input) => input.type === 'checkbox'
  );
  const requiredRadios = requiredInputs.filter(
    (input) => input.type === 'radio'
  );

  requiredInputs.forEach((input) => {
    if (!input.value) {
      return;
    }

    if (input.type === 'email') {
      const correctEmail = validateEmail(input.value);
      if (!correctEmail) return;

      filledInputs++;
      return;
    }

    filledInputs++;
  });

  requiredCheckboxes.forEach((input) => {
    if (!input.checked) return;

    filledInputs++;
  });

  requiredRadios.forEach((input) => {
    const radioGroup = input.getAttribute('name');
    const isChecked = document.querySelector(
      `input[name="${radioGroup}"]:checked`
    );

    if (isChecked) filledInputs++;
  });

  return filledInputs ===
    requiredInputs.length + requiredCheckboxes.length + requiredRadios.length
    ? true
    : false;
}

function validateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
