name_1 = localStorage.getItem("name1");
name_2 = localStorage.getItem("name2");
score_1 = 0;
score_2 = 0;
document.getElementById("name-1").innerHTML = name_1 + ":- ";
document.getElementById("name-2").innerHTML = name_2 + ":- ";

document.getElementById("score-1").innerHTML = score_1;
document.getElementById("score-2").innerHTML = score_2;

document.getElementById("q").innerHTML = "QUESTIONER:- " + name_1;
document.getElementById("a").innerHTML = "ANSWERER:- " + name_2;

var ran = Math.round(Math.random() * 3);

function send() {

}