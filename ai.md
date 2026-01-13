# Contexto do projeto

## Padroes de UI Para tabela

- Utilizar q-btn
- Utilizar q-btn-group para multiplos botoes

## Padroes de UI Para tabela

- Coluna de ações em botao
- Editar com cor warning
- Visualizar com primary
- Remover/inativar com danger/error
- Se houver mais de uma acao utilze q-btn-group
- Coluna de acoes eh a menor possivel sem wrap
- Coluna de acoes deve usar botoes q-btn(nao utilizar flat)
- Quando houverem filtros na tabela, exiber os filtros logo a cima da tabela.

## Padroes de UI para pagina

- ContainerComponent é o elemento principal da pagina
- ContainerComponent possui breadcrumb no topo, e logo a baixo um card principal (so a um container Component por
  pagina)
- ContainerComponent possui titulo a esquerda
- ContainerComponent possui acoes a direita
- SeccaoComponent é usado dentro do ContainerComponent
- SeccaoComponent não possui borda lateral e superior, somente borda bottom
- SeccaoComponent possui titulo a esquerda
- SeccaoComponent possui ações a direita
- SeccaoComponent possui conteudo
- SeccaoComponent quando possui editar, o botao fica desabilitado quando estiver em edição
- SeccaoComponent possui as seguintes ações abaixo do conteudo: Salvar e cancelar, quando estiver em modo edição, não
  exibe os botoes caso contrario
- SeccaoComponent deve ter uma distancia entre cada SeccaoComponent

## Padroes de UI para exibir detalhes

- DetalhesComponent é um elemento que exibe detalhes em campos
- DetalhesComponent quando em modo de edição exibe input dos campos, caso o campo não seja editavel o campo fica com
  disabled, mas é exibido como input. Caso o input seja enum ou opcoes definidas utilize select, nos demais text,number, ou textarea a depender do tipo
- Cada campo do DetalhesComponent deve ser composto de Label e valor. Label a cima, valor em baixo.
- Cada campo do DetalhesComponent deve ser feito em grid ou flex, e devem possui o mesmo tamanho de altura e largura
- Cada campo do DetalhesComponent deve ter uma dinstancia vertical e horizontal


