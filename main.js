//get ye colors
function getRandomColor(){
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

//vars for item count
var numSteps = 0;
var incrementSteps = 1;

//function to generate a new dragon
function Dragon(name, color, size, numEggs){
    this.name = name;
    this.color = color;
    this.size = size;
    this.numEggs = numEggs;
}

function drawDragDesc(dragon){
    var desc = "<div class='dragDesc'>";
    desc += "<div class='dragImg' style='background-color:" + dragon.color + ";'>";
    desc += "<img src='dragon.png'/>";
    desc += "</div>";
    desc += "<b>" + dragon.name + "</b>";
    desc += "<br/>";
    desc += "Size: " + dragon.size;
    desc += "<br/>";
    desc += "Eggs: " + dragon.numEggs;
    desc += "</div>";
    $("#dragTables").append(desc);
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

// Increase numWidgets every time produce-widget is clicked
$('#steps').on('click', function () {
	numSteps++;
});

//debug: generate a random dragon
$('#make_a_drag').on('click', function () {
    var newDragColor = getRandomColor();
    drags.push(new Dragon(generate_name('egyptian'), newDragColor, 1, 3));
    drawDragDesc(drags[numDrags]);
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