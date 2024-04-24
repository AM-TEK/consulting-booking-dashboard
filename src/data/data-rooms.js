import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const rooms = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Experience productivity in our modern meeting room. Equipped with the latest technology, comfortable seating for two, and a serene environment, it's ideal for focused discussions and brainstorming sessions.",
  },
];
