# Trees
<!-- Short summary or background information -->
there were a several type of trees, for example there are:
 Binary Trees and Binary Search Trees.

- the common terminology about the trees is_ 
* Node - A node is the individual item/data that makes up the data structure
* Root - The root is the first/top Node in the tree
* Left Child - The node that is positioned to the left of a root or node
* Right Child - The node that is positioned to the right of a root or node
* Edge - The edge in a tree is the link between a parent and child node
* Leaf - A leaf is a node that does not contain any children
* Height - The height of a tree is determined by the number of edges from the root to the bottommost node

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder(), inOrder(), and postOrder() which returns an array of the values, ordered appropriately.
- Create a BinarySearchTree class
1. Define a method named add() that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
1. Define a method named contains() that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Big O for preOrder(), inOrder(), and postOrder() is O(n)
- Big O for add(), contains() is o(log(n))


## API
<!-- Description of each method publicly available in each of your trees -->
- Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder(), inOrder(), and postOrder() which returns an array of the values, ordered appropriately.
- Big O for preOrder(), inOrder(), and postOrder() is O(n)
- Create a BinarySearchTree class
1. Define a method named add() that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
1. Define a method named contains() that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
- Big O for add(), contains() is o(log(n))