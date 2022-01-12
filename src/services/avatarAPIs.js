export const getCharacters = async (page = 1) => {
    try {
        const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
        const chars = await res.json()
        return chars
    } catch (error) {
        console.log(error.message)
    }
}

export const getCharacter = async (id) => {
    try {
        const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
        const char = await res.json()
        return char
    } catch (error) {
        console.log(error.message)
    }
}