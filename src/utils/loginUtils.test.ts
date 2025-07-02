import { describe, expect, test } from 'vitest';
import { generateRandomString, sha256, base64encode } from '../utils/loginUtils';

describe('generate a random string', () => {
    test('return type is a string ', () => {
        // Arrange and act
        const randomString = generateRandomString(64);
        
        // Assert
        expect(typeof randomString).toBe('string');
    });
    test('returned string contains certain number of characters', () => {
        // Arrange and act
        const randomString1 = generateRandomString(16);
        const randomString2 = generateRandomString(32);
        const randomString3 = generateRandomString(0);
        
        // Assert
        expect(randomString1.length).toBe(16);
        expect(typeof randomString1).toBe('string');
        expect(randomString2.length).toBe(32);
        expect(typeof randomString2).toBe('string');
        expect(randomString3.length).toBe(0);
        expect(typeof randomString3).toBe('string');
    });
    test('returned string only contains certain characters', () => {
        // Arrange and act
        const randomString = generateRandomString(64);
        const regex = /^[A-Za-z0-9]+$/;
        
        // Assert
        expect(randomString).toMatch(regex);
    });
});


describe('hash code verifier', () => {
    test('sha256 hashes input string correctly', async () => {
        // Helper function to convert ArrayBuffer to hex string
        function bufferToHex(buffer: ArrayBuffer): string {
        return Array.from(new Uint8Array(buffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('')
        }

        // Arrange
        const input = 'hello';
        // SHA-256 of 'hello'
        const expectedHash = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824';

        // Act
        const resultBuffer = await sha256(input);
        const resultHex = bufferToHex(resultBuffer);

        // Assert
        expect(resultHex).toBe(expectedHash);
    });
});


describe('base64 encode the hash', () => {
    test('encodes a plain ASCII string', () => {
        // Arrange
        const toBuffer = (s: string) => new TextEncoder().encode(s).buffer;

        // Act
        const result = base64encode(toBuffer('test'));
        
        // Assert
        expect(result).toBe('dGVzdA');
    });

    test('replaces "+" and "/" correctly', () => {
        // Arrange
        const bytes = new Uint8Array([0xff, 0xee, 0xdd]).buffer;
        
        // Act
        const result = base64encode(bytes);

        // Assert
        expect(result).toBe('_-7d');
    });

    test('returns an empty string for an empty buffer', () => {
        expect(base64encode(new ArrayBuffer(0))).toBe('');
    });
});
