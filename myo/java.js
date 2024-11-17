//alert("merhaba");
/*function oku(){
    var eleman= document.getElementById("ad");
    var elemanDiv= document.getElementById("hhh");
    elemanDiv.innerHTML="<h2>"+eleman.value+"</h2>";
    //alert(eleman.value);

}
function oku2(){
    var dv=document.getElementById("hhh");
    var h3=document.getElementById("h3");
    h3.innerHTML +=dv.innerHTML;

}*/
$(document).ready(function(){

    $('.btn').click(function (){
        var veri=$("#ad").val();
       // alert(veri);
       $("#hhh").html(veri);
    });

    //ONCHANGE
    $("#hhh").change(function(){
        alert(this.value);
    });
    
});