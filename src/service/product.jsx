import api from './baseservice'
import axios from 'axios'


export default class ProductAPI {

    async get(value, next) {

        axios.all([
            api.get(`https://api.mercadolibre.com/items/${value}`),
            api.get(`https://api.mercadolibre.com/items/${value}/description`)
        ]).then(([item, description]) => {

            var data = {
                ...item.data,
                description: description.data.plain_text,
            }
            next(data)

        });

    }

}