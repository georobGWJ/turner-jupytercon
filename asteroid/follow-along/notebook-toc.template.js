define(['base/js/namespace', 'base/js/utils', 'jquery'], function(Jupyter, utils, $)
{
    function create_toc_text() {}

    function load_toc_cell(toc_cell, toc_text) {
      if (toc_cell === null) {
        // Create a cell object, first Param is 'markdown' or 'code'
        // second param is position of new cell
        var toc_cell = Jupyter.notebook.insert_cell_at_index('markdown', 0);
      }

      toc_cell.set_text(toc_text);
      toc_cell.render();
    }

    function create_toc() {
      let toc_text = create_toc_text();
      load_toc_cell(null, toc_text);  // null indicates no TOC has been created
    }

    function refresh_toc() {

    }

    function place_toc_button() {
      // Check to see if toolbar is initialized
      if (!Jupyter.toolbar) {
        // Listener using JQuery to keep trying to load extension
        // Will work after toolbar is initialized
        $([Jupyter.events]).on('app_initialized.NotebookApp', place_toc_button);
        return;
      }

      Jupyter.toolbar.add_buttons_group([
        {
          'label': 'Create Table of Contents',      // Hover tooltip
          'icon': 'fa-table',                       // Font-Awesome icon
          'callback': 'create_toc',                 // What to do when button is clicked
          'id': 'create-toc-btn'                    // Unique ID
        },
        {
          'label': 'Refresh Table of Contents',
          'icon': 'fa-refresh',
          'callback': 'refresh_toc',
          'id': 'refresh-toc-btn'
        }
      ])
    }

    function load_ipython_extension() {
      console.log('Loading notebook-toc extensions...');
      place_toc_button();
    }

    // ipython in commands below is legacy naming schema,
    // it will work with Julia and other kernels also
    return {
      load_ipython_extension: load_ipython_extension
  };
});
