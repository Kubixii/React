enum Example {
    USER,
    MODERATOR,
    ADMINISTRATOR,
}

interface User {
    type: Example
}

const user: User = {
    type: 5
}

if (user.type === Example.USER) {
    console.log('użytkownik');
} else if (user.type === Example.MODERATOR) {
    console.log('moderator');
} else if (user.type === Example.ADMINISTRATOR) {
    console.log('administrator');
}