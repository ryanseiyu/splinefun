# splinefun

Just trying out Spline with React, the implementation was very simple and straigthfoward.

The project was built with "npx create-react-app splinefun" and installing React Spline like so "npm install @splinetool/react-spline"

All I had to do to add the component in App.js was to copy and paste the Spline component in the App div like this

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spline scene="https://prod.spline.design/78Ldjfp770bmw7rD/scene.splinecode" /> {/* Add Spline component */}
      </header>
    </div>
  );
}