import { useState } from "react";

const Todo = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);
    const [toggleSub,setToggleSub] = useState(true);
    const [isEdit,setIsEdit] = useState(null);

    const addItems = () =>{
        if(!inputData){
            alert('Fill The Data 1st');
        }else if(inputData && !toggleSub){
            setItems(
                items.map((ele)=>{
                    if(ele.id === isEdit){
                        return { ...ele, name:inputData}
                    }
                    return ele;
                })
            )
        setToggleSub(true);
        setInputData('');
        setIsEdit(null);
        }
        else{
            const allInputData = {id: new Date().getTime().toString(), name:inputData}
            setItems([...items, allInputData]);
            setInputData('');
        }
    }

    const deleteItem = (ind)=>{
        const updateditems = items.filter((ele)=>{
            return ind !== ele.id;
        });
        setItems(updateditems);
    }
    
    const editItem = (id)=>{
        let newEditItem = items.find((ele)=>{
            return ele.id === id
        })
        setToggleSub(false);
        setInputData(newEditItem.name);
        setIsEdit(id);
    }

    return ( 
        <div className="main">
            <nav className="navbar">
                <div className="nav-item">
                    <h1>Todo List</h1>
                        <div className="links">
                            <a href="/">Home</a>
                        </div>
                    </div>
            </nav>
            <div className="main-content">
            <div className="head">
                <h1>All Todos</h1>
                
            </div>
            <div className="add-items">
                <h2>Add Your Todo List Here</h2>
                <input className="adding" type="text" placeholder="Add Name" 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                />
                {
                    toggleSub ? <button className="btn-add" title="Add Item" onClick={addItems} >Add Name</button> : <button className="btn-edit" onClick={addItems} >Edit</button>
                }
                
            </div>
            <div className="show-item">
                {
                    items.map((ele)=>{
                        return (
                            <div className="each-item" key={ele.id} >
                                <h3>{ ele.name }</h3>
<button className="btn-del" onClick={()=> deleteItem(ele.id)} >Delete</button>
<button className="btn-edit" onClick={()=> editItem(ele.id)} >Edit</button>
                            </div>            
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
}
export default Todo;