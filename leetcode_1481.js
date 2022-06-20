//1481. Least Number of Unique Integers after K Removals
/*
Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.

Example 2:

Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left. 

Constraints:
    1 <= arr.length <= 10^5
    1 <= arr[i] <= 10^9
    0 <= k <= arr.length
*/

const findLeastNumOfUniqueInts = function (arr, k) {
  
    const getArrayOfArraysOnIntegers = (arr) => {
        const sortedArr = arr.sort((a, b) => a - b);

        const newArr = sortedArr.reduce((acc, element) => {
            if (!acc.length) {
                acc.push([]);
            }
            let arrInner = acc[acc.length - 1];

            if (!arrInner.length || arrInner.includes(element)) {
                arrInner.push(element);
            } else {
                arrInner = [element];
                acc.push(arrInner);
            }

            return acc;
        }, []);
        return newArr;
    };

    const arrayOfArrays = getArrayOfArraysOnIntegers(arr);
    //остортировать массив массивов по длине
    const sortedOnLengthArray = arrayOfArrays.sort(
        (a, b) => a.length - b.length
    );

    //раскрыть внутренние массивы и создать массив цисел
    const arrayFromArrays = sortedOnLengthArray.reduce((acc, element) => {
        for (let i = 0; i < element.length; i++) {
            acc.push(element[i]);
        }
        return acc;
    }, []);

    // удалить к элементов с начала массива
    arrayFromArrays.splice(0, k);
    //создать массив массивов из оставшихся
    const arrayOfArraysAfterDelete =
        getArrayOfArraysOnIntegers(arrayFromArrays);

    //посчитать колличество групп уникальных чисел
    return arrayOfArraysAfterDelete.length;
};
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 2));
