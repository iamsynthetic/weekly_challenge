var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/photos',
  method: 'GET'
}).then(function(data) {
  formatData(data);
});

function formatData(data){
	console.log(data);
	console.log(jQuery.type(data))
	var onlyLike21 = data.slice(0, 20);
	console.log(onlyLike21);
	createHTML(onlyLike21);
};

Handlebars.registerHelper("addExcitement", function(excitement){
	var moreExcitement = " !!!";
	return excitement + moreExcitement;
});

function createHTML(photosData){
	var theTemplate = document.getElementById('photos-template').innerHTML;
	var compiledTemplate = Handlebars.compile(theTemplate);
	var newHTML = compiledTemplate(photosData);
	var photoAlbum = document.getElementById('photo-album');
	
	photoAlbum.innerHTML = newHTML;
};