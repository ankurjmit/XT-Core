function init() {
    document.getElementById('outerDiv').addEventListener('click',function(){
        console.log('Outer div clicked');
    })
    document.getElementById('innerDiv').addEventListener('click',function(){
        console.log('Inner div clicked');
    })
    document.getElementById('para').addEventListener('click',function(){
        console.log('Paragraph  clicked');
    })



    // Stoping event from bubbling by using stopPropagation


    document.getElementById('outerDiv2').addEventListener('click',function(){
        console.log('Outer div clicked');
    })
    document.getElementById('innerDiv2').addEventListener('click',function(){
        console.log('Inner div clicked');
    })
    document.getElementById('para2').addEventListener('click',function(e){
        console.log('Paragraph  clicked');
        console.log('Calling event.stopPropagation()');
        e.stopPropagation();
    })


}

window.onload = init;


/**
 * Event Bubbling is process of event bubbling from child to parent element.We can stop event to only to child by using 
 stopPropagation()  method of event object.
 

 */