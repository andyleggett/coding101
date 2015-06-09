var console = $('#console');

var buttonObject = {
    message: 'Click on this button',
    hasClicked: false,
    clickCount: 0,
    user: {name: 'Andrew', userId: 122},
    clickTimes: ['4.15pm', '5.23pm', '10.34pm']
};


var theMessage = buttonObject.message;

var numberOfClicks = buttonObject.clickCount;

var nameOfUserToClick = buttonObject.user.name;

var lastClickTime = buttonObject.clickTimes[2];


console.text('');