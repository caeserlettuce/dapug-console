# console

hello all you wonderful people of the interwebs

i again have a new project im working on

this is probably the biggest project ive ever done (with a whopping ~2000 lines of code) for my website

you can see it in action here: https://dapug.lol/console

it's probably not up to date 

but this repo is where i'll have the nightly versions of it because i'm getting tired of sending a zip of it through discord and downloading it on either my pc or laptop

so

that's it

have fun


## TODO:

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

  - [ ] my own version of wordle except it uses annoyingly long words
    - i think im gonna rewrite most of this wordle game because it is very stupid and dumb
    - i'm going to push this repo real fast so i can revert to this one if i screw everything up


### random notes

it would have been cool if i had git versions of this site since i started it but i dont (ha) 

https://github.com/caeserlettuce/dapug-console/issues/new?title=test&body=yes

this link will automatically set title and body text so i could make an in-site issue thingy maybe possibly