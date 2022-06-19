let title= 'welcome all to test yantra'
let titleArray= title.toLowerCase().split(' ')
console.log(titleArray);
let newarr=[]

    // for (let element of titleArray) {
    //     (element[0].toUpperCase()+element.substring(1,element.length));
    // }

    for (let index = 0; index < titleArray.length; index++) {
        titleArray[index]=titleArray[index][0].toUpperCase()+titleArray[index].slice(1, titleArray[index].length)
        // newarr.push(word)

    }
    
console.log(titleArray);
console.log(titleArray.join(' '));


