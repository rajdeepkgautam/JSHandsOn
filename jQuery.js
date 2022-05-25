//jQuery - JS Libraray which provides effective method for doing something in front-end and gives essentil 
//feautures like DOM Manipulation, AJAX interaction and so on ....

$("button").click(function(){
    $("p").hide();
    $("#learn").toggle();
    $(".intro").toggle();
})

//-------------------------------------------------------------------------------

//AJAX - 

$("button").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("learn").innerHTML = response.title;
        }
    })

})