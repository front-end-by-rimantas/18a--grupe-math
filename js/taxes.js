import sum from './sum.js';
import multiply from './multiply.js';

function taxes(pinigelis1, pinigelis2, mokestis) {
    const visoPinigu = sum(pinigelis1, pinigelis2);
    const moketi = multiply(visoPinigu, mokestis);

    return moketi;
}

export default taxes;