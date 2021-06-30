function zap_in() {
    var zap = document.getElementById("zapzap")
    var num = document.getElementById("numero")
    zap.style.width = "70px"
    zap.style.top = "87%"
    num.style.display = "inline"
}
function zap_out() {
    var zap = document.getElementById("zapzap")
    var num = document.getElementById("numero")
    zap.style.width = "50px"
    zap.style.top = "90%"
    num.style.display = "none"
}
function zap_click() {
    var zap = document.getElementById("zapzap")
    var num = document.getElementById("numero")
    num.style.display = "none"
    zap.style.width = "50px"
    zap.style.top = "90%"
}


    (function () {
    var options = {
    whatsapp: "+55 (32)32998170395 ", // WhatsApp number
    instagram: "atelier.chocolate", // Instagram username
    call_to_action: "", // Call to action
    button_color: "#FF6550", // Color of button
    position: "right", // Position may be 'right' or 'left'
    order: "instagram,whatsapp", // Order of buttons
};
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
//function aumentar() {
    //var imge = document.getElementById("corações-promoção>img")
    //imge.style.width = "30%"
    //alert("aaa")
//}