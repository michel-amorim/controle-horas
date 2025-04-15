export function itensDropdown() {
  const semBotoes = {
    id: 'sem-botao',
    label: 'Modal um botão',
    icon: 'looks_two',
    onClick: () => {},
  };

  const umBotao = {
    id: 'um-botao',
    label: 'Modal sem botão',
    icon: 'error',
    onClick: () => {},
  };
  const doisBotoes = {
    id: 'editar-grupo',
    label: 'Modal dois botões',
    icon: 'looks_one',
    onClick: () => {},
  };

  return [doisBotoes, umBotao, semBotoes];
}
