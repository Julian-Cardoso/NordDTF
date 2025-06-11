"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

const sections = ["Inicio", "Produtos", "Contatos", "Sobre"];

export default function Header() {
  const [activeSection, setActiveSection] = React.useState("Inicio");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false); // Estado para o tema
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // Atualiza o tema no <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

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
  const toggleDarkMode = () => setDarkMode((prev) => !prev); // Alterna o tema

  return (
    <header className="bg-white dark:bg-neutral-900 flex items-center p-10 w-full relative z-50">
      {/* Logo */}
      <a href="#Inicio" tabIndex={0} aria-label="Ir para o início">
        {darkMode ? (
          <Image
            src="/logos/Logo-Branca.png"
            alt="Logo NordDTF"
            width={120}
            height={120}
            className="h-full object-contain"
            priority
          />
        ) : (
          <Image
            src="/logos/Logo-Comum.png"
            alt="Logo NordDTF"
            width={120}
            height={120}
            className="h-full object-contain"
            priority
          />
        )}
      </a>

      {/* Menu Desktop */}
      <nav
        className="hidden md:flex items-center justify-end w-full gap-8 ml-8 relative"
        aria-label="Menu principal"
      >
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`pb-1 transition-colors relative ${
              activeSection === id
                ? "text-amber-500 text-lg font-semibold"
                : "text-black dark:text-white text-lg font-semibold"
            }`}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
            {activeSection === id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500"></span>
            )}
          </a>
        ))}
      </nav>

      {/* Botão de alternância de tema */}
      <button
        onClick={toggleDarkMode}
        aria-label="Alternar modo escuro"
        className="ml-4 p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
        type="button"
      >
        <div className="transition-all duration-300">
          {darkMode ? (
            // Ícone de sol estilizado
            <Image
              src="/icons/sun.svg"
              alt="Ícone de sol"
              width={24}
              height={24}
              className="object-contain"
            />
          ) : (
            // Ícone de lua estilizado
            <Image
              src="/icons/moon.svg"
              alt="Ícone de lua"
              width={24}
              height={24}
              className="object-contain"
            />
          )}
        </div>
      </button>

      {/* Menu Mobile */}
      <div className="md:hidden ml-auto flex justify-center items-center relative">
        <button
          ref={buttonRef}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
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
            className="flex flex-row items-center justify-center bg-white dark:bg-neutral-900 border-radius-lg shadow-lg p-4 absolute right-0 top-full mt-2"
            aria-label="Menu mobile"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-base font-semibold whitespace-nowrap px-2 py-1 rounded transition-colors ${
                  activeSection === id
                    ? "text-amber-500"
                    : "text-black dark:text-white"
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
