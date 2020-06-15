import React, {Component} from 'react';
import Card from '../card';
import './styles.css';
import fire from '../firebase'

/**
* @author
* @function Form
**/
class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {date: '', diary: ''};
    
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleFormChange(e){
        const target = e.target;
        const value = target.value
        const name = target.name;
        this.setState({
            //value: e.target.value,
            //date: e.target.value
            [name]: value
        });
    }
    handleSubmit(e){  
        const { date, diary } = this.state;
        e.preventDefault(); // <- prevent form submit from reloading the page
        console.log(this.state.date + this.state.diary);
        fire.database().ref('messages').push({
            date: date,
            diary: diary,
          });
        alert("Saved!");
        this.setState({
            date: '',
            diary: ''
        });
    }

    // refreshPage(){
    //     document.getElementById(userCityEmail).value = "";
    //     document.getElementById(cityTextField).value = "";
    //   }
    

    render(){
        return(
            <div className="formcontainer" style={{width:'70%'}}>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', paddingBottom: '10px' }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="dateinput">
                        <label>Date </label>
                        <input onChange={this.handleFormChange} id="date" value={this.state.date} 
                        type="date" name="date" /><br></br>
                    </div>
                    <div className="diaryinput">
                        <label>Diary </label>
                        <textarea onChange={this.handleFormChange} id="diary" value={this.state.diary}
                        placeholder="Your feelings here" name="diary"></textarea>
                    </div> 
                    <div className="buttonAction">
                        <button type="submit" value="Submit" className="saveButton">Save</button>
                    </div> 
                </form>  
            </Card>
        </div>
        ) ;
    }
}

// const Form = (props) => {
//   return(
//         <div className="formcontainer" style={{width:'70%'}}>
//             <Card style={{ marginBottom: '20px', boxSizing: 'border-box', paddingBottom: '10px' }}>
//                 <form>
//                     <div className="dateinput">
//                         <label for="date">Date </label>
//                         <input id="date" type="date" /><br></br>
//                     </div>
//                     <div className="diaryinput">
//                         <label for="diary">Diary </label>
//                         <textarea id="diary" name="diary"
//                         placeholder="Your feelings here"></textarea>
//                     </div> 
//                     <div className="buttonAction">
//                         <button className="saveButton" type="submit">Save</button>
//                     </div> 
//                 </form>  
//             </Card>
//         </div>
        
//    )

//  }

export default Form