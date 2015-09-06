function end(str, target) {
	 var phrase= str.split(/\s/g);
	if(str.substr(str.length-1) === target || phrase[phrase.length-1] === target){
		return (true)
	} else {
		return (false)

	};
};

end('Bastian', 'n');
end('Meow', 'e');
end('He has to give me a new name', 'name');
