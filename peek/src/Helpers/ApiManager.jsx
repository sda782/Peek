import axios from "axios"

const GetWord = async word => {
    const res = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    console.log(res)
    return res.data
}

export default GetWord