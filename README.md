GScript2
========
GScript2 is a prototype-oriented toy scripting language and accompanying VM. It is a successor of [GScript](https://github.com/gecko0307/mathom/tree/master/gscript). Both compiler and the runtime are written in D.

Provided code is not optimized and may contain bugs.

> GScript2 is discontinued. Its successor, [GScript3](https://github.com/gecko0307/gscript3), is currently in development.

Features
--------
* Modules
* Dynamic type system
* Prototype-based OOP
* Functions are first-class objects
* Strings with Unicode support (UTF-8)

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

Running the script:

```
gs script.gs
```

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

Objects can be created using prototype functions. They are like normal functions, but with a built-in `this` variable that can be used as an object. `this` is implicitly returned from a prototype function, if it doesn't return any value:

```
prototype MyPrototype(x)
{
    this.x = x;
    
    this.foo = func(this, y)
    {
        this.y = y;
    };
}

func main()
{
    var obj = MyPrototype(3);
    obj.foo(5);
    
    writeln(obj.x);
    writeln(obj.y);
}
```

The above `MyPrototype` definition is just a syntactic sugar for the following:

```
func MyPrototype(x)
{
    var this;
    
    this.x = x;
    
    this.foo = func(this, y)
    {
        this.y = y;
    };
    
    return this;
}
```

4. Global variables are implemented using a built-in dictionary `global`:

```
func main()
{
    global.x = 10;
    foo();
    writeln(global.x);
}

func foo()
{
    global.x *= 2;
}
```

Standard library
----------------
GScript2 comes with a tiny collection of general-purpose code written in it:

* std.core - common algorithms
* std.array - array processing functions

Built-in host functions
-----------------------
Some of the functionality in the language is implemented in runtime using host functions (native D functions), rather than VM instructions:

`assert(value)` - stops execution with a traceback if `value` is 0 or null. Otherwise does nothing and returns 0.

`length(value)` - if `value` is an array, returns its length. If `value` is string, returns its character count. If `value` is null, returns 0. Otherwise returns 1.

`array(values)` - constructs an array from given argument(s). If `values` is an array, returns this array as is.

`new(value)` - if `value` is string, array or dictionary object, returns its copy. Otherwise returns `value` as is.

`writeln(values)` - prints `values` to standard output.

`sqrt(x)` - if `x` is float, returns its square root. Otherwise stops execution with a traceback.

`pow(x, n)` - if `x` is float, returns its power of `n`. Otherwise stops execution with a traceback.

`float(value)` - if `value` is string, parses it as a real number and returns the result. Otherwise stops execution with a traceback.

`sin(x)` - if `x` is float, returns sine of `x`. Otherwise stops execution with a traceback.

`cos(x)` - if `x` is float, returns cosine of `x`. Otherwise stops execution with a traceback.

`typestr(value)` - returns type of `value` as a string.

It is possible to add custom host functions - look into `main.d` to learn how to do it.

Building standalone GScript2 applications
-----------------------------------------
GScript2 compiles scripts to a sequence of VM instructions. This sequence is called intermediate representation (IR). You can save IR to an *.ir file and execute it instead of the script itself:

`gs --ir main.gs`

`gs main.ir`

GScript2 runtime automatically loads `main.ir` from working directory if you don't specify an input script. So you can ship gs executable with main.ir file to end users.
