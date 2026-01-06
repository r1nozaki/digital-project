import { type IconBaseProps } from 'react-icons';

export interface Social {
  id: number;
  href: string;
  icon: React.ComponentType<IconBaseProps>;
  color: string;
}
