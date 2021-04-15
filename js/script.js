// document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });
const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  console.log('clickedElement (with plus): ' + clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /*[DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector); //do omwienia sam nato nie wpadłem na to - zmęczenie.
  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
  console.log('targetArticle (with plus): ' + targetArticle);
}




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list' //tagsWrapper

function generateTitleLinks() {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  console.log('oto stała titleList usuwająca zawartość listy ul dzięki "titleList.innerHTML =' + titleList)

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('oto stała articles znajdująca wsyztskie elementy .post czyli klase w elem. article dzięki document.querySelectorAll(optArticleSelector)')

  let html = '';

  for (let article of articles) {
    console.log('wywołano pętlę po artykułach ')

    /* get the article id */

    const articleId = article.getAttribute('id'); //dlaczego
    console.log('oto stała articleId odczytująca id article: ' + articleId);

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; //tworzę zmienną articleTitle, odnajduję dzieki niej pierwszy pasujący element .post-title (dzieki querySelector=optTitleSelector=.post-title) z ktrego odzytuje wartosc HTML (.innerHTML)
    console.log('oto stała articleTitle odnajdująca artykuł dzięki article.querySelector(optTitleSelector) i odczytująca tytuł arykułu dzięki .innerHTML czyli: article.querySelector(optTitleSelector).innerHTML: ' + articleTitle)

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('oto stała link HTML ktra tworzy kod HTML linka przy użuciu stringa z dodaniem stałych articleId oraz articleTitle ' + linkHTML);


    /* insert link into html variable */

    html = html + linkHTML;
    console.log(html);

    //const insertLink = titleList.insertAdjacentHTML('afterend', linkHTML);
    //console.log('wywołano stałą insertlink ' + titleList + linkHTML);

  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  console.log('!!!!links:', links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler); // to jest handler? Jak zauważy kliknięcie - 'click' - to wykona funkcję titleClickHandler?
  }
}

generateTitleLinks();

function generateTags(){

  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('oto stała "articles" odnajdująca wsyztskie artykuły ')

  /* START LOOP: for every article: */

  for (let article of articles) {
    console.log('wywołano pętlę po artykułach ')

    /* find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log('oto stała tagsWrapper odszukująca opakowanie tagow: ' + tagsWrapper);

    /* make html variable with empty string */

    let html = '';                            //TODO ktorą część robi pustą? Dlaczego robić pustą skoro usunęliśmy z HTML listę tagow?

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('odszukane tagi to: ' + articleTags)

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log('oto stała articleTagsArray dzialąca tagi przy pomocy "split" przy użyciu spacji: ' + articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */

      /* add generated code to html variable */
    }
    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}
}

generateTags();
/*
do omowienia:
Przeczytać razem kod - kaczka (CEL!, co się dzieje, od ogłu - dwie głwne funcje, do szczegłu)
czym jest takie coś?: "titleList.innerHTML = '';": ? w stałej titleList innerHTML ma się rownac nic?
Nie potrafię wykonac ćwiczenia z "Zbudowanie kodu HTML wszystkich linków" - po wrzuceniu "let html = '';" wyrzuca błąd
skąd się wzięła stała article z "for (let article of articles) {"? z tego " W dalszej części submodułu założymy, że w deklaracji pętli pojedynczy artykuł został nazwany article."?
const articleId = article.getAttribute('id'); - konstrukcja tego? Article odwołuje się do tagu w html?
Relacje między satłymi ,zmiennymi, funkcjami, eventami - na przykładach. Co mogę czemu "zadać": stałej stałą, stałej funkcję w ktrej jest stała, wywoływanie etc.
Szersza praspeltywa - titleClickHandler jest ...co czego słucha, dla kogo - zależności.
clickedElement = this - co to jest tak na prawdę?
*/
