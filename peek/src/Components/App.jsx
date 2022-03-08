import { Box, CssBaseline } from "@mui/material"
import GetWord from "Helpers/ApiManager"
import React, { Component } from "react"
import HelloWorld from "./HelloWorld"
import ListWords from "./ListWords"
import SearchWord from "./SearchWord"

class App extends Component {
    state = { searchRes: null }
    render() {
        return (
            <Box sx={{ p: 5, textAlign: 'center', maxWidth: 600 }}>
                <CssBaseline />
                <HelloWorld />
                <SearchWord getWord={this.getWord} />
                <ListWords searchRes={this.state.searchRes} />
            </Box>
        )
    }
    getWord = async (word) => {
        var res = await GetWord(word)
        console.log(res)
        this.setState({ searchRes: res })
    }
}
export default App