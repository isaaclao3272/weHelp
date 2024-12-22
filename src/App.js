import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Maincontiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  height: 100vh;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3px;
  background-color: #074799;
`;

const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 51px;
  color: white;
`;

const Bar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Button = styled.button`
  width: 160px;
  border-radius: 20px 20px 0px 0px;
  background-color: white;
  border-top: 3px ridge #16325B;
  border-right: 3px ridge #16325B;
  border-bottom: none;
  border-left: none;
  font-weight: bold;
  cursor: pointer;
  color: #16325B;
  font-size: 17px;
`;

const Body = styled.div`
  flex: 4;
  height: 100%;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 30px;
  text-align: left;
`;

const Post = styled.p`
  font-size: 19px;
  letter-spacing: 5px;
  text-align: justify;
  line-height: 1.5;
`;

const Headline = styled.h1`
  font-size: 36px;
  color: #074799;
`;

function App() {
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [hyperLink, setHyperlink] = useState("");

  const data = {
    one: {
      title: "個人簡介和申請動機",
      content: [
        "彭彭你好！我叫Isaac，現年32歲，澳門人， 雖然大學念的是法律系，但畢業後並沒有在法律行業工作過，反而跑去賭場上班， 目前是一名監察部的技術人員，主要工作內容是對監視鏡頭進行安裝，維護 ，設置網絡等。這份工作的工作量不大，工資也相對寬裕，也許有人會認為這是一份不錯的工作，但在我的角度來看，這是一份單調重複且乏味的工作，在日復日的勞動中，我漸漸地開始思考「難道我真的要這樣就過完了一輩子嗎？」，想要轉換跑道的念頭便在腦海中漸漸浮現，而程序員除了薪資優厚外，更具備一些特別的元素。",
        "有些問題我想解決！在生活中，常會遇到各種麻煩，各種問題，不時會想明明只要這樣做就可以解決問題的想法在腦中閃過，很多例子例如：在澳門買賣二手物品只能在Facebook 發貼出售，由於市場太細或地域性的問題，大陸的閒魚或香港的Carousell並不會選擇落戶澳門，導致二手市場的活躍程度低下，很多有價值的物品無法容易流通；目前上班的公司中，所在的部門由於缺乏完善倉存系統而導致設備整理的結構鬆散，難以追蹤，出入庫的程序繁瑣，不時會有入漏入錯等情況出現等等。例子多不能盡錄。",
        "編程的能力除了能解決問題外，更具實現想法的能力，就像一個木工，一個機械師，一個畫家一樣，編程能逐漸逐漸的透過技術把腦中想法呈現出來。我希望能真正習得編程的能力，以上就是我想要學習的動機。",
      ],
      link: "",
    },
    two: {
      title: "如果參與這個訓練，會怎麼安排學習時間？",
      content: [
        "目前的上班為周二至周六，9:00至18:36，因為上班的關係，我的學習時間一般為晚上下班後的5小時。放假會以每天10小時學習，由於上班一般會比較空閑時間，所以理論型的知識可以在日間補充，若遇到特殊情況，我會在休假的兩天時間中進行適度的增加，以上就是我對學習所投入的時間。",
      ],
      link: "",
    },
    three: {
      title: "曾經做過哪些軟體工程技術相關的學習？",
      content: [
        "在前一份工作，是作為社福機構的一位活動協調員，主要為協助活動，運營社交媒體帳號，撰寫文章，更能自發性開啟一些項目，而因為機構的會員資料仍用excel檔案儲存，比較散亂無章，於是我便因興趣使然，提出了組建一個以mysql + flask + javascript 組成小型網站應用，雖然之後用CHATGPT比較多，但剛開始學習flask時，正是加入彭彭youturb的會員，觀看影片學習的，但由於缺乏系統性的訓練，導致進度比較緩慢，目前仍在開發當中，請瀏覽我github的連結，內容中幾乎有90%的程式碼都是在我學習並理解原理後所寫的，相信已經能夠展示我的認知目前處於怎樣的狀態，請查閱。",
      ],
      link: "https://github.com/isaaclao3272/Test3",
    },
    four: {
      title: "關於這份申請網頁，分享一個開發時的技術心得",
      content: [
        "現在你所觀看的申請表網頁，在開發上我採取了與wehelp上提供的模版不一樣的樣式，主要用react進行一些分頁的動作，以展示每一個問題的內容，唯獨有感到比較有挑戰升的部分為CSS，因為要對flex,grid等素運用自如確實需要一些時間，但整體來說是能夠應付的，至於心得，我認為當要實現一個功能或外觀時，要先在腦中建立一個運行的輪廓，以一個按鍵為例，如果要實現點下去，然後改變下方div的顯示文字，首先要問兩個問題，一個是為甚麼這個功能可以實現？因為當點擊按鈕時javscript會獲得一個事件，而根據這個事件，會以相應方程式去處理並返回或觸發，最後渲染到屏幕，功能得以實現。另一個問題是需要怎樣去實現它？而這會衍生出一系列的問顯，要以甚麼形式去感知鼠標的點擊？方程式應該怎麼寫？如果何渲染？當我們逐步解決以些問題時，功能就會得以實現。這就是我統合思緒得來的感受與心得。",
      ],
      link: "",
    },
    five: {
      title: "軟體技術日新月異，如何確定選擇投入的領域是正確有回報的?",
      content: [
        "我很喜歡馬斯克所提倡的一個概念”第一原則”，理解所有事物時，以其最基本的原理開始。在日新月異的軟體技術中，我認為其基礎原理同樣是輸入→計算→輸出這樣的模式，以我現時的理解根據這三部分衍生出來的內容和特性的不同形成了不同的語言，對於如何選擇投入有正確回報的領域，這得先要理解我想要的回報是甚麼，現階段，我想要有正確的回報是，能夠學習編程的邏輯；創造現代化的應用；所以學習網站開發無疑對我來說是一個正確可投入的領域。",
      ],
      link: "",
    },
    six: {
      title: "請描述一件產生明顯負面情緒的經歷，如何處理該情緒?",
      content: [
        "說到負面情緒，比較深刻的是面對我的母親，先說一下，這不是一個短期能的負面情緒，而是一直存在著。出來工作幾年，順理成章的也在外面租了房，搬了出去住，我們突然從每天都見面變成一星期一次，唯然我倆的關係從來都不好，但沒想到經過時間的間隔會令我留意不曾注意的變化，突然發覺我媽媽老了很多，手部的皺紋，鬆弛的皮膚，感覺她突然變的很小很小，每星期的見面，這種難過的情緒都會重新湧現，很多時候我會問自己，為什麼到這個年紀還不能為她提供更好的生活？帶她去不同的地方？沒有辦法，現階段的我確實沒有這樣的能力，這股綿綿不斷的情緒在不停的沖向我，要說如何處理，我只是轉念一想，究竟有甚麼方法，能夠提升自己的能力？哪怕只是在短漸的時間也好，我也想好好的提供良好生活給我的母親，也許這也是我想要改變，想要報名的其中一個原因吧。面對負面情緒，光呆在原地沒有用，要想辦法，邁向前方，這大概就是我處理的方法吧。",
      ],
      link: "",
    },
    seven: {
      title: "如何看待自身工作和整個社會群體的連結關係？",
      content: [
        "我其實對這個問題有一點疑惑，主要是來自於”自身工作”上面，到底是在說自己目前在做的工作？還是自己工作的這個行為上？兩者之間我認為後者更有意思，所以就以這個方向回答吧，我認為每個人工作的行為是構成整個社會運轉的一個環節，自身的工作也當然一樣，就像一個巨大的機器，每一部分都負責不同的功能，可能某些人是馬達，某些人是承軸，某些人是螺絲，某些人是齒輪，僅此而已，當然這只是一個比喻，如果自身的工作能在社會中引起積極的作用，我想連結關係的層次會更加深吧。",
      ],
      link: "",
    },
  };

  useEffect(()=>{
    getData("one")
  },[])

  const getData = (key) => {
    setContent(data[key].content);
    setTitle(data[key].title);
    setHyperlink(data[key].link);
  };

  return (
    <Maincontiner>
      <Top>
        <Title>WeHelp Bootcamp Application</Title>
        <Bar>
          <Button onClick={() => getData("one")}>個人簡介</Button>
          <Button onClick={() => getData("two")}>時間的安排</Button>
          <Button onClick={() => getData("three")}>技術相關的事</Button>
          <Button onClick={() => getData("four")}>心得與感受</Button>
          <Button onClick={() => getData("five")}>有關回報</Button>
          <Button onClick={() => getData("six")}>面對低潮</Button>
          <Button onClick={() => getData("seven")}>社會</Button>
        </Bar>
      </Top>
      <Body>
        <article>
          <Headline>{title}</Headline>
          {content.map((content, index) => (
            <Post key={index}>{content}</Post>
          ))}
          <br />
          {hyperLink && <a href={hyperLink}>請點擊查看</a>}
        </article>
      </Body>
    </Maincontiner>
  );
}

export default App;