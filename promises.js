var A, B, C;

function suma(num1, num2) {
    return Promise.resolve(num1 + num2);
}

suma(1, 2)
	.then(success => {
        A = success;
        console.log('valor actual: '+success);
        return A;
        
	})
	.then(success => suma(success, 3))
	.then(success => {
        B = success;
        console.log('valor actual: '+success);
        return B;
	})
	.then(success => suma(success, 4))
	.then(success => {
        C = success;
        console.log('valor actual: '+success);
        return C;
	})
    .then(success => {
        console.log('total: ' + success)
        console.log('A:'+A+' B:'+B+' C:'+C)
    });