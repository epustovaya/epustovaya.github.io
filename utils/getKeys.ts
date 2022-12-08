export const getKeys = <A extends object>(obj: A) => Object.keys(obj) as (keyof A)[];
