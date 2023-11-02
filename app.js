let turn='X';
let click=new Audio("click.mp3");
let wingame=new Audio("wingame.mp3");
const changeTurn=()=>{
    return turn=== 'X'?'0':'X';
}

const win=()=>{
    let boxtext=document.querySelectorAll('.box-text');
    let wins=[
        [0,1,2,14.8,-6.9,90,23],
        [3,4,5,14.66,3.2,90,23],
        [6,7,8,14.7,13.4,90,23],
        [0,3,6,4.6,3.3,0,23],
        [1,4,7,14.7,3.3,0,23],
        [2,5,8,24.7,3.3,0,23],
        [0,4,8,13.9,-2.7,135,34],
        [2,4,6,14.9,-2.4,45,34]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&( boxtext[e[0]].innerText!==''))
        {
            document.querySelector('.reset p').innerText=`${boxtext[e[0]].innerText} Won`;
            document.querySelector('.line').style.height=`${e[6]}vw`;
            document.querySelector('.line').style.display='flex';
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.gif img').style.width="20vw";
            turn='';
            setTimeout(()=>{
            wingame.play();
            wingame.play();
           },500);
         
        }
    })
}

//   Logic Game

let boxes=document.querySelectorAll('.box');
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.box-text');
    element.addEventListener('click',()=>{    
        if(boxtext.innerText==="")
        {
            
            boxtext.innerText=turn;
            turn=changeTurn();
            click.play();
            document.querySelector('.reset p').innerText=`Turn for ${turn}`;
            win();
        }
    })
})

let reset= document.querySelector('.reset button');
reset.addEventListener('click',resetgame);
function resetgame(){
    turn="X";
    document.querySelector('.reset p').innerText='Turn for X';
    let boxtext=document.querySelectorAll('.box-text');
    document.querySelector('.line').style.display='none';
    
    document.querySelector('.gif img').style.width="0vw";
    document.querySelector('.line').style.transform="translate(0vw,0vw) rotate(0deg)";
    boxtext.forEach(e=>{
        e.innerText='';
    })
    }
