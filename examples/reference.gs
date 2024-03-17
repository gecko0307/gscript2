func main()
{
    // By default all variables are passed by reference
    var x = 10;
    addTen(x);
    assert(x == 20);
    
    // Dereference
    var y = 10;
    addTen(@y);
    assert(y == 10);
    
    // Function reference
    var res = apply(10, ref sqr);
    assert(res == 100);
}

func addTen(x)
{
    x += 10;
}

func sqr(x)
{
    return x * x;
}

func apply(x, fun)
{
    return fun(x);
}