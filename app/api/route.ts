
const appID = process.env.NEXT_PUBLIC_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const orgID = process.env.NEXT_PUBLIC_ORG_ID;


export async function GET() {
    const baseURL = `https://api.timbu.cloud/products?organization_id=${orgID}&page=2&size=12&&Appid=${appID}&Apikey=${apiKey}`
    const res = await fetch(baseURL );
    const data = await res.json();
    return Response.json(data);
}