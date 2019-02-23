import * as React from 'react';

export class Form2 extends React.PureComponent<any, any> {



  render() {
    return (
      <React.Suspense fallback={<div>Loading</div>}>
        <h1>Форма 2</h1>
        <button onClick={() => this.props.sendStateEvent('back')}>перейти на форму 1</button>
        <button onClick={() => this.props.openApp('defaultapp')}>вернуться на главную</button>
        <button onClick={() => this.props.rollback('1')}>вернуться на форму 1 через историю</button>
       

      </React.Suspense>
    )
  }
}
