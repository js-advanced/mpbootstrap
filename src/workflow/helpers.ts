interface ParamsProps {
  [key: string]: string | number | null;
}

export const createGetParams = (params: ParamsProps = {}): string => {
  let i: number = 0;
  let result: string = '';
  const keys = Object.keys(params);
  for (let key of keys) {
    let param = !!params[key] ? params[key] : 'null';
    result += i === 0 ? '?' : '&';
    result += `${key}=${encodeURIComponent(param.toString())}`;
    i++;
  }
  return result;
};

export const PushToHistory = (flowname: string) => {
  window.history.pushState(
    { flowName: flowname },
    '',
    `/#${flowname}`
  );
};