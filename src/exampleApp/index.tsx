import * as React from 'react';
import { connect } from 'react-redux';

class Main extends React.PureComponent <any, any> {

    render () {
        return (
            <React.Suspense fallback={<div>Loading</div>}>
                <h1>Другая страница</h1>
                <div>Загрузилось другое приложение</div>
                <button onClick={() => this.props.openApp('defaultapp')}>вернуться на главную</button>

            </React.Suspense>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Main)
const reducers = 'reducer'
connectedApp[reducers] = (state = {a: 1}, action) => state


export default connectedApp
