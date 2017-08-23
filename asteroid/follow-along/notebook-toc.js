define(['base/js/namespace', 'base/js/utils', 'jquery'], function(Jupyter, utils, $) {
    function create_toc_text() {
      var toc_text = "# Table of Contents\n";
      // Get an array of cell objects
      var cells = Jupyter.notebook.get_cells();
      // Track how many heading cells there are
      var heading_count = 0;
      // Loop through cells to find headers
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (cell.cell_type === 'markdown') {
          var cell_content = cell.get_text();
          if (cell_content.startsWith('#')) {
            heading_count++;
            var last_hash_idx = cell_content.lastIndexOf('#'); // Grabs test starting after last '#'
            // SEE LINES 18 to 21 OF IMPLEMENTED CODE FOR a FIX!!!
            var hash_num = last_hash_idx + 1;
            var heading_title = cell_content.substr(hash_num);
            // Now create Link to heading
            var first_tag = heading_title.indexOf("<");
            if (first_tag != -1) {
                heading_title = heading_title.slice(0, first_tag);
            }
            // Create a <a> tag for linking to fragment
            var link_fragment_heading = heading_title.toLowerCase().replace(" ", "_");
            var link_fragment = '<a name="' + link_fragment_heading + '"></a>';
            cell.set_text(cell.get_text() + link_fragment);
            cell.render();    // refresh cell
            // Append to String of Header links
            toc_text += (Array(hash_num).join('  ') + '- ');
            toc_text += ('[' + heading_title + '](#' + link_fragment_heading + ') \n');
          }
        }
      }
      return toc_text;
    }

    function load_toc_cell(toc_cell, toc_text) {
      if (toc_cell === null) {
        // Create a cell object, first Param is 'markdown' or 'code'
        // second param is position of new cell
        var toc_cell = Jupyter.notebook.insert_cell_at_index('markdown', 0);
      }

      // Add text to cell
      toc_cell.set_text(toc_text);
      // Show the cell
      toc_cell.render();
    }

    function create_toc() {
      let toc_text = create_toc_text();
      load_toc_cell(null, toc_text);  // null indicates no TOC has been created
    }

    function refresh_toc() {
      var toc_text = create_toc_text();
      load_toc_cell(Jupyter.notebook.get_cell(0), toc_text);
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
          'callback': create_toc,                 // What to do when button is clicked
          'id': 'create-toc-btn'                    // Unique ID
        },
        {
          'label': 'Refresh Table of Contents',
          'icon': 'fa-refresh',
          'callback': refresh_toc,
          'id': 'refresh-toc-btn'
        }
      ])
    }

    function load_ipython_extension() {
      console.log('Loading notebook-toc extension...');
      place_toc_button();
    }

    // ipython in commands below is legacy naming schema,
    // it will work with Julia and other kernels also
    return {
      load_ipython_extension: load_ipython_extension
  };
});
