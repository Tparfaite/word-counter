const container=document.getElementById("capture");
const word=document.getElementById("word");
const button=document.getElementById("button");


container.addEventListener("keyup",(e)=>{
    function counter(){
        let text=container.value;
        text=text.trim();
        const words=text.split(" ");

        if(container.innerText="") {
            word.innerText="0";
        } else {
            word.innerText=words.length;
        }
       
    }
    counter();

})
button.addEventListener("click",(e)=>{
        container.value="";
        word.innerText="0"; 
})


