var myhol = document.getElementById("hol");

// start function randVal
function randVal(myVal, other){
    
    if(Array.isArray(myVal)){
        
        var ranInArray = Math.floor(Math.random() * myVal.length);
    return myVal[ranInArray];
        
        
    }else{
        
        var randnum = Math.floor(Math.random() * myVal);
        return randnum;
        
    }
    
    
}
// end function randVal
var color =['#cc3673','#273522','#7c001b','#3a0003','#dbd000','#824275','#eba2a3','#d1003b'],
    sizebox = [10,15,20,5,12,30,22,34,16],
    myh = document.getElementById("hol"),
    lV = document.getElementById("h");



    


for(i = 0 ; i < 100 ; i++){
    for(x = 0 ; x < myh.children.length ; x++){
        
            var mypub = document.createElement("div");
        
            var size = randVal(sizebox) + "px";
        
            mypub.style.backgroundColor = randVal(color) ; 
        
            mypub.style.borderColor =  randVal(color) ;
        
            mypub.style.width = size  ;
        
            mypub.style.height = size  ;
        
            mypub.style.left = randVal(100) + "%";
        
            mypub.style.top = randVal(100) + "%";
        
            myh.children[x].appendChild(mypub);
        
    } 
}
var ct = document.getElementById("center");

setInterval(function(){
    lV.style.backgroundColor = randVal(color) ;
    lV.nextElementSibling.style.backgroundColor = randVal(color) ;
    
    for(i = 0 ; i < ct.children.length ; i++){
        ct.children[i].style.backgroundColor = randVal(color);
    }
    
},1000);

function myFunction() {
    alert("Halooo bubu guma gumaa");
    alert("maaf ya kalo website nya terlalu lebay hehe");
    alert("oh iya, aku punya satu permintaan terakhir");
    alert("coba deh kamu keluar, ke depan pager rumah kamu aja");
    alert("trus liat ke arah taman deh");
    alert("thank you and i love you so much beb");
  }