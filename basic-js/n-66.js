// webdeveloper Bd- Remote Api -https://api.chucknorris.io

let btn = document.querySelector('button');
let output = document.querySelector('.data');
btn.addEventListener('click', showJokes);
async function showJokes() {
    let showJoke = '';
    await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            showJoke += `
                <h3>Random Jokes: </h3>
                <hr/>
                <p>${data.value}</p>
            `;
            output.innerHTML = showJoke;
         });
}