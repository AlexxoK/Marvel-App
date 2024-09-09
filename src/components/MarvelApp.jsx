import { useCharacters } from "../hooks/useCharacters"

export const MarvelApp = () => {
    const { characters, formatImageUrl, page, totalPages, setPage } = useCharacters()

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <div className="container m-2 text-center">
            <div className="d-flex flex-row row row-cols-4 position-absolute top-0 start-50 translate-middle-x">
                {
                    // preguntando si characters tiene valores (si NO es null)
                    characters && characters.map((char) => (
                        <div key={char.id}>
                            <h5>{char.name}</h5>
                            <img src={formatImageUrl(char)} style={{ width: '8rem' }} alt={`${char.name} image`} />
                        </div>
                    ))
                }
            </div>
            <div className="pagination position-absolute bottom-0 start-50 translate-middle-x">
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Anterior
                </button>
                <span> Página {page} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}
