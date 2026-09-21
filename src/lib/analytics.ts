// Centralized analytics tracking functions
// These can be easily connected to Google Tag Manager, Google Analytics, or Facebook Pixel in the future.

export const trackEvent = (eventName: string, data?: any) => {
  try {
    // If dataLayer exists (GTM)
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...data,
      });
    }

    // You can also add gtag or fbq tracking here
    // console.log(`[Event Tracker] ${eventName}`, data);
  } catch (err) {
    console.error('Error tracking event', err);
  }
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', { source });
};

export const trackPhoneClick = (source: string) => {
  trackEvent('phone_click', { source });
};

export const trackLocationClick = (source: string) => {
  trackEvent('location_click', { source });
};

export const trackCoverageClick = (city: string) => {
  trackEvent('coverage_click', { city });
};
