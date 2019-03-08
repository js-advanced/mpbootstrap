import * as React from 'react';
import { connect } from 'react-redux';

import {Form1} from './form1';
import {Form2} from './form2';

const processes = {
  radioFlow: {
    radioForm1: Form1,
    radioForm2: Form2
  }
};


class Main extends React.PureComponent<any, any> {

  componentDidMount() {
    console.log(888);
    this.props.initFlow({
      flowName: 'radioFlow',
      url: 'radio-bh'
    });

  }

  render() {
    console.log(this.props);
    let { flowName, stateName, isLoading, status } = this.props;

    let Component;
    if (flowName && stateName) {
      Component = processes[flowName][stateName];
    }
    // return <div>1111</div>
    return (
      <React.Suspense fallback={<div>Loading</div>}>
        <h1>Другая страница</h1>
        <div>Загрузилось другое приложение</div>
        <button onClick={() => {
              this.props.exitApp();
              this.props.openApp('defaultapp');
        }}>вернуться на главную</button>
     {Component && <Component {...this.props}/>} 

      </React.Suspense>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Main)
const reducers = 'reducer'
connectedApp[reducers] = (state = { a: 1 }, action) => state


export default connectedApp
