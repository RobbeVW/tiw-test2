const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

// Provide eventlistener for add button which in his turn will call the add api endpoint
addButton.addEventListener('click', function(event){
    calculate('add');
});

// Provide eventlistener for add button which in his turn will call the add api endpoint
subtractButton.addEventListener('click', function(event){
    calculate('subtract');
});

// builds and API endpoint based on provided operand
// Uses getResultFromApi to call API and show result
function calculate(operand){
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    const apiUrl = '/calc/' + operand + '/' + number1 + '/' + number2;
    getResultFromApi(apiUrl);

}

// Calls the api endpoint using FetchAPI
// The response is written in the result div
function getResultFromApi(apiUrl){
    let fetchOptions = {
        method: 'GET'
      };
      
    fetch(apiUrl, fetchOptions)
        .then(res => {
            return res.json();
        })
        .then(res => {
            document.getElementById('result').innerHTML = 'The result is: ' + res;
        });

}