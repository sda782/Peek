import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

class SearchWord extends Component {
    state = { searchTerm: '' }
    render() {
        return (
            <>
                <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                    <TextField id="wordinput" label="wordinput" variant="outlined" onChange={this.wordChange} />
                    <Button variant="outlined" onClick={() => this.searchWord()}>Search</Button>
                </Box>
            </>
        )
    }
    searchWord = () => {
        console.log(this.state.searchTerm)
        this.props.getWord(this.state.searchTerm)
    }
    wordChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
}
export default SearchWord