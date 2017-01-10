var d3 = require("d3");


$.get("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data){
    console.log(data);
});


//make graph x axis years = starting in 1950 going until 2015 - 5 year increments

var svgContainer =  d3.select("#main-container").append("svg")
                                                .attr(width, 500)
                                                .attr(height, 500)
                                                .append('g')