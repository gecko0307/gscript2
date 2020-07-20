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
