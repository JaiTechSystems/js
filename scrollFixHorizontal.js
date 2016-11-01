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
    function updateWidth(h){
      //document.getElementsByTagName('body')[0].style.width=h+"px";
      //document.getElementsByTagName('body')[0].style.minWidth=h+"px";
	    
      document.getElementsByTagName('table')[0].style.width=h+"px";
      document.getElementsByTagName('table')[0].style.minWidth=h+"px";
      document.getElementsByTagName('table')[0].style.overflow="scroll";
	    
      
      document.getElementsByClassName('container')[0].style.width=h+"px";
      document.getElementsByClassName('container')[0].style.minWidth=h+"px";
      document.getElementsByClassName('container')[0].style.overflow="scroll";
     
      
      document.getElementsByTagName('table')[0].style.margin="0px";
    
      
      
      //$("body").height(h);//.css({'min-height':h+"px"});
      // $(".container").height(h).css({overflow:"scroll",'min-height':h+"px"});
    }

    function scrollFix(){
    if (isIphone()){

      //Fix the scroll bug
      if (isPortrait()){
        updateWidth(350);
      } else {
        updateWidth(650); 
      }
      
    }
    }
    
    
    scrollFix();
    var sfix = setInterval(scrollFix,1000);
