import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchField extends Component {
    render(){
        return(
            <TextField id = "standard-basic" label="Enter name of city"/>
        );
    }
}
export default SearchField;