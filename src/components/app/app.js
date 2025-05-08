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
    ],
    term: '',
    filter: 'all',
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
            id: (7 + Math.random() * (Math.random() + 1 - Math.random())),
        }

        this.setState(({data})=>{       //записіваем то какие мі данные меняем в итоге 
            const newArray = [...data, newItem]
            
            return {
               data: newArray
            }

        })
    }

    onToggleIncrease = (id) => {
        //this.setState(({data})=>{
        //    const index = data.findIndex(elem => elem.id === id)
//
        //    const old = data[index]
        //    const newItem = {...old, increase: !old.increase}
        //    const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)]
//
        //    return {
        //        data: newArray
        //    }
        //})
        console.log(id)
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, increase: !item.increase}
                }
                return item
            })
        }))


    }



    onToggleLike = (id) => {
        console.log(id)
        this.setState(({data}) =>({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, like: !item.like}
                }
                return item
            })
      

        }))
    }




    onUpdateSearch =(term)=>{
        this.setState({term})
    }

    searchEploes = (items,term)=>{
        if(term.length === 0){
            return items
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        })
    }






    filterEmp = (items, filter) => {
        if(filter === 'like'){
            return items.filter(item => item.like)
        }if(filter === 'salary'){
            return items.filter(item => item.salary > 1000)
        }else{
            return items
        }
    }

    onUpdateList = (filter) => {
        this.setState({filter})
    }





    render(){

        const {data, term, filter} = this.state

        const listOfEmploes = this.filterEmp(this.searchEploes(data, term), filter)

        const emploes = this.state.data.length
        
        const increasedEmploes = this.state.data.filter(item => item.increase).length

         
        
    return (
        <div className="app">
            <AppInfo
            emploes={emploes}
            increasedEmploes={increasedEmploes}
            />
            <div className="search-penal">
                <SearchPenal
                onUpdateSearch={this.onUpdateSearch}
                />
                <AppFilter
                filter={filter}
                onUpdateList={this.onUpdateList}
                />
            </div>

            <EmploersList 
            data={listOfEmploes}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleLike={this.onToggleLike}
            />

            <EmploersAddForm
            data={data}
            addItem = {this.addItem}
            />
        </div>
    );
    }

}



export default App;



















