1. it prints out **2** because var variable is function-scoped/global scoped so the last value in **i** persists after the loop ends and the values of i goes from 0 to 2 since the length of prices array is 3.
2. it prints out **150** because var variable is function-scoped/global scoped and the last value stored in discountedPrice before the loop ends persists.
3. it prints out **150** because var variable is function-scoped/global scoped and the last value stored in finalPrice before the loop ends persists.
4. it returns a list **[50, 100, 150]** because var variable is function-scoped/global scoped and the calculated finalPrice value is being pushed to the list every loop iteration.
5. it causes an **error** because let variable is block-scoped and i being declared in the for loop makes **i** is not visible after the loop.
6. it causes an **error** because let variable is block-scoped and discountedPrice being declared in the for loop makes **discountedPrice** is not visible after the loop.
7. it prints out **150** because finalPrice is declared in the function block thus it is visible in the function scope.
8. it returns a list **[50, 100, 150]** because discounted is declared in the function block thus it is visible in the function scope with the value being updated in the loop.
9. returns an **error** for the same reason as #5
10. it prints out **3** since const variable is block-scoped and length is declared in the function block thus it is visible anywhere in the function.
11. it prints out **[50, 100, 150]** because the list is changed via push function not the assignment operator (=); const variable only prohibits change of the value through the assignment operator (=).
12. answers:
    - A : student.name;
    - B : student['Grad Year'];
    - C : student.greeting();
    - D: student['Favorite Teacher'].name;
    - E: student.courseLoad[0];
13. answers:
    - A : **32**, 2 is coverted to string because we need strings to form a value thus string concatenation is performed. 
    - B : **1** because 3 is converted to number as is by the rule of numeric conversion.
    - C : **3** because of numeric conversion and null becomes 0
    - D: **3null**, 3 and null are converted to strings because we need strings to form a value thus string concatenation is performed.
    - E: **4** because true becomes 1 by the numeric conversion
    - F: **0** because false and null are both 0 by numeric conversion
    - G: **3undefined**, 3 and undefined are converted to strings because we need strings to form a value thus string concatenation is performed.
    - H: **NaN** because of numeric conversion and undefined becomes NaN.
14. answers:
     - A : **true** because string '2' becomes number 2
    - B : **false** because strings are compared lexicographical order
    - C : **true** since string '2' becomes number 2
    - D: **false** since 2 is not equal '2' without type conversion
    - E: **false** since true is converted to number 1 which is not equal to 2
    - F: **true** because Boolean(2) becomes true which is equal to true without type conversion.
15. == checks if the values are equal regardless of conversions while === checks if the values are equal without conversion
16. in file part2-question16.js
17. **[2,4,6]** because doSomething gets passed in as an argument to modifyArray thus is doSomething is used as the callback function. The loop goes through every elements in the array and performs doSomething to each element being the callback function. Every elements then get multiplied by 2 and is pushed into newArr. And, newArr is returned as the result.
18. in file part2-question18.js
19. the output is:
```
1
3
4
2
```


