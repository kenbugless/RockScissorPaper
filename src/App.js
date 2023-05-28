import './App.css';
import Box from './components/Box';
import {useState} from 'react';

//1. 박스 2개가 있다.
//2. 박스에 필요한 정보 (타이틀, 사진, 결과)
//3. 가위, 바위, 보 버튼이 있다.
//4. 버튼을 클릭하게 되면, 클릭한 값이 박스에 보인다.
//5. 컴퓨터는 내가 버튼을 누르면, 랜덤하게 선택이 되어야 한다.
//6. 결과가 나오면, 누가 이겼는지도 사진 밑에 나와야 한다.
//7. 승패 결과에 따라서, 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg",
  },
  scissors: {
    name: "Scissors",
    img: "https://image.homeplus.kr/td/089320e3-56b8-4947-b659-2976d515ee6e",
  },
  paper: {
    name: "Paper",
    img: "https://neal.fun/share-cards/paper.png",
  },
};
 

function App() {

  const [userSelect,setUserSelect] =useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }


  return (
    <div>

      <div className="main">
      <Box title="You" item={userSelect}/>
      {/* <Box title="Computer"/> */}
      </div>

    <div className="main">
      <button onClick={()=>play("scissors")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>

    </div>
  );
}

export default App;
