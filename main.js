const age = 29;

const res = prompt('Entrez un age');

if(res < age){
    alert('trop petit!');
}
else if(res > age) {
    alert('trop grand!');
}
else {
    alert('Bravo! Vous avez trouvé:)');
}