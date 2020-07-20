GScript2
========
GScript2 is a minimalistic imperative scripting language and accompanying VM. It is a successor of [GScript](https://github.com/gecko0307/mathom/tree/master/gscript).

Provided code is just a prototype. It is not optimized and may contain bugs.

Features
--------
* Modules
* Dynamic type system
* Prototype-based OOP
* Functions as first-class objects
* Pass by value and pass by reference
* Strings with full Unicode support (UTF-8)

Example
-------
```
import "std/array.gs";

func main()
{
    var x = 10;
    var arr = [x, "foo", [1, 2, 3]];

    assert(arr is Array);
    assert(arr:length == 3);

    foreach (var i, v in arr)
    {
        writeln("%0: %1" % (i, v));
    }

    var arr2 = arr:flatten;
    assert(arr2:length == 5);
    writeln(arr2);
}
```

Standard library
----------------
GScript2 comes with a tiny collection of general-purpose code written in it:

* std.core - common algorithms
* std.array - array processing functions

Changes from GScript
--------------------
1. Import name is now filename:

```
import "std/array.gs";
```

2. `Null` is now `null`. `length` on `null` variables now returns `0` instead of `1`.

3. An object system: 

```
var obj;
obj.name = "Player";
obj.position = [0, 0];
```

Methods are implemented as function properties that require implicit object reference in first argument, like in Python:

```
obj.foo = func(this, v)
{
    this.prop = v;
};
obj.foo(100);
assert(obj.prop == 100);
```

Currently there is no syntax for object literals.
