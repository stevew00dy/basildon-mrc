export interface Layout {
  name: string;
  owner: string;
  gauge: string;
  scale?: string;
  theme: string;
  description: string;
  size?: string;
  operators?: string;
  image?: string;
  availability: "available" | "restricted" | "retired";
}

const layouts: Layout[] = [
  {
    name: "Dinas Mawddwy",
    owner: "Barry Tresadern",
    gauge: "O",
    scale: "7mm:1ft",
    theme: "Welsh branch line, 1930s GWR",
    description:
      "Depicts Dinas Mawddwy station on the historic Mawddwy Railway that ran between Cemmes Road and Mawddwy from 1866 to 1951. Can be erected in two sizes for different exhibition spaces.",
    size: "16ft × 3ft or 24ft × 3ft",
    operators: "3–4",
    image: "layout-1.jpg",
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
];

export default layouts;
