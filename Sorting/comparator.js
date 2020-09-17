// THIS PROBLEM IS INCOMPLETE, ALSO NO OPTION TO SUBMIT JAVASCRIPT

/*
Comparators are used to compare two objects. In this problem, you'll create a comparator and use it to sort an array. The Player class is provided in the editor below. It has two fields:
  1. name: a string
  2. score: an integer

Given an array of n Player objects, write a comparator that sorts them in order of decreasing score. If 2 or more players have the same score, sort those players alphabetically ascending by name. To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the Comparator.compare(T o1, T o2) method.
In short, when sorting in ascending order, a comparator function returns -1 if a < b, 0 if a = b, and 1 if a > b

For example, given n = 3 Player objects with Player.name, Player.score values...
data = [[Smith, 20], [Jones, 15], [Jones, 20]]
...we want to sort the list as
dataSorted = [[Jones, 20], [Smith, 20], [Jones, 15]]
*/
