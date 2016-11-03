//Bug fix for the scrolling problem
    
    //Returns true if the device is iPhone
    function isIphone() {
  		return !!navigator.userAgent.match(/iPhone/i);
	}
    
    
    //Returns true for portrait, false for landscape
    function isPortrait(){
          switch (window.orientation) {  
          case 0:  
              return true;
              
          case 180:  
          	  return true;
        
          case -90:  
          	  return false;
        
          case 90:  
          	  return false;
          }
    }

    
    
    
    //Updates the height of the container and body elements
    /*
		body{
        height:500px !important;
        min-height:500px !important;
    }
    
    .container{
        height:500px !important;
        min-height:500px !important;
        overflow:scroll;
    }
	*/
    function updateHeight(h){
      //document.getElementsByTagName('body')[0].style.height=h+"px";
      //document.getElementsByTagName('body')[0].style.minHeight=h+"px";
      document.getElementsByTagName('table')[0].style.hidth=h+"px";
      document.getElementsByTagName('table')[0].style.minHidth=h+"px";
      document.getElementsByTagName('table')[0].style.overflow="scroll";
      
      document.getElementsByClassName('container')[0].style.height=h+"px";
      document.getElementsByClassName('container')[0].style.minHeight=h+"px";
      document.getElementsByClassName('container')[0].style.overflow="scroll";
     
      
      document.getElementsByTagName('table')[0].style.margin="0px";
      //document.getElementById("iForm").style.width="100%";
      //document.getElementById("iForm").style.margin="0px";
      
      
      
      //$("body").height(h);//.css({'min-height':h+"px"});
      // $(".container").height(h).css({overflow:"scroll",'min-height':h+"px"});
    }

    function scrollFix(){
    if (isIphone()){

      //Fix the scroll bug
      if (isPortrait()){
        updateHeight(494);
      } else {
        updateHeight(292); 
      }
      
    }
    }
    
    
    scrollFix();
    var sfix = setInterval(scrollFix,1000);
