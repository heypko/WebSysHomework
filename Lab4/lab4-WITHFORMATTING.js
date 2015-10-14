// Peter Ko
// lab4.js	

var clicky = document.getElementById("clickme");
clicky.onclick = function(e) {
	
		// Remove no album image
		$( clicky ).remove();

		$.getJSON( "lab4-WITHFORMATTING.json", function( data ) {
		alert("Successfully Reading JSON");
		
		// Loop through track data for one song
		$.each( data.songs, function( index, value ) {
			
			var newsongul = document.createElement("ul");
			
			// Creating Various Elements to place into the rocket ship table
			// Title
			var titledom = document.createElement("li");
			var titletext = document.createTextNode(value.title);
			$( titledom ).attr({
				class: "songtitle",
				id: "a-col",
			});
			titledom.appendChild(titletext);
			newsongul.appendChild(titledom);

			// Artist
			var artistdom = document.createElement("li");
			var artisttext = document.createTextNode(value.artist);
			$( artistdom ).attr({
				class: "artist",
				id: "b-col",
			});
			artistdom.appendChild(artisttext);
			newsongul.appendChild(artistdom);
			
			// Album Title
			var albumdom = document.createElement("li");
			var albumtext = document.createTextNode(value.album);
			$( albumdom ).attr({
				class: "album",
				id: "c-col",
			});
			albumdom.appendChild(albumtext);
			newsongul.appendChild(albumdom);
			
			// Date
			var datedom = document.createElement("li");
			var datetext = document.createTextNode(value.date);
			$( datedom ).attr({
				class: "release",
				id: "d-col",
			});
			datedom.appendChild(datetext);
			newsongul.appendChild(datedom);
			
			
			// Genres
			var genredom = document.createElement("li");
			var genredomtext = document.createTextNode(value.genres);
			$( genredom ).attr({
				class: "genre",
				id: "e-col",
			});
			genredom.appendChild(genredomtext);
			newsongul.appendChild(genredom);
			
			
			// SoundCloud Link (Different Code Alert!)
			var sitedom = document.createElement("li");
			var sitesubdom = document.createElement("a");
			// Set attributes of outer list element
			$( sitedom ).attr({
				class: "sclink",
				id: "f-col",
			});
			// Similar to the art code, we edit sitesubdom's attributes
			//	to reflect our link to the song page.
			$( sitesubdom ).attr({
				href: value.site,
			});
			var sitetext = document.createTextNode('SoundCloud');
			sitesubdom.appendChild(sitetext);
			sitedom.appendChild(sitesubdom);
			newsongul.appendChild(sitedom);
			
			
			// Album Art
			var artdom = document.createElement("li");
			var artsubdom = document.createElement("img");
			// Set attributes of outer list element
			$( artdom ).attr ({
				class: "albumcover",
				id: "g-col"
			});
			// Similar to the site code, we edit artsubdom's attributes
			//	to show the album cover on the song page.
			$( artsubdom ).attr ({
				class: "albumpic",
				src: value.art
			});
			artdom.appendChild(artsubdom);
			newsongul.appendChild(artdom);
			
			
			
			// Create song entry box
			var songdom = document.createElement("div");
			// Need to change class attributes and id for everything
			$( songdom ).attr({
				class: "song",
				id: "center-me",
			});
			
			// Create columns
			var col1 = document.createElement("div");
			$( col1 ).attr({
				id: "container-1col"
			});
			var col2 = document.createElement("div");
			$( col2 ).attr({
				id: "container-2col"
			});
			var col3 = document.createElement("div");
			$( col3 ).attr({
				id: "container-3col"
			});
			var col4 = document.createElement("div");
			$( col4 ).attr({
				id: "container-4col"
			});
			var col5 = document.createElement("div");
			$( col5 ).attr({
				id: "container-5col"
			});
			var col6 = document.createElement("div");
			$( col6 ).attr({
				id: "container-6col"
			});
			var col7 = document.createElement("div");
			$( col7 ).attr({
				id: "container-7col"
			});
			
			// Assign proper children to containers
			col7.appendChild(newsongul);
			col6.appendChild(col7);
			col5.appendChild(col6);
			col4.appendChild(col5);
			col3.appendChild(col4);
			col2.appendChild(col3);
			col1.appendChild(col2);
			songdom.appendChild(col1);
						
			// Add the song entry into the playlist.
			var bigbox = document.getElementById("center-me2");
			bigbox.appendChild(songdom);

		});
	});
}

