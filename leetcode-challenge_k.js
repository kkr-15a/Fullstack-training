// 2667. Create a Hello World Program
// var createHelloWorld = function() {
    
//     return function(...args) {
//         return "Hello World";
//     }
// };

// 2620. Counter
// var createCounter = function(n) {
//     return function() {
//         return n++;
//        }
// };

// 2704. To Be or Not To Be
// var expect = function(val) {
//     return {
//         toBe: function(expected) {
//             if (val === expected) {
//                 return true;
//             }
//             throw new Error("Not Equal");
//         },
//         notToBe: function(expected) {
//             if (val !== expected) {
//                 return true;
//             }
//             throw new Error("Equal");
//         }
//     };
// };

// 2665. Counter II
// var createCounter = function(init) {
//     let count = init;
//     return {
//         increment: () => {
//              return ++count;
//         },
//         decrement: () => {
//            return --count;
//         },
//         reset: () => {
//             return count = init;
//         }
//     }
// };

// 2635. Apply Transform Over Each Element in Array
// var map = function(arr, fn) {
//     for(let i=0; i<arr.length; i++) {
//         arr[i] = fn(arr[i],i)
//     }
//     return arr;
// };

// 2634. Filter Elements From Array
// var filter = function(arr, fn) {
//     let a = []
//     for(let i = 0; i < arr.length; i++){
//         if (fn(arr[i], i)){
//             a.push(arr[i])
//         }
//     }
//     return a;
// };

// 2626. Array Reduce Transformation.
// var reduce = function(nums, fn, init) {
//     let a = init;
//     for(let i=0;i<nums.length;i++) {
//         a = fn(a, nums[i])
//     }
//     return a;
// };

// 2629. Function Composition
// var compose = function(functions) {
//     return function(f) {
//         for(let i = functions.length - 1; i >= 0; i--) {
//             f = functions[i](f);
//             console.log(f);
//         }
//         return f;
//     }
// };

//2703. Return Length of Arguements Passed.
// var argumentsLength = function(...args) {
//     let a=[...args]
//     return a.length;
// };

// 2666. Allow One Function Call
// var once = function(fn) {
//     let i = 0;
//    return function(...args){
//        if(i === 0){
//            i++;
//            return fn(...args);
//        }
//    }
// };

//2623. Memoize
// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//       const key = String(args);
//       if (key in cache) {
//         return cache[key];
//       }
//       const result = fn(...args);
//       cache[key] = result;
//       return result;
//     }
// }

//2723. Add Two Promises
// var addTwoPromises = async function(promise1, promise2) {
//     return await promise1 + await promise2;
// };

//2621. Sleep
// async function sleep(millis) {
//     await new Promise(resolve => setTimeout(resolve, millis));
// }

//2715. Timeout Cancellation
// var cancellable = function(fn, args, t) {
//     var timeoutId = setTimeout(function() {
//     fn.apply(null, args);
//   }, t);
//     var cancelFn = function() {
//     clearTimeout(timeoutId);
//   };
//     return cancelFn;
// };

//2725. Interval Cancellation
// var cancellable = function(fn, args, t) {
//     fn(...args)
//     const timeout=setInterval(()=>{fn(...args)},t)
//     return ()=>{
//      clearInterval(timeout)}
// };

//2727. Is Object Empty
// var isEmpty = function(obj) {
//     return Object.keys(obj).length == 0;
// };

//2619. Array Prototype Last
// Array.prototype.last = function() {
//     if(this.length === 0)
//        return - 1;
//    return this[this.length-1];
// };

//2724. Sort By
// var sortBy = function(arr, fn) {
//     return arr.sort((a, b) => fn(a) - fn(b));
// };

