import styled from 'styled-components';
import { useState,useRef, useEffect } from 'react';

const Maincontiner = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  gap: 20px 0px;
  height: 100vh;
`;

const Top = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
  width: 
  border: 9px solid black;
  gap: 5px;
`;

const Title = styled.h1`
  flex : 1;
  text-align: center;
`;

const Bar = styled.div`
  flex : 1;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Button = styled.button`
  width: 80px;
`;

const Body = styled.div`
  border: 5px solid red;
  flex: 4;
  height: 100%;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 30px;
  text-align: left;
`; 

const Post = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
  text-align: justify;
`;



function App() {
  const [content, setContent] =useState("");
  const [title, setTitle] =useState("");

  useEffect (() =>{
    fetch("/one.txt")
    .then((response) => response.text())
    .then((text) =>{
      setContent(text)
      setTitle("個人簡介和申請動機");
    })
    .catch((error)=>console.error("fail to load txt",error))
  },[]);

  const getData = async (Data,Title) => {
    try{
        const data = await fetch(`/${Data}.txt`)
        const stringData = await data.text();
        const completeData = stringData.split("\n");
        setContent(completeData);
        setTitle(Title)
    }catch(error){
        console.log('Error of loading',error);
    }};

  return (
    <Maincontiner>
      <Top>
        <Title>WeHelp Bootcamp Application</Title>
        <Bar>
          <Button onClick={() => getData('one',"個人簡介和申請動機")}>個人簡介</Button>
          <Button onClick={() => getData('two',"如果參與這個訓練，會怎麼安排學習時間？")}>學習時間的安排</Button>
          <Button onClick={() => getData('three',"曾經做過哪些軟體工程技術相關的學習？")}>曾做過與技術相關的事</Button>
          <Button onClick={() => getData('four',"關於這份申請網頁，分享一個開發時的技術心得")}>開發的心得與感受</Button>
          <Button onClick={() => getData('five',"軟體技術日新月異，如何確定選擇投入的領域是正確有回報的")}>有關回報</Button>
          <Button onClick={() => getData('six',"請描述一件產生明顯負面情緒的經歷，如何處理該情緒")}>面對低潮</Button>
          <Button onClick={() => getData('seven',"如何看待自身工作和整個社會群體的連結關係？")}>社會</Button>
        </Bar>
      </Top>
      <Body>
        <article>
          <h1>{title}</h1>
          <Post >{content}</Post>
        </article>
      </Body>
    </Maincontiner>
  );
}

export default App;