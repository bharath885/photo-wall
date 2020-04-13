
export function RemovePost(index) {

    return {
        type: 'REMOVE_POST',
        index: index
    }

}

export const addPhoto = (post) => {
    return {
        type: 'ADD_PHOTO',
        post: post
    }
}

export const addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment: comment,
        postId
    }

}