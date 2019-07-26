document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    if(document.getElementById("name").style.display =="block") {
        document.getElementById("name").style.display = "none");
    else {
        document.getElementById("name").style
    }
    }
    document.getElementById("name").innerHTML = "My name is Ore";
}

function mySchool() {
    document.getElementById("school").innerHTML = "I am a major foodie!";
}

function myCareer() {
    document.getElementById("career").innerHTML = "I love technology!";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "Singing is one of my favorite things to do!";
}