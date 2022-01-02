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
const query=shortUrl.value;
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
    
    shortUrl.value='';
}
});

const fetchApi= async(query)=>{
console.log("Loading...")
const response= await fetch('https://api.shrtco.de/v2/shorten?url='+query);
const data= await response.json();
console.log(data);
const finalLink=data.result.short_link;
console.log(finalLink);
showResults(finalLink,query);
}

const showResults= (finalLink,query)=>{
    
const shortedLinks=document.querySelector('.shorted-links');
const linkBlock=document.createElement("div");
linkBlock.classList.add("short-block");
const queryText=document.createElement("div");
queryText.classList.add("query");
queryText.innerHTML=query;
const link=document.createElement("div");
link.classList.add("link");
link.innerHTML=finalLink;
const copyButton=document.createElement("button");
copyButton.classList.add("copy");
copyButton.classList.add("btn");
copyButton.innerHTML="Copy";
linkBlock.appendChild(queryText);
linkBlock.appendChild(link);
linkBlock.appendChild(copyButton);
shortedLinks.appendChild(linkBlock);
copyButton.addEventListener('click',()=>{
    let copied = link.textContent;

          navigator.clipboard.writeText(copied).then(() => {
            copyButton.textContent = 'Copied!';
            copyButton.style.background = 'hsl(257, 27%, 26%)';
          });
});

};