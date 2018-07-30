import formatter from '../../src/utilities/fomatters'

describe('formatter utility test suite',() => {

    describe('daysOfWeek algorithm', ()=> {
        test('Returns empty string if argument parameter is not numeric',() => {
            expect(formatter.daysToWeeks()).toBe('');
            expect(formatter.daysToWeeks(null)).toBe('');
            expect(formatter.daysToWeeks(undefined)).toBe('');
            expect(formatter.daysToWeeks('test')).toBe('');
        });

        test('Returns 1 week if days parameter provided is 7 or less',() => {
            for(let i = 0; i <= 7; i++){
                expect(formatter.daysToWeeks(i)).toBe('1 week');
            }
        });

        test('Returns ceiling if days parameter is not equally divisible by 7',() => {
            for(let i = 8; i <= 11; i++){
                expect(formatter.daysToWeeks(i)).toBe('2 weeks');
            }
        });
    })


    describe('numberToCurrency algorithm', ()=> {
        test('Returns $0 if argument parameter is not numeric',() => {
            expect(formatter.numberToCurrency()).toBe('$0');
            expect(formatter.numberToCurrency(null)).toBe('$0');
            expect(formatter.numberToCurrency(undefined)).toBe('$0');
            expect(formatter.numberToCurrency('test')).toBe('$0');
        });

        test('Returns Formatted Currency value for valid numeric parameters',() => {
            expect(formatter.numberToCurrency(250)).toBe('$250');
            expect(formatter.numberToCurrency(1001)).toBe('$1001');
        });

    })
});