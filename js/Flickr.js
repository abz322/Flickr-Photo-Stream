  var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var flickerAPI2 = "https://api.flickr.com/services/rest/?";
  var page = 1;
var flickFeed;
var counter = 0;
var counter2 = 0;
var tag = 'mountains';
function setBlock( ) {

        $("<div>").attr("id", "block" + counter.toString()).appendTo(".flickrFrame");
        $("#block" + counter.toString()).attr("class", "blocks").appendTo("#block" + counter.toString());
          $("<div>").attr("class", "upperBlock").appendTo("#block" + counter.toString());


            $( "<img>" ).attr( "id", "photoLink" + counter.toString() ).appendTo( "#block" + counter.toString() + " .upperBlock");

            $( "<a>" ).attr( "id", "photoLink" + counter.toString() ).appendTo( "#block" + counter.toString() + " .upperBlock");

            $( "<a>" ).attr( "id", "authorLink" + counter.toString() ).appendTo( "#block" + counter.toString() + " .upperBlock");
            $( "<span>" ).attr( "id", "authorLink" + counter.toString() ).insertBefore( "a#authorLink" + counter.toString());

              $( "span#authorLink" + counter.toString() ).text(" by ");
                  $("<div>").attr("class", "lowerBlock").appendTo("#block" + counter.toString());
                  $( "<div>" ).attr( "id", "description" + counter.toString() ).appendTo( "#block" + counter.toString() + " .lowerBlock");

                  $( "<div>" ).attr( "id", "tags" + counter.toString() ).appendTo( "#block" + counter.toString() + " .lowerBlock");

                  $( "</br>" ).insertBefore( "div#tags" + counter.toString());
  counter = counter +1;
    };

function setPhoto(data) {
$.each( data, function( i, photo ) {
              $( "img#photoLink" + counter2.toString() ).attr( "src", 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_q.jpg' );

             $( "a#photoLink" + counter2.toString() ).attr( "href", 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_q.jpg' );
              if(photo.title._content.toString().length > 15)
                $( "a#photoLink" + counter2.toString() ).text(photo.title._content.toString().substring(0,10) + "...");
              else if(photo.title._content.toString() == null || photo.title._content.toString() == " ")
                $( "a#photoLink" + counter2.toString() ).text("Unknown Title");
              else
                $( "a#photoLink" + counter2.toString() ).text(photo.title._content.toString());



             $( "a#authorLink" + counter2.toString() ).attr( "href", "https:\/\/www.flickr.com\/people\/" + photo.owner.nsid );

              if(photo.owner.username.length > 15)
                $( "a#authorLink" + counter2.toString() ).text(photo.owner.username.substring(0,10) + "...");
              else
                $( "a#authorLink" + counter2.toString() ).text(photo.owner.username);


                  $( "div#description" + counter2.toString() ).append(photo.description._content);


                  
                  var splitTags = photo.tags;

                   if(splitTags.tag.length > 1){
                      $.each( splitTags.tag, function( i, tag ) {
                        $( "<a>" ).attr( "id", "tagLink" + i.toString()).appendTo( "div#tags" + counter2.toString());

                        $( "div#tags" + counter2.toString() + " a#tagLink" + i.toString()  ).attr( "href", "https://www.flickr.com/photos/tags/" + tag.raw );

                        $( "a#tagLink" + i.toString() ).attr( "class", "tagLinks");

                        $( "div#tags" + counter2.toString() + " a#tagLink" + i.toString() ).text(tag.raw);
                      });
                   };


         counter2++; 
     });
    };

function callAPIPrivate(next_page,new_tag) {

   $.getJSON( flickerAPI2, {
    method: 'flickr.photos.search',
    api_key: 'c0fd42054294ea255f364d018fc9e695',
    tags: new_tag,
    page: next_page,
    per_page: 20,
    safe_search: 1,
    format: 'json',
    nojsoncallback:1
  }).done(function(response) {

$.each( response.photos.photo, function( i, photo ) {
      $.getJSON( flickerAPI2, {
        method: 'flickr.photos.getInfo',
        api_key: 'c0fd42054294ea255f364d018fc9e695',
        photo_id: photo.id,
        format: 'json',
        nojsoncallback:1
      }).done(function(response) {



         setBlock();
         setTimeout(function(){
             setPhoto(response);
            }, 50);
    })
  });
})
};

