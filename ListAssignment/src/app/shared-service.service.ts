import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SortDirection } from "./app-constants"
@Injectable()
export class SharedService {
    constructor(private http: Http) {

    }

    getRawData() {
        return this.http.get("assets/data.json").map((res: any) => { return res.json() })
    }

    sortData(data: any, columnName, direction: string) {
        let sortedData:Array<any>=[];
        switch (direction) {
            case SortDirection.Ascending:
            sortedData = this.sortAscending(data, columnName);
                break;
            case SortDirection.Descending:
                sortedData=this.sortDescending(data, columnName);
                break;
            default:
            sortedData=this.sortAscending(data, columnName);
                break;
        }
        return sortedData;
    }

    getReport(data:any){
        
    }

    private sortAscending(data: Array<any>, columnName: string) {
        return data.sort((x, y) => {
            if (x[columnName] > y[columnName]) return 1;
            if (x[columnName] < y[columnName]) return -1;
            return 0;
        });

    }

    private sortDescending(data: Array<any>, columnName: string) {
        return data.sort((x, y) => {
            if (x[columnName] < y[columnName]) return 1;
            if (x[columnName] > y[columnName]) return -1;
            return 0;
        });
    }

}