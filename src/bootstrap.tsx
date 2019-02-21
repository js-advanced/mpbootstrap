import * as React from 'react';
import { connect, ReactReduxContext } from 'react-redux';
import { injectAsyncReducer } from './store';
import { loadApp } from './utils';
import { openApp, errorOpenApp } from './workspace/actions';
import { listen } from 'fbjs/lib/EventListener';

import { initFlow } from './workflow/events'

class Bootstrap extends React.PureComponent<any, any> {
    App: any;
    firstRender: boolean = true;
    currentBundle: string = '';
    
    componentDidMount() {
        listen(window, 'popstate', this.onPopState);
    }

    onPopState = (event) => {
        this.props.openApp(window.location.hash.substr(1));
    }

    componentWillUnmount() {
        console.info('WillUnmount');
    }

    async downloader(bundleName: string) {
        let _bundleName = bundleName;
        if(bundleName === 'defaultapp') {
            _bundleName = `main-landing/${bundleName}`;
        }
        this.currentBundle = bundleName;
        this.App = await loadApp(_bundleName, this.props.errorOpenApp);
        this.setState({ appLoaded: true });
        window.history.pushState(
            { flowName: bundleName },
            '',
            `/#${bundleName}`
          );
    }

    render() {
        

        let { props: { bundleName, errorbundleName }, App, firstRender, state, currentBundle } = this;
        
        if (errorbundleName) {
           alert(`Приложение ${errorbundleName} загрузить не удалось`);
           // this.downloader('defaultapp');

        }
        console.info('<-----------');
        console.info('bundleName', bundleName);
        console.info('currentBundle', currentBundle);
        console.info('---------->');
        if (bundleName !== currentBundle 
           // || !~bundleName.indexOf(currentBundle)
            ) {
            this.downloader(bundleName);
        }
        if (firstRender &&  state && this.state.appLoaded) {
            firstRender = false;

            return !App ? <div >Идет загрузка...</div> :
                (<ReactReduxContext.Consumer>
                    {({ store }) => {
                         injectAsyncReducer(store, 'app', App.reducer);
                         this.setState({ appLoaded: false });
                        return <App {...this.props} />
                    }}

                </ReactReduxContext.Consumer>);
        }

        return !App ? <div >Идет загрузка...</div> : <App {...this.props} />;

    }
}

const mapStateToProps = (state) => ({
    errorbundleName: state.workspace.errorbundleName,
    bundleName: state.workspace.bundleName || 'defaultapp'
});

const mapDispatchToProps = (dispatch) => ({
    openApp: (bundleName: string) => dispatch(openApp(bundleName)),
    initFlow: (param: any, data?: Object) => dispatch(initFlow(param, data)),
    errorOpenApp: (bundleName: string) => dispatch(errorOpenApp(bundleName)),
});

export const LoaderApp: any = connect(mapStateToProps, mapDispatchToProps)(Bootstrap);