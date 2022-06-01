import DarkMode from "@mui/icons-material/DarkMode"
import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/system"
import { useThemeContext } from "../../contexts/theme"
import CustomTooltip from "../UI/CustomTooltip"

const TypeSwitcherButton = ({ isOpen }) => {
  const { toggleThemeType, themeType } = useThemeContext()
  return (
    <div style={{ position: "absolute" }}>
      <CustomTooltip title={themeType} placement={"left"}>
        <ThemeTypeButton
          onClick={toggleThemeType}
          className={isOpen ? "open" : undefined}
        >
          {themeType === "dark" ? (
            <LightModeOutlined className="icon" />
          ) : (
            <DarkMode className="icon" />
          )}
        </ThemeTypeButton>
      </CustomTooltip>
    </div>
  )
}

export default TypeSwitcherButton

const ThemeTypeButton = styled(IconButton)(({ theme }) => ({
  zIndex: 1500,
  backgroundColor: theme.tertiary,
  color: theme.secondary,
  transition: `transform 0.5s calc(0.05s * ${1}),
  backgroundColor 0.2s linear,
  color 0.2s linear`,
  "&.open": {
    transform: `translateY(calc(45 * ${1}px))`,
  },

  "&:hover": {
    backgroundColor: theme.tertiary,
    color: theme.secondary,
  },
}))
