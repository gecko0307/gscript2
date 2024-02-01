func main()
{
    // Arguments are implicitly passed as an array
    foo(1, 7, 0, 6);

    // Argument is passed as is
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
