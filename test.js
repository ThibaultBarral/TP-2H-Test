const assert = require('assert');



function somme(nombre1 = 0, nombre2 = 0) {
    if (typeof nombre1 !== 'number' || typeof nombre2 !== 'number') {
        throw new Error('paramètre invalide');
    }
    return nombre1 + nombre2;
}



describe('Tests unitaires pour la fonction somme()', function () {
    it('Avec les valeurs de paramètres 2 et 3, la fonction somme() est sensée retourner la valeur 5', function () {
        assert.strictEqual(somme(2, 3), 5);
    });

    it('Avec les valeurs de paramètres -1 et 4, la fonction somme() est sensée retourner la valeur 3', function () {
        assert.strictEqual(somme(-1, 4), 3);
    });

    it('Avec les valeurs de paramètres 0 et 0, la fonction somme() est sensée retourner la valeur 0', function () {
        assert.strictEqual(somme(0, 0), 0);
    });
});


describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});