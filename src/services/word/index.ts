import {HttpService} from 'services/http';
import {environment} from '../../env';
import {IWord} from '../../interfaces';

export class WordService {
  public static getWord(): Promise<string> {
    return this.makeRequest();
  }

  private static async makeRequest(): Promise<string> {
    const res = await HttpService.get<IWord>('https://wordsapiv1.p.rapidapi.com/words/?random=true', {
      headers: {
        'X-RapidAPI-Key': environment.X_RAPID_API_KEY,
        'X-RapidAPI-Host': environment.X_RAPID_HOST,
      }
    });

    return res.data.word;
  }
}
