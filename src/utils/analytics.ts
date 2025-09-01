import posthog from 'posthog-js';

interface AnalyticsConfig {
  apiKey: string;
  options?: {
    api_host?: string;
    autocapture?: boolean;
    capture_pageview?: boolean;
    disable_session_recording?: boolean;
  };
}

class Analytics {
  private initialized = false;

  init(config: AnalyticsConfig) {
    if (this.initialized || typeof window === 'undefined') {
      return;
    }

    posthog.init(config.apiKey, {
      api_host: config.options?.api_host || 'https://app.posthog.com',
      autocapture: config.options?.autocapture ?? true,
      capture_pageview: config.options?.capture_pageview ?? true,
      disable_session_recording: config.options?.disable_session_recording ?? false,
      loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.debug();
      },
    });

    this.initialized = true;
  }

  identify(userId: string, properties?: Record<string, unknown>) {
    if (!this.initialized) return;
    posthog.identify(userId, properties);
  }

  track(eventName: string, properties?: Record<string, unknown>) {
    if (!this.initialized) return;
    posthog.capture(eventName, properties);
  }

  page(pageName?: string, properties?: Record<string, unknown>) {
    if (!this.initialized) return;
    posthog.capture('$pageview', {
      $current_url: window.location.href,
      page_name: pageName,
      ...properties,
    });
  }

  setUserProperties(properties: Record<string, unknown>) {
    if (!this.initialized) return;
    posthog.people.set(properties);
  }

  reset() {
    if (!this.initialized) return;
    posthog.reset();
  }
}

export const analytics = new Analytics();

// Initialize analytics if API key is provided
const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_API_KEY;

if (POSTHOG_API_KEY) {
  analytics.init({
    apiKey: POSTHOG_API_KEY,
    options: {
      autocapture: true,
      capture_pageview: true,
      disable_session_recording: false,
    },
  });
}

// Convenience hooks for React components
export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    analytics.track(eventName, properties);
  };

  const trackPageView = (pageName?: string, properties?: Record<string, unknown>) => {
    analytics.page(pageName, properties);
  };

  const identifyUser = (userId: string, properties?: Record<string, unknown>) => {
    analytics.identify(userId, properties);
  };

  return {
    trackEvent,
    trackPageView,
    identifyUser,
  };
};