import { useBookContext } from "./BookProvider";
import Book from "./Book";
export default function Form() {
    const {name, setName,email,setEmail, phone, setPhone} = useBookContext();
    
    function Submit(e) {
        e.preventDefault();
        setName("");
        setEmail("");
        setPhone("");
        alert("we got your appointment");
    }
    return <div>
        <form onSubmit={Submit} className="form"> 
            <label htmlFor="name">Name</label>
            <input value={name} id="name" type="text" onChange={e => setName(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input value={email} id="email" type="email" onChange={e => setEmail(e.target.value)} />
            <label htmlFor="name">Phone</label>
            <input value={phone} id="phone" type="text" onChange={e => setPhone(e.target.value)} />
            <Book/> 
            <button type="submit" disabled={!name || !email || !phone}>Book</button> 
        </form>
    </div>
}