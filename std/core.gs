// Common algorithms

func swap(a, b)
{
    var tmp = a;
    a = b;
    b = tmp;
}

func max(a, b)
{
    if (a > b)
        return a;
    else
        return b;
}

func min(a, b)
{
    if (a < b)
        return a;
    else
        return b;
}

func clamp(x, xmin, xmax)
{
    if (x < xmin) return xmin;
    else if (x > xmax) return xmax;
    else return x;
}
