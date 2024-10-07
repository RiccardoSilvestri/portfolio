const Home = () => {
  const date = new Date();
  let saluto = "Buongiorno";
  if (date.getHours() >= 18) {
    saluto = "Buonasera";
  }

  return (
    <div className="min-h-screen flex items-start justify-center mt-20"> 
        <div className="Dissolvenza text-center">
        <h1 className="text-4xl font-bold text-white">{saluto}</h1>
        <p className="text-lg mt-4 text-white font-sans max-w-xl">Se fai solo quello che sai fare non sarai mai più di quello che sei ora</p>
      </div>
    </div>
  );
};

export default Home;