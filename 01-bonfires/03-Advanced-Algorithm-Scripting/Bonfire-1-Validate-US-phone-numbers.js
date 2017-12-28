// Return true if the passed string is a valid US phone number
// The user may fill out the form field any way they choose as long as it is a valid US number.


function telephoneCheck(str) {
	//removing non digits from number
	var digits = str.replace(/[^\d]/g, "");
  //allowed chars (), num, -, " " 
  //check for chars other than allowed chars
  if(/[^/\-/\d\s()]/g.test(str)) return false;
  //check that ( is followed by ) and contain 3 digits in between
 if(/\((?!\d\d\d\))/g.test(str)) return false;
  //check that ) is preeceed by (
 if(str.indexOf(')') != -1 && str.indexOf('(') == -1) return false;
  
  //
  //min length 10, area code + number w/o puncuation. max lenght 16 country code + puncuation
  //check for min & max length
  if(str.length < 10 || str.length > 16) return false;
  //checking for country code.
  //if country code given, check first digit
  if(digits.length == 11 && digits[0] != 1) return false;
  console.log(true);
  return true;
}

// Free Code Camp Tests
telephoneCheck("2(757)6227382");
telephoneCheck("(6505552368)");
telephoneCheck("123**&!!asdf#");
telephoneCheck("1 555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("1 555)555-5555");

