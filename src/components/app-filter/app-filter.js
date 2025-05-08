import './app-filter.css'


const AppFilter =(props)=>{


    const bottonsData = [
        {name: 'all', label: 'Все сотрудники' },
        {name: 'like', label: 'На повышение' },
        {name: 'salary', label: 'З/П больше 1000$' },
    ]
    
        const bottons = bottonsData.map(({name, label}) => {

            const active = props.filter === name;

            const changeClasse = active ? 'btn-light' : 'btn-outline-light'

            return(
                <button 
                className={`btn ${changeClasse}`}
                type="button"
                key={name}
                onClick={() => props.onUpdateList(name)}>

                {label} 

                </button>
            )
        
        })

    return (
        <div className="btn-group">

            {bottons}

        </div>

    )
}

export default AppFilter;



















