import {useState,useContext,createContext} from "react";
const BookContext = createContext();
export default function BookProvider({ children }) {
    const [bookToday, setBookToday] = useState(null);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    return (
      <BookContext.Provider value={{ bookToday, setBookToday, name, setName,email,setEmail, phone, setPhone}}>
        {children}
      </BookContext.Provider>
    );
  }
export const useBookContext = ()=> useContext(BookContext);