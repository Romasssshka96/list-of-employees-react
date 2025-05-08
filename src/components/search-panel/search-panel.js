import { Component } from 'react';
import './search-panel.css'



class SearchPenal extends Component {
    constructor(props){
        super(props)
        this.state = {
            term : ''
        }
    }

    onUpdataSearch = (e)=>{
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }
render(){
    return(
        <input type="text" 
        className="form-control search-input"
        placeholder="найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdataSearch}
        />
    )
}
}



export default SearchPenal;






















