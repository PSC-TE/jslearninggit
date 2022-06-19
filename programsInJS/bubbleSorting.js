var arr= [1,5,4,8,3,9,2]

for (i=0;i<arr.length;i++){
    for(j=i;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
    console.log(arr[i])
}

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp
        }
    }
    console.log(arr[i]);
    
}