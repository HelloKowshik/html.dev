// Webdeveloper Bd- http class

class HTTP{
   async get(url) {
      return await fetch(url)
           .then(response => { return response });
    }

    async post(url, data) {
        let result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(
            data => data.json()
        )
        return result;
    }
}