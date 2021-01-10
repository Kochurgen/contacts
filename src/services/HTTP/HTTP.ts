import {useDispatch} from 'react-redux';

class Http{
    private url:string = 'http://frontend-candidate.dev.sdh.com.ua/v1/contact/';

    public async get<T>(
        path: string = '',
        args: RequestInit = {method: "GET"}
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(this.url+path, args));
    };

    public async post<T>(
        body: any,
        args: RequestInit = {method: "POST", body}
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(this.url, args));
    };

    public async put<T>(
        path: string = '',
        body: any,
        args: RequestInit = {method: "PUT", body: body}
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(this.url+path, args));
    };

    public async delete<T>(
        path: string = '',
        args: RequestInit = {method: "DELETE"}
    ): Promise<HttpResponse<T>> {
        return await this.http<T>(new Request(this.url+path, args));
    };

    private async http<T>(
        request: RequestInfo
    ): Promise<HttpResponse<T>> {
        const response: HttpResponse<T> = await fetch(
            request
        );
        response.parsedBody = await response.json();

        return response;
    }
}
const http = new Http();

export default http;
