import type { QIconProps } from 'quasar';
import type { MaterialIconValues } from 'src/constants/lista-icons-constants';
import type { MedidasKeys } from 'src/constants/medidas-espaços';

export interface IconProps {
  name: MaterialIconValues;
  size?: MedidasKeys;
  color?: QIconProps['color'];
}
