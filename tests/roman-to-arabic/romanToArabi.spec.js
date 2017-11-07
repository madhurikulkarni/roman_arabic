describe('tests/roman-to-arabic/RomanToArabic.spec.js',function(){
    var returnValue;
    describe('When I is passed in',function(){
        beforeEach(function(){
            returnValue = romanToArabic("I");
        });
        it('should return 1',function(){
            expect(returnValue).toBe(1);
        });
    })
});