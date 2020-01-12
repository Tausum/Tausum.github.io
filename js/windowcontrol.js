
//init
addListeners();

// Event handling
function addListeners() {
    document.getElementById("backbtn").addEventListener('click',winctrl_backpage);
}



function winctrl_backpage() {
    window.history.go(-1);
    // let backurl = document.referrer;
    // if (backurl == "https://taubox.club/" || backurl == "https://taubox.club/index.html" || 
    // backurl == "https://taubox.club" || backurl == "https://www.taubox.club/" || 
    // backurl == "https://www.taubox.club/" || backurl == "https://www.taubox.club/index.html")
    //     window.history.go(-1);
    // else
    //     window.location.href = "/";
}