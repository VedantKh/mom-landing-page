export const COLORS = {
  amber: {
    50: "amber-50",
    100: "amber-100",
    200: "amber-200",
    300: "amber-300",
    600: "amber-600",
    700: "amber-700",
    800: "amber-800",
    900: "amber-900",
  },
  cream: {
    50: "cream-50",
    100: "cream-100",
  },
} as const;

export const COMMON_STYLES = {
  sectionPadding: "py-16 md:py-24 lg:py-32",
  containerBase: "container max-w-7xl mx-auto px-4 md:px-6",
  cardBase:
    "bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl",
  cardFeatured:
    "bg-white border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-3xl relative",
  buttonPrimary:
    "bg-amber-700 hover:bg-amber-800 text-white rounded-full font-medium inline-flex items-center justify-center transition-colors",
  iconContainer:
    "flex h-16 w-16 items-center justify-center rounded-full bg-amber-100",
  sectionDivider: "w-20 h-0.5 bg-amber-600",
  gradientBackground: "bg-gradient-to-b from-amber-50 via-white to-amber-50",
  imageContainer: "relative rounded-3xl overflow-hidden shadow-xl",
  serifFont: "italic font-light",
} as const;

export const WHATSAPP_LINK =
  "https://wa.me/971505964988?text=Hi Shivani, I'd like to book a consultation for my child.";
