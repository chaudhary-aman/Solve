var operation="";
var 𝚿=100;

function insert(varr)
{
    operation+=varr;
    document.getElementById("display").value=operation;
}

function erase()
{
    operation=operation.slice(0,-1);
    document.getElementById("display").value=operation;
}
function clear()
{
    operation="";
    document.getElementById("display").value=operation;
}
function calculation()
{
    try {
        result=eval(operation);
        document.getElementById("display").value=result;
        operation=result.toString();

    }
    catch(e)
    {
        document.getElementById("display").value="Error";
    }
}

