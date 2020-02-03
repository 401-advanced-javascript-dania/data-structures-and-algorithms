# Stacks and Queues
<!-- Short summary or background information -->
Implementation stacks and queues with node implemented as data structure
* A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous. 
* A queue is a data structure which  follow these concepts:
FIFO(First In First Out)
This means that the first item in the queue will be the first item out of the queue.
LILO(Last In Last Out)
This means that the last item in the queue will be the last item out of the queue.
## Challenge
<!-- Description of the challenge -->
Implementation stacks and queues with node implemented as data structure

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The Big of O is o(1) for all the method

## API
<!-- Description of each method publicly available to your Stack and Queue-->
- Methods for Stack:-
1. push() which takes any value as an argument and adds a new node with that value to the top of the stack 

1. pop() that does not take any argument, removes the node from the top of the stack, and returns the node’s value.

1. peek() that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

1. isEmpty() that does not take an argument, and returns a boolean indicating whether or not the stack is empty.


- Methods for Queue:-
1. enqueue() which takes any value as an argument and adds a new node with that value to the back of the queue 

1. dequeue() that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

1. peek() that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

1. isEmpty() that does not take an argument, and returns a boolean indicating whether or not the queue is empty.
