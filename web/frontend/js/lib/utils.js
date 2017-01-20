function getRadioButtonValueByName( name )
{
    var result;
    
    try
    {
        var o_radio_group = document.getElementsByName(name);
    
        for (var a = 0; a < o_radio_group.length; a++) 
        {
            if (o_radio_group[a].checked) 
            {
                _result = o_radio_group[a].value;
                break;
            }
        }
        
    } 
    catch (e)
    {
        
    };
    
    return _result;
};

function getInputValueByName( name )
{
    var result = document.getElementsByName(name)[0].value;
    return result;          
};
