import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebar-item/sidebarItem';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null,
            currDate: new Date(),
            compareDate: new Date()
        }
    }

    newBtnClick = () => {
        this.setState({ addingNote: !this.state.addingNote, title: null, currDate: new Date() })
    }

    updateTitle = (txt) => {
        this.setState({ title: txt })
    }

    handleChange = async(date) => {
        this.setState({ currDate: date })
    }

    handleField = async (date) => {
        this.setState({ compareDate: date })
    }

    newNote = () => {
        this.props.newNote(this.state.title, this.state.currDate);
        this.setState({ title: null, addingNote: false });
        window.location.reload(false);
    }

    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);

    render() {
        const { notes, classes, selectedNoteIndex } = this.props;

        if(notes) {

            return(
                <div className={classes.sidebarContainer}>
                    <label>Select Date for filter: </label> 
                    <DatePicker
                        selected={ this.state.compareDate }
                        onChange={ this.handleField }
                        name="compareDate"
                        className={classes.newNoteInput}
                        dateFormat="MM/dd/yyyy"
                    />
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
                                ></input>
                                <DatePicker
                                    selected={ this.state.currDate }
                                    onChange={ this.handleChange }
                                    name="currDate"
                                    className={classes.newNoteInput}
                                    dateFormat="MM/dd/yyyy"
                                />
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
                            notes
                                .filter(note => note.date.toDate().setHours(0,0,0,0) === this.state.compareDate.setHours(0,0,0,0))
                                .map((note, index) => {
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