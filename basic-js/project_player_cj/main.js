let p1 = document.querySelector('.pl-1');
let p2 = document.querySelector('.pl-2');
let score = document.querySelector('.score');
let inputScore = document.querySelector('.inputScore');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let rs = document.querySelector('.btn-3');
let result = document.querySelector('.result');
let gameOver = false;
let pl1 = 0;
let pl2 = 0;
let winScore = 5;
score.textContent = winScore


inputScore.addEventListener('change',(e)=>{
    console.log(typeof parseInt(inputScore.value),Boolean(parseInt(inputScore.value)));
    if(parseInt(inputScore.value)>0){
    winScore = parseInt(inputScore.value);
    score.textContent = inputScore.value;
    inputScore.value = '';
    resetBtn();
   }else{
       winScore = 5;
       inputScore.value = '';
       resetBtn();
   }
});

btn1.addEventListener('click',()=>{
    if(!gameOver){
        pl1++;
    p1.innerHTML = pl1;
    if(winScore === pl1){
        gameOver = true;
        btn1.disabled = true;
        btn2.disabled = true;
        result.innerHTML = "Player-1 Wins The Game";
        result.classList.add('btn','btn-block','btn-primary');
    }
    }    
});

btn2.addEventListener('click',(e)=>{
    if(!gameOver){
        pl2++;
    p2.innerHTML = pl2;
    if(winScore === pl2){
        gameOver = true;
        btn1.disabled = true;
        btn2.disabled = true;
        result.innerHTML = "Player-2 Wins The Game";
        result.classList.add('btn','btn-block','btn-success');
    }
    }
});


rs.addEventListener('click',()=>{
    resetBtn();
   score.innerHTML = 5;
    winScore = 5;
})
function resetBtn(){
       pl1 = 0;
       pl2 = 0;
       p1.textContent = 0;
       p2.textContent = 0;
       gameOver = false;
       result.innerHTML = '';
       btn1.disabled = false;
       btn2.disabled = false;
       result.classList.remove('btn','btn-primary','btn-success','btn-block');
}