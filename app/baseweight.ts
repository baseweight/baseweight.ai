/*
idea from:
https://dribbble.com/shots/5695004-Kings-Canyon
by: MUTI
*/

(() => {
  "use strict";

  function minimumWindowSubstring(str: string, subStr: string): string {
    const shortestWindow: [number, number] = [0, Infinity];
    const subStrCharsHashTable: Record<string, number> = {};
    let missingCharsCounter: number = subStr.length;
    let slowPointer: number = 0;
    let fastPointer: number = 0;

    // Fill subStrCharsHashTable
    for (const char of subStr) {
      subStrCharsHashTable[char] = 0;
    }

    for (; fastPointer < str.length; fastPointer++) {
      const char = str[fastPointer];

      if (char in subStrCharsHashTable) {
        if (subStrCharsHashTable[char] === 0) {
          missingCharsCounter -= 1;
        }
        subStrCharsHashTable[char] += 1;
      }

      // Shrink window
      while (missingCharsCounter === 0) {
        // Updates result range if smaller than the previous one
        if ((fastPointer - slowPointer) < (shortestWindow[1] - shortestWindow[0])) {
          shortestWindow[0] = slowPointer;
          shortestWindow[1] = fastPointer;
        }

        const char = str[slowPointer];
        if (char in subStrCharsHashTable) {
          subStrCharsHashTable[char] -= 1;
          if (subStrCharsHashTable[char] === 0) {
            missingCharsCounter += 1;
          }
        }
        slowPointer += 1;
      }
    }

    return shortestWindow[1] === Infinity
      ? ""
      : str.slice(shortestWindow[0], shortestWindow[1] + 1);
  }

  // Example usage (uncomment to test)
  // console.log("minimumWindowSubstring: ", minimumWindowSubstring("afdergabcreyhrrabdervac", "abc"));

  /*
  from:
  https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66
  */
})();
