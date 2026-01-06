import { type LucideProps } from 'lucide-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

export interface ContactItem {
  content: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}
