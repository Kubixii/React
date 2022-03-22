import React, { useContext } from 'react';

import Item from './Item';

import { AppContext } from './AppContext';

import { Items } from './Items.json';

const ItemsPage = () => {
    const { addCartItem, isUserLogged } = useContext(AppContext);

    const ItemsList = Items.map(item => {
        const UserLoggedInfo = isUserLogged ?
            <button onClick={() => addCartItem(item.id)}>Dodaj</button>
            :
            null;
        return (
            <>
                <Item
                    key={item.id}
                    name={item.name}
                    description={item.description}
                />
                {UserLoggedInfo}
            </>
        )
    });
    return (
        <>
            <h3>Przedmioty</h3>
            <ul>
                {ItemsList}
            </ul>
        </>
    );
}

export default ItemsPage;