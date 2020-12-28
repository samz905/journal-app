import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            text : '',
            title : '',
            id : ''
        }
    }

    handleChange = async (val) => {
        await this.setState({ text: val });
        this.update();
    }

    update = debounce(() => {
        console.log('Updating');
    }, 1500);

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.editorContainer}>
                <ReactQuill 
                    value={this.state.text}
                    onChange={this.handleChange}
                >
                </ReactQuill>
            </div>
        )
    }
}

export default withStyles(styles)(Editor);