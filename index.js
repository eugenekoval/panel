var tooltip;
var intt;

window.onload=function(){
    /*var i = document.createElement('input');
    i.setAttribute("type", "text");
    i.setAttribute("id", "sch_test");
    document.body.appendChild(i);*/
    
    var arr = ['Звери, птицы, насекомые','Люди','Неодушевлённые существа и абстрактные понятия','Мифические персонажи'];
    var arr2 = ['Волк,Лисица,Собака,Лев,Олень,Коза,Верблюд,Журавль,Крысы,Ласки,Овцы,Конь,Обезьяна,Ягнёнок,Ворона,Ворон,Газель,Черепаха,Крыса,Воронёнок,Голубь,Муравей,Звери,Бык,Лягушка,Голуби,Мулы,Ослы,Петухи,Попугаи,Жаворонок,Птенцы,Куропатка,Заяц,Лягушки,Черепаха,Змея,Козёл,Коршун,Соловей,Кот,Воробей,Ласочка,Кролик, Кошка,Мышь,Кролики,Слон,Устрица,Куропатка,Ласочка,Ласточка,Лебедь,Комар,Осёл,Летучая мышь,Утка,Индюшки,Лошадь,Аист,Мухи,Ёж,Медведица,Львица,Вол,Мартышка,Пчела,Сова,Дельфин,Леопард,Конь,Орёл,Дикая Свинья,Сорока,Жук,Орлица,Стадо,Паук,Змея,Ястреб,Медведь,Рыбка,Рыбы,Баклан,Курица,Слон,Сокол,Каплун,Рак,Стрекоза,Муравей,Цапля,Лошак,Блоха,Шершни,Пчёлы,Поросёнок,Ягнёнок,Павлин',
               'Астролог,Мудрец,Безумец,Безумный продавец мудрости,Ваятель, Пастухи,Охотник,Мать,Ребёнок,Гадальщица,Госпожа,Служанки,Александр,Витязи,Друзья,Король,Сын,Человек,Демокрит,Абдериты,Дровосек,Женщины,Землевладелец,Сыновья,Искатели,Фортуны,Женщина,Крестьянин,Купец,Дворянин,Пастух,Королевский,Сын,Повар,Дровосек,Царь,Мельник,Вдова,Молочница,Муж,Жена,Вор,Возлюбленные,Девушка,Сберегатель,Оракул,Безбожник,Откупщик,Сапожник,Пастух,Паша,Поселянин,Симонид,Птицелов,Пустынник,Пьяница,Невеста,Рыбак,Садовод,Помещик,Прохожий,Священник,Философ,Скупой,Лесоруб,Несчастный,Умирающий,Монгол,Старик,Молодые,Брат,Милосердия,Третейский,Судья,Прохожие,Учитель,Ученик,Фермер,Дитя,Шарлатан,Школьник,Наставник,Хозяин сада,Шутник,Путник,Язычник',
               'Водопад,Река,Виноградник,Неволя,Голова,Хвост Змеи,Гора,Талисман,Клад,Яйцо,Дуб,Трость,Землевладелец,Жёлудь,Тыква,Секрет,Пила,Котёл,Горшок,Лес,Куст,Бюст,Судьба,Горшок с молоком,Море,Жемчужное Зерно,Подагра,Свеча,Смерть,Тень,Туша,Солнце,Изображение,Желудок,Члены тела,Покойник,Эпилог,Мызник',
               'Дафнис,Амур,Алцимадура,Меркурий,Юнона,Сатир,Улисс,Драконы,Тирсис,Амаранта,Утопленница,Феб,Борей,Филомела,Прокна,Юпитер,Перуны,Идол'
               ]
    var t = document.createElement("table");
    var tr = document.createElement("tr");
    for (i=0;i<arr.length;i++){
        var td = document.createElement("td");
        var txt = document.createTextNode(arr[i]);
        var span = document.createElement("span");
        span.id = "cat_"+i;
        span.onmouseover = function(){
            tooltip = false;
            if (document.getElementById("sch_tooltip") != null)
                document.getElementById("sch_tooltip").parentNode.removeChild(document.getElementById("sch_tooltip"));
            tooltip = document.createElement("div");
            var id = this.id.split("_")[1];
            var tbl = document.createElement('table');
            tbl.style.width = "100%";
            var lst = arr2[id].split(",");
            /*for (j=0;j<lst.length;j+=2){
                td1 = document.createElement('td');
                td2 = document.createElement('td');
                a = document.createElement('a');
                a.setAttribute('href', '#');
                a.appendChild(document.createTextNode(lst[j]));
                td1.appendChild(a);
                a2 = document.createElement('a');
                a2.setAttribute('href', '#');
                a2.appendChild(document.createTextNode(lst[j+1]));
                if (lst[j+1] != undefined)
                    td2.appendChild(a2);
                trr = document.createElement('tr');
                trr.appendChild(td1);
                trr.appendChild(td2);
                tbl.appendChild(trr);
                a.addEventListener('click', enter, false);
                a2.addEventListener('click', enter, false);
            } */
            for (j=0;j<lst.length;){
                var flag = Math.ceil(lst.length/15);
                k = 0;
                trr = document.createElement('tr');
                for (k=0;k<=flag;k++){
                    td = document.createElement('td');
                    a = document.createElement('a');
                    a.setAttribute('href', '#');
                    a.appendChild(document.createTextNode(lst[j]));
                    if (lst[j] != undefined)
                        td.appendChild(a);
                    j++;
                    trr.appendChild(td);
                    a.addEventListener('click', enter, false);
                }
                tbl.appendChild(trr);
            }
            
            tooltip.appendChild(tbl);
            tooltip.id = "sch_tooltip";
            //console.log(this.clientWidth);
            tooltip.setAttribute('class', 'sch_tooltip');
            tooltip.onmouseout = function(e){
                tooltip = false;
                var ev = e.toElement || e.relatedTarget;
                if (ev == this) return;
                if (ev.parentNode == this) return;
                if (ev.parentNode != null){
                    if (ev.parentNode.parentNode == this) return; 
                    if (ev.parentNode.parentNode != null){
                        if (ev.parentNode.parentNode.parentNode == this) return;
                        if (ev.parentNode.parentNode.parentNode != null){ 
                            if (ev.parentNode.parentNode.parentNode.parentNode == this) return;
                        }
                    }
                }
                
                //if (ev.parentNode == this || ev == this || ev.parentNode.parentNode == this || ev.parentNode.parentNode.parentNode == this || ev.parentNode.parentNode.parentNode.parentNode == this) return;
                if (document.getElementById("sch_tooltip") != null)
                    document.getElementById("sch_tooltip").parentNode.removeChild(document.getElementById("sch_tooltip"));
            };
            document.getElementById('sch_tooltip_cont').appendChild(tooltip);
            //console.log(tooltip.clientWidth);
            tooltip.style.left = (this.parentNode.offsetLeft+
                                 (this.parentNode.clientWidth/2)+
                                 this.parentNode.parentNode.parentNode.offsetLeft - tooltip.clientWidth/2)+
                                 "px";
        }
        span.onmouseout = function(e){
            var ev = e.toElement || e.relatedTarget;
            /*if (document.getElementById("tooltip") != null)
                    document.getElementById("tooltip").parentNode.removeChild(document.getElementById("tooltip"));*/
        }
        span.appendChild(txt);
        td.appendChild(span);
        tr.appendChild(td);
    }
    t.appendChild(tr);
    var d=document.createElement('div');
    d.id = "sch_search-panel";
    d.appendChild(t);
    
    document.body.appendChild(d);
    
    var dd = document.createElement("div");
    dd.id = "sch_tooltip_cont";
    dd.style.bottom = "60px";
    document.body.appendChild(dd);
    
}

function enter(){
    var text = this.innerHTML;
    len = text.length-1;
    u = 0;
    var input = (document.getElementsByName('q')[0]);
    /*var input;
    for (i=0;i<inputs.length;i++){
        input = inputs.item(i).value;
    }*/
    text = text.toLowerCase();
    input.value = "";
    input.value = input.value + text;
    document.getElementsByName('sa')[0].click();
    /*intt = window.setInterval(function(){
        input.value = input.value + text[u];
        console.log(text[u]);
        if (u == len){
            clearInterval(intt);
            document.getElementsByName('sa')[0].click()
        }
        u++;
    }, 100)*/
}

