// {
//     id: ,
//     author: "",
//     name: "",
//     image: "",
//     description: "",
//     details: [],
//     price: ,
//     currency: "",
// }

// {
//     id: 0,
//     name: "My super Product",
//     image: "./static/img/placeholder.png",
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     In posuere lorem et metus ultricies, non auctor metus vehicula. 
//     Praesent ultrices ultrices feugiat. Cras quis ante orci. 
//     Nunc et est eu urna auctor scelerisque eget quis tortor. 
//     Praesent id enim suscipit, tempus mauris a, rutrum augue. 
//     Ut tellus urna, iaculis et tellus in, maximus aliquam tortor. 
//     Etiam ullamcorper et lectus in aliquam. 
//     In ut nisl eget risus aliquet egestas faucibus vel neque. 
//     Duis mauris mauris, ullamcorper non ullamcorper sit amet, 
//     pulvinar at turpis. Pellentesque condimentum sodales neque at rutrum. 
//     Orci varius natoque penatibus et magnis dis parturient montes, 
//     nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur 
//     adipiscing elit.`,
//     details: [
//         "You need it",
//         "You really need it!",
//         "You need it for sure!!!",
//         "Very cool"
//     ],
//     price: 10,
//     currency: "USD",
//     reviews_url: "./reviews.html"
// },

export const PRODUCTS = [
    
    {
        id: 1,
        author: "Рей Бредбери",
        name: "451° по Фаренгейту",
        image: "./static/img/451_farenheit.jpg",
        description: "Мастер мирового масштаба, совмещающий в литературе несовместимое. Создатель таких ярчайших шедевров, как \"Марсианские хроники\", \"451° по Фаренгейту\", \"Вино из одуванчиков\" и так далее и так далее. Лауреат многочисленных премий. Это Рэй Брэдбери. Его увлекательные истории прославили автора не только как непревзойденного рассказчика, но и как философа, мыслителя и психолога. Магический реализм его прозы, рукотворные механизмы радости, переносящие человека из настоящего в волшебные миры детства, чудо приобщения к великой тайне Литературы, щедро раздариваемое читателю, давно вывели Брэдбери на высокую классическую орбиту. Собранные в этой книге произведения - достойное тому подтверждение.",
        genre: ["Антиутопія", "Фантастика"],
        price: 269,
        currency: "UAH",
    },
    {
        id: 2,
        author: "Грегори Дэвид Робертс",
        name: "Шантарам",
        image: "static/img/shantaram.jpg",
        description: "Представляем читателю один из самых поразительных романов начала XXI века (в 2015 году получивший долгожданное продолжение – «Тень горы»). Эта преломленная в художественной форме исповедь человека, который сумел выбраться из бездны и уцелеть, разошлась по миру тиражом четыре миллиона экземпляров (из них полмиллиона – в России) и заслужила восторженные сравнения с произведениями лучших писателей Нового времени, от Мелвилла до Хемингуэя. Подобно автору, герой этого романа много лет скрывался от закона. Лишенный после развода с женой родительских прав, он пристрастился к наркотикам, совершил ряд ограблений и был приговорен австралийским судом к девятнадцати годам заключения. Бежав на второй год из тюрьмы строгого режима, он добрался до Бомбея, где был фальшивомонетчиком и контрабандистом, торговал оружием и участвовал в разборках индийской мафии, а также нашел свою настоящую любовь, чтобы вновь потерять ее, чтобы снова найти…",
        genre: ["Роман"],
        price: 242,
        currency: "UAH",
    },
    {
        id: 3,
        author: "Джордж Оруэлл",
        name: "1984",
        image: "static/img/1984.jpg",
        description: "Своеобразный антипод второй великой антиутопии XX века - \"О дивный новый мир\" Олдоса Хаксли. Что, в сущности, страшнее: доведенное до абсурда \"общество потребления\" - или доведенное до абсолюта \"общество идеи\"? По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы...",
        genre: ["Роман", "Антиутопія"],
        price: 138,
        currency: "UAH",
    },
    {
        id: 4,
        author: "Михаил Афанасьевич Булгаков",
        name: "Мастер и Маргарита",
        image: "static/img/master_i_margarita.jpg",
        description: "Один из самых загадочных и удивительных романов XX века. Роман \"Мастер и Маргарита\" - визитная карточка Михаила Афанасьевича Булгакова. Более десяти лет Булгаков работал над книгой, которая стала его романом-судьбой, романом-завещанием. В \"Мастере и Маргарите\" есть все: веселое озорство и щемящая печаль, романтическая любовь и колдовское наваждение, магическая тайна и безрассудная игра с нечистой силой.",
        genre: ["Роман"],
        price: 125,
        currency: "UAH",
    },
    {
        id: 5,
        author:"Владимир Дронов",
        name: "HTML, JavaScript, PHP и MySQL. Джентльменский набор Web-мастера (4-е издание)",
        image: "static/img/djentelmenskiy_nabor.jpg",
        description: "Рассмотрены вопросы создания интерактивных Web-сайтов с помощью HTML, JavaScript, PHP и MySQL, форматирования Web-страниц при помощи CSS. Даны основы PHP и примеры написания типичных сценариев. Описаны приемы работы и администрирования баз данных MySQL при помощи PHP и программы phpMyAdmin. Особое внимание уделено созданию программной среды на компьютере разработчика и настройке Web-сервера Apache. Приведено описание текстового редактора Notepad++, шаблонизатора Smarty и прочих программ (Aptana Studio, NetBeans и HeidiSQL), необходимых Web-разработчику.В 4-м издании содержится описание возможностей, предлагаемых HTML 5 (средства семантической разметки и размещения аудио и видео) и CSS 3 (градиенты, создание тени, анимация и преобразования), технологии AJAX, формата JSON, новых инструментов JavaScript (включая средства геолокации и локальное хранилище данных) и всех нововведений, появившихся в актуальных на данный момент версиях Apache, PHP и MySQL.Электронный архив содержит листинги примеров, руководство по созданию динамического сайта, самоучитель языка Perl, руководство по публикации сайта, инструкции по установке дополнительных программ и видеоуроки.",
        genre: ["Програмування",],
        price: 202.66,
        currency: "UAH",
    },
    {
        id: 6,
        author: "Чак Маскиано",
        name: "HTML и XHTML. Подробное руководство",
        image: "static/img/html_and_xhtml.jpg",
        description: "\"HTML и XHTML. Подробное руководство\" - самая полная и современная книга по языкам HTML и XHTML, разъясняющая работу и взаимодействие каждого их элемента. Она удачно сочетает в себе лучшие качества понятного учебного пособия, адресованного начинающим, и всеобъемлющего справочника, который всегда под рукой даже у опытных веб-программистов. Этот труд, ставший классическим, содержит все от базового описания синтаксиса и семантики до практических советов, поможет вам найти свой неповторимый стиль и в совершенстве овладеть языком веб-дизайна. Описаны стандарты HTML 4.01, XHTML 1.0 и CSS2, приведен обзор еще не вступивших в силу стандартов XHTML 2 и CSS3. Уделено внимание к новейшим инициативам разработчиков XHTML (XForms, XFrames и модуляризации), а также основам XML. Рассмотрены: управление внешним видом документа с помощью таблиц стилей; работа с HTML-кодом, сгенерированным автоматически; работа с фреймами, интерактивными формами, динамическими документами; интеграция HTML-кода с мультимедийными данными, сценариями JavaScript и Java-апплетами.",
        genre: ["Програмування",],
        price: 664,
        currency: "UAH",
    },
];

export const GENRES = [
    "Антиутопія", 
    "Фантастика",
    "Роман",
    "Програмування"
]

export const REVIEWS = [
    {
        username: "Reviewer #1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestias necessitatibus illum eos placeat molestiae sit obcaecati minima deserunt repudiandae. Delectus ipsa alias reiciendis iste labore enim voluptatem assumenda placeat."
    },
    {
        username: "Reviewer #2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestias necessitatibus illum eos placeat molestiae sit obcaecati minima deserunt repudiandae. Delectus ipsa alias reiciendis iste labore enim voluptatem assumenda placeat."
    },
    {
        username: "Reviewer #3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestias necessitatibus illum eos placeat molestiae sit obcaecati minima deserunt repudiandae. Delectus ipsa alias reiciendis iste labore enim voluptatem assumenda placeat."
    },
    {
        username: "Reviewer #4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestias necessitatibus illum eos placeat molestiae sit obcaecati minima deserunt repudiandae. Delectus ipsa alias reiciendis iste labore enim voluptatem assumenda placeat."
    },
    {
        username: "Reviewer #5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestias necessitatibus illum eos placeat molestiae sit obcaecati minima deserunt repudiandae. Delectus ipsa alias reiciendis iste labore enim voluptatem assumenda placeat."
    },
    {
        username: "Reviewer #6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, molestias necessitatibus illum eos placeat molestiae sit obcaecati minima deserunt repudiandae. Delectus ipsa alias reiciendis iste labore enim voluptatem assumenda placeat."
    }
];
