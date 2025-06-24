function getPropValue<T, K extends keyof T>(obj: T, prop: K): T[K] {
  return obj[prop];
}