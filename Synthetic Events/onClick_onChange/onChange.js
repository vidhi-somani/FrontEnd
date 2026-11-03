function App() {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
   
  );
}