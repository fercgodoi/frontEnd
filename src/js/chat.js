function Chat(){
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function (){
      
    var chat = document.getElementById("chat")
    var s1=document.createElement("script"),
    s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5a5d2e6c4b401e45400c1cd3/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    chat.appendChild(s0);
    })();
}
setTimeout(() => {Chat()}, 1);