var hamburger=document.querySelector(".hamburger");

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active');
    let cover=document.querySelector(".cover");
    cover.classList.toggle('active-cover');

})

var shortenbtn=document.querySelector('.shorten');
shortenbtn.addEventListener('click',()=>{
    let shortinput=document.getElementById('shortLink');
    let invalidText=document.querySelector('.invalid');
    let shortlinks=document.getElementById('s-links');
   if(shortinput.value==""){
       shortinput.classList.toggle('invalid-input');
       invalidText.textContent="*Please add a link*";
       invalidText.classList.toggle('valid-link');
   }
   else{
       let url=shortinput.value;
       fetch('https://api.shrtco.de/v2/shorten?url='+url)
       .then(res=>res.json())
       .then(Response => shortlinks.textContent+=Response.result.short_link);

   }
   
});