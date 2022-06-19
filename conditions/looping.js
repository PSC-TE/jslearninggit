//for prime no.s

var number=19;
var prime=true


if(number>1){
    for (var index = 2; index < number/2; index++) {
        
        if(number%index==0){
        prime==false;
        break;
        }
    }   
            console.log(number+ "  it is not a prime number");
        } 
        else {
            console.log(number +"  it is a prime number");
        }   
        
 

