export const colorMapping: {
  [key: string]: { name: string; translation: string; textColor?: string };
} = {
  // Tons de Vermelho
  '#ffcccc': { name: 'red-1', translation: 'vermelho claro 1' },
  '#ff9999': { name: 'red-2', translation: 'vermelho claro 2' },
  '#ff6666': { name: 'red-3', translation: 'vermelho claro 3' },
  '#ff3333': { name: 'red-4', translation: 'vermelho claro 4' },
  '#ff0000': { name: 'red', translation: 'vermelho escuro 1' },
  '#f50000': { name: 'red-5', translation: 'vermelho escuro 2' },
  '#d60000': { name: 'red-6', translation: 'vermelho escuro 3' },
  '#a30000': { name: 'red-7', translation: 'vermelho escuro 4' },
  '#5c0000': { name: 'red-8', translation: 'vermelho escuro 5' },

  // Tons de Laranja
  '#ffe6cc': { name: 'orange-1', translation: 'laranja claro 1' },
  '#ffcc99': { name: 'orange-2', translation: 'laranja claro 2' },
  '#ffb366': { name: 'orange-3', translation: 'laranja claro 3' },
  '#ff9933': { name: 'orange-4', translation: 'laranja claro 4' },
  '#ff8000': { name: 'orange', translation: 'laranja escuro 1' },
  '#f57b00': { name: 'orange-5', translation: 'laranja escuro 2' },
  '#d66c00': { name: 'orange-6', translation: 'laranja escuro 3' },
  '#a35200': { name: 'orange-7', translation: 'laranja escuro 4' },
  '#5c2e00': { name: 'orange-8', translation: 'laranja escuro 5' },

  // Tons de Amarelo
  '#ffffcc': { name: 'yellow-1', translation: 'amarelo claro 1' },
  '#ffff99': { name: 'yellow-2', translation: 'amarelo claro 2' },
  '#ffff66': { name: 'yellow-3', translation: 'amarelo claro 3' },
  '#ffff33': { name: 'yellow-4', translation: 'amarelo claro 4' },
  '#ffff00': { name: 'yellow', translation: 'amarelo escuro 1' },
  '#f5f500': { name: 'yellow-5', translation: 'amarelo escuro 2' },
  '#d6d600': { name: 'yellow-6', translation: 'amarelo escuro 3' },
  '#a3a300': { name: 'yellow-7', translation: 'amarelo escuro 4' },
  '#5c5c00': { name: 'yellow-8', translation: 'amarelo escuro 5' },

  // Tons de Verde
  '#ccffcc': { name: 'green-1', translation: 'verde claro 1' },
  '#99ff99': { name: 'green-2', translation: 'verde claro 2' },
  '#66ff66': { name: 'green-3', translation: 'verde claro 3' },
  '#33ff33': { name: 'green-4', translation: 'verde claro 4' },
  '#00ff00': { name: 'green-5', translation: 'verde escuro 1' },
  '#00f500': { name: 'green-5', translation: 'verde escuro 2' },
  '#00d600': { name: 'green-6', translation: 'verde escuro 3' },
  '#00a300': { name: 'green-7', translation: 'verde escuro 4' },
  '#005c00': { name: 'green-8', translation: 'verde escuro 5' },

  // Tons de Verde Claro
  '#00ff80': { name: 'light-green', translation: 'verde claro' },
  '#ccffe6': { name: 'light-green-1', translation: 'verde claro claro 1' },
  '#99ffcc': { name: 'light-green-2', translation: 'verde claro claro 2' },
  '#66ffb3': { name: 'light-green-3', translation: 'verde claro claro 3' },
  '#33ff99': { name: 'light-green-4', translation: 'verde claro claro 4' },
  '#00f57b': { name: 'light-green-5', translation: 'verde claro escuro 1' },
  '#00d66c': { name: 'light-green-6', translation: 'verde claro escuro 2' },
  '#00a352': { name: 'light-green-7', translation: 'verde claro escuro 3' },
  '#005c2e': { name: 'light-green-8', translation: 'verde claro escuro 4' },

  // Tons de Ciano
  '#ccffff': { name: 'cyan-1', translation: 'ciano claro 1' },
  '#99ffff': { name: 'cyan-2', translation: 'ciano claro 2' },
  '#66ffff': { name: 'cyan-3', translation: 'ciano claro 3' },
  '#33ffff': { name: 'cyan-4', translation: 'ciano claro 4' },
  '#00ffff': { name: 'cyan', translation: 'ciano escuro 1' },
  '#00f5f5': { name: 'cyan-5', translation: 'ciano escuro 2' },
  '#00d6d6': { name: 'cyan-6', translation: 'ciano escuro 3' },
  '#00a3a3': { name: 'cyan-7', translation: 'ciano escuro 4' },
  '#005c5c': { name: 'cyan-8', translation: 'ciano escuro 5' },

  // Tons de Azul
  '#cce6ff': { name: 'blue-1', translation: 'azul claro 1' },
  '#99ccff': { name: 'blue-2', translation: 'azul claro 2' },
  '#66b3ff': { name: 'blue-3', translation: 'azul claro 3' },
  '#3399ff': { name: 'blue-4', translation: 'azul claro 4' },
  '#0080ff': { name: 'blue', translation: 'azul escuro 1' },
  '#007bf5': { name: 'blue-5', translation: 'azul escuro 2' },
  '#006cd6': { name: 'blue-6', translation: 'azul escuro 3' },
  '#0052a3': { name: 'blue-7', translation: 'azul escuro 4' },
  '#002e5c': { name: 'blue-8', translation: 'azul escuro 5' },

  // Tons de Azul Escuro
  '#ccccff': { name: 'dark-blue-1', translation: 'azul escuro claro 1' },
  '#9999ff': { name: 'dark-blue-2', translation: 'azul escuro claro 2' },
  '#6666ff': { name: 'dark-blue-3', translation: 'azul escuro claro 3' },
  '#3333ff': { name: 'dark-blue-4', translation: 'azul escuro claro 4' },
  '#0000ff': { name: 'dark-blue', translation: 'azul escuro 1' },
  '#0000f5': { name: 'dark-blue-5', translation: 'azul escuro escuro 2' },
  '#0000d6': { name: 'dark-blue-6', translation: 'azul escuro escuro 3' },
  '#0000a3': { name: 'dark-blue-7', translation: 'azul escuro escuro 4' },
  '#00005c': { name: 'dark-blue-8', translation: 'azul escuro escuro 5' },

  // Tons de Roxo
  '#e6ccff': { name: 'purple-1', translation: 'roxo claro 1' },
  '#cc99ff': { name: 'purple-2', translation: 'roxo claro 2' },
  '#b366ff': { name: 'purple-3', translation: 'roxo claro 3' },
  '#9933ff': { name: 'purple-4', translation: 'roxo claro 4' },
  '#8000ff': { name: 'purple', translation: 'roxo escuro 1' },
  '#7b00f5': { name: 'purple-5', translation: 'roxo escuro 2' },
  '#6c00d6': { name: 'purple-6', translation: 'roxo escuro 3' },
  '#5200a3': { name: 'purple-7', translation: 'roxo escuro 4' },
  '#2e005c': { name: 'purple-8', translation: 'roxo escuro 5' },

  // Tons de Rosa
  '#ffccff': { name: 'pink-1', translation: 'rosa claro 1' },
  '#ff99ff': { name: 'pink-2', translation: 'rosa claro 2' },
  '#ff66ff': { name: 'pink-3', translation: 'rosa claro 3' },
  '#ff33ff': { name: 'pink-4', translation: 'rosa claro 4' },
  '#ff00ff': { name: 'pink', translation: 'rosa escuro 1' },
  '#f500f5': { name: 'pink-5', translation: 'rosa escuro 2' },
  '#d600d6': { name: 'pink-6', translation: 'rosa escuro 3' },
  '#a300a3': { name: 'pink-7', translation: 'rosa escuro 4' },
  '#5c005c': { name: 'pink-8', translation: 'rosa escuro 5' },

  // Tons de Cinza
  '#ffffff': { name: 'white', translation: 'branco' },
  '#cdcdcd': { name: 'grey-2', translation: 'cinza claro 1' },
  '#b2b2b2': { name: 'grey-3', translation: 'cinza claro 2' },
  '#999999': { name: 'grey-4', translation: 'cinza claro 3' },
  '#7f7f7f': { name: 'grey-5', translation: 'cinza escuro 1' },
  '#666666': { name: 'grey-6', translation: 'cinza escuro 2' },
  '#4c4c4c': { name: 'grey-7', translation: 'cinza escuro 3' },
  '#333333': { name: 'grey-8', translation: 'cinza escuro 4' },
  '#191919': { name: 'grey-9', translation: 'cinza escuro 5' },
  '#000000': { name: 'black', translation: 'preto' },
};
