import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ItemCount } from "../components/ItemCount";
import data from '../data/items.json'

export function ItemDescription() {

    const { IDE } = useParams()

    return(
        data.map(item => {
            if (item.id == IDE) {
                return(
                    <Container key={item.id} className="d-flex flex-colum align-items-center gap-2" style={{width:"100%", height:"100%", backgroundColor:"gray", marginTop:"5px"}}>
                         <div className="d-flex flex-column justify-content-center align-items-center w-100 w-md-50 px-3 py-4 gap-4 m-1">
                         <h2>{item.title}</h2>
                         <img src={item.url} alt="item.title" className="item-image" />
                         <h3>{item.artist}</h3>
                         <h4>Price: ${item.price}</h4>
                         <p>{item.description}</p>
                         <ItemCount key={item.id} {...item}/>
                         </div>
                    </Container>
                )
            }} 
        ))
        
}