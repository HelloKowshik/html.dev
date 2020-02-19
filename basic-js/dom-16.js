let fullName = document.getElementById('name');
fullName.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // console.log(event.target.value);
        document.getElementById('display').innerHTML = event.target.value;
        event.target.value = '';
    }
});
 
let skills = document.getElementsByName('skills');
let result = document.getElementById('result');
let checkedSkills = [];
[...skills].forEach(skill => { 
    skill.addEventListener('change', function (event) { 
        if (event.target.checked) {
            checkedSkills.push(event.target.value);
            // console.log(checkedSkills)
            output(result, checkedSkills);
        } else {
            let ind = checkedSkills.indexOf(event.target.value);
            checkedSkills.splice(ind, 1);
            // console.log(checkedSkills);
            output(result, checkedSkills);
        }
    });
});

function output(parent, skills) {
    let result = '';
    skills.forEach((skill, index) => {
        result+=` (${index+1}) ${skill} `
    });
    parent.innerHTML = result;
}
let list = document.getElementById('list');
list.addEventListener('dblclick', function (event) { 
    if (this.contains(event.target)) {
        let innerText = event.target.innerText;
        event.target.innerHTML = '';
        let inputBox = createInputBox(innerText);
        event.target.appendChild(inputBox);
        inputBox.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                event.target.innerHTML = e.target.value;
           } 
        });
    }
});

function createInputBox(val) {
    let inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'form-control';
    inp.value = val;
    return inp;
}