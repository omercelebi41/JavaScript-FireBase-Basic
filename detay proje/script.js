function checkChar() {
    var allowedChar = 256;
    var content = document.getElementById("Adres");
    var contLength = content.value.length;
  
    if (contLength > allowedChar) {
      content.value = content.value.substring(0, allowedChar);
      document.getElementById("report").innerHTML = "<span style='color:red;'>UYARI: En fazla " + allowedChar + " karakter girebilirsiniz</span>";
    }
  }
var form2=document.getElementById("form2");
 var goster=document.getElementById("button");
 goster.onclick=function(){
    if(form2.style.display=="none"){
        form2.style.display="";
}        
        else {
            form2.style.display="none"
        }
    }
   
  

       /*function kaydet() {
        var ad = document.getElementById('Ad').value;
        var soyad = document.getElementById('Soyad').value;
        var email = document.getElementById('Email').value;
        var tel = document.getElementById('Tel').value;
        var adres = document.getElementById('Adres').value;
        var şehir = document.getElementById('Şehir').value;
        var posta = document.getElementById('Posta').value;
        var doğum = document.getElementById('Doğumtarihi ').value;
        var ehliyet = document.getElementById('Ehliyet').value;
        var cinsiyet = document.getElementById('Cinsiyet').value;
        var medeni = document.getElementById('Medeni').value;
        var askerlik = document.getElementById('Askerlik').value;
        var linkedin = document.getElementById('Linkedin').value;
        var internet = document.getElementById('İnternet').value;
    

  document.getElementById('btnkaydet').onclick = function() {
        kaydet();
       database.ref('insanlar/' + ad).set({
        ad : ad,
        soyad : soyad
       })
       alert("kayıt başarılı")
    }
    }*/

    
    