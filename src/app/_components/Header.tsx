"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

const sections = ["Inicio", "Produtos", "Contatos", "Sobre"];

export default function Header() {
  const [activeSection, setActiveSection] = React.useState("Inicio");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Observa seções para destacar o link ativo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuToggle = useCallback(() => setMenuOpen((open) => !open), []);
  const handleMenuLinkClick = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="bg-white flex items-center p-10 w-full relative z-50">
      {/* Logo */}
      <a href="#Inicio" tabIndex={0} aria-label="Ir para o início">
        <Image
          src="/Logo-Comum.png"
          alt="Logo NordDTF"
          width={120}
          height={120}
          className="h-full object-contain"
          priority
        />
      </a>

      {/* Menu Desktop */}
      <nav
        className="hidden md:flex items-center justify-end w-full gap-8 ml-8"
        aria-label="Menu principal"
      >
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`pb-1 transition-colors ${
              activeSection === id
                ? "text-yellow-600 text-lg font-semibold"
                : "text-black text-lg font-semibold"
            }`}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden ml-auto flex justify-center items-center relative">
        <button
          ref={buttonRef}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          {menuOpen ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
        {menuOpen && (
          <nav
            id="mobile-menu"
            ref={menuRef}
            className="flex flex-row items-center justify-center bg-white border-radius-lg shadow-lg p-4 absolute right-0 top-full mt-2"
            aria-label="Menu mobile"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-base font-semibold whitespace-nowrap px-2 py-1 rounded transition-colors ${
                  activeSection === id ? "text-yellow-600" : "text-black"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
                onClick={handleMenuLinkClick}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
