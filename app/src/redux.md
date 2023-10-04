Redux Toolkit для компонента CoursesGroups.

Для начала, нам понадобится создать действия (actions), редюсеры (reducers) и селекторы (selectors), используя Redux Toolkit. Это позволит нам легко управлять состоянием нашего приложения.

Создайте файл coursesGroupsSlice.js в папке src/features/coursesGroups/, где мы определим срез состояния для компонента CoursesGroups.


import { createSlice } from '@reduxjs/toolkit';
import { getGroups } from '../../api/coursesApi';

const initialState = {
  groups: [],
  isLoading: false,
  error: null,
};

const coursesGroupsSlice = createSlice({
  name: 'coursesGroups',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setGroups, setError } = coursesGroupsSlice.actions;

export const fetchGroups = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const groups = await getGroups();
    dispatch(setGroups(groups));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const selectGroups = (state) => state.coursesGroups.groups;
export const selectIsLoading = (state) => state.coursesGroups.isLoading;
export const selectError = (state) => state.coursesGroups.error;

export default coursesGroupsSlice.reducer;


*************************

Здесь мы создаем срез состояния coursesGroupsSlice, который имеет начальное состояние со свойствами groups, isLoading и error. Затем мы создаем действия setLoading, setGroups и setError для установки состояния загрузки, групп курсов и ошибки соответственно. Затем мы создаем асинхронное действие fetchGroups, которое вызывает функцию getGroups для получения групп курсов и обновляет состояние в соответствии с результатом вызова.

Наконец, мы экспортируем селекторы selectGroups, selectIsLoading и selectError, которые позволяют нам получить доступ к соответствующим свойствам состояния coursesGroupsSlice.

Создайте файл coursesApi.js в папке src/api/, где мы определим функцию для получения групп курсов.

****************************

export const getGroups = async () => {
  const response = await fetch('/api/groups');
  if (!response.ok) {
    throw new Error('Failed to fetch groups');
  }
  const groups = await response.json();
  return groups;
};


**********************
Здесь мы экспортируем функцию getGroups, которая выполняет запрос к нашему API для получения групп курсов. 

*/***/*/*/*/*/*/*


чтобы связать наш coursesGroupsSlice со стором сайта, нам нужно создать корневой редюсер, который будет объединять все срезы состояния нашего приложения.

Создайте файл rootReducer.js в папке src/, где мы объединим все редюсеры нашего приложения.

***************************

import { combineReducers } from '@reduxjs/toolkit';
import coursesGroupsReducer from '../features/coursesGroups/coursesGroupsSlice';

const rootReducer = combineReducers({
  coursesGroups: coursesGroupsReducer,
});

export default rootReducer;


****************************

Здесь мы создаем корневой редюсер rootReducer, который объединяет все редюсеры нашего приложения. В данном случае у нас только один редюсер coursesGroupsReducer, который мы импортируем из coursesGroupsSlice.js.

Создайте файл store.js в папке src/, где мы создадим хранилище Redux для нашего приложения.


************************

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;


**************************

Здесь мы создаем хранилище Redux store, используя configureStore из Redux Toolkit и передаем наш корневой редюсер rootReducer.

Используйте Provider из библиотеки react-redux для предоставления доступа к хранилищу в нашем приложении.

************************

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CoursesGroups from './features/coursesGroups/CoursesGroups';

function App() {
  return (
    <Provider store={store}>
      <CoursesGroups />
    </Provider>
  );
}

export default App;


**********************************

Здесь мы импортируем Provider из react-redux, передаем ему наше хранилище Redux store и оборачиваем наш компонент CoursesGroups в Provider, чтобы предоставить доступ к хранилищу в нашем приложении.

Теперь наш компонент CoursesGroups может использовать Redux Toolkit для вызова getGroups и сохранения результата вызова в хранилище. Мы также можем использовать селекторы, чтобы получать доступ к соответствующим свойствам состояния coursesGroupsSlice.


***********************

Как в компоненте CoursesGroups теперь получить данные из store

Чтобы получить данные из стора в компоненте CoursesGroups, вам нужно использовать хук useSelector из библиотеки react-redux.

Импортируйте хук useSelector и создайте селектор для выборки данных из состояния coursesGroupsSlice.
**********************************

import { useSelector } from 'react-redux';

const selectGroups = state => state.coursesGroups.groups;

****************************

десь мы создали селектор selectGroups, который возвращает свойство groups из состояния coursesGroupsSlice.

Воспользуйтесь хуком useSelector в компоненте CoursesGroups, чтобы получить доступ к данным из состояния.

***************************************

function CoursesGroups() {
  const groups = useSelector(selectGroups);

  // ...

  return (
    // ...
  );
}
 *****************************


Здесь мы вызываем хук useSelector и передаем ему наш селектор selectGroups. Затем мы можем использовать переменную groups, чтобы получить доступ к данным из состояния coursesGroupsSlice.

Теперь в компоненте CoursesGroups у нас есть доступ к данным из стора, которые мы можем использовать для отображения или дальнейшей обработки.


/////

Как изменить состояние state.coursesGroups.groups; в компоненте


Чтобы изменить состояние state.coursesGroups.groups в компоненте CoursesGroups, вам нужно использовать хук useDispatch из библиотеки react-redux и вызвать экшен setGroups из среза состояния coursesGroupsSlice.

Импортируйте хук useDispatch и экшен setGroups из среза состояния coursesGroupsSlice.

************************

import { useDispatch } from 'react-redux';
import { setGroups } from './coursesGroupsSlice';


***********************

Воспользуйтесь хуком useDispatch в компоненте CoursesGroups, чтобы получить доступ к функции диспетчера Redux.

*******************

function CoursesGroups() {
  const dispatch = useDispatch();

  // ...

  return (
    // ...
  );
}



********************

Используйте функцию диспетчера dispatch и вызовите экшен setGroups, чтобы изменить состояние groups.

******************


function CoursesGroups() {
  const dispatch = useDispatch();

  function handleUpdateGroups(newGroups) {
    dispatch(setGroups(newGroups));
  }

  // ...

  return (
    // ...
  );
}


*********************

Здесь мы создали функцию handleUpdateGroups, которая принимает новые данные групп и вызывает экшен setGroups, передавая новые данные в качестве параметра. Экшен setGroups обновляет состояние groups в соответствии с переданными данными.

Теперь, когда вы вызываете функцию handleUpdateGroups, состояние state.coursesGroups.groups будет обновлено в соответствии с переданными данными.

/*const [data, setData] = useState([]);
  const [page, setPage] = useState(1);


  const { data: resData, loading, totalCount, error } = useFetch('https://jsonplaceholder.typicode.com/todos', page);

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  const isFetching = useMemo(() => +totalCount > data.length, [data, totalCount])

  useEffect(() => {
    if (resData && isFetching) {
      setData(prev => [...prev, ...resData]);
    }
  }, [resData]);

  useEffect(() => {
    if (data && inView) {
      setPage(prev => (prev + 1));
    }
  }, [inView]);*/