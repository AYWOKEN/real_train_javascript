
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Lundi";
        break;
    case 1:
        day = "Mardi";
        break;
    case 2:
        day = "Mercredi";
        break;
    case 3:
        day = "Jeudi";
        break;
    case 4:
        day = "Vendredi";
        break;
    case 5:
        day = "Samedi";
        break;
    case  6:
        day = "Dimanche";
}

document.getElementById('demo').innerHTML = "Aujourd'hui on est " + day;

