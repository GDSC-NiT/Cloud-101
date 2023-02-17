const getDate = (fromLambda = false) => {
    if (fromLambda) 
        $.ajax({
            url: "	https://40d0zon5f6.execute-api.ap-south-1.amazonaws.com/get-date",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: function(data) {
                $("#date").text(data.message);
            }
        });
    else
        $("#date").text(new Date().toString())
}

$(document).ready(function() {
    getDate();
});