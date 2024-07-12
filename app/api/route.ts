
export async function GET() {
    const baseURL = "https://api.timbu.cloud/products?organization_id=dc1d154e1c904be9884b48eb29680a2c&page=2&category_id&=9dfef41528484830a98b4a8b51e26f1b&size=15&Appid=411QDYJ5S9JH9GP&Apikey=4428d87bb7c54d4990fbe8fc91a1da4820240712123305850718"
    const res = await fetch(baseURL );
    const data = await res.json();
    return Response.json(data);
}