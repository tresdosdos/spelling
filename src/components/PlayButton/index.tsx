import React, {SyntheticEvent} from 'react';
import {Figure} from 'react-bootstrap';
import img from 'assets/play-button.png';
import {IWord} from '../../interfaces';
import {VoiceService} from 'services/voice';

function sayWord(e: SyntheticEvent) {
  VoiceService.say(e.currentTarget.id);
}

const PlayButton: React.FC<IWord> = (props) => (
  <Figure id={props.word} onClick={sayWord}>
    <Figure.Image
      width={200}
      height={200}
      alt="play button"
      src={img}
      className={'s-task-play'}
    />
  </Figure>
);

export default PlayButton;
