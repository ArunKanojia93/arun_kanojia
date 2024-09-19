declare module "vanta/src/vanta.net" {
  export interface NetParams {
    el: string;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    xOffset?: number;
    yOffset?: number;
    size?: number;
    backgroundColor?: string | number;
    scale?: number;
    scaleMobile?: number;
    points?: number;
    maxDistance?: number;
    baseColor?: string | number;
  }

  export interface NetInstance {
    setOptions: ({ el, mouseControls, touchControls, gyroControls, minHeight, minWidth, size, xOffset, yOffset, backgroundColor, scale, scaleMobile, points, maxDistance, baseColor }: Omit<NetParams, "el">) => void;
    resize: () => void;
    destroy: () => void;
  }
  const NET: ({ el, mouseControls, touchControls, gyroControls, minHeight, minWidth, size, xOffset, yOffset, backgroundColor, scale, scaleMobile, points, maxDistance, baseColor }: NetParams) => NetInstance;

  export default NET;
}

declare module "vanta/src/vanta.halo" {
  export interface HaloParams {
    el: string;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    xOffset?: number;
    yOffset?: number;
    size?: number;
    backgroundColor?: string | number;
    scale?: number;
    scaleMobile?: number;
    points?: number;
    maxDistance?: number;
    baseColor?: string | number;
  }

  export interface HaloInstance {
    setOptions: ({ el, mouseControls, touchControls, gyroControls, minHeight, minWidth, size, xOffset, yOffset, backgroundColor, scale, scaleMobile, points, maxDistance, baseColor }: Omit<HaloParams, "el">) => void;
    resize: () => void;
    destroy: () => void;
  }

  const HALO: ({ el, mouseControls, touchControls, gyroControls, minHeight, minWidth, size, xOffset, yOffset, backgroundColor, scale, scaleMobile, points, maxDistance, baseColor }: HaloParams) => HaloInstance;

  export default HALO;
}
