import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, finalize} from "rxjs/operators";
import {LoadingController} from "@ionic/angular";

@Component({
    selector: 'app-home2',
    templateUrl: './home2.page.html',
    styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

    loading
    error
    myPhoto
    handleError
    changeDetectorRef
    convertFileSrc
    constructor(private http: HttpClient, private loadingCtrl: LoadingController) {
    }

    ngOnInit() {
    }

    takePhoto(): void {
        // @ts-ignore
        const camera: any = navigator.camera;
        camera.getPicture((imageData: any) => {
            this.myPhoto = this.convertFileSrc(imageData);
            this.changeDetectorRef.detectChanges();
            this.changeDetectorRef.markForCheck();
            this.uploadPhoto(imageData);
        }, (error: any) => this.error = JSON.stringify(error), {
            quality: 100,
            destinationType: camera.DestinationType.FILE_URI,
            sourceType: camera.PictureSourceType.CAMERA,
            encodingType: camera.EncodingType.JPEG
        });
    }

    selectPhoto(): void {
        // @ts-ignore
        const camera: any = navigator.camera;
        camera.getPicture((imageData: any) => {
            this.myPhoto = this.convertFileSrc(imageData);
            this.uploadPhoto(imageData);
        }, (error: any) => this.error = JSON.stringify(error), {
            sourceType: camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: camera.DestinationType.FILE_URI,
            quality: 100,
            encodingType: camera.EncodingType.JPEG,
        });
    }

    private async uploadPhoto(imageFileUri: any): Promise<void> {
        this.error = null;
        this.loading = await this.loadingCtrl.create({
            message: 'Uploading...'
        });

        this.loading.present();

        // @ts-ignore
        window.resolveLocalFileSystemURL(imageFileUri,
            (entry: any) => {
                entry.file((file: any) => this.readFile(file));
            });
    }

    private readFile(file: any): void {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            if (reader.result) {
                const imgBlob = new Blob([reader.result], {type: file.type});
                formData.append('file', imgBlob, file.name);
                this.postData(formData);
            }
        };
        reader.readAsArrayBuffer(file);
    }

    showToast
    private postData(formData: FormData): void {
        this.http.post<boolean>(`${environment.serverURL}/upload`, formData)
            .pipe(
                catchError(e => this.handleError(e)),
                finalize(() => this.loading.dismiss())
            )
            .subscribe(ok => this.showToast(ok));
    }

}
