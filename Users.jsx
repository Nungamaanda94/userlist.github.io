import React, {Component} from "react";
import React from "react";

export default class Users extends Component {

    state = {

        arrList : [
                {
                    surname: 'Rangolo',
                    _name:'ronald',
                    age:23,
                    location:'',
                },
                {
                    surname: 'Nunga',
                    _name:'Maanda',
                    age:15,
                    location:'Seshego'
                },
                {
                    surname: 'Modida',
                    _name:'Thabang',
                    age:35,
                    location:'Tzaneen'
                }
            ]
       

    }

    

    render(){

        return (
            <div className = "User">
                 <h1>Userlist</h1>
                 <h3>surname  name age location </h3>
                 <h5>{this.state.arrList.map(el=> <li>{el.surname +"    :   "+ el._name +"  :   "+ this.getSurname(el.age) + "    :   "+ el.location}</li>)} </h5>
                 
            </div>
        )
    }

    getSurname(age)
    {
      
         let message = '';

        if (age >= 18) {

           return message = "You are old enough to code"
           
            
        }
        else{
           return message = "You are not old enough to code"
        }

    }
}