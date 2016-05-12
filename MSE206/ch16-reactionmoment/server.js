
define(["QServer", "PrairieRandom","sylvester", "PrairieGeom"  ], function( QServer, PrairieRandom, Sylvester, PrairieGeom ) {
    var $V = Sylvester.Vector.create;

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid); // creates random number generator
        var L = rand.randInt(30, 50)*0.1;
 	var w = rand.randInt(40, 90)*0.1;

	var M = w*L*L/12.;

	var params = {
	    L: L.toFixed(2),
	    w: w.toFixed(2)
        }; // the above defines the parameters in the question file   
        var trueAnswer = {
	    M: M
        };  // the above defines the true answer in the question file
        var questionData = {
            params: params,
            trueAnswer: trueAnswer
        };
        return questionData;
    };

    return server;
});
