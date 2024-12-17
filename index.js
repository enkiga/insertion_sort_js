// PseudoCode
/*
START

    FOR i = 1 TO length OF arr - 1 DO
        SET key = arr[i]
        SET j = i - 1

        WHILE j >= 0 AND arr[j] > key DO
            SET arr[j + 1] = arr[j]
            DECREMENT j
        END WHILE

        SET arr[j + 1] = key
    END FOR

END
*/

//
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Test
let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));

// output

/*
[Running] node "***\Insertion Sort\index.js"
[ 5, 6, 11, 12, 13 ]

[Done] exited with code=0 in 0.23 seconds
*/
