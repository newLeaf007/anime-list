import { useState } from "react";
import GetQuote from "./GetQuote";
import axios from "axios";
import { useEffect } from "react";

const GetAllQuotes = () => {
  const [quote, setQuote] = useState([]);

  //function to call the api for the 10 random quotes
  const get10randomquote = () => {
    const options = {
      method: "GET",
      url: "https://anime-quotes1.p.rapidapi.com/api/quotes",
      headers: {
        "X-RapidAPI-Key": "8152d86e3emsh3d098b52b021f65p19e557jsn9503dddd4876",
        "X-RapidAPI-Host": "anime-quotes1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
    useEffect(()=>{
        get10randomquote();
    },[]);
  return (
    <div>
      <h2 className="text-center">Quotes</h2>
      {quote.length > 0
        ? quote.map((item) => <GetQuote quote={item} />)
        : "No content"}
    </div>
  );
};
export default GetAllQuotes;
