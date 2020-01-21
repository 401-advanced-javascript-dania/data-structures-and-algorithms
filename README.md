# data-structures-and-algorithms
# Challenge Summary
<!-- Short summary or background information -->
to write afunc then test it 

## Challenge Description
<!-- Description of the challenge -->
to write a function that take an array and value as argument then if this value is in the array return the index of the value in the array if the value is not in the array return -1
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
i use binary research approch ,Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## Solution
<!-- Embedded whiteboard image -->
![UML]()