Array
1. Cost of accessing an element: If you have a requirement where want to access elements in the list all the time, array is a better option.

2. Memory Requirements : You need to know the amount or number of variables you would be working with hence it requires a fixed size. Memory may not be available as on large block

3. Cost of inserting an element in the list : consists of three scenarios; 
a. at beginning - we would have to shift each element by one position towards the higher index. O(n) time is proportional to size of list.
b. at end - dynamic list, if there's space it would be constant time and we would move to the next higher order on the list, if array is full it would creating a new array after memory exhaustion.
c. at nth position - O(n)

4. Cost of deleting an element same with 3.
5. Easier to use

Linked List
1. Cost of accessing an element: non contiguous 
<!-- and better when you don't have a requirement where want to access elements in the list all the time. -->

2. Memory Requirements : Linked List would fetch us a lot of advantage if the data part is large in size. This would take less memory and is better. Memory may be available as multiple small blocks.

3. Cost of inserting an element in the list : consists of three scenarios;
a. at beginning - would mean creating a new node and adjusting the head pointer and link of new node so time taken will not depend on the size of list and would be constant O(1)
b. at end - would mean traversing the whole list, creating a new node and adjusting the links so time taken will be proportional to O(n)
c. at nth position - O(n)
 
4. Cost of deleting an element same with 3.
5. More prone to errors (e.g segmentation fault, memory leaks) and takes good care