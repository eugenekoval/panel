var sch_tooltip;
var sch_in_tp = false;
var sch_in_sp = false;

$(function(){
    $("body").append("<div id='sch_container'><img src='search.png' width='35px' height='35px' id='sch_img'></div>");  
    $("body").append("<div id='sch_container_tooltip'></div>");  
    sch_panel_create();
    $("#sch_img").hover(
        function(){
            $("#sch_search_panel").fadeIn('slow');
        },
        function(){
            setTimeout(function(){
                if (!sch_in_sp)
                    $("#sch_search_panel").fadeOut('slow'); 
            },100);
        }
    );
    $("#sch_search_panel").hover(
        function(){
            sch_in_sp = true;
        },
        function(event){ 
            var e = event.toElement || event.relatedTarget;
            if (e.parentNode == this || e == this || e == document.getElementById('sch_container_tooltip')) {
                return;
            }
            //console.log(document.getElementById('sch_container_tooltip'));
            //console.log(e);
            sch_in_sp = false;
            setTimeout(function(){
                if (!sch_in_tp){
                    $("#sch_search_panel").fadeOut('slow'); 
                    $("#sch_tooltip").fadeOut('slow');
                }
            },100);
        }
    );
});
function sch_panel_create(){
    var arr = ['Звери, птицы, насекомые','Люди','Неодушевлённые существа и абстрактные понятия','Мифические персонажи'];
    var arr2 = ['Волк,Лисица,Собака,Лев,Олень,Коза,Верблюд,Журавль,Крысы,Ласки,Овцы,Конь,Обезьяна,Ягнёнок,Ворона,Ворон,Газель,Черепаха,Крыса,Воронёнок,Голубь,Муравей,Звери,Бык,Лягушка,Голуби,Мулы,Ослы,Петухи,Попугаи,Жаворонок,Птенцы,Куропатка,Заяц,Лягушки,Черепаха,Змея,Козёл,Коршун,Соловей,Кот,Воробей,Ласочка,Кролик, Кошка,Мышь,Кролики,Слон,Устрица,Куропатка,Ласочка,Ласточка,Лебедь,Комар,Осёл,Летучая мышь,Утка,Индюшки,Лошадь,Аист,Мухи,Ёж,Медведица,Львица,Вол,Мартышка,Пчела,Сова,Дельфин,Леопард,Конь,Орёл,Дикая Свинья,Сорока,Жук,Орлица,Стадо,Паук,Змея,Ястреб,Медведь,Рыбка,Рыбы,Баклан,Курица,Слон,Сокол,Каплун,Рак,Стрекоза,Муравей,Цапля,Лошак,Блоха,Шершни,Пчёлы,Поросёнок,Ягнёнок,Павлин',
               'Астролог,Мудрец,Безумец,Безумный продавец мудрости,Ваятель, Пастухи,Охотник,Мать,Ребёнок,Гадальщица,Госпожа,Служанки,Александр,Витязи,Друзья,Король,Сын,Человек,Демокрит,Абдериты,Дровосек,Женщины,Землевладелец,Сыновья,Искатели,Фортуны,Женщина,Крестьянин,Купец,Дворянин,Пастух,Королевский,Сын,Повар,Дровосек,Царь,Мельник,Вдова,Молочница,Муж,Жена,Вор,Возлюбленные,Девушка,Сберегатель,Оракул,Безбожник,Откупщик,Сапожник,Пастух,Паша,Поселянин,Симонид,Птицелов,Пустынник,Пьяница,Невеста,Рыбак,Садовод,Помещик,Прохожий,Священник,Философ,Скупой,Лесоруб,Несчастный,Умирающий,Монгол,Старик,Молодые,Брат,Милосердия,Третейский,Судья,Прохожие,Учитель,Ученик,Фермер,Дитя,Шарлатан,Школьник,Наставник,Хозяин сада,Шутник,Путник,Язычник',
               'Водопад,Река,Виноградник,Неволя,Голова,Хвост Змеи,Гора,Талисман,Клад,Яйцо,Дуб,Трость,Землевладелец,Жёлудь,Тыква,Секрет,Пила,Котёл,Горшок,Лес,Куст,Бюст,Судьба,Горшок с молоком,Море,Жемчужное Зерно,Подагра,Свеча,Смерть,Тень,Туша,Солнце,Изображение,Желудок,Члены тела,Покойник,Эпилог,Мызник',
               'Дафнис,Амур,Алцимадура,Меркурий,Юнона,Сатир,Улисс,Драконы,Тирсис,Амаранта,Утопленница,Феб,Борей,Филомела,Прокна,Юпитер,Перуны,Идол'
               ]; 
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
                                
                if (document.getElementById("sch_tooltip") != null)
                    document.getElementById("sch_tooltip").parentNode.removeChild(document.getElementById("sch_tooltip"));
                sch_in_tp = false;
                setTimeout(function(){
                    if (!sch_in_sp)
                        $("#sch_search_panel").fadeOut('slow'); 
                },100);
            };
            sch_tooltip.onmouseover = function(e){
                sch_in_tp = true;
            }
            document.getElementById('sch_tooltip_cont').appendChild(sch_tooltip);
            $(sch_tooltip).fadeIn('slow');
            sch_tooltip.style.left = (this.parentNode.offsetLeft+
                                 (this.parentNode.clientWidth/2)+
                                 this.parentNode.parentNode.parentNode.offsetLeft - sch_tooltip.clientWidth/2)+
                                 "px";
            //$(sch_tooltip).fadeIn();
        }
        span.onmouseout = function(e){ 
            var ev = e.toElement || e.relatedTarget;
        }
        span.appendChild(txt);
        td.appendChild(span);
        tr.appendChild(td);
    }
    t.appendChild(tr);
    var d=document.createElement('div');
    d.id = "sch_search_panel";
    d.appendChild(t);
    
    $("#sch_container").append(d);
    
    var dd = document.createElement("div");
    dd.id = "sch_tooltip_cont";
    dd.style.bottom = "40px";
    $("#sch_container_tooltip").append(dd);
    $("#sch_tooltip_cont").width($("#sch_search_panel").width()+"px");
    $("#sch_tooltip_cont").offset({'left':$("#sch_search_panel").offset().left});
    //$("#sch_search_panel").css('display','none');
    
}

function sch_enter(){
    var text = this.innerHTML;
    len = text.length-1;
    u = 0;
    var input = (document.getElementsByName('q')[0]);
    text = text.toLowerCase();
    input.value = "";
    input.value = input.value + text;
    document.getElementsByName('sa')[0].click();
}

