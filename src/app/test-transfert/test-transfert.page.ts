import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-test-transfert',
    templateUrl: './test-transfert.page.html',
    styleUrls: ['./test-transfert.page.scss'],
})
export class TestTransfertPage implements OnInit {

    private file: File

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    onFIleChange(fileChangeEvent){
        this.file = fileChangeEvent.target.files[0];
    }

    async submitForm(){
        let formData = new FormData();
        formData.append('photo', this.file, this.file.name);

        this.http.post('http://localhost:3000/upload', formData)
            .subscribe(resp =>{
                console.log(resp);
            })

        // try {
        //     const response = await fetch('http://localhost:3000/upload', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     if (!response.ok){
        //         throw new Error(response.statusText);
        //     }
        //     console.log(response)
        // }catch (err){
        //     console.log(err);
        // }
    }

}
