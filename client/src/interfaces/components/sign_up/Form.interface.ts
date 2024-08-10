export interface SignUpFormProps {}

export interface SignUpFormRef {
  getInputRefs: () => (HTMLInputElement | null)[];
  validateFields: () => { [key: string]: string }; // validateFields 함수를 추가
}
