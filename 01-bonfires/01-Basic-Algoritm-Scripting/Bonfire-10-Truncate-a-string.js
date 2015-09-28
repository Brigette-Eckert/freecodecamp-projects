function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num) {
  	var end = num-3;
  	var shortStr =  str.slice(0, end) + "...";
  	return shortStr;
  } else {
  	return str;
  };
};

truncate('A-tisket a-tasket A green and yellow basket', 11);

