import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import PlayButton from 'components/PlayButton';
import {ITask} from 'reducers/task/interfaces';
import {WordService} from 'services/word';
import {TaskPanelService} from 'services/task-panel';
import './styles.scss';

type ITaskProps = ITask & {
  onSubmit: (isEqual: boolean) => void;
}

const Task: React.FC<ITaskProps> = (props) => {
  const [word, setWord] = useState('');

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const isEqual = WordService.compareWords(word, props.word);

    props.onSubmit(isEqual);
  }

  function onChange(e: any) {
    setWord(e.currentTarget.value);
  }

  useEffect(() => {
    setWord('');
  }, [props.word]);

  if (!props.id) {
    return null;
  }

  return (
    <div className={'s-task'}>
      <PlayButton word={props.word}/>
      <Form onSubmit={onSubmit}>
        <Form.Control value={word} size={'lg'} type={'text'} placeholder={'Type word here'} onChange={onChange} disabled={TaskPanelService.isCompleted(props.status)} />
      </Form>
      <Button variant={'primary'} className={'s-task-button'} onClick={onSubmit}>Submit</Button>
    </div>);
};

export default Task;
