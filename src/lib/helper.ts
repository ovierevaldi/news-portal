import { environment } from "../environments/environment.development";

export function getNoImage(){
   return './no_image.jpg' 
}

export function getMostPopularURL(duration: string){
   const d = +duration
   return environment.API_URL + `/svc/mostpopular/v2/viewed/${d}.json?api-key=${environment.api_keys}`;
}