import MenuItem from "./menu-item"
import './styles.css'


export default function MenuList({list=[]}){

    return(
        <ul className="menu-list-container">
            {list && list.length? 
            list.map((item)=><MenuItem menuItem={item} />)
            :null }
        </ul>
    )
}