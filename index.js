const title = document.getElementById('new');

title.addEventListener("mouseover",()=>title.style.color = "green");

setTimeout(tweet, 5000);

  function tweet() {
    var tweet1 = prompt("Enter a tweet");
    title.innerHTML = tweet1;
    
  }

  
