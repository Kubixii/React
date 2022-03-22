export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const MODIFY = 'MODIFY';

export const add = ({ author, comment, rate }) => ({
    type: ADD,
    payload: {
        id: Math.floor(Math.random() * 1000),
        author,
        rate,
        comment
    }
});

export const remove = ({ id }) => ({
    type: REMOVE,
    payload: {
        id
    }
}
)

export const modify = ({ id, author, comment, rate }) => ({
    type: MODIFY,
    payload: {
        id,
        author,
        comment,
        rate
    }
})
