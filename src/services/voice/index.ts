export class VoiceService {
  public static say(word: string): void {
    // @ts-ignore
    if (window.responsiveVoice) {
      // @ts-ignore
      window.responsiveVoice.speak(word);
    }
  }
}
