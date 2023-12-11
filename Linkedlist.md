Array is always stored as one contiguous block of memory hence a new block is created and to prevent mamory waste, a data structure called Linked List (which is non contiguous) is introduced.

A block of memory that would store two integers e,g using a strict node {int data;
next node address;}

The first node is also called the head node whuch gives us access to the complete list while that of the last node is ususally 0 or null to show it doesn't point to any other list. Adding a new one would be done independently then address updated but cannot be accessed in constant time.

There is no need to shift or push complexly as done in arrays for linked lists to insert a new value at a specific position but it would still be O(n) in terms of time complexity same as delete. There is no extra use of unused memory.


Methods to Reverse a Linked list
Iterative method
Recursion