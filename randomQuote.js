// On document ready, random quote is displayed
$(ajaxHandler());

// Whenever button is clicked, new quote is displayed
$('#new-quote').on('click', function getQuote() {
  ajaxHandler();
});

// When Twitter button pressed, opens Twitter with current quote ready to be tweeted
$('#tweet-quote').on('click', function tweetQuote(){
  var quote = $('#text').text();
  var author = $('#author').text();
  $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + quote + '" ~ ' + author);
});

// AJAX call to retrieve random quote
function ajaxHandler(){
  $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        $('#text').html(post.content);
        $('#author').text(post.title);
      } ,
      cache: false
  });
}
