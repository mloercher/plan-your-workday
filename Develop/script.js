// Get date at top of screen
const today = moment().format("LL");
$("#currentDay").append("Today is " + today);
var momentHour = moment().hour();

//Vars
var saveBtn = $(".saveBtn");

function timeBlock() {
  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));
    if (momentHour > currentHour) {
      $(this).addClass("past");
    } else if (momentHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
timeBlock();

//when save button is clicked, store input to local storage
saveBtn.on("click", function () {
   let time = $(this).siblings(".hour").text();
   let usrTxt = $(this).siblings(".description").val();
  console.log(usrTxt);
  console.log(time);
  localStorage.setItem(time, usrTxt);
});

//create a function to keep local storage on page reload
function storeEl() {
  $(".hour").each(function () {
    let theHour = $(this).text();
    let storedText = localStorage.getItem(theHour);

    if (storedText !== null) {
      $(this).siblings(".description").val(storedText);
    }
  });
}

//call storeEl function
storeEl();

// getting current, past and future hours to highlight appropriately
// var ninthHour = $("hour-9-number").text();

// var thisHour = [$("#hour-9-number").text().split(":")[0], $("#hour-10-number").text().split(":")[0],$("#hour-11-number").text().split(":")[0],$("#hour-12-number").text().split(":")[0],$("#hour-13-number").text().split(":")[0],$("#hour-14-number").text().split(":")[0],$("#hour-15-number").text().split(":")[0], $("#hour-16-number").text().split(":")[0], $("#hour-17-number").text().split(":")[0]]

// window.onload = function updateTimeSlotItems (){
//     console.log(thisHour);
//     const currentHour = moment().hour();
//     console.log(currentHour)
//     $("#hour-9-text-area").each( function(){
//     if (parseInt(thisHour[0]) < currentHour){
//         console.log(true);
//         $(this).addClass("past")
//     };
//     if (parseInt(thisHour[0]) === currentHour){
//         console.log("present");
//         $(this).addClass("present")
//     }
//     else{
//         console.log(false);
//         $(this).addClass("future")
//     }
//     });
//     $("#hour-10-text-area").each( function(){
//         if (parseInt(thisHour[1]) < currentHour){
//             console.log(true);
//             $(this).addClass("past")
//         };
//         if (parseInt(thisHour[1]) === currentHour){
//             console.log("present");
//             $(this).addClass("present")
//         }
//         else{
//             console.log(false);
//             $(this).addClass("future")
//         }
//         });
//          $("#hour-11-text-area").each( function(){
//             if (parseInt(thisHour[2]) < currentHour){
//                 console.log(true);
//                 $(this).addClass("past")
//             };
//             if (parseInt(thisHour[2]) === currentHour){
//                 console.log("present");
//                 $(this).addClass("present")
//             }
//             else{
//                 console.log(false);
//                 $(this).addClass("future")
//             }
//             });
//             $("#hour-12-text-area").each( function(){
//                 if (parseInt(thisHour[3]) < currentHour){
//                     console.log(true);
//                     $(this).addClass("past")
//                 };
//                 if (parseInt(thisHour[3]) === currentHour){
//                     console.log("present");
//                     $(this).addClass("present")
//                 }
//                 else{
//                     console.log(false);
//                     $(this).addClass("future")
//                 }
//                 });
//                 $("#hour-13-text-area").each( function(){
//                     if (parseInt(thisHour[4]) < currentHour){
//                         console.log(true);
//                         $(this).addClass("past")
//                     };
//                     if (parseInt(thisHour[4]) === currentHour){
//                         console.log("present");
//                         $(this).addClass("present")
//                     }
//                     else{
//                         console.log(false);
//                         $(this).addClass("future")
//                     }
//                     });
//                     $("#hour-14-text-area").each( function(){
//                         if (parseInt(thisHour[5]) < currentHour){
//                             console.log(true);
//                             $(this).addClass("past")
//                         };
//                         if (parseInt(thisHour[5]) === currentHour){
//                             console.log("present");
//                             $(this).addClass("present")
//                         }
//                         else{
//                             console.log(false);
//                             $(this).addClass("future")
//                         }
//                         });
//                         $("#hour-15-text-area").each( function(){
//                             if (parseInt(thisHour[6]) < currentHour){
//                                 console.log(true);
//                                 $(this).addClass("past")
//                             };
//                             if (parseInt(thisHour[6]) === currentHour){
//                                 console.log("present");
//                                 $(this).addClass("present")
//                             }
//                             else{
//                                 console.log(false);
//                                 $(this).addClass("future")
//                             }
//                             });
//                             $("#hour-16-text-area").each( function(){
//                                 if (parseInt(thisHour[7]) < currentHour){
//                                     console.log(true);
//                                     $(this).addClass("past")
//                                 };
//                                 if (parseInt(thisHour[7]) === currentHour){
//                                     console.log("present");
//                                     $(this).addClass("present")
//                                 }
//                                 else{
//                                     console.log(false);
//                                     $(this).addClass("future")
//                                 }
//                                 });
//                                 $("#hour-17-text-area").each( function(){
//                                     if (parseInt(thisHour[8]) < currentHour){
//                                         console.log(true);
//                                         $(this).addClass("past")
//                                     };
//                                     if (parseInt(thisHour[8]) === currentHour){
//                                         console.log("present");
//                                         $(this).addClass("present")
//                                     }
//                                     else{
//                                         console.log(false);
//                                         $(this).addClass("future")
//                                     }
//                                     });

// }

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
