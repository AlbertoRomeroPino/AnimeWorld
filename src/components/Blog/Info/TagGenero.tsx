interface TagGeneroProps {
    generos: string[];
}

// 1. Especifica el tipo de argumento como TagGeneroProps
function TagGenero({ generos }: TagGeneroProps) { 
    return (
        <li className="anime-detail-card__meta-item">
            <span className="anime-detail-card__meta-label">Género:</span>
            <span className="anime-detail-card__meta-value">
                {
                    generos.map((genero) => (
                        // 2. Agrega una coma y espacio entre los géneros para mejor legibilidad
                        <span key={genero}>
                            #{genero} 
                        </span>
                    ))
                }
            </span>
        </li>
    );
}

export default TagGenero