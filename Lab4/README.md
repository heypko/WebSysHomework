Peter Ko
WebSys
Lab 4 README

GitHub Link: https://github.com/highpants/WebSysHomework/tree/master/Lab4

Files Included:
lab4-WITHFORMATTING.html
lab4-WITHFORMATTING.css
lab4-WITHFORMATTING.js
lab4-WITHFORMATTING.json
jquery-2.1.4.js


lab4alt.html
lab4alt.js
lab4alt.json

Note: The main submission I made has "-WITHFORMATTING" tags placed on the ends of all the files. The "alt" files are simply there to show that I know how to represent and output the genres as a key-less array using JSON.

Part 1:

Pretty simple, but I did get confused with having an array of primitive strings vs having an array of objects. After I sorted that out, there were no issues.

Part 2:

I learned two pretty important things from part 2.

1. Learning jQuery/AJAX syntax (pretty straightforward)

2. Learning how crappy html becomes extremely hard to maintain.

When I made lab 2, I used my "unique ids" in multiple locations. Regardless of how terrible of an idea it was at the time, I figured that I could just move on as I'd never have to see it again. All I had to do was to make sure that I remembered not to make the same mistake, and use proper class structure as opposed to jamming more attributes using ids.

Low and behold, here we are back using my terrible Lab 2 structure.

When it came to accessing the large container, I ended up having to create a brand new ID just so that I could grab the specific element I wanted. I was lucky that I only had to do so once, but if I ever made the same mistake on a larger project or assignment, it could've gotten to the point where it'd be better to just rewrite everything as opposed to deal with my awful old practices.

Also, in my old lab structure, I used a fake bullet for the single genre entry as opposed to using unordered list items. Thus, I ended up having to change the JSON Genre array structure (I read that arrays are unordered and can't be accessed by index) to a single value, so that I could just grab a single value that would be consistent with my lab 2 output.

I learned (the painful and hard way) that my small decisions and corner-cutting from before will almost certainly bite me in the ass. I doubt I'll forget the importance of keeping unique IDs as unique. In fact, just about everything from my lab2 assignment I did wrong will haunt my thoughts in the future.

