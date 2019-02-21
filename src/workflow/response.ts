export type Result = 'SUCCESS' | 'EXTERNAL_ENTER' | 'EXTERNAL_RETURN' | 'END';

export interface HistoryItem {
  /**
   * Идентификатор шага истории
   */
  id: string;

  /**
   * Имя flow
   */
  flow: string;

  /**
   * id flow в рамках текущего процесса
   */
  flowid?: string;

  /**
   * Имя состояния
   */
  state: string;

  /**
   * Заголовок шага истории
   */
  title: string;

  /**
   * Значение шага истории
   */
  value?: string;

  /**
   * Доступность
   */
  status: 'ACTIVE' | 'HIDDEN' | 'DISABLE';
}

export interface Data {
  result: Result;
  /**
   * Идентификатор процесса
   */
  pid?: string;
  
  /**
   * Имя Процесса
   */
  flow?: string;

  /**
   * Имя состояния
   */
  state?: string;

  /**
   * Данные которые пришли с бэка
   */
  output?: Object;

  /**
   * Хлебные крошки
   */
  history?: HistoryItem[];

  /**
   * URL процесса, передается при запросе на внешний переход/возврат
   */
  url?: string;
}

export interface Error {
  /**
   * Код ошибки
   */
  code?: string;

  /**
   * Заголовок ошибки
   */
  title: string;

  /**
   * Текст ошибки
   */
  text: string;
}
