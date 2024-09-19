export default function mapWcodeWcond(wcode) {
  switch (true) {
    case [0, 1].includes(wcode):
      return "Sunny";
    case [2, 3].includes(wcode):
      return "Partially Cloudy";
    case [45, 48].includes(wcode):
      return "Foggy";
    case [51, 53, 55, 56, 57].includes(wcode):
      return "Drizzle";
    case [61, 63, 65].includes(wcode):
      return "Rainy";
    case [66, 67, 71, 73, 75, 77].includes(wcode):
      return "Snowy";
    case [80, 81, 82].includes(wcode):
      return "Heavy Shower";
    case [95, 96, 99].includes(wcode):
      return "Thunderstorm";
    default:
      return "Unspecified";
  }
}
