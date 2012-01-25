/* Author: Shajed Evan

*/

$(document).ready(function() {
    setHeight('.featuredService');
});

var maxHeight = 0;
function setHeight(column) {
    //Get all the element with class = col
    column = $(column);
    //Loop all the column
    column.each(function() {       
        //Store the highest value
        if($(this).height() > maxHeight) {
            maxHeight = $(this).height();;
        }
    });
    //Set the height
    column.height(maxHeight);
}







