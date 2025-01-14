# Flow-Oriented Programming

This repository presents a conceptual framework for **Flow-Oriented Programming (FOP)**. The idea is to represent execution flows as a combination of **data** and **functions**, where functions manipulate data through defined addresses. Below, we detail the key components of FOP, with visual representations for each concept.

---

## Concepts

### 1. A flow of execution consists of data and functions.  
![Flow of execution](path/to/image1.png)

---

### 2. Data is a unit of information.  
![Data unit](path/to/image2.png)

---

### 3. A state can have n data.  
![State with multiple data](path/to/image3.png)

---

### 4. A function is a unit of state change.  
![Function as state change](path/to/image4.png)

---

### 5. A function can have n input addresses and n output addresses.  
![Function with multiple addresses](path/to/image5.png)

---

### 6. Functions and data can have concrete addresses.  
![Concrete addresses](path/to/image6.png)

---

### 7. Functions and data can have abstract addresses.  
![Abstract addresses](path/to/image7.png)

---

### 8. A function can receive abstract addresses of data and functions as input.  
![Function receiving abstract addresses](path/to/image8.png)

---

### 9. A function can return concrete addresses of data and functions as output.  
![Function returning concrete addresses](path/to/image9.png)

---

### 10. Functions can contain other sequential functions.  
![Sequential functions](path/to/image10.png)

---

### 11. Functions can contain other parallel functions.  
![Parallel functions](path/to/image11.png)

---

### 12. Functions can contain selection structures.  
![Selection structures](path/to/image12.png)

---

### 13. Functions can have loop structures.  
![Loop structures](path/to/image13.png)

---

### 14. Addresses that know each other are part of the same layer.  
![Same layer](path/to/image14.png)

---

### 15. Addresses that do not know each other are in different layers.  
![Different layers](path/to/image15.png)

---

### 16. Every input forms a layer.  
![Input forms a layer](path/to/image16.png)

---

### 17. A layer is a replaceable unit.  
![Replaceable layer](path/to/image17.png)

---

### 18. Different layers form a context.  
![Layers forming a context](path/to/image18.png)

---

### 19. The flow execution occurs when the context is complete.  
![Flow execution](path/to/image19.png)

---

## How It Works

Flow-Oriented Programming encourages thinking about computation in terms of flows between data and functions. Functions are abstract units that can modify the state by interacting with data through specific addresses, which can be concrete or abstract. These concepts can be arranged into **layers** that create the **context** for a particular execution flow. A flow of execution completes when the context is fully realized.

## Visualizations

The images in this repository help visualize each of the concepts in **Flow-Oriented Programming**, showing how data and functions interact within different layers and contexts.

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

---
