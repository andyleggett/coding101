$(function() {

    var console = $('#console');

    ////////////////////////////////////

    var anObject = {
        message: 'Click on this button',
        hasClicked: false,
        numberOfClicks: 0
    };

    ///////////////////////////////////

    console.text(anObject);
});