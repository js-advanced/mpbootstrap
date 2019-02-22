
import { getCurrentState } from './workspace/actions';

// export const PushToHistory = (flowname: string) => {
//     window.history.pushState(
//         { flowName: flowname },
//         '',
//         `/#${flowname}`
//     );
// };

export async function loadApp(bundleName, errorfn) {
    // console.log(`./${bundleName}.js`);
    return await System.import(`./${bundleName}.js`)
        .then(result => {
            return result.default;
        })
        .catch(error => {
            console.info(`Загрузить ${bundleName} не удалось!`);
            console.info(`error in ${bundleName}`, error);
            errorfn(bundleName);
        });
}


export const getWorkSpace = () => (dispatch, getState) => {
    fetch('/getCurrentState', { credentials: 'same-origin' })
        .then(function (response: any) {
            return response.json();
        })
        .then((data) => {
            dispatch(getCurrentState(data));
        });
};