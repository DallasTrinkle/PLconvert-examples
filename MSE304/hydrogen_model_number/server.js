
define(["PrairieRandom", "PrairieGeom", "QServer"], function(PrairieRandom, PrairieGeom, QServer) {

    var server = new QServer();

    server.getData = function(vid) {
	var rand = new PrairieRandom.RandomGenerator(vid);
	
        // correct answer to the question
	var index = rand.randInt(1, 5);
	
	var mat = ["Si", "Ge", "GaAs", "GaP", "InAs"];
	var dopant = ["B", "B", "Mg", "Zn", "Zn"];
	var epsr = [11.9, 16.0, 12.9, 11.1, 15.15];
	var egap = [1.11, 0.67, 1.43, 2.26, 0.354];
	var effmass = [0.16, 0.044, 0.082, 0.14, 0.026];

	var params = {
	    mat: mat[index-1],
	    dopant: dopant[index-1],
	    epsr: epsr[index-1],
	    egap: egap[index-1],
	    effmass: effmass[index-1]
	};

	var energy = 13.60 * 1000 * effmass[index-1]/(epsr[index-1]*epsr[index-1]);
	energy = energy.toFixed(2);

	var trueAnswer = {
	    energy: energy
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
