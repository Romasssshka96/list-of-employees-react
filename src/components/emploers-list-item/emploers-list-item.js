
import './emploers-list-item.css'


const EmploersListItem =(props)=> {


        const {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;      //деструктуризация нужных елементов из пропсов 


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
                
                <span className='list-group-item-label' onClick={onToggleLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue = {salary + '$'} />
                <div className='.d-flex justefy-content-center align-items-center '>
                    <button type="button" onClick={onToggleIncrease} className="btn-cookie btn-sm">
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


export default EmploersListItem;

























