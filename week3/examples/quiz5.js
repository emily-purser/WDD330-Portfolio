// Chapter 5 Project 
const quiz = [
    {name: "Captain America", realName: "Steve Rogers"},
    {name: "Spiderman", realName: "Peter Parker"},
    {name: "Iron Man", realName: "Tony Stark"},
    {name: "Hulk", realName: "Bruce Banner"},
    {name: "Doctor Strange", realName: "Doctor Steven Strange"}
];

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
            alert('Correct!');
            this.score++;
        }else{
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}
game.start(quiz);