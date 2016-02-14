$("form").submit(function(){
  var value = $("#searchbox").val();
  var searchValue = encodeURI(value);
  console.log(searchValue)
   var url = "https://en.wikipedia.org/w/api.php?action=query&titles="+searchValue+
"&prop=info&format=jsonfm"
  $.getJSON(url, function(data){
  console.log(data)
  })
})


