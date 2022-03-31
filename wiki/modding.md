
## displaying text

### basic text appending
```javascript
displayAnim(message, speed, colour, link);
```
this is the default basic text displaying function i made, it basically does anything

| argument | type | description|
|---|---|---|
|`message`| `string, array` | the text you want to be added to the console |
|`speed`|`number`| how many milliseconds it takes to add a single character |
|`colour`|`String`| any colour value that is supported by css to be used to set the message's colour|
|`link`|`string`| any valid URL for the message to act as an `<a href>`|

`colour` and `link` are optional, and leaving them blank will just set them to their default value
(colour will inherit the default console colour, and link will just not make the message a link)<br><br>
`colour` and `link`  are aslo not supported for `array` inputs. (yet??)

### new lines

the previous function does not automatically made new lines before appending its message, so i made this

```javascript
displayNewline();
```

this just adds a new line... theres nothing really more to it

### appending from a user

this is the function that appends the `user@dapug.lol` message

```javascript
displayUser(message, user);
```
| argument | type | description|
|---|---|---|
|`message`| `string` | the message to append after the user |
|`user` | `string` | the username of the user

### clearing the console

```javascript
clearScreen();
```

it just clears the screen


### append text without animating it

first off, how lame, second, i guess i'll tell you

```javascript
displayAppend(message, in_id, hide, colour, link)
```

| argument | type | description|
|---|---|---|
|`message`| `string` | the text you want to append |
|`in_id`|`number`| the span ID you want it to append to *(if you want to just add it to a new one, set this value to `console_id + 1`)* |
|`colour`|`String`| any colour value that is supported by css to be used to set the message's colour|
|`link`|`string`| any valid URL for the message to act as an `<a href>`|