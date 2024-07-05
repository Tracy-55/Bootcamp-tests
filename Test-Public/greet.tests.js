describe('Greet Function', function() {
    it('should greet a person with their name', function() {
        assert.equal(greet('Alice'), 'Hello, Alice!');
    });

    it('should greet a person with another name', function() {
        assert.equal(greet('Bob'), 'Hello, Bob!');
    });
});