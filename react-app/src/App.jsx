function App() {
  const name = "Pikachu";
  const imgUrl =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png";

  const isLoggedIn = true;

  // curly braces for showing text and modifying attribute
  // return (
  //   <div>
  //     <p>Hello, my name is {name}</p>
  //     <img src={imgUrl} alt="pikachu" />
  //   </div>
  // );

  // conditional if else
  // if (isLoggedIn) {
  //   return <h1 className="text-2xl font-bold">Hello {name}!</h1>;
  // } else {
  //   return <h1 className="text-2xl font-bold">Please login</h1>;
  // }

  // conditional rendering with ternary operator
  // return (
  //   <>
  //     {isLoggedIn ? (
  //       <h1 className="text-2xl font-bold">Hello {name}!</h1>
  //     ) : (
  //       <h1 className="text-2xl font-bold">Please login</h1>
  //     )}
  //   </>
  // )

  // conditional rendering with logical operator
  const messages = [
    {
      id: 1,
      subject: "Hello World",
    },
    {
      id: 2,
      subject: "Good bye world",
    },
    {
      id: 3,
      subject: "What's up, world?",
    },
  ];

  return (
    <>
      {/* saat array messages bukan array kosong maka akan merender komponen untuk menampilkan messagenya */}
      {messages.length > 0 && (
        <>
          <h2 className="mb-2 font-bold">
            You have {messages.length} unread messages.
          </h2>

          {messages.map((message) => (
            <p key={message.id}>{message.subject}</p>
          ))}
        </>
      )}
    </>
  );
}

export default App;
