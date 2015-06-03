describe('My First E2E Test/', function() {
    beforeEach(function() {
        browser.get('http://localhost:8080/');
    });

    it('Should Insert a Username and compare to MDIAZ88', function() {

        element(by.model('gitUser')).sendKeys('MDIAZ88');
        element(by.id('search')).click();
        expect(element.all(by.repeater('r in repos._embedded.Repos')).count()).toBeGreaterThan(1);
        expect(element(by.tagName('input')).getAttribute('value')).toEqual('MDIAZ88');
        
    });
});