# Billion Laughs DoS Attack

Most browsers fix this... but here is a handy program to find ones that do not.

http://en.wikipedia.org/wiki/Billion_laughs

The server will return offensive XML by default at any request. Navigating to `/lol.html` serves an HTML page to see if `DOMParser` can choke on it. 

As of this writing, the Firefox `DOMParser` appears to be effected. (Cheers to @davejohnson for finding that!)
