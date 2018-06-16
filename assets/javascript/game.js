$(document).ready(function () {

    // Reference Dom elemssssasda
    var newGameButton = $("#newGameButton");
    var countdown = $("#countdown");
    var correctNum = $("#correct");
    var incorrectNum = $("#incorrect");
    var unansweredNum = $("#unanswered");
    var resetButton = $("#reset");
    var quizArea = $("#quizArea");
    var results = $("#results");

    var questionArr = [{
            question: "Which year was Fallout 3 released?",
            choice: ["2006", "2010", "2008", "2012"],
            answer: 2,
            photo: ""
        },
        {
            question: "Which Assassins Creed game takes place in Ptolemaic, Egypt?",
            choice: ["Assassin's Creed: Revelations", "Assassin's Creed: Origins", "Assassin's Creed: Unity", "Assassin's Creed: Syndicate"],
            answer: 1,
            photo: ""
        },
        {
            question: "What does Mario jump on after completing a level??",
            choice: ["A Big Mushroom", "A Coin Box", "A Piranha Plant", "A Flag Pole"],
            answer: 3,
            photo: ""
        },
        {
            question: "What does NES stand for?",
            choice: ["Nintendo Entertainment System ", "Not Elsewhere Specified", "Never Ending Story", "Non Exciting Stuff"],
            answer: 0,
            photo: ""
        },
        {
            question: "What year was the ps4 released?",
            choice: ["2012", "2013", "2015", "2010"],
            answer: 1,
            photo: ""
        },
        {
            question: "What color are Spyro The Dragons' wings?",
            choice: ["Blue", "Purple", "Orange", "Green"],
            answer: 2,
            photo: ""
        },
        {
            question: "What is Laura Craft's field of study in the Tomb Raider Series",
            choice: ["Agriculture", "Anthropology", "Architecture", "Archaeology"],
            answer: 3,
            photo: ""
        },
        {
            question: "Who is the main protagonist	in God of War Series",
            choice: ["Kratos", "Ares", "Zeus", "Athena"],
            answer: 0,
            photo: ""
        }
    ];

    var counter = 0;
    correctNum = 0;
    incorrectNum = 0;
    unansweredNum = 0;
    countdown = 30;
    var intervalId;
    var gameRunning = false;
    var timerRunning = false;
    var userChoice;
    //hide quiz until click play\\
    quizArea, results.hide();

    // newButton onclick
    newGameButton.on("click", function () {
        $("#noLongerNeeded").slideUp("slow");
        $(quizArea).show("slow");
        loadQnA();
    });


    console.log(questionArr[counter].question);
    console.log(questionArr[counter].choice);
    console.log(questionArr.length);

    // function load Questions and possible Choices.
    function loadQnA() {
        questionM = questionArr[counter].question
        answerM = questionArr[counter];
        // console.log(answerM);
        $("#questionArea").html("<h2>" + questionM + "</h2>");
        for (var i = 0; i < answerM.choice.length; i++) {

            var answerOption = $("<div>");//$("<button>")
            answerOption.addClass("answerChoice btn"); //btn btn-primary
            answerOption.text(answerM.choice[i]);
            answerOption.attr("data-index", i);
            $("#answerArea").append(answerOption);
        }
        timer();
        $(".answerChoice").on("click", function() {
            var userSelect = $(this).data("index");
            console.log(userSelect);
        })
    }


    // $(".answerChoice").on("click", function() {
    //     var userSelect = $(this).data("index");
    //     console.log(userSelect);
    // })



    // timer Function
    function timer() {
        if (!timerRunning)
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        timerRunning = true;
    }
    //  The decrement function.
    function decrement() {
        //  Decrease number by one.
        countdown--;
        //  Show the number in the #show-number tag.
        $("#countdown").html(countdown);
        //  Once number hits zero...
        if (countdown === 0) {

            //  ...run the stop function. //move onto next question
            stop();

            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }
    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        timerRunning = false;
    }

   // timer();

})