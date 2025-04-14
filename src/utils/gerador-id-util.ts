const generatedIds: Set<string> = new Set()

export function gerarId(label: string, tipo: string): string {
  if (!label) return `default-${tipo}`

  const baseId = label
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')

  let uniqueId = `${baseId}-${tipo}`
  let counter = 0

  while (generatedIds.has(uniqueId)) {
    counter += 1
    uniqueId = `${baseId}-${counter}-${tipo}`
  }

  generatedIds.add(uniqueId)

  return uniqueId
}

export function resetGeneratedIds(): void {
  generatedIds.clear()
}
