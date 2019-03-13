import * as React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from './styled';

class Main extends React.PureComponent<any, any> {

    render() {
        return (
            <React.Suspense fallback={<div>Loading</div>}>

                <h1>Стартовый менеджер</h1>

                <Wrapper>
                    <button onClick={() => this.props.openApp('elevators/elevators')}>Команда 1</button>
                    <button onClick={() => this.props.openApp('transport/transportadvapp')}>Команда 2</button>
                    <button onClick={() => this.props.openApp('team3/transportapp')}>Команда 3?</button>
                    <a href="#" onClick={(event) => {
                        event.preventDefault();
                        this.props.openApp('elevators/elevators');
                    }}>Команда 4?</a>
                </Wrapper>


            </React.Suspense>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Main)
const reducers = 'reducer'
connectedApp[reducers] = (state = { stateName: 'startManager' }, action) => state


export default connectedApp
