A datat structyre is a way to store and organize data in a computer, so that it can be used efficiently.

We look at data structures as
1. Mathematical/Logical models : from a high level and an abstract point of view (Abtsract data type ADT e.g Lists). They are entities that define data and operations but no implementation.
Arrays, Linked List, STack,Queue, Tree, Graph

2. Implementation models:  concrete type implementation e.g Arrays

we will study the: logical view, operations, cost of operations, implementation.

List is a collection of objects of the same type

When array is full, create a new larger array of double size.
Copy elements from previous array in new

Access Read/write element at an index constant line O(1)

Insert - T ~ n Linear O(n) at a particular position but constant is insert is at the end

Remove  - T ~ n Linear O(n)

Add - constant if list/array is not full but linear if full because it would be proportional to the time

where n is the size of the list