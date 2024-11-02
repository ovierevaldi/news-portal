import { environment } from "../environments/environment.development";

export function getNoImage(){
   return './no_image.jpg' 
}

export function getMostPopularURL(duration: string){
   const d = +duration
   return environment.API_URL + `/svc/mostpopular/v2/viewed/${d}.json?api-key=${environment.api_keys}`;
}

export const separateFirstSentence = (text: string): {first_sentence: string, restOfText: string} => {
   const senteces = text.match(/[^.!?]*[.!?]/);
   if(senteces){
     const first_sentence = senteces[0].trim();
     const restOfText = text.slice(senteces[0].length).trim();

     return {
       first_sentence: first_sentence,
       restOfText: restOfText
     }
   }
   return {
     first_sentence: text,
     restOfText: ''
   }
}

export const getSentenceAmount = (text: string): number => {
   const matcher = text.match(/[^.!?]*[.!?]/)
   return matcher?.length ? matcher.length : 0
}