import EmploersListItem from '../emploers-list-item/emploers-list-item'
import './emploers-list.css'

const EmploersList = ({data, onDelete})=>{
    let elements = data.map(item => {
        const {id, ...enotherProps} = item //мы деструктурируем id а все остальное оставляем типо не тронутым и 
                                            // аргументы можно пачкой дальше передать 
                                            
        return(
            <EmploersListItem 
            key={id} 
            {...enotherProps}
            onDelete = { () =>{onDelete(id)}}
            />//вот для єтого нам надо было пачку остальную оставить не тронутой 
            //<EmploersListItem name={item.name} salary={item.salary} increase={item.increase}/>
        )
        
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default EmploersList























