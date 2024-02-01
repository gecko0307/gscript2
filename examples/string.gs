func main()
{
    var str = "abccйцъ";

    assert(str is String);

    assert(str[4] == "й");

    str ~= "ЫЖ";
    
    assert(str:length == 9);
    
    foreach(var i, v in str)
    {
        writeln(v);
    }

    assert("йцъ" in str);
}
