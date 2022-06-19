function private() {
    var num="this is private function"
    return function(){
        return num;
    }
}
var getnum=private()
console.log(getnum());