function result() {
    let login = document.getElementById('input').value
    document.getElementById('result').innerHTML = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '') ? 'No login' : '';
}