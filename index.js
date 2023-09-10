function move(){
    const randomNum = Math.random();
    let conMoves = ''; 
    if(randomNum >=0 && randomNum <1/3){
        conMoves = 'Rock';
    }
    else if(randomNum >=1/3 && randomNum <2/3){
        conMoves = 'Paper';
    }
    else{
        conMoves = 'Scissors';
    }
    return conMoves;
}
function playGame(nextMove){
    const conMove = move();
    let result ='';
    if(nextMove === 'Rock'){
        if(conMove === 'Rock'){
            result = 'Tie';
        }
        else if(conMove === 'Paper'){
            result = 'you win';
        }
        else{
            result = 'you lose';
        }
    }
    
    else if(nextMove === 'Scissors'){
        if(conMove === 'Rock'){
        result = 'Tie';
    }
    else if(conMove === 'Paper'){
        result = 'you win';
    }
    else{
        result = 'you lose';
    }
}

else if(nextMove === 'Paper'){
    if(conMove === 'Rock'){
        result = 'Tie';
    }
    else if(conMove === 'Paper'){
        result = 'you win';
    }
    else{
        result = 'you lose';
    }
}

if(result === 'you lose'){
    score.win += 1;
}
else if(result === 'you win'){
    score.lose += 1;
}
else{
    score.tie += 1;
}
alert(`you pick ${nextMove}.computer pick ${conMove}.
win: ${score.win}.lose: ${score.lose}.Tie: ${score.tie}.
${result}`);
}
const score ={
    win: 0,
    lose: 0,
    tie: 0,
};
