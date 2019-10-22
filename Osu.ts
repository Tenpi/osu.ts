import api from "./API"
import {Beatmaps, Multiplayer, Scores, Users} from "./entities/index"

export default class Osu {
    public static apiKey: string
    public api = new api(Osu.apiKey)
    public beatmaps = new Beatmaps(this.api)
    public users = new Users(this.api)
    public scores = new Scores(this.api)
    public multiplayer = new Multiplayer(this.api)
    constructor(apiKey: string) {
        Osu.apiKey = apiKey
        this.api = new api(Osu.apiKey)
        this.beatmaps = new Beatmaps(this.api)
        this.users = new Users(this.api)
        this.scores = new Scores(this.api)
        this.multiplayer = new Multiplayer(this.api)
    }
}

export * from "./entities/index"