/**
 * Get the primary element ".wrapper" from the page
 * Hide the element on load, to be toggled in later use
 */
const browserDisplay = document.querySelector(".wrapper");
browserDisplay.style.display = "none";

/* Grab timer element from page */
const displayTime = document.querySelector("#time-remaining");

/* "Click" event listener for "Start" button - initializes timer */
document.querySelector("#start").addEventListener("click", startClickHandler);

/* Flag to determine if timer is already active */
let isActiveFlag = false;

/* Function to toggle the "is active" flag */
const toggleActiveFlag = () => {
  isActiveFlag = !isActiveFlag;
};

/**
 * Array object to store all references of setInterval timers
 * This is being done because if the "start" button is
 * pressed multiple times, the timer on display
 * will begin to flick between active timers,
 * and so they must be cleared
 */
let intervalsArray = [];

/* Function for clearing active timers */
const clearAllTimers = (timer) => {
  clearInterval(timer);
  intervalsArray = [];
};

/**
 * On "start" button click,
 * initialize timer and display
 * the primary element
 */
function startClickHandler() {
  /* Clear all active timers when function starts */
  intervalsArray.map(clearAllTimers);

  /**
   * Check if the function is already
   * active - if it is, reset the
   * "active" flag and call again
   * recursively
   * ===========================
   * Otherwise, simply toggle the active flag
   * to "true" and continue
   */
  if (isActiveFlag === true) {
    toggleActiveFlag();

    /* Recursive call */
    startClickHandler();
  } else {
    toggleActiveFlag();
  }

  /* {CONFIG} Number of minutes for the timer to run */
  const MINUTES = 5;

  /* Make primary element visible */
  visibilityToggler();

  /* Convert minutes to seconds for timer calculations */
  let timeInSeconds = 60 * MINUTES;

  /**
   * Initialize the timer so it appears instantly
   * Display the time
   * Decrement by one
   */
  const initializeTimer = () => {
    /* Set initial time as a formatted string */
    const formattedTime = formatTime(timeInSeconds);

    /* Update the text of the timer on the page */
    displayTime.innerText = formattedTime;

    /* Decrement the timer by 1 */
    timeInSeconds--;
  };

  initializeTimer();

  /**
   * Push new timer interval into
   * array object
   * ===============================
   * Every 1 second (1000ms), update
   * the timer on the page
   */
  intervalsArray.push(
    setInterval(() => {
      /* Set time as a formatted string */
      const formattedTime = formatTime(timeInSeconds);

      /**
       * Check if the timer has finished
       * If it has, hide the primary element
       * and clear the repeating interval
       */
      if (timeInSeconds < 0) {
        visibilityToggler();
        intervalsArray.map(clearAllTimers);

        toggleActiveFlag();
      }

      /* Update the text of the timer on the page */
      displayTime.innerText = formattedTime;

      /* Decrement the timer by 1 */
      timeInSeconds--;
    }, 1000)
  );
}

/**
 * Toggles the visibility/display
 * of the primary element (.wrapper)
 * between "block" and "none"
 */
function visibilityToggler() {
  /* If "none", change to "block", and vice versa */
  if (browserDisplay.style.display === "none")
    browserDisplay.style.display = "block";
  else browserDisplay.style.display = "none";
}

/**
 * Takes in time remaining in seconds
 * and formats the timer text to be
 * displayed on the web page
 * @param {Integer} seconds
 * @returns {String}
 */
function formatTime(seconds) {
  /* Calculate minutes and seconds remaining in timer */
  const minRemaining = Math.floor(seconds / 60);
  const secRemaining = seconds % 60;

  /**
   * Set time as a formatted string,
   * change display to include an extra 0
   * if the minutes are less than 10
   */
  const formattedTime =
    secRemaining < 10
      ? `${minRemaining}:0${secRemaining}`
      : `${minRemaining}:${secRemaining}`;

  return formattedTime;
}
