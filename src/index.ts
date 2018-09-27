import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  INotebookTracker
} from '@jupyterlab/notebook';

import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * Initialization data for the renku-jupyterlab extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'renku-jupyterlab',
  autoStart: true,
  requires: [ICommandPalette, INotebookTracker],
  activate: (app: JupyterLab, palette: ICommandPalette, notebooks: INotebookTracker) => {
    console.log('JupyterLab extension renku-jupyterlab is activated!');
    console.log('ICommandPalette:', palette);


  // Create a single widget
  let widget: Widget = new Widget();
  widget.id = 'renku-run';
  widget.title.label = 'renku run';
  widget.title.closable = true;

    // Add an application command
  const command: string = 'renku:run';
  app.commands.addCommand(command, {
    label: 'Run notebook with renku',
    execute: () => {
      // if (!widget.isAttached) {
      //   // Attach the widget to the main work area if it's not there
      //   app.shell.addToMainArea(widget);
      // }
      const nbWidget = notebooks.currentWidget;
      console.log('current notebook: ', nbWidget)

      // Activate the widget
      // app.shell.activateById(widget.id);
    }
  });

  // Add the command to the palette.
  palette.addItem({command, category: 'Renku'});

  }
};

export default extension;
