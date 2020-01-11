var timesec = 5;
function elemfadeIn(time,elem){
    if(timesec >= 0 & elem){
        let _opacity = getstyle(elem,"opacity");
        let _topacity = Math.ceil(_opacity/timesec);
        if(_opacity-_topacity<0){
            _opacity = 0;
        }
        
        if (window.navigator.userAgent.indexOf("MSIE")>=1) {
            
            elem.style.filter = 'alpha(opacity:'+fadeopacity+')';
        }else{
            
        }     
    }
}

