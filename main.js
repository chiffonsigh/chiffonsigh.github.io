//load the colors
var rawColors;
var dragColors;

$.getJSON("colors.json", function(data) {
  rawColors = data;
});

dragColors = $.map(rawColors, function(el) { return el });

//vars for item count
var numSteps = 0;
var incrementSteps = 1;

//function to generate a random dragon
function Dragon(name, color, size, numEggs){
    this.name = name;
    this.color = color;
    this.size = size;
    this.numEggs = numEggs;
}

var drags = new Array(); // store dose drags

//dragon counts
var numDrags = 0;

//Function to animate a progress bar
function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    //uncomment below line to add a progress % back in
    //$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
    $element.find('div').animate({ width: progressBarWidth }, .001);
}

function dragTableCreate(drag) {
    // Create table.
    var table = document.createElement('table');
    // Insert New Row for table at index '0'.
    var row1 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row1col1 = row1.insertCell(0);
    row1col1.innerHTML = 'Name: ' + drag.name;
    // Insert New Column for Row1 at index '1'.
    var row1col2 = row1.insertCell(1);
    row1col2.innerHTML = 'Color: ' + drag.color;
    // Insert New Column for Row1 at index '2'.
    var row1col3 = row1.insertCell(2);
    row1col3.innerHTML = 'Size: ' + drag.size;
    // Append Table into div.
    var div = document.getElementById('dragTables');
    div.appendChild(table);
}

// Increase numWidgets every time produce-widget is clicked
$('#steps').on('click', function () {
	numSteps++;
});

//debug: generate a dragon
$('#make_a_drag').on('click', function () {
    drags.push(new Dragon(generate_name('egyptian'), 'red', 1, 3));
    dragTableCreate(drags[numDrags]);
    numDrags++;
});

// Same for novice-widgeteer
$('#novice-widgeteer').on('click', function () {
    numNoviceWidgeteers++;

    // Deduct cost
    numWidgets -= noviceWidgeteerCost;
    
    // Increase cost for the next one, using Math.ceil() to round up
    noviceWidgeteerCost = Math.ceil(noviceWidgeteerCost * 1.1);
});

// Run UI update code every 10ms
window.setInterval(function () {

	//update progress bars
	// if(progressLogsStarted == 1){
	// 	while(progressLogs<100){
	// 		progressLogs = progressLogs + 1;
	// 		console.log('ProgressLogs: ' + progressLogs)
	// 		progress(progressLogs, $('#progress-chop-tree'));
	// 	}
	// 	progressLogsStarted = 0;
	// 	console.log(progressLogsStarted);
	// 	progressLogs = 0;
	// 	progress(progressLogs, $('#progress-chop-tree'));
	// 	numLogs = numLogs + incrementLogs;
	//     numPineNeedles = numPineNeedles + incrementPineNeedles;
	//     durabilityAxes = durabilityAxes - 1;
 //    	$("#log").prepend('<li>'+'You chopped down a tree and got '+ incrementLogs + ' logs and ' + incrementPineNeedles + ' pine needles.' + '</li>');
	// }

    // Novices add 1 per second (1/100 every 10ms)
    // numWidgets += (numNoviceWidgeteers * 1 / 100);

    // Masters add 5 per second (5/100 every 10ms)
    // numWidgets += (numMasterWidgeteers * 5 / 100);

    // Update the text showing how many widgets we have, using Math.floor() to round down
    // $('#steps-count').text(Math.floor(numSteps));
    $('#steps-count').text(numSteps);    

    // // Update the widgeteers with their current prices
    // $('#novice-widgeteer').text('Hire Novice Widgeteer - ' + noviceWidgeteerCost);
    // $('#master-widgeteer').text('Hire Master Widgeteer - ' + masterWidgeteerCost);

    // // Enable/disable the widgeteer buttons based on our numWidgets
    // $('#novice-widgeteer').prop('disabled', noviceWidgeteerCost > numWidgets);
    // $('#master-widgeteer').prop('disabled', masterWidgeteerCost > numWidgets);
}, 10);