//your JS code here. If required.
function daysOfAYear(years){
	function isEapYear(y){
		return(y % 4 === 0 && y % 4 !== 0) || (y % 400 === 0);
	}
	return isLeapYear(years) ? 366 : 365;
}