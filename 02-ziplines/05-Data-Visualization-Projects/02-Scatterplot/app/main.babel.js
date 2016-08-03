var format = d3.timeFormat("%x");
//setting up graph container
const margin = {top: 50, right: 0, bottom: 100, left:200};
const width = 1500 - margin.left-margin.right;
const height = 750- margin.top - margin.bottom;

var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

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

    const formatTime = d3.timeFormat("%M:%S");


    //need to convert
    //setting label values for axes
    let place = dataSet.map(d => d.place);
    //change : to . to be able to change string to int - gettting 0:00
    let time = dataSet.map(d => (formatTime(d.time.replace(":", "."))));
    //convert to  num format for string & round to nearest .5
    // console.log(place);
    console.log(time);

//drawing x and y axes lines
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


//creating and appending svg to page
    const svg = d3.select("#content").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');


//appending axes

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);


    svg.append("g")
        .attr("class", "axis")
        .call(yAxis);

});