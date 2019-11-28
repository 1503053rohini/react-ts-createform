import React,{Component} from 'react';

export default class EmployeeData extends Component
{
    constructor(props)
    {
      super(props);
      this.state={
        fname:"",
        lname:'',
        add: '' ,
        Isbilling:'',
        gender:'',
        state:''
      };
      this.getdata= this.getdata.bind(this);

    };

getdata(event)
{
  let {name, value,type, checked}= event.target;
  value=type=="checkbox"?checked:value;
   this.setState({
         [name] : value
        });


}

    render()
    {
      return(
        <div>
        First Name: <input type="text" name="fname"  value={this.state.fname} onChange={this.getdata}/><br/><br/>
        Last Name: <input type="text" name="lname" onChange={this.getdata}/><br/><br/>
        Address: <textarea type="textarea" name="add" onChange={this.getdata}/><br/><br/>
        Is Billing Address Same <input type="checkbox" checked ={this.state.Isbilling} name="Isbilling" onChange={this.getdata}/><br/><br/>
        Gender: Male 
        <input type="radio" name="gender" value="Male" onChange={this.getdata}/>            Female <input type="radio" name="gender" value="Female" onChange={this.getdata}/><br/><br/>
        State: <select name="state" onChange={this.getdata}>
        <option></option>
        <option>Maharashtra</option>
        <option>Karnatak</option>
        </select>
  <br/><br/>
        <div>
        Summary<br/><br/>
        <div>Name:{this.state.fname } {this.state.lname}</div><br/><br/>
        <div>Add:{this.state.add }</div><br/><br/>
        <div>Is Billing Address Same :{this.state.Isbilling?'true':'false'}</div><br/><br/>
        <div>Gender: {this.state.gender}</div><br/><br/>
        <div>State: {this.state.state}</div><br/><br/>
        </div>
        </div>

        

      )
    }
} 