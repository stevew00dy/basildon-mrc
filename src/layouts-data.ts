export interface Layout {
  name: string;
  owner: string;
  gauge: string;
  scale?: string;
  theme: string;
  description: string;
  size?: string;
  operators?: string;
  availability: "available" | "restricted" | "retired";
}

const layouts: Layout[] = [
  {
    name: "Dinas Mawddwy",
    owner: "Barry Tresadern",
    gauge: "OO9",
    scale: "7mm:1ft",
    theme: "Welsh branch line, 1930s GWR",
    description:
      "Depicts Dinas Mawddwy station on the historic Mawddwy Railway that ran between Cemmes Road and Mawddwy from 1866 to 1951. Can be erected in two sizes for different exhibition spaces.",
    size: "16ft × 3ft or 24ft × 3ft",
    operators: "3–4",
    availability: "available",
  },
  {
    name: "Seagle Bay",
    owner: "Barry Tresadern",
    gauge: "N",
    scale: "1:148",
    theme: "Coastal town, late 1950s/early 1960s",
    description:
      "A small northern coastal town featuring fishing, coal heritage, and mainline railway services. Set in the late 1950s and early 1960s.",
    size: "14ft × 4ft",
    availability: "available",
  },
  {
    name: "St. James Pier",
    owner: "Barry Tresadern",
    gauge: "N",
    scale: "1:148",
    theme: "Seaside pier and station",
    description:
      "A compact N gauge layout depicting a seaside pier station with character and charm.",
    availability: "available",
  },
  {
    name: "Shell Haven",
    owner: "Barry Tresadern",
    gauge: "OO",
    scale: "1:76",
    theme: "Industrial Essex riverside",
    description:
      "Based on the real Shell Haven area on the Thames Estuary in Essex — an industrial setting with oil refinery and riverside character.",
    availability: "available",
  },
  {
    name: "Aldwych UG",
    owner: "Barry Tresadern",
    gauge: "OO",
    scale: "1:76",
    theme: "London Underground terminus",
    description:
      "Recreates the closed Aldwych Underground station on the former Piccadilly Line branch. A unique and atmospheric subject.",
    availability: "available",
  },
  {
    name: "Jim's Folly",
    owner: "Barry Tresadern",
    gauge: "OO",
    scale: "1:76",
    theme: "Fictional branch line",
    description:
      "A fictional branch line terminus with plenty of shunting interest and operational possibilities.",
    availability: "available",
  },
  {
    name: "Somerset Cider",
    owner: "Barry Tresadern",
    gauge: "Gn15",
    theme: "Rural Somerset cider farm",
    description:
      "A traditional rural Somerset cider barn, factory and farm setting. Features a narrow gauge railway through adjoining farmland and village, complete with cider press, a pub, and artist's studio.",
    size: "2.55m × 0.5m",
    availability: "retired",
  },
  {
    name: "Black Box Mine Co.",
    owner: "Barry Tresadern",
    gauge: "OO9",
    theme: "Mining operation",
    description:
      "A narrow gauge mining layout with industrial character and working stock.",
    availability: "available",
  },
  {
    name: "Kadeleigh",
    owner: "Club layout",
    gauge: "OO",
    scale: "1:76",
    theme: "Country station",
    description:
      "A club-built OO gauge country station layout, regularly exhibited at shows around the region.",
    availability: "available",
  },
  {
    name: "Felsham Road",
    owner: "Club layout",
    gauge: "OO",
    scale: "1:76",
    theme: "Branch line halt",
    description:
      "A branch line halt layout in OO gauge. Currently available for selected exhibitions only.",
    availability: "restricted",
  },
  {
    name: "Tal-Y-Bont",
    owner: "Club layout",
    gauge: "OO9",
    theme: "Welsh narrow gauge",
    description:
      "A narrow gauge Welsh railway layout capturing the character of the valleys.",
    availability: "available",
  },
  {
    name: "Llangwynllyn",
    owner: "Club layout",
    gauge: "OO9",
    theme: "Welsh narrow gauge",
    description:
      "Another of the club's Welsh narrow gauge layouts, set in a rural Welsh village setting.",
    availability: "restricted",
  },
];

export default layouts;
