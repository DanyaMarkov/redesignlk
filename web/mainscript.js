window.onload = a;

function a() {
  var spisok = [];

  spisok[0] =
    "<p> <p>В данном разделе отображается информация о приказах, связанных со студентом</p><p>Приказ № <b>789-с</b> от <b>27 августа 2019</b> г. - «<b>О переводе на следующий курс (ликвидация задолженностей)</b>»</p> <br /><p>Приказ № <b>413-с</b> от <b>28 августа 2018</b> г. - «<b>О распределении по учебным группам</b>»</p><br /><p>Приказ № <b>549-ОД</b> от <b>3 августа 2018</b> г. - «<b>О зачислении</b>»</p></p> ";
  spisok[1] =
    ' <input OnClick="a()" type="button" value="Приказы" style="background-color: whitesmoke;color:black;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="Успеваемость" style="background-color: black;color:whitesmoke;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="Платежи" style="background-color: black;color:whitesmoke;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
}

function b() {
  var spisok = [];

  spisok[0] =
    '<p><div id="content"><p></p><p>В данном разделе отображается информация о результатах сдачи зачетно-экзаменационных сессий.</p><style>.normtbl td{border:#000 1px solid;	}</style><table cellpadding="5" cellspacing="0" border="1" style="border:#000 1px solid; border-collapse:collapse;" class="normtbl"><tbody><tr><td><b>Курс</b></td><td><b>Семестр</b></td><td><b>Дисциплина</b></td><td><b>Вид нагрузки</b></td><td><b>Оценка</b></td></tr><tr><td rowspan="24" align="center" valign="middle">1</td><td rowspan="12" align="center" valign="middle">1</td><td>Элективные дисциплины по физической культуре и спорту</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Экономика малого предприятия</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Проектная деятельность</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Основы тестирования</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Иностранный язык</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Документарная инженерная и управленческая коммуникация</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Инженерное проектирование</td><td>Курсовой проект</td><td>Отлично</td></tr><tr><td>Формальная логика</td><td>Экзамен</td><td>Удовлетворительно</td></tr><tr><td>Основы программирования</td><td>Экзамен</td><td>Отлично</td></tr><tr><td>Основы моделирования и информационных процессов</td><td>Экзамен</td><td>Отлично</td></tr><tr><td>Основы ИКТ</td><td>Экзамен</td><td>Хорошо</td></tr><tr><td>Математика</td><td>Экзамен</td><td>Хорошо</td></tr><tr><td rowspan="12" align="center" valign="middle">2</td><td>Элективные дисциплины по физической культуре и спорту</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Устная инженерная и управленческая коммуникация</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Структурное проектирование ИС</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Проектная деятельность</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Навыки эффективной презентации</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Иностранный язык</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Инженерное проектирование</td><td>Курсовой проект</td><td>Отлично</td></tr><tr><td>Программирование в КИС 1С</td><td>Экзамен</td><td>Отлично</td></tr><tr><td>Основы сетевых технологий</td><td>Экзамен</td><td>Хорошо</td></tr><tr><td>Основы работы с данными</td><td>Экзамен</td><td>Отлично</td></tr><tr><td>Основы баз данных</td><td>Экзамен</td><td>Хорошо</td></tr><tr><td>Математика</td><td>Экзамен</td><td>Отлично</td></tr><tr><td rowspan="12" align="center" valign="middle">2</td><td rowspan="12" align="center" valign="middle">3</td><td>Элективные дисциплины по физической культуре и спорту</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Проектная деятельность</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Программирование</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Основы бухучета и управления финансами</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Основы баз данных</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Иностранный язык</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Инженерное проектирование</td><td>Зачет</td><td>Зачтено</td></tr><tr><td>Инженерное проектирование</td><td>Курсовой проект</td><td>Хорошо</td></tr><tr><td>Программирование в КИС 1С</td><td>Экзамен</td><td>Отлично</td></tr><tr><td>Основы КИС</td><td>Экзамен</td><td>Отлично</td></tr><tr><td>Объектно-ориентированное проектрование</td><td>Экзамен</td><td>Хорошо</td></tr><tr><td>Дискретная математика</td><td>Экзамен</td><td>Отлично</td></tr></tbody></table>         </div></p>';

  spisok[1] =
    ' <input OnClick="a()" type="button" value="Приказы" style="background-color: black;color:whitesmoke;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="Успеваемость" style="background-color: whitesmoke;color:black;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="Платежи" style="background-color: black;color:whitesmoke;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
}

function c() {
  var spisok = [];

  spisok[0] =
    '<p><div id="content"><p><a href="http://mospolytech.ru/index.php?id=2042" target="_blank"><b>Информация по оплате обучения от договорного отдела</b></a></p><p><a href="files/site/kvit_edu.xls">Бланк квитанции оплаты обучения</a> &nbsp;&nbsp;&nbsp;<a href="files/site/kvit_penny.xls">Бланк квитанции оплаты неустойки</a> &nbsp;&nbsp;&nbsp;<a href="http://mospolytech.ru/index.php?id=545" target="_blank">Банковские реквизиты</a></p><p>По вопросам, связанным с оплатой обучения и отображением информации в личном кабинете, обращайтесь в <a href="http://mospolytech.ru/index.php?id=2042" target="_blank"><b> договорной отдел</b></a></p><h4>Сведения об оплатах отсутствуют</h4>         </div></p>';

  spisok[1] =
    ' <input OnClick="a()" type="button" value="Приказы" style="background-color: black;color:whitesmoke;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="Успеваемость" style="background-color: black;color:whitesmoke;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="Платежи" style="background-color: whitesmoke;color:black;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
}
