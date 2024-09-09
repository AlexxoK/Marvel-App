import CryptoJS from "crypto-js"

// Marca de tiempo -> TimeStamp = función salt
const timeStamp = new Date().getTime()

// fetch api marvel
const PRIVATE_API_KEY = '4981258579f939a77dfd01731bc3154ae5a9d3a3'
const PUBLIC_API_KEY = '4f4e626f7e7d1572c6a7433209cd3dd2'

const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString()

export const reqCharacters = async ( page = 1, pageSize = 20) => {
    const offSet = (page - 1) * pageSize
    const api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}&limit=${pageSize}&offset=${offSet}`

    const resp = await fetch(api_url)
    const {data} = await resp.json()

    return data
}