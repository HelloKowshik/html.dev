let heading = $('#heading');
let paras = $('.paras');
let btn = $('.btn');
let clicked = 1;
let i = 0;
let colors = ['red','green','blue','yellow','violet','salmon'];
btn.addEventListener('click',(e)=>{    
if(e.type === 'click'){
    heading.innerHTML = `I am Clicked-${clicked} times`;
    heading.style.background = colors[i];
    clicked ++;
    if(i >=colors.length){
        i = 0;
    }else{
        i++;
    }
}

});

function $(e){
    let type =document.querySelector(e);
    return type;
}

let h1Styles = {
    background : 'brown',
    color : '#222',
    fontSize : '35px',
    fontFamily : 'tahoma',
    textAlign : 'center'
}
let p1Styles = {
    background : '#434343',
    fontSize : '25px',
    padding : '5px',
    margin : '2px',
    color : 'whiteSmoke',
    textAlign : 'center',
    border : '1px solid red'
}
Object.assign(heading.style,h1Styles);
Object.assign(paras.style,p1Styles);

let myBtn = $('.myBtn');
let show = $('.show');
let status = false;
myBtn.addEventListener('click',()=>{
    if(status){
        show.style.visibility = 'hidden';
        status = false;
        myBtn.textContent = 'Show'
    }else{
        show.style.visibility = 'visible';
        status = true;
        myBtn.textContent = 'Hide';
    }
})