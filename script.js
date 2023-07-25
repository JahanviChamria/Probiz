let reqq;
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    reqq = tabs[0].url.toUpperCase();
    console.log(reqq);
})
pos=reqq.indexOf("S");
let req =
        reqq.substr(0, pos - 1)+
        reqq.substr(
            pos,
            reqq.length
        );
    console.log(req);
let OS=document.getElementById('OS')
let MS=document.getElementById('MS')
fetch('https://data.cincinnati-oh.gov/resource/s22v-c28u.json')
    .then(data => data.json())
    .then(smedata => {
        listsmes = smedata;
        for (let i = 0; i < listsmes.length; i++) {
            if (req==listsmes[i].website) {
                 Display=document.getElementById('Display');
                 OS.addEventListener("click", async () => {
                    Display.innerHTML=listsmes[i].gender
                 })
                 MS.addEventListener("click", async () => {
                    Display.innerHTML=listsmes[i].ethnicity
               
        })
    }
}
})
