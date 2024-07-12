import wretch from "wretch";

const api = () => {
    return wretch("https://api.timbu.cloud", { mode: "no-cors" })
        .errorType("json");
};

export const fetcher = (url: string): Promise<any> => {
    return api().get(url).json();
};