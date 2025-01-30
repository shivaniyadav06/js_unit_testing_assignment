// tests/functions.test.js
const {
    calculateDiscount,
    filterProducts,
    sortProducts,
    validateEmail
} = require('../src/functions');

// Mock data for testing
const mockProducts = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 750 }
];

// 1. Test calculateDiscount
describe('calculateDiscount', () => {
    test('applies discount correctly', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });

    test('throws error for invalid price', () => {
        expect(() => calculateDiscount(-100, 10)).toThrow('Invalid input');
    });

    test('throws error for invalid discount', () => {
        expect(() => calculateDiscount(100, -10)).toThrow('Invalid input');
    });
});

// 2. Test filterProducts
describe('filterProducts', () => {
    test('filters products by query', () => {
        const filtered = filterProducts(mockProducts, 'lap');
        expect(filtered).toEqual([{ name: 'Laptop', price: 1000 }]);
    });

    test('throws error for invalid products input', () => {
        expect(() => filterProducts('not an array', 'lap')).toThrow('Invalid input');
    });

    test('throws error for invalid query input', () => {
        expect(() => filterProducts(mockProducts, 123)).toThrow('Invalid input');
    });
});

// 3. Test sortProducts
describe('sortProducts', () => {
    test('sorts products by price', () => {
        const sorted = sortProducts(mockProducts, 'price');
        expect(sorted).toEqual([
            { name: 'Phone', price: 500 },
            { name: 'Tablet', price: 750 },
            { name: 'Laptop', price: 1000 }
        ]);
    });

    test('sorts products by name', () => {
        const sorted = sortProducts(mockProducts, 'name');
        expect(sorted).toEqual([
            { name: 'Laptop', price: 1000 },
            { name: 'Phone', price: 500 },
            { name: 'Tablet', price: 750 }
        ]);
    });

    test('throws error for invalid key', () => {
        expect(() => sortProducts(mockProducts, 'invalidKey')).toThrow('Invalid input');
    });
});

// 4. Test validateEmail
describe('validateEmail', () => {
    test('validates correct email', () => {
        expect(validateEmail('test@example.com')).toBe(true);
    });

    test('invalidates incorrect email', () => {
        expect(validateEmail('invalid-email')).toBe(false);
    });

    test('throws error for non-string input', () => {
        expect(() => validateEmail(123)).toThrow('Invalid input');
    });
});