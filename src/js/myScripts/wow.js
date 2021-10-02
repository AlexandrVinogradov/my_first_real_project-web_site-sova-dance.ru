import { WOW } from 'wowjs'



document.addEventListener(
    'DOMContentLoaded',
    (() => {

    // $(document).ready(function(){
    new WOW({
        mobile: false, 
        live: false
    }).init();
    // })

})()
);