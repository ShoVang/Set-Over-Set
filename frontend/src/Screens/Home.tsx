import React, { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  Stack,
  Paper,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const drawerWidth = 280;

const tracks = [
  {
    key: "beginner",
    title: "Beginner",
    icon: <SchoolIcon />,
    description: "Start from the fundamentals and build strong habits.",
    bullets: ["Core concepts", "Simple exercises", "Step-by-step progress"],
  },
  {
    key: "intermediate",
    title: "Intermediate",
    icon: <TrendingUpIcon />,
    description: "Sharpen your skills and start connecting the dots.",
    bullets: ["Real projects", "Best practices", "Deeper problem solving"],
  },
  {
    key: "advanced",
    title: "Advanced",
    icon: <MilitaryTechIcon />,
    description: "Push into complex topics and production-level thinking.",
    bullets: ["System design", "Performance", "Advanced patterns"],
  },
];

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("beginner");

  const selected = useMemo(
    () => tracks.find((t) => t.key === selectedTrack) || tracks[0],
    [selectedTrack]
  );

  const handleSelectTrack = (key: string) => {
    setSelectedTrack(key);
    setDrawerOpen(false);
    // You can navigate here if you want:
    // navigate(`/track/${key}`)
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* App Bar */}
      <AppBar position="sticky" elevation={0} color="default">
        <Toolbar sx={{ gap: 1 }}>
          <IconButton edge="start" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Set Over Set
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button variant="text">Log in</Button>
            <Button variant="contained">Get Started</Button>
          </Stack>
        </Toolbar>
        <Divider />
      </AppBar>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Tracks
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Choose your level to start learning.
          </Typography>
        </Box>

        <Divider />

        <List sx={{ px: 1 }}>
          {tracks.map((t) => (
            <ListItemButton
              key={t.key}
              selected={selectedTrack === t.key}
              onClick={() => handleSelectTrack(t.key)}
              sx={{ borderRadius: 1 }}
            >
              <ListItemIcon>{t.icon}</ListItemIcon>
              <ListItemText
                primary={t.title}
                secondary={t.description}
                primaryTypographyProps={{ fontWeight: 700 }}
                secondaryTypographyProps={{ noWrap: false }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: "auto", p: 2 }}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Tip
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Not sure? Start Beginner — you can always move up.
            </Typography>
          </Paper>
        </Box>
      </Drawer>

      {/* Main */}
      <Container sx={{ py: { xs: 3, md: 6 } }}>
        {/* Hero */}
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, alignItems: "center" }}>
            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 58.33%" } }}>
              <Typography variant="overline" color="text.secondary">
                Track selected: {selected.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mt: 1,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Level up your skills, one set at a time.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 2, maxWidth: 560 }}
              >
                Structured learning paths that keep you moving forward with clear
                milestones, practical exercises, and real-world projects.
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap" }}>
                <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                  Start {selected.title}
                </Button>
                <Button variant="outlined" onClick={() => setDrawerOpen(true)}>
                  View Tracks
                </Button>
              </Stack>
            </Box>

            <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 41.67%" }, width: "100%" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  What you’ll get
                </Typography>
                <Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2 }}>
                  {selected.bullets.map((b) => (
                    <Box key={b} component="li" sx={{ mb: 0.75, color: "text.secondary" }}>
                      {b}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Paper>

        {/* About */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mt: 2 }}>
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                What we’re about
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Set Over Set is built for people who want progress without guessing.
                Pick a track, follow the plan, and build momentum with clear milestones.
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
            <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                How it works
              </Typography>
              <Box component="ol" sx={{ m: 0, mt: 1, pl: 2, color: "text.secondary" }}>
                <li>Choose a track</li>
                <li>Complete modules and exercises</li>
                <li>Build projects and level up</li>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Track Cards */}
        <Typography variant="h5" sx={{ mt: 4, mb: 1.5, fontWeight: 800 }}>
          Explore tracks
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, flexWrap: "wrap" }}>
          {tracks.map((t) => (
            <Box key={t.key} sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(33.333% - 16px)" }, minWidth: 0 }}>
              <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {t.icon}
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                      {t.title}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {t.description}
                  </Typography>

                  <Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2, color: "text.secondary" }}>
                    {t.bullets.map((b) => (
                      <Box key={b} component="li" sx={{ mb: 0.5 }}>
                        {b}
                      </Box>
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, mt: "auto" }}>
                  <Button
                    variant={selectedTrack === t.key ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => setSelectedTrack(t.key)}
                    endIcon={<ArrowForwardIcon />}
                  >
                    {selectedTrack === t.key ? "Selected" : "Explore"}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 6, py: 3, color: "text.secondary" }}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2">
            © {new Date().getFullYear()} Set Over Set. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
