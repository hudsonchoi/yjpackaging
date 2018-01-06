$(function () {
    if (location.pathname.indexOf("Service") >= 0) {
        $("#service").addClass("hilite");
    } else if (location.pathname.indexOf("Technology") >= 0) {
        $("#technology").addClass("hilite");
    } else if (location.pathname.indexOf("Clients") >= 0) {
        $("#clients").addClass("hilite");
    } else if (location.pathname.indexOf("Company") >= 0) {
        $("#company").addClass("hilite");
    } else if (location.pathname.indexOf("AboutUs") >= 0) {
        $("#aboutUs").addClass("hilite");
    } else if (location.pathname.indexOf("ContactUs") >= 0) {
        $("#contactUs").addClass("hilite");
    } else if (location.pathname.indexOf("Referrals") >= 0) {
        $("#referrals").addClass("hilite");
    } else {
        $("#home").addClass("hilite");
    }
}); 