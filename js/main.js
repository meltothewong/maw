$(document).ready(function() {
	$('a').smoothScroll();
});
function tweet_machine() {
	object = $('.pledge-object').val();
	action = $('.pledge-action').val();
	sentence = 'I pledge not to make ' + object +  ' and instead I will ' + action + '.';
	url = 'https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fmarketersagainstwaste.com&text=' +
		   encodeURIComponent(sentence) + 
		  '&tw_p=tweetbutton&url=http%3A%2F%2Fmarketersagainstwaste.com';

	$('.tweet-button').attr('href', url);
};
$( '.tweet-machine select' ).change(function() {
	tweet_machine();
});
