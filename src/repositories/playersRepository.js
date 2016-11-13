export default class PlayersRepository {
    constructor() {
        this.playersData = {
            players: []
        };
    }

    fetch() {
        const data = window.localStorage.playersData;

        if (data) {
            this.playersData = JSON.parse(data)
        }
    }
}
