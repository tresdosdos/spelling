import React from 'react';
import {Spinner as BSSpinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import {IRootState} from '../../interfaces';
import './styles.scss';

const mapStateToProps = (state: IRootState) => ({
  isActive: state.spinner.isActive,
});

const Spinner: React.FC<ReturnType<typeof mapStateToProps>> = React.memo((props) => {
  if (!props.isActive) {
    return null;
  }

  return (<BSSpinner animation={'border'} variant={'secondary'} className={'s-spinner'} />);
});

export default connect(mapStateToProps)(Spinner);
