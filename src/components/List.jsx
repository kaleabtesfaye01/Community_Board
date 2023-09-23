import React from "react";
import Card from "./Card";

const List = () => {
    return (
        <div className="List">
            <Card restaurant='Delwood' address='3204 Linwood Ave Cincinnati, OH 45226' menu='delwoodcincy.com' img='/delwood.jpg'/>
            <Card restaurant='The Eagle' address='1342 Vine St Cincinnati, OH 45202' menu='https://www.eaglerestaurant.com/' img='/eagle.jpg'/>
            <Card restaurant='Bakersfield' address='1213 Vine St Cincinnati, OH 45202' menu='https://www.ordertickle.com/' img='/bakersfield.jpg'/>
            <Card restaurant='Tickle Pickle Northside' address='4176 Hamilton Ave Cincinnati, OH 45223' menu='https://www.bakersfieldtacos.com/' img='/ticklepickle.jpg'/>
            <Card restaurant='Lake Nina Restaurant' address='7200 Pippin Rd Cincinnati, OH 45239' menu='https://www.lakeninarestaurant.com/' img='/lakenina.jpg'/>
            <Card restaurant='Nasu Japanese Steakhouse' address='165 Pavilion Pkwy Newport, KY 41071' menu='https://www.yelp.com/biz/nasu-japanese-steakhouse-newport?osq=Local+Favorite+Restaurants' img='/nasu.jpg'/>
            <Card restaurant='Maplewood Kitchen and Bar' address='525 Race St Cincinnati, OH 45202' menu='https://www.maplewoodkitchenandbar.com/' img='/maplewood.jpg'/>
            <Card restaurant='Cincy Steak and Lemonade' address='2607 Vine St Cincinnati, OH 45219' menu='https://cincysteakandlemonade.net/' img='/cincysteak.jpg'/>
            <Card restaurant='Quan Hapa' address='1331 Vine St Cincinnati, OH 45202' menu='https://www.quanhapa.com/' img='/quanhapa.jpg'/>
            <Card restaurant='Wunderbar' address='1132 Lee St Covington, KY 41011' menu='https://www.yelp.com/biz/wunderbar-covington?osq=Local+Favorite+Restaurants' img='/wunderbar.jpg'/>
            <Card restaurant='Alabama Fish Bar' address='1601 Race St Cincinnati, OH 45202' menu='https://www.yelp.com/biz/alabama-fish-bar-cincinnati?osq=Local+Favorite+Restaurants' img='/alabamafish.jpg'/>
            <Card restaurant='Nicola&#8216;s Ristorante' address='1420 Sycamore St Cincinnati, OH 45202' menu='https://www.nicolasotr.com/' img='/nicolas.jpg'/>
        </div>
    )
}

export default List;