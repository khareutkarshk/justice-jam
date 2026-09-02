import { images } from "@/lib/images";

export type Artist = {
  name: string;
  bio: string;
  initials?: string;
  image?: string;
  borderColor: "border-teal" | "border-yellow" | "border-pink-600";
  cardClass: "card-a" | "card-b";
};

export const lineupArtists: Artist[] = [
  {
    name: "Mike McCready",
    initials: "MM",
    bio: "Lead guitarist and founding member of Pearl Jam, also of Temple of the Dog and Mad Season. A longtime supporter of the Washington Innocence Project.",
    borderColor: "border-teal",
    cardClass: "card-a",
  },
  {
    name: "Dierks Bentley",
    initials: "DB",
    bio: "Multi-platinum entertainer with eight No. 1 albums and 22 No. 1 songs, and a member of the Grand Ole Opry.",
    borderColor: "border-yellow",
    cardClass: "card-b",
  },
  {
    name: "Jaid Joice",
    initials: "JJ",
    bio: "Nashville-based singer-songwriter blending indie-rock grit and folk storytelling, preparing to release her debut album.",
    borderColor: "border-pink-600",
    cardClass: "card-a",
  },
  {
    name: "The McCrary Sisters",
    image: images.mccrarySisters,
    bio: "Nashville's own gospel powerhouse — daughters of Fairfield Four founder Rev. Sam McCrary, backing Bob Dylan and more since 2010.",
    borderColor: "border-teal",
    cardClass: "card-b",
  },
  {
    name: "Angie K",
    image: images.angieK,
    bio: 'Apple Music "Trailblazer" with 35M+ streams, fresh off main stages at Country Thunder and Tortuga.',
    borderColor: "border-yellow",
    cardClass: "card-a",
  },
  {
    name: "Terri Clark",
    image: images.terriClark,
    bio: "The only Canadian female member of the Grand Ole Opry, with over five million albums sold and 13 Top 10 singles.",
    borderColor: "border-pink-600",
    cardClass: "card-b",
  },
  {
    name: "Bobby Messano",
    initials: "BM",
    bio: "Veteran blues-rock guitarist, songwriter and producer with decades on stages and studios across the country.",
    borderColor: "border-teal",
    cardClass: "card-a",
  },
];

export const marqueeArtistNames = lineupArtists.map((a) => a.name.toUpperCase());

// PENDING CLIENT COPY (JJ-02): Headline still references eight acts; project lead will supply replacement copy for seven-act lineup.
export const lineupHeadline = {
  line1: "EIGHT ACTS.",
  line2: "ONE NIGHT.",
};
