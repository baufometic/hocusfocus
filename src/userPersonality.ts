// You have to ask yourself, Who Are You Really?

// this app will help you align with your true nature and take your hand as you discover your Limitless potential.
// You will find that the resilience of your Militant Mind is infinitely higher than you could have ever known.
// In the shake of a sparrows tail you will soon see just how much life has to offer. And what you haven't been told...

// DISPLAY CONTENT TO PEOPLE BASED ON MBTI
var Actions = {
	introvert: 'sitting down on a rainy day, reading a nice juicy book',
	extrovert: 'drinking coffee on a rooftop, making new friends'
};

const Titles = {
	introvert: `It's like ${Actions.introvert}`,
	extrovert: `It's like ${Actions.extrovert}`
};

// USER INFO
var UserData = [
	{ 'name': 'Peter Savva' },
	{ 'age': '34' },
	{ 'heightCM': '196' },
	{ 'city': 'london' },
	{ 'countryCode': 'EN' },
	{ 'personalityType': '' },
	{ 'localCurrency': 'gbp' },
	{ 'incomePerDay': '200' },
	{ 'diet': [
		{ 'morning': 'fruit' },
		{ 'afternoon': 'koftetes' },
		{ 'evening': 'vegetables' }
	]},
	{ 'goals': [
		{ 'a': '' },
		{ 'b': '' },
		{ 'c': '' }
	]}
];

// Diagnose Myers Briggs [MBTI] personality type
var PersonalityType = () => {
	var type = 'ENFP';
	UserData.personalityType = type;
};

// Allow user to select their goals from a grid box of multiple options
var Goals = () => {
	var a = 'money';
	var b = 'weight loss';
	var c = 'happiness';
	UserData.goals.a = a;
	UserData.goals.b = b;
	UserData.goals.c = c;
};

//* Transpose an expense into linear time format. i.e. Convert £cost to time.
var CostToTime = (priceOfItemInPence) => {
	var currency = UserData.localCurrency;
	var incomePerDayInLocalCurrency = UserData.incomePerDay;
	var incomePerMinute = ((incomePerDayInLocalCurrency / 24) / 60);

	var price = priceOfItemInPence;
	var timeToTargetInMinutes = '1440'; // one day
	var timeCostInMinutes = 'formula goes here';
	return(timeCostInMinutes);
};

//* Alert user of the effects of this spend, i.e. 'Spending £3.50 on this coffee will set your Mexico trip back 90 minutes!'
const AlertUserOfSpend = () => {

};

// Show real-time chart of overall progress
const ChartProgress = () => {

};

export {};
