declare module 'lucide-react' {
  // Minimal shim for icon components used in the project.
  import * as React from 'react';
  type IconProps = React.ComponentType<React.SVGProps<SVGSVGElement>>;

  export const Users: IconProps;
  export const GraduationCap: IconProps;
  export const Building: IconProps;
  export const CheckCircle: IconProps;
  export const Trophy: IconProps;
  export const Handshake: IconProps;

  const _default: { [key: string]: IconProps };
  export default _default;
}
