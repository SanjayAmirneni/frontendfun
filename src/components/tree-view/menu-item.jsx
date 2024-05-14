import { useState } from "react"
import MenuList from "./menu-list"
import {FaMinus, FaPlus} from 'react-icons/fa'
import './styles.css'


export default function MenuItem({menuItem}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggle(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
        })
    }

    return (
        <li>
            <div className="menu-item">
                <p>{menuItem.label}</p>
                {menuItem && menuItem.children && menuItem.children.length?
                <span onClick={()=>handleToggle(menuItem.label)}>
                    {
                        displayCurrentChildren[menuItem.label]?<FaMinus color="#fff" size={25} />
                        :<FaPlus color="#fff" size={25} />}</span>
                :null
                }
            </div>
            {menuItem && menuItem.children && menuItem.children.length > 0 && displayCurrentChildren[menuItem.label]?
            <MenuList list={menuItem.children} />:null}
        </li>
    )
}