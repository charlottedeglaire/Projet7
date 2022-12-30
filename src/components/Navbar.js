import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function navbar() {
    return (
        <header>
                <img src={Logo} alt="logo kasa" className="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "accueil_navbar active"
                                    : "accueil_navbar"
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "about_navbar active"
                                    : "about_navbar"
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
