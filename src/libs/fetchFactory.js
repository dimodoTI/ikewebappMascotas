export const fetchFactory = (url, entity) => {

    url = url + "/" + entity

    const _getHeaders = (token) => {
        return {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }

    return {

        get: (id, token) => {
            if (id) url = url + "/" + id
            return fetch(url, {
                method: "GET",
                headers: _getHeaders(token)
            }).then(res => res.json())

        },

        post: (body, token) => {
            return fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: _getHeaders(token)
            }).then(res => res.json())

        },

        put: (id, body, token) => {
            url = url + "/" + id
            return fetch(url, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: _getHeaders(token)
            }).then(res => res.json())

        },


        patch: (id, body, token) => {
            url = url + "/" + id
            return fetch(url, {
                method: "PATCH",
                body: JSON.stringify(body),
                headers: _getHeaders(token)
            }).then(res => res.json())

        },

        delete: (id, token) => {
            url = url + "/" + id
            return fetch(url, {
                method: "DELETE",
                headers: _getHeaders(token)
            }).then(res => res.json())

        }
    }
}