```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    const handleRouteChangeComplete = () => {
      console.log('Navigation complete');
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.push('/another-page');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
export default MyComponent;
```