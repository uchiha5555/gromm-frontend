export interface MenuItemType {
  icon: any;
  text: string;
  router: string;
}

export interface ModalLayoutProps {
  show: boolean;
  closeModal: any;
  width?: string;
  height?: string;
}

export interface SignupRequestType {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}
