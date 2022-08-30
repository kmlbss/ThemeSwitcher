
const sunMoonContainer=document.querySelector(".sun-moon-container");
(function () {
const currentRotation= parseInt( getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    onpageLoad && element.classList.add(onpageLoad);
    if(onpageLoad && onpageLoad === "dark-mode"){
        sunMoonContainer.style.setProperty('--rotation', currentRotation +180)
    } 

  })();
  
  document.querySelector(".theme-toggle-button").addEventListener("click", () => {
    const currentRotation= parseInt( getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));

       sunMoonContainer.style.setProperty('--rotation', currentRotation +180)
    let element = document.body;
    element.classList.toggle("dark-mode");
  
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
      localStorage.setItem("theme", "");
    } else {
      localStorage.setItem("theme", "dark-mode");
    }
  
  });
  
  