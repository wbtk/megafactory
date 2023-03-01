import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from "../../api";
import { IDocument } from "../models/document.model";

@Injectable()
export class DocumentsService {
    constructor(private readonly _apiService: ApiService) {}

    documents(): Observable<IDocument> {
        return this._apiService.get<IDocument>('/documents');
    }
}