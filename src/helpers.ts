
export const getId = () => Math.random() + new Date().getTime()

export const checkPath = (path: string):boolean => document.location.pathname === path

export const removeSymbol = (str: string, symbol: string):string => str.replace(symbol, '')

export const kebabToString = (str: string): string => str.split('-').join(' ')

export const capitalizeFirst = (str: string): string => str[0].toUpperCase() + str.substring(1)