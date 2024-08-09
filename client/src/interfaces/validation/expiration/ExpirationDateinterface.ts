interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
  onsave: () => void;
}
export default ConfirmDeleteModalProps;
