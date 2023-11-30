import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollTopProps {
  children: ReactNode;
}
const ScrollTop: React.FC<ScrollTopProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {children}
    </div>
  );
};

export default ScrollTop;
