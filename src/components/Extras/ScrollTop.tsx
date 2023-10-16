import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop: React.FC = ({ children }) => {
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
