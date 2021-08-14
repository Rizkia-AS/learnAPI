
class LearnApi {

    static getEndpoint() {
        return fetch(`https://crudcrud.com`)
        .then(res => res.text())
        .then(text => {
            return `${text}`.slice(`${text}`.indexOf(`api`) + 4,`${text}`.indexOf(`api`) +36);
        });
    }

    static getQuota(endpoint) {
        return fetch(`https://crudcrud.com/Dashboard/${endpoint}`)
        .then(res => res.text())
        .then(text => {
            return `${text}`.slice(`${text}`.indexOf(`Requests`) + 50,`${text}`.indexOf(`100`)+3);
        });
    }

    static getExpiration(endpoint){
        return fetch(`https://crudcrud.com/Dashboard/${endpoint}`)
        .then(res => res.text())
        .then(text => {
            return `${text}`.slice(`${text}`.indexOf(`Expiration`) + 56,`${text}`.indexOf(`hours`)+5);
        });
    }


}

const tes = async () => {
    const endpoint = await LearnApi.getEndpoint();
    const quota = await LearnApi.getQuota(endpoint);
    const Expiration = await LearnApi.getExpiration(endpoint);
    
    console.log(`${endpoint}--${quota}--${Expiration}`)
}
