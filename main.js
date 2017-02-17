var score = 0;
var selectedQuestion = {};

$(".playerScore").append('<h2>' + score + '</h2>');


document.addEventListener("DOMContentLoaded", function() {

	//add click event listener to each box
	addListeners();

	//add click event for reset button
	// document.getElementById("reset").addEventListener("click", resetBoard);

});

function addListeners() {
	$(".choices").on('click', function(){
		$(this).text('');
		$(".hiddenDiv").show();
		// var clickedBox = this.id;

		var question = $(this).attr('data-question');
		var answer = $(this).attr('data-answer');
		var questionScore = parseInt($(this).text());

		selectedQuestion['question'] = question;
		selectedQuestion['answer'] = answer;
		selectedQuestion['score'] = questionScore;

		console.log(selectedQuestion);

		$('.hiddenDiv').append('<h2>' + question + '</h2>');
		// console.log(clickedBox);
		
		$(".choices").hide();
	});
}


$("#userInput").on("click", function(){
	handleUserInput();
	$(".hiddenDiv h2").remove();
	$(".hiddenDiv").hide();
	$(".choices").show();
});

function handleUserInput(){
	
	var userAnswer = $(".answerField").val();

	if(selectedQuestion['answer'] === userAnswer){
		console.log("worked");
		score + selectedQuestion['score'];
	} else {
		console.log('wrong!');
	}
}


// function handleUserInput(){
  
//   if (answerField input == correctAnswer){
//   	$('.playerScore').append('<h2>' + score+ '</h2>');
//   }
  
//   $('.hiddenDiv').fadeOut();
//   $('.choices').show();
// }





