function submitform()
{
    console.log("hello world");
    const input2 = document.getElementById('input1').value;

    const degree = document.getElementById('listing');

    const temperature90 = degree.options[degree.selectedIndex].value;
     console.log(temperature90);

    const celtofah = (cel) =>
    {
        let Fahrenheit = ((cel * 9/5)+32);
        return Fahrenheit
    } 

    const fahtocel = (fehr) =>
    {
        let Fahrenheit = ((fehr-32) * 5/9);
        return Fahrenheit
    } 
    
    let result;

    if(temperature90 === 'cel')
    {
        result = celtofah(input2);
        document.querySelector('.answer').innerHTML= `= ${result}°Fahrenheit`;
    }
    else{
        result = fahtocel(input2);
        document.querySelector('.answer').innerHTML= `= ${result}°Celsius`;
    }
}