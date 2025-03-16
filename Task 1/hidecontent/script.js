var h2 = document.getElementById("h2");
  var button = document.getElementById("button");
  var img=document.getElementById("img")

  function show() {
      if (h2.style.display === "none" && img.style.display === "none") {
          h2.style.display = "block";
          img.style.display = "block";
          button.textContent = "Hide" 
          alert("Get ready...")

      } else {
          h2.style.display = "none"; 
          img.style.display = "none";
          button.textContent = "Show"
      }
  }