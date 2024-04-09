// import { useState, useEffect, useId } from "react";
import css from "./App.module.css";
// import Modal from "../Modal/Modal";

export default function App() {
  // const [hasAccepted, setHasAccepted] = useState(false);
  // const handleChange = (evt) => {
  //   setHasAccepted(evt.target.checked);
  // };
  // const [lang, setLang] = useState("uk");
  // const [coffeeSize, setCoffeeSize] = useState("sm");
  // const handleSizeChange = (evt) => {
  //   setCoffeeSize(evt.target.value);
  // };

  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //     <div>
  //         <button onClick={() => setIsOpen(!isOpen)}>
  //             {isOpen ? "Close" : "Open"}
  //         </button>
  //         {isOpen && <Modal />}
  //     </div>
  // );
  // const [clicks, setClicks] = useState(0);
  // // ✅ Залежності вказані правильно
  // useEffect(() => {
  //     console.log("Clicks updated: ", clicks);
  // }, [clicks]);
  // return (
  //     <button onClick={() => setClicks(clicks + 1)}>
  //         You clicked {clicks} times
  //     </button>
  // );
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //     console.log("You can see me only once!");
  // }, []);
  // useEffect(() => {
  //     console.log("Clicks updated: ", clicks);
  // }, [clicks]);
  // useEffect(() => {
  //     document.title = `You clicked ${clicks} times`;
  // });
  // return (
  //     <button onClick={() => setClicks(clicks + 1)}>
  //         You clicked {clicks} times
  //     </button>
  // );
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);
  // useEffect(() => {
  //     console.log("First updated: ", first);
  // }, [first]);
  // useEffect(() => {
  //     console.log("Second updated: ", second);
  // }, [second]);
  // useEffect(() => {
  //     console.log("First or second updated: ", first + second);
  // }, [first, second]);
  // return (
  //     <>
  //         <button onClick={() => setFirst(first + 1)}>First: {first}</button>
  //         <button onClick={() => setSecond(second + 1)}>
  //             Second: {second}
  //         </button>
  //     </>
  // );
  // const [clicks, setClicks] = useState(() => {
  //     const savedClicks = window.localStorage.getItem("saved-clicks");
  //     if (savedClicks !== null) {
  //         return JSON.parse(savedClicks);
  //     }
  //     return 0;
  // });
  // useEffect(() => {
  //     window.localStorage.setItem("saved-clicks", clicks);
  // }, [clicks]);
  // return (
  //     <div>
  //         <button onClick={() => setClicks(clicks + 1)}>
  //             You clicked {clicks} times
  //         </button>
  //         <button onClick={() => setClicks(0)}>Reset</button>
  //     </div>
  // );
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //     <div>
  //         <button onClick={() => setIsOpen(!isOpen)}>
  //             {isOpen ? "Close" : "Open"}
  //         </button>
  //         {isOpen && <Modal />}
  //     </div>
  // );
  // !!!!!!!!!!!!!!!!!!!!!!!!!!
  //   const ClickCounter = ({ value, onUpdate }) => {
  //     return <button onClick={onUpdate}>Current: {value}</button>;
  //   };
  //   const [clicks, setClicks] = useState(0);
  //   // Функція, яку будемо передавати в ClickCounter
  //   // для виклику під час кліку
  //   const handleClick = () => {
  //     setClicks(clicks + 1);
  //   };
  //   return (
  //     <>
  //       <ClickCounter value={clicks} onUpdate={handleClick} />
  //       <ClickCounter value={clicks} onUpdate={handleClick} />
  //     </>
  //   );
  // const LoginForm = () => {
  //   const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     const form = evt.target;
  //     const { login, password } = form.elements;
  //     // Посилання на DOM-елементи
  //     console.log(login, password);
  //     // Значення полів
  //     console.log(login.value, password.value);
  //     // Скидаємо значення полів після відправки
  //     form.reset();
  //   };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="login" />
  //       <input type="password" name="password" />
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };
  // return (
  //   <>
  //     <LoginForm />
  //   </>
  // );

  // const SearchBar = () => {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleChange = (evt) => {
  //     setInputValue(evt.target.value);
  //   };

  //   return (
  //     <div>
  //       <input type="text" value={inputValue} onChange={handleChange} />
  //       <p>{inputValue}</p>
  //     </div>
  //   );
  // };

  // const LangSwitcher = ({ value, onSelect }) => {
  //   const selectId = useId();

  //   return (
  //     <div>
  //       <label htmlFor={selectId}>Choose language</label>
  //       <select
  //         id={selectId}
  //         value={value}
  //         onChange={(evt) => onSelect(evt.target.value)}
  //       >
  //         <option value="uk">Ukrainian</option>
  //         <option value="en">English</option>
  //         <option value="pl">Polish</option>
  //       </select>
  //     </div>
  //   );
  // };
  // const LoginForm = () => {
  //   const [values, setValues] = useState({
  //     login: "",
  //     password: "",
  //   });

  //   const handleChange = (evt) => {
  //     setValues({
  //       ...values,
  //       [evt.target.name]: evt.target.value,
  //     });
  //   };

  //   const handleSumit = (evt) => {
  //     evt.preventDefault();

  //     console.log(values);

  //     setValues({
  //       login: "",
  //       password: "",
  //     });
  //   };

  //   return (
  //     <form onSubmit={handleSumit}>
  //       <input
  //         type="text"
  //         name="login"
  //         value={values.login}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         value={values.password}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };

  return (
    <div className={css.conteiner}>
      {/* <SearchBar /> */}
      {/* <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} /> */}
      {/* <h1>Select coffee size</h1>
      <div className="options">
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={coffeeSize === "sm"}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="md"
            checked={coffeeSize === "md"}
            onChange={handleSizeChange}
          />
          Meduim
        </label>
        <label>
          <input
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={coffeeSize === "lg"}
            onChange={handleSizeChange}
          />
          Large
        </label>
      </div>
      <p>
        <b>Selected size:</b> {coffeeSize}
      </p> */}
      {/* <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button> */}
      {/* <LoginForm /> */}
    </div>
  );
}
