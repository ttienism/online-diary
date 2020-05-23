import React from 'react';
import Card from '../card';
import './styles.css';

/**
* @author
* @function Form
**/

const Form = (props) => {
  return(
        <div className="formcontainer" style={{width:'70%'}}>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box' }}>
                <form>
                    <div className="dateinput">
                        <label for="date">Date </label>
                        <input id="date" type="date" /><br></br>
                    </div>
                    <div className="diaryinput">
                        <label for="diary">Diary </label>
                        <textarea id="diary" name="diary"
                        placeholder="Your feelings here"></textarea>
                    </div> 
                    <div className="buttonAction">
                        <button className="saveButton" type="submit">Save</button>
                    </div> 
                </form>  
            </Card>
        </div>
        
   )

 }

export default Form