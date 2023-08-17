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

const organizations = [{
    title:"Organizacja “Dbam o Zdrowie”",
    target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
},
    {
        title:"Organizacja “Dla dzieci”",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki"
    },
    {
        title:"Organizacja “Bez domu”",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce"
    },
    {
        title:"Organizacja “Słońce”",
        target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        title:"Organizacja “Miłość”",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki"
    },
    {
        title:"Organizacja “Nadzieja”",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce"
    },
    ]

const local = [{
    title:"Zbiórka “Dbam o Zdrowie”",
    target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    things: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
},
    {
        title:"Zbiórka “Dla dzieci”",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        things: "ubrania, meble, zabawki"
    },
    {
        title:"Zbiórka “Bez domu”",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        things: "ubrania, jedzenie, ciepłe koce"
    },

]
function Items({ currentItems }) {
    return (
        <div>
            {currentItems &&
                currentItems.map((item) => (
                    <div className="help__details">
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.target}</p>
                        </div>
                        <div><span>{item.things}</span></div>
                    </div>

                ))}
        </div>
    );
}

export default function Help({ itemsPerPage }) {
    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [items, setItems] = useState(fundations);

    function handleClick(buttonNumber) {
        setItemOffset(0);
        if (buttonNumber === 1) {
            setButton1(true);
            setButton2(false);
            setButton3(false);
            setItems(fundations);
        } else if (buttonNumber === 2) {
            setButton1(false);
            setButton2(true);
            setButton3(false);
            setItems(organizations);
        } else if (buttonNumber === 3) {
            setButton1(false);
            setButton2(false);
            setButton3(true);
            setItems(local);
        }
    }

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };


    return (
        <div id="organizations" className="container">
            <div className="help__heading">
                <h1>Komu pomagamy?</h1>
                <img alt="decoration" className="header__decoration" src={Decoration} />
            </div>
            <div className='help__buttons'>
                <button onClick={() => handleClick(1)} className={`help__button ${button1 ? 'active' : ''}`}>Fundacjom</button>
                <button onClick={() => handleClick(2)} className={`help__button ${button2 ? 'active' : ''}`}>Organizacjom pozarządowym</button>
                <button onClick={() => handleClick(3)} className={`help__button ${button3 ? 'active' : ''}`}>Lokalnym organizacjom</button>
            </div>
            <div>
                {button1 && (
                    <div>
                        <div className="help__description">
                            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                        </div>
                        <div>
                            <Items currentItems={currentItems} />
                            {items.length > itemsPerPage && <ReactPaginate
                                breakLabel="..."
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                renderOnZeroPageCount={null}
                                previousLabel={''}
                                nextLabel={''}
                                containerClassName={'pagination'}
                                pageLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />}
                        </div>
                    </div>
                )}
                {button2 && (
                    <div>
                        <div className="help__description">
                            <p>Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel turpis nunc
                                eget lorem dolor sed viverra.</p>
                        </div>
                        <div>
                            <Items currentItems={currentItems} />
                            {items.length > itemsPerPage && <ReactPaginate
                                breakLabel="..."
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                renderOnZeroPageCount={null}
                                previousLabel={''}
                                nextLabel={''}
                                containerClassName={'pagination'}
                                pageLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />}
                        </div>
                    </div>
                )}
                {button3 && (
                    <div>
                        <div className="help__description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh.</p>
                        </div>
                        <div>
                            <Items currentItems={currentItems} />
                            {items.length > itemsPerPage && <ReactPaginate
                                breakLabel="..."
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                renderOnZeroPageCount={null}
                                previousLabel={''}
                                nextLabel={''}
                                containerClassName={'pagination'}
                                pageLinkClassName={'page-link'}
                                activeClassName={'active'}
                            />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

