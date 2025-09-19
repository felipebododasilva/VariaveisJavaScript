const readline = require('readline').createInterface({
    Input: process.stdin,
    output: process.stdout
});

let nota1, nota2, nota3, nota4, media;

readline.question('', (n1) => {
    nota1 = parseFloat(n1);
    readline.question('', (n2) => {
        nota2 = parseFloat(n2);
        readline.question('', (n3) => {
            nota3 = parseFloat(n3);
            readline.question('', (n4) => {
                nota4 = parseFloat(n4);
                media = (nota1+nota2+nota3+nota4)/4;
                console.log(media.tofixed(2));
                readline.close();

            });
        });
    });
});
