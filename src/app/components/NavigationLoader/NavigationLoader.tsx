'use client';

import NProgress from 'nprogress';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import 'nprogress/nprogress.css';

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return null;
}
