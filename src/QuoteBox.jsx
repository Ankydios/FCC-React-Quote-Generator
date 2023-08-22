import TextBox from "./TextBox"
import { useEffect, useState } from "react"
import './styles.css'; // Import du fichier CSS*
import AuthorBox from "./AuthorBox";


const MY_API_KEY = "8i7bK0h3wscwStCEtq6qWg==0IvfO5mstVIsWvVk"

function QuoteBox() {
  const [quote,setQuote] = useState("")
  
  async function fetchData() {
    let res = await fetch("https://api.api-ninjas.com/v1/quotes/",
    {
      method: 'GET',
      headers: { 'X-Api-Key': MY_API_KEY},
    })
    res = await res.json()
    console.log("res",res)
    return {
      text: res[0]["quote"],
      author: res[0]["author"]
    }
  }

  const fetchDataAndSetQuote = async () => {
    const data = await fetchData();
    console.log(data)
    setQuote(data);
};

  const formatedquote = ({text,author}) => {
    return encodeURI(text)  + '" ' +  encodeURI(author)
  }

  useEffect(() => {
    fetchDataAndSetQuote();
}, []);

  if (!quote?.text) {
    return <p>loading...</p>
  }
    
  return (
    <>
      <div id="quote-box">
        <TextBox id="text" text={quote.text}/>
        <AuthorBox id="author" text={quote.author}/>
        <div className="button-wrapper"> 
          <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"" + formatedquote(quote)}><i className="fa-brands fa-square-x-twitter fa-2xl" style={{color: "#27AE60"}}></i></a>
          <button id="new-quote" onClick={fetchDataAndSetQuote}>New quote</button>
        </div>
      </div>
      <div className="container">
        <p className="me">By Anky</p>
      </div>
  </>
      
  )
}

export default QuoteBox
