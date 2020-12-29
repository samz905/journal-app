import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebar-item/sidebarItem';

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        }
    }

    newBtnClick = () => {
        this.setState({ addingNote: !this.state.addingNote, title: null })
    }

    updateTitle = (txt) => {
        this.setState({ title: txt })
    }

    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }

    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);

    render() {
        const { notes, classes, selectedNoteIndex } = this.props;

        if(notes) {
            return(
                <div className={classes.sidebarContainer}>
                    <Button 
                        onClick={this.newBtnClick}
                        className={classes.newNoteBtn}
                    >
                        {this.state.addingNote ? 'Cancel' : 'New Note'}
                    </Button>
                    {
                        this.state.addingNote ?
                            <div>
                                <input
                                    type="text"
                                    className={classes.newNoteInput}
                                    placeholder='Enter Note Title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}
                                >
                                </input>
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}
                                >
                                    Create Note
                                </Button>
                            </div>
                        :
                            null
                    }
                    <List>
                        {
                            notes.map((note, index) => {
                                return(
                                    <div>
                                        <SidebarItem
                                            note={note}
                                            index={index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}
                                        >
                                        </SidebarItem>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            );
        } else {
            return(<div></div>);
        }
    }
}

export default withStyles(styles)(Sidebar);