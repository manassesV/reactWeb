import api from './baseservice'



export default class SearchAPI {

   async get(value, next) {

        var response = await api.get(`sites/MLB/search?q=${value}`)
        const { meta, data } = response

       next(data.results)


    }

}