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
    
    var arr = ['Люди','Природа','Неодушевлённые вещи','Животные, птицы, рыбы, насекомые','Мифологические','Части тела','Философские понятия'];
    var arr2 = ['Бедняк,Атлет,Богач,Кожевник,Плакальщицы,Больной,Лекарь,Вдовушка,Воин,Пастух,Старуха,Ворожея,Воры,Враги,Гадатель,Скульптор,Герой,Лысые,Дельфийцы,Афиняне,Демосфен,Демад,Диоген,Плешивый,Должник,Дровосек,Душегубец,Жена,Муж-пьяница,Женщина,Жрецы,Звездочёт,Люди, Коварный,Козопас,Человек,Крестьянин,Мальчик,Лгун,Дровосек,Мальчик-вор,Мать,Мот,Мясник,Рыбаки,Обманщик,Огородник,Оратор,Отец,Дочери,Сыновья,Пасечник,Пахарь,Пловцы,Продавец,Пророк,Птицелов,Путники,Погонщик,Разбойник,Скряга,Скупой,Слепец,Повар,Старик,Трус,Убийца,Угольщик,Сукновал,Пятиборец,Хозяйка,Служанки,Хранитель,Старуха,Любовницы,Эзоп,Писатель,Эфиоп,Юноши,Мясник',
               'Беременная Гора,Борей,Солнце,Земля,Дерево,Яблоня,Терновник,Деревья,Олива,Тростник,Зима,Весна,Камыш,Маслина,Виноград,Орешник,Платан,Тутовое дерево,Сосна,Море',
               'Ошейник,Ось,Пила,Верёвка,Горшки,Колодец,Сумы,Маска,Бубны,Лира,Жемчужина,Жемчужное зерно,Стена,Клин,Клятва',
               'Лисица,Блоха,Бобр,Бык,Козы,Жаба,Курочка,Верблюд,Слон,Обезьяна,Вороны,Волк,Журавль,Кобыла,Коза,Козлёнок,Конь,Овца,Овцы,Собака,Ягнёнок,Пёс,Волы,Ворона,Ворон,Змея,Лисица,Петух,Гадюка,Галка,Вороны,Голуби,Павлины,Птицы,Галчонок,Гиена,Собаки,Голубка,Голубь,Гуси,Журавли,Гусыня,Жуки,Лягушки,Петухи,Орёл,Рыбы,Дельфин,Пескарь,Осёл,Дрозд,Жаворонок,Курица,Зайцы,Лисицы,Черепаха,Зимородок,Краб,Ласка,Мыши,Кабан,Конь,Комар,Кошка,Куры,Крот,Ласточка,Лебедь, Медведь,Лев,Мышь,Оленёнок,Слон,Летучая мышь,Нырок,Козёл,Крокодил,Львица,Муравей,Горлица,Жук,Муха,Мухи,Олень,Галка,Оса,Мул,Цикады,Куропатки,Попугай,Поросёнок,Аист,Жаворонок,Куропатка,Трутни,Рыбёшка,Рыбка,Свинья,Улитка,Соловей,Ястреб,Тунец,Улитки,Цикада,Чайка,Коршун,Чиж,Щенок',
               'Зевс,Геракл,Плутос,Гермес,Тиресий,Аполлон,Афина,Прометей,Афродита,Сатир',
               'Голова,Хвост,Живот,Ноги',
               'Стыд,Судьба,Смерть'
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

