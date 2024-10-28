import { environment } from "../environments/environment.development";

export function getNoImage(){
   return './no_image.jpg' 
}

export function getMostPopularURL(duration: string){
   return environment.API_URL + `/svc/mostpopular/v2/viewed/${Number(duration)}.json?api-key=${environment.api_keys}`;
}