document.addEventListener("DOMContentLoaded", () => {

  chrome.tabs.executeScript(null, {
    code: `
      
      document.documentElement.setAttribute("dir", "rtl");
      
      document.querySelector("title").innerText;
    `
  }, response => {
    const pageData = response[0];

    if (!pageData) {
      console.log("Could not get data from page.");
      return;
    }
    
    document.getElementById("activeTabTitle").innerText = pageData;
  });
});
