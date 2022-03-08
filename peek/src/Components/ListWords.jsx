import { List, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'

class ListWords extends Component {
    render() {
        return (
            <>
                <Box sx={{ maxWidth: 300 }}>
                    {this.props.searchRes != null ?
                        <List>
                            {this.props.searchRes.map(word => {
                                return <ListItemButton key={word}>
                                    <ListItemText>{word.word} - {word.phonetic}</ListItemText>
                                </ListItemButton>
                            })}
                        </List>
                        :
                        <p>No words found</p>}
                </Box>
            </>
        )
    }
}
export default ListWords