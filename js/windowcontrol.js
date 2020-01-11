
function winctrl_backpage(){
    let backurl = document.referrer;
    alert(backurl);
    if(backurl=="https://taubox.cn/"||backurl=="https://taubox.cn/index.html")
        history.go(-1);    
    else
        window.location.href="/";
    // if(backurl=="https://taubox.cn/")
    //     history.go(-1);    
    // else
    //     window.location.href="https://taubox.cn/";
}