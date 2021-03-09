//Cau hoi A1: 
//Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia. Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].
var arr1 =[];
var arr2=[];

function addToArray(arr,value){
    if(value=='End') return;
    arr.push(value);
}
//enter a value, nhap END de ket thuc

do{
    var value = prompt("Enter value of 1st arr - Enter End to finish", "End");
    addToArray(arr1,value);
    for(v of arr1){
        console.log(v);
    }
}while(value !='End')
//

do{
    var value = prompt("Enter value of 2nd arr - Enter End to finish", "End");
    addToArray(arr2,value);
    for(v of arr2){
        console.log(v);
    }
}while(value !='End')

function getUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function filterUnique(a1,a2){
	if(a1.lenght==0||a2.length==0){
   	  console.log('Nothing to do');
      alert("Kidding me?");
    }
    var out = a1.concat(a2).filter(getUnique);
    console.log('output');
    var output_str = '';
    for(v of out){
    //output
        console.log(v);
        //print array
        output_str = output_str.concat(v+',');
    }
    //
    alert("Output:"+output_str);
    //
    
}
filterUnique(arr1,arr2);