import { useEffect, useState } from "react";
import CakeCard from "./CakeCard";

const Cards = () => {
    // const data = {
    //     difficulty: 
    //     "Easy",
    //     id: 
    //     "1",
    //     image: 
    //     "https://apipics.s3.amazonaws.com/cakes_api/1.jpg",
    //     title: 
    //     "Raspberry and custard muffins"};

    const [ListOfCards, SetListOfCards] = useState();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://the-birthday-cake-db.p.rapidapi.com/', options);
        const json = await data.json();
        console.log(json);
        SetListOfCards(json);
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70fdf97b16mshba642d2ac25d5f0p16b8f5jsnd2db8e00e206',
            'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
          }
    };

    return (
        <div className="cake-cont flex flex-wrap gap-4 px-3">
            {
                ListOfCards && Object.entries(ListOfCards).map(([key, card]) => (
                    <CakeCard title={card?.title} img={card?.image} id={card?.id} key={key} />
                ))
            }
        </div>
    );
    
}
export default Cards;