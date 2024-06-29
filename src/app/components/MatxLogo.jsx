import useSettings from "app/hooks/useSettings";
import myLogo from "app/components/icons/logo.svg"

export default function MatxLogo({ className }) {
  const { settings } = useSettings();
  const theme = settings.themes[settings.activeTheme];

  return (
    <button style={{margin: "0" + "em", padding: "0" + "em", border: "0", width: "60" + "px", height: "60" + "px"}}>
      <img style={{width: "60" + "px", height: "60" + "px", margin: "0" + "em", padding: "0" + "em", border: "0"}} src={myLogo} alt="SVG logo image"/>
    </button>
  );
}
