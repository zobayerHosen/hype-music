import { v4 as uuidv4 } from "uuid";
import music_1 from "@/assets/images/music_4.png";
import music_2 from "@/assets/images/music_2.png";
import music_3 from "@/assets/images/music_3.png";
import music_4 from "@/assets/images/music_4.png";
import music_5 from "@/assets/images/music_5.png";
import music_6 from "@/assets/images/music_6.png";
import arijit from "@/assets/images/arijit.jpg";
import ed_sharen from "@/assets/images/ed_sharen.jpg";
import charlie_puth from "@/assets/images/charlie_puth.jpg";

export const musicData = [
  {
    // uuid ---> universal unique identifier
    id: uuidv4(),
    cover: music_1,
    title: "Kabira",
    artist: "Arijit Singh & Harshdeep Kaur",
    genre: "Folk",
  },
  {
    id: uuidv4(),
    cover: music_2,
    title: "Sun Saathiya",
    artist: "Priya Saraiya",
    genre: "Pop",
  },
  {
    id: uuidv4(),
    cover: music_3,
    title: "Tum Jo Aaye",
    artist: "Jubin Nautiyal & Alka Yagnik",
    genre: "Romantic",
  },
  {
    id: uuidv4(),
    cover: music_4,
    title: "Pee Loon",
    artist: "Mohit Chauhan",
    genre: "Romantic",
  },
  {
    id: uuidv4(),
    cover: music_5,
    title: "Phoolon Ka Taron Ka",
    artist: "R.D. Burman & Kishore Kumar",
    genre: "Classical",
  },
  {
    id: uuidv4(),
    cover: music_6,
    title: "Tum Mile",
    artist: "Neeraj Shridhar",
    genre: "Pop",
  },
  {
    id: uuidv4(),
    cover: music_1,
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva & Tulsi Kumar",
    genre: "Soul",
  },
  {
    id: uuidv4(),
    cover: music_2,
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    genre: "Classical",
  },
  {
    id: uuidv4(),
    cover: music_3,
    title: "Raabta",
    artist: "Arijit Singh",
    genre: "Electronic",
  },
  {
    id: uuidv4(),
    cover: music_4,
    title: "Galliyan",
    artist: "Ankit Tiwari",
    genre: "Pop",
  },
  {
    id: uuidv4(),
    cover: music_5,
    title: "Tera Hone Laga Hoon",
    artist: "Atif Aslam",
    genre: "Rock",
  },
  {
    id: uuidv4(),
    cover: music_6,
    title: "Jeene Laga Hoon",
    artist: "Atif Aslam & Shreya Ghoshal",
    genre: "Romantic",
  },
];

export const topArtistData = [
  {
    id: uuidv4(),
    name: "Arijit Singh",
    image: arijit,
  },
  {
    id: uuidv4(),
    name: "Ed Sharen",
    image: ed_sharen,
  },
  {
    id: uuidv4(),
    name: "Charlie Puth",
    image: charlie_puth,
  },
  {
    id: uuidv4(),
    name: "Arijit Singh",
    image: arijit,
  },
  {
    id: uuidv4(),
    name: "Ed Sharen",
    image: ed_sharen,
  },
  {
    id: uuidv4(),
    name: "Charlie Puth",
    image: charlie_puth,
  },
  {
    id: uuidv4(),
    name: "Arijit Singh",
    image: arijit,
  },
  {
    id: uuidv4(),
    name: "Arijit Singh",
    image: arijit,
  },
];

export const albums = [
  {
    id: uuidv4(),
    title: "Hip Hop Song Album",
    cover: music_1,
  },
  {
    id: uuidv4(),
    title: "Pop Song Album",
    cover: music_4,
  },
  {
    id: uuidv4(),
    title: "Jazz Song Album",
    cover: music_3,
  },
  {
    id: uuidv4(),
    title: "Country Song Album",
    cover: music_2,
  },
  {
    id: uuidv4(),
    title: "Hip Hop Song Album",
    cover: music_5,
  },
];
