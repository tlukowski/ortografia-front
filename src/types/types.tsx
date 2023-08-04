import {ReactNode} from 'react';

export interface LayoutProps {
  children: ReactNode;
}
export interface FormWrapperProps {
  title: string;
  desc: string;
  children: ReactNode;
}

export interface ThankYouFormProps {
  name: string;
}