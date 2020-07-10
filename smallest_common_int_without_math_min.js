// Write a function that accepts three integer arrays (each array will be sorted in ascending order), 
// then find and return the smallest number that is common in all three arrays. 
// Return false if there is no common smallest number.

// Solution by Nusaiba Rahman

function smallest_common_int(l1, l2, l3) {

// This interger will compare other integers and only update if they're smaller.
// It is itialized to MAX_INT becuase the first comparision will definitley be smaller than 
// the MAX_INT, and if it's not, this will symbolize something else later explained in the code
var currMin = Number.MAX_SAFE_INTEGER

// In my solution, the reason we cannot stop after the 
// first common found integer (given that the lists are ascending, this might seem intuitive)
// is becuase we don't know the ascending order the l1, l2, l3 parameters will be given in

//This loop is for checking integers only seen in all three arrays
for (index = 0; index<l1.length; index++) {
	if (l2.includes(l1[index]) && l3.includes(l1[index])) {

		// Once a common integer is found, the comparision updates currMin only if it's smaller t
		// than a previous common integer 
		if (l1[index] < currMin) { 
			currMin = l1[index]
		}
	}
}

// If the MAXINT was never changed, that means no common integers were found 
// (since any minimum comparision of an interger would have resulted in this being changed)
// and as the spec states, it should return False 
	if (currMin === Number.MAX_SAFE_INTEGER ) {
  		return "False"
}

// This returns the final common interger that was not larger than any others 
  return currMin

}

// Below are some test arrays as well as what the functions should and correctly does output

var list1 = [4, 5, 6]
var list2 = [4, 5, 6, 7]
var list3 = [4, 6]

var list4 = [1, 2, 3, 5, 6]
var list5 = [2, 3, 4, 5, 6]
var list6 = [4, 5, 6, 7, 8]

var list7 = [2, 4, 6, 8, 10]
var list8 = [1, 3, 5, 7, 9]
var list9 = [55, 100, 200]

var list10 = [1, 2, 3]
var list11 = []
var list12 = [5]

var list13 = [9547, 99387, 420927]
var list14 = [9547, 99387, 420927]
var list15 = [1, 2, 420927]



console.log(smallest_common_int(list1, list2, list3)) //returns 4
console.log(smallest_common_int(list4, list5, list6)) //returns 5
console.log(smallest_common_int(list7, list8, list9)) //returns False
console.log(smallest_common_int(list10, list11, list12)) //returns False
console.log(smallest_common_int(list13, list14, list15)) //returns 420927
