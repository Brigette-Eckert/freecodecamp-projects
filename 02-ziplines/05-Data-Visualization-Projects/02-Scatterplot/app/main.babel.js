var format = d3.timeFormat("%x");

//setting up outer svg
const margin = {top: 50, right: 0, bottom: 100, left:200};
const width = 1500 - margin.left-margin.right;
const height = 750- margin.top - margin.bottom;

//creating svg
const svg = d3.select("#content").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

//setting up axes
let x = d3.scale.linear()
    .domain(d3.extent(time))
    .range([0, width]);

let y = d3.scale.linear()
    .domain(d3.extent(place))
    .range([0, height]);

//x axis = time
const xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(12);

//y axis = place
const yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(10);


// creating dots to display data  & linear line btw dots
const dot = svg.selectAll("circle")
    .data(time)
    .enter()
    .append("circle");
// .interpolate('linear');

// formating time
const formatTime = d3.time.format("%M:%S");


//setting up data handlingS
let place = dataSet.map(d => d.place);
//change : to . to be able to change string to int - gettting 0:00
let time = dataSet.map(d => {
    let dateObj = formatTime.parse(d.time);
    let sec =  dateObj.getSeconds();
    let min =  dateObj.getMinutes();
    return min * 60 + sec;
});

//convert to  num format for string & round to nearest .5
// console.log(place);
console.log(time);

//want to display time as xx:xx to user



var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

//get data and visualze
d3.json(url, function(json) {
    let data = json;
    // console.log(json);
    let dataSet = data.map(function(item){

        return {
            name: item.Name,
            place: item.Place,
            time: item.Time,
            year: item.Year,
            nat: item.Nationality,
            reason: item.Doping
        }
    });


    //visualize data

//appending axes

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);


    svg.append("g")
        .attr("class", "axis")
        .call(yAxis);

//appending data
    svg.selectAll('circle')
        .data()
        .attr('d', circle(data))
        .call(xAxis);

});