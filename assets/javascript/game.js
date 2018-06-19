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
            question: "In Fallout 3, what collection of books did Moria Brown write?",
            choice: ["Tales of a Junktown Jerky Vendor", "Guns and Bullets", "Wasteland Survival Guide", "Grognak the Barbarian"],
            answer: 2,
            photo: "assets/images/wlsg.png"
        },
        {
            question: "Which Assassins Creed game takes place in Ptolemaic, Egypt?",
            choice: ["Assassin's Creed: Revelations", "Assassin's Creed: Origins", "Assassin's Creed: Unity", "Assassin's Creed: Syndicate"],
            answer: 1,
            photo: "assets/images/asas2.png"
        },
        {
            question: "What does Mario jump on after completing a level?",
            choice: ["A Big Mushroom", "A Coin Box", "A Piranha Plant", "A Flag Pole"],
            answer: 3,
            photo: "assets/images/mfp.jpg"
        },
        {
            question: "What is the name of the missing girl in Life Is Strange?",
            choice: ["Rachel Amber", "Victoria Chase", "Kate Marsh", "Juliet Watson"],
            answer: 0,
            photo: "assets/images/ra.png"
        },
        {
            question: "What is the name of the giant robot-like creature in Bioshock 1 & 2?",
            choice: ["Heavenly Father", "Big Daddy", "Bubble Jug", "Big Boi"],
            answer: 1,
            photo: "assets/images/bd2.png"
        },
        {
            question: "What color are Spyro The Dragons' wings?",
            choice: ["Blue", "Purple", "Orange", "Green"],
            answer: 2,
            photo: "assets/images/sd3.jpg"
        },
        {
            question: "What is Laura Croft's field of study in the Tomb Raider Series?",
            choice: ["Agriculture", "Anthropology", "Architecture", "Archaeology"],
            answer: 3,
            photo: "assets/images/lctr2.jpg"
        },
        {
            question: "Who is the main protagonist in God of War?",
            choice: ["Kratos", "Ares", "Zeus", "Athena"],
            answer: 0,
            photo: "assets/images/kgw.jpg"
        },
        {
            question: "From the Sonic series, what is Tails the Fox's real name?",
            choice: ["Jonathan Prowler", "Tyler Posner", "Miles Prower", "Michael Ramsey"],
            answer: 2,
            photo: "assets/images/tails.png"
        }
    ];

    var counter = 0;
    correctNum = 0;
    incorrectNum = 0;
    unansweredNum = 0;
    countdown = 20;
    var intervalId;
    var gameRunning = false;
    var timerRunning = false;
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
        $("#questionArea").html("<h4>" + questionM + "</h4>");
        for (var i = 0; i < answerM.choice.length; i++) {

            var answerOption = $("<div>"); //$("<button>")
            answerOption.addClass("answerChoice"); //btn btn-primary
            answerOption.text(answerM.choice[i]);
            answerOption.attr("data-index", i);
            $("#answerArea").append(answerOption);
        }
        timer();
        $(".answerChoice").on("click", function () {
            var userSelect = $(this).data("index");
            console.log(userSelect);
            console.log(answerM.answer)

            if (userSelect == answerM.answer) {
                counter++;
                correctNum++;
                stop()
                var hurray = $("<h3>Correct!</h3>");
                $("#answerArea").html(hurray);
                var imageReplace = $("<img>");
                imageReplace.attr("src", answerM.photo);
                imageReplace.addClass("col-12 col-lg-10");
                $("#answerArea").append(imageReplace);
                reLoad();

            } else if (userSelect != answerM.answer) {
                counter++;
                incorrectNum++;
                stop()
                var boo = $("<h3>Wrong! The correct answer was " + answerM.choice[answerM.answer] + "</h3>");
                $("#answerArea").html(boo);
                var imageReplace = $("<img>");
                imageReplace.attr("src", answerM.photo);
                imageReplace.addClass("col-12 col-lg-10");
                $("#answerArea").append(imageReplace);
                reLoad();
            }
        })
    }


    function reLoad() {
        countdown = 21;
        if (counter == questionArr.length) {
            quizArea.hide();
            results.show();
            $("#correct").text(correctNum);
            $("#incorrect").text(incorrectNum);
            $("#unanswered").text(unansweredNum);
        } else {
            setTimeout(function () {
                $("#questionArea").empty();
                $("#answerArea").empty();
                loadQnA();
            }, 3000);
        }
    }

    $("#reset").on("click", function () {
        counter = 0;
        correctNum = 0;
        incorrectNum = 0;
        unansweredNum = 0;
        countdown = 20;
        results.hide();
        quizArea.show();
        $("#questionArea").empty();
        $("#answerArea").empty();
        loadQnA();
        // reLoad();


    })


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
        //  Show the number in the #countdown tag.
        $("#countdown").html(countdown);
        //  Once number hits zero...
        if (countdown === 0) {

            //  ...run the stop function. //move onto next question
            stop();
            counter++;
            unansweredNum++;
            var tooLate = $("<h3>Times Up! The correct answer was " + answerM.choice[answerM.answer] + "</h3>");
            $("#answerArea").html(tooLate);
            var imageReplace = $("<img>");
            imageReplace.attr("src", answerM.photo);
            imageReplace.addClass("col-12 col-lg-10");
            $("#answerArea").append(imageReplace);
            reLoad();
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

})