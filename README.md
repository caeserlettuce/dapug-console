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

- [ ] url parameters
  - [x] automatically set debug to true when it's set in the url
  - [ ] automatically run commands at startup depending on the url param
    - (this doesnt work)
    - actually i thought if an idea that may work hold on
  - [ ] make a command that will generate a link based on what you add to the link thingy
  - [ ] one that sets text colour and background colour
- [x] switch the `convert` command to be ran procedurally (remove the massive block of if/else statements and replace it with something that will automatically detect what variable to use depending on in/out units so the code is cleaner and fancier) (maybe steal some code from the manpage command lol)
- [ ] more fun ascii arts
- [ ] finish all manpages
- [ ] complete filesys (because that's a thing i forgot about but exists)
- [ ] colours
  - [x] fix link colours
  - [x] save what colours are what in local storage & then have it automatically set the colour on startup
  - [ ] make an internal function that can append a string in a specific colour other than the default console colour???? just a thought
  - [x] write manpage for colour
    - apparetly there's already a manpage for it so i just updated it
  - [x] make colour command a but more user friendly (have actual error messages or success messages when command is used wrongly/successfully)