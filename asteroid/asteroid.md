# How to cross the asteroid belt

## Description

Have you wondered what it takes to go from a Jupyter user to a Jupyter pro? Wonder no more. Safia Abdalla explores the core concepts of the Jupyter ecosystem, including the extensions ecosystem, the kernel ecosystem, and the frontend architecture, leaving you with an understanding of the possibilities of the Jupyter ecosystem and practical skills on customizing the Jupyter Notebook experience.

Outline:

- Introduction (15 minutes)
- A JavaScript primer (45 minutes): Get a brief overview of JavaScript, the central language in the Jupyter ecosystem
- Jupyter extensions (45 minutes): Learn how to develop Jupyter extensions and develop an extension that creates a table of contents
- Jupyter kernels (1 hour): Learn how the Jupyter frontend interfaces with Jupyter kernels and develop a Pig Latin kernel using the Python wrapper
- Conclusion and Q&A (15 minutes): Explore resources for learning more about developing on the Jupyter Notebook, example exercises, and how to use your new knowledge to improve workflows and productivity at your company or research lab

## Notes
- Presenter: Safia Abdalla @captainsafia safia.rocks
- Jupyter is a web application and as such can leverage web technologies
- Jupyter extensions can extend either front-end (JS) OR back-end (Python) of Jupyter
- Jupyter uses Tornado server
- Can be distributed as Python packages (pip) or JS files
- Interfaces with via `nbextension` or `jupyter serverextension` commands
