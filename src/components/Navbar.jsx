import React from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src="../public/logo (4).svg" alt="Apple Logo" />

        <ul>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="../public/search (1).svg" alt="Search" />
          </button>
          <button>
            <img src="../public/Cart (4).svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
}
