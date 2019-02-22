import * as React from 'react';

export class Form1 extends React.PureComponent<any, any> {


  

  render() {
    return (
      <React.Suspense fallback={<div>Loading</div>}>
        <h1>Форма 1</h1>
        <button onClick={() => this.props.sendStateEvent('next')}>перейти на форму 2</button>
        <button onClick={() => this.props.openApp('defaultapp')}>вернуться на главную</button>
       

      </React.Suspense>
    )
  }
}
