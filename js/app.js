
var flashwords = [
  {
    ja:"忠実である",
    en:"adhere(to)"
  },
  {
    ja:"守る",
    en:"abide(by)"
  },
  {
    ja:"従う",
    en:"conform(to)"
  },
  {
    ja:"多才な",
    en:"versatile"
  },
  {
    ja:"決定権",
    en:"descretion"
  },
  {
    ja:"足止めされた",
    en:"stranded"
  },
  {
    ja:"築く",
    en:"forge"
  },
  {
    ja:"熟考",
    en:"deliberation"
  },
  {
    ja:"必要とする",
    en:"entail"
  },
  {
    ja:"急を要する",
    en:"imperative"
  },
  {
    ja:"細心の注意を払って",
    en:"meticulously"
  },
  {
    ja:"変動しやすい",
    en:"volatile"
  },
  {
    ja:"食い違い",
    en:"discrepancy"
  },
  {
    ja:"興味をそそる",
    en:"intriguing"
  },
  {
    ja:"まさに〜しそうな",
    en:"(be)poised(to)"
  },
  {
    ja:"不測の事態",
    en:"contingency"
  },
  {
    ja:"ほんのわずかの",
    en:"nominal"
  },
  {
    ja:"使い果たす",
    en:"deplete"
  },
  {
    ja:"オーナー",
    en:"proprietor"
  },
  {
    ja:"侵害・違反",
    en:"infringement"
  },
  {
    ja:"差し控える、放棄する",
    en:"waive"
  },
  {
    ja:"和らげる",
    en:"alleviate"
  },
  {
    ja:"態度",
    en:"demeanor"
  },
  {
    ja:"控えめに",
    en:"sparingly"
  },
  {
    ja:"活性化する",
    en:"invigorate"
  },
  {
    ja:"比例した、釣り合った",
    en:"commensurate"
  },
  {
    ja:"風通し",
    en:"ventilation"
  },
  {
    ja:"早める、促進させる",
    en:"expedite"
  },
  {
    ja:"加速度的に",
    en:"exponentially"
  },
  {
    ja:"〜に隣接した",
    en:"adjacent to"
  },
  {
    ja:"〜は別として",
    en:"aside from"
  },
  {
    ja:"〜を考えると",
    en:"in light of"
  },
  {
    ja:"入荷待ち",
    en:"on backorder"
  },
  {
    ja:"試用期間",
    en:"probationary period"
  },
  {
    ja:"愛顧",
    en:"patronage"
  },
  {
    ja:"敷地",
    en:"premises"
  },
  {
    ja:"著しく",
    en:"strikingly"
  },
  {
    ja:"熾烈な",
    en:"fierce"
  },
  {
    ja:"荒れ模様の",
    en:"inclement"
  },
  {
    ja:"資格、経歴",
    en:"credentials"
  },
  {
    ja:"移譲する",
    en:"delegate"
  },
  {
    ja:"傷がない",
    en:"intact"
  },
  {
    ja:"制約",
    en:"constraint"
  },
  {
    ja:"良くない、不利な",
    en:"adverse"
  },
  {
    ja:"行事",
    en:"observance"
  },
  {
    ja:"割り当てる",
    en:"allocate"
  },
  {
    ja:"要約された",
    en:"abridged"
  },
  {
    ja:"容易にする、促進する",
    en:"facilitate"
  },
  {
    ja:"求める、募る",
    en:"solicit"
  },
  {
    ja:"渋滞した",
    en:"congested"
  },
  {
    ja:"厳格な",
    en:"rigorous"
  },
  {
    ja:"(データ等を)取り出す",
    en:"retrieve"
  }
]

const english = document.querySelector('.front');
const japanese = document.querySelector('.back');
const btn = document.querySelector('.button');
const message = document.querySelector('.message');
var a = flashwords.length;

function flip() {
    $('.card').toggleClass('flipped');
}

function flash() {
  while (a) {
    var j = Math.floor( Math.random() * a );
    var t = flashwords[--a];
    flashwords[a] = flashwords[j];
    flashwords[j] = t;
  }
}
flash();

var count = [];

function doFlash(){

  btn.addEventListener('click', function(){
    flip();
    var clicked = event.target;
    count.push(clicked);
    var countNum = count.length;

    if (countNum%2==1){
      japanese.innerHTML = flashwords[(countNum/2)+0.5].ja;
    } else {
      english.innerHTML = flashwords[countNum/2].en;
    }

    setTimeout(function(){
      if (countNum%2==1){
        message.innerHTML = "answer";
      } else {
        message.innerHTML = "next";
      }
    }, 800)

  });
};
doFlash();

function done(){
  setTimeout(function(){
    if (countNum==a){
      document.querySelector('.finish').style.display = "block";
   }
  }, 1500)
}
