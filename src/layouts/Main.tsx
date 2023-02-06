import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}
    {props.children}
    <Footer />
  </div>
);

export { Main };
