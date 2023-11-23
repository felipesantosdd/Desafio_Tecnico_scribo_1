function somaInt(num) {
    const result = [];

    if (isNaN(num)) {
        throw new Error('O valor precisa ser numérico.');
    } else if (!Number.isInteger(num)) {
        throw new Error('O valor precisa ser um número inteiro.');
    } else if (num > 0) {
        for (let index = 0; index < num; index++) {
            if (index % 3 === 0 || index % 5 === 0) {
                result.push(index);
            }
        }
        const sum = result.reduce((acc, current) => acc + current, 0);
        console.log(sum);
    } else {
        const sum = result.reduce((acc, current) => acc + current, 0);
        console.log(sum);
    }
}

try {
    const params = process.argv[2];
    const numericValue = Number(params);
    somaInt(numericValue);
} catch (error) {
    console.error('Algo deu errado:', error.message);
}
