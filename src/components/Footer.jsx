import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import logo from "../assets/13.jpg";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((current) =>
      current.includes(section)
        ? current.filter((s) => s !== section)
        : [...current, section]
    );
  };

  const isSectionExpanded = (section) => expandedSections.includes(section);

  return (
    <footer className="bg-zinc-900  py-10 bottom-0 ">
      <div className="container mx-auto px-2">
        {/* Mobile Accordion */}
        <div className="md:hidden space-y-2">
          {/* Categories Section */}
          <div className="border-b border-zinc-800">
            <button
              onClick={() => toggleSection("categories")}
              className="w-full py-4 flex justify-between items-center text-emerald-500"
            >
              <span className="text-lg font-semibold">Categories</span>
              {isSectionExpanded("categories") ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>
            {isSectionExpanded("categories") && (
              <ul className="space-y-2 pb-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Operating Room Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Laboratory Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Medical X-ray Machine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Ultrasound Scanner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Gynecology & Obstetrics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Dental Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    ENT Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Endoscopes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Morgue Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Sterilization Equipment
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* About Us Section */}
          <div className="border-b border-zinc-800">
            <button
              onClick={() => toggleSection("about")}
              className="w-full py-4 flex justify-between items-center text-emerald-500"
            >
              <span className="text-lg font-semibold">About Us</span>
              {isSectionExpanded("about") ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>
            {isSectionExpanded("about") && (
              <ul className="space-y-2 pb-4 ">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Company Honor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Exhibition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    Family Photo Album
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Contact Us Section */}
          <div className="border-b border-zinc-800">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full py-4 flex justify-between items-center text-emerald-500"
            >
              <span className="text-lg font-semibold">Contact Us</span>
              {isSectionExpanded("contact") ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>
            {isSectionExpanded("contact") && (
              <ul className="space-y-3 pb-4">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
                  <span>
                    Add: 2nd Floor, Building C, Wanlima Industrial Park, No.188,
                    Xinye Road, Haizhu District, Guangzhou, 510000, PRC
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span>TEL: +86-020-34174486</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span>MOB: +86-18998432898</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>E-mail: info@ysenmed.com</span>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {/* Categories Section */}
          <div>
            <h3 className="text-emerald-500 text-lg font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Operating Room Equipment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Laboratory Equipment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Medical X-ray Machine
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Ultrasound Scanner
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Gynecology & Obstetrics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Dental Equipment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  ENT Equipment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Endoscopes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Morgue Equipment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Sterilization Equipment
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-emerald-500 text-lg font-semibold mb-4 ">
              About Us
            </h3>
            <ul className="space-y-2 text-zinc-200 ">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Company Honor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Exhibition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-300 transition-colors"
                >
                  Family Photo Album
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-zinc-500">
            <h3 className="text-emerald-500 text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-zinc-100">
              <li className="flex items-start gap-2 text-zinc-100">
                <MapPin className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-500">
                  Add: 2nd Floor, Building C, Wanlima Industrial Park, No.188,
                  Xinye Road, Haizhu District, Guangzhou, 510000, PRC
                </span>
              </li>
              <li className="flex items-center gap-2 text-zinc-500">
                <Phone className="w-5 h-5 text-emerald-500 " />
                <span>TEL: +011-189-9843-2898</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-500 transition-colors">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>MOB: +251-02-341-7448</span>
              </li>
              <li className="flex items-center gap-2  text-zinc-500">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>E-mail: info@stem_medica.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center">
              <img src={logo} alt="STEM  Logo" className="w-30 h-10 mr-4 " />
            </div>
            <div className="flex gap-4 text-zinc-500">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-zinc-500 mt-8">
            <p>
              Guangzhou Yueshen Medical Equipment Co., Ltd. © All Rights
              Reserved
            </p>
            <div className="mt-2 space-x-2">
              <span>Links:</span>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Equipo Médico
              </a>
              <span>|</span>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Équipement Médical
              </a>
              <span>|</span>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Medical X-ray Machine
              </a>
              <span>|</span>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Ultrasound Scanner
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
