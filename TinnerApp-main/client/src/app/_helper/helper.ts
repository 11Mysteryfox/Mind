import { User } from "../_models/user"
const defaultAvatar = '/assets/1 (1).png'
const defaultImage = '/assets/2.png'

function getAvatar(user: User): string {
    if (user.photos) {
        const avatar = user.photos.find(p => p.is_avatar === true)
        if (avatar)
            return avatar.url
    }
    return defaultAvatar
}

function getPhotoOfTheDay(user: User): string {
    if (user.photos && user.photos.length > 0) {
        const index = Math.floor(Math.random() * user.photos.length)
        return user.photos[index].url

    }
    return defaultImage
}

export function parseUserPhoto(user: User): User {
    user.avatar = getAvatar(user)
    user.photoOFTheDay = getPhotoOfTheDay(user)
    return user
}

export function parseQuery(query: QueryPagination | UserQueryPagination): string {
    let queryString = '?'
    if (query.pageSize)
        queryString += '&pageSize=${query.pageSize}'
    if (query.currentPage)
        queryString += '&currentPage=${query.currentPage}'
}