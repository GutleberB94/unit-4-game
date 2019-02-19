// create variables to store the required information
$(document).ready(function () {
    var scoreToWin = 0;
    var currentScore = 0;
    var totalWins = 0;
    var totalLoses = 0;
    var imgVal1 = 0;
    var imgVal2 = 0;
    var imgVal3 = 0;
    var imgVal4 = 0;



    // function to reset the values.
    function resetValues() {
        imgVal1 = Math.floor(Math.random() * 12) + 1;
        console.log("val 1: " + imgVal1);
        imgVal2 = Math.floor(Math.random() * 12) + 1;
        console.log("val 2: " + imgVal2);
        imgVal3 = Math.floor(Math.random() * 12) + 1;
        console.log("val 3: " + imgVal3);
        imgVal4 = Math.floor(Math.random() * 12) + 1;
        console.log("val 4: " + imgVal4);

        scoreToWin = Math.floor(Math.random() * 102) + 19;
        console.log("win: " + scoreToWin);

        $(".numToGet").text(scoreToWin);

        currentScore = 0;

        $(".yourNum").text(currentScore);
    }
    // function to reset all game scores and values
    function resetGame() {
        imgVal1 = Math.floor(Math.random() * 12) + 1;
        console.log("val 1: " + imgVal1);
        imgVal2 = Math.floor(Math.random() * 12) + 1;
        console.log("val 2: " + imgVal2);
        imgVal3 = Math.floor(Math.random() * 12) + 1;
        console.log("val 3: " + imgVal3);
        imgVal4 = Math.floor(Math.random() * 12) + 1;
        console.log("val 4: " + imgVal4);

        scoreToWin = Math.floor(Math.random() * 102) + 19;
        console.log("win: " + scoreToWin);

        currentScore = 0;
        totalWins = 0;
        totalLoses = 0;
    }
    // this sets the game up initially
    resetGame();


    // click events

    $(".img1").on("click", function () {
        currentScore = currentScore + imgVal1;
        console.log(currentScore);
        $(".yourNum").text(currentScore);
        checkWin();
        
    });

    $(".img2").on("click", function () {
        currentScore = currentScore + imgVal2;
        console.log(currentScore);
        $(".yourNum").text(currentScore);
        checkWin();
    });

    $(".img3").on("click", function () {
        currentScore = currentScore + imgVal3;
        console.log(currentScore);
        $(".yourNum").text(currentScore);
        checkWin();
    });

    $(".img4").on("click", function () {
        currentScore = currentScore + imgVal4;
        console.log(currentScore);
        $(".yourNum").text(currentScore);
        checkWin();
    });

    $("#reset").on("click", function () {

        resetGame();
    });

    function checkWin() {
        if (currentScore > scoreToWin) {

            totalLoses++;
            alert("You Lose!!!");
            resetValues();

        }
        else if (currentScore === scoreToWin) {

            totalWins++;
            alert("You Win!!!");
            resetValues();
        }
    }





});