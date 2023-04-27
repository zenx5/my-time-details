addEventListener('load', function(){
    window.port.postMessage({ 
        event:'load',
        location: document.location,
        time:new Date()
    })
})
