export function getEnumKey(map: any, value: number): string | undefined {
  return Object.keys(map).find(key => map[key] === value);
}
