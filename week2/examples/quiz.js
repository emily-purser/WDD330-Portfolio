// alert('Welcome to Quiz Ninja!');

// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

// let score = 0;

// for(const [question,answer] of quiz){
//     const response = prompt(question);
//     if(response === answer){
//         alert('Correct!');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

// const question = "What is Superman's real name?";
// const answer = prompt(question);
// alert(`You answered ${answer}`);

const quiz = [
    ["What is Captain America's real name?","Steve Rogers"],
    ["What is Spiderman's real name?", "Peter Parker"],
    ["What is Iron Man's real name?", "Tony Stark"],
    ["What is Winter Soldier's real name?", "James Buchanan Barnes"],
    ["What is Hulk's real name?", "Bruce Banner"]
];

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question, answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    //function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
            alert('Correct!');
            score ++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);

