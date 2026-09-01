import Image from "next/image";
import { images } from "@/lib/images";

type Artist = {
  name: string;
  bio: string;
  initials?: string;
  image?: string;
  borderColor: "border-teal" | "border-yellow" | "border-pink-600";
  cardClass: "card-a" | "card-b";
};

const artists: Artist[] = [
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
  {
    name: "Wendy Moten",
    image: images.wendyMoten,
    bio: 'Memphis-born vocalist known as "The Voice" — runner-up on NBC\'s The Voice and one of music\'s most in-demand background singers.',
    borderColor: "border-yellow",
    cardClass: "card-b",
  },
];

export function Lineup() {
  return (
    <section id="lineup" className="bg-ink-900 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="font-tag uppercase text-xs tracking-widest text-cream-100/50 mb-1 text-center">
          The Lineup
        </p>
        <h2 className="font-display text-5xl sm:text-6xl text-cream-100 text-center mb-12">
          EIGHT ACTS.
          <br className="sm:hidden" /> ONE NIGHT.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className={`${artist.cardClass} bg-ink-800 border-t-4 ${artist.borderColor} p-5`}
            >
              {artist.image ? (
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={375}
                  className="aspect-[4/5] w-full object-cover mb-4"
                />
              ) : (
                <div className="aspect-[4/5] bg-ink-900 flex items-center justify-center mb-4">
                  <span className="font-display text-6xl text-cream-100">
                    {artist.initials}
                  </span>
                </div>
              )}
              <p className="font-heading text-xl text-cream-100">
                {artist.name}
              </p>
              <p className="text-sm mt-2 leading-snug text-cream-100/70">
                {artist.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
