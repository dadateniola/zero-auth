export interface AuthRedirectProps {
  text: string;
  link: {
    text: string;
    href: string;
  };
}

export interface AuthWrapperProps {
  children: React.ReactNode;
}