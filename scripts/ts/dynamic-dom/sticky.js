

export function setupSticky() {
    // TODO: Copy and paste your sticky code in here!!
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("main-menu-container");
    var sticky = header.offsetTop;
    var drop = document.getElementById("mturk-top-banner-drop-down-content");
    
    function myFunction() {
      if (window.getComputedStyle(drop).display === "none") {
        header.classList.add("sticky2");
      } else {
        header.classList.remove("sticky2");
      }

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
}