const baseUrl= "http://localhost:8900"

export function getProducts(){
    const output = fetch(`${baseUrl}/products`,
        {method:'GET'})
    .then((response)=> response.json())

    return{
        type:'GET_PRODUCTS',
        payload:output
    }
}