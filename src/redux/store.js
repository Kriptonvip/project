let rerenderEntireTree = () => {
    console.log('State is change')
}
let state = {

    profilePage: {
        postsData: [
            { id: 1, message: 'Hi how are you', likesCount: 12 },
            { id: 2, message: 'Hi i`am ok', likesCount: 14 },
            { id: 3, message: 'Let`s go to swim', likesCount: 19 }],
        _newPostText: 'Let`s go to swim2',
        SetNewMessage() {
            let newPost = {
                id: 5, message: this.GetNewPostText(), likesCount: 12
            };
            this.postsData.push(newPost)
            this.SetNewPostText('');
            rerenderEntireTree(state);
        },
        SetNewPostText(newText) {
            this._newPostText = newText;
            rerenderEntireTree(state)
        },
        GetNewPostText() {
            return this._newPostText;
        }
    },
    messagesPage: {
        peoplesData: [
            { id: 1, name: 'Оля' },
            { id: 2, name: 'Егор' },
            { id: 3, name: 'Рома' },
            { id: 4, name: 'Рашид' },
            { id: 5, name: 'Коля' },
            { id: 6, name: 'Саша' }],
        messagesData: [
            { id: 1, message: 'Привет как дела?' },
            { id: 2, message: 'Норм учу React' },
            { id: 3, message: 'Когда на собес?' },
            { id: 4, message: 'В декабре' },
            { id: 5, message: 'Круто удачи!' },
            { id: 6, message: 'Благодарю!' }]
    },
    NavBar: {
        friendsData: [
            { id: 1, name: 'Оля', img: 'https://avatars.mds.yandex.net/get-kino-vod-users-avatar/28790/1386274-00-558584.jpg/80x80' },
            { id: 2, name: 'Егор', img: 'https://avatars.mds.yandex.net/get-kino-vod-users-avatar/33806/1913106-38-785102.jpg/80x80' },
            { id: 3, name: 'Рома', img: 'https://avatars.mds.yandex.net/get-kino-vod-users-avatar/33806/1560042-07-589406.jpg/80x80' },
        ]
    }
}

window.state = state;


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state