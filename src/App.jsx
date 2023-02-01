import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component{
    constructor(){
        super()
        this.State = {
            firstName:'',
            lastName:'',
            age:'',
            email:'',
            position:''

        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePosition = this.changePosition.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }


    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event){
     this.setState({
         lastName:event.target.value
            }) } 
     changeAge(event){
         this.setState({
            age:event.target.value
                })} 
     changeEmail(event){
          this.setState({
             email:event.target.value
                    })                        
    }
    changePosition(event){
        this.setState({
            position:event.target.value
        })}

        onSubmit(event){
            event.preventDefault()

            const registred = {
                firstName: this.state.firstName,
                lastName: this.State.lastName,
                age:this.State.age,
                email:this.State.email,
                position: this.State.position
            }
            axios.post('http://localhost:4000/app/register',registred)
             .then(response => console.log(response.data))

             this.setState({
                firstName: '',
                lastName: '',
                age:'',
                email:'',
                position: ''
             })
        
            }


 render(){
        return(
            <div>
               <div className="container">
                <div className="form-div">
                    <form onSubmit={this.onSubmit}>
                        <input type='text'
                        placeholder='FirstName'
                        onChange={this.changeFirstName}
                        value={this.state.firstName}
                        className='form-control form-group'/>
                    </form>
                    <form>
                        <input type='text'
                        placeholder='LastName'
                        onChange={this.changeLastName}
                        value={this.state.lastName}
                        className='form-control form-group'/>
                    </form>
                    <form>
                        <input type='Number'
                        placeholder='Age'
                        onChange={this.changeAge}
                        value={this.state.age}
                        className='form-control form-group'/>
                    </form>
                    <form>
                        <input type='text'
                        placeholder='Email'
                        onChange={this.changeEmail}
                        value={this.state.email}
                        className='form-control form-group'/>
                    </form>
                    <form>
                        <input type='text'
                        placeholder='Position'
                        onChange={this.changePosition}
                        value={this.state.position}
                        className='form-control form-group'/>
                    </form>

                    <input type='submit' className="btn btn-danger btn-block" value='submit'/>
                </div>
               </div>
            </div>
        );
    }
}

export default App;