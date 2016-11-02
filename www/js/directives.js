angular.module('starter.directives', [])

    .directive('priceChart', [function() {
        // Might use a resource here that returns a JSON array


        var FameGraph = function() {


        };

        return {
            restrict: "A",
            scope: {
                data: '='
            },
            link: function (scope, elem, attrs) {

               // console.log(scope.data);

                var element = elem[0];
                var context = element.getContext("2d");

                var items = _.map(scope.data.items, function(value) {
                    return value.avgPrice;
                });

                var config = {
                    margin : 5
                };

                var minPrice = _.min(items),
                    maxPrice = _.max(items),
                    priceDelta = maxPrice - minPrice;

                var scaleX = element.width / items.length;
                var scaleY = element.height / priceDelta;

               //console.log("minPrice", minPrice, "maxPrice", maxPrice, "priceDelta", priceDelta);

                // MARGIN
                context.translate(config.margin,config.margin);
                context.scale((element.width - config.margin * 2) / element.width, (element.height - config.margin * 2) / element.height);

                // AXIS

                context.save();
                context.lineWidth = 3;
                context.strokeStyle = "#000";

                context.moveTo(0,0);
                context.lineTo(0, element.height);
                context.closePath();
                context.stroke();

                context.moveTo(0,0);
                context.lineTo(0,0);
                context.closePath();
                context.stroke();

                context.restore();

                context.save();
                context.lineWidth = 0.3;
                context.strokeStyle = "#999";
                context.font = "Arial 12pt";
                context.textAlign = "center";

                for (var i = 0; i < 7; i++) {
                    context.beginPath();

                    var y = (6 - i) * (element.height / 6);

                    context.moveTo(0, y);
                    context.lineTo(element.width, y);

                    context.fillText((priceDelta / 6 * i + minPrice).toFixed(2), 10, y + 3);

                    //context.lineTo(300, i * (height / 6));
                    context.stroke();
                    context.closePath();
                }

                context.restore();

                // DRAW PATH

                context.save();
                context.save();

                context.scale(1,-1);
                context.translate(0, -element.height);

                context.scale(scaleX, parseInt(scaleY));
                context.translate(0, -minPrice);

                context.beginPath();
                context.moveTo(0, items[0]);

                _.each(items, function (value) {
                    context.lineTo(i++,  value);
                  //  console.log(parseInt(scaleY), value);
                });

                context.restore();
                //  context.lineJoin = 'round';
                context.lineWidth = 3;
                context.strokeStyle = "#f00";
                context.stroke();
                context.restore();



            }
        };
    }]);
