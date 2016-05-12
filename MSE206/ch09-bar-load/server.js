
define(["QServer", "PrairieRandom","sylvester", "PrairieGeom"  ], function( QServer, PrairieRandom, Sylvester, PrairieGeom ) {
    var $V = Sylvester.Vector.create;

    var server = new QServer();

    server.getData = function(vid) {
        var rand = new PrairieRandom.RandomGenerator(vid); // creates random number generator
        var L = rand.randInt(50, 80)*1.0;
        var x = L - rand.randInt(10, 30);
	var Lscale = 1.E-2;
        var A = rand.randInt(400, 600)*0.1;
	var Ascale = 1.E-4;
	var E = rand.randInt(7, 25)*10;
	var Escale = 1.E9;
	var nu = rand.randInt(28,35)*0.01;
 	var F = rand.randInt(40, 90)*0.1;
	var Fscale = 1.E3;

	var FAscale = 1.E3;
	var FA = (Fscale/FAscale)*F*(L-x)/L;

	var params = {
	    L: L.toFixed(1),
	    x: x.toFixed(1),
	    A: A.toFixed(2),
	    E: E.toFixed(1),
	    nu: nu.toFixed(2),
	    F: F.toFixed(2)
        }; // the above defines the parameters in the question file   
        var trueAnswer = {
	    FA: FA
        };  // the above defines the true answer in the question file
        var questionData = {
            params: params,
            trueAnswer: trueAnswer
        };
        return questionData;
    };

    return server;
});
