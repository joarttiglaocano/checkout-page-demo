// Set global variable to capture credit card details
let creditCardValue;
(async function(){
    const iframeEl = document.getElementById('iframe-invoice');
    iframeEl.addEventListener('load', function(){
        setTimeout(()=>{
            document.getElementById("cardNumber").style.display = 'block';
            document.getElementById('cardNumber').addEventListener(
                'change',
                function(event){
                    creditCardValue= event.target.value // Capturing the data
                },
                false
              );
        }, 2000);
    })
})()




