const today = moment().format('LL');
$( "#currentDay").append("Today is "+ today);
var currentHour = $(".hour").text();

// getting current, past and future hours to highlight appropriately
var ninthHour = $("hour-9-number").text();

window.onload = function updateTimeSlotItems(){
    console.log(ninthHour);
    console.log(moment().hour());
    if(ninthHour = moment().hour() + ":00"){
        console.log("yes");
        document.getElementById("hour-9-text-area").style.backgroundColor = "#ff6961";
    }
    else{
        document.getElementById("hour-9-text-area").style.backgroundColor = "#ffffff";
        console.log("no");
    };
};

// var ninthHour = $("hour-9").text();
// var timeSlot;
 // var now = moment().hour();
    // if ("          " + now + ":00" == currentHour){
    // currentHour.closest().addClass("present")
    // }
    // else {
    //     currentHour.closest().addClass("past")
    //     };

