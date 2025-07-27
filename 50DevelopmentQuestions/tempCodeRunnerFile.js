let array=[1,2,3,4,5,4,56,5,7,10,9,9];

for(let i=0;i<array.length;i++){
    for(let j=0;j<i;j++){
        if(array[i]===array[j]){
            console.log("The Duplicate Found are:"+array[i]);
            
        }
    }
}