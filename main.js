var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        image_object = Img;

        image_object.scaleToWidth(canvas.width);
        image_object.scaleToHeight(canvas.height);
        image_object.set({
            top:0,
            left:0
        });
        canvas.add(image_object);
    });
}
function playSound(){
    x.play();
}