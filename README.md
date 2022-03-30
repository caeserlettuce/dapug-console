# console

hello all you wonderful people of the interwebs

i again have a new project im working on

this is probably the biggest project ive ever done (with a whopping ~2000 lines of code) for my website

you can see it in action here: https://dapug.lol/console

it's probably not up to date 

but this repo is where i'll have the nightly versions of it because i'm getting tired of sending a zip of it through discord and downloading it on either my pc or laptop

<br>

____as best reviewed by tech experts from around the world____

> *"what can i say except you're welcome"* <br>
> 
> *-18_gallons, after inputting over 1000 characters into the command prompt and breaking the site while i watch in sadness* 

<br> also happy 2 month of working on this project! (for me)<br>
though this project had not *started* on github, the `info` command on the site provides the date i started it on (january 24, 2022)<br>

and it is currently march 29th, 2022


## TODO:

- [ ] complete overhaul on how text is written to the console
  - this includes a lot of work, BUT! literally everything that writes text to the console uses the same set of functions, which is good, because that means i can just change what the functions do, instead of having to go to every instance of text writing and go and yknow, replace the code
  - so this idea i have for the new version *should* fix the issue of when you write multiple things to the console, it writes in the same line as the other output, which outputs something like this: shfkjsdl fjszfkjesfk sf hesfhs if,  fdg,fdz gf. ,sf sfkj
  - so the ACTUAL way that i'm gonna do that, is by using multiple `<p>` elements. so for every, say, `newAnim()` that is called, *just* that `newAnim()` will write to it's own `<p>` element
  - it will keep track of the `<p>` elements via an id numbering system
  - this will also completely break the fancy clear command so,,,,, im just going to remove it because it never really worked how i wanted it to in the first place
  - so yeah
  - tl;dr i'm going to rework the framework i wrote to display text to the console, so that way it'll fix a long-needed-to-be-fixed bug, and it will also provide more opportunities for commands in the future
  - [ ] basic appending of `<p>` elements
  - [ ] get it to fancy time-append the characters into the `<p>` element
  - [ ] new command to append/edit old `<p>` elements
  - [ ] the fancy append command returns important information, like the id number of the `<p>` element, and other info i think i need along the way
  - [ ] rework the link append command to work with the new framework
  - [ ] ^ same with the colour one and the worble one
  - [ ] implement new framework and then fix all the bugs and errors it makes

  <br> thank god i wrote this console to depend on functions or this patch would not be possible

  <br>
- update on the patch: i don't think i need to use extra elements, i just need to have a json object where every new append command makes a new key with an id number, and the value is set to the current message, and then i can have a screenUpdate() function that will update the screen, that way i can go and edit *specific* entries, which is what i want
   - im also removing the fancy clear command
   - byebye clear command that wasn't really that fancy
   - no im using elements because that'll just make things faster (hopefully???)
  - because it'll only update the elements that need to be updated
  - i am about to perform a satanic ritual on javascript
  - this i sgoing to need a lot of lemon demon to fix


- [x] fix uparrow command history thing
  - this involves rewriting it's code (fun)

- [x] url parameters
  - [x] automatically set debug to true when it's set in the url
  - [x] automatically run commands at startup depending on the url param
    - (this doesnt work)
    - actually i thought of an idea that may work hold on
    - OH MY GOD IT WORKED
  - [x] make a command that will generate a link based on what you add to the link thingy
  - [x] one that sets text colour and background colour
- [x] switch the `convert` command to be ran procedurally (remove the massive block of if/else statements and replace it with something that will automatically detect what variable to use depending on in/out units so the code is cleaner and fancier) (maybe steal some code from the manpage command lol)
- [ ] more fun ascii arts
  - [x] add a slant font to the ascii text generator (more work but for better output)
- [ ] finish all manpages
- [ ] complete filesys (because that's a thing i forgot about but exists)
- [x] colours
  - [x] fix link colours
  - [x] save what colours are what in local storage & then have it automatically set the colour on startup
  - [x] make an internal function that can append a string in a specific colour other than the default console colour???? just a thought
    - gonna steal the code from the link append command lol
    - ok that was too easy imma make one more function thats colour AND a link COMBINED!!!!
    - that was still easy
    - i really dont know what i would need it for yet BUT i have it????
    - i could try making a coloured ascii art???
  - [x] write manpage for colour
    - apparetly there's already a manpage for it so i just updated it
  - [x] make colour command a but more user friendly (have actual error messages or success messages when command is used wrongly/successfully)
  - [ ] command remastering
    - [x] make login command use a json object for usernames and passwords instead of if statements
    - [x] make a command where you can sign up with a new account (using cache data)

  - [x] my own version of wordle except it uses annoyingly long words
    - i think im gonna rewrite most of this wordle game because it is very stupid and dumb
    - i'm going to push this repo real fast so i can revert to this one if i screw everything up
    - i hate javascript so much

  - [x] optimise worble code because after a bit it gets slow
    - [x] after a bit it's slow
      - it's not local storage that's slowing it down
      - it's something in the printing of the worble history that is slowing everything down because when i use 'worble info' with a semi-long worble history, it's still slow
      - im trying removing a bunch of debug commands
      - the issue was because i had it appending to the page every single letter so what i did is that i made it append to a variable first and then append it to the site once it's done and now its so much faster
  - [x] fix the command history thing

  - [ ] command that rickrolls the user when used

### random notes

it would have been cool if i had git versions of this site since i started it but i dont (ha) 

https://github.com/caeserlettuce/dapug-console/issues/new?title=test&body=yes

this link will automatically set title and body text so i could make an in-site issue thingy maybe possibly