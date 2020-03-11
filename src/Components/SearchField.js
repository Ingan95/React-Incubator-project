import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchField extends Component {
    render(){
        return(
            <TextField id = "standard-basic" label= {this.props.text} onChangeCapture = {this.props.onChangeCapture} onKeyDownCapture = {this.props.onKeyDownCapture}/>
        );
    }
}
export default SearchField;