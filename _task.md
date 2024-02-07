**authors:** `GayaneOrlova` `woouwrti` `Balaberd`

# 1 уровень [материал](необходимый минимум)

## React

- [ ] [ author ] Пишем функциональные компоненты c хуками в приоритете над классовыми.
- [ ] [ author ] Есть четкое разделение на умные и глупые компоненты [материал](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), [перевод](https://habr.com/ru/post/266559/)
- [ ] [ author ] Есть рендеринг списков [материал](https://ru.reactjs.org/docs/lists-and-keys.html)
- [ ] [ author ] Реализована хотя бы одна форма [материал](https://ru.reactjs.org/docs/forms.html)
- [x] [ Balaberd ] Есть применение Контекст API [материал](https://ru.reactjs.org/docs/context.html)
- [ ] [ author ] Есть применение предохранителя [материал](https://ru.reactjs.org/docs/error-boundaries.html)
- [ ] [ author ] Есть хотя бы один кастомный хук [материал](https://ru.reactjs.org/docs/hooks-custom.html)
- [ ] [ author ] Хотя бы несколько компонентов используют PropTypes [материал](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
- [ ] [ author ] Поиск не должен триггерить много запросов к серверу [материал](https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row)

## Redux

- [ ] [ author ] Используем Modern Redux with Redux Toolkit [материал](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
- [ ] [ author ] Используем слайсы [материал](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
- [ ] [ author ] Есть хотя бы одна кастомная мидлвара [материал](https://redux.js.org/understanding/history-and-design/middleware)
- [ ] [ author ] Используется RTK Query [материал](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
- [ ] [ author ] Используется Transforming Responses [материал](https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses)

# 2 уровень (необязательный)

- [ ] [ author ] Проведена оптимизация приложения [материал](https://redux.js.org/tutorials/essentials/part-6-performance-normalization)
- [ ] [ author ] Используются мемоизированные селекторы [материал](createSelector).
- [ ] [ author ] Используется нормализованная структура стейта [материал](createEntityAdapter).
- [ ] [ author ] Подключен storybook и созданы несколько сторисов [материал](https://storybook.js.org/)
- [ ] [ author ] Использование TypeScript [материал](https://ru.reactjs.org/docs/static-type-checking.html#typescript)

# Требования к функциональности

Сайт состоит из:

- [ ] [ author ] шапки, которая не ререндерится между переходами по страницам.
- [ ] [ author ] При клике на название сайта (картинка/лого) должен произойти переход на корневой рут (/).
- [ ] [ author ] Кнопка Вход - переходит на страницу входа (/signin).
- [ ] [ author ] Кнопка Регистрация - переходит на страницу регистрации (/signup).
- [ ] [ author ] После регистрации или входа по учетной записи, кнопки Вход и Регистрация должны исчезнуть, а вместо них отобразиться имя учетной записи и кнопки:
- [ ] [ author ] Избранное - переход на страницу /favorites. Там отображаются карточки с единицами информации, которые ранее были добавлены в избранное.
- [x] [Balaberd] урл /favorites доступен только вторизованному пользователю. Неавторизованного пользователя должно редиректить на /signin
- [ ] [ author ] История - переход на страницу /history где будут отображаться все предыдущие запросы к апи, когда происходил поиск. Придумайте сами, как это будет выглядеть и что отображаться. Главное, чтобы на этой странице можно было увидеть, что искалось ранее и можно было в один клик открыть состояние с выставленными фильтрами и текстом поиска.
- [x] [Balaberd] урл /history доступен авторизованному пользователю. Неавторизованного пользователя должно редиректить на /signin
- [ ] [ author ] Выход, по нажатию на которую должен произойти выход из учетной записи.
- [x] [Balaberd] тело сайта, куда будет рендериться содержимое при переходе по урлам.
- [ ] [ author ] На главной странице (/) располагается вступительный текст с описанием сайта и панель поиска: инпут и, если необходимо, всякого рода фильтры.
- [ ] [ author ] При вводе в инпут можно показывать какие-то саджесты, например первых 5 результатов и при клике на саджест сразу перенаправлять пользователя на страницу с единицей информации. В таком быстром поиске с саджестами обязательно заиспользуйте debounce, чтобы не стрелять запросами на каждое нажатие клавиши.
- [ ] [ author ] Когда пользователь заполнил поле поиска и нажал Найти, можно перебросить пользователя на урл /search?тут*query*параметры, чтобы удобно работать с поиском и перезагрузками этой страницы. Либо можете построить процесс поиска как-нибудь по-другому на ваше усмотрение. Это зависит от АПИ, которое вы выбрали.
- [ ] [ author ] На странице /search будут отображаться Панель поиска и под панелью отображаем карточки единиц информации.
- [ ] [ author ] При нажатии на кнопку подробнее в карточке, происходит переход на страницу с полным описанием единицы информации. Если приложение перезагрузить находясь на этой странице, то после перезагрузки приложение также должно остаться на этой странице с корректной отображаемой информацией. Также, если отправить ссылку на единицу информации другу (или просто скопировать урл и вставить в новую табу в браузере), то должна корректно открываться страница с единицей информации.
- [ ] [ author ] Регистрацию можно сделать через LocalStorage. Пользователь просто пишет логин и пароль, мы запоминаем его в LS. Его Избранное и История поиска также сохраняется в LS и подгружается из LS при входе.
- [ ] [ author ] На форме входа должна быть валидация.
- [ ] [ author ] Если логина не существует, должны показать ошибку.
- [ ] [ author ] Если логин есть, но пароль написан неправильно, то тоже показываем соответствующую ошибку.
- [ ] [ author ] Также валидируем форму на обязательность заполненных полей Логина и Пароля.
- [ ] [ author ] На форме регистрации должна быть валидация на обязательность заполнения полей Логина и Пароля.