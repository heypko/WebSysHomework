// Peter Ko
// lab4.js	


		$.getJSON( "lab4alt.json", function( data ) {
		alert("Successfully Reading JSON");
		
		// Loop through track data for one song
		$.each( data.songs, function( index, value ) {
			
			var newsongdiv = document.createElement("div");
			
			
			// Creating Various Elements to place into the rocket ship table
			// Title
			var titledom = document.createElement("li");
			var titletext = document.createTextNode(value.title);
			titledom.appendChild(titletext);
			newsongdiv.appendChild(titledom);

			// Artist
			var artistdom = document.createElement("li");
			var artisttext = document.createTextNode(value.artist);
			artistdom.appendChild(artisttext);
			newsongdiv.appendChild(artistdom);
			
			// Album Title
			var albumdom = document.createElement("li");
			var albumtext = document.createTextNode(value.album);
			albumdom.appendChild(albumtext);
			newsongdiv.appendChild(albumdom);
			
			// Date
			var datedom = document.createElement("li");
			var datetext = document.createTextNode(value.date);
			datedom.appendChild(datetext);
			newsongdiv.appendChild(datedom);
			
			
			// Genres
			var genredom = document.createElement("ul");
			// Loop through all Genres for one song
			$.each (value.genres, function( gindex, gval ) {
				// Create a list element to populate with text
				genredomlist = document.createElement("li");
				genredomtext = document.createTextNode(gval);
				genredomlist.appendChild(genredomtext);
				// Append the single list element into the entire genre list
				genredom.appendChild(genredomlist);
			});
			newsongdiv.appendChild(genredom);
			
			
			// SoundCloud Link (Different Code Alert!)
			var sitedom = document.createElement("a");
			var sitetext = document.createTextNode('SoundCloud');
			// Similar to the art code, we edit sitedom's attributes
			//	to reflect our link to the song page.
			$( sitedom ).attr( "href", function() {
				return value.site;
			});
			sitedom.appendChild(sitetext);
			newsongdiv.appendChild(sitedom);
			
			
			// Album Art
			var artdom = document.createElement("img");
			// Similar to the site code, we edit artdom's attributes
			//	to show the album cover on the song page.
			$( artdom ).attr ("src", function() {
				return value.art;
			});
			newsongdiv.appendChild(artdom);
			
			
			
			// Add the song entry into the playlist.
			document.body.appendChild(newsongdiv);

		});
		
	});

