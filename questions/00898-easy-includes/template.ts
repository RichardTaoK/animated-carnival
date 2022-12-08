import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer K, ...infer P]
  ? Equal<K, U> extends true
    ? true
    : Includes<P, U>
  : false
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false
