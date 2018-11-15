$(document).ready(function(){
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/group?id=5128581,2643743,6455259&units=imperial&appid=ed7d4bd569ea47d6977b23309d12cd51",
    type: "GET",
    dataType: "JSON",
    success: function(data) {
            // print all of the JSON to the console
            console.log(data);

            console.log(data.list[0].main.temp);
            console.log(data.list[1].main.temp);
            console.log(data.list[2].main.temp);

            $("#1").html("It's currently " + data.list[0].main.temp + " degrees" + " in " + data.list[0].name + ".");  
            $("#2").html("It's currently " + data.list[2].main.temp + " degrees" + " in " + data.list[2].name + ".");
            $("#3").html("It's currently " + data.list[1].main.temp + " degrees" + " in " + data.list[1].name + ".");
        },
        error: function(data, textStatus, errorThrown) {
            console.log("whomp, whomp");
            // Do something to handle the error
            console.log(errorThrown);
        }

    })

    $('.toggle1').click(function(){
        $('.nyc').toggle();
        $('to')
    });

    $('.toggle2').click(function(){
        $('.paris').toggle();
    });

    $('.toggle3').click(function(){
        $('.london').toggle();
    });

   
});

})