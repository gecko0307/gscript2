/*
Copyright (c) 2014-2024 Timur Gafarov 

Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/

module gscript.program;

import gscript.statement;
import gscript.dynamic;
import gscript.hostfunc;
import gscript.vm;

/*
 * A Program is some sort of a library that caches
 * imported modules and stores host functions, allowing
 * scripts to link against them
 */

class Program
{
    HostFunction[string] hostFunctions;
    Module[string] modules;
    string[] importDirs;
    Dynamic global;

    this()
    {
        this.global = Dynamic(Type.Dictionary);
    }

    void addImportDir(string dir)
    {
        if (dir[$-1] == '\\')
            importDirs ~= dir[0..$-1] ~ "/";
        else if (dir[$-1] != '/')
            importDirs ~= dir ~ "/";
        else
            importDirs ~= dir;
    }

    void addHostFunction(string name, int numArgs, Dynamic delegate(VirtualMachine, Dynamic[]) func)
    {
        hostFunctions[name] = HostFunction(name, numArgs, func);
    }

    bool hasHostFunction(string name)
    {
        if (name in hostFunctions)
            return true;
        else
            return false;
    }
}
