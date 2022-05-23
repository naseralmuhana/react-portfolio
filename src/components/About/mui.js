import { styled } from "@mui/material"
import "../../App.css"

// About Section
export const AboutSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.secondary,
  minHeight: "100vh",
  position: "relative",
}))

/**
 * Top Line
 * Content => [Circle, Line]
 */

// Line Container
export const LineContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "50%",
  transform: "translateX(-50%)",
  height: "50px",
  width: "85%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down(992)]: {
    top: "20px",
  },
}))

// Circle
export const Circle = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  [theme.breakpoints.down(800)]: {
    width: "8px",
    height: "8px",
  },
  [theme.breakpoints.down(600)]: {
    width: "5px",
    height: "5px",
  },
}))

// Line
export const Line = styled("div")(({ theme }) => ({
  backgroundColor: theme.primary,
  width: "95%",
  height: "5px",
  borderRadius: "10px",
  [theme.breakpoints.down(600)]: {
    width: "93%",
    height: "3px",
  },
}))

/**
 * About Body
 * Content => [Title, Description, Image]
 */

// Body
export const AboutBody = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  paddingTop: "8rem",
  height: "fit-content",
  [theme.breakpoints.down(992)]: {
    paddingTop: "2rem",
    flexDirection: "column-reverse",
    justifyContent: "space-evenly",
  },
}))

// Description Container
export const AboutDescriptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flex: 0.5,
  width: "100%",
  height: "fit-content",
  [theme.breakpoints.down(992)]: {
    flex: 0.6,
    /* padding: 5% 10%; */
    padding: "20px",
  },
}))

// Title
export const AboutTitle = styled("h2")(({ theme }) => ({
  color: theme.primary,
  fontFamily: "var(--primaryFont)",
  fontSize: "3.5rem",
  marginBottom: "40px",
  [theme.breakpoints.between(992, 1380)]: {
    fontSize: "3.3rem",
    marginBottom: "30px",
  },
  [theme.breakpoints.down(992)]: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  [theme.breakpoints.down(800)]: {
    alignSelf: "center",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "2.5rem",
  },
}))

// Description
export const AboutDescription = styled("p")(({ theme }) => ({
  color: theme.tertiary80,
  fontFamily: "var(--primaryFont)",
  fontSize: "1.25rem",
  [theme.breakpoints.between(992, 1380)]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down(992)]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down(600)]: {
    fontSize: "0.95rem",
  },
}))

// Image Container
export const AboutImageContainer = styled("div")({
  marginTop: "40px",
  pointerEvents: "none",
})

// Image
export const AboutImage = styled("img")(({ theme }) => ({
  width: "380px",
  flex: 0.5,
  [theme.breakpoints.between(992, 1380)]: {
    width: "300px",
  },
  [theme.breakpoints.down(992)]: {
    width: "250px",
    flex: 0.4,
  },
  [theme.breakpoints.down(600)]: {
    width: "200px",
  },
}))
