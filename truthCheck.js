function truthCheck(collection, pre) {
 for (var k in collection) {
        if (collection[k][pre] == undefined || collection[k][pre]=='' ||Object.is(collection[k][pre],NaN)) return false;
    }
  return true;
}

truthCheck([{"single": "yes"}], "single");

/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

*/