import { root_url } from './rootUrl';
import { getCategoriesList } from "../store/reducers/categoriesSlice";

const categories_url = root_url + "/categories/all";

export const fetchCategoriesList = () => {
    return function (dispatch) {
        fetch(categories_url)
        .then(res => res.json())
        .then(data => dispatch(getCategoriesList(data)))
    }
}