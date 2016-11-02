angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  var chartdata_60 = {"name":"Cristiano Ronaldo","price":0.66598,"items":[{"key":"2016-08-18T09:59:43.837Z","avgPrice":0.8,"sumQty":1},{"key":"2016-08-19T09:59:43.837Z","avgPrice":0.8,"sumQty":1},{"key":"2016-08-20T09:59:43.837Z","avgPrice":0.8,"sumQty":1},{"key":"2016-08-21T09:59:43.837Z","avgPrice":0.8,"sumQty":1},{"key":"2016-08-22T09:59:43.837Z","avgPrice":1.02,"sumQty":1},{"key":"2016-08-23T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-24T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-25T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-26T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-27T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-28T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-29T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-30T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-08-31T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-01T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-02T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-03T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-04T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-05T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-06T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-07T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-08T09:59:43.837Z","avgPrice":1.01,"sumQty":1},{"key":"2016-09-09T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-10T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-11T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-12T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-13T09:59:43.837Z","avgPrice":1.01,"sumQty":1},{"key":"2016-09-14T09:59:43.837Z","avgPrice":1.01,"sumQty":1},{"key":"2016-09-15T09:59:43.837Z","avgPrice":1.01,"sumQty":1},{"key":"2016-09-16T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-17T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-18T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-19T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-20T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-21T09:59:43.837Z","avgPrice":1.03,"sumQty":1},{"key":"2016-09-22T09:59:43.837Z","avgPrice":0.96,"sumQty":1},{"key":"2016-09-23T09:59:43.837Z","avgPrice":0.96,"sumQty":1},{"key":"2016-09-24T09:59:43.837Z","avgPrice":0.96,"sumQty":1},{"key":"2016-09-25T09:59:43.837Z","avgPrice":0.96,"sumQty":1},{"key":"2016-09-26T09:59:43.837Z","avgPrice":0.8,"sumQty":1},{"key":"2016-09-27T09:59:43.837Z","avgPrice":0.81,"sumQty":1},{"key":"2016-09-28T09:59:43.837Z","avgPrice":0.81,"sumQty":1},{"key":"2016-09-29T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-09-30T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-01T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-02T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-03T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-04T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-05T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-06T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-07T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-08T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-09T09:59:43.837Z","avgPrice":0.69,"sumQty":1},{"key":"2016-10-10T09:59:43.837Z","avgPrice":0.67,"sumQty":1},{"key":"2016-10-11T09:59:43.837Z","avgPrice":0.67,"sumQty":1},{"key":"2016-10-12T09:59:43.837Z","avgPrice":0.67,"sumQty":1},{"key":"2016-10-13T09:59:43.837Z","avgPrice":0.67,"sumQty":1},{"key":"2016-10-14T09:59:43.837Z","avgPrice":0.67,"sumQty":1},{"key":"2016-10-15T09:59:43.837Z","avgPrice":0.67,"sumQty":1},{"key":"2016-10-16T09:59:43.837Z","avgPrice":0.67,"sumQty":1}],"currentPrice":0.67,"price24h":0.67,"change24h":0,"change24hPercent":0,"price7d":0.69,"change7d":-0.02,"change7dPercent":-2.9};
  var chartdata_10 = {"name":"Cristiano Ronaldo","price":0.65707,"items":[{"key":"2016-10-23T09:42:37.819Z","avgPrice":0.67,"minPrice":0.67,"maxPrice":0.67,"sumQty":1},{"key":"2016-10-24T09:42:37.819Z","avgPrice":0.67,"minPrice":null,"maxPrice":null,"sumQty":1},{"key":"2016-10-25T09:42:37.819Z","avgPrice":0.67,"minPrice":0.67,"maxPrice":0.67,"sumQty":1},{"key":"2016-10-26T09:42:37.819Z","avgPrice":0.66,"minPrice":0.67,"maxPrice":4.34,"sumQty":1},{"key":"2016-10-27T09:42:37.819Z","avgPrice":0.66,"minPrice":null,"maxPrice":null,"sumQty":1},{"key":"2016-10-28T09:42:37.819Z","avgPrice":0.66,"minPrice":null,"maxPrice":null,"sumQty":1},{"key":"2016-10-29T09:42:37.819Z","avgPrice":0.66,"minPrice":null,"maxPrice":null,"sumQty":1},{"key":"2016-10-30T08:42:37.819Z","avgPrice":0.66,"minPrice":null,"maxPrice":null,"sumQty":1},{"key":"2016-10-31T09:42:37.819Z","avgPrice":0.66,"minPrice":0.66,"maxPrice":0.66,"sumQty":1},{"key":"2016-11-01T09:42:37.819Z","avgPrice":0.66,"minPrice":null,"maxPrice":null,"sumQty":1}],"currentPrice":0.66,"price24h":0.66,"change24h":0,"change24hPercent":0,"price7d":0.67,"change7d":-0.01,"change7dPercent":-1.49};

  var padding = 40,
      width = 500,
      height = 300;

  $scope.graph = {'width': width, 'height': height};


  $scope.points = _.map(chartdata_60.items, function(value, key) {
                    return {
                      'price': value.avgPrice, 
                      'date' : new Date(value.key), 
                      'min' : value.avgPrice - 0.05, 
                      'max' : value.avgPrice + 0.03
                    };
                });

  var dates = _.map($scope.points, function(value) {
      return value.date;
  });

  var mindate = _.min(dates),
      maxdate = _.max(dates);

  var xScale = d3.time.scale().domain([mindate, maxdate]).range([padding, width - padding]);  
  var yScale = d3.scale.linear().range([height - padding, padding]);

  xScale.domain(d3.extent($scope.points, function(d) {return d.date}));  
  yScale.domain(d3.extent($scope.points, function(d) {return d.price}))

  $scope.line = d3.svg.line()
    .x(function(d) {return xScale(d.date);})
    .y(function(d) {return yScale(d.price);});


var svg = d3.select("svg");

var rectangles = svg.selectAll("rect")
                          .data($scope.points)
                          .enter()
                          .append("rect");

var rectangleAttributes = rectangles
                       .attr("x", function (d) { return xScale(d.date) - 2; })
                       .attr("y", function (d) { return yScale(d.max); })
                       .attr("width", 4 )
                       .attr("height", function (d) {                         
                          return yScale(d.min) - yScale(d.max); 
                       })
                       .style("fill", function(d) {
                         return "#7bf2ff";
                       });

var en_GB = d3.locale(
{
  "decimal": ".",
  "thousands": ",",
  "grouping": [3],
  "currency": ["£", ""],
  "dateTime": "%a %b %e %X %Y",
  "date": "%m/%d/%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
  
console.log(en_GB);

  // define the y axis
  var yAxis = d3.svg.axis()
      .orient("left")
     // .ticks(10)
      .tickFormat(en_GB.numberFormat("$.2f"))
      .scale(yScale);
  
  // define the y axis
  var xAxis = d3.svg.axis()
      .orient("bottom")
      .tickFormat(en_GB.timeFormat("%m.%d"))
      .scale(xScale);


  // draw y axis with labels and move in from the size by the amount of padding
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate("+padding+",0)")
      .call(yAxis);

  // draw x axis with labels and move to the bottom of the chart area
  svg.append("g")
      .attr("class", "xaxis axis")   // give it a class so it can be used to select only xaxis labels  below
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(xAxis);
    /*  
  // now rotate text on x axis
  // solution based on idea here: https://groups.google.com/forum/?fromgroups#!topic/d3-js/heOBPQF3sAY
  // first move the text left so no longer centered on the tick
  // then rotate up to get 45 degrees.
 svg.selectAll(".xaxis text")  // select all the text elements for the xaxis
    .attr("transform", function(d) {
        return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
  });
*/
  



})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
