var currentQuestion = 0;
var questionContainer = document.getElementsByClassName("question-container");
var numOfQuestions = questionContainer.length;


var loadNextQ = function (main, numOfQuestions, questionContainer) {
    var prev = document.getElementById("prevButton");
    prev.style.display = "block";

    var next = document.getElementById("nextButton");
    var submit = document.getElementById("submitButton");
    if ((currentQuestion +2) > (numOfQuestions - 1)){
        next.style.display = "none";
        submit.style.display = "block";
    }

    var answer = document.getElementsByClassName('answer');

    var checkedCounter = 0;
    for (var i = 0; i < answer.length; i++) {
        if (answer[i].checked === true && answer[i].display !== "none") {
            checkedCounter++;
        }
    }
    console.log(checkedCounter);

    if (checkedCounter > (currentQuestion + 1)) {
        alert("You can only select one answer per question!!");
    } else {
        console.log("shit is going to work");
        questionContainer[currentQuestion].style.display = "none";

        if ((currentQuestion) < (numOfQuestions - 1)) {

            currentQuestion++;
            console.log(currentQuestion);
            questionContainer[currentQuestion].style.display = "block";
        }
    }
    

    console.log(currentQuestion);
    var imgUrl = changeBackgroundImage(currentQuestion, main, backgroundImages);
    main.style.backgroundImage = imgUrl;
    console.log(main.style.backgroundImage);


    return currentQuestion;

};

var loadPrevQ = function (main, questionContainer) {
    var prev = document.getElementById("prevButton");
    var submit = document.getElementById("submitButton");
    var next = document.getElementById("nextButton");

    if (submit.style.display !== "none") {
        submit.style.display = "none";
        next.style.display = "block";
    }

    questionContainer[currentQuestion].style.display = "none";

    if (currentQuestion > 0) {
        currentQuestion = (currentQuestion - 1);
        questionContainer[currentQuestion].style.display = "block";
        if (currentQuestion === 0) {
            prev.style.display = "none";
        }
    } else {
        submit.style.display = "none";
    }
    console.log(currentQuestion);
    var imgUrl = changeBackgroundImage(currentQuestion, main, backgroundImages);
    main.style.backgroundImage = imgUrl;
    console.log(main.style.backgroundImage);

    return currentQuestion;

};

var birthday = function (score) {
    var input = document.getElementById("birthday").value;
    var year = parseInt(input);
    console.log(year);

    if (year > 1984 && year <= 1990) {
        input = score + 150;
    } else if (year > 1990 && year <= 2000) {
        input = score + 1;
    } else {
        input = ((1984-year)*30) + score + 150;
    }
    return input;


};

var gender = function (score) {
    var male = document.getElementById("male");

    var input = score;

    if (male.checked === true) {
        input += 1;
    } else {
        input += 61;
    }

    return input;


};

var followers = function (score) {
    var followers = parseInt(document.getElementById("followers").value);
    var input = score;
    if (followers > 100000) {
        input += 251;
    } else if (followers > 5000 && followers <= 100000) {
        input += 150;
    } else if (followers > 1000 && followers <= 5000) {
        input += (((followers/5000)*139)-20);
    } else {
        input += 10;
    }

    return input;
}

var experienceFunction = function (score) {
    var experience = parseInt(document.getElementById("experience").value);
    var input = score;
    if (experience > 10) {
        input += 0;
    } else if (experience > 5 && experience <= 10) {
        input += 5;
    } else if (experience > 2 && experience <= 5) {
        input += 10;
    } else {
        input += 40;
    }

    return input;
}

var hoursWeeklyFunction = function (score) {
    var hrsWeek = parseInt(document.getElementById("hours-a-week").value);
    var input = score;
    if (hrsWeek > 15) {
        input += 251;
    } else if (hrsWeek > 5 && hrsWeek <= 20) {
        input += 1;
    } else if (hrsWeek > 2 && hrsWeek <= 5) {
        input += 15;
    } else {
        input += 160;
    }

    return input;
}

var submitAnswers = function (questionContainer, numOfQuestions) {
    questionContainer[numOfQuestions-1].style.display = "none";
    var allButtons = document.getElementById("allButtons");
    allButtons.style.display = "none";
    var result= document.getElementById("result");
    result.style.display = "flex";
    

    var answerArray = document.getElementsByClassName("answer-count");
    console.log(answerArray);
    var answerArrayLength = answerArray.length;
    console.log(answerArrayLength);
    var score = 0;

    score += parseInt(birthday(score));
    console.log(score);

    var isSinger = document.getElementById("singer").checked;

    if (isSinger === true) {
        score = parseInt(gender(score));
        console.log(score);
    }

    score = parseInt(followers(score));
    console.log(score);

    score = parseInt(experienceFunction(score));
    console.log(score);

    score = parseInt(hoursWeeklyFunction(score));
    console.log(score);

    for (var i = 0; i < answerArrayLength; i++) {
        if (answerArray[i].checked === true) {
            score += parseInt(answerArray[i].value);
        }
    }
    console.log(score);

    if(score!=="number" || score===0){
        result.innerHTML = '<p>Try actually answering the questions next time</p><a href="./index.html"><button class="call-to-action">Restart</button></a>';
    }else if(score>500){
        result.innerHTML = "<p>The fit is very poor, you should consider other options</p>";
    } else if(score<500 && score>250){
        result.innerHTML = "<p>The probability of fit is low, you may apply but beware that in all likelyhood EightAngle is not a fit</p>";
    } else if(score<250 && score>100){
        result.innerHTML = "<p>You are not the ideal fit at the moment, but based on your answers it is strongly suggested that you apply - that way we will be able to contact you in case this may be relevant in the near future</p>";
    } else{
        result.innerHTML = '<p>It seems like you would be a natural fit on EightAngle<p><button class="call-to-action">Apply now!</button>'
    }
};

var experience = document.getElementById("experience").value;
var displayExperience = document.getElementById("displayExperience");

displayExperience.innerText = experience;

var displayEx = function () {
    var experience = document.getElementById("experience").value;
    var displayExperience = document.getElementById("displayExperience");

    displayExperience.innerText = experience;
}


var hrsWeekly = document.getElementById("hours-a-week").value;
var hrsWeeklyDisplay = document.getElementById("display-hours-a-week");

hrsWeeklyDisplay.innerText = hrsWeekly;

var displayHr = function () {
    var hrsWeekly = document.getElementById("hours-a-week").value;
    var hrsWeeklyDisplay = document.getElementById("display-hours-a-week");

    hrsWeeklyDisplay.innerText = hrsWeekly;
}

var main = document.getElementById("mainId");
var backgroundImages = {
    0: "url('./images/q1Img.jpg')",
    1: "url('./images/singerBlackWhite.jpeg')",
    2: "url('./images/experience.jpg')",
    3: "url('./images/passion.jpeg')",
    4: "url('./images/socialmedia.jpeg')",
    5: "url('./images/practice.jpeg')",
    6: "url('./images/synth.jpeg')",
    7: "url('./images/israeliRock.jpg')",
    8: "url('./images/time.jpeg')",
    9: "url('./images/assess.jpeg')",
};


var changeBackgroundImage = function (currentQuestion, main, backgroundImages) {
    
    var currentImg = "";
    

    switch (currentQuestion) {
        case 0:
            currentImg = backgroundImages[0];
            break;
        case 1:
            currentImg = backgroundImages[1];
            break;
        case 2:
            currentImg = backgroundImages[2];
            break;
        case 3:
            currentImg = backgroundImages[3];
            break;
        case 4:
            currentImg = backgroundImages[4];
            break;
        case 5:
            currentImg = backgroundImages[5];
        break;
        case 6:
            currentImg = backgroundImages[6];
        break;
        case 7:
            currentImg = backgroundImages[7];
        break;
        case 8:
            currentImg = backgroundImages[8];
        break;
        case 9:
            currentImg = backgroundImages[9];
        break;
        case 10:
            currentImg = backgroundImages[10];
        break;
    }


    return currentImg;

}