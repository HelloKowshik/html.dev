// JSON fetch-webdeveloper Bd

let btn = document.querySelector('button');
let output = document.querySelector('.data');
// btn.addEventListener('click', showData);
// async function showData() {
//     await fetch('./sample.json')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//     })
// }

btn.addEventListener('click', showList);
async function showList() {
    let showHTML = '';
   await fetch('./sample.json')
        .then(response => response.json())
       .then(data => {
           data.forEach((element, index) => {
               let { winner, runner_up, year, host, teams } = element;
                showHTML += `
                <h3>U-19 Champion List- ${index + 1}</h3>
                <hr/>
                    <ul>
                        <li>${winner}</li>
                        <li>${runner_up}</li>
                        <li>${year}</li>
                        <li>${host}</li>
                        <li>${teams}</li>
                    </ul>
                    <hr/>
                `;        
            });
           output.innerHTML = showHTML;
    })
}