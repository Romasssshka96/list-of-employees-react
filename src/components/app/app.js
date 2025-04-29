import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPenal from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploers-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';
import './app.css'


class App extends Component {
constructor (props){
    super (props)
    this.state={
        data: [
    {name: 'Jo', salary: 800, increase: true, like: true, id: 1},
    {name: 'Silvestr', salary: 1000, increase: false, like: false, id: 2},
    {name: 'Albert', salary: 1200, increase: false, like: false, id: 3},
    ]

    }
}

    deleteItem =(id) => {
        this.setState(({data})=>{
            //const index = data.findIndex(item => item.id === id);
            //const before = data.slice(0, index)       создаём переменные в которых есть массив елементов до выбранного елемента 
            //const after = data.slice(index+1)         массив елементовпосле выбранного елемента
            //const newArray = [...before, ...after]    и новый масси который мы потом через ретесн возвращаем, в котором через спред розвернуты оба созданных массива с елементам, кроме того елемента индекс которого совпал 

            
            return{
                data: data.filter(item=> item.id !== id)    //более л'гкий метод через фильтр
            }
        })
    }


    addItem = (name, salary) => {      //то что приходит как аргумент в функцию
        const newItem = {
            name, 
            salary, 
            increase: false, 
            like: false, 
            id: (7 + Math.random() * (4 + 1 - 3)),
        }

        this.setState(({data})=>{       //записіваем то какие мі данные меняем в итоге 
            const newArray = [...data, newItem]

            return {
               data: newArray
            }

        })
    }

    render(){
        
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-penal">
                <SearchPenal/>
                <AppFilter/>
            </div>
            <EmploersList 
            data={this.state.data}
            onDelete={this.deleteItem}
            />
            <EmploersAddForm
            data={this.state.data}
            addItem = {this.addItem}
            />
        </div>
    );
    }

}



export default App;



















