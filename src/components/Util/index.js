import React from 'react'
import { Grid, Paper } from 'material-ui'

const styles = {
    Grid: {
        height: "100%",
    },
    Paper: {
        flex: 1, 
        margin: 25,
        textAlign: "center"
    }
}

export default props =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
            Left Pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
            Right Pane
            </Paper>
        </Grid>
    </Grid>