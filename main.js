setInterval(function(){
    getMessages();
},1000);

$(document).keypress(function(event){
    if(event.keyCode == 13){
        sendMes();
    }
});

function sendMes() {
    let text = document.querySelector('input').value;
    //console.log(document.querySelector('ul').innerHTML = text);
    $.ajax({
        type: "POST",
        url: "chat.php",
        data: {
            "text": text
        }
    }).done(function(result){
        $('input')[0].value = "";
    });
}

function getMessages() {
    $.ajax({
        type: "POST",
        url: "chat.php",
        data: {
            "get": "sometext"
        }
    }).done(function (result) {
        $('ul').html(result);
    });
}