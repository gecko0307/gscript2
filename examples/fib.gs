// Fibonacci in imperative style

func fib(n)
{
    if (n == 0)
        return n;
    if (n == 1)
        return n;
        
    var sum = 1, prev = 0, temp;

    var i = 1;
    while(i < n)
    {
        temp = prev;
        prev = sum;
        sum = prev + temp;
        i = i + 1;
    }
    
    return sum;
}

func main()
{
    writeln(fib(20));
}
