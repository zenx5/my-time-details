/**
 *  EVENTOS
 */


chrome.runtime.onInstalled.addListener( function(){
    console.log('installed')
});

chrome.runtime.onConnect.addListener( function(port) {
    port.onMessage.addListener( function(msg, port){
        console.log(msg)
        port.postMessage(msg)
    })
});