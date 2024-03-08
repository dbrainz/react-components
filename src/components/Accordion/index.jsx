import { useState } from 'react';
import data from './data';
import './styles.css'

export default function Accordion() {

    const [lastClicked, setClicked] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);

    const multiFlag={}
    data.forEach( item => multiFlag[item.id] = false)
    const [selected, setSelected] = useState(multiFlag)

    console.log(selected)

    function handleSingleSelection(clickedId) {
        if (selected === clickedId) {
            setSelected(null);
        } else {
            setSelected(clickedId);
        }
    }


    function toggleMultiSelection() {
        if (multiSelect) {
            const workData = multiFlag;
            workData[lastClicked] = selected[lastClicked]
            setSelected({...workData}) 
        }
        setMultiSelect(!multiSelect);
    }

    function handleItemClick(clickedId) {
        console.log('handleItemClick', );
        if (multiSelect) {
            const workData = selected;
            workData[clickedId]=!workData[clickedId]
            setSelected({...workData});
        } else {
            const workData = multiFlag;
            workData[clickedId] = !selected[clickedId]
            setSelected({...workData})
        }
        setClicked(clickedId);

    }

    

    return <div className = "wrapper">
        <button id = "multiBtn" onClick={()=>toggleMultiSelection()}>
            { multiSelect ? "Disable Multiple Select" : "Enable Multiple Select"}
        </button>
        <div className = "accordion">

            {
                data && data.length > 0 ? 
                    data.map(dataItem => 
                        <div key={dataItem.id} className = "item">
                            <div onClick= {()=>handleItemClick(dataItem.id)} className = "title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            { selected[dataItem.id] ? 
                                <div className = "answer">
                                    {dataItem.answer}
                                </div>
                            : null }

                        </div>)
                : <div>'No data'</div>
            }

        </div>
    </div>

}