document.addEventListener('DOMContentLoaded', function() {

   document.querySelector('#colorForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const color = document.querySelector('#color').value;

    document.querySelector('#hello').style.color = color;

    });
});