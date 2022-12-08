type TupleToObject<T extends readonly PropertyKey[]> = { [k in T[number]]: k }
