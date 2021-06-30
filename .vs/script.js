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
//function aumentar() {
    //var imge = document.getElementById("corações-promoção>img")
    //imge.style.width = "30%"
    //alert("aaa")
//}