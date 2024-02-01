func main()
{
    // arguments are implicitly passed as an array
    foo(1, 7, 0, 6);

    // argument is passed as it is
    foo(5);
}

func foo(args)
{
    var i = 0;
    while (i < args:length)
    {
        writeln(args[i]);
        i += 1;
    }
}
