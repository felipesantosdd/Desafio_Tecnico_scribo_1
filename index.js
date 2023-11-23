function somaInt(num) {
    const result = [];

    if (isNaN(num)) {
        throw new Error('O valor precisa ser numérico.');
    } else if (!Number.isInteger(num) || num <= 0) {
        throw new Error('O valor precisa ser um número inteiro positivo.');
    }

    for (let index = 0; index < num; index++) {
        if (index % 3 === 0 || index % 5 === 0) {
            result.push(index);
        }
    }

    const sum = result.reduce((acc, current) => acc + current, 0);

    sum > 0 ? console.log(sum) : console.log('Este número não tem antecessores divisíveis por 3 ou 5.');
}

try {
    const params = process.argv[2];
    const numericValue = Number(params);
    somaInt(numericValue);
} catch (error) {
    console.error('Erro:', error.message);
}
