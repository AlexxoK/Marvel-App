import { useState, useEffect } from "react"
import { reqCharacters } from "../services/characters"

export const useCharacters = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        fetchCharacters(page);
    }, [page])
     
    const fetchCharacters = async (page) => {
        const pageSize = 20;
        const data = await reqCharacters(page, pageSize);
    
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.total / pageSize));
    }

    const formatImageUrl = (char) => {
        const imagePath = char.thumbnail
        const url_image = `${imagePath.path}.${imagePath.extension}`
        return url_image
    }

    return {
        characters,
        formatImageUrl,
        page,
        setPage,
        totalPages
    }
}
