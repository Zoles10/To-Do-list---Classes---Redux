import React, {Component} from 'react';
import CurrentNote from './CurrentNote';
import FilterSection from './FilterSection';
import NotesArray from './NotesArray';

export default class App extends Component{
    render() {
        return <div className='app'> 
            <span className='header'>
                <CurrentNote/>
                <FilterSection/>
            </span>
            <NotesArray/>
        </div>
    }
        
    
}