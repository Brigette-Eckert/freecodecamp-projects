//setting up graph container
const margin = {top: 50, right: 0, bottom: 100, left:200};
const width = 1500 - margin.left-margin.right;
const height = 800- margin.top - margin.bottom;

//Candidate IDs for API Call
const clinton =  {
    CID: "N00000019",
    FECCandID: "P00003392"
};

const trump = {
    CID:"N00023864",
    FCCandID: "P80001571"
};


//current donations from beginning of primaries to current -Blue for Clinton & Red from Trump.  Mouse over to see contributor
//D3.JSON

//drawing x and y axes lines
const x = d3.time.scale()
    .range([0, width]);
const y = d3.scale.linear()
    .range([height, 0]);

//x axis = month $ received
const xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(12);

//y axis = amount of $
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

