# Conditional css using clsx and tailwindmerge

- using clsx and Tailwindmerge
  make a cn.js file in utils folder

```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- now import this in any component and use it for conditional css application

```javascript
import { cn } from "../utils/cn";

function MyComponent({ isActive }) {
  return (
    <div className={cn("base-class", { "active-class": isActive })}>
      Hello World
    </div>
  );
}
```

- or you can directly use clsx

```javascript
import { clsx } from "clsx";

function MyComponent({ isActive }) {
  return (
    <div className={clsx("base-class", { "active-class": isActive })}>
      Hello World
    </div>
  );
}
```

**_window object_**

# Scroll tracking using Window object

- window.addEventListener('scroll', () => {
- const scrollY = window.scrollY;
- console.log('Scroll position:', scrollY);
- });

# Hooks
- [use state]

- [use params]
  use params is used to access dynamic route parameters from the current URL.
  Example: If your route is defined as /user/:id, you can access the id parameter using useParams.
  Example - 
  ```javascript
  import { useParams } from "react-router-dom";
  function UserProfile() {
    const { id } = useParams();
    // what this use params returns is the object containing the dynamic route parameters and its value 
    return <h1>User ID: {id}</h1>;
  }
  export default UserProfile;

- Difference between [useSearchParams] and [useParams] hook 
  1. useSearchParams
  - Purpose: React Router’s official hook to read and update the query string in the URL.
   Return Value:
   An array [searchParams, setSearchParams]
  - searchParams: A URLSearchParams object to read the current query string values.
  - setSearchParams: A function to update the query string.
  Usage Example:
  ```javacsript 
  import { useSearchParams } from "react-router-dom";
  function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const updateCategory = () => {
    setSearchParams({ category: "electronics" });
  };

  return (
    <div>
      <p>Category: {category}</p>
      <button onClick={updateCategory}>Change to Electronics</button>
    </div>
   );
  }
  ```
  2. useSearchParams (from external libraries)
  This is not from React Router. It usually comes from libraries like:
  react-use->(useSearchParam)
  use-query-params->(useSearchParan)
  Purpose: A lightweight way to read a single query parameter.
  Return Value:
  -Typically returns the value of the specific query param.

  Usage Example (with react-use):
  - import { useSearchParam } from "react-use";
   function Products() {
   const category = useSearchParam("category");
   return <p>Category: {category}</p>;
   }
 - Key Points:
   Good for simple reads but usually doesn’t provide a straightforward way to update the query string.
   Not officially maintained by React Router, so integration with navigation may be less seamless.

   The useParams hook in React Router is used to access dynamic route parameters from the current URL. (/home/:id)
   When you define a route with parameters like [:id] or [:username], useParams lets you read those values in the component rendered by that route.
   You can read params but cannot modify them directly.
   The useParams hook returns an object containing key-value pairs of all the dynamic parameters from your route. 
 - const params = useParams();

  ```javascript
      <Route path="/home/:id" element={<Home />}>
      import { useParams } from "react-router-dom";
      function UserProfile() {
      const { id } = useParams();
      return <h1>User ID: {id}</h1>;
      }
      export default UserProfile;

    // multiple paramters hote to kya krte 
    <Route path="/product/:category/:id" element={<Product />} />
    import { useParams } from "react-router-dom";
    function Product() {
      const { category, id } = useParams();
      // use params return an object containing the keys of the parameter along with values
      // Example - { category: "fashion", id: "1698" }
      return (
        <div>
          <h2>Category: {category}</h2>
          <h2>Product ID: {id}</h2>
        </div>
      );
    } 
    ```  
  
- [use Location] (**_form react-router-dom_**)

  \*is used to get information about the current URL in a React app that uses React Router.
  - It gives you details like:
    - The current path (e.g., /about)
    - Any query parameters (e.g., ?id=42)
    - The hash (e.g., #section1)
    - And other location-related info
    - example:

      ```javascript
      import { useLocation } from "react-router-dom";
      function MyComponent() {
        const location = useLocation();
        console.log(location);
        // Example output:
        // {
        //   pathname: "/products",
        //   search: "?id=42",
        //   hash: "#reviews",
        //   state: null,
        //   key: "xyz123"
        // }
        return (
          <div>
            <p>Current path: {location.pathname}</p>
            <p>Query parameters: {JSON.stringify(location.search)}</p>
            <p>Hash: {location.hash}</p>
          </div>
        );
      }
      ```
- [useEffect]
- [useRef]
- [useContext]

# React-router-dom
Read more - https://reactrouter.com/api/components/Route
https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
https://reactrouter.com/start/declarative/navigating
https://reactrouter.com/start/declarative/routing
## react router installation and setup documentation
https://reactrouter.com/6.30.1/start/tutorial
# Read more about
- url params and search params hook , useSearchParams FROM react-router-dom documentation
read more - https://reactrouter.com/docs/en/v6/hooks/useSearchParams
- useNavigate hook FROM react-router-dom documentation
read more - https://reactrouter.com/docs/en/v6/hooks/useNavigate
- useParams hook FROM react-router-dom documentation
read more - https://reactrouter.com/docs/en/v6/hooks/useParams

## How to setup React Routes
- Install React-Router-DOM
```bash
npm install react-router-dom
```
- In your main application file (e.g., App.js or index.js), set up the router:
```javascript

import {
  BrowserRouter,  // you will need this 
  createBrowserRouter, // and this 
  RouterProvider, // this 
} from "react-router";

function App() {
  // create the router using createBrowserRouter and make some paths and elements
  // you can also load children routes and render them inside their parent route using <Outlet />
  // whereever you need to render the child in the parent component
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
      errorElement:<Errorpage />,
    },
    {
      path: "/message",
      element: <Messages />
    },
  ]);
  return (
    <>
      <div>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}
```

# State in context of React components
- In React components, state refers to an object that stores data that can change over time and influences how the component renders.
- Think of state as a memory for your component — it keeps track of values that may update dynamically (like user input, API data, counters, etc.) and re-renders the UI whenever those values change.

## Key Characteristics of State
- Mutable – Unlike props, state values can be updated.
- Component-specific – State belongs to the component where it's defined.
- Triggers re-render – When state changes, React re-renders the component to reflect the updated UI.
- Managed by React – You shouldn’t modify it directly; instead, you use React’s functions like setState   or useState.
  ``` javascript
  import { useState } from "react";
  function Counter() {
    const [count, setCount] = useState(0); // count = state variable, setCount = function to update it
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    );
  }
  export default Counter;
  ```
  how it works 
  useState(0) initializes count with 0.
  Every time the button is clicked, setCount updates the state.
  React re-renders the component with the new count.

# React component tree 
Trees are a common way to represent the relationship between entities. They are often used to model UI.
Render trees represent the nested relationship between React components across a single render.
With conditional rendering, the render tree may change across different renders. With different prop values, components may render different children components.
Render trees help identify what the top-level and leaf components are. Top-level components affect the rendering performance of all components beneath them and leaf components are often re-rendered frequently. Identifying them is useful for understanding and debugging rendering performance.
Dependency trees represent the module dependencies in a React app.
Dependency trees are used by build tools to bundle the necessary code to ship an app.
Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.

# react component lifecycle 
- Mounting: The phase in which the component is being created and inserted into the DOM.
- Updating: The phase in which the component is being re-rendered as a result of changes to either its props or state.
- Unmounting: The phase in which the component is being removed from the DOM. 

# Add custom fonts in tailwind css
- In index.css file  on the top you have to add define the font using @font-face , using url and name for the font
- @font-face {
  font-family: 'MyCustomFont';
  src: url('/path/to/font.woff2') format('woff2'),
       url('/path/to/font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
- Then use @theme in your index.css file to include the custom font
- @theme{
  --font-custom: 'MyCustomFont', sans-serif;
}
- thats How you can use the downloaded custom font in your tailwind css project
- you can download any fonts zip file from google fonts or any other website and extract the woff and woff2 files and put them in public folder of your react project or you can dowmnload the @font-face kit from google fonts and use it
- Now you can use this font in your tailwind css project using className
## using the google fonts imports 
- You can also use google fonts by importing them in your index.css file
- @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
- then use @theme in your index.css file to include the custom font
- @theme{
  --font-roboto: 'Roboto', sans-serif; // ***this line means that you can use this font using className font-roboto***
} 
- Now you can use this font in your tailwind css project using className
example-
```javascript
<div className="font-roboto">
  This text will use the Roboto font.   
</div>
```


# Props passing in react components
- Array as props
  - You can pass an array as props to a React component by including it as an attribute when rendering the component.
  - Example:
  ```javascript   
  import React from 'react';

    function MyComponent({ items }) { // when you receive the props you have to destructure it otherwise you have to use props.items as the component is receiving the props object like - { items: [...] }
      return (
        <ul>
          // if you do not destructure the props you have received then you have then you have to use props.items
          // {props.items.map((item, index) => (
          //   <li key={index}>{item}</li>
          // ))}
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    function App() {
      const myArray = ['Item 1', 'Item 2', 'Item 3'];
      return <MyComponent items={myArray} />; //  passing an object of array like - { items: [...] } as props so when you receive it you have to destructure it
    }

    export default App;
  ```
  # React Icons Library
- React Icons is a popular library that provides a collection of customizable icons for React applications. It allows developers to easily include icons from various icon sets, such as Font Awesome, Material Design, and more, directly into their React components.
- Installation:
```bash
npm install react-icons --save
``` 
- Usage:
```javascript
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <FaBeer />
    </div>
  );
}

export default App;
```

# Named and defdault exports 
- in named export while importing you can olny use the name of the export and import shoudl be inside curly braces
- in default export you can use the name of the export or you can use the any name you want 

# object fit property in css
- object-fit property is used to specify how the selected image should be resized to fit the container
- object-fit property has three values
  - contain: The image is resized to fit the container while maintaining the aspect ratio of the original image.means the whole will be visible as it is in the container even though it can leave some spaces in the edges 
  - cover: the image is resised according to the heigth and width of the container and the image is cropped to fit the container
  
object-contain → shows the whole image, might leave empty space.
object-cover → fills the container, may crop parts of the image.
object-fill → stretches the image to fit (can distort).
object-none → image keeps its size, may overflow.
object-scale-down → like contain, but won’t scale up.

[Example] of object-cover:
  <img src={item.pp} alt="profile pic"  className="object-cover h-[30px] w-[30px] rounded-full"/>
  
  - The height you have given is the h and w the image is going to set in and you can apply css on it ..isme aspect ratio maintain krne ka jhanjhat nahi hota..

  - When you do object-contain  vo apne aspect ratio ko maitain krne ke liye height and width me kuch gaps leave krdeti hai..