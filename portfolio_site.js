  document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("menuButton").addEventListener("click", () => {
      document.getElementById("menuButton").classList.toggle("active");
      document.getElementById("nav").classList.toggle("active");
      document.getElementById("mask").classList.toggle("active");
    })
  });
