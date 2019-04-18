function showPerson (name, age, profession) {
    console.log('Name: ', name, '\nAge: ', age, '\nProfession: ', profession);
}



function callerOne (...args) {
    //showPerson.apply(this, args);
    const d = [...args];
    console.log(d);
    showPerson(...args);
}


callerOne('Muqsith', 32, 'Software Developer');
