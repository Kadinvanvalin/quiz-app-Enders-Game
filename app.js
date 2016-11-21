$(function() {
   
    var state= {
    questions: ["What device did Ender use to detroy the Formic homeworld?", 
    "Who said in the final battle, The enemys gate is down",
    "In Ender's Game, what is the first army Ender Wiggin is assigned to?",
    "How is Mazer still alive?", "Commander Graff is so stressed out during the events of the book he did what."
    ],
    answers:[ ["The little Doctor Device", "A Nuclear missle","His charming personality", "He didn't destroy it" ],
     ["Bean","Perta","Graff","Valentine"], 
     ["Salamander","Rat","Rabbit","Dragon"], 
     ["The miracle of relativity.","They cloned him.","He was frozen in a ship in space.","Large doses of ITworks"] ,
     ["Gained weight","Started killing the children for fun","Lost his hair","Drank constantly"]  
     ],
    i:0,
    rightAns:0,
     insults:["incorrect: What are you a bugger?", "incorrect: well thats just stupid", "incorrect: did you even read the book?!", "incorrect: well thats just stupid", "incorrect: did you even read the book?!"],
     correct: ["correct: What are you Bean?"," correct: what are you a third?"," correct: thats just luck"," correct: what are you a third?"," correct: thats just luck"]


}; 
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
 $(".close").click(function(event){
              $("#myModal").css("display", "none");
              });
  
console.log(state.answers[0]);
   function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
  }

$("#js-quiz").click(function(event){
  event.preventDefault();
  $(".focal").toggleClass("hidden");
  $(".results").toggleClass("hidden");
  $(".quiz").toggleClass("hidden");
  $(".test").toggleClass("hidden");
  });



      var renderQuiz = function(state, ansElement, qElement, results) {
      
    var itemsHTML = shuffle(state.answers[state.i].slice()).map(function(answers) {
           return '<input type="radio" name="options"  value="'+ answers + '" class="">'+ answers +'</input>';
            
    });
    qElement.html(state.questions[state.i]);
    ansElement.html(itemsHTML +'<button id="enterans" type="submit">submit</button>');
    results.html("You are on question" + (state.i+1)  + "of 5");

};


    renderQuiz(state, $('.test'), $(".quiz"), $(".results"));
     
  console.log(state.answers[0]);



   $(document).on("click", "#enterans", function(event){
  event.preventDefault();
      if(state.i <4){
        if($('input[name=options]:checked').val()===state.answers[state.i][0]){
            state.i++;
            state.rightAns++
            renderQuiz(state, $('.test'), $(".quiz"), $(".results"));
                      toastr.success(state.correct[state.i]);

        }
     
         else{
            state.i++;
            renderQuiz(state, $('.test'), $(".quiz"), $(".results"));
            toastr.error(state.insults[state.i]);
        }
      }
      
      else{
        $(".quiz").toggleClass("hidden");
        $(".test").toggleClass("hidden");
         $('.results').html("You got "+ state.rightAns +" out of 5 right");
      }



  });


// $('.submit').click(function(event) {
// //    event.preventDefault();
//   state.i++;
//    renderQuiz(state, $('.test'),$(".questions"));
//    console.log(state);
   
// });    








});
