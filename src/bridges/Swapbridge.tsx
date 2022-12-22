import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 137,
  fromToken: '0x65Abd48bC38DEA1938AE94428590d4da54f74Fbe',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};



export const SwapWidget = () => {
  return <LiFiWidget config={widgetConfig} />;
};
