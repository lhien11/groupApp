$(document).ready(function(){

loadBio();


function loadBio(){
  $.ajax({
    type: 'GET',
    url: '/info',
    success: function(response) {
      console.log("Test", response);
      //response.forEach(function(info){
      appendDOM(response);
  
      //});
    }
  })
}

loadLikes();

function loadLikes(){
$.ajax({
  type: 'GET',
  url: '/likes',
  success: function(response){
  console.log("Test 1", response);
 appendDOMLikes(response);
  }
});
}

function appendDOM(info){
  console.log("Hey");
  console.log(info);
  console.log(info.array)
  $("#our-info").append('<div class="people"></div>');
  var $el = $("#our-info").children().last();
  for (var i = 0; i < info.array.length; i++){
  $el.append('<h2 class="people-name">' + info.array[i].name + '</h2>');
  $el.append('<p class="bio">' + info.array[i].bio + '</p>');
  $el.append('<img id="photo" src="' + info.array[i].image + '"/>');


}
}//appendDOM

function appendDOMLikes(thing){
  console.log(thing);
  $('.bio').append(thing);
}









})//jQuery
