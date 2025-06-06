"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const sections = ["Inicio", "Produtos", "Contatos", "Sobre"];
export default function Header() {
  const [activeSection, setActiveSection] = React.useState("Inicio");

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white flex items-center p-5 w-full h-25">
      <Image
        src="/Logo-Comum.png"
        alt="Logo NordDTF"
        width={120}
        height={120}
        className="h-full object-contain"
      />
      <div className="flex items-center justify-end w-full gap-8 ml-8">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`pb-1 ${
              activeSection === id
                ? "border-b-2 border-yellow-600 text-yellow-600 text-lg font-semibold"
                : "text-black text-lg font-semibold"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
}
