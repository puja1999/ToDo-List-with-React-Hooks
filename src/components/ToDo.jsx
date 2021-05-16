import React, {useState, useEffect} from 'react'
import "../App.css"


// to get the data from LocalStorage

const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    // console.log(list);

    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const ToDo = () => {

    // this inputData state will be used to collect users input data, assigning '', as initial value will be empty.
    // whatever data will be there(entered by user) in inputData state, 
    //w'll create one more state to store that data in form of array to add one by one on clicking add button
    const [inputData, setInputData] = useState(''); 
    const [items, setItems] = useState(getLocalItmes()); // initially its like passing [] empty array, useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    
    const addItem = () => { // onclicking addItem button, all data which were there in inputData, will be addaed in items state array
        if (!inputData) { // if there will be no data, then do nothing
            alert('please fill data');
        }
        else if(inputData && !toggleSubmit){
            setItems(
                items.map((elem) =>{
                    if (elem.id === isEditItem) {
                        return { ...elem, name:inputData}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);
        }
        else { // if data will be entered, then only it will add items on clicking button
           const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]); // to add all previous data, we used ...items
            setInputData('') // after adding items, this input field will be empty again
        }
    }

    
    // delete the items
    const deleteItem = (index) => {
        //console.log(id);
        const updateditems = items.filter((elem) => {
            return index !== elem.id; // inside filter method, whatever the index value is eg.(ind), w'll compare with id 
        });

        setItems(updateditems); // whatever id is not matching, it will return that, expect that which mathces
    }


    // edit item

    const editItem = (id) =>{
       let newEditItem = items.find((elem) => {
           return elem.id === id
    });
   // console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
}

    // remove all 
    const removeAll = () => { // to remove all the items at once
         setItems([]); // we're emptying the setItems
    }

    // add data to localStorage
    useEffect(() => {
       localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <h1 style={{ color:"white", fontSize:"45px"}}> My ToDo List</h1>
                       
             <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) } // to update the empty input value with the value typed by the user
                        />
                        { toggleSubmit ? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> :
                        <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                    }
                        </div>

                    <div className="showItems">
                        
                        {
                            items.map((elem) => { // to map through items array, value of items array will be stired in elem
                                return (
                                    // to get the unique id, ind is there, which we're passing in deleteItem function
                                    <div className="eachItem" key={elem.id}> 
                                        <h3>{ elem.name }</h3>
                                        <div className="todo-btn">
                                        <i className="fas fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                        <i className="fas fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                    </div>
                                    </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default ToDo