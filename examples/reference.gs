func main()
{
    // Variable reference
    var x = 10;
    addTen(x);
    writeln(x);
    assert(x == 20);
    
    // Function reference
    var res = apply(10, ref sqr);
    assert(res == 100);
}

func addTen(x)
{
    x = x + 10;
}

func sqr(x)
{
    return x * x;
}

func apply(x, fun)
{
    return fun(x);
}