$(function () {
    //alert(location.pathname.indexOf("Servcie"));
    if (location.pathname.indexOf("Service") >= 0) {
        $("#service").addClass("hilite");
        $("#service a").css("color", "#ffffff");
        $("#service a").css("font-weight", "bold");
    } else if (location.pathname.indexOf("Technology") >= 0) {
        $("#technology").addClass("hilite");
        $("#technology a").css("color", "#ffffff");
        $("#technology a").css("font-weight", "bold");
    } else if (location.pathname.indexOf("Clients") >= 0) {
        $("#clients").addClass("hilite");
        $("#clients a").css("color", "#ffffff");
        $("#clients a").css("font-weight", "bold");
    } else if (location.pathname.indexOf("Company") >= 0) {
        $("#company").addClass("hilite");
        $("#company a").css("color", "#ffffff");
        $("#company a").css("font-weight", "bold");
    } else if (location.pathname.indexOf("AboutUs") >= 0) {
        $("#aboutUs").addClass("hilite");
        $("#aboutUs a").css("color", "#ffffff");
        $("#aboutUs a").css("font-weight", "bold");
    } else if (location.pathname.indexOf("ContactUs") >= 0) {
        $("#contactUs").addClass("hilite");
        $("#contactUs a").css("color", "#ffffff");
        $("#contactUs a").css("font-weight", "bold");
    } else if (location.pathname.indexOf("Referrals") >= 0) {
        $("#referrals").addClass("hilite");
        $("#referrals a").css("color", "#ffffff");
        $("#referrals a").css("font-weight", "bold");
    } else {
        $("#home").addClass("hilite");
        $("#home a").css("color", "#ffffff");
        $("#home a").css("font-weight", "bold");
    }


}); 