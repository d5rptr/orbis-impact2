declare module "aos" {
  interface AOSOptions {
    duration?: number;
    once?: boolean;
    // You can add more optional properties here as needed, like easing, delay, etc.
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
  };

  export default AOS;
}
