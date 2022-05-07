
export const getId = () => Math.random() + new Date().getTime()

export const checkPath = (path: string):boolean => document.location.pathname === path