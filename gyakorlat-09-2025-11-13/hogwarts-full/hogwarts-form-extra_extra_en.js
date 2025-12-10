function calculateYearsSince(dateString) {
    const date = new Date(dateString);
    const diff = Date.now() - date.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
}

console.log('Age:' + calculateYearsSince('1961-07-04'));

const form = document.getElementById('hogwarts-form');

form.dob.addEventListener('input', function (event) {
    console.log('Date of birth entered:' + form.dob.value);
    const ageInYears = calculateYearsSince(form.dob.value);
    console.log('Age:' + ageInYears);
    if (ageInYears >= 11) {
        form.dob.setCustomValidity('');
    } else {
        form.dob.setCustomValidity('You are too young for Hogwarts, the lower age limit is 11 years');
    }
    form.dob.reportValidity();
});

form.house.addEventListener('change', function (event) {
    const houseColor = form.house.options[form.house.selectedIndex].dataset.colorPrimary;
    console.log(`House ${form.house.value} is selected whose color is ${houseColor}`);
    document.body.style.backgroundColor = houseColor;
});

function validatePasswords() {
    if (form.password.value === form.password2.value) {
        form.password2.setCustomValidity('');
    } else {
        form.password2.setCustomValidity('The passwords do not match!');
    }
}

form.password.addEventListener('input', validatePasswords);
form.password2.addEventListener('input', validatePasswords);

form.addEventListener('submit', function (event) {
    console.log('Submitting form');
    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
    }
});