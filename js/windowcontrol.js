
function winctrl_backpage(){
    // window.history.go(-1);
    let backurl = document.referrer;
    if(backurl=="https://tausum.github.io/"||backurl=="https://tausum.github.io/index.html"||backurl=="https://tausum.github.io")
        window.history.go(-1);
    else
        window.location.href="/";
}