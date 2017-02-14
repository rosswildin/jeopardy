document.addEventListener("DOMContentLoaded", function() {
	
	getQuestions();
	//add click event listener to each box
	addListeners();

	//add click event for reset button
	document.getElementById("reset").addEventListener("click", resetBoard);


});

function addListeners() {

	$(".choices").on('click', )
}


var query = null;
$('.choices').click(function(){
	query = $('#categoryToFind').val();
	getData();
});

function getQuestions(){
	$.get('https://www.opentdb.com/api.php?amount=100&category=9&difficulty=easy&type=multiple', {
		q: query, 
		// restrict_sr: "on",
		// sort: "new"
	}).done(function(data){
		
		var gotData = data.data.children;
		makeUrlArray(gotData);

	}).fail(function(error){
		console.log('there was erROAR');
});
}

