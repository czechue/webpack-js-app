import helloWorld from '../src/scripts/helloWorld'

describe('should display text', function () {
    it('hello world', function() {
        expect(helloWorld()).toBe('Hello World');
    })
});