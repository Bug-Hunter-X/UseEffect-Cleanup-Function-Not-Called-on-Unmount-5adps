```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Unmounted');
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```