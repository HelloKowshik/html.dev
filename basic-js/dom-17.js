let form = document.getElementById('form');
let formData = {};
form.addEventListener('submit', function (e) { 
    e.preventDefault();
    let isValid = false;
    [...this.elements].forEach(el => { 
        // console.log(el.name, el.type, el.value);
        if (el.type !== 'submit') {
            isValid = validator(el);
            if (isValid) {
                formData[el.name] = el.value;
            } else {
                el.classList.add('is-invalid')
                // alert(`${el.name} is Required!`);
            }
        }
    });
    if (isValid) {
        console.log(formData);
        this.reset();
    }
});

function validator(el) {
    if (!el.value) {
        return false;
    }
    return true;
}