import React, { useState} from 'react';
import "./Tindercard.css";
import TinderCard from "react-tinder-card";
function Tindercards() {
    const [people, setPeople] = useState([
        {
        name: "Elon Musk",
        url:"https://wallpapercave.com/dwp2x/wp2048432.jpg"
    },
    {
        name: "Johnny Depp",
        url:"https://wallpapercave.com/wp/OuYOSfD.jpg"
    },
    {
        name: "Alexandra Daddario",
        url:"https://wallpapercave.com/dwp2x/wp2610670.jpg"
    },
    {
        name: "Kristern Stewart",
        url:"https://wallpapercave.com/dwp2x/wp2671379.jpg"
    },
    {
        name: "Emma Watson",
        url:"https://wallpapercave.com/dwp2x/wp2034167.jpg"
    },
    {
        name: "Robert Pattison",
        url:"https://wallpapercave.com/wp/wp2941221.jpg"
    },
    {
        name: "Chris Hemsworth",
        url:"https://wallpapercave.com/wp/wp2259942.jpg"
    },
    {
        name: "Leonardo Dicaprio",
        url:"https://wallpapercave.com/wp/wp2941159.jpg"
    },

    {
        name: "Robert Downey Jr",
        url:"https://wallpapercave.com/dwp2x/UifioC7.jpg"
    }

    ]);
    const swiped = (direvtion,nametodelete) => {
        console.log("REmoving"+nametodelete);

    }

    const outOfFrame= (nameofperson) => {
        console.log(nameofperson+"left the screen")
    }

    return (
        <div className="tindercards">
            <div className="card_container">
            {people.map((person) => (
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={["up","down"]}
                  onSwipe={(dir) => {
                      swiped(dir, person.name)
                  }}
                  onCardLeftScreen={() => outOfFrame(person.name)}
                  >
            <div
              style={{backgroundImage: `url(${person.url})`}}
              className="card"
            >
                <h3>{person.name}</h3>
            </div>

                  </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default Tindercards
