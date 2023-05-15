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