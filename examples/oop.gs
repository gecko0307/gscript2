func main()
{
    var MyClass;
    MyClass.x = 10;
    MyClass.foo = func(this, y)
    {
        this.y = y;
    };
    
    var obj = new(MyClass);
    obj.x = 3;
    obj.foo(5);
    
    writeln(MyClass);
    writeln(obj);
}
