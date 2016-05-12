# PLconvert-examples
Examples of randexam and byteshelf problems to be converted to PrairieLearn.

### MSE206
The `randexam-questions` directory contains latex files for individual questions; each question may have one or more variants, and also may reference specific images in the `images` directory. These are multiple choice questions, and need to be converted into JSON versions of MultipleChoice questions. Note also that the directory names cannot have `.`, so those need to be converted to `-`.

**Examples to be converted:**
* ch14.triaxial.tex
* ch17.constraints.tex

*This should be done with an automated script, not by hand.* Please write a script that
1. Given a source directory (`randexm-questions`) and a target directory,
2. Converts each tex file in the source directory into a corresponding question in the target directory (with possible variants for each variants) into an `info.json` file, including correct access lists for images,
3. Copies over images into the directory.

### MSE304
The `xml` files are inputs for ByteShelf. These have been converted by hand into the directories included, which have at least five files:

	answer.html
	client.js
	info.json
	question.html
	server.js

The primary files that need to be constructed are `server.js` (which will create the variables for the question and answers); `info.json` contains information about files that are needed to be accessed. The two HTML files, `question.html` and `answer.html` include references to the variables.

**Example to be converted:**
* ??

