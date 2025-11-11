// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router';
import App from './App.tsx';
import { getProductBySlug } from './data/products';
import { ThemeProvider } from './components/theme-provider.tsx';

const router = createBrowserRouter([
  {
    path: "/p/:slug",
    element: <App />,
    loader: ({ params }) => {
      if (!params.slug) return null;
      return getProductBySlug(params.slug!) || null;
    },
  },
  {
    path: "*",
    element: <div className="p-8 text-white h-screen w-screen flex justify-center items-center">404 - Produto não encontrado</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);