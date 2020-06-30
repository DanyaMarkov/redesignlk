window.onload = a;

function a() {
  var spisok = [];

  spisok[0] =
    `<p><strong>- для обучающихся Транспортного факультета:</strong></p>
	<blockquote>
	<p>107023,  г. Москва, ул. Большая Семеновская, 38, ауд В-107, В-108</p>
	<p>(495) 223-05-23, доб. 1120, 1122, 1123 (очная  форма)<br>
	(495) 223-05-23, доб. 1215, 1304 (заочная форма)</p>
	<p>E-mail: <a href="mailto:crs-transport@mospolytech.ru">crs-transport@mospolytech.ru</a></p>
	</blockquote>
	<p><strong>- для обучающихся Факультета информационных технологий:</strong></p>
	<blockquote>
	<p>107023,  г. Москва, ул. Большая Семеновская, 38, ауд В-101, В102</p>
	<p>(495) 223-05-23, доб. 1175, 1375, 1475<br>
	(495) 223-05-39 </p>
	<p>E-mail: <a href="mailto:crs-informatika@mospolytech.ru">crs-informatika@mospolytech.ru</a></p>
	</blockquote>`;
  spisok[1] =
    ' <input OnClick="a()" type="button" value="На Большой Семёновской" style="background-color: whitesmoke;color:black; width:200px;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="На Автозаводской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="На Павла Корчагина" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[4] =
    ' <input OnClick="d()" type="button" value="На Прянишникова" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[5] =
    ' <input OnClick="e()" type="button" value="На Садовой-Спасской" style="background-color: black;color:whitesmoke; width:200px;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
  let hah4 = document.getElementById("but4");
  hah4.innerHTML = spisok[4];
  let hah5 = document.getElementById("but5");
  hah5.innerHTML = spisok[5];
}

function b() {
  var spisok = [];

  spisok[0] =
    `<p><strong>- для обучающихся факультетов Машиностроения и  Урбанистики и городского хозяйства в части направлений подготовки  энергетическое машиностроение, электроэнергетика и электротехника,  теплоэнергетика и теплотехника, строительство, радиотехника:</strong></p>
	<blockquote>
	<p>г. Москва, ул. Автозаводская, 16, корпус 4, ауд. 4310,  4311, 4312</p>
	<p>(495) 276-37-30 доб. 2288, 2289,  2290 - очная форма обучения<br>
	(495) 276-37-30 доб. 2285, 2287 -  очно-заочная, заочная формы обучения<br>
	(495) 276-37-30 доб. 2240 -  студенческий отдел кадров</p>
	<p>E-mail: <a href="mailto:crs-mash@mospolytech.ru">crs-mash@mospolytech.ru</a></p>
	</blockquote>
	<p><strong>- для обучающихся факультетов Химической технологии и  биотехнологии
	и Урбанистики и городского хозяйства в части направлений подготовки  (специальностей) горное дело, нефтегазовое дело, прикладная геология,  технология геологической разведки:</strong></p>
	<blockquote>
	<p>г. Москва, ул. Автозаводская, д. 16, корпус 2, ауд.  2310, 2311, 2312, 2313</p>
	<p>(495) 276-37-30, доб. 2255, 2253<br>
	(495) 276-37-30, доб. 2256&nbsp;(заочная форма)</p>
	<p>E-mail: <a href="mailto:crs-khim@mospolytech.ru">crs-khim@mospolytech.ru</a></p>
	</blockquote>`;
  spisok[1] =
    ' <input OnClick="a()" type="button" value="На Большой Семёновской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="На Автозаводской" style="background-color: whitesmoke;color:black; width:200px;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="На Павла Корчагина" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[4] =
    ' <input OnClick="d()" type="button" value="На Прянишникова" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[5] =
    ' <input OnClick="e()" type="button" value="На Садовой-Спасской" style="background-color: black;color:whitesmoke; width:200px;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
  let hah4 = document.getElementById("but4");
  hah4.innerHTML = spisok[4];
  let hah5 = document.getElementById("but5");
  hah5.innerHTML = spisok[5];
}

function c() {
  var spisok = [];

  spisok[0] =
    `<p><strong>- для обучающихся факультета Экономики и управления:</strong></p>
	<blockquote>
	<p>г. Москва, ул. Павла Корчагина, 22, ауд. 213, 213а</p>
	<p>(495) 223-05-23, доб. 3042, 3045<br>
	(495) 223-05-23, доб. 3110, 3114 (очная форма)<br>
	(495) 223-05-23, доб. 3043, 3044 (очно-заочная и заочная форма)</p>
	<p>E-mail: <a href="file:///C:\Users\РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ\AppData\Local\Microsoft\Windows\Temporary%20Internet%20Files\Downloads\crs-zaochsoc@mospolytech.ru">crs-zaochsoc@mospolytech.ru</a></p>
	</blockquote>`;
  spisok[1] =
    ' <input OnClick="a()" type="button" value="На Большой Семёновской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="На Автозаводской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="На Павла Корчагина" style="background-color: whitesmoke;color:black; width:200px;"> ';
  spisok[4] =
    ' <input OnClick="d()" type="button" value="На Прянишникова" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[5] =
    ' <input OnClick="e()" type="button" value="На Садовой-Спасской" style="background-color: black;color:whitesmoke; width:200px;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
  let hah4 = document.getElementById("but4");
  hah4.innerHTML = spisok[4];
  let hah5 = document.getElementById("but5");
  hah5.innerHTML = spisok[5];
}

function d() {
  var spisok = [];

  spisok[0] =
    `<p><strong>- для обучающихся Института принтмедиа и информационных  технологий и Института графики и искусства книги имени В. А. Фаворского:</strong></p>
	<blockquote>
	<p>г.  Москва, ул.&nbsp;Прянишникова, 2а, ауд 1311</p>
	<p>(499) 976-37-77</p>
	<p>E-mail: <a href="mailto:crs-pryaniki@mospolytech.ru">crs-pryaniki@mospolytech.ru</a></p>
	</blockquote>
	<p><strong>- для обучающихся Института коммуникаций и медиабизнеса:</strong></p>
	<blockquote>
	<p>г.  Москва, ул.&nbsp;Михалковская, д.&nbsp;7, ауд. 3307</p>
	<p>(499) 154-11-82</p>
	<p>E-mail: <a href="mailto:crs-mikhalka@mospolytech.ru">crs-mikhalka@mospolytech.ru</a></p>
	</blockquote>`;
  spisok[1] =
    ' <input OnClick="a()" type="button" value="На Большой Семёновской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="На Автозаводской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="На Павла Корчагина" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[4] =
    ' <input OnClick="d()" type="button" value="На Прянишникова" style="background-color: whitesmoke;color:black; width:200px;"> ';
  spisok[5] =
    ' <input OnClick="e()" type="button" value="На Садовой-Спасской" style="background-color: black;color:whitesmoke; width:200px;"> ';

  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
  let hah4 = document.getElementById("but4");
  hah4.innerHTML = spisok[4];
  let hah5 = document.getElementById("but5");
  hah5.innerHTML = spisok[5];
}

function e() {
  var spisok = [];

  spisok[0] =
    `<p><strong>- для обучающихся Института издательского дела и  журналистики</strong></p>
	<blockquote>
	<p>г. Москва, ул. Садовая-Спасская, 6, ауд. 4107,  4108</p>
	<p>(495) 608-38-79</p>
	<p>E-mail: <a href="mailto:crs-sady@mospolytech.ru">crs-sady@mospolytech.ru</a></p>
	</blockquote>`;
  spisok[1] =
    ' <input OnClick="a()" type="button" value="На Большой Семёновской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[2] =
    ' <input OnClick="b()" type="button" value="На Автозаводской" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[3] =
    ' <input OnClick="c()" type="button" value="На Павла Корчагина" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[4] =
    ' <input OnClick="d()" type="button" value="На Прянишникова" style="background-color: black;color:whitesmoke; width:200px;"> ';
  spisok[5] =
    ' <input OnClick="e()" type="button" value="На Садовой-Спасской" style="background-color: whitesmoke;color:black; width:200px;"> ';
 
  let listok = document.getElementById("list");
  listok.innerHTML = spisok[0];

  let hah1 = document.getElementById("but1");
  hah1.innerHTML = spisok[1];
  let hah2 = document.getElementById("but2");
  hah2.innerHTML = spisok[2];
  let hah3 = document.getElementById("but3");
  hah3.innerHTML = spisok[3];
  let hah4 = document.getElementById("but4");
  hah4.innerHTML = spisok[4];
  let hah5 = document.getElementById("but5");
  hah5.innerHTML = spisok[5];
}


