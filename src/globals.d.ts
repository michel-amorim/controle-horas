import type BotaoComponent from 'src/components/global/botao-component/padrao/botao-component.vue';
import type DropdownComponent from 'src/components/global/botao-component/dropdown/dropdown-component.vue';
import type IconComponent from 'src/components/global/icon-component/icon-component.vue';
import type CardComponent from 'components/global/card-component/card-component.vue';
import type InputComponent from 'src/components/global/inputs-component/padrao/input-component.vue';
import type SelecaoComponent from 'src/components/global/inputs-component/selecao/select-component.vue';
import type DataComponent from 'src/components/global/inputs-component/data/date-component.vue';
import type ArquivoComponent from 'src/components/global/inputs-component/arquivo/file-component.vue';
import type ContainerComponent from 'src/components/global/container-component/container-component.vue';
import type BaseModalComponent from 'src/components/global/base-modal-component/base-modal-component.vue';
import type ColorComponent from 'src/components/global/inputs-component/color/input-color-component.vue';
import type DataHoraComponent from 'src/components/global/inputs-component/data-hora/input-data-hora-component.vue';
import type HorasComponent from 'src/components/global/inputs-component/horas/horas-component.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BotaoComponent: typeof BotaoComponent;
    DropdownComponent: typeof DropdownComponent;
    CardComponent: typeof CardComponent;
    InputComponent: typeof InputComponent;
    SelecaoComponent: typeof SelecaoComponent;
    HorasComponent: typeof HorasComponent;
    DataComponent: typeof DataComponent;
    ArquivoComponent: typeof ArquivoComponent;
    ContainerComponent: typeof ContainerComponent;
    ColorComponent: typeof ColorComponent;
    DataHoraComponent: typeof DataHoraComponent;
    BaseModalComponent: typeof BaseModalComponent;
    IconComponent: typeof IconComponent;
  }
}

export {};
