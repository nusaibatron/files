function smallest_common_int(l1, l2, l3) {

var common = [];
var x;

for (index = 0; index<l1.length; index++) {
	if (l2.includes(l1[index]) && l3.includes(l1[index])) {
		common.push(l1[index])
	}

}
	if (common.length === 0) {
  		return "False"
}


var smallest = common[0]
for(var i=1; i<common.length; i++){
    if(common[i] < smallest){
        smallest = common[i];   
    }
}
  return smallest 

}

var list1 = [4, 5, 6]
var list2 = [4, 5, 6, 7]
var list3 = [4, 6]

var list4 = [1, 2, 3, 5, 6]
var list5 = [2, 3, 4, 5, 6]
var list6 = [4, 5, 6, 7, 8]

var list7 = [2, 4, 6, 8, 10]
var list8 = [1, 3, 5, 7, 9]
var list9 = [55, 100, 200]



console.log(smallest_common_int(list1, list2, list3)) //returns 4
console.log(smallest_common_int(list4, list5, list6)) //returns 5
console.log(smallest_common_int(list7, list8, list9)) //returns False