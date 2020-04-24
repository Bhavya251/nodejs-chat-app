$(document).ready(function(){
    $("#show").click(function(){
        var key = "092b359c4790f8e923e5055b2b76b681";
        
        if($("#city").val() != ""){
            
            if(isNaN($("#city").val())){
                
                var city = $("#city").val();

                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/weather",
                    dataType: "json",
                    type:"GET",
                    data: {q: city, appid: key, units:"metric"},
                    success: function(data){
                        var html = "";
                        $.each(data.weather, function(key, value){
                            html += "<span>"+data.name+"</span>"+"<p>"+data.main.temp+"&deg;C"+" "+value.main+" : "+value.description
                        });

                        $("#weather").html(html);
                    }
                }); 
            }
            else{
                $("#city").val("");
                $("#city").attr("placeholder", "City name do not have number");
            }
        }
        else{
            $("#city").attr("placeholder", "Must enter City");
        }
    });
});
