/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript
*/


//my prefered solution - use of findIndex
function findEvenIndex(arr)
{
  function sum(arr){
    return arr.reduce(function(a,b){return a+b;},0);
  }

  return arr.findIndex(function(el,i,arr){
    return sum(arr.slice(0, i)) === sum(arr.slice(i+1,arr.length));
  });
}

//my solution
function findEvenIndex(arr) {
  function arrReducs(pivot,ith){
    return pivot == 'left' ? arr.slice(0,ith).reduce((acc,num)=>acc+num,0) : arr.slice(ith+1).reduce((acc,num)=>acc+num,0)
  }
  for (let i =0; i<arr.length; i++){
    let left = arrReducs('left',i)
    let right = arrReducs('right',i)
    if (left == right){
      return i
      }
    }
  return -1  
}
