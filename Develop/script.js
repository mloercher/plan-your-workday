// Get date at top of screen
const today = moment().format('LL');
$( "#currentDay").append("Today is "+ today);

// getting current, past and future hours to highlight appropriately
// var ninthHour = $("hour-9-number").text();

var thisHour = [$("#hour-9-number").text().split(":")[0], $("#hour-10-number").text().split(":")[0],$("#hour-11-number").text().split(":")[0]]

window.onload = function updateTimeSlotItems (){
    console.log(thisHour);
    const currentHour = moment().hour();
    console.log(currentHour)
    $("#hour-9-text-area").each( function(){
    if (parseInt(thisHour[0]) < currentHour){
        console.log(true);
        $(this).addClass("past")
    };
    if (parseInt(thisHour[0]) == currentHour){
        console.log("present");
        $(this).addClass("present")
    }
    else{
        console.log(false);
        $(this).addClass("future")
    }
    });
    $("#hour-10-text-area").each( function(){
        if (parseInt(thisHour[1]) < currentHour){
            console.log(true);
            $(this).addClass("past")
        };
        if (parseInt(thisHour[1]) == currentHour){
            console.log("present");
            $(this).addClass("present")
        }
        else{
            console.log(false);
            $(this).addClass("future")
        }
        });
         $("#hour-11-text-area").each( function(){
            if (parseInt(thisHour[2]) < currentHour){
                console.log(true);
                $(this).addClass("past")
            };
            if (parseInt(thisHour[2]) === currentHour){
                console.log("present");
                $(this).addClass("present")
            }
            else{
                console.log(false);
                $(this).addClass("future")
            }
            });
    
}

// window.onload = function updateTimeSlotItems(){
//     console.log(ninthHour);
//     console.log(moment().hour());
//     if(ninthHour == moment().hour() + ":00"){
//         console.log("yes");
//         document.getElementById("hour-9-text-area").style.backgroundColor = "#ff6961";
//     }
//     else{
//         document.getElementById("hour-9-text-area").style.backgroundColor = "#ffffff";
//         console.log("no");
//     };
// };

// var ninthHour = $("hour-9").text();
// var timeSlot;
 // var now = moment().hour();
    // if ("          " + now + ":00" == currentHour){
    // currentHour.closest().addClass("present")
    // }
    // else {
    //     currentHour.closest().addClass("past")
    //     };