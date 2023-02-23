import BrowserOnly from '@docusaurus/BrowserOnly';
import React from "react";

export default function Keybinding(props: {
  mac: string,
  /** Windows/Linux */
  winux: string,
}) {
  return (
    <BrowserOnly>
      {() => {
        const isMac = useIsMac();

        return (
        <code
          style={{
            fontFamily: '-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif',
          }}
        >
          {isMac ? props.mac : props.winux}
        </code>
      )
      }}
    </BrowserOnly>
  );
}

const useIsMac = () => {
  return React.useMemo(() => {
    // This is method deprecated but supported on all browsers stil
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform
    return window.navigator.platform === "MacIntel";
  }, []);
}
