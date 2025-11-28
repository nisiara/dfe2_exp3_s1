import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";

import Footer from './Footer'

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
};

describe('Conjunto test componente Footer: ', () => {
  afterEach(cleanup)

  it('Carga inicial componente', () => {
    renderComponent()
  })

  it('Verificar ruta home', () => {
      renderComponent()
      const enlaceHome = screen.getByRole('link', { name: /inicio/i })
      expect(enlaceHome).toHaveAttribute('href', '/');
    })
  
    it('Verificar ruta eventos', () => {
      renderComponent()
      const enlaceEventos = screen.getByRole('link', { name: /Todos los eventos/i })
      expect(enlaceEventos).toHaveAttribute('href', '/events');
    })
  
    it('Verificar ruta nosotros', () => {
      renderComponent()
      const enlaceNosotros = screen.getByRole('link', { name: /Nosotros/i })
      expect(enlaceNosotros).toHaveAttribute('href', '/about-us');
    })

} )