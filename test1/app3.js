//get json file from API

let apiLink = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';
var xreq = new XMLHttpRequest();
var dbObj
//
xreq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    dbObj = JSON.parse(this.responseText);
    console.log(dataObj.results);
    displayQuestion(dbObj.results);
  }
};
//
xreq.open("GET", apiLink, true);
xreq.send();
//shuffle answer
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function displayQuestion(data){

    var page = ''
    for(q of data){
        var answerList = [];
        answerList.push(q.correct_answer);
        for(v of q.incorrect_answers){
            answerList.push(v);
        }
        shuffleArray(answerList);
        page = page.concat('<div>'+'<p>Q:'+q.question+'</p>'+'<p><input type="radio"/>'+answerList[0]+'</p>'+'<p><input type="radio"/>'+answerList[1]+'</p>'+'<p><input type="radio"/>'+answerList[2]+'</p>'+'<p><input type="radio"/>'+answerList[3]+'</p>'+'</div>');
    }
    document.write(page);  
}