import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/program", label: "Program" },
    { to: "/candidates", label: "Candidates" },
    { to: "/delegates", label: "Delegates" },
    { to: "/register", label: "Register" },
    { to: "/sponsors", label: "Sponsors" },
    { to: "/livestream", label: "Livestream" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-accent">ECOBA</span>
            <span className="text-primary-foreground">2025</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};