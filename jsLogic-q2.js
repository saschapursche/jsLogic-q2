// const answer = ([a], b) => {
//     let n = a.length
//     for (let i = 0; i < n; i++) {
//         for(let j = 1+1; j < n; j++) {
//             if(a[i] + a[j] === b) {
//                 return(a[i], a[j]);
//             }
//         }
//     }
// };

// answer([1, 2, 3], 4);
// returns actually undefined

//another try
const array = [1, 2, 3, 4, 5, 6];
const answer = (arr, target) => {
const solution = [];
    for(let i = 0; i <= arr.length; i++) {
        for(let j = 0; j <= arr.length; j++){
            if((arr[i] + arr[j]) === target){
                let btwArr = [];
                    btwArr.push(arr[i], arr[j]);
                    solution.push(btwArr);
            }
        }
    }
    return solution;
};
answer(array, 7);


//Question 2: Write a javascript function that takes an array of numbers and a target number.
//The function should find two different numbers in the array that, when added together, give the target number.
//For example: answer([1,2,3], 4)should return [1,3]