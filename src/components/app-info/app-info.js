
import './app-info.css'


const AppInfo = (props) =>{

    const {emploes, increasedEmploes} = props

    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Общее колличестов сотрудников : {emploes} </h2>
            <h2>Премию получат :{increasedEmploes} </h2>
        </div>
    )
}


export default AppInfo;





















