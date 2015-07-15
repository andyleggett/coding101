var console = $('#console');

var patient = {
	name: 'John Smith',
	age: 34,
	height: 160,
	weight: 100,
	bloodPressure: {
		systolic: 150,
		diastolic: 95
	},
	restingHeartRate: 87,
	BMI: 39,
	status: 'obese'
};

var patientHeartRate = subject.restingHeartRate;
var diastolic = patient.bloodPressure.diastolic;

patient.bloodPressure.diastolic = 90;
patient.BMI = 35;


var buttonSettings = {
	message: 'Like this',
	width: 120,
	height: 30
	color: '#32ad33'
};


var likeInfo = {
    likeCount: 3,
    clickInfo: [{time: '4.15pm', userId: 2032}, {time: '5.23pm', userId: 1031}, {time: '10.34pm', userId: 675}]
};


var theMessage = buttonSettings.message;

var numberOfLikes = likeInfo.likeCount;

var idOfFirstUserToClick = likeInfo[0].userId;

var lastClickTime = buttonObject.clickInfo[2].time;


console.text('');