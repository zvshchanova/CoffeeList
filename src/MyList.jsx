import { useState, useEffect, useRef } from "react";
export function MyList(props) {
  const baseUrl = "https://api.sampleapis.com/coffee/hot/";
  const [coffeeList, setcoffeeList] = useState([]);
  const [isdetail, setisdetail] = useState(false);
  const butTextDetail = useRef("Show more");
  useEffect(
    function coffeePront() {
      console.log(coffeeList);
    },
    [coffeeList]
  );

  function getCoffeeData() {
    async function fetchCoffee() {
      const randomNumber = Math.round(Math.random() * 20);
      const randomCoffeeUrl = baseUrl + String(randomNumber);
      console.log(randomNumber);
      const response = await fetch(randomCoffeeUrl);
      const textRes = await response.json();

      setcoffeeList([...coffeeList, textRes]);
      console.log(coffeeList);
    }
    fetchCoffee();
  }

  function renderCoffee() {
    if (isdetail) {
      return coffeeList.map((eachCoffee) => {
        return (
          <div>
            <h4>{eachCoffee.title}</h4>
            <p>Description: {eachCoffee.description}</p>
            <img
              src={eachCoffee.image}
              alt="whatever"
              style={{ width: "30%" }}
            />
            <hr />
          </div>
        );
      });
    } else {
      const renderCoffeeList = [];
      for (const eachCoffee of coffeeList) {
        const renderCoffee = <h4>{eachCoffee.title}</h4>;
        renderCoffeeList.push(renderCoffee);
      }
      return renderCoffeeList;
      // return coffeeList.map((eachCoffee) => {
      //   return (
      //     <div>
      //       <h4>{eachCoffee.title}</h4>
      //       <hr />
      //     </div>
      //   );
      // });
    }
  }

  function removeCoffeeData() {
    coffeeList.pop();
    setcoffeeList([...coffeeList]);
  }

  useEffect(() => {
    console.log(isdetail);
  }, [isdetail]);

  function showDetail() {
    if (isdetail) {
      butTextDetail.current = "Show";
      setisdetail(false);
    } else {
      butTextDetail.current = "Hide";
      setisdetail(true);
    }
  }

  return (
    <div>
      <p> My coffe list </p>
      {renderCoffee()}
      <button onClick={getCoffeeData}>Add coffee</button>
      <button onClick={removeCoffeeData}>Remove coffee</button>
      <button onClick={showDetail}>{butTextDetail.current} information</button>
      {/* <p>{JSON.stringify(coffeeList)}</p> */}
    </div>
  );
}
console.log(Math.round(Math.random() * 20));
