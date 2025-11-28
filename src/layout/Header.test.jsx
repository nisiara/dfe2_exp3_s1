import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";

import Header from "./Header";

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};

describe('Conjunto de test para componente Header: ', () => {
  afterEach(cleanup)

  it('Carga inicial componente.',  () => {
    renderComponent()
  })

  it('Mostrar logo.', () => {
    renderComponent()
    const logo = screen.getByRole('img', { name: 'Logo Punto Ticket' })
    expect(logo).toBeDefined()

  })

  it('Verificar ruta logo', () => {
    renderComponent()
    const logo = screen.getByRole('img', { name: 'Logo Punto Ticket' })
    expect(logo).toHaveAttribute('src', '/images/logo.svg')
  })

  it('Verificar ruta home', () => {
    renderComponent()
    const enlaceHome = screen.getByRole('link', { name: /inicio/i })
    expect(enlaceHome).toHaveAttribute('href', '/');
  })

  it('Verificar ruta eventos', () => {
    renderComponent()
    const enlaceEventos = screen.getByRole('link', { name: /Ver todos los eventos/i })
    expect(enlaceEventos).toHaveAttribute('href', '/events');
  })

  it('Verificar ruta nosotros', () => {
    renderComponent()
    const enlaceNosotros = screen.getByRole('link', { name: /Nosotros/i })
    expect(enlaceNosotros).toHaveAttribute('href', '/about-us');
  })

  it('Aplica solo la clase base cuando la ruta no coincide', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    const enlaceEventos = screen.getByRole('link', { name: /Ver todos los eventos/i });
    expect(enlaceEventos).toHaveClass('text-md px-2 py-1 block font-bold text-gray-950');
    expect(enlaceEventos).not.toHaveClass('border-b-2 border-b-gray-950');
  });


  it('Clase "active" en la ruta "Inicio"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    const enlaceInicio = screen.getByRole('link', { name: /Inicio/i });
    expect(enlaceInicio).toHaveClass('border-b-2 border-b-gray-950');
    expect(enlaceInicio).toHaveClass('text-md px-2 py-1 block font-bold text-gray-950');
  });

  it('Clase "active" en la ruta de "Ver todos los eventos"', () => {
    render(
      <MemoryRouter initialEntries={['/events']}>
        <Header />
      </MemoryRouter>
    );

    const enlaceEventos = screen.getByRole('link', { name: /Ver todos los eventos/i });
    expect(enlaceEventos).toHaveClass('border-b-2 border-b-gray-950');
    expect(enlaceEventos).toHaveClass('text-md px-2 py-1 block font-bold text-gray-950');
  });


  it('Clase "active" en la ruta "Nosotros" ', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <Header />
      </MemoryRouter>
    );

    const navLinkNosotros = screen.getByRole('link', { name: /Nosotros/i });
    expect(navLinkNosotros).toHaveClass('border-b-2 border-b-gray-950'); 
  })

  it('No plaicar estilo "active" en sub-rutas (atributo: end)', () => {
    render(
      <MemoryRouter initialEntries={['/events/details']}>
        <Header />
      </MemoryRouter>
    );

    const enlaceEventos = screen.getByRole('link', { name: /Ver todos los eventos/i });
    expect(enlaceEventos).not.toHaveClass('border-b-2 border-b-gray-950');
    expect(enlaceEventos).toHaveClass('text-md px-2 py-1 block font-bold text-gray-950');
  });

})
