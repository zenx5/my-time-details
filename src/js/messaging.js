
window.port = chrome.runtime.connect({
    name: `mytimedetails-${Math.floor( Math.random()*99 )}-${Math.floor( Math.random()*99 )}`
});

window.port.onMessage.addListener( response => {
    console.log(response)
});
