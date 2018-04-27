const sizes = {
  medium: 750,
  large: 990,
  widescreen: 1400
};

export const devices = {
  small: `(max-width: ${sizes.medium - 1}px)`,
  medium: `(min-width: ${sizes.medium}px) and (max-width: ${sizes.large - 1}px)`,
  mediumDown: `(max-width: ${sizes.large - 1}px)`,
  mediumUp: `(min-width: ${sizes.medium}px)`,
  large: `(min-width: ${sizes.large}px) and (max-width: ${sizes.widescreen - 1}px)`,
  largeDown: `(max-width: ${sizes.widescreen - 1}px)`,
  largeUp: `(min-width: ${sizes.large}px)`,
  widescreen: `(min-width: ${sizes.widescreen}px)`
};
