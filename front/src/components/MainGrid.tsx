
import { createStyles } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

// import {Grid, GridOptions} from "ag-grid/main";
import { AgGridReact } from "ag-grid-react";

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

import * as React from "react";

const styles = createStyles({
  agThemeBalham: {
    height: '500px',
    width: '600px'
  },
  paper: {
    padding: 10,
  },
  root: {
    padding: 10,
  },
});

type ClassNames = keyof typeof styles;

export interface IMainGridProps {
  dummy: string;
}

class MainGrid extends React.Component<IMainGridProps & WithStyles<ClassNames>,
    { columnDefs:Array<{}>, rowData:Array<{}> }> {
  constructor(props: IMainGridProps & WithStyles<ClassNames>) {
    super(props);

    this.state = {
      columnDefs: [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
      ],
      rowData: []
    }
  }

  public componentDidMount() {
    const rowData = [
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
    ]

    this.setState({rowData});
  }

  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={"ag-theme-balham " + classes.agThemeBalham}>
            <AgGridReact
              enableSorting={true}
              enableFilter={true}
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames, {}>(styles)(MainGrid);
