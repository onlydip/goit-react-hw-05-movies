import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/index';
import { Container } from '../Container/index';

export const Layout = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Header />
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
