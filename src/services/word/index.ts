import {HttpService} from 'services/http';
import {environment} from '../../env';
import {IWord} from '../../interfaces';

export class WordService {
  public static getWord(): Promise<string> {
    return this.makeRequest();
  }

  public static getWordSet(): Promise<string[]> {
    return Promise.all<string>(Array(10).fill(null).map(async () => {
      return await this.getWord();
    }))
  }

  public static compareWords(incomingWord: string, initialWord: string): boolean {
    return incomingWord === initialWord;
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
