import styled from 'styled-components';
import { useState,useRef, useEffect } from 'react';

const Maincontiner = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  gap: px 0px;
  height: 100vh;
`;

const Top = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
  gap: 3px;
  background-color: #074799;
`;

const Title = styled.h1`
  flex : 1;
  text-align: center;
  font-size: 51px;
  color: white;
  
`;

const Bar = styled.div`
  flex : 1;
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
`



function App() {
  const [content, setContent] =useState([]);
  const [title, setTitle] =useState("");
  const [hyperLink, setHyperlink] =useState("");

  useEffect(()=> {
    fetch(`/one.txt`)
    .then((Response)=> Response.text())
    .then((text) => text.split("\n"))
    .then((text)=> {
      setContent(text);
      setTitle("個人簡介和申請動機")
    })
  },[])

  const getData = async (Data,Title) => {
    try{
        const data = await fetch(`/${Data}.txt`)
        const stringData = await data.text();
        const completeData = stringData.split("\n");
        setContent(completeData);
        setTitle(Title)
        if (Title === "曾經做過哪些軟體工程技術相關的學習？") {
          setHyperlink("123")
        } else {
          setHyperlink("")
        };
    }catch(error){
        console.log('Error of loading',error);
    }};

  return (
    <Maincontiner>
      <Top>
        <Title>WeHelp Bootcamp Application</Title>
        <Bar>
          <Button onClick={() => getData('one',"個人簡介和申請動機")}>個人簡介</Button>
          <Button onClick={() => getData('two',"如果參與這個訓練，會怎麼安排學習時間？")}>時間的安排</Button>
          <Button onClick={() => getData('three',"曾經做過哪些軟體工程技術相關的學習？")}>技術相關的事</Button>
          <Button onClick={() => getData('four',"關於這份申請網頁，分享一個開發時的技術心得")}>心得與感受</Button>
          <Button onClick={() => getData('five',"軟體技術日新月異，如何確定選擇投入的領域是正確有回報的?")}>有關回報</Button>
          <Button onClick={() => getData('six',"請描述一件產生明顯負面情緒的經歷，如何處理該情緒?")}>面對低潮</Button>
          <Button onClick={() => getData('seven',"如何看待自身工作和整個社會群體的連結關係？")}>社會</Button>
        </Bar>
      </Top>
      <Body>
        <article>
          <Headline>{title}</Headline>
          {content.map((content, index)=> (
          <Post key={index}>{content}</Post>
          ))}
          <br></br>
          {hyperLink &&
          <a href= {hyperLink}>link</a>
        }
        </article>
      </Body>
    </Maincontiner>
  );
}

export default App;