Peter Ko
Lab 6
Optimizations

Average: 8.25 sec loading time

Part 1: Propagation for parent listener to children 
	~1.5 second improvement in loading, down to ~6.75 sec loading time

Part 2:

a. Placed the jquery file (and other Javascript files) at the end of the document, place CSS styling at the beginning, .5 second improvement.
	.5 second improvement, down to ~6.25 sec loading time
	
b. Turned the .js into a min.js 
	Reduced File Size
	
c. Placed "#" placeholder in empty href
	Will not refresh the page on a show-all, just scrolls to the top instead
	
d. Changed background photo to static background color via css
	CSS loads faster and does not have to wait for download for simple background
	
e. Removed statically set li elements
	Helped improve responsiveness due to script loading matching with page ready state. Before, if the user would click on the element it wouldn't necessarily be ready to be removed since it was statically set. All the element listing should be done in either the HTML or the Javascript if it's going to be the same thing.
	
f. Changed CSS instead of using jQuery function for display properties (only on showall)
	More efficient than using Javascript
	
Average after changes: 5.93s loading time

The timeline recording given to me through Chrome Dev Tools was super helpful. It allowed me to view exactly what was taking up certain amounts of time on my computer. It also let me realize that I needed a restart more than anything to improve load times.

I didn't realize that all of these little adjustments would compound on one another so heavily. It promotes good form for the fastest loading time.

One thing I didn't like was figuring out "what was vital" for the actual page. For example, I didn't touch the 5000+ lines of identical list items because I didn't know whether or not we had it there on purpose (to see larger differences in load times etc.)