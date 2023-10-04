import { useEffect, useState } from "react";

const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState(window.scrollY);
  
  useEffect(() => {
    fetchRandomNumber().then(setNumber);
  }, [])

  useEffect(() => {    
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);
  
  return (
    <div>
      <div> Number: { number } </div>
      <div> Scroll: { scroll } </div>
    </div>  
  )
}