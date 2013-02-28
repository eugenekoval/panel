var sch_tooltip;

/*window.onload = function(){
    sch_panel_create();
};*/
$(function(){
    sch_panel_create();
});

function sch_panel_create(){ 
    /*var i = document.createElement('input');
    i.setAttribute("type", "text");
    i.setAttribute("id", "sch_test");
    document.body.appendChild(i);*/
    
    var arr = ['Мифологические','Животные, птицы, насекомые, рыбы','Люди','Неодушевлённые вещи','Философские понятия','Болезни','Природа'];
    var arr2 = ['Алкид,Апеллес,Юпитер,Парнас',
                'Ослёнок,Белка,Бумажный Змей,Волк,Волчёнок,Журавль,Кот,Кукушка,Лисица,Мышонок,Ягнёнок,Овцы,Ворона,Курица,Лисица,Воронёнок,Лев,Гуси,Голуби,Заяц,Обезьяна,Змея,Овца,Червяк,Комар,Конь,Кот,Котёнок,Скворец,Кошка,Соловей,Змея,Лошадь,Собаки,Козы,Собака,Кукушка,Горлинка,Орёл,Петух,Лань,Лебедь,Щука,Рак,Барс,Комар,Мышь,Серна,Лещи,Осёл,Сурок,Лягушка,Вол,Мартышка,Медведь,Пчёлы,Звери,Ласточка,Муравей,Муха,Крыса,Обезьяны,Собаки,Крот,Куры,Паук,Соловей,Плотичка,Собаки,Мухи,Свинья,Синица,Скворец,Курица,Слон,Моська,Сокол,Соловьи,Стрекоза,Муравей,Филин,Чиж,Голубь,Ёж,Щука',
                'Бедный,Богач,Безбожники,Поэт,Вельможа,Философ,Водолазы,Пастухи,Госпожа,Служанки,Мальчики,Мужики,Клеветник,Пастух,Всадник,Повар,Крестьяне,Крестьянин,Работник,Разбойник,Дервиш,Лжец,Любопытный,Царь,Мальчик,Мельник,Механик,Мирон,Мот,Музыканты,Дорожные,Огородник,Оракул,Мужик,Откупщик,Сапожник,Охотник,Прихожанин,Прохожие, Извозчик,Невеста,Пустынник,Рыцарь,Скупой,Человек,Сочинитель,Старик,Молодые,Троеженец,Нищий,Хозяин',
                'Бочка,Бритвы,Булат,Алмаз,Гребень,Демьянова уха,Трость,Зеркало,Квартет,Колос,Котёл,Горшок,Топор,Ларчик,Очки,Мешок,Мирская сходка,Обоз,Пожар,Пушки,Паруса,Раздел, Огонь,Пляска,Тень,Кафтан,Хмель,Червонец',
                'Смерть,Мор,Напраслина,Дружба,Фортуна',
                'Подагра',
                'Водопад,Ручей,Дерево,Дуб,Булыжник,Камень,Река,Виноград,Листы,Корни,Море,Пруд,Роща,Туча,Цветы',
               ]
    var t = document.createElement("table");
    var tr = document.createElement("tr");
    for (i=0;i<arr.length;i++){
        var td = document.createElement("td");
        var txt = document.createTextNode(arr[i]);
        var span = document.createElement("span");
        span.id = "cat_"+i;
        span.onmouseover = function(){
            sch_tooltip = false;
            if (document.getElementById("sch_tooltip") != null)
                document.getElementById("sch_tooltip").parentNode.removeChild(document.getElementById("sch_tooltip"));
            sch_tooltip = document.createElement("div");
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
                    a.addEventListener('click', sch_enter, false);
                }
                tbl.appendChild(trr);
            }
            
            sch_tooltip.appendChild(tbl);
            sch_tooltip.id = "sch_tooltip";
            //console.log(this.clientWidth);
            sch_tooltip.setAttribute('class', 'sch_tooltip');
            sch_tooltip.onmouseout = function(e){
                sch_tooltip = false;
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
            document.getElementById('sch_tooltip_cont').appendChild(sch_tooltip);
            //console.log(tooltip.clientWidth);
            sch_tooltip.style.left = (this.parentNode.offsetLeft+
                                 (this.parentNode.clientWidth/2)+
                                 this.parentNode.parentNode.parentNode.offsetLeft - sch_tooltip.clientWidth/2)+
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
    d.id = "sch_search_panel";
    d.appendChild(t);
    
    document.body.appendChild(d);
    
    var dd = document.createElement("div");
    dd.id = "sch_tooltip_cont";
    dd.style.bottom = "60px";
    document.body.appendChild(dd);
    
}

function sch_enter(){
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

