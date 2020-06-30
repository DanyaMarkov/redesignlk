window.onload = c;

function a() {
    var spisok = [];

    spisok[0] = '<p>Для первого входа в личный кабинет необходимо получить <b>пароль</b> (код студента) в своем <a + class="form_obr">Центре по работе со студентами </a>. В качестве <b>логина</b> используйте Вашу <b> фамилию</b> (с <b> заглавной</b> первой буквой,остальные строчные, например Иванов). После успешной авторизации Вы можете поменять логин и пароль в лично кабинете (раздел "<a class="form_obr">Персональная информация</a>").</p> <p>Обратите внимание, что буквы в выданном в Центре по работе со студентами пароле (в виде <b> 0М-...</b> или<b> 0М-0М-...</b>) должны быть абраны в <b>русской</b> раскладке <b>заглавными</b>. Перед русской буквой "М" стоит цифра "ноль" - 0 (но не буква "О"). Обязательно указывайте <b>дефисы</b> (-) в пароле.</p><p>Если выданный центром пароль не подходит - воспользуйтесь <a class="form_obr">формой обратной связи</a>, при этомукажите в сообщении вводимые логин и пароль, свои ФИО полностью, дату рождения и группу.</p> ';
    spisok[1] = ' <input OnClick="a()" type="button" value="Учащимся" style="background-color: whitesmoke;color:black;"> '
    spisok[2] = ' <input OnClick="b()" type="button" value="Сотрудникам" style="background-color: black;color:whitesmoke;"> '
    spisok[3] = ' <input OnClick="c()" type="button" value="Нет пароля?" style="background-color: black;color:whitesmoke;"> '

    let listok = document.getElementById('list');
    listok.innerHTML = spisok[0];

    let hah1 = document.getElementById('but1');
    hah1.innerHTML = spisok[1];
    let hah2 = document.getElementById('but2');
    hah2.innerHTML = spisok[2];
    let hah3 = document.getElementById('but3');
    hah3.innerHTML = spisok[3];


}

function b() {
    var spisok = [];

    spisok[0] = '<p>Если вы не получали пароль ранее, обратитесь за единой учетной записью в отдел технической поддержки (ул.Б.Семеновская, 38, ауд А-418).</p> <p>После успешной авторизации Вы можете установить свои логин и пароль в личном кабинете(раздел "<a class="form_obr"> Персональная информация </a>").</p>';

    spisok[1] = ' <input OnClick="a()" type="button" value="Учащимся" style="background-color: black;color:whitesmoke;"> '
    spisok[2] = ' <input OnClick="b()" type="button" value="Сотрудникам" style="background-color: whitesmoke;color:black;"> '
    spisok[3] = ' <input OnClick="c()" type="button" value="Нет пароля?" style="background-color: black;color:whitesmoke;"> '

    let listok = document.getElementById('list');
    listok.innerHTML = spisok[0];

    let hah1 = document.getElementById('but1');
    hah1.innerHTML = spisok[1];
    let hah2 = document.getElementById('but2');
    hah2.innerHTML = spisok[2];
    let hah3 = document.getElementById('but3');
    hah3.innerHTML = spisok[3];


}

function c() {
    var spisok = [];

    spisok[0] = '<p>Обучающимся необходимо обратиться в свое отделение <a class="form_obr"> центра по работе со студентами </a>. Пароль имеет вид <b>0М-00012345</b> или <b>0М-0М-00012345</b>. Перед русской заглавной буквой "М" стоит цифра "ноль" - 0 (но не буква "О"). Не забывайте <b>дефисы</b> (-) в пароле.</p><p>Сотрудник, у которых отсутствует доступ в личный кабинет, необходимо получить данные единой учетной записи в отделе технической поддержки (ул.Б.Семеновская, 38, ауд А-418).</p>';

    spisok[1] = ' <input OnClick="a()" type="button" value="Учащимся" style="background-color: black;color:whitesmoke;"> '
    spisok[2] = ' <input OnClick="b()" type="button" value="Сотрудникам" style="background-color: black;color:whitesmoke;"> '
    spisok[3] = ' <input OnClick="c()" type="button" value="Нет пароля?" style="background-color: whitesmoke;color:black;"> '

    let listok = document.getElementById('list');
    listok.innerHTML = spisok[0];

    let hah1 = document.getElementById('but1');
    hah1.innerHTML = spisok[1];
    let hah2 = document.getElementById('but2');
    hah2.innerHTML = spisok[2];
    let hah3 = document.getElementById('but3');
    hah3.innerHTML = spisok[3];


}
