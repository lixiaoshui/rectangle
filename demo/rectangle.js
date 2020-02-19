$(function(){
    // console.log("hhh");
    //get dom elem
    var $width = $('#width');
    var $height = $('#height');
    var $btnCal = $('#calculate');
    var $perimeter = $('#perimeter');
    var $area = $('#area');

    $btnCal.click(function(){
        //get value
        var w = Number($width.val());
        var h = Number($height.val());
        //calculate
        var p=roundFractional(2*w+2*h,2);
        var a=roundFractional(w*h,2);
        //output
        $perimeter.val(p);
        $area.val(a);
    })
    
})
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}