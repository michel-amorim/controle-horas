import { boot } from 'quasar/wrappers';
import BotaoComponent from 'src/components/global/botao-component/padrao/botao-component.vue';
import DropdownComponent from 'src/components/global/botao-component/dropdown/dropdown-component.vue';
import CardComponent from 'components/global/card-component/card-component.vue';
import InputComponent from 'src/components/global/inputs-component/padrao/input-component.vue';
import SelecaoComponent from 'src/components/global/inputs-component/selecao/select-component.vue';
import DataComponent from 'src/components/global/inputs-component/data/date-component.vue';
import ArquivoComponent from 'src/components/global/inputs-component/arquivo/file-component.vue';
import IconComponent from 'src/components/global/icon-component/icon-component.vue';
import FormComponent from 'components/global/form-component/form-component.vue';
import ColorComponent from 'components/global/inputs-component/color/input-color-component.vue';

import ContainerComponent from 'components/global/container-component/container-component.vue';
import BaseModalComponent from 'src/components/global/base-modal-component/base-modal-component.vue';
import TabelaComponent from 'src/components/global/tabela-component/tabela-component.vue';
import type { DefineComponent } from 'vue';

export default boot(({ app }) => {
  app.component('IconComponent', IconComponent);
  app.component('BotaoComponent', BotaoComponent);
  app.component('DropdownComponent', DropdownComponent);
  app.component('CardComponent', CardComponent);
  app.component('InputComponent', InputComponent);
  app.component('SelecaoComponent', SelecaoComponent);
  app.component('DataComponent', DataComponent);
  app.component('ArquivoComponent', ArquivoComponent);
  app.component('ContainerComponent', ContainerComponent);
  app.component('BaseModal', BaseModalComponent);
  app.component('ColorComponent', ColorComponent);

  app.component('FormComponent', FormComponent);
  app.component(
    'TabelaComponent',
    TabelaComponent as unknown as DefineComponent<unknown, unknown, unknown>,
  );
});
