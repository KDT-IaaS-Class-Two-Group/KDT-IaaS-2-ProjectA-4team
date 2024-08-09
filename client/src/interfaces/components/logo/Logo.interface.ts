import { ImageProps } from "next/image";

export default interface LogoProps extends Omit<ImageProps, "src"> {}
