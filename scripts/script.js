function computerPlay() {
    const number = Math.floor(Math.random() * 10);
    if (number  >= 7) {
        return "Rock";
    } else if (number >= 4) {
        return "Paper";
    }
    return "Scissors" 
}
console.log(computerPlay())