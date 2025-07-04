// types/global.d.ts (en raíz)
import type { IStaticMethods } from 'preline/dist';
declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
        HSThemeAppearance?: {
            init: () => void;
        };
    }
}
export { };
