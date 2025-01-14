# Flow-Oriented Programming

This repository presents a conceptual framework for **Flow-Oriented Programming (FOP)**. The idea is to represent execution flows as a combination of **data** and **functions**, where functions manipulate data through defined addresses. Below, we detail the key components of FOP, with visual representations for each concept.

---

## How It Works

Flow-Oriented Programming encourages thinking about computation in terms of flows between data and functions. Functions are abstract units that can modify the state by interacting with data through specific addresses, which can be concrete or abstract. These concepts can be arranged into **layers** that create the **context** for a particular execution flow. A flow of execution completes when the context is fully realized.

## Visualizations

The images in this repository help visualize each of the concepts in **Flow-Oriented Programming**, showing how data and functions interact within different layers and contexts.


---

## Concepts

### 1. A flow of execution consists of data and functions.  
![Flow of execution](./images/image1.png)

```javascript
    const a;
    function f(context){}
```

```javascript
    const a;
    function f(context){}
```

---

### 2. Data is a unit of information.  
![Data unit](./images/image2.png)


---

### 3. A state can have n data.  
![State with multiple data](./images/image3.png)

```javascript
   const a, b;
```

```javascript
   const a;
   const b;
```
---

### 4. A function is a unit of state change.  
![Function as state change](./images/image4.png)

```javascript
  function f(context){
     return "a";
   }
```
---

### 5. A function can have n input addresses and n output addresses.  
![Function with multiple addresses](./images/image5.png)

```javascript
   function f(context) { }

   function f(context) {
     const { a } = context;
   }

   function f(context) {
     const { a } = context;

     return a;
   }

   function f(context) {
     return;
   }

   function f(context) {
     const { a, b, c } = context;

     return { a, b, c };
   }
```

---

### 6. Functions and data can have concrete addresses.  
![Concrete addresses](./images/image6.png)


---

### 7. Functions and data can have abstract addresses.  
![Abstract addresses](./images/image7.png)


---

### 8. A function can receive abstract addresses of data and functions as input.  
![Function receiving abstract addresses](./images/image8.png)

```javascript
  function f(context) {
     const { a } = context;
   }

   function f(context) {
     const { f1 } = context;
   }
```

---

### 9. A function can return concrete addresses of data and functions as output.  
![Function returning concrete addresses](./images/image9.png)

```javascript
  function f(context) {
     return "";
   }

   function f(context) {
     return function () { }
   }
```

---

### 10. Functions can contain other sequential functions.  
![Sequential functions](./images/image10.png)

```javascript
   async function f(context) {
     await f1({ ...context });
     await f2({ ...context });
   }
```

---

### 11. Functions can contain other parallel functions.  
![Parallel functions](./images/image11.png)

```javascript
  async function f(context) {
     await Promise.all([
       f1({ ...context }),
       f2({ ...context }),
     ]);
   }
```

---

### 12. Functions can contain selection structures.  
![Selection structures](./images/image12.png)

```javascript
   async function f(context) {
     const a = await f1({ ...context });

     if (a) {
       await f2({ ...context, a });
     }
   }
```

---

### 13. Functions can have loop structures.  
![Loop structures](./images/image13.png)

```javascript
   async function f(context) {
     const { a } = context;

     const a = await f1({ ...context });

     await f({ ...context, a });
   }
```

---

### 14. Addresses that know each other are part of the same layer.  
![Same layer](./images/image14.png)

```javascript

   import f1 from './f1';
   import f2 from './f2’;
   import a  from './a';

   export default async function f(context) {
     const [b, c] = await Promise.all([
       f1({ ...context, a }),
       f2({ ...context, a }),
     ]);

     if (b && c) {
        return f({ ...context, a });
     }

     return c;
   }
 
```

---

### 15. Addresses that do not know each other are in different layers.  
![Different layers](./images/image15.png)

```javascript
   import f1 from './f1';
  
   export default async function f(context) {
     const { a, f2 } = context;

     const [b, c] = await Promise.all([
       f1({ ...context, a }),
       f2({ ...context, a }),
     ]);

     if (b && c) {
        return f({ ...context, a, f2 });
     }

     return c;
   }

```

---

### 16. Every input forms a layer.  
![Input forms a layer](./images/image16.png)


---

### 17. A layer is a replaceable unit.  
![Replaceable layer](./images/image17.png)


---

### 18. Different layers form a context.  
![Layers forming a context](./images/image18.png)


---

### 19. The flow execution occurs when the context is complete.  
![Flow execution](./images/image19.png)

```javascript
  import f1 from './f1';

   await f({
     a: '',
     f2: () => {}
   });
  
   export default async function f(context) {
     const { a, f2 } = context;

     const [b, c] = await Promise.all([
       f1({ ...context, a }),
       f2({ ...context, a }),
     ]);

     if (b && c) {
        return f({ ...context, a, f2 });
     }

     return c;
   }
```
---

## Contributing

Feel free to contribute! If you have suggestions, bug fixes, or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or suggestions, please open an issue or contact us via [laerciogermanoo@gmail.com](mailto:laerciogermanoo@gmail.com).
