import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 當路由改變時，滾動到頁面頂部
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 立即滾動，不要平滑動畫
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop; 