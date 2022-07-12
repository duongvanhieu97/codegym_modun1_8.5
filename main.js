function result() {
    let a = Number(document.getElementById('input1').value)
    let b = Number(document.getElementById('input2').value)
    document.getElementById('result').innerHTML = (a + b < 4) ? 'Below' : 'Over';
}