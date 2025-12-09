import type { Personaje } from "../../types/personage";
import PintarPersonaje from "./Reutilizacion/PintarPersonaje";

interface SidebarProps{
    ListPersonajes : Personaje[]
}

function Sidebar({ListPersonajes} : SidebarProps){

    return(
        <aside className="sidebar">
            {
                ListPersonajes.slice(0,3).map((personaje) => (
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