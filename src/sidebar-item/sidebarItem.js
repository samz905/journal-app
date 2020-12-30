import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';


class SidebarItem extends React.Component {
    selectNote = (n, i) => this.props.selectNote(n, i);

    deleteNote = (note) => {
        if(window.confirm(`Are you sure you want to delete : ${note.title}`)) {
            this.props.deleteNote(note);
        }
    }
    
    render() {
        const { note, index, classes, selectedNoteIndex } = this.props;

        return(
            <div key={index}>
                <ListItem
                    className={classes.listItem}
                    selected={selectedNoteIndex === index}
                    align-items='flex-start'
                >
                    <div
                        className={classes.textSection}
                        onClick={() => this.selectNote(note, index)}
                    >
                        <ListItemText
                            primary={note.title}
                            secondary={new Date(note.date.toDate()).toDateString()}
                        >
                        </ListItemText>
                    </div>
                    <DeleteIcon 
                        className={classes.deleteIcon}
                        onClick={() => this.deleteNote(note)}    
                    ></DeleteIcon>
                </ListItem>
            </div>
        )
    }
}

export default withStyles(styles)(SidebarItem);