prototype MyPrototype(x)
{
    this.x = x;
    
    this.foo = func(this, y)
    {
        this.y = y;
    };
    
    this.foo(0);
}

func main()
{
    var obj = MyPrototype(3);
    
    obj.foo(5);
    
    if (obj.x != null)
    {
        writeln(obj.x);
    }
    
    if (obj.y != null)
    {
        writeln(obj.y);
    }
}
