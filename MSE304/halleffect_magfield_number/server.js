
define(["PrairieRandom", "PrairieGeom", "QServer"], function(PrairieRandom, PrairieGeom, QServer) {

    var server = new QServer();

    server.getData = function(vid) {
	var rand = new PrairieRandom.RandomGenerator(vid);
	
        // correct answer to the question
	var thickness = rand.randInt(800, 1450);
	var width = rand.randInt(200, 800);
	var length = rand.randInt(50, 500);
	var current = rand.randInt(70, 150);
	var voltage = rand.randInt(2, 9);

	var denslarge = rand.randInt(8500, 10000);
	var amasslarge = rand.randInt(2000, 3000);
	var density = denslarge.toFixed(4)/10000.0;
	var amass = amasslarge.toFixed(2)/100.0;
        var atpervol = density*(6.0221409*10)/amass;
	atpervol = atpervol.toFixed(2);
	
	var params = {
	    thickness: thickness,
	    width: width,
	    length: length,
	    current: current,
	    voltage: voltage,
	    atpervol: atpervol
	};

        var asval = (voltage.toFixed(2)*1e-6*thickness.toFixed(2)*1E-9*1.602E-19*atpervol*1e28)/(current.toFixed(2)*1E-3);
	asval = asval.toFixed(2);
	
	var trueAnswer = {
            asval: asval
        };

        // OPTIONAL, if missing then
        // relTol = 0.01 and absTol = 1e-8 will be used
        var options = {
            relTol: 0.01, // relative tolerance for checking answers (OPTIONAL)
            absTol: 1e-8, // absolute tolerance (OPTIONAL)
        };

        // all the question data together
        var questionData = {
	    params: params,
            trueAnswer: trueAnswer,
            options: options, // OPTIONAL
        };
        return questionData;
    };

    // OPTIONAL gradeAnswer() function
    // if not present, then the submittedAnswer will be automatically checked against the trueAnswer
    server.gradeAnswer = function(vid, params, trueAnswer, submittedAnswer, options) {
        var score = 0;
        if (PrairieGeom.checkEqual(trueAnswer, submittedAnswer, options.relTol, options.absTol))
            score = 1;
        return {score: score};
    };

    return server;
});
