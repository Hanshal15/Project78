var array=["man.png","woman.png","book.png"];
var i=0;

function nextslide() {
    


        document.getElementById('img').src= array[i];
        i++;
        if(i>2) {
            i=0;
        }
}