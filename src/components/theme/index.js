import { createMuiTheme } from "@material-ui/core";
import tinycolor from "tinycolor2";

const colorPrimary = "#5ea9dd"

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: colorPrimary,
            light: tinycolor(colorPrimary).lighten().toHexString()
        }
    },
    overrides: {
        MuiTypography:{
            root: {
                fontFamily: "shabnam !important",
            }
        }
    }
});

export default Theme;