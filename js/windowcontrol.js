//
var lastmovetime, isnotmovestatus, elemstatus;
//init
addListeners();

// Event handling
function addListeners() {
    document.getElementById("backbtn").addEventListener('click', winctrl_backpage);
    window.addEventListener('mousemove', getlastmovetime);
}

//UDF
function t_fadeToggle(elemt, speed) {
    var speed = speed || 16.6; //默认速度为16.6ms
    var timer;
    if (elemt.style.opacity == 0 && elemt.style.opacity != "") {
        var num = 0; //累加器
        timer = setInterval(function() {
            num++;
            elemt.style.opacity = num / 20;
            if (num >= 20) {
                clearInterval(timer);
            }
        }, speed);
    } else if (elemt.style.opacity == 1 || elemt.style.opacity == "") {
        var num = 20; //累剪器
        timer = setInterval(function() {
            num--;
            elemt.style.opacity = num / 20;
            if (num == 0) {
                clearInterval(timer);
            }
        }, speed);
    }
}

function getlastmovetime() {
    if (elemstatus == 1) {
        t_fadeToggle(document.getElementById("backbtn"), 8);
        elemstatus = 0;
    }
    lastmovetime = new Date().getTime();
    isnotmovestatus = 0;
}

function isnotmove() {
    var now = new Date().getTime();
    if (now - lastmovetime > 3000 && isnotmovestatus == 0) {
        t_fadeToggle(document.getElementById("backbtn"), 16);
        elemstatus = 1;
        isnotmovestatus = 1;
    }
}

function winctrl_backpage() {
    // window.history.go(-1);
    let backurl = document.referrer;
    if (backurl == "https://taubox.club/" || backurl == "https://taubox.club/index.html" || 
    backurl == "https://taubox.club" || backurl == "https://www.taubox.club/" || 
    backurl == "https://www.taubox.club/" || backurl == "https://www.taubox.club/index.html")
        window.history.go(-1);
    else
        window.location.href = "/";
}

window.setInterval(function() {
    isnotmove();
}, 1000)

window.setTimeout(function() {
    t_fadeToggle(document.getElementById("effectdesc"), 16);
}, 5000)
