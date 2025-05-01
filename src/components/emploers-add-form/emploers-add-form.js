import { Component } from 'react';

import './emploers-add-form.css'


class EmploersAddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChanges=(e)=>{
        this.setState({                         //создаём собтие которое будет записывать в поля стейта велечину с инпутов 
           
            [e.target.name] : e.target.value    //если имя поля составное то оно пишется в квадратных скобках
        })                                      //дословно то на чем было событие, его свойства, имя того на чем ыло событие 
                                                // (тут можно вытащить его бо у инпута есть поле нейм )
                                                //то же самое и с знаением справа, только тут уже идем за велечиной введенной в инпут 
    }

    onSub = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: '',
        })
    }
    

    render(){
                return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>

                <form onSubmit={this.onSub} className="add-form d-flex">

                    <input type="text" 
                    placeholder="Его имя" 
                    className="form-control new-post-label" 
                    name='name'
                    value={this.state.name}         //поле велью делает елемент "управляемым" то есть при вводе данных 
                                                    // они записываются сверху в стэйт, а потом ета велечина записывается 
                                                    // сюда в вэлью, это нужно делать 
                    onChange={this.onValueChanges}
                    />

                    <input type="number"
                     placeholder="Его З/П в $ " 
                     className="form-control new-post-label" 
                    name='salary'
                    value={this.state.value}
                    onChange={this.onValueChanges}
                    />

                    <button type='submit' className="btn btn-outline-light">Добавить</button>

                </form>
            </div>
        )
    }

    


}
////



export default EmploersAddForm;


























