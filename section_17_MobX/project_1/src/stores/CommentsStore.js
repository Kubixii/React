import { observable, action } from 'mobx'

const NO_RESULT = -1

export default class CommentsStore {

    @observable
    comments = [{
        id: 654645,
        comment: "AAAAAA"
    }];

    @action
    addComment = comment => {
        this.comment.push(comment)
    }

    @action
    removeComment = id => {
        const index = this.comments.findIndex(comment => comment.id = id)

        if (id === NO_RESULT) {
            return;
        }

        this.comments = this.comments.filter(comment => comment.id !== id)
    }
}
