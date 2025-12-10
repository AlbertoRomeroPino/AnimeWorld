import type { Personaje } from "../../types/personage";
import PintarPersonaje from "./Reutilizacion/PintarPersonaje";
import "./Sidebar.css";

interface SidebarProps{
    ListPersonajes : Personaje[]
}

function Sidebar({ListPersonajes} : SidebarProps){

    return(
        <aside className="sidebar">
            {
                ListPersonajes.map((personaje) => (
                    <>
                    <h1>{personaje.rol}</h1>
                    <PintarPersonaje key={personaje.nombre} personaje={personaje} />
                    </>
                ))
            }
        </aside>
    )

}

export default Sidebar;