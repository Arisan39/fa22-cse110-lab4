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

