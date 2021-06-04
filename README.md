# 5 Minute "Hush" Countdown Timer for OBS

Link for OBS: https://honath.github.io/no-talking-timer/

## Overview

This is a basic timer to be used as an OBS Browser Source - it is set to a default time of 5 minutes,
and for the duration of the time, a timer and an image is displayed. When the timer ends,
the timer and image is hidden again.

## Usage

Feel free to add this as a browser source and use it inside of your own streams.

You can change the configuration by forking and cloning this repository -
change the "MINUTES" variable in the `script.js` file to the amount of minutes of your choosing,
and then host the document on whichever hosting service you prefer. I am using GitHub.

You can view how to add a browser source to OBS
[here.](https://blog.streamlabs.com/introducing-browser-source-interaction-for-streamlabs-obs-d8fc4dcbb1fb)

### Recommended OBS Window Settings for Browser Source

- Width: 500
- Height: 1080
- This was designed to be placed over a webcam at the bottom of the screen, so that the button is hidden off-screen.

### Tips for Using this Browser Source

- You do not need to have the actual web page open in a tab - instead, `right click` on the `Browser Source` **inside** of your `Scene`.
  Then, click `Interact` and OBS will open a new, small window with the `'Start'` button visible and clickable.
  You can use this instead of an open window or tab in your browser, and is my recommendation.
- Feel free to use custom CSS in the source properties. The image and timer are inside of an element with a class of `.wrapper` - you
  should be able to select it from there, and move it around if needed.
- Learn more about CSS at [W3Schools.com](https://www.w3schools.com/css/default.asp)

### Additional Customization within OBS

##### You can change the font for all elements using custom CSS. Here is the styling for the font + its selector:

```
* {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #fff;
  -webkit-text-stroke: 2px black;
}
```

##### Here are the "Start" button's CSS properties + its selector, for your custom CSS use:

```
#start {
  font-size: 5rem;
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  color: #000;
  border: none;
}
```

## File Structure

- ./ (Root folder)
  - [index.html](https://github.com/honath/no-talking-timer/blob/master/index.html) (Document structure)
  - [style.css](https://github.com/honath/no-talking-timer/blob/master/style.css) (Styling for entire document)
  - [script.js](https://github.com/honath/no-talking-timer/blob/master/script.js) (Manages display of the primary element and function of the timer)
  - ./images/ (Folder for containing any images)
    - [shush.jpg](https://github.com/honath/no-talking-timer/blob/master/images/shush.jpg) (Image used in browser source)
  - README.md (This README document)

## Changelog

#### 6/4/2021 - v1.0a (HOTFIX)
- Slight changes to the README
- Timer interval was not clearing properly after timer finished. This should be resolved now.

#### 6/4/2021 - v1.0

- Initial release
- Features 5 minute timer
- Timer is hidden initially - is visible after "Start" button is pressed, until the timer ends

## Planned Improvements

- Add a "Pause" button
- Add a "Stop" button
- Make buttons prettier
- Make "hush" image danker

## Bugs and Suggestions

Please report any bugs as an [issue](https://github.com/honath/no-talking-timer/issues) here on GitHub - suggestions are also welcome.
