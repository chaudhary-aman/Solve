var operation="";
var 𝚿=100;


function insert(varr)
{
    operation+=varr;
    document.getElementById("display").value=operation;
}
function clear()
{
    operation="";
    document.getElementById("display").value=operation;
}

function erase()
{
    operation=operation.slice(0,-1);
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




// Select all buttons inside the Numbers div
const buttons = document.querySelectorAll('#Numbers button');

buttons.forEach(button => {
    // If button has data-value, insert that value on click
    if (button.dataset.value) {
        button.addEventListener('click', () => {
            insert(button.dataset.value);
        });
    }
    // If button has data-action, call corresponding function
    else if (button.dataset.action) {
        if (button.dataset.action === 'clear') {
            button.addEventListener('click', clear);
        } else if (button.dataset.action === 'calculate') {
            button.addEventListener('click', calculation);
        } else if (button.dataset.action === 'erase') {
            button.addEventListener('click', erase);
        }
    }
});


