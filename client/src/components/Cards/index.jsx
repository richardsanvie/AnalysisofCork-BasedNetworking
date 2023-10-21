import React from "react";
import FormDialog from "../dialog/dialog";
import './Cards.css'

export default function Card(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="card">
            <FormDialog
                open={open}
                setOpen={setOpen}
                title={props.name}
                category={props.category}
                cost={props.cost}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            <div className="card-container" onClick={() => setOpen(true)}>
                <h1 className="card-title">{props.name}</h1>
                <p className="card-id">{props.id}</p>
                <p className="card-cartegory">{props.category}</p>
                <h3 className="card-cost">R${props.cost}</h3>
            </div>
        </div>
    );
}