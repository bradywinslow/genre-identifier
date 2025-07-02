// Puts the Web-Crypto implementation that ships with Node ≥ 18 on globalThis
import { webcrypto } from 'node:crypto'
Object.defineProperty(globalThis, 'crypto', { value: webcrypto })
