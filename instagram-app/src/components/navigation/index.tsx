import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
export type navType = {
    path: string;
    title: string;
    icons?: string;
};
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    navList: navType[];
    window?: () => Window;
    visible: boolean;
    useMenus?: boolean;
}

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;

    const drawer = (
        <div>
            <List>
                {props.navList.map((nav: navType, index: number) => {
                    return (
                        <ListItem key={nav.title} disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon></ListItemIcon> */}
                                <ListItemText primary={nav.title} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open={props.visible}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
