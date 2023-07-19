import { FC, ReactElement, SVGProps } from 'react';
import { RoutesEnum } from './Routes.enum';

export interface Route {
  path: RoutesEnum;
  name?: string;
  Component: ReactElement;
  isPublic?: boolean;
  Icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }> | null;
  isAlignedToBottom?: boolean;
}
