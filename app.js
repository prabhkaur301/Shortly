{/* <div class="shorted-links">
<div class="link" id="s-links"></div>
<button class="copy btn">Copy</button>
</div> */}
const hamburger=document.querySelector(".hamburger");

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active');
    let cover=document.querySelector(".cover");
    cover.classList.toggle('active-cover');

});

const shortUrl=document.querySelector('#shortLink');
const invalid=document.querySelector('.valid-link');
const shortBtn=document.querySelector('.shorten');
shortBtn.addEventListener('click',()=>{
let query=shortUrl.value;
console.log(query)
if(query===""){
shortUrl.classList.toggle('invalid-input');
invalid.innerHTML="** Please add a link **";
invalid.classList.toggle('invalid');

}
else{
    invalid.classList.remove('invalid');
    shortUrl.classList.remove('invalid-input');
    fetchApi(query);
    showResults();
}
});

const fetchApi= async(query)=>{
console.log("Loading...")
const response= await fetch('https://api.shrtco.de/v2/shorten?url='+query);
const data= await response.json();
console.log(data);
const finalLink=data.result.short_link;
console.log(finalLink);
}


