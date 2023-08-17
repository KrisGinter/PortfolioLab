import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Decoration from '../assets/Decoration.svg'

const fundations = [{
    title:"Fundacja “Dbam o Zdrowie”",
    target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
},
    {
        title:"Fundacja “Dla dzieci”",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki"
    },
    {
        title:"Fundacja “Bez domu”",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce"
    },
    {
        title:"Fundacja “Słońce”",
        target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        title:"Fundacja “Miłość”",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki"
    },
    {
        title:"Fundacja “Nadzieja”",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce"
    },
    {
        title:"Fundacja “Zdrowie”",
        target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        title:"Fundacja “Promyk”",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki"
    },
    {
        title:"Fundacja “Lepsze jutro”",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce"
    }]


function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <div>
                            <h1>item.title</h1>
                            <p>item.target</p>
                        </div>
                        <div><p>item.things</p></div>
                    </div>
                ))}
        </>
    );
}

export default function Help({ itemsPerPage }) {
    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);

    function handleClick(buttonNumber) {
        if (buttonNumber === 1) {
            setButton1(true);
            setButton2(false);
            setButton3(false);
        } else if (buttonNumber === 2) {
            setButton1(false);
            setButton2(true);
            setButton3(false);
        } else if (buttonNumber === 3) {
            setButton1(false);
            setButton2(false);
            setButton3(true);
        }
    }

    const items = fundations
    function setItems() {
    }

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    return (
        <div className="container">
            <div className="help__heading">
                <h1>Komu pomagamy?</h1>
                <img alt="decoration" className="header__decoration" src={Decoration} />
            </div>
            <div className='help__buttons'>
                <button onClick={() => handleClick(1)} className={`help__button ${button1 ? 'active' : ''}`}>Fundacjom</button>
                <button onClick={() => handleClick(2)} className={`help__button ${button2 ? 'active' : ''}`}>Organizacjom pozarządowym</button>
                <button onClick={() => handleClick(3)} className={`help__button ${button3 ? 'active' : ''}`}>Lokalnym organizacjom</button>
            </div>
            <div className="help__description">
                {button1 && (
                    <div>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    </div>

                )}
                {button2 && (
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh.</p>
                    </div>
                )}
                {button3 && (
                    <div>
                        <p>Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel turpis nunc
                            eget lorem dolor sed viverra.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

