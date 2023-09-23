import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BsFillChatFill } from 'react-icons/bs';
import { COLOR } from "./assets/colors";
import { useIntercom } from "react-use-intercom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { boot, show } = useIntercom();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onStartIntercom = () => {
    boot();
    show();
  }

  return (
    <div className='intercom-support-btn' onClick={onStartIntercom}>
      <BsFillChatFill color={COLOR.primary0} size={34} />
    </div>
  );
}