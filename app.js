var i = 0;
var z = 0;
const MAXNUM = 4;
function autoWrite(s) {
    $("#output").append(s);
}

$(document).ready(function() {
    var script = "";
    var j = 0;
    var numChars = 0;
    var tmpStr = "";
    jQuery.get('script.txt', function(data) {
        script = data;
        
        //call autowrite when key is pressed
        $(document).keypress(function() {
            if (j < script.length) {
                numChars = Math.floor(Math.random() * MAXNUM) + 1;
                //console.log("Random chars # is " + numChars);
                for (var i = j; i < j + numChars; i++) {
                    //console.log(i);
                    tmpStr += script[i];
                }
                j += numChars; 
                //console.log(tmpStr);
                autoWrite(tmpStr);
                
            }
            tmpStr = ""; //clearing string
        })
        
    });
    
});

