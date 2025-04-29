import { Component } from 'react';
import './emploers-list-item.css'


class EmploersListItem extends Component {
        constructor(props){
            super(props)
            this.state = {
                increase: false,
                like: false,
                
            }
        }

        onIncrease = () =>{                 //делаем метод при котором состояние свойств объекта будет менятся 
            this.setState(({increase})=>({
                increase: !increase         //сделатно хитро и просто, в обїект записівается противоположное значение от того что там было до этого
            }))
            
        }

        onLikes = () =>{                    //одинаковый метод, только событие стоит уже на другом елементе 
            this.setState(state =>({
                like: !state.like
            }))
        }

        render(){ 

        const {name, salary, onDelete} = this.props;      //деструктуризация нужных елементов из пропсов 
        const {increase, like} = this.state     //деструктуризация нужных елементов уже из стэйта 

        let cookieClass = "list-group-item d-flex justefy-content-between " //взяли строку с классами из компонента и поместили в переменную

        if(increase){
            cookieClass += ' increase'  //если значение тру, тогда к этой строке добавляется еще и эта строка с названием 
                                    //класса (не забывать добавлять пробел вначале, иначе не будет работать бо строки склеятся)
        }
        

        if(like){
            cookieClass += ' like'          //
        }


        return(
            <li className={cookieClass}> 
                <span className='list-group-item-label' onClick={this.onLikes}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue = {salary + '$'} />
                <div className='.d-flex justefy-content-center align-items-center '>
                    <button type="button" onClick={this.onIncrease} className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type='button' onClick={onDelete} className='btn-trash btn-sm'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>

            </li>
        )
        }
}

export default EmploersListItem;

























