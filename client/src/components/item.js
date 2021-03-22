import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import vegIcon from "../FoodKey/icons8-vegetarian-mark-144.png";
import gfIcon from "../FoodKey/icons8-no-gluten-144.png";
import fishIcon from "../FoodKey/icons8-dressed-fish-144.png";
import spicyIcon from "../FoodKey/icons8-chili-pepper-144.png";
import shellfishIcon from "../FoodKey/icons8-prawn-144.png";

function MenuItems(props) {
        return (
                <>
                <Col sm="3" md="3" lg="3">
                        <h5>{props.name} <br/> 
                        
                        {props.fish ? 
                        <a href="#rawfish"><Image src={fishIcon} width="18" alt="Fish" /></a>
                        : <span></span>}
                        {
                                props.vegetarian ?
                                <a href="#vegetarian"><Image src={vegIcon} width="18" alt="Vegetarian" /></a>
                                : <span></span>
                        }
                        {
                                props.glutenFree ?
                                <a href="#glutenFree"><Image src={gfIcon} width="18" alt="Gluten Free" /></a>
                                : <span></span>
                        }
                        {
                                props.spicy ?
                                <a href="#spicy"><Image src={spicyIcon} width="18" alt="Spicy" /></a>
                                : <span></span>
                        }
                        {
                                props.shellfish ?
                                <a href="#shellfish"><Image src={shellfishIcon} width="18" alt="Shellfish" /></a>
                                : <span></span>
                        }
                        </h5>
                        <p>$ {props.price.toFixed(2)}</p>
                </Col>
                <Col sm="9" md="9" lg="9">
                        <p>{props.description}
                        
                        </p>
                </Col>
                {props.children}
                </>
        )
}

export default MenuItems;