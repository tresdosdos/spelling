import React from 'react';
import TaskPanel from 'components/TaskPanel';
import Task from 'components/Task';
import AnswerResult from 'components/AnswerResult';
import './styles.scss';

const LearningDashboard: React.FC = () => {
  return (
    <main className={'s-learning-container'}>
      <TaskPanel/>
      <Task/>
      <AnswerResult/>
    </main>);
};

export default LearningDashboard;
