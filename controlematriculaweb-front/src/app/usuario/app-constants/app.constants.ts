import { environment } from 'src/environments/environment';

export class AppConstants {
    //URL BASE
    public static get BASE_URL_REST(): string { return environment.BaseUrl};

    //USUARIO
    public static get USUARIO(): string {return 'usuarios'};
}