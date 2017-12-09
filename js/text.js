
//ie模拟dow加载
/*document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>');
var ie_loaded=document.getElementById("ie_loaded");
//判断是否完全加载完毕DOM了
ie_loaded.onreadystatechange=function(){
   if(this.readyState == 'complete'){
   	 var box=document.getElementById('box');
   	 alert(box.innerHTML);
   }
};*/
//使用doScroll
/*
//ie6,7,8

 var timer=null;

timer=setInterval(function(){
   try{
      document.documentElement.doScroll("left");
      var box=document.getElementById('box');
      alert(box.innerHTML)
   }catch(e){

   };
});
function addDomLoaded(fn){
   if(document.addEventListener){//w3c
      addEvent(document,'DOMContentLoaded',function(){
      	 fn();
      	 removeEvent(document,'DOMContentLoaded',arguments.callee);
      });
   }else{
   	  var timer=null;
   	  timer=setInterval(function(){
        try{
           document.documentElement.doscroll('left');
           fn();
        }catch(e){

        };
   	  });
   }
}

addDomLoaded(function(){
  var box=document.getElementById('box');
  alert(box.innerHTML);
});*/
setInterval(function(){
	alert(document.readyState)
})