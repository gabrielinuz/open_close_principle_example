document.addEventListener('DOMContentLoaded', function () 
{
    function fillOutput(response)
    {
        var responseTextArea = document.getElementById("responseTextArea");
        console.log(response);
        if (response != '') 
        {
            responseTextArea.value = response;
        }
        else
        {
            responseTextArea.value = 'ERROR: CORRUPT OR NOT IMPLEMENTED COMPONENT';
        }
    }

    function commonRequest(responseFormat)
    {
        var request = new RequestWrapper(new XMLHttpRequest());
        request.path = 'backend/main.exe';
        request.callback = fillOutput;
        request.appendParameter('action', 'TestRequestResponse');
        request.appendParameter('greeting', document.getElementById("greet").value);
        request.appendParameter('format', responseFormat);
        request.send();        
    }

    var btn = document.getElementById("jsonButton");
    btn.addEventListener("click", function()
    {
        commonRequest('Json');
    });  

    var btn2 = document.getElementById("xmlButton");
    btn2.addEventListener("click", function()
    {
        commonRequest('Xml');
    });  
});