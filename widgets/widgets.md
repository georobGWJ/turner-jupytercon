# Jupyter widgets: Interactive controls for Jupyter

## Description

Jupyter widgets are powerful tools for building user interfaces with graphical controls, such as sliders and text boxes, inside a Jupyter notebook. Interactive widgets can also be rendered in Sphinx documentation, on nbviewer, and on static web pages. But Jupyter widgets are more than a collection of controls. They are also a framework that makes it easy to build custom GUI controls in the notebook. Examples of custom widget packages include libraries for interactive 2d charting (bqplot), 3D graphics (pythreejs, ipyvolume), mapping (ipyleaflet), and more.

Sylvain Corlay and Jason Grout offer an overview of the functionalities provided by the base package, including the collection of interactions available in ipywidgets, styling and layout abilities, embedding widgets in contexts other than the notebook, and using the @interact automatic GUI generation tool. Sylvain and Jason then explore some of the popular widget libraries built upon Jupyter widgets, showing how these tools can be used to author interactive data visualization dashboards that can be distributed, before walking you through authoring such a dashboard by assembling simple controls and visualization widgets in nested layouts and building a simple widget wrapping an existing JavaScript control.


## Notes:
- Widgets can communicate within the same kernel, typically individual notebooks have their own kernels, so widgets can't communicate across notebooks.
- the ```interact``` function smartly creates the proper type of widget whether you give it an int, a float, a boolean or a string.
  - If you pass a list, you get a dropdown; you can also pass a dictionary, but the order isn't guaranteed so it isn't recommended
- You can't customize ```interact``` widgets stylistically without writing your own widget.
- ```interactive``` command allows you to create a widget object in the background. You can display it later, query it's keywords, etc.
- Research ipython display system for a lot more info
- If functions attached to widgets are slow, there can be a delay before you get the response
  - If you want to, you can disable the auto-update for widgets.
- Changes to a widget affect ALL instances of that widget in a notebook.
- A JavaScript object in a notebook is referred to as a __model__
- You can use icons from [font awesome](http://fontawesome.io/)
