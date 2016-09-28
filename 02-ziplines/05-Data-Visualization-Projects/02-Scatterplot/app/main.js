"use strict";

var format = d3.timeFormat("%x");

//setting up outer svg
var margin = { top: 50, right: 0, bottom: 100, left: 200 };
var width = 1500 - margin.left - margin.right;
var height = 750 - margin.top - margin.bottom;

//creating svg
var svg = d3.select("#content").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

//setting up axes
var x = d3.scale.linear().domain(d3.extent(time)).range([0, width]);

var y = d3.scale.linear().domain(d3.extent(place)).range([0, height]);

//x axis = time
var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(12);

//y axis = place
var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);

// creating dots to display data  & linear line btw dots
var dot = svg.selectAll("circle").data(time).enter().append("circle");
// .interpolate('linear');

// formating time
var formatTime = d3.time.format("%M:%S");

//setting up data handlingS
var place = dataSet.map(function (d) {
    return d.place;
});
//change : to . to be able to change string to int - gettting 0:00
var time = dataSet.map(function (d) {
    var dateObj = formatTime.parse(d.time);
    var sec = dateObj.getSeconds();
    var min = dateObj.getMinutes();
    return min * 60 + sec;
});

//convert to  num format for string & round to nearest .5
// console.log(place);
console.log(time);

//want to display time as xx:xx to user


var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

//get data and visualze
d3.json(url, function (json) {
    var data = json;
    // console.log(json);
    var dataSet = data.map(function (item) {

        return {
            name: item.Name,
            place: item.Place,
            time: item.Time,
            year: item.Year,
            nat: item.Nationality,
            reason: item.Doping
        };
    });

    //visualize data

    //appending axes

    svg.append("g").attr("class", "axis").attr("transform", "translate(0," + height + ")").call(xAxis);

    svg.append("g").attr("class", "axis").call(yAxis);

    //appending data
    svg.selectAll('circle').data().attr('d', circle(data)).call(xAxis);
});