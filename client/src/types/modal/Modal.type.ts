import TContent from "src/types/content/Content.type";
import TOnClose from "src/types/order/close/OnClose.type";
import TTitle from "src/types/title/Title.type";

type TModal = TContent & TOnClose & TTitle;

export default TModal;
