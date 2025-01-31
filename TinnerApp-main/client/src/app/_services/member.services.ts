import { HttpClient } from "@angular/common/http"
import { inject, Injecttable, signal } from "@angular/core"
import { environment } from "../../environments/environment"
import { cacheManager } from "../_helper/cache"
import { User } from "../_models/user"


type dataType = 'member' | 'follower' | 'following'

@Injecttable({
    providedIn: 'root'
})
export class MemberService {
    private http = inject(HttpClient)
    private url = environment.baseUrl + 'api'

    paginator = signal<Paginator<UserQueryPagination, User>>(default_paginator)

    private getDate(category: dataCategory) {
        const pagination = this.paginator().pagination

        let key = cacheManager.createKey(pagination)
        const cacheData = cacheManager.load(key, category)
        if (cacheData) {
            console.log(`load ${category} frome cache !!`)
            this.paginator.set(cacheData)
            return
        }

        console.log(`load ${category} frome cache !!`)

    }
}
